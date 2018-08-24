module.exports = function loginRoutes(fastify, options, next) {
	this.controllers = options.controllers;
	console.log("databaseConnector: ", fastify.databaseConnector);
	fastify.get("/login", (req, res) => {
		console.log(this.controllers.loginController.getLogin(req, res));
	});
	next();
}