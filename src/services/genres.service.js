const logEvent = require('../events/myEmitter');
const Movie = require('../models/movie.model');
const genres = require('../models/genres.model');

class GenreServ {
    async getAllGenres() {
        let result;
        try {
            result = await genres.findAll({include: Movie});
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'GET-GENRES-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
        return result;
    }
    async getGenresByViews(id) {
        const genre = await genres.findOne({ where: { id:id }, include: Movie });
        genre.update({
            views: genre.views + 1
        })
        let result;
        try {
            result = await genre.save();
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'UPDATE-GENRES-VIEWS-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
        return result;
    }
    async getMostViews() {
        let result;
        try {
            result = await genres.findAll({
                order: [
                ['views', 'DESC'] 
            ], include: Movie
        });
            
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'GET-MOST-VIEW-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
        return result;
    }
}

module.exports = GenreServ