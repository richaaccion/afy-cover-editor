const fp = require('fastify-plugin');

module.exports  = fp(async function(fastify, options, next) {
	fastify.register(require('./loginRoutes'));
	fastify.register(require('./userRoutes'));

	next();
});