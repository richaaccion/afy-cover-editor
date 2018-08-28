const errorCodes = require("../../../config/errorCodes");

responseFormatterClass = function(app) {
	this.errorObj = errorCodes;
	this.init = function() {
	}
}

responseFormatterClass.prototype.createResponse = function(status, responseDetails) {
	var responseObject = {}
	if(status === false) {
		responseObject.status = status;
		responseObject.data = null;
		responseObject.error = {
			code: responseDetails,
			type: this.errorObj[responseDetails]
		}
	} else {
		responseObject.status = status;
		responseObject.error = null;
		responseObject.data = responseDetails;
	}

	return responseObject;
}

module.exports = responseFormatterClass;