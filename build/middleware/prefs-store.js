'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _userActions = require('../actions/user-actions');

var userActions = _interopRequireWildcard(_userActions);

var _actionTypes = require('../actions/action-types');

var types = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = function (prefs) {
	return function (_ref) {
		var getState = _ref.getState;
		var dispatch = _ref.dispatch;
		return function (next) {
			return function (action) {
				var result = next(action);

				switch (action.type) {
					case types.USER_LOAD:
						if (prefs.session_id) {
							dispatch(userActions.loadUserFromPrefs(prefs.user, prefs.session_id));
						}
						break;
					case types.USER_LOGIN_SUCCESS:
						prefs.user = result.result.data.user;
						prefs.session_id = result.result.data.session_id;
						break;
					case types.USER_LOGOUT_SUCCESS:
						prefs.user = null;
						prefs.session_id = null;
						break;
					default:
				}

				return result;
			};
		};
	};
};
//# sourceMappingURL=prefs-store.js.map