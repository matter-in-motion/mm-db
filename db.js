'use strict';

const Db = function() {
  this.instance = undefined
}

Db.prototype.__initRequired = true;

Db.prototype.__init = function(units) {
  const db = units.require('core.settings').require('db');
  this.instance = units.require(db);
};

Db.prototype.__instance = function() {
  return this.instance;
};

module.exports = Db;
