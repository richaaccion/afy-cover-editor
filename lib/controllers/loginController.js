const mongoose = require("mongoose");
var userSchema;

const loginController = function(fastify) {
	this.fastify = fastify;
	userSchema = mongoose.Schema({
	    firstName: String,
	    lastName: String
	});
	
}

loginController.prototype.getLogin = function(req, res) {
	// fastify = require("fastify")();

	var responseObj = {}

	if(!req.query.username) {
		responseObj = this.fastify.responseFormatter.createResponse(false, 422);
	} else if (!req.query.password) {
		responseObj = this.fastify.responseFormatter.createResponse(false, 422);
	} else {
		if (req.query.username === "ric" && req.query.password === "jos") {
			responseObj = this.fastify.responseFormatter.createResponse(true, {message: "login_success"});
		} else {
			responseObj = this.fastify.responseFormatter.createResponse(false, 403);
		}
	}

	

	var userModel = mongoose.model('user', userSchema);

	userModel.find({}, (err, dbRes) => {
		res.send(responseObj);
	});

	// var user = new userModel({firstName: "ric", lastName: "jos"});
	/*user.save((err) => {
		console.log("user saved");
		res.send("Login through controller");
	});*/
}

module.exports = loginController;