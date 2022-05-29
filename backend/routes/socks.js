const express = require('express');
const Sock = require('../models/Sock');
const { param, body, validationResult } = require('express-validator');
const mongoose = require('mongoose');
const Attribute = require('../models/Attribute')
const router = express.Router();

router.get('/', async function(req, res, next) {
    const socks = await Sock.find()
    res.send(socks);
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
    body('material').isIn(Attribute.materials),
    body('mainColor').isIn(Attribute.mainColors),
    body('pattern').isIn(Attribute.patterns),
    body('size').isIn(Attribute.sizes),
    body('type').isIn(Attribute.types),
    async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        var sock = new Sock({
            imageName: "NAY",
            mainColor: req.body.mainColor,
            material: req.body.material,
            pattern: req.body.pattern,
            size: req.body.size,
            type: req.body.type,
            user: mongoose.Types.ObjectId("628bf828be2e3a4688c206a7") // TODO Replace with userid from jwt
        })
        sock = await sock.save()
        if(!sock) return res.status(500).send()
        res.send(sock)
    }
);

router.delete('/:id',
    param('id').isMongoId(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        Sock.findByIdAndDelete(req.params.id)
        .then(sock => {
            if(!sock) return res.status(404).send('Sock not found')
            res.send(204)
        })
        .catch(err => {
            res.status(500).send()
        })
    }
)

router.put('/:id',
    param('id').isMongoId(),
    body('material').isIn(Attribute.materials),
    body('mainColor').isIn(Attribute.mainColors),
    body('pattern').isIn(Attribute.patterns),
    body('size').isIn(Attribute.sizes),
    body('type').isIn(Attribute.types),
    async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        Sock.findById(req.params.id)
        .then(sock => {
            if(!sock) return res.status(404).send('Sock not found')
            
            sock.mainColor = req.body.mainColor
            sock.material = req.body.material
            sock.pattern = req.body.pattern
            sock.size = req.body.size
            sock.type = req.body.type

            sock.save()
            .then(sock => {
                if(!sock) return res.status(500).send()
                res.status(200).send(sock)
            })
            .catch(err => {
                res.status(500).send()
            })
        })
        .catch(err => {
            res.status(500).send()
        })
    }
)

module.exports = router;
