var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local');
var auth = require('../helpers/auth');
var User = require('../models/User');
const { body, validationResult } = require('express-validator');


// TODO: Remove in production
router.get('/login', async function(req, res, next) {
    res.render('login');
});

router.post('/login/password', (req, res, next) => {}); // TODO: Implement jwt creation

router.post('/register',
    body('email').isEmail().custom(value => {
        // Check if email is already in use
        var query = User.find({email: value})
        return query.exec().then(user => {
            if(user.length > 0) return Promise.reject('E-Mail is already in use.');
        })
    }),
    body('password').isStrongPassword({minLength: 6}),
    body('displayName').matches("^[a-zA-Z0-9 ]{5,32}$"),
    body('location').custom(value => {
        if(!value.lng) return Promise.reject('Longitude missing.')
        if(!value.lat) return Promise.reject('Latitude missing.')
        if(typeof value.lng !== 'number') return Promise.reject('Longitude has wrong format.')
        if(typeof value.lat !== 'number') return Promise.reject('Latitude has wrong format.')
        return true
    }),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        var user = new User({
            email: req.body.email,
            displayName: req.body.displayName,
            password: req.body.password,
            location: {
                lat: req.body.location.lat,
                lng: req.body.location.lng
            }
        });

        user.save().then(user => {
            if(!user) return res.status(500).send();
            res.status(200).send(user._id);
        }).catch(err => {
            console.debug(err)
            return res.status(500).send()
        })
    }
);

module.exports = router;
