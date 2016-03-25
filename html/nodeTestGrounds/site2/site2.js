var http = require('http');
var fs = require('fs');

var port = 5000;

http.createServer(function (req, res) {
	fs.readFile('index.html', function(err, data){ //start file read, function(err, data) called after the file is read
		res.writeHead(200, {'Content-Type': 'text/html'}); //stays alive throughout the process and runs when function is called
		res.end(data);
	});
}).listen(port);

console.log('Listening on port', port);