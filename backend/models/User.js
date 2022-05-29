var mongoose = require('mongoose'), Schema = mongoose.Schema;
var crypto = require('crypto');
var bcrypt = require('bcrypt');

var UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    displayName: String,
    location: {
        type: Map,
        of: Number
    },
    latestLogin: Date,
    verificationCode: {
        type: String,
        default: crypto.randomUUID()
    },
    verifiedEmail: {
        type: Boolean,
        default: false
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

// Heavily inspired by https://coderrocketfuel.com/article/store-passwords-in-mongodb-with-node-js-mongoose-and-bcrypt

UserSchema.pre("save", function(next) {
    const user = this

    if (this.isModified("password") || this.isNew) {
        bcrypt.genSalt(10, (err, salt) => {
            if (err) return next(err)

            bcrypt.hash(user.password, salt, (err, hash) => {
                if (err) return next(err)

                user.password = hash
            })
        })
    }

    next()
})


module.exports = mongoose.model('User', UserSchema);