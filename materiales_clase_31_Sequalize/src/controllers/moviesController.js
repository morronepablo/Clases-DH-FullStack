const db = require('../database/models');
const Op = db.Sequelize.Op;

const moviesController = {

    list: (req, res) => {
        db.Peliculas.findAll()
        .then(movies => {
            res.render('moviesList', {movies})
        })
        .catch(error => {
            console.log(error);
        })
    },
    detail: (req, res) => {
        db.Peliculas.findByPk(req.params.id)
        .then(movie => {
            res.render('moviesDetail', {movie})
        })
        .catch(error => {
            console.log(error);
        })
    },
    new : (req, res) => {
        db.Peliculas.findAll(
            {
                order: [
                    ['release_date', 'DESC']
                ],
                limit: 5
            }
        )
        .then(movies => {
            res.render('newestMovies', {movies})
        })
        .catch(error => {
            console.log(error);
        })
    },
    recomended : (req, res) => {
        db.Peliculas.findAll(
            {
                where: {
                    rating: {[Op.gte]: 7}
                },
                order: [
                    ['rating', 'DESC']
                ]
            }
        )
        .then(movies => {
            res.render('recommendedMovies', {movies})
        })
        .catch(error => {
            console.log(error);
        })
    },
    add: (req, res) => {
        res.render('moviesAdd');
    },
    store: (req, res) => {

        db.Peliculas.create({
            ...req.body
        })
        .then(() => res.redirect('/movies'))
        .catch(error => {
            console.log(error);
            res.send(error);
        });
    },
    edit: (req, res) => {
        db.Peliculas.findByPk(req.params.id)
        .then((Movie) => res.render('moviesEdit', {Movie}))
        .catch(error => {
            console.log(error);
            res.send(error);
        });
    },
    update: (req, res) => {
        db.Peliculas.update({
            ...req.body
        },{
            where: {
                id: req.params.id
            }
        })
        .then(() => res.redirect('/movies'))
        .catch(error => {
            console.log(error);
            res.send(error);
        });
    },
    delete: (req, res) => {
        db.Peliculas.findByPk(req.params.id)
        .then((Movie) => res.render('moviesDelete', {Movie}))
        .catch(error => {
            console.log(error);
            res.send(error);
        });
    },
    destroy: (req, res) => {
        // console.log(req.params.id)
        // return res.send(req.params.id)
        db.Peliculas.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => res.redirect('/movies'))
        .catch(error => {
            console.log(error);
            res.send(error);
        });
    }
}

module.exports = moviesController;