import 'babel-polyfill';
import {
	koaRouter
} from './router';

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


app.use(koaRouter.routes())
	.use(koaRouter.allowedMethods());

var mongoose = require('mongoose');
mongoose.connect(context.dburl);

app.listen(8089);
console.log('server started : http://localhost:8089/');