module.exports = function userRoutes(fastify, options, next) {
	console.log("fastify: -> ", fastify);
	fastify.get("/users/:id", (req, res) => {
		const userDetails = {
			username: "John Doe",
			email: "john@doe.com",
			address: "17, bakers street, Palo Alto",
			contact_number: "1234567890" 
		}

		res.send({
			success: true,
			data: userDetails,
			error: null
		});
	});
	next();
}