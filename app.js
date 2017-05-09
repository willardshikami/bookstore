var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

Genre = require('./models/genre');

//connceting to mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

//setting up route for the homepage
//app.get(); handle request to whatever uri we pass in it.
app.get('/', function(req, res){
    res.send('Kindly use /api/books or /api/genres');
});

//adding genres api route
app.get('/api/genres', function(req, res){
    Genre.getGenres(function(err, genres){
        if(err){
            throw err;
        }
            res.json(genres);
    });
});

//adding books api routes
app.get('/api/books', function(req, res){
    Book.getBooks(function(err, books){
        if(err){
            throw err;
        }
        res.json(books);
    });
});

app.listen(3000);
console.log('Connected to port 3000')

