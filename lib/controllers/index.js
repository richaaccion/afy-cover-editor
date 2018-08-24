const userController = require('./userController');
const loginController = require('./loginController');

const controllers = function() {
	this.userController = userController;
	this.loginController = loginController;
}

module.exports  = new controllers();