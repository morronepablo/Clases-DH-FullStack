const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");


//Aqui tienen una forma de llamar a cada uno de los modelos
// const {Movies,Genres,Actor} = require('../database/models');

//Aquí tienen otra forma de llamar a los modelos creados
const Movies = db.Movie;
const Genres = db.Genre;
const Actors = db.Actor;


const moviesController = {
    'list': (req, res) => {
        db.Movie.findAll()
            .then(movies => {
                res.render('moviesList.ejs', {movies})
            })
    },
    'detail': (req, res) => {
        db.Movie.findByPk(req.params.id, {
            include: [{ association: 'genre'}, { association: 'actors'}]
        })
            .then(movie => {
                res.render('moviesDetail.ejs', {movie});
            });
    },
    'new': (req, res) => {
        db.Movie.findAll({
            order : [
                ['release_date', 'DESC']
            ],
            limit: 5
        })
            .then(movies => {
                res.render('newestMovies', {movies});
            });
    },
    'recomended': (req, res) => {
        db.Movie.findAll({
            where: {
                rating: {[db.Sequelize.Op.gte] : 8}
            },
            order: [
                ['rating', 'DESC']
            ]
        })
            .then(movies => {
                res.render('recommendedMovies.ejs', {movies});
            });
    },
    //Aqui dispongo las rutas para trabajar con el CRUD
    add: function (req, res) {
        let promGenres = Genres.findAll();
        let promActors = Actors.findAll();

        Promise.all([promGenres, promActors])
            .then(([allGenres, allActors]) => {
                return res.render('moviesAdd', {
                    allGenres,
                    allActors
                });
            })
            .catch(err => res.send(err));
        //res.render('moviesAdd', {allGenres: db.Movie.genre});
    },
    create: function (req,res) {
        Movies.create({
            ...req.body
        })
        .then(() => res.redirect('/movies'))
        .catch(error => {
            console.log(error);
            res.send(error);
        });
    },
    edit: function(req,res) {
        let movieId = req.params.id;
        let promMovies = Movies.findByPk(movieId);
        let promGenres = Genres.findAll();
        Promise.all([promMovies, promGenres])
            .then(([Movie, allGenres]) => {
                return res.render('moviesEdit', {
                    Movie,
                    allGenres
                });
            })
            .catch(err => res.send(err));
        // Movies.findByPk(req.params.id)
        // .then((Movie) => res.render('moviesEdit', {Movie}))
        // .catch(error => {
        //     console.log(error);
        //     res.send(error);
        // });
    },
    update: function (req,res) {
        let movieId = req.params.id;
        Movies.update({
            ...req.body
        },{
            where: {
                id: movieId
            }
        })
        .then(() => res.redirect('/movies'))
        .catch(error => {
            console.log(error);
            res.send(error);
        });
    },
    delete: function (req,res) {
        let movieId = req.params.id;
        Movies.findByPk(movieId)
        .then((Movie) => res.render('moviesDelete', {Movie}))
        .catch(error => {
            console.log(error);
            res.send(error);
        });
    },
    destroy: function (req,res) {
        let movieId = req.params.id;
        Movies.destroy({
            where: {
                id: movieId
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