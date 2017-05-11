var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

Genre = require('./models/genre');
Book = require('./models/book');

//connecting to mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

//setting up route for the homepage
//app.get(); handle request to whatever uri we pass in it.
app.get('/', function(req, res){
    res.send('Kindly use /api/books or /api/genres');
});

//genres api route
app.get('/api/genres', function(req, res){
    Genre.getGenres(function(err, genres){
        if(err){
            throw err;
        }
            res.json(genres);
    });
});

//add/create genre
app.post('/api/genres', function(req, res){
    var genre = req.body;
    Genre.addGenre(genre, function(err, genre){
        if(err){
            throw err;
        }
            res.json(genre);
    });
});

//books api routes
app.get('/api/books', function(req, res){
    Book.getBooks(function(err, books){
        if(err){
            throw err;
        }
        res.json(books);
    });
});

//get request 
//route to single book
app.get('/api/books/:_id', function(req, res){
    Book.getBookById(req.params._id, function(err, book){
        if(err){
            throw err;
        }
        res.json(book);
    });
});


//add/create new book
app.post('/api/books', function(req, res){
    var book = req.body;
    Book.addBook(book, function(err, book){
        if(err){
            throw err;
        }
            res.json(book);
    });
});


app.listen(3000);
console.log('Connected to port 3000')

