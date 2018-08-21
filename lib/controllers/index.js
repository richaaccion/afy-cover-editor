const fp = require('fastify-plugin');

module.exports  = fp(async function(fastify, options, next) {
	console.log("CONTROLLER INDEX.");
	fastify.register(require('./loginController'));
	// fastify.register(require('./userController'));

	next();
});