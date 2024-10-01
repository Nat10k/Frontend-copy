const getTime = () => {
	const t = new Date();
	const f = (s) => ("0" + s).slice(-2);
	return `${f(t.getHours())}:${f(t.getMinutes())}:${f(t.getSeconds())}`;
};

const debug = (...str) => {
	console.debug(`[${getTime()}]`, ...str);
};

module.exports = { debug };
