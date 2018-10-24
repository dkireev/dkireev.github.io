var http = require("http");
var os = require("os");
var greeting = require("./greeting");
var User = require("./user");

var userName = os.userInfo().username;
http.createServer(function(request, respond) {
	respond.end("Hello Node JS!  sss");
}).listen(3000, "127.0.0.1", function() {
	console.log("Server is working");
	console.log(`Date of request: ${greeting.date}`);
	console.log(greeting.getMessage(userName));
	var dima = new User("Dima", 37);
	dima.sayHi();
})