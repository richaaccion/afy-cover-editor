const fp = require('fastify-plugin');
const controllers = require('../lib/controllers');

module.exports  = fp(function(fastify, options, next) {
	fastify.register(require('./loginRoutes'), {controllers: controllers});
	fastify.register(require('./userRoutes'), {controllers: controllers});
	fastify.register(require('./templateRoutes'), {controllers: controllers});

	next();
});