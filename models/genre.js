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

//add genre
module.exports.addGenre = function(genre, callback){
    Genre.create(genre, callback);
}


//update genre
module.exports.updateGenre = function(id, genre, options, callback){
    var query = {_id: id};
    var update = {
        name : genre.name
    }
    Genre.findOneAndUpdate(query, update, options, callback);
}
