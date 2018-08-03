var winston = require('winston');
require('winston-daily-rotate-file');

var logger = function() {
	var transport = new (winston.transports.DailyRotateFile)({
		filename: 'application-%DATE%.log',
		datePattern: 'YYYY-MM-DD-HH',
		/*zippedArchive: true,*/
		maxSize: '10k',
		maxFiles: '14d'
	});

	transport.on('rotate', function(oldFilename, newFilename) {
	    // do something fun
	    console.log("oldFilename-> ", oldFilename);
	    console.log("newFilename-> ", newFilename);
	    fs.unlink(oldFilename, function(err) {
	      console.log(err);
	    });
	});

	winston.add(transport);


	this.logger = winston.createLogger({
	  level: 'info',
	  transports: [
	    transport,
	    /*new winston.transports.Console(),
	    new winston.transports.File({ filename: 'combined.log' })*/
	  ]
	});
}

logger.getLogger = function() {
	return this.logger;
}

module.exports = new logger();