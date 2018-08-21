module.exports = function loginController(fastify, options, next) {
	console.log("DECORATING LOGIN CONTROLLER");
	fastify.decorate('logincontroller', () => {
		var loginControllerClass = function() {
			this.controllerVal = "value 1";
		}

		return loginControllerClass;
	})
	next();
}