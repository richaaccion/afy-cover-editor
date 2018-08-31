module.exports = function bookRoutes(fastify, options, next) {
	this.controllers = options.controllers;

	const getBookListRouteOptions = {
	  schema: {
	  	tags: ['book']
	  }
	}
	fastify.get("/book/list", getBookListRouteOptions, (req, res) => {
		this.controllers.bookController.getBookList(req, res)
	});


	const getBookByIdRouteOptions = {
	  schema: {
	  	tags: ['book'],
	  	params: {
	      type: 'object',
	      properties: {
	        id: {
	          type: 'string',
	          description: 'id'
	        }
	      }
	    },
	  }
	}
	fastify.get("/book/:id", getBookByIdRouteOptions, (req, res) => {
		this.controllers.bookController.getBookById(req, res)
	});

	const getBookSectionsRouteOptions = {
	  schema: {
	  	tags: ['book'],
	  	params: {
	      type: 'object',
	      properties: {
	        id: {
	          type: 'string',
	          description: 'book id'
	        },
	        sectionId: {
	        	type: 'string',
	        	description: 'section id'
	        }
	      }
	    },
	  }
	}
	fastify.get("/book/:id/:sectionId", getBookSectionsRouteOptions, (req, res) => {
		this.controllers.bookController.getBookSection(req, res)
	});
	next();
}