const fp = require('fastify-plugin');
const databaseConnectorClass = require('./databaseConnectorClass');

module.exports  = fp(async function(app, options, next) {
	app.decorate('databaseConnector', await databaseConnectorInterface());
	next();
})

const databaseConnectorInterface = async function() {
	console.log("Inside interface");
	const instance = new databaseConnectorClass();
	return instance;
}