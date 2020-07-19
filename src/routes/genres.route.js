const express = require('express');
const router = express.Router();
const GenreService = require('../services/genres.service');
const {getAllGenres, getMostViews, getGenresByViews } = require('../controllers/genres.controller')
const genreService = new GenreService();

const tokenValidation = require('../middlewares/token-validation');
router.get('/all', (req, res, next) => getAllGenres(req, res, genreService));
router.get('/mostview', (req, res, next) => getMostViews(req, res, genreService));

router.use(tokenValidation);
router.get('/views', (req, res, next) => getGenresByViews(req, res, genreService));


module.exports = router;