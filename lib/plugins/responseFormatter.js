const fp = require('fastify-plugin');

function getResponse() {
	return {hello: "world"}
}

module.exports = fp(function responseFormatterPlugin(fastify, options, next) {
	fastify.decorate('responseFormatter', () => {
		getResponse: getResponse
	});
	next();
});