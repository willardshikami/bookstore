var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//Books Schema
var bookSchema = mongoose.Schema({
    title :{
        type : String,
        required : true
    },
    genre :{
        type : String,
        required : true
    },
    description:{
        type : String,
    },
    author:{
        type : String,
        required : true
    },
    publisher:{
        type : String
    },
    pages:{
        type : String
    },  
    image_url:{
        type : String
    },
    buy_url:{
        type : String
    },
    create_date:{
        type : Date,
        default : Date.now
    }
});

//Makes the genre object accesible from anywhere else.
var Book = module.exports = mongoose.model('Book' , bookSchema);

//Function to get Books
module.exports.getBooks = function(callback, limit){
    Book.find(callback).limit(limit);
}

//function to get one book
module.exports.getBookById = function(id, callback){
    Book.findById(id, callback);
}

//add book
module.exports.addBook = function(book, callback){
    Book.create(book, callback);
}