'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.model('OAuthClients', new Schema({
	clientId: {
		type: String
	},
	clientSecret: {
		type: String
	},
	redirectUris: {
		type: Array
	}
}));

exports.default = mongoose.model('OAuthClients');
//# sourceMappingURL=oauth.client.model.js.map