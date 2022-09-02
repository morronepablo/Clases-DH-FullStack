const usersAdmin = ['ada', 'greta', 'vim', 'tim'];

function authMiddleware(req, res, next) {
    const user = req.query.user?.toLowerCase();
    if(usersAdmin.includes(user)) {
        // res.send("No hay autorización " + req.query.user +" !!!, solo usuarios Administradores");
        req.user = user;
        return next();
    }
    res.render('error', {
        message: 'No tienes privilegios para entrar',
        error: {
            status: 401
        },
        path: req.url
    })
}

module.exports = authMiddleware;