const mongoose = require('mongoose'), Schema = mongoose.Schema;
const Attribute = require('./Attribute');

var SockSchema = new Schema({
    imageName: String,
    mainColor: {
        type: String,
        enum: Object.keys(Attribute.mainColors)
    },
    material: {
        type: String,
        enum: Object.keys(Attribute.materials)
    },
    pattern: {
        type: String,
        enum: Object.keys(Attribute.patterns)
    },
    size: {
        type: String,
        enum: Object.keys(Attribute.sizes)
    },
    type: {
        type: String,
        enum: Object.keys(Attribute.types)
    },
    user: { type: mongoose.ObjectId, ref: 'User' },
    visitCounter: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Sock', SockSchema);