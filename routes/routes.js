const fp = require('fastify-plugin');

module.exports  = fp(async function(fastify, options, next) {
	fastify.decorate('routes', routesInterface(fastify));
	next();
})

const routesClass = function(app) {
	this.init = function() {
		app.get('/', function(req, res){
			res.send("working here");
		});

		app.get("/users/:id", function(req, res) {
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
	}
}


const routesInterface = function(app) {
	const instance = new routesClass(app);
	return instance;
}
