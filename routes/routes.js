const fp = require('fastify-plugin');
var app;

module.exports  = fp(async function(fastify, options, next) {
	fastify.decorate('routes', routesInterface(fastify));	
	app = fastify;
	/*fastify.get("/", function(req, res) {
		res.send("working");
	});

	fastify.get("/users/:id", function(req, res) {
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
	});*/

	next();
})

const routesClass = function() {

}

const routesInterface = function() {
	const instance = Object.create(routesClass);

	instance.init = initRoutes;

	return instance;
}

function initRoutes() {
	console.log("init routes hit");
	console.log(app);
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