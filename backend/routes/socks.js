const express = require('express');
const Sock = require('../models/Sock');
const User = require('../models/User');
const { param, body, validationResult } = require('express-validator');
const mongoose = require('mongoose');
const Attribute = require('../models/Attribute')
const passport = require('passport');
const fs = require('fs');
const router = express.Router();

router.get('/', async function(req, res, next) {
    const socks = await Sock.find()
    res.json(socks);
});

router.get('/:id',
    param('id').isMongoId(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        Sock.findOneAndUpdate({_id: req.params.id}, {$inc: {visitCounter: 1}})
        .then(sock => {
            if(sock) return res.send(sock)
            res.status(404).send('Sock not found')
        })
        .catch(err => {
            res.status(500).send()
        })
    }
);

router.post('/',
    body('name').notEmpty().isLength({max: 50}),
    body('material').isIn(Attribute.materials),
    body('mainColor').isIn(Attribute.mainColors),
    body('pattern').isIn(Attribute.patterns),
    body('size').isIn(Attribute.sizes),
    body('type').isIn(Attribute.types),
    body('condition').isIn(Attribute.conditions),
    body('description').notEmpty().isLength({max: 255}),
    body('imageData').notEmpty().custom(v => require('../etc/validators').isBase64Image(v)),
    passport.authenticate('jwt', { session: false }),
    async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const user = await User.findById(req.user._id);
        if(!user) return res.status(404).send({'message': 'User not found'});

        var sock = new Sock({
            name: req.body.name,
            mainColor: req.body.mainColor,
            material: req.body.material,
            pattern: req.body.pattern,
            size: req.body.size,
            type: req.body.type,
            condition: req.body.condition,
            availability: true,
            description: req.body.description,
            user: user._id
        })
        sock = await sock.save()
        if(!sock) return res.status(500).send()

        var base64Data = req.body.imageData.replace(/^data:image\/png;base64,/, "");
        const filename = `${process.env.UPLOAD_PATH}${sock._id}.png`;
        fs.writeFile(filename, base64Data, 'base64', function(err) {
            console.log(err);
        });

        res.json(sock)
    }
);

router.delete('/:id',
    param('id').isMongoId(),
    passport.authenticate('jwt', { session: false }),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        Sock.findById(req.params.id).then(sock => {
            if(!sock) return res.status(404).send('Sock not found')

            if(!req.user.isAdmin && sock.user != req.user._id) {
                console.log('req.user._id: ' + req.user._id);
                console.log('sock.user: ' + sock.user);
                return res.status(401).send('Unauthorized');
            }

            Sock.deleteOne({_id: sock._id}).then(deletedSock => {
                res.sendStatus(204);
            })
            .catch(err => {
                res.status(500).send(err);
            })
        })
        .catch(err => {
            res.status(500).send(err)
        })
    }
);

router.put('/:id',
    body('name').notEmpty().isLength({max: 50}),
    param('id').isMongoId(),
    body('material').isIn(Attribute.materials),
    body('mainColor').isIn(Attribute.mainColors),
    body('pattern').isIn(Attribute.patterns),
    body('size').isIn(Attribute.sizes),
    body('type').isIn(Attribute.types),
    body('condition').isIn(Attribute.conditions),
    body('description').notEmpty().isLength({max: 255}),
    body('availability').isBoolean(),
    passport.authenticate('jwt', { session: false }),
    async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        Sock.findById(req.params.id).then(sock => {
            if(!sock) return res.status(404).send('Sock not found')

            if(!req.user.isAdmin && sock.user != req.user._id) {
                console.log('req.user._id: ' + req.user._id);
                console.log('sock.user: ' + sock.user);
                return res.status(401).send('Unauthorized');
            }
            
            sock.name = req.body.name
            sock.mainColor = req.body.mainColor
            sock.material = req.body.material
            sock.pattern = req.body.pattern
            sock.size = req.body.size
            sock.type = req.body.type
            sock.condition = req.body.condition
            sock.availability = req.body.availability
            sock.description = req.body.description

            sock.save().then(sock => {
                if(!sock) return res.status(500).send()
                res.status(200).send(sock)
            }).catch(err => {
                res.status(500).send()
            })
        }).catch(err => {
            res.status(500).send()
        })
    }
);

module.exports = router;
