import 'babel-polyfill';
var koaRouter = new require('koa-router')();
import context from './common/context';

const bodypraser = require('koa-bodyparser');
const mount = require('koa-mount');
const oauthserver = require('koa-oauth-server');
const model = require('./services/oauth.service');

const Koa = require('koa');
const app = new Koa();

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

koaRouter.get('/test', function() {
	this.body = 'hello world!';
});

// app.use(function *(next) {
//   this.body = 'Secret area';
//   yield next;
// });

app.use(koaRouter.routes())
	.use(koaRouter.allowedMethods());

var mongoose = require('mongoose');
mongoose.connect(context.dburl);

app.listen(8089);
console.log('server started : http://localhost:8089/');
