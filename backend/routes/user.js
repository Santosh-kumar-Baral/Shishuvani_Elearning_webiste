const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/login', (req, res) => {
    User.findOne({ email: req.body.email, password: req.body.password })
        .then(user => {
            if (user) {
                res.json('Login successful!');
            } else {
                res.status(400).json('Invalid email or password.');
            }
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;