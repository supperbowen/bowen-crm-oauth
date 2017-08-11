'use strict';

require('babel-polyfill');

var _context2 = require('./common/context');

var _context3 = _interopRequireDefault(_context2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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

//鉴权服务
koaRouter.post('/authorize', function () {
	var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx) {
		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						app.oauth.authorise()().then(function (arg) {
							console.log(arg);
						});
						ctx.body = 'Hello Koa in app.js';

					case 2:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this);
	}));

	return function (_x) {
		return _ref.apply(this, arguments);
	};
}());
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
mongoose.connect(_context3.default.dburl);

app.listen(8086);
console.log('server started : http://localhost:8086/');
//# sourceMappingURL=index.js.map