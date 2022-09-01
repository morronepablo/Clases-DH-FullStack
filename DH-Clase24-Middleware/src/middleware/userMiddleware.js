const fs = require('fs');
const path = require('path');

const pathLog = path.join(__dirname, '../logs/userLog.txt');

function userMiddleware(req, res, next) {
    fs.appendFileSync(pathLog, "El usuario ingreso en la ruta: " + req.url + "\n");

    next();
}

module.exports = userMiddleware;