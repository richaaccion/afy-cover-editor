var userDbHelper = function() {
	this.userModel = require("../../../models/db/userModel");
}

userDbHelper.prototype.filterUser = function(filterQuery, callback) {
	this.userModel.find(filterQuery, (err, userRes) => {
		if (err) {
			callback({success: false, response: "db_query_failed"});
		} else if (Array.isArray(userRes)){
			callback({success: true, response: (userRes.length === 1) ? userRes[0] : userRes})
		} else {
			callback({success: false, response: "internal_server_error"})
		}
	});
}

userDbHelper.prototype.findUser = function(filterQuery, callback) {
	this.userModel.findOne(filterQuery, (err, userRes) => {
		if (err) {
			callback({success: false, response: "db_query_failed"});
		} else {
			callback({success: true, response: userRes})
		}
	});	
}

module.exports = new userDbHelper();