const records = [
  { id: 1, username: 'sean', password: 'scully' },
  { id: 2, username: 'terje', password: 'lonoy'}
];

const profiles = [
  { id: 1, userId: 1, firstName: 'Sean', lastName: 'Scully', description: 'Utviklet dette programmet', img: null, tags: ['Latin', 'Programmering'], score: 100,
  },
  { id: 2, userId: 2, firstName: 'Terje', lastName: 'Lønøy', description: 'Utviklet dette programmet', img: null, tags: ['Brettspill', 'Programmering'], score: 50
  },
];

exports.findById = (id, cb) => {
  process.nextTick(() => {
    let idx = id - 1;
    if (records[idx]) {
      cb(null, records[idx]);
    } else {
      cb(new Error('User ' + id + ' does not exist'));
    }
  });
};


exports.findProfile = userId => {
    for (let i = 0; i < profiles.length; i++) {
      let profile = profiles[i];
      if (profile.userId == userId) {
        return profile;
      }
    }
    return null;
};

exports.getHighScore = () => {
  const sortedProfiles = profiles.sort( (a, b) => b.score - a.score);
  let highscoreList = [];
  for (let i = 0; i < Math.min(sortedProfiles.length, 10); i ++) {
    const profile = sortedProfiles[i];
    highscoreList.push({
      name: profile.firstName + ' ' + profile.lastName,
      score: profile.score,
      rank: i+1
    });
  }
  return highscoreList;
};

exports.findByUsername = (username, cb) => {
  process.nextTick(() => {
    for (let i = 0, len = records.length; i < len; i++) {
      let record = records[i];
      if (record.username === username) {
        return cb(null, record);
      }
    }
    return cb(null, null);
  });
};
