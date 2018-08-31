const fp = require('fastify-plugin');
const controllersClass = require('../lib/controllers');

module.exports  = fp(function(fastify, options, next) {
	var controllers = new controllersClass(fastify);
	fastify.register(require('./loginRoutes'), {controllers: controllers});
	fastify.register(require('./userRoutes'), {controllers: controllers});
	fastify.register(require('./templateRoutes'), {controllers: controllers});
	fastify.register(require('./bookRoutes'), {controllers: controllers});

	next();
});