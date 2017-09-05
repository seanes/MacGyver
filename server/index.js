var express = require('express');
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var bodyParser = require("body-parser");
var dbOperations = require('./db');
var apicache = require('apicache');
var compression = require('compression')



const port = process.env.port || 8989;
const expressSession = require('express-session');
const flash = require('connect-flash');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const cache = apicache.middleware;

MongoClient.connect('mongodb://sean:scully@ds017776.mlab.com:17776/macgyver-test', (err, mongoDb) => {
  var app = express();


  app.use(bodyParser.json());
  app.use(require('body-parser').urlencoded({ extended: true }));
  app.use(expressSession({ secret: 'SFVI', resave: false, saveUninitialized: false, cookie : { secure : false, maxAge: 604800000 }}));
  app.use(flash());
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(compression());


  const ensureLogin = (req, res, next) => {
    if (req.isAuthenticated()) { return next(); }
    res.sendStatus(403);
  }

  passport.use('local', new Strategy({
      passReqToCallback : true
    },
    (req, username, password, next) => {

      dbOperations.users.findByUsername(mongoDb, username, (err, user) => {

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
    dbOperations.users.findById(mongoDb, id, (err, user) => {
      if (err) { return done(err); }
      done(null, user);
    });
  });


  app.use(cors({ origin: true, methods:['GET','POST', 'OPTIONS'], credentials: true }));

  app.post('/login',
    passport.authenticate('local', { failWithError: true }),
    (req, res, next) => {
      process.nextTick( () => {
        dbOperations.users.findProfile(mongoDb, req.user.participantId, (err, profile) => {
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
      dbOperations.users.findProfile(mongoDb, req.user.participantId, (err, profile) => {
        res.json({profile});
      });
    });

  app.get('/participants',
    [ensureLogin, cache('1 month')],
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
      dbOperations.users.addAgent(mongoDb, req.user.participantId, req.body.agentName, (error, result) => {
        if (error) {
          res.sendStatus(404);
        } else {
          res.json(result);
        }
      });
    });

  app.get('/agents',
    ensureLogin,
    (req, res) => {
      dbOperations.users.findCaughtAgents(mongoDb, req.user.participantId, (err, result) => {
        res.json(result);
      });
    });

  app.get('/highscore',
    ensureLogin,
    (req, res) => {
      dbOperations.users.getHighScore(mongoDb, req.user.participantId, (err, result) => {
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