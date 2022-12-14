module.exports = (sequelize, dataTypes) => {
    let alias = 'Peliculas';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: { 
            type: dataTypes.STRING
        },
        rating: {
            type: dataTypes.DECIMAL
        },
        awards: {
            type: dataTypes.INTEGER
        },
        release_date : {
            type: dataTypes.DATE
        },
        length: {
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: 'movies',
        timestamps: false
    }

    const Peliculas = sequelize.define(alias, cols, config);
    return Peliculas;
}