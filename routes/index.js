const fp = require('fastify-plugin');
const controllersClass = require('../lib/controllers');

module.exports  = fp(function(fastify, options, next) {
	var controllers = new controllersClass(fastify);
	fastify.register(require('./templateRoutes'), {controllers: controllers});
	fastify.register(require('./bookRoutes'), {controllers: controllers});
	fastify.register(require('./userBookRoutes'), {controllers: controllers});

	next();
});