const fp = require('fastify-plugin');
const fastifySwaggerWrapperClass = require('./fastifySwaggerWrapperClass');

module.exports  = fp(async function(fastify, options, next) {
	fastify.decorate('fastifySwagger', fastifySwaggerWrapper(fastify));
	next();
})

const fastifySwaggerWrapper = function(app) {
	const instance = new fastifySwaggerWrapperClass(app);
	return instance;
}