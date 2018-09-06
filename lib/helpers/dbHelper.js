const mongoose = require("mongoose");

const dbHelper = function() {

}

dbHelper.prototype.filterQuery = function(filterQuery, collectionName) {
	var modelObj = mongoose.model(collectionName)
	return new Promise((resolve, reject) => {
		modelObj.find(filterQuery, (err, queryRes) => {
			if (err) reject(err);
			resolve(queryRes);
		})
	});
}

dbHelper.prototype.findOneQuery = function(filterQuery, collectionName) {
	var modelObj = mongoose.model(collectionName)
	return new Promise((resolve, reject) => {
		modelObj.findOne(filterQuery, (err, queryRes) => {
			if (err) {console.log("query: ", err); reject(err);}
			resolve(queryRes);
		});
	});
}

module.exports = new dbHelper();