const express = require('express');
const fs = require('fs');
const path = require('path');
const jimp = require('jimp');
const Sock = require('../models/Sock');
const { param, validationResult } = require('express-validator');
const router = express.Router();

router.get('/:id',
    param('id').isMongoId(),
    async function(req, res, next) {
        Sock.findById(req.params.id).then(sock => {
            // No sock found
            if (!sock) return res.status(404).sendFile(path.join(__dirname, '../etc/404_sock.png'));

            const basePath = path.join(__dirname, `../images/${req.params.id}`);
            const defaultPath = `${basePath}.png`;
            // Sock found and available
            if(sock.availability) return res.sendFile(defaultPath);
            
            // Sock no longer available
            const notAvailablePath = `${basePath}-na.png`;
            if(fs.existsSync(notAvailablePath)) return res.sendFile(notAvailablePath);
            jimp.read(defaultPath, async (err, img) => {
                if (err) {
                    console.log(err);
                    return res.status(500).send();
                }
                await img
                    .grayscale()
                    .blur(5)
                    .writeAsync(notAvailablePath);
                res.sendFile(notAvailablePath);
            });
        });
});

module.exports = router;