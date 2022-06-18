const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

const router = express.Router();

router.post('/login', async (req, res, next) => {
    passport.authenticate('login', async (err, user, info) => {
        try {
            if(err || !user) {
                return res.status(403).send({'error': 'Invalid email or password.'});
            }

            req.login(user, {session: false}, async (error) => {
                if (error) return next(error);

                const body = {_id: user._id, email: user.email};
                const token = jwt.sign({user: body}, process.env.TOKEN_SECRET);

                res.cookie("SESSION_TOKEN", token, {
                    httpOnly: true,
                    sameSite: "strict",
                });

                return res.status(200).send();
            })
        } catch (error) {
            return res.status(403).send({'error': 'Invalid email or password.'});
        }
    })(req, res, next);
});

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
            if (!user) return res.status(500).send();
            const token = jwt.sign({'user': user}, process.env.TOKEN_SECRET);

            res.cookie("SESSION_TOKEN", token, {
                httpOnly: true,
                sameSite: "strict",
            });
            res.status(200).send(user._id);
        }).catch(err => {
            console.debug(err)
            return res.status(500).send()
        })
    }
);

module.exports = router;
