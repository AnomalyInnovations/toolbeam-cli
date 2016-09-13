'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.load = load;
exports.loadUserFromPrefs = loadUserFromPrefs;
exports.login = login;
exports.logout = logout;
exports.logoutSuccess = logoutSuccess;
exports.isLoggedIn = isLoggedIn;
exports.getSessionId = getSessionId;
exports.getUserEmail = getUserEmail;

var _actionTypes = require('./action-types');

var types = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/////////////
// Actions //
/////////////

function load() {
	return {
		type: types.USER_LOAD
	};
}

function loadUserFromPrefs(user, sessionId) {
	return {
		type: types.USER_LOAD_SUCCESS,
		user: user,
		session_id: sessionId
	};
}

function login(email, password) {
	return {
		types: [types.USER_LOGIN, types.USER_LOGIN_SUCCESS, types.USER_LOGIN_FAIL],
		promise: function promise(client) {
			return client.post('/auth/login', {
				data: {
					email: email,
					password: password
				}
			});
		}
	};
}

function logout() {
	return {
		types: [types.USER_LOGOUT, types.USER_LOGOUT_SUCCESS, types.USER_LOGOUT_FAIL],
		promise: function promise(client, sessionId) {
			return client.post('/user/logout', {
				data: {
					session_id: sessionId
				}
			});
		}
	};
}

function logoutSuccess() {
	return {
		type: types.USER_LOGOUT_SUCCESS
	};
}

//////////////////////
// Public Functions //
//////////////////////

function isLoggedIn(state) {
	return state.user.session_id !== null;
}

function getSessionId(state) {
	return state.user.session_id;
}

function getUserEmail(state) {
	return state.user.user.email;
}
//# sourceMappingURL=user-actions.js.map