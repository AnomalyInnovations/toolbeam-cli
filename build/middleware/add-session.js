'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _userActions = require('../actions/user-actions');

exports.default = function (_ref) {
	var getState = _ref.getState;
	var dispatch = _ref.dispatch;
	return function (next) {
		return function (action) {

			if (action.promise) {
				(function () {
					var sessionId = (0, _userActions.getSessionId)(getState());
					var promise = action.promise;

					action.promise = function (client) {
						return promise(client, sessionId);
					};
				})();
			}

			return next(action);
		};
	};
}; /**
    * Middleware to add the session id to any api client calls 
    */
//# sourceMappingURL=add-session.js.map