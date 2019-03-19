const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/User');
require('dotenv').config();

const opts = {};
// set options
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET;

// export authentication middleware with passport strategy for authenticating JWT
module.exports = async passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      const user = User.findById(jwt_payload.id);
      if (user) return done(null, user);
      return done(null, false);
    }),
  );
};
