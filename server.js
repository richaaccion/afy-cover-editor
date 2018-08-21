const path = require('path');
const config = require('./config/config')
const server = require('fastify')({logger: true});

server.register(require('fastify-cors'))
	.register(require(path.join(__dirname, '/lib/plugins/responseFormatter')))
	.after(err => {
		console.log("1-> ", server.responseformatter);
		server.responseformatter.init();
	})
	.register(require('./routes'));

server.ready((err) => {
	if (err) {
		console.log(err);
		process.exit(1);
	}

	console.log("starting server");
	server.listen(config.server.port);
});
