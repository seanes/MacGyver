var express = require('express');
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var db = require('./db');
const port = process.env.port || 8989;
const expressSession = require('express-session');
const flash = require('connect-flash');
const cors = require('cors');

var app = express();

const errorHandler = (req, res, next) => {
  console.log(req.sessionID);
  next();
}

app.use(require('morgan')('combined'));
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(expressSession({ secret: 'SFVI', resave: false, saveUninitialized: false, cookie : { secure : false }}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(errorHandler);


const ensureLogin = (req, res, next) => {
  if (req.isAuthenticated()) { return next(); }
  res.sendStatus(403);
}

passport.use('local', new Strategy({
  passReqToCallback : true
},
  (req, username, password, next) => {

    db.users.findByUsername(username, (err, user) => {

      if (err) { return next(err); }
      if (!user) { return next(null, false); }
      if (user.password != password) { return next(null, false); }
      return next(null, user);
    });
  }));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  db.users.findById(id, (err, user) => {
    if (err) { return done(err); }
    done(null, user);
  });
});


app.use(cors({ origin: 'http://localhost:3000', methods:['GET','POST', 'OPTIONS'], credentials: true }));

app.post('/login',
  passport.authenticate('local', { failWithError: true }),
  (req, res, next) => {
    req.session.save();
    res.json({ profile: db.users.findProfile(req.user.id)});
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
  ensureLogin,
  (req, res) => {
    const profile = db.users.findProfile(req.user.id);
    res.json({profile: profile});
  });

app.get('/participants',
  ensureLogin,
  (req, res) => {
    const participants = db.users.findParticipants();
    res.json(participants);
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
