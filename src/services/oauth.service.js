/**
 * Module dependencies.
 */
import OAuthTokensModel from '../models/oauth.token.model'
import OAuthUsersModel from '../models/oauth.user.model';
import OAuthClientsModel from '../models/oauth.client.model';

////////////////////////////////////////////////////////////////////////////////////////
//NOTE: for oauth-node-server not supprting the import & export, so we use module.exports here!!!
////////////////////////////////////////////////////////////////////////////////////////

/**
 * Get access token.
 */

module.exports.getAccessToken = function(bearerToken, cb) {
	console.log('in getAccessToken (bearerToken: ' + bearerToken + ')');

	return OAuthTokensModel.findOne({
		accessToken: bearerToken
	}).lean().then(r => cb(null, r), e => cb(e));
};

/**
 * Get client.
 */

module.exports.getClient = function(clientId, clientSecret, callback) {
	console.log('in getClient (clientId: ' + clientId + ', clientSecret: ' + clientSecret + ')');

	return OAuthClientsModel.findOne({
		clientId: clientId,
		clientSecret: clientSecret
	}).lean().then(x => callback(null, x), e => callback(e));
};

/**
 * Get refresh token.
 */

module.exports.getRefreshToken = function(refreshToken, cb) {
	console.log('in getRefreshToken (refreshToken: ' + refreshToken + ')');

	return OAuthTokensModel.findOne({
		refreshToken: refreshToken
	}).lean().then(r => cb(null, r), e => cb(e));
};

/*
 * Get user.
 */

module.exports.getUser = function(username, password, cb) {
	console.log('in getUser (username: ' + username + ', password: ' + password + ')');

	return OAuthUsersModel.findOne({
		name: username,
		password: password
	}).lean().then(u => cb(null, u), e => cb(e));
};

/**
 * Save token.
 */

module.exports.saveAccessToken = function(token, client, expires, user, cb) {
	console.log('in saveToken (token: ' + token + ')');

	var accessToken = new OAuthTokensModel({
		accessToken: token,
		expires: expires,
		accessTokenExpiresOn: expires,
		clientId: client,
		refreshToken: token,
		refreshTokenExpiresOn: expires,
		userId: user.id
	});

	return accessToken.save().then((res) => cb(null, res), (err) => cb(err));
};


module.exports.grantTypeAllowed = function(clientId, grantType, cb) {
	console.log(true);
	cb(null, true);
}
