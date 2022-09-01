const db = require('../../database/models');
const sequelize = db.sequelize;


const genresApiController = {
    'list': (req, res) => {
        db.Genre.findAll()
            .then(genres => {
                return res.status(200).json({
                    meta: {
                        status : 200,
                        total : genres.length,
                        url : 'api/genres'
                    },
                    data : genres
                });
            })
    },
    'detail': (req, res) => {
        db.Genre.findByPk(req.params.id)
            .then(genre => {
                return res.status(200).json({
                    meta: {
                        status : 200,
                        url : '/genres/detail/:id'
                    },
                    data : genre
                });
            });
    }

}

module.exports = genresApiController;