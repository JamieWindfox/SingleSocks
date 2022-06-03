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

// Heavily inspired by https://www.digitalocean.com/community/tutorials/api-authentication-with-json-web-tokensjwt-and-passport

UserSchema.pre('save', async function(next) {
    const user = this

    if (this.isModified("password") || this.isNew) {
        user.password = await bcrypt.hash(user.password, 12)
    }

    next()
})

UserSchema.methods.isValidPassword = async function(password) {
    const user = this
    
    return bcrypt.compare(password, user.password)
}


module.exports = mongoose.model('User', UserSchema);