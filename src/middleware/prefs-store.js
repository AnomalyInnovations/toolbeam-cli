import * as userActions from '../actions/user-actions';
import * as types from '../actions/action-types';

export default prefs => (
	({getState, dispatch}) => next => action => {
		const result = next(action);

		switch (action.type) {
			case types.USER_LOAD:
				if (prefs.session_id) {
					dispatch(userActions.loadUserFromPrefs(prefs.user, prefs.session_id));
				}
				break;
			case types.USER_SIGNUP_SUCCESS:
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
	}
)
