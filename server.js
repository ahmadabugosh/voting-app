//connect to db

var db='mongodb://localhost:27017/voting-app';

var port=process.env.PORT || 3000;


//load in node modules
var express = require('express');
var morgan=require('morgan');
var mongoose=require('mongoose');
var bodyParser=require('body-parser');
var dotenv=require('dotenv');

//start expresss
var app =express ();


//load in the environmental variables

dotenv.config({verbose:true});


//connect to mongoose

mongoose.connect(db,function(err) {

	if(err) {
		console.log(err);
	}

});

mongoose.connection.on('connected', function () {

	console.log('Successfully connected to '+db);

});


mongoose.connection.on('disconnected', function () {

	console.log('Successfully disconnected to '+db);

});

mongoose.connection.on('error', function () {

	console.log('An error has occured trying to connect to the database '+db);

});

//express middleware

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname + '/public'));

//for pages not defined in routes
app.get("*", function(request, response){
	response.sendFile(__dirname + '/public/index.html');
});

//start up server

app.listen(port, function() {
console.log("Listening on port " + port);

});

console.log(process.env.secret);




