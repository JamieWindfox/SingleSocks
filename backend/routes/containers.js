const express = require('express');
const Container = require('../models/Container');
const passport = require('passport');
const { body, param, validationResult } = require('express-validator');
const router = express.Router();

router.get('/', async function (req, res, next) {
	const containers = await Container.find()
	res.json(containers);
});

router.get('/:id',
	param('id').isMongoId(),
	(req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() })
		}

		Container.findById(req.params.id).then(container => {
			if(container) return res.json(container)
			res.status(404).json({'message': 'Container not found'})
		}).catch(err => {
			res.status(500).send()
		});
});

router.post('/',
	passport.authenticate('jwt', { session: false }),
	body('maintainer').isIn(require('../models/Attribute').maintainers),
	body('location').custom(v => require('../etc/validators').isLocation(v)),
	async function(req, res, next) {
		if(!req.user.isAdmin) return res.status(403).send({'message': 'User not authorized.'})

		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() })
		}

		var container = new Container({
			maintainer: req.body.maintainer,
			location: {
                lat: req.body.location.lat,
                lng: req.body.location.lng
            }
		});

		container = await container.save();
		if(!container) return res.status(500).send()

		res.json(container);
});

router.delete('/:id',
	passport.authenticate('jwt', { session: false }),
	param('id').isMongoId(),
	(req, res, next) => {
		if(!req.user.isAdmin) return res.status(403).send({'message': 'User not authorized.'})

		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() })
		}

		Container.findOneAndDelete({_id: req.params.id}, (err, deletedContainer) => {
			if(!err && deletedContainer) return res.status(204).json(deletedContainer);
			res.status(404).json({'message': 'Container not found'})
		});
});

router.put('/:id',
	passport.authenticate('jwt', { session: false }),
	body('maintainer').isIn(require('../models/Attribute').maintainers),
	body('location').custom(v => require('../etc/validators').isLocation(v)),
	param('id').isMongoId(),
	async function(req, res, next) {
		if(!req.user.isAdmin) return res.status(403).send({'message': 'User not authorized.'})

		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() })
		}

		Container.findById(req.params.id).then(container => {
			if(!container) return res.status(404).json({'message': 'Container not found'});
			
			container.maintainer = req.body.maintainer;
			container.location = {
				lat: req.body.location.lat,
                lng: req.body.location.lng
			};

			container.save().then(container => {
				if(!container) return res.status(500).send();
				res.json(container);
			}).catch(err => {
                res.status(500).send();
            });
		}).catch(err => {
            res.status(500).send();
        });
});

module.exports = router;
