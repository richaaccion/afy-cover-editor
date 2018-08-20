const fp = require('fastify-plugin');

module.exports  = fp(async function(fastify, options, next) {
	// fastify.decorate('routes', routesInterface(fastify));	
	fastify.get("/", function(req, res) {
		res.send("working");
	});
	next();
})

const routesClass = function() {

}

const routesInterface = function(app) {
	const instance = Object.create(routesClass);

	instance.init = initRoutes;

	return instance;
}

function initRoutes(app) {
	console.log("init routes hit");
	console.log(app);
	app.get('/', function(req, res){
		res.send("working here");
	});
}