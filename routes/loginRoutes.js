module.exports = function loginRoutes(fastify, options, next) {
	this.controllers = options.controllers;

	const opts = {
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
	fastify.get("/login", opts, (req, res) => {
		this.controllers.loginController.getLogin(req, res)
	});

	fastify.put("/some-route/:id", (req, res) => {
		res.send("ok");
	});
	next();
}