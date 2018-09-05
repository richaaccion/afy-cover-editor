var templateDbHelper = function() {
	this.templateModel = require("../../../models/db/templateModel");
}

templateDbHelper.prototype.filterTemplate = function(filterQuery, callback) {
	this.templateModel.find(filterQuery, (err, templateRes) => {
		if (err) {
			callback({success: false, response: "db_query_failed"});
		} else if (Array.isArray(templateRes)){
			callback({success: true, response: (templateRes.length === 1) ? templateRes[0] : templateRes})
		} else {
			callback({success: false, response: "internal_server_error"})
		}
	});
}

module.exports = new templateDbHelper();