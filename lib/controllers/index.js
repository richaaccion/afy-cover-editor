const userController = require('./userController');
const loginController = require('./loginController');
const bookController = require('./bookController');
const userBookController = require('./userBookController');

const controllers = function(fastify) {
	this.userController = new userController(fastify);
	this.loginController = new loginController(fastify);
	this.bookController = new bookController(fastify);
	this.userBookController = new userBookController(fastify);
}

module.exports  = controllers;