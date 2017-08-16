'use strict';

const Db = function() {
  this.instance = undefined
}

Db.prototype.__initRequired = true;

Db.prototype.__init = function(units) {
  const settings = units.require('core.settings').db;
  this.instance = units.require(settings);
};

Db.prototype.__instance = function() {
  return this.instance;
};

module.exports = Db;
