'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.model('OAuthUsers', new Schema({
	name: String,
	nickName: String,
	email: String,
	password: String
}));

exports.default = mongoose.model('OAuthUsers');
//# sourceMappingURL=oauth.user.model.js.map