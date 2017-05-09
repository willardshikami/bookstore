var mongoose = require('mongoose');

//Books Schema
var bookSchema = mongoose.Schema;({
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

//Make the book object accesible anywhere
var Book = module.exports = mongoose.model('Book', bookSchema);

//Function to get books
module.exports.getBooks = function(callback, limit){
    Book.find(callback).limit(limit);
}