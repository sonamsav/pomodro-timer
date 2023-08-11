const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID =
  "830803078145-f8nd48a6rq01f7c82tshtkisv4r5dr8j.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);
