var express = require('express');
var fs = require('fs');
var app = express();

var fileContents = fs.readFileSync('data.txt', 'utf-8');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.send(fileContents);
	res.header('Content-Type', 'text/html');
});

var server = app.listen(5666, function() {
	console.log('Express server listening on port ' + server.address().port);
});
