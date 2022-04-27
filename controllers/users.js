const bcrypt = require('bcrypt');
const User = require('../models/users');
const jwt = require('jsonwebtoken');
const secretKey = require('../constantes/jwtToken');

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                email: req.body.email,
                password: hash,
                isAdmin: req.body.isAdmin
            });
            user.save()
                .then(() => res.status(200).json({ message: "Utilisateur Crée !" }))
                .catch((error) => { res.status(400).json({ error: error }) })
        })
        .catch((error) => { res.status(500).json({ error }) });
};

exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'Utilisateur non trouvé !' });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect !' });
                    }
                    var token = jwt.sign({ userId: user._id }, secretKey.secret, { expiresIn: 86400 });

                    res.status(200).send({
                        userId: user._id,
                        email: user.email,
                        accessToken: token
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};