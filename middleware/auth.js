const jwt = require('jsonwebtoken');
const secretKey = require('../constantes/jwtToken');

module.exports = (req, res, next) => {
    console.log(req.headers["x-access-token"])
    try {
        const token = req.headers["x-access-token"];
        const decodedToken = jwt.verify(token, secretKey.secret);
        const userId = decodedToken.userId;
        if (req.body.userId && req.body.userId !== userId) {
            throw 'Invalid user ID';
        } else {
            next();
        }
    } catch {
        res.status(403).json({
            error: new Error('Invalid request!')
        });
    }
};