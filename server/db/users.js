const records = [
  { id: 1, username: 'sean', password: 'scully' },
  { id: 2, username: 'terje', password: 'lonoy' }
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
