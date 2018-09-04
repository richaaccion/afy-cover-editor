var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var editableElementSchema = new Schema({
	id: String,
	type: String,
	value: String
});

var sectionSchema = new Schema({
	id: {
		type: String,
		enum: ["cover", "intro", "praise"]
	},
	templateId: String,
	editableElements: [editableElementSchema]
});

var userBookSchema = new Schema({
	id: String,
	userId: String,
	bookId: String,
	saveMode: {
		type: String,
		enum: ["draft", "final"]
	},
	sections: [sectionSchema]
});

module.exports = mongoose.model("userbook", userBookSchema);