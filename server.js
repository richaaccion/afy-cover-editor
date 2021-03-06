const path = require('path');
const config = require('./config/config')
const server = require('fastify')({logger: true});

server.register(require('fastify-static'), {
		root: path.join(__dirname, 'assets')
	})
	.register(require('fastify-cors'))
	.register(require('fastify-formbody'))
	.register(require(path.join(__dirname, 'lib/plugins/responseFormatter')))
	.after(err => {
		server.responseformatter.init();
	})
	.register(require(path.join(__dirname, 'lib/plugins/databaseConnector')))
	.after(err => {
		console.log("LAST---", server.databaseConnector);
		server.databaseConnector.init();
	})
	.register(require(path.join(__dirname, 'routes')));

server.ready((err) => {
	if (err) {
		process.exit(1);
	}

	server.listen(config.server.port);
});
