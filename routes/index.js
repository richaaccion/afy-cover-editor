const fp = require('fastify-plugin');
const controllers = require('../lib/controllers');

console.log("routes@");
module.exports  = fp(function(fastify, options, next) {
	console.log("----------ROUTES----------");
	fastify.register(require('./loginRoutes'), {controllers: controllers});
	fastify.register(require('./userRoutes'), {controllers: controllers});
	fastify.register(require('./templateRoutes'), {controllers: controllers});

	next();
});