const bookController = function(fastify) {
	this.fastify = fastify;
	
}

bookController.prototype.getBookList = function(req, res) {
	var responseObj = {
		"success": true,
		"data": [{
		    id: 1,
		    name: "Real Estate Books",
		    category: "real_estate",
		    thumbnail_url: "http://localhost:9000/books/1/thumb.jpg", 
		    sections: [{
		        id: "cover",
		        optional: false,
		        thumbnail_url: "http://localhost:9000/books/1/template1/cover/thumb.jpg",
		    },{
		        id: "praise",
		        optional: false,
		        thumbnail_url: "http://localhost:9000/books/1/template1/praise/thumb.jpg",
		    },{
		        id: "intro",
		        optional: false,
		        thumbnail_url: "http://localhost:9000/books/1/template1/intro/thumb.jpg",
		    }] 
		}, {
		    id: 2,
		    name: "How to Sell Books",
		    category: "real_estate",
		    thumbnail_url: "http://localhost:9000/books/2/thumb.jpg", 
		    sections: [{
		        id: "cover",
		        optional: false,
		        thumbnail_url: "http://localhost:9000/books/2/template1/cover/thumb.jpg",
		    },{
		        id: "praise",
		        optional: false,
		        thumbnail_url: "http://localhost:9000/books/2/template1/praise/thumb.jpg",
		    },{
		        id: "intro",
		        optional: false,
		        thumbnail_url: "http://localhost:9000/books/2/template1/intro/thumb.jpg",
		    }] 
		}],
		"error": null
	}

	res.send(responseObj);
}

bookController.prototype.getBookById = function(req, res) {
	var bookId = req.params.id;
	var responseObj;
	if (bookId == 1) {
		responseObj = {
			"success": true,
			"data": {
			    id: 1,
			    name: "Real Estate Books",
			    category: "real_estate",
			    thumbnail_url: "http://localhost:9000/books/1/thumb.jpg",
			    sections: [{
			        id: "cover",
			        optional: false,
			        thumbnail_url: "http://localhost:9000/books/1/template1/cover/thumb.jpg"
			    },{
			        id: "praise",
			        optional: false,
			        thumbnail_url: "http://localhost:9000/books/1/template1/praise/thumb.jpg",
			    },{
			        id: "intro",
			        optional: false,
			        thumbnail_url: "http://localhost:9000/books/1/template1/intro/thumb.jpg",
			    }]
			},
			"error": null
		} 
	} else {
		responseObj = {
			success: false,
			data: null,
			error: {
				code: 403,
				type: "book_not_found"
			}
		}
	}

	res.send(responseObj);
}

bookController.prototype.getBookSection = function(req, res) {
	var bookId = req.params.id;
	var sectionId = req.params.sectionId;
	var responseObj;
	if (bookId == 1) {
		if (sectionId == 2) {
			responseObj = {
				"success": true,
				"data": {
				    id: 1,
				    name: "Real Estate Books",
				    category: "real_estate",
				    thumbnail_url: "http://localhost:9000/books/1/thumb.jpg",
				    sections: [{
				        id: "cover",
				        optional: false,
				        thumbnail_url: "http://localhost:9000/books/1/template1/cover/thumb.jpg"
				    },{
				        id: "praise",
				        optional: false,
				        thumbnail_url: "http://localhost:9000/books/1/template1/praise/thumb.jpg",
				    },{
				        id: "intro",
				        optional: false,
				        thumbnail_url: "http://localhost:9000/books/1/template1/intro/thumb.jpg",
				    }]
				},
				"error": null
			}
		} else {
			responseObj = {
				success: false,
				data: null,
				error: {
					code: 403,
					type: "section_not_found"
				}
			}
		}
	} else {
		responseObj = {
			success: false,
			data: null,
			error: {
				code: 403,
				type: "book_not_found"
			}
		}
	}

	res.send(responseObj);
}

module.exports = bookController;