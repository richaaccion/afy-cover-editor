const config = require("../../../config/config");
const path = require("path");
const mongodb = require("mongodb");

databaseConnectorClass = function(app) {
	this.init = function() {
		console.log("database name: ", path.join(config.database.url, config.database.dbname));
		mongodb.MongoClient.connect(config.database.url + "/" + config.database.dbname)
		.then((client) => {
			app.register(require('fastify-mongodb'), { client: client });
		})
		.catch((err) => {
			console.log("!!!errror", err);
		})
	}
}

module.exports = databaseConnectorClass;