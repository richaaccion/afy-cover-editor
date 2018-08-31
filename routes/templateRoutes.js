const config = require("../config/config");
const path = require("path");
const fs =  require("fs");

var templateList = {
	1: {
		thumbnailUrl: "http://localhost:9000/template/template1/thumbnail.png",
		templateName: "template1",
		templateId: 1,
		defaultData: {
			author: "John Doe",
			bookTitle: "Selling Secret Demo",
			bookDescription: "This is example description",
			bio: "This is example bio"
		}
	}
}

module.exports = function templateRoutes(fastify, options, next) {
	// get specific template
	const getTemplateByIdRouteOptions = {
	  schema: {
	  	tags: ['template'],
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
	fastify.get("/template/:id", getTemplateByIdRouteOptions, (req, res) => {
		var templateId = req.params.id;
		var responseObj;
		if (templateList[templateId]) {
			responseObj = {
				"success": true,
				"data": {
				    id: 1,
				    name: "Template 1",
				    book_id: 1,
				    section_name: "cover",
				    featured: true,
				    thumbnail_url: "http://localhost:9000/books/1/template1/cover/thumb.jpg",
				    background_svg_url: "http://localhost:9000/books/1/template1/cover/image.svg",
				    elements: [{
				        id: "profile_pic",
				        is_editable: true,
				        type: "image",
				        top: 150,
				        left: 150,
				        height: 150,
				        width: 150,
				        fontSize: 25,
				        fontFamily: "courier",
				        fontColor: "#000",
				        fontStyle: "",
				        rotation_angle: 0,
				        default_value: "image.jpg"
				    }, {
				        id: "book_title",
				        is_editable: true,
				        type: "text",
				        top: 250,
				        left: 250,
				        height: 250,
				        width: 250,
				        fontSize: 15,
				        fontFamily: "courier",
				        fontColor: "#000",
				        fontStyle: "",
				        rotation_angle: 0,
				        default_value: "Selling Secrets"
				    }, {
				        id: "spine_text",
				        is_editable: false,
				        type: "text",
				        top: 350,
				        left: 350,
				        height: 350,
				        width: 350,
				        fontSize: 35,
				        fontFamily: "courier",
				        fontColor: "#000",
				        fontStyle: "",
				        rotation_angle: 0,
				        default_value: "book_title"
				    }]
				},
				"error": null
			}
		} else {
			responseObj = {
				"success": false,
				"data": null,
				"error": {
					code: 403,
					type: "template_not_found"
				}
			}
		}

		res.send(responseObj);

		/*if (templateList[templateId]) {
			// get template name
			// read hbr
			// replace it with default text

			var templateDetail = templateList[templateId];
			var templateFolder = path.join(__dirname, "../", config.template.dir, templateDetail.templateName);


			var backgroundTemplateFullPath = path.join(templateFolder, "background_template.hbr")
			var templateFullPath = path.join(templateFolder, "template.hbs");
			var profilePicImage = path.join(templateFolder, "deafult_profile.jpg");
			var backgroundImage = path.join(templateFolder, "background-image.png");
			var backgroundImageSvg = "http://dev.authorify.com/afy-api-demo/template/" + templateDetail.templateName + "/output.svg";

			var templateSVG = fs.readFileSync(backgroundTemplateFullPath).toString();
			
			var updatedSVG = templateSVG.replace(/{{back_profile_pic}}/g, profilePicImage).replace(/{{front_profile_pic}}/g, profilePicImage).replace(/{{background_image}}/g, backgroundImage);

			var templateHBS = fs.readFileSync(templateFullPath).toString();
			var updatedTemplate = templateHBS.replace(/{{authorBio}}/g, templateDetail.defaultData.bio).replace(/{{authorName}}/g, templateDetail.defaultData.author).replace(/{{bookTitle}}/g, templateDetail.defaultData.bookTitle).replace(/{{svg_image}}/g, backgroundImageSvg).replace(/{{bookDescription}}/g, templateDetail.defaultData.bookDescription);

			templateList[templateId]["html"] = updatedTemplate;

			fs.writeFileSync(path.join(templateFolder, "output.svg"), updatedSVG);
			responseObj = {
				success: true,
				data: templateList[templateId],
				error: null
			}
			res.send(responseObj);
		} else {
			responseObj = {
				success: false,
				data: null,
				error: "template_not_found"
			}

			res.send(responseObj);
		}*/
	});
	next();
}