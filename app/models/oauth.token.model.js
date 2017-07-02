'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.model('OAuthTokens', new Schema({
	accessToken: {
		type: String
	},
	accessTokenExpiresOn: {
		type: Date
	},
	clientId: {
		type: String
	},
	refreshToken: {
		type: String
	},
	refreshTokenExpiresOn: {
		type: Date
	},
	userId: {
		type: String
	}
}));

exports.default = mongoose.model('OAuthTokens');
//# sourceMappingURL=oauth.token.model.js.map