const copyCollection = require('./copy_collection').copyCollection;
const MongoClient = require('mongodb').MongoClient;
const emails = require('./emails.json');


const insertAgents = (db, cb) => {
  db.collection('participants').find({}, {firstName: 1, lastName: 1, tags: 1, agentName: 1}).sort().toArray(function(err, results) {
    const agents = results.map( ({_id, firstName, lastName, tags, agentName}) => {

      return {
        participantId: _id,
        fullName: firstName + ' ' + lastName,
        myTags: tags,
        caughtAgents: [],
        score: 0,
        agentName,
        collectedTags: [],
        allTagsMap: {}
      };

    });

    db.collection('agents').insertMany(agents, (err, results) => {
      cb();
    });
  });
}

const createPassword = () => Math.floor(Math.random() * (10000 - 0 + 1)) + 0;

const getEmail = name => {
  for (let i = 0; i < emails.length; i++) {
    const item = emails[i];
    if (item.name === name) {
      return item.email;
    }
  }

  console.log("unable to find email for " + name);
}

const createUsername = (firstName, lastName) => {
  let username = '';
  let firstNames = firstName.split(' ');
  let lastNames = lastName.split(' ');

  if (firstNames.length > 1) {
    username = firstNames[0].toLowerCase().trim();
  } else {
    username = firstName.toLowerCase().trim();
  }

  if (lastNames.length > 1) {
    username += '-' + lastNames[lastNames.length-1].toLowerCase().trim();
  } else {
    username += '-' + lastName.toLowerCase().trim();
  }
  return username;
}

const insertUsers = (db, cb) => {
  db.collection('participants').find({}, {firstName: 1, lastName: 1}).sort().toArray(function(err, results) {
    const users = results.map( ({_id, firstName, lastName}) => {
      const username = createUsername(firstName, lastName);
      const password = createPassword();
      return {
        participantId: _id,
        username,
        password,
        email: getEmail(firstName.trim() + " " + lastName.trim())
      };

    });

    db.collection('users').insertMany(users, (err, results) => {
      cb(results);
    });
  });
}

const sourceUrl = 'mongodb://passenger:passenger123@ds029381.mlab.com:29381/karl_siriann';
const targetUrl = 'mongodb://passenger:scully@ds131904-a0.mlab.com:31904/karl-siriann-prod';
const collectioName = 'participants';

copyCollection(sourceUrl, targetUrl, collectioName).then( results => {
  MongoClient.connect(targetUrl, (err, mongoDb) => {
    insertUsers(mongoDb, results => {
      insertAgents(mongoDb, results => {
        process.exit(0);
      });
    });
  });
});


