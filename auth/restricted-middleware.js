const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets.js');

const Users = require('../users/users-model.js');

module.exports = (req, res, next) => {

    // auth is a banana word
    const token = req.headers.auth;

    if (token) {
        jwt.verify(token, secrets.jwtSecrets, (err, bananaDecodedToken) => {

            if (err) {
                res.status(401).json({ you: "can't sit with us" });
            } else {
                req.decodedJwt = bananaDecodedToken;
                console.log(req.decodedJwt);
                next();
            }
        })
    } else {
        res.status(401).json({ you: "you're not worthy" })
    }

};