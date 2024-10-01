const path = require("path");
const fs = require("fs");
const esbuild = require("esbuild");
const chokidar = require("chokidar");
const postcss = require("postcss");
const autoprefixer = require("autoprefixer");
const tailwind = require("tailwindcss");
const { debug } = require("./debug.cjs");

const inputPath = path.resolve(__dirname, "..", "src");
const outputPath = path.resolve(__dirname, "..", "dist");

const copyIgnoreExtenstions = new Set([".ts", ".tsx", ".css"]);
const copy = (sourceRelative) => {
	const extension = path.extname(sourceRelative);
	if (copyIgnoreExtenstions.has(extension)) return;

	const sourceAbsolute = path.resolve(inputPath, sourceRelative);
	const targetAbsolute = path.resolve(outputPath, sourceRelative);
	const targetDirectory = path.dirname(targetAbsolute);

	if (!fs.existsSync(targetDirectory))
		fs.mkdirSync(targetDirectory, { recursive: true });
	fs.copyFileSync(sourceAbsolute, targetAbsolute);
};

const buildCss = async () => {
	const cssSource = path.resolve(inputPath, cssFile);
	const cssTarget = path.resolve(outputPath, cssFile);

	const css = fs.readFileSync(cssSource);
	debug("Building css...");
	const plugins = [tailwind(), autoprefixer];
	const result = await postcss(plugins).process(css, {
		from: cssSource,
	});
	fs.writeFileSync(cssTarget, result.css);
};

const copyOnce = () => {
	const files = fs.readdirSync(inputPath, { recursive: true });
	for (const file of files) {
		const absolutePath = path.resolve(inputPath, file);
		if (fs.lstatSync(absolutePath).isFile()) copy(file);
	}
};

const cssFile = "index.css";
const copyWatch = () => {
	chokidar.watch(inputPath).on("all", (event, source) => {
		const sourceRelative = path.relative(inputPath, source);
		if (event == "add" || event == "change") {
			copy(sourceRelative);
			if (source.endsWith(cssFile)) buildCss();
		}
	});
};

/** @type esbuild.Plugin */
const esbuildPlugin = {
	name: "debug",
	setup(build) {
		build.onStart(() => {
			debug("Building script...");
		});

		build.onEnd(() => {
			buildCss();
		});
	},
};

const context = esbuild.context({
	entryPoints: [path.resolve(inputPath, "index.tsx")],
	bundle: true,
	outdir: outputPath,
	plugins: [esbuildPlugin],
});

const build = async () => {
	debug("Build mode");
	copyOnce();
	await (await context).rebuild();
	(await context).dispose();
	debug("Build finished");
};

const watch = async () => {
	debug("Watch mode");
	copyWatch();
	(await context).watch();
};

const watchMode = process.argv.includes("-w");
if (watchMode) watch();
else build();
