responseFormatterClass = function(app) {
	this.abc = "pqr";
	this.init = function() {
		console.log("RESPONSEFORMATTER INIT CALLED>.");
	}
}

responseFormatterClass.prototype.createResponse = function(status,data, error_code) {

}

module.exports = responseFormatterClass;