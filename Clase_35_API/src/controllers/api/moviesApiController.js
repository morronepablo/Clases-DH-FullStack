const db = require('../../database/models');
const sequelize = db.sequelize;


const moviesApiController = {
    'create': (req, res) => {
        db.Movie
            .create(req.body)
            .then(movie => {
                return res.status(200).json({
                    data: movie,
                    status : 200,
                    created: 'ok'
                });
            })
            .catch(err => {
                console.log(err);
            })
    },
    'detail': (req, res) => {
        db.Genre.findByPk(req.params.id)
            .then(genre => {
                return res.status(200).json({
                    meta: {
                        status : 200,
                        url : '/movies/detail/:id'
                    },
                    data : genre
                });
            })
            .catch(err => {
                console.log(err);
            })
    },
    'delete': (req, res) => {
        db.Movie.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
        })
    }

}

module.exports = moviesApiController;