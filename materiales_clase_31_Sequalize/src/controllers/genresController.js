const db = require('../database/models');
const Op = db.Sequelize.Op;

const genresController = {

    list: (req, res) => {
        db.Generos.findAll()
        .then(genres => {
            res.render('genresList', {genres})
        })
        .catch(error => {
            console.log(error);
        })
    },
    detail: (req, res) => {
        db.Generos.findByPk(req.params.id)
        .then(genre => {
            res.render('genresDetail', {genre})
        })
        .catch(error => {
            console.log(error);
        })
    }
}

module.exports = genresController;