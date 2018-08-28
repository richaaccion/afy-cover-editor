const path = require("path");

const config = {
	server: {
	    address: '127.0.0.1',
	    port: 9000
	},
	template: {
		dir: "assets/template"
	},
	database: {
		url: "mongodb://localhost:27017",
		dbname: "authorify"
	}
}

module.exports = config;