
var express = require('express');

var app = express();

app.get('/', function(request, response){

	response.writeHead(200);
	response.write('Hello world');
	response.end();

});

app.listen(8080);

console.log('Listening on port 8080…');
