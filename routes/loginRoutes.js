module.exports = function loginRoutes(fastify, options, next) {
	this.controllers = options.controllers;
	fastify.get("/login", (req, res) => {
		res.send("login page called");
	});
	next();
}