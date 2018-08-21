module.exports = function loginController(fastify, options, next) {
	fastify.decorate('logincontroller', () => {
		var loginControllerClass = function() {
			this.controllerVal = "value 1";
		}

		return loginControllerClass;
	})
	next();
}