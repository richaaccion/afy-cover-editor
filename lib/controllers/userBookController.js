const userBookController = function(fastify) {
	this.fastify = fastify;
	
}

userBookController.prototype.addUserBook = function(req, res) {
	var bookId = req.query.book_id;
	var userId = req.query.user_id;

	var responseObj;

	if (userId == 1) {
		if (bookId == 1) {
			responseObj = {
				"success": true,
				"data": {
				    id: 1,
				    userId: 1, // id of the user who has created this book
				    bookId: 1, // id of the Book that is used to create this book
				    savedMode: 'draft', // draft | final
				    sections: []
				},
				"error": null
			}
		} else {
			responseObj = {
				"success": false,
				"data": null,
				"error": {
					code: 403,
					type: "book_not_found"
				}
			}
		}
	} else {
		responseObj = {
			"success": false,
			"data": null,
			"error": {
				code: 403,
				type: "user_not_found"
			}
		}
	}
	res.send(responseObj);
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