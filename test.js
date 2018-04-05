'use strict';
const test = require('ava');
const extension = require('./index');
const createApp = require('mm-test').createApp;

process.env.NODE_ENV = 'production';
const app = createApp({
  extensions: [
    'rethinkdb',
    extension
  ],

  db: 'rethinkdb',

  rethinkdb: {
    db: 'test',
    silent: true
  }
}, { default: false });

test('gets default database', t => {
  const rethinkdb = app.units.require('db.rethinkdb');
  const db = app.units.require('db');
  t.is(rethinkdb, db);
});
