const mainController = {
    home: (req, res) => res.render('index',{
        nombrePagina: 'Home'
    }),
}

module.exports = mainController