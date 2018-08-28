const fastify = require("fastify")();
const mongoose = require("mongoose");

const loginController = function() {
	console.log("login controller called ");
}

loginController.prototype.getLogin = function(req, res) {

	var responseObj = {}

	if(!req.query.username) {
		responseObj = {
			status: false,
			data: null,
			error: {
				code: 403,
				message: "Empty Username"
			}
		}
	} else if (!req.query.password) {
		responseObj = {
			status: false,
			data: null,
			error: {
				code: 403,
				message: "Empty Password"
			}
		}
	} else {
		if (req.query.username === "ric" && req.query.password === "jos") {
			responseObj = {
				status: true,
				data: {
					code: 200,
					message: "Logged in successfully"
				},
				error: null
			}
		} else {
			responseObj = {
				status: false,
				data: null,
				error: {
					code: 403,
					message: "Invalid Username and Password"
				}
			}
		}
	}

	// res.status(responseObj.error ? responseObj.error.code : responseObj.data.code).send(responseObj);

	var userSchema = mongoose.Schema({
	    firstName: String,
	    lastName: String
	});

	var userModel = mongoose.model('user', userSchema);

	userModel.find({}, (err, dbRes) => {
		console.log("dbRes-> ", dbRes);
		res.send("ok");
	});

	// var user = new userModel({firstName: "ric", lastName: "jos"});
	/*user.save((err) => {
		console.log("user saved");
		res.send("Login through controller");
	});*/
}

module.exports = new loginController();