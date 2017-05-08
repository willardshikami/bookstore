var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connceting to mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

//setting up route for the homepage
//app.get(); handle request to whatever uri we pass in it.
app.get('/', function(req, res){
    res.send('Hello world');
});

app.listen(3000);
console.log('Connected to port 3000')