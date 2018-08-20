const path = require('path');
const config = require('./config/config')
const server = require('fastify')({logger: true});

server.register(require(path.join(__dirname, '/lib/plugins/responseFormatter')))
	.register(require('./routes/routes'));

console.log("start ", config);
server.ready((err) => {
	if (err) {
		console.log(err);
		process.exit(1);
	}

	console.log("starting server");
	server.listen(config.server.port);
});
