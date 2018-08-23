const fp = require('fastify-plugin');
const responseFormatterClass = require('./responseFormatterClass');

module.exports  = fp(async function(fastify, options, next) {
	fastify.decorate('responseformatter', responseFormatterInterface(fastify));
	next();
})

const responseFormatterInterface = function(app) {
	const instance = new responseFormatterClass(app);
	return instance;
}