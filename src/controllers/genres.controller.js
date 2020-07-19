const getAllGenres = async(req, res, service) => {
    const allGenre = await service.getAllGenres();
    res.send(allGenre);
}
const getGenresByViews = async(req, res, service) => {
    const GenreViews = req.query.id;
    const genre = await service.getGenresByViews(GenreViews);
    res.send(genre)
}

const getMostViews = async(req, res, service) => {
    const mostView = await service.getMostViews();
    res.send(mostView);
}

module.exports = {getAllGenres, getGenresByViews, getMostViews}