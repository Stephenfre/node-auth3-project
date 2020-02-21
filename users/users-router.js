const router = require('express').Router();

const User = require('./users-model');
const restricted = require('../auth/restricted-middleware.js');
const checkRole = require('../auth/check-role-middleware.js')

router.get('/', restricted, checkRole('Admin'), (req, res) => {
    User.find()
        .then(users => {
            res.json(users);
        })
        .catch(err => res.send({ message: "Couldn't find the user", err }))
})

module.exports = router;