const userController = require('./userController');
const loginController = require('./loginController');

const controllers = function(fastify) {
	this.userController = new userController(fastify);
	this.loginController = new loginController(fastify);
}

module.exports  = controllers;