module.exports = function userController(fastify, options, next) {
	fastify.decorate('usercontroller', () => {
		var userController = function() {
			this.controllerVal2 = "value 2";
		}

		return userController;
	})
	next();
}