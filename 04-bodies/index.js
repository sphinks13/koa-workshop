
var fs = require('fs');
var stat = require('../01-co/index').stat;
var koa = require('koa');

var app = module.exports = koa();

/**
 * Create the `GET /stream` route that streams this file.
 * In node.js, the current file is available as a variable `__filename`.
 */

app.use(function* (next) {
  if (this.request.path !== '/stream') return yield* next;

  var fileStat = yield stat(__filename);
  this.response.type = 'application/javascript; charset=utf-8';
  this.response.body = fs.createReadStream(__filename);
  this.response.length = fileStat.size;
});

/**
 * Create the `GET /json` route that sends `{message:'hello world'}`.
 */

app.use(function* (next) {
  if (this.request.path !== '/json') return yield* next;

   this.response.body = {message:'hello world'};
});
