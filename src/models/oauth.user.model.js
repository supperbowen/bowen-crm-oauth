var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.model('OAuthUsers', new Schema({
	name: String,
	nickName: String,
	email: String,
	password: String
}));


export default mongoose.model('OAuthUsers');