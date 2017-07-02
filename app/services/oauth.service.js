'use strict';

var _oauthToken = require('../models/oauth.token.model');

var _oauthToken2 = _interopRequireDefault(_oauthToken);

var _oauthUser = require('../models/oauth.user.model');

var _oauthUser2 = _interopRequireDefault(_oauthUser);

var _oauthClient = require('../models/oauth.client.model');

var _oauthClient2 = _interopRequireDefault(_oauthClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

////////////////////////////////////////////////////////////////////////////////////////
//NOTE: for oauth-node-server not supprting the import & export, so we use module.exports here!!!
////////////////////////////////////////////////////////////////////////////////////////

/**
 * Get access token.
 */

module.exports.getAccessToken = function (bearerToken, cb) {
	console.log('in getAccessToken (bearerToken: ' + bearerToken + ')');

	return _oauthToken2.default.findOne({
		accessToken: bearerToken
	}).lean().then(function (r) {
		return cb(null, r);
	}, function (e) {
		return cb(e);
	});
};

/**
 * Get client.
 */

/**
 * Module dependencies.
 */
module.exports.getClient = function (clientId, clientSecret, callback) {
	console.log('in getClient (clientId: ' + clientId + ', clientSecret: ' + clientSecret + ')');

	return _oauthClient2.default.findOne({
		clientId: clientId,
		clientSecret: clientSecret
	}).lean().then(function (x) {
		return callback(null, x);
	}, function (e) {
		return callback(e);
	});
};

/**
 * Get refresh token.
 */

module.exports.getRefreshToken = function (refreshToken, cb) {
	console.log('in getRefreshToken (refreshToken: ' + refreshToken + ')');

	return _oauthToken2.default.findOne({
		refreshToken: refreshToken
	}).lean().then(function (r) {
		return cb(null, r);
	}, function (e) {
		return cb(e);
	});
};

/*
 * Get user.
 */

module.exports.getUser = function (username, password, cb) {
	console.log('in getUser (username: ' + username + ', password: ' + password + ')');

	return _oauthUser2.default.findOne({
		name: username,
		password: password
	}).lean().then(function (u) {
		return cb(null, u);
	}, function (e) {
		return cb(e);
	});
};

/**
 * Save token.
 */

module.exports.saveAccessToken = function (token, client, expires, user, cb) {
	console.log('in saveToken (token: ' + token + ')');

	var accessToken = new _oauthToken2.default({
		accessToken: token.accessToken,
		accessTokenExpiresOn: token.accessTokenExpiresOn,
		clientId: client.id,
		refreshToken: token.refreshToken,
		refreshTokenExpiresOn: token.refreshTokenExpiresOn,
		userId: user.id
	});

	return accessToken.save().then(function (res) {
		return cb(null, res);
	}, function (err) {
		return cb(err);
	});
};

module.exports.grantTypeAllowed = function (clientId, grantType, cb) {
	console.log(true);
	cb(null, true);
};
//# sourceMappingURL=oauth.service.js.map