const userBookController = function(fastify) {
	this.fastify = fastify;
	this.userBookModel = require("../../models/db/userBookModel");
	this.userBookDbHelper = require("../helpers/dbHelper/userBookDbHelper");
	
}

userBookController.prototype.addUserBook = function(req, res) {
	var validationRes = validateAddUserBook(req);
	var self = this;
	if (validationRes.success === true) {
		var bookId = req.body.book_id;
		var userId = req.body.user_id;

		this.userBookDbHelper.filterUserBook({bookId: bookId, userId: userId}, function(userBookRes) {
			if(userBookRes.success) {
				// get template id: 
				responseObj = self.fastify.responseFormatter.createResponse(true, userBookRes.response);
			} else {
				responseObj = self.fastify.responseFormatter.createResponse(false, userBookRes.response);
			}
			res.send(responseObj);
		});
	} else {
		responseObj = this.fastify.responseFormatter.createResponse(false, validationRes.resKey);
		res.send(responseObj);
	}
}

function validateAddUserBook(req) {
	var validationRes;
	if (!req.body.book_id) {
		validationRes = {
			success: false,
			resKey: "empty_book_id"
		}
	} else if (!req.body.user_id) {
		validationRes = {
			success: false,
			resKey: "empty_user_id"
		}
	} else {
		validationRes = {
			success: true,
			resKey: "validated" // to keep uniformity unused key is added to json object
		}
	}

	return validationRes;
}

userBookController.prototype.updateUserBook = function(req, res) {
	var responseObj = {
		"success": true,
		"data": {},
		"error": null
	}
	res.send(responseObj);
}

userBookController.prototype.getUserBook = function(req, res) {
	var userId = req.params.id;

	var responseObj;

	if (userId == 1) {
		responseObj = {
			"success": true,
			"data": {
			    user_book_id: 1,
			    user_id: 1,
			    book_id: 1,
			    save_mode: "draft",
			    sections: [{
			        id: "cover",
			        template_id: 1,
			        elements: [{
			            id: "profile_pic",
			            is_editable: true,
			            type: "image",
			            top: 15,
			            left: 15,
			            height: 15,
			            width: 15,
			            rotation_angle: 0,
			            default_value: "image.jpg"
			        }, {
			            id: "book_title",
			            is_editable: true,
			            type: "text",
			            top: 15,
			            left: 15,
			            height: 15,
			            width: 15,
			            rotation_angle: 0,
			            default_value: "Selling Secrets"
			        }, {
			            id: "spine_text",
			            is_editable: false,
			            type: "text",
			            top: 15,
			            left: 15,
			            height: 15,
			            width: 15,
			            rotation_angle: 0,
			            default_value: "book_title"
			        }]
			    }]
			}
		}
	} else {
		responseObj = {
			"success": false,
			"data": null,
			"error": {
				code: 403,
				type: "user_book_not_found"
			}
		}
	}

	res.send(responseObj);
}
module.exports = userBookController;