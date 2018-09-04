const fp = require('fastify-plugin');
const databaseConnectorClass = require('./databaseConnectorClass');

module.exports  = fp(async function(app, options, next) {
	app.decorate('databaseConnector', await databaseConnectorInterface());
	next();
})

const databaseConnectorInterface = async function() {
	const instance = new databaseConnectorClass();
	return instance;
}