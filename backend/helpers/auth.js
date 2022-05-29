var bcrypt = require('bcrypt');


function hashPassword(password, salt, cb) {
    bcrypt.genSalt(function(err, generatedSalt) {
        if(err) cb(err);
        if(!salt) salt = generatedSalt;
        bcrypt.hash(password, salt, function(err, hashedPassword) {
            if(err) cb(err);
            cb(null, hashedPassword);
        })
    })
}

function isSamePassword(password, hashedPassword) {
    // TODO Retrieve Salt of hashedPassword and hash plain password; then compare
    if (!crypto.timingSafeEqual(hashedPassword1, hashedPassword2)) {
        return false;
    }
    return true;
}

module.exports = { hashPassword, isSamePassword };