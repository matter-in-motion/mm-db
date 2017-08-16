'use strict';
const Db = require('./db');

module.exports = () => ({
  db: { '~': new Db() }
});
