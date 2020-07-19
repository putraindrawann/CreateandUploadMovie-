const Movie = require('../models/movie.model');
const genres = require('../models/genres.model');

const dbAssociation = function dbAssociation() {

    genres.hasMany(Movie);
    Movie.belongsTo(genres);

}

module.exports = dbAssociation;