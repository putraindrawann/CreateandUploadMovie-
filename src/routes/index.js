const express = require('express');
const router = express.Router();

const genresRoute = require('./genres.route');
const userRoutes = require('./user.route');
const movieRoutes = require('./movie.route');
const authRoutes = require('./auth.route');
const noRoute = require('./no.route');
const logRoute = require('./log.route');

router.use(logRoute);
router.use('/login', authRoutes);
router.use('/genres', genresRoute);
router.use('/movie', movieRoutes);
router.use('/user', userRoutes);
router.use(noRoute);

module.exports = router;