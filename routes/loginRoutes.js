module.exports = function loginRoutes(fastify, options, next) {
	fastify.get("/login", (req, res) => {
		res.send("login page called");
	});
	next();
}