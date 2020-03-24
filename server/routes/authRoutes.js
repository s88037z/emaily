const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      //the passport-google-strategy have a identifier for string:"google",when you specific the string, it would use this strategy
      scope: ["profile", "email"] // 'scope' is the option argument,to tell Google  which assets we wanna know
    })
  );
  app.get(
    "/auth/google/callback",
    passport.authenticate("google"), //(it's a middleware)now the google redirect user to the URL with the authenticated 'code',when passport seeing that it would handle it differently from above route.(take the code and exchange profile with google)
    //after the authenticate is called
    (req, res) => {
      res.redirect("/surveys"); //tell 'browser' to redirect
    }
  );

  app.get("/api/logout", (req, res) => {
    req.logout(); // take the cookie contained with user id ,and kill it.
    res.send(`${req.user},"logout"`);
  });

  app.get("/api/current_user", (req, res) => {
    // console.log(req.session);
    res.send(req.user);
  });
};
