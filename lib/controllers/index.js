const userController = require('./userController');
const loginController = require('./loginController');
const bookController = require('./bookController');

const controllers = function(fastify) {
	this.userController = new userController(fastify);
	this.loginController = new loginController(fastify);
	this.bookController = new bookController(fastify);
}

module.exports  = controllers;