var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	id: String,
	email: String,
	fullName: String,
	address: String,
	phoneNumber: Boolean,
	membership: String,
	credit: String
});

module.exports = mongoose.model("user", userSchema);