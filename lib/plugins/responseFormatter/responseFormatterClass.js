responseFormatterClass = function(app) {
	this.abc = "pqr";
	this.init = function() {
		console.log("RESPONSEFORMATTER INIT CALLED>.");
	}
}

module.exports = responseFormatterClass;