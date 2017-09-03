var ObjectID = require('mongodb').ObjectID;
var ScoreCalculator = require('../scoreCalculator');

exports.findById = (db, id, cb) => {
  process.nextTick(() => {
    db
      .collection('users')
      .findOne({ participantId: new ObjectID(id) }, (err, record) => {
        if (err || record === null) {
          cb(err, null);
        }
        cb(null, record);
      });
  });
};

exports.addAgent = (db, userId, agentName, cb) => {
  process.nextTick(() => {
    db
      .collection('agents')
      .findOne({ participantId: new ObjectID(userId) }, (err, record) => {
        if (err || record === null) {
          cb(true, null);
        }

        let caughtAgents = record.caughtAgents;
        let score = record.score || 0;
        let collectedTags = record.collectedTags;
        let myTags = record.myTags;
        let myAgentName = record.agentName;
        let allTagsMap = record.myTags;

        const alreadyAdded = caughtAgents.some(
          caught =>
            caught.agentName.trim().toLowerCase() ===
            agentName.trim().toLowerCase()
        );

        if (alreadyAdded) {
          cb(true, null);
          return;
        }

        const agentNameRe = new RegExp(['^', agentName, '$'].join(''), 'i');

        // check if user is trying to add himself

        if (agentNameRe.test(record.agentName.trim())) {
          cb(true, null);
          return;
        }

        db
          .collection('agents')
          .findOne({ agentName: agentNameRe }, (err, agent) => {
            if (err || agent === null) {
              cb(true, null);
              return;
            }

            caughtAgents.push({
              fullName: agent.fullName,
              agentName: agent.agentName,
              added: new Date()
            });

            let newCollectedTags = ScoreCalculator.getNewCollectedTags(myTags, collectedTags, agent.myTags);

            score = ScoreCalculator.addScoreForTagCount(score, collectedTags.length, newCollectedTags.length);

            allTagsMap = ScoreCalculator.addTagsForNewAgent(allTagsMap, agent.myTags);

            score = ScoreCalculator.addScoreForTagNewTags(score, allTagsMap, agent.myTags);

            score = ScoreCalculator.addScoreForAgent(score, agent.agentName);

            db.collection('agents').updateOne({ _id: record._id }, {
              $set: {
                score: score,
                caughtAgents: caughtAgents,
                collectedTags: newCollectedTags,
                allTagsMap: allTagsMap
              }
            }, err => {
              if (err) {
                cb(err, null);
                return;
              }

              cb(null, {
                myAgentName: myAgentName,
                caught: caughtAgents
              });
            });
          });
      });
  });
};

exports.findCaughtAgents = (db, participantId, cb) => {
  process.nextTick(() => {
    db
      .collection('agents')
      .findOne(
        { participantId: new ObjectID(participantId) },
        (err, record) => {
          if (err || record === null) {
            cb(err, null);
          } else {
            cb(null, {
                caught: record.caughtAgents,
                myAgentName: record.agentName
            });
          }
        }
      );
  });
};

exports.findProfile = (db, userId, cb) => {
  process.nextTick(() => {
    db
      .collection('participants')
      .findOne({ _id: new ObjectID(userId) }, (err, record) => {
        if (err || record === null) {
          cb(err, null);
        } else {
          cb(null, record);
        }
      });
  });
};

exports.getHighScore = (db, participantId, cb) => {
  process.nextTick(() => {
    db
      .collection('agents')
      .find()
      .sort({ score: -1 })
      .toArray(function(err, results) {
        if (err) {
          cb(err, null);
        } else {

          const highscoreList = results.map((record, index) => ({
            name: record.fullName,
            score: record.score || 0,
            rank: index + 1
          }));

          db.collection('agents')
          .find({participantId: participantId})
          .toArray((err, results) => {
            if (results && results.length) {
              cb(null, {
                list: highscoreList,
                myName: results[0].fullName,
                myScore: results[0].score || 0
              });
            } else {
              cb(null, {
                list: highscoreList,
                myScore: 0
              });
            }
          });

        }
      });
  });
};

exports.findByUsername = (db, username, cb) => {
  process.nextTick(() => {
    db.collection('users').findOne({ username: username }, (err, record) => {
      if (err || record === null) {
        cb(err, null);
      }
      cb(null, record);
    });
  });
};
