'use strict';

require('babel-polyfill');

var _context = require('./common/context');

var _context2 = _interopRequireDefault(_context);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var koaRouter = new require('koa-router')();


var bodypraser = require('koa-bodyparser');
var mount = require('koa-mount');
var oauthserver = require('koa-oauth-server');
var model = require('./services/oauth.service');

var Koa = require('koa');
var app = new Koa();

app.oauth = oauthserver({
	model: model, // See https://github.com/thomseddon/node-oauth2-server for specification
	grants: ['password'],
	debug: true
});

app.use(bodypraser());

// Mount `oauth2` route prefix.
app.use(mount('/oauth2', koaRouter.middleware()));

// Register `/token` POST path on oauth router (i.e. `/oauth2/token`).
koaRouter.post('/token', app.oauth.grant());
//app.use(app.oauth.authorise());

koaRouter.get('/test', function () {
	this.body = 'hello world!';
});

// app.use(function *(next) {
//   this.body = 'Secret area';
//   yield next;
// });

app.use(koaRouter.routes()).use(koaRouter.allowedMethods());

var mongoose = require('mongoose');
mongoose.connect(_context2.default.dburl);

app.listen(8089);
console.log('server started : http://localhost:8089/');
//# sourceMappingURL=index.js.map