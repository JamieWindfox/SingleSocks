var express = require('express');
const Attribute = require('../models/Attribute')
var router = express.Router();

router.get('/', (req, res) => {
    res.send({
        mainColor: Attribute.mainColors,
        material: Attribute.materials,
        pattern: Attribute.patterns,
        size: Attribute.sizes,
        type: Attribute.types,
        maintainer: Attribute.maintainers,
        condition: Attribute.conditions
    });
});

router.get('/mainColor', (req, res, next) => {
    res.send(Attribute.mainColors)
});

router.get('/material', (req, res, next) => {
    res.send(Attribute.materials)
});

router.get('/pattern', (req, res, next) => {
    res.send(Attribute.patterns)
});

router.get('/size', (req, res, next) => {
    res.send(Attribute.sizes)
});

router.get('/type', (req, res, next) => {
    res.send(Attribute.types)
});

router.get('/maintainer', (req, res, next) => {
    res.send(Attribute.maintainers)
});

router.get('/condition', (req, res, next) => {
    res.send(Attribute.conditions)
});

module.exports = router;
