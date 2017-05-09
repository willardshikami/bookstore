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

//Function to get Genres
module.exports.getBooks = function(callback, limit){
    Book.find(callback).limit(limit);
}