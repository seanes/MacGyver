var express = require('express');
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var db = require('./db');
const port = process.env.port || 3000;

passport.use(new Strategy(
  (username, password, cb) => {
    db.users.findByUsername(username, (err, user) => {
      if (err) { return cb(err); }
      if (!user) { return cb(null, false); }
      if (user.password != password) { return cb(null, false); }
      return cb(null, user);
    });
  }));

passport.serializeUser((user, cb) => {
  cb(null, user.id);
});

passport.deserializeUser((id, cb) => {
  db.users.findById(id, (err, user) => {
    if (err) { return cb(err); }
    cb(null, user);
  });
});


var app = express();

app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'Street Fighter V', resave: false, saveUninitialized: false }));

app.use(passport.initialize());
app.use(passport.session());

app.get('/login',
  (req, res) => {
    req.logout();
    res.send({
      isLoggedIn: false
    });
  }
);

app.post('/login',
  passport.authenticate('local', { failureRedirect: '/login' }),
  (req, res) => {
    res.send({ user: req.user, isLoggedIn: true })
  });

app.post('/logout',
  (req, res) => {
    req.logout();
    res.redirect('/login');
  });

app.get('/profile',
  require('connect-ensure-login').ensureLoggedIn(),
  (req, res) => (
    res.send({ user: req.user, isLoggedIn: true })
  ));

app.listen(port, (err) => {
  if (err) {
    console.err(err.stack)
  } else {
    console.log(`App listening on port ${port}`)
  }
});