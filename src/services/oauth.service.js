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

module.exports.getAccessToken = function*(bearerToken) {
	console.log('in getAccessToken (bearerToken: ' + bearerToken + ')');

	return yield OAuthTokensModel.findOne({
		accessToken: bearerToken
	});
};

/**
 * Get client.
 */

module.exports.getClient = function*(clientId, clientSecret) {
	console.log('in getClient (clientId: ' + clientId + ', clientSecret: ' + clientSecret + ')');

	return yield OAuthClientsModel.findOne({
		clientId: clientId,
		clientSecret: clientSecret
	});
};

/**
 * Get refresh token.
 */

module.exports.getRefreshToken = function*(refreshToken) {
	console.log('in getRefreshToken (refreshToken: ' + refreshToken + ')');

	return yield OAuthTokensModel.findOne({
		refreshToken: refreshToken
	});
};

/*
 * Get user.
 */

module.exports.getUser = function*(username, password) {
	console.log('in getUser (username: ' + username + ', password: ' + password + ')');

	return yield OAuthUsersModel.findOne({
		username: username,
		password: password
	});
};

/**
 * Save token.
 */

module.exports.saveToken = function*(token, client, user) {
	console.log('in saveToken (token: ' + token + ')');

	var accessToken = new OAuthTokensModel({
		accessToken: token.accessToken,
		accessTokenExpiresOn: token.accessTokenExpiresOn,
		clientId: client.id,
		refreshToken: token.refreshToken,
		refreshTokenExpiresOn: token.refreshTokenExpiresOn,
		userId: user.id
	});

	return yield accessToken.save();
};
