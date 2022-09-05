const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const User = require('../models/User');

// https://www.digitalocean.com/community/tutorials/api-authentication-with-json-web-tokensjwt-and-passport

passport.use(
    'login',
    new localStrategy(
        {
            usernameField: 'email',
            passwordField: 'password'
        },
        async (email, password, done) => {
            try {
                const user = await User.findOne({ email });

                if (!user) {
                    return done(null, false, { message: 'User not found' });
                }

                const validate = await user.isValidPassword(password);

                if (!validate) {
                    return done(null, false, { message: 'Wrong Password' });
                }

                return done(null, user, { message: 'Logged in Successfully' });
            } catch (error) {
                return done(error);
            }
        }
    )
);

const cookieExtractor = req => {
    var token = null;
    if (req && req.cookies) {
        token = req.cookies['SESSION_TOKEN'];
    }
    return token;
};

// JSON Web Token is saved as Cookie named "SESSION_TOKEN"
// Frontend must send the cookie to backend for authentication
// Content of JWT is email and password but hashed
// Why as cookie? It's safe due to the attribute "HttpOnly" and the user cannot view the cookie
passport.use(
    new JWTstrategy({
            secretOrKey: process.env.TOKEN_SECRET,
            jwtFromRequest: cookieExtractor
        },
        async (token, done) => {
            try {
                const user = await User.findOne({_id: token.user._id});
                if (user) {
                    token.user.isAdmin = user.isAdmin;
            }
            return done(null, token.user);
        } catch (error) {
            done(error);
        }
    })
);
