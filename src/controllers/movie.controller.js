const Movie = require('../models/movie.model');
const aws = require('aws-sdk');
const fs = require('fs');

const getAllMovie = async(req, res, service) => {
    const allMovie = await service.getAllMovie();
    res.send(allMovie);
}

const getMostViews = async(req, res, service) => {
    const mostView = await service.getMostViews();
    res.send(mostView);
}

const getMovieByViews = async(req, res, service) => {
    const MovieViews = req.query.id;
    const movie = await service.getMovieByViews(MovieViews);
    res.send(movie)
}

const getAllMovieWithPaginate = async(req, res, service) => {
    const allMoviePage = await service.getAllMovieWithPaginate();
    const page = req.query.page
    const limit = req.query.limit

    const startIndex = (page -1) * limit
    const endIndex = page * limit

    const MoviePage = allMoviePage.slice(startIndex,endIndex)
    res.send(MoviePage)
}

const getMovieList = async(req, res, service) => {
    try {
        let movie;
        if (req.query.title) {
            const title = req.query.title
            movie = await service.getMovieByTitle(title);
        } 
          else if (req.query.description) {
            const description = req.query.description;
            movie = await service.getMovieByDescription(description);
        } else if (req.query.artists) {
            const artists = req.query.artists;
            movie = await service.getMovieByArtists(artists);
        } 
        res.send(movie);
    } catch (e) {
        res.sendStatus(500)
    }
}

const UploadMovie = async(req, res) => {
    aws.config.setPromisesDependency();
    aws.config.update({
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.REGION
    });
    const s3 = new aws.S3();
    var params = {
      ACL: 'public-read',
      Bucket: process.env.BUCKET_NAME,
      Body: fs.createReadStream(req.file.path),
      Key: `ShortMovie/${req.file.originalname}`
    };

    s3.upload(params, (err, data) => {
      if (err) {
        console.log('Error occured while trying to upload to S3 bucket', err);
      }

      if (data) {
        fs.unlinkSync(req.file.path); 
        const locationUrl = data.Location;
        let newMovie = new Movie({ ...req.body, watchURL: locationUrl });
        newMovie
          .save()
          .then(movie => {
            res.json({ message: 'Movie created successfully', movie });
          })
          .catch(err => {
            console.log('Error occured while trying to save to DB');
          });
      }
    });
  }
const updateMovie = async(req, res, service) => {
    const newMovie = req.body;
    const movie = await service.updateMovie(newMovie);
    res.send(movie)
}
const deleteMovie = async(req, res, service) => {
    const title = req.query.title;
    await service.deleteMovie(title);
    res.send({ title: title })
}

module.exports = { getAllMovie, getAllMovieWithPaginate, getMovieList, updateMovie, deleteMovie, UploadMovie, getMovieByViews, getMostViews }