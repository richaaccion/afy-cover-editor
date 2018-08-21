module.exports = function loginRoutes(fastify, options, next) {
	fastify.get("/templates", (req, res) => {
		var templateList = [{
			template1: {
				thumbnail_url: "http://localhost:9000/template/template1/thumbnail.png",
				template_name: "Template 1",
				template_id: 1
			}
		}];

		res.send({
			success: true,
			data: templateList,
			error: null
		});
	});
	next();
}