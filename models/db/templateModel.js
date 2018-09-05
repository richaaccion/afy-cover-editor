var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var elementSchema = new Schema({
	id: String,
	isEditable: Boolean,
	type: String,
	top: Number,
	left: Number,
	height: Number,
	width: Number,
	fontSize: Number,
	fontFamily: String,
	fontColor: String,
	fontStyle: String,
	rotationAngle: Number,
	defaultValue: String,
	varName: String
});

var templateSchema = new Schema({
	id: String,
	name: String,
	bookId: String,
	sectionName: String,
	featured: Boolean,
	thumbnailUrl: String,
	backgroundSvgUrl: String,
	templateHtml: String,
	elements: [elementSchema]
});

module.exports = mongoose.model("template", templateSchema);