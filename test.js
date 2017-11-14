'use strict';
const test = require('ava');
const extension = require('./index');
const createApp = require('mm-test').createApp;

process.env.NODE_ENV = 'production';
const app = createApp({
  extensions: [
    'http',
    'rethinkdb',
    extension
  ],

  db: 'rethinkdb',

  rethinkdb: {
    db: 'test',
    silent: true
  },

  http: {
    port: 3000,
    host: '0.0.0.0'
  }
});

test('gets default database', t => {
  const rethinkdb = app.units.require('db.rethinkdb');
  const db = app.units.require('db');
  t.is(rethinkdb, db);
});
