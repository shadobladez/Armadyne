var express = require('express');
var mailer = require('nodemailer');
var app = express();

function mailTest(req, res, next){
	console.log(req.url);
	next();
}

app.use(mailTest);

function autoMail (sender, receiver, subject, body) {

	var nodemailer = require('nodemailer');

	// create reusable transporter object using the default SMTP transport
	var transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 465,
		secure: true, //use SSL
		service: 'Gmail',
		auth: {
			user: 'joeljan92@gmail.com',
			pass: 'Gundam89428942'
		}
	});

	var mailOptions = {
		from: '', // sender address
		to: '', // list of receivers
		subject: '', // Subject line
		html: '' // html body
	};

	mailOptions.from = sender;
	mailOptions.to = receiver;
	mailOptions.subject = subject;
	mailOptions.html = body;

	// setup e-mail data with unicode symbols
	var date = new Date();
	var hour = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	var fullDate = hour + ':' + minutes + ':' + seconds;

	// send mail with defined transport objectclea
	transporter.sendMail(mailOptions, function(error, info){
		if(error){
			return console.log(error);
		}
		console.log('Message sent: ' + info.response)
		console.log(mailOptions.html);
	});

}

// get method route
var sender = '';
var receiver = '';
var subject = '';
var body = '';
app.get('/sendMail', function (req, res) {
	console.log(req.query);
	var myData = JSON.parse(req.query.data);
	autoMail (myData.sender, myData.receiver, myData.subject, myData.body);
	console.log ("Sender: " + myData.sender);
	console.log ("Receiver: " + myData.receiver);
	console.log ("Subject: " + myData.subject);
	console.log ("Body: " + myData.body);
});

var port = 5000;
app.listen(port);
console.log('Listening on port: ' + port);