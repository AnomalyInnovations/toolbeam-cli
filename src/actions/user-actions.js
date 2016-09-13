import * as types from './action-types';

/////////////
// Actions //
/////////////

export function load() {
	return {
		type: types.USER_LOAD,
	};
}

export function loadUserFromPrefs(user, sessionId) {
	return {
		type: types.USER_LOAD_SUCCESS,
		user: user,
		session_id: sessionId,
	};
}

export function login(email, password) {
	return {
		types: [types.USER_LOGIN, types.USER_LOGIN_SUCCESS, types.USER_LOGIN_FAIL],
		promise: client => client.post('/auth/login', {
			data: {
				email: email,
				password: password,
			}
		})
	};
}

export function logout() {
	return {
		types: [types.USER_LOGOUT, types.USER_LOGOUT_SUCCESS, types.USER_LOGOUT_FAIL],
		promise: (client, sessionId) => client.post('/user/logout', {
			data: {
				session_id: sessionId,
			}
		})
	};
}

export function logoutSuccess() {
	return {
		type: types.USER_LOGOUT_SUCCESS
	};
}

//////////////////////
// Public Functions //
//////////////////////

export function isLoggedIn(state) {
	return (state.user.session_id !== null);
}

export function getSessionId(state) {
	return state.user.session_id;
}

export function getUserEmail(state) {
	return state.user.user.email;
}
