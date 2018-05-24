var express = require('express');

var app = express();

app.get('/', function(req, res, next) {
	res.json("Home page")
});

app.get('/about', function(req, res, next) {
	res.json('About page');
});

app.get('/:name', function(req, res, next) {
	res.json(req.params.name);			
});

app.listen(3000, function(err) {
	if (err) {
		console.log(err);
	} else {
		console.log("Running on port 3000");
	}
});