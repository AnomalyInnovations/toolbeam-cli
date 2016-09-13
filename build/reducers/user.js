'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = user;

var _actionTypes = require('../actions/action-types');

var types = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
	session_id: null,
	user: null,
	login_error: null,
	logout_error: null
};

function user() {
	var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	switch (action.type) {

		case types.USER_LOAD:
			return state;
		case types.USER_LOAD_SUCCESS:
			return (0, _extends3.default)({}, state, {
				session_id: action.session_id,
				user: action.user
			});

		case types.USER_LOGIN:
			return (0, _extends3.default)({}, state, {
				login_error: null
			});
		case types.USER_LOGIN_SUCCESS:
			var result = action.result.data;

			return (0, _extends3.default)({}, state, {
				session_id: result.session_id,
				user: result.user
			});
		case types.USER_LOGIN_FAIL:
			return (0, _extends3.default)({}, state, {
				login_error: action.error
			});

		case types.USER_LOGOUT:
			return (0, _extends3.default)({}, state, {
				logout_error: null
			});
		case types.USER_LOGOUT_SUCCESS:
			return state;
		case types.USER_LOGOUT_FAIL:
			return (0, _extends3.default)({}, state, {
				logout_error: action.error
			});

		default:
			return state;
	}
}
//# sourceMappingURL=user.js.map