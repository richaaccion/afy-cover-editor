var bookDbHelper = function() {
	this.bookModel = require("../../../models/db/bookModel");
	this.userBookModel = require("../../../models/db/userBookModel");
}

bookDbHelper.prototype.filterBook = function(filterQuery, callback) {
	this.bookModel.find(filterQuery, (err, bookRes) => { // bookRes will always be an array
		if (err) {
			callback({success: false, response: "db_query_failed"});
		} else if (Array.isArray(bookRes)){
			callback({success: true, response: (bookRes.length === 1) ? bookRes[0] : bookRes})
		} else {
			callback({success: false, response: "internal_server_error"})
		}
	});
}

module.exports = new bookDbHelper();