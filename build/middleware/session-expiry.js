'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _userActions = require('../actions/user-actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (store) {
	return function (next) {
		return function (action) {
			var result = next(action);

			result instanceof _promise2.default && result.catch(function (data) {
				if (data.error == 401) {
					store.dispatch((0, _userActions.logoutSuccess)());
				}
				return data;
			});

			return result;
		};
	};
}; /**
    * Middleware to clear the session and prefs
    * when the API returns a 401 error
    */
//# sourceMappingURL=session-expiry.js.map