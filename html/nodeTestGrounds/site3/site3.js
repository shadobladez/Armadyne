var express = require('express');
var bodyParser = require ('body-parser');
var app = express();

function myMiddleWare(req, res, next){
	console.log(req.url);
	next();
}

app.use(myMiddleWare);
app.use(bodyParser.json());

app.get('/', function(req, res){
	res.send('hello there from express!\n');
});

app.get('/hi', function(req, res){
	res.send('hi there from express!\n');
});

app.get('/whatsup', function(req, res){
	var body = 'Hello from express\n<p>\n';
	if (req.query) body += JSON.stringify(req.query);
	res.send(body);
});

app.get('/user/:id', function(req, res){ //routing using the /user but with the :id it takes any id you put in and reroutes it to the res.send
	res.send('user ' + req.params.id);
});

var port = 5000;
app.listen(port);

console.log('Listening on port', port);