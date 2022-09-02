const mainController = {
    index: (req, res) => res.render('index'),
    // admin: (req, res) => res.send('Hola Admin: ' + req.query.user)
    admin: (req, res) => res.render('admin', { user: req.user })
}

module.exports = mainController