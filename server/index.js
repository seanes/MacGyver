var express = require('express');
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var bodyParser = require("body-parser");
var db = require('./db');
const port = process.env.port || 8989;
const expressSession = require('express-session');
const flash = require('connect-flash');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;


MongoClient.connect('mongodb://sean:scully@ds017776.mlab.com:17776/macgyver-test', (err, mongoDb) => {
  var app = express();

  const errorHandler = (req, res, next) => {
    console.log(req.sessionID);
    next();
  }

  app.use(require('morgan')('combined'));
  app.use(bodyParser.json());
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

      db.users.findByUsername(mongoDb, username, (err, user) => {

        if (err) { return next(err); }
        if (!user) { return next(null, false); }
        if (user.password != password) { return next(null, false); }

        return next(null, user);
      });
    }));

  passport.serializeUser((user, done) => {
    done(null, user.participantId);
  });

  passport.deserializeUser((id, done) => {
    db.users.findById(mongoDb, id, (err, user) => {
      if (err) { return done(err); }
      done(null, user);
    });
  });


  app.use(cors({ origin: 'http://localhost:3000', methods:['GET','POST', 'OPTIONS'], credentials: true }));

  app.post('/login',
    passport.authenticate('local', { failWithError: true }),
    (req, res, next) => {
      process.nextTick( () => {
        db.users.findProfile(mongoDb, req.user.participantId, (err, profile) => {
          if (err) {
            res.sendStatus(401)
          } else {
            req.session.save();
            res.json({ profile });
          }
        });
      })
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
      db.users.findProfile(mongoDb, req.user.participantId, (err, profile) => {
        res.json({profile});
      });
    });

  app.get('/participants',
    ensureLogin,
    (req, res) => {
      process.nextTick(() => {
        mongoDb.collection('participants').find({}, {agentName: 0}).sort().toArray(function(err, results) {
          res.send(results);
        });
      });
    });

  app.post('/agents/',
    ensureLogin,
    (req, res) => {

      const agents = db.users.addCaughtAgent(req.user.id, req.body.agentName);

      if (agents) {
        res.json(agents);
      } else {
        res.sendStatus(404);
      }

    });

  app.get('/agents',
    ensureLogin,
    (req, res) => {
      const caughtAgents = db.users.findCaughtAgents(req.user.id);
      res.json(caughtAgents);
    });

  app.get('/highscore',
    ensureLogin,
    (req, res) => {
      db.users.getHighScore(mongoDb, (err, result) => {
        if (err) {
          res.sendStatus(500);
        } else {
          res.json(result);
        }
      })
    });

  app.listen(port, (err) => {
    if (err) {
      console.err(err.stack)
    } else {
      console.log(`App listening on port ${port}`);
    }
  });

});