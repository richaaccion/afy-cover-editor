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

module.exports = function loginRoutes(fastify, options, next) {
	// get all templates
	fastify.get("/templates", (req, res) => {

		res.send({
			success: true,
			data: templateList,
			error: null
		});
	});

	// get specific template
	fastify.get("/template/:id", (req, res) => {
		var templateId = req.params.id;

		var responseObj;
		if (templateList[templateId]) {
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
		}
	});


	fastify.post("/template/:id", (req, res) => {
		var templateId = req.params.id;

		var responseObj;
		if (templateList[templateId]) {
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
			var updatedTemplate = templateHBS.replace(/{{authorBio}}/g, req.body.bio).replace(/{{authorName}}/g, req.body.author).replace(/{{bookTitle}}/g, req.body.bookTitle).replace(/{{svg_image}}/g, backgroundImageSvg).replace(/{{bookDescription}}/g, req.body.bookDescription);

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
		}
	});
	next();
}