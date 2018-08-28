module.exports = function loginRoutes(fastify, options, next) {
	this.controllers = options.controllers;
	fastify.get("/login", (req, res) => {
		
		this.controllers.loginController.getLogin(req, res)
	});
	next();
}