const userController = require('./userController');

const controllers = function() {
	this.userController = userController;
}

module.exports  = new controllers();