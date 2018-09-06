const fp = require('fastify-plugin');
// const controllersClass = require('../lib/controllers');

module.exports  = fp(function(fastify, options, next) {
	// var controllers = new controllersClass(fastify);
	// fastify.register(require('./templateRoutes'), {controllers: controllers});
	// fastify.register(require('./bookRoutes'), {controllers: controllers});
	require("../../lib/userBook/models/dbModel");
	require("./userModel");
	require("./bookModel");
	require("./templateModel");
	next();
});