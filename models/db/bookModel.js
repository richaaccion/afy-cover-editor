var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sectionSchema = new Schema({
	id: {
		type: String,
		enum: ["cover", "intro", "praise"]
	},
	optional: Boolean,
	thumbnailUrl: String
});

var commercialSchema = new Schema({
	price: String
});

var bookSchema = new Schema({
	id: String,
	name: String,
	category: String,
	thumbnailUrl: String,
	commercials: [commercialSchema],
	sections: [sectionSchema]
});

module.exports = mongoose.model("book", bookSchema);