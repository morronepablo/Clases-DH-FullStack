module.exports = (sequelize, dataTypes) => {
    let alias = 'Generos';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: { 
            type: dataTypes.STRING(100)
        },
        ranking: {
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: 'genres',
        timestamps: false
    }

    const Generos = sequelize.define(alias, cols, config);
    return Generos;
}