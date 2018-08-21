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
			bookTitle: "Selling Secret Demo"
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
			var backgroundImageSvg = "http://localhost:9000/template/" + templateDetail.templateName + "/output.svg";

			console.log("backgroundImageSvg-> ", backgroundImageSvg);
			var templateSVG = fs.readFileSync(backgroundTemplateFullPath).toString();
			
			var updatedSVG = templateSVG.replace("{{back_profile_pic}}", profilePicImage).replace("{{front_profile_pic}}", profilePicImage).replace("{{background_image}}", backgroundImage);

			var templateHBS = fs.readFileSync(templateFullPath).toString();
			var updatedTemplate = templateHBS.replace("{{authorBio}}", templateDetail.defaultData.bio).replace("{{authorName}}", templateDetail.defaultData.author).replace("{{bookTitle}}", templateDetail.defaultData.bookTitle).replace("{{svg_image}}", backgroundImageSvg);

			console.log(updatedTemplate);
			fs.writeFileSync(path.join(templateFolder, "final.html"), updatedTemplate, function(err){
				if (err) {
					console.log("1 error occured: ", err);
				} else {
					console.log("1 file created;;");
				}
			});

			fs.writeFileSync(path.join(templateFolder, "output.svg"), updatedSVG, function (err) {
				if (err) {
					console.log("error occured: ", err);
				} else {
					console.log("file created;;");
				}

				responseObj = {
					success: true,
					data: templateList[templateId],
					error: null
				}

				res.send(responseObj);
			});
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