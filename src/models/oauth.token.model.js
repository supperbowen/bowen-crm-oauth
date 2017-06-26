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

export default mongoose.model('OAuthTokens');