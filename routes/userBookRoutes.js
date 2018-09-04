module.exports = function userBookRoutes(fastify, options, next) {
	this.controllers = options.controllers;

	const userBookNewRouteOptions = {
	  schema: {
	  	tags: ['userbook'],
	  	params: {
	      type: 'object',
	      properties: {
	        user_id: {
	          type: 'string',
	          description: 'user id'
	        },
	        book_id: {
	        	type: 'string',
	        	description: 'book id'
	        }
	      }
	    },
	  }
	}
	fastify.post("/userbook/new", userBookNewRouteOptions, (req, res) => {
		console.log("------------------HIT-------------");
		this.controllers.userBookController.addUserBook(req, res)
	});

	const userBookUpdateRouteOptions = {
	  schema: {
	  	tags: ['userbook'],
	  	params: {
	      type: 'object',
	      properties: {
	        id: {
	          type: 'string',
	          description: 'user book id'
	        },
	        userId: {
	          type: 'string',
	          description: 'user id'	
	        },
	        book_id: {
	        	type: 'string',
	        	description: 'book id'
	        },
	        saveMode: {
	        	type: 'string',
	        	description: 'draft | final'
	        },
	        sections: {
	        	type: 'array',
	        	description: 'list of sections',
	        	items: {
	        		sectionId: {
	        			type: 'string',
	        			description: 'id of the section like cover, intro etc'
	        		},
	        		templateId: {
	        			type: 'string',
	        			description: 'template id'
	        		},
	        		elements: {
	        			type: 'array',
	        			description: 'list of elements in the template',
	        			items: {
	        				elementId: {
	        					type: 'string',
	        					description: 'id of the element picked from the template',
	        				},
	        				type: {
	        					type: 'string',
	        					description: 'image or text'
	        				},
	        				value: {
	        					type: 'string',
	        					description: 'value of the element'
	        				}
	        			}
	        		}
	        	}
	        }
	      }
	    },
	  }
	}
	fastify.post("/userbook/:id/save", userBookUpdateRouteOptions, (req, res) => {
		this.controllers.userBookController.updateUserBook(req, res)
	});


	const getUserBookOptions = {
	  schema: {
	  	tags: ['userbook'],
	  	params: {
	      type: 'object',
	      properties: {
	        id: {
	          type: 'string',
	          description: 'user book id'
	        }
	      }
	    },
	  }
	}
	fastify.get("/userbook/:id", getUserBookOptions, (req, res) => {
		this.controllers.userBookController.getUserBook(req, res)
	});
	next();
}