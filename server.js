//connect to db

var db='mongodb://localhost:27017/voting-app';

var port=process.env.PORT || 3000;


//load in node modules
var express = require('express');
var morgan=require('morgan');
var mongoose=require('mongoose');
var dotenv=require('dotenv');

//load in the environmental variables

dotenv.config({verbose:true});


//connect to mongoose

