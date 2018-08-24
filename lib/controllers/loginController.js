const fastify = require("fastify")();
const mongoose = require("mongoose");

const loginController = function() {
	console.log("login controller called ", fastify.databaseConnector);
}

loginController.prototype.getLogin = function(req, res) {
	var userSchema = mongoose.Schema({
	    firstName: String,
	    lastName: String
	});

	var userModel = mongoose.model('user', userSchema);

	var user = new userModel({firstName: "ric", lastName: "jos"});
	user.save((err) => {
		console.log("user saved");
		res.send("Login through controller");
	});
}

module.exports = new loginController();