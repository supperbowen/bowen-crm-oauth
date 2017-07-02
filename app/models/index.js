'use strict';

var _oauthToken = require('./oauth.token.model');

var _oauthToken2 = _interopRequireDefault(_oauthToken);

var _oauthUser = require('./oauth.user.model');

var _oauthUser2 = _interopRequireDefault(_oauthUser);

var _oauthClient = require('./oauth.client.model');

var _oauthClient2 = _interopRequireDefault(_oauthClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get access token.
 */

module.exports.getAccessToken = regeneratorRuntime.mark(function _callee(bearerToken) {
	return regeneratorRuntime.wrap(function _callee$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					console.log('in getAccessToken (bearerToken: ' + bearerToken + ')');

					_context.next = 3;
					return _oauthToken2.default.findOne({
						accessToken: bearerToken
					});

				case 3:
					return _context.abrupt('return', _context.sent);

				case 4:
				case 'end':
					return _context.stop();
			}
		}
	}, _callee, this);
});

/**
 * Get client.
 */

/**
 * Module dependencies.
 */
module.exports.getClient = regeneratorRuntime.mark(function _callee2(clientId, clientSecret) {
	return regeneratorRuntime.wrap(function _callee2$(_context2) {
		while (1) {
			switch (_context2.prev = _context2.next) {
				case 0:
					console.log('in getClient (clientId: ' + clientId + ', clientSecret: ' + clientSecret + ')');

					_context2.next = 3;
					return _oauthClient2.default.findOne({
						clientId: clientId,
						clientSecret: clientSecret
					});

				case 3:
					return _context2.abrupt('return', _context2.sent);

				case 4:
				case 'end':
					return _context2.stop();
			}
		}
	}, _callee2, this);
});

/**
 * Get refresh token.
 */

module.exports.getRefreshToken = regeneratorRuntime.mark(function _callee3(refreshToken) {
	return regeneratorRuntime.wrap(function _callee3$(_context3) {
		while (1) {
			switch (_context3.prev = _context3.next) {
				case 0:
					console.log('in getRefreshToken (refreshToken: ' + refreshToken + ')');

					_context3.next = 3;
					return _oauthToken2.default.findOne({
						refreshToken: refreshToken
					});

				case 3:
					return _context3.abrupt('return', _context3.sent);

				case 4:
				case 'end':
					return _context3.stop();
			}
		}
	}, _callee3, this);
});

/*
 * Get user.
 */

module.exports.getUser = regeneratorRuntime.mark(function _callee4(username, password) {
	return regeneratorRuntime.wrap(function _callee4$(_context4) {
		while (1) {
			switch (_context4.prev = _context4.next) {
				case 0:
					console.log('in getUser (username: ' + username + ', password: ' + password + ')');

					_context4.next = 3;
					return _oauthUser2.default.findOne({
						username: username,
						password: password
					});

				case 3:
					return _context4.abrupt('return', _context4.sent);

				case 4:
				case 'end':
					return _context4.stop();
			}
		}
	}, _callee4, this);
});

/**
 * Save token.
 */

module.exports.saveToken = regeneratorRuntime.mark(function _callee5(token, client, user) {
	var accessToken;
	return regeneratorRuntime.wrap(function _callee5$(_context5) {
		while (1) {
			switch (_context5.prev = _context5.next) {
				case 0:
					console.log('in saveToken (token: ' + token + ')');

					accessToken = new _oauthToken2.default({
						accessToken: token.accessToken,
						accessTokenExpiresOn: token.accessTokenExpiresOn,
						clientId: client.id,
						refreshToken: token.refreshToken,
						refreshTokenExpiresOn: token.refreshTokenExpiresOn,
						userId: user.id
					});
					_context5.next = 4;
					return accessToken.save();

				case 4:
					return _context5.abrupt('return', _context5.sent);

				case 5:
				case 'end':
					return _context5.stop();
			}
		}
	}, _callee5, this);
});
//# sourceMappingURL=index.js.map