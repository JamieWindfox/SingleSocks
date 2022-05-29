var mongoose = require('mongoose'), Schema = mongoose.Schema;
const Attribute = require('../models/Attribute');

var ContainerSchema = new Schema({
    location: {
        type: Map,
        of: Number
    },
    maintainer: {
        type: String,
        required: true,
        enum: Object.keys(Attribute.maintainers)
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Container', ContainerSchema);