const express = require("express");
const chokidar = require("chokidar");
const http = require("http");
const { debug } = require("./debug.cjs");

const path = require("path");
const PORT = 8080;

const app = express();
const staticPath = path.resolve(__dirname, "..", "dist");

app.use("/", express.static(staticPath));
app.use("*", (_, res) => res.sendFile(path.resolve(staticPath, "index.html")));
app.listen(PORT, () => {
	debug(`Listening to port ${PORT}`);
});

// Autoreload
/** @type http.ServerResponse[] */
const clients = [];
const AUTORELOAD_PORT = 35729;
const autoreloadServer = http.createServer((req, res) => {
	res.setHeader("Content-Type", "text/event-stream");
	res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
	clients.push(res);
	req.on("close", () => {
		const idx = clients.indexOf(res);
		clients.splice(idx, 1);
	});
});
const reload = () => {
	clients.forEach((client) => {
		client.write("event: reload\ndata: \n\n");
	});
};

autoreloadServer.listen(AUTORELOAD_PORT);
chokidar.watch(staticPath).on("all", (event) => {
	if (event == "change") {
		reload();
		debug(`Site reloaded`);
	}
});
