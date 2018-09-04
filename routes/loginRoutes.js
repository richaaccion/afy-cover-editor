module.exports = function loginRoutes(fastify, options, next) {
	this.controllers = options.controllers;

	const loginRouteOptions = {
	  schema: {
	  	tags: ['login'],
	    response: {
	      200: {
	        type: 'object',
	        properties: {
	          status: { type: 'boolean' },
	          error: {type: 'object'},
	          data: {type: 'object'}
	        }
	      }
	    }
	  }
	}
	fastify.get("/login", loginRouteOptions, (req, res) => {
		console.log("RICHA JOSHI");
		this.controllers.loginController.getLogin(req, res)
	});
	next();
}