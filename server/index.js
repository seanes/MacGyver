var express = require('express');
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var db = require('./db');
const port = process.env.port || 8989;

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

app.use( (req, res, next) => {
  // TODO: Do not allow * in production
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,POST');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  if ('OPTIONS' == req.method) return res.sendStatus(200);

  next();
});

app.use(passport.initialize());
app.use(passport.session());

app.post('/login',
  passport.authenticate('local', { failWithError: true }),
  (req, res, next) => {
    res.json({ profile: db.users.findProfile(req.user.id)})
  },
  (err, req, res, next) => {
    res.sendStatus(401)
  }
);

app.post('/logout',
  (req, res) => {
    req.logout();
    res.sendStatus(200);
  });

app.get('/profile',
  require('connect-ensure-login').ensureLoggedIn(),
  (req, res) => {
    const profile = db.users.findProfile(req.user.id);
    if (profile) {
      res.json({profile: profile});
    } else {
      res.status(404).json({error: 'Profile not found'});
    }
  });


app.get('/highscore',
  require('connect-ensure-login').ensureLoggedIn(),
  (req, res) => {
    res.json(db.users.getHighScore());
  });

app.listen(port, (err) => {
  if (err) {
    console.err(err.stack)
  } else {
    console.log(`App listening on port ${port}`)
  }
});