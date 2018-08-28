const config = require("../../../config/config");
const path = require("path");
const fastify = require('fastify')();
const mongoose = require("mongoose");

databaseConnectorClass = function() {
	var self = this;
	this.init = function() {
		mongoose.connect(config.database.url + "/" + config.database.dbname, (err) => {
			if (err) console.log("Error connecting to database: ", err);
		});
	}
}

module.exports = databaseConnectorClass;