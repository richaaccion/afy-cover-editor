const fp = require('fastify-plugin');
const databaseConnectorClass = require('./databaseConnectorClass');

module.exports  = fp(async function(fastify, options, next) {
	console.log("db connector called -------------------");
	fastify.decorate('databaseConnector', databaseConnectorInterface(fastify).then(function(res){
		console.log("dbconnector interface done;;;", res);
		next();
	}));
})

const databaseConnectorInterface = async function(app) {
	const instance = new databaseConnectorClass(app);
	return instance;
}