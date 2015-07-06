
var koa = require('koa');

var app = module.exports = koa();

app.use(function* (next) {
    if(this.request.path != '/') return yield next;

    this.response.body = 'hello world';
});

app.use(function* (next) {
    if(this.request.path != '/404') return yield next;

    this.response.status = 404;
    this.response.message = 'page not found';
});

app.use(function* (next) {
    if(this.request.path != '/500') return yield next;

    this.response.status = 500;
    this.response.message = 'internal server error';
});
