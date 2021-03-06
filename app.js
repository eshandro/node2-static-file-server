var express = require('express');
var fs = require('fs');
var app = express();

fs.readFile('data.txt', function(err, data) {
	app.get('/', function(req, res) {
		res.header('Content-Type', 'text/html');
		res.send(data);
	});

});

app.use(express.static(__dirname + '/public'));

app.get('/public/:filename', function(req, res) {
	// console.log(fs.readFileSync('public/' + req.params.filename, 'utf-8'));
	fs.readFile('public/' + req.params.filename, function(err, data) {
		res.header('Content-Type', 'text/html');
		res.send(data);
	});
})

var server = app.listen(5666, function() {
	console.log('Express server listening on port ' + server.address().port);
});
