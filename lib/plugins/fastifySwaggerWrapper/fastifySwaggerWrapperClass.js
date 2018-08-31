fastifySwaggerWrapperClass = function(app) {
	this.app = app;
	this.app.register(require('fastify-swagger'), {
	  routePrefix: '/documentation',
	  exposeRoute: true,
	  swagger: {
	    info: {
	      title: 'Authorify Swagger Documentation',
	      description: 'Testing the authorify backend apis',
	      version: '0.0.1'
	    },
	    externalDocs: {
	      url: 'https://swagger.io',
	      description: 'Find more info here'
	    },
	    host: '172.16.27.128:9000',
	    schemes: ['http'],
	    consumes: ['application/json'],
	    produces: ['application/json'],
	    tags: [
	    	{ name: 'template', description: 'Template related end points' },
	    	{ name: 'book', description: 'Book related end points' },
	    	{ name: 'userbook', description: 'User Book related end points' },
	    ],
	    securityDefinitions: {
	      apiKey: {
	        type: 'apiKey',
	        name: 'apiKey',
	        in: 'header'
	      }
	    }
	  }
	})
}

module.exports = fastifySwaggerWrapperClass;