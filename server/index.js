const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session"); //let us have a access to cookie
const passport = require("passport");
const keys = require("./config/keys");

require("./models/User"); //just execute it ,not return/assign anything
require("./services/passport");

mongoose
  .connect(keys.mongoURI, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("connect to DB!");
  })
  .catch(err => {
    console.log("Error", err.message);
  });

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, //how long is the cookie exist before expire out //30days
    keys: [keys.cookieKey] //used to encrypt cookie
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

app.get("/", (res, req) => {
  req.send({ hi: "it's a test" });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT);
