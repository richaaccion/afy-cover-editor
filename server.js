var fs = require('fs');
var path = require('path');


var express = require('express');

var app = express();
app.use('/static', express.static(path.join(__dirname, 'assets')))

var hbrFilePath = "assets/template";

var templateFileName = "template1.hbr";

var fileContentBuffer = fs.readFileSync(path.join(__dirname, hbrFilePath, templateFileName));

var fileContent = fileContentBuffer.toString();

var replacedText = fileContent.replace("{{back_profile_pic}}", "http://localhost:3002/static/template/john-profile-photo.jpg").replace("{{front_profile_pic}}", "http://localhost:3002/static/template/john-profile-photo.jpg").replace("{{front_book_title}}", "Selling").replace("{{back_book_title}}", "Selling").replace("{{background_image}}", "http://localhost:3002/static/template/background-image.png").replace("{{author_name}}", "John Doe");

app.listen(3002);

app.get('/', (req, res) => {
	res.send(replacedText);
});