var mongoose = require('mongoose');

//Genre Schema
var genreSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    create_date:{
        type: Date,
        default: Date.now
    } 
});

//Makes the genre object accesible from anywhere else.
var Genre = module.exports = mongoose.model('Genre', genreSchema);


//Function to get Genres
module.exports.getGenres = function(callback, limit){
    Genre.find(callback).limit(limit);
}