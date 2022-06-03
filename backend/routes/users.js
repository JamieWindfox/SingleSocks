const express = require('express');
const passport = require('passport');
const User = require('../models/User');
const { param, validationResult } = require('express-validator');

const router = express.Router();

// admin only | Queries all registered users and displays email and displayName
router.get('/', passport.authenticate('jwt', { session: false }), async function (req, res, next) {
	if(!req.user.isAdmin) return res.status(403).send({'message': 'User not authorized.'})
	const users = await User.find({}, 'email displayName')
	res.send(users);
});

// admin only | Delete specific user
router.delete('/:id', 
	param('id').isMongoId(),
	passport.authenticate('jwt', { session: false }),
	async function (req, res, next) {
		if(!req.user.isAdmin) return res.status(403).send({'message': 'User not authorized.'})

		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() })
		}

		const user = await User.findById(req.params.id);
		if(!user) return res.status(404).send({'message': 'User not found'});

		await User.deleteOne({ _id: req.params.id });
		res.status(204).send();
});

// Deletes the currently logged in user e.g. delete my account
router.delete('/current', passport.authenticate('jwt', { session: false }), async function (req, res, next) {
	const user = await User.findById(req.user._id);
	if(!user) return res.status(404).send({'message': 'User not found'});

	await User.deleteOne({ _id: req.user._id });
	res.status(204).send({'message': 'User removed successfully'});
});

// Queries the currently logged in user e.g. for profile page
router.get('/current', passport.authenticate('jwt', { session: false }), async function (req, res, next) {
	const user = await User.findById(req.user._id, 'email isAdmin displayName location createdAt');
	if(!user) return res.status(404).send();

	res.send(user);
});


module.exports = router;
