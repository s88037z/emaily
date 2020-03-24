const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

// to generate a piece of identical info  from the DB's instance we fetch ,and passport would use it and set up cookie for us
passport.serializeUser((user, done) => {
  //arg1(user) is a user model instance , which  we pass from the strategy callback's done function  (in below)
  done(null, user.id); //arg2 is the identical information going to identify user in the follow request (the user.id  is generated by mongoDB  )
});

// deserialize the cookie into  the usel model instance
passport.deserializeUser(async (id, done) => {
  // arg1(id) is the token we previous stuffed to a cookie
  let user = await User.findById(id);
  done(null, user); //the user model instance(arg2) is going to add on req object as "req.user"
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true //tell strategy that when request go through any proxy (ex Heroku proxy)is totally fine,still use  "https"
    },

    async (accessToken, refreshToken, profile, done) => {
      //the callback function would execute when passport has used the 'code' and exchanged the data back.
      let user = await User.findOne({ googleId: profile.id });
      if (user) {
        done(null, user); // call the done function to tell passport continue the process(serialize),it need two args : (error obj ,user record )
      } else {
        const newUser = await new User({ googleId: profile.id }).save();
        done(null, newUser);
      }
    }
  )
);
