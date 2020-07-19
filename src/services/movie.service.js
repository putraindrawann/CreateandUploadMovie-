const logEvent = require('../events/myEmitter');
const Movie = require('../models/movie.model');
const genres = require('../models/genres.model');



class MovieServ {
    async getAllMovie() {
        let result;
        try {
            result = await Movie.findAll({include: genres});
            

        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'GET-MOVIE-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
        return result;
    }
    async getAllMovieWithPaginate() {
        let result;
        try {
            result = await Movie.findAll({include: genres});
            

        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'GET-MOVIE-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
        return result;
    }
    async getMovieByViews(id) {
        const movie = await Movie.findOne({ where: { id:id }, include: genres });
        movie.update({
            views: movie.views + 1
        })
        let result;
        try {
            result = await movie.save();
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'UPDATE-MOVIE-VIEWS-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
        return result;
    }

    async getMovieByTitle(title) {
        let result;
        try {
            result = await Movie.findOne({ where: { title: title }, include: genres })
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'GET-MOVIE-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
        return result;
    }
    async getMovieByDescription(description) {
        let result;
        try {
            result = await Movie.findAll({ where: { description: description }, include: genres })
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'GET-MOVIE-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
        return result;
    }
    async getMovieByArtists(artists) {
        let result;
        try {
            result = await Movie.findAll({ where: { artists: artists }, include: genres })
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'GET-MOVIE-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
        return result;
    }

    async getMostViews() {
        let result;
        try {
            result = await Movie.findAll({
                order: [
                ['views', 'DESC'] 
            ], include: genres
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

    async updateMovie(body) {
        const movie = await Movie.findOne({ where: { title: body.title } });
        movie.update({
            description: body.description,
            duration: body.duration,
            artists: body.artists,
            genres: body.genres,
            watchURL: body.watchURL
        })
        let result;
        try {
            result = await movie.save();
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'UPDATE-MOVIE-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
        return result;
    }

    async deleteMovie(title) {
        let result;
        try {
            result = await Movie.destroy({ where: { title:title } })
        } catch (e) {
            logEvent.emit('APP-ERROR', {
                logTitle: 'DELETE-MOVIE-SERVICE-FAILED',
                logMessage: e
            });
            throw new Error(e);
        }
        return result;
    }
}

module.exports = MovieServ