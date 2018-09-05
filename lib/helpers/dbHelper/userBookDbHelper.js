var userBookDbHelper = function() {
	this.userBookModel = require("../../../models/db/userBookModel");
}

userBookDbHelper.prototype.filterUserBook = function(filterQuery, callback) {
	this.userBookModel.find(filterQuery, (err, userBookRes) => { // userBookRes will always be an array
		if (err) {
			callback({success: false, response: "db_query_failed"});
		} else if (Array.isArray(userBookRes)){
			callback({success: true, response: (userBookRes.length === 1) ? userBookRes[0] : userBookRes})
		} else {
			callback({success: false, response: "internal_server_error"})
		}
	});
}

userBookDbHelper.prototype.updateUserBook = function(filterQuery, userBookDetails, callback) {
	this.userBookModel.findOneAndUpdate(filterQuery, userBookDetails, {upsert: true}, (err, res) => {
		if (err) {
			callback({success: false, response: "db_query_failed"});
		} else {
			callback({success: true}) // updated id will come here
		}
	})
}

module.exports = new userBookDbHelper();