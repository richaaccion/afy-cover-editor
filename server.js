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
		server.responseFormatter.init();
	})
	.register(require(path.join(__dirname, 'lib/plugins/databaseConnector')))
	.after((err) => {
		server.databaseConnector.init();
	})
	.register(require(path.join(__dirname, 'routes')));

server.ready((err) => {
	if (err) {
		process.exit(1);
	}

	console.log(":Port: ", config.server.port);
	server.listen(config.server.port, "172.16.27.128");
});
