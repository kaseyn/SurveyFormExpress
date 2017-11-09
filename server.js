var express = require("express");
var session = require('express-session');
var app = express();
var bodyParser = require('body-parser');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(session({secret: 'codingdojorocks'}));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(request, response) {
	response.render("index");
})

app.post('/process', function (request, response) {
	request.session["form"] = request.body;
	response.redirect('/result');
})

app.get('/result', function(request, response) {
	response.render('result', { name: request.session.form.name, location: request.session.form.location, language: request.session.form.language, comment: request.session.form.comment });
})

app.listen(8000, function() {
	console.log("listening on port 8000");
})