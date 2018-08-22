module.exports = function loginRoutes(fastify, options, next) {
	console.log("fastify object -----------> ", fastify.responseformatter);
	this.controllers = options.controllers;
	fastify.get("/login", (req, res) => {
		console.log("controllers: ", this.controllers);
		res.send("login page called");
	});
	next();
}