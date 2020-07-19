const express = require('express');
const multer = require('multer');
const router = express.Router();
const MovieService = require('../services/movie.service');
const { getAllMovie, getAllMovieWithPaginate, getMovieList, UploadMovie, updateMovie, deleteMovie, getMovieByViews, getMostViews } = require('../controllers/movie.controller')
const movieService = new MovieService();

const tokenValidation = require('../middlewares/token-validation');

router.get('/all', (req, res, next) => getAllMovie(req, res, movieService));
router.get('/', (req, res, next) => getMovieList(req, res, movieService));
router.get('/paging', (req, res, next) => getAllMovieWithPaginate(req, res, movieService));
router.get('/mostview', (req, res, next) => getMostViews(req, res, movieService));

router.use(tokenValidation);
router.delete('/', (req, res, next) => deleteMovie(req, res, movieService));
router.put('/', (req, res, next) => updateMovie(req, res, movieService));
router.get('/views', (req, res, next) => getMovieByViews(req, res, movieService));
router
  .route('/upload')
  .post(
    multer({ dest: 'temp/'}).single(
      'watchURL'
    ),
    UploadMovie
  );
  
module.exports = router;