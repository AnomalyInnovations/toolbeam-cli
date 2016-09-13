/**
 * Middleware to clear the session and prefs
 * when the API returns a 401 error
 */
import { logoutSuccess } from '../actions/user-actions';

export default store => next => action => {
	let result = next(action);

	(result instanceof Promise) && result.catch((data) => {
		if (data.error == 401) {
			store.dispatch(logoutSuccess());
		}
		return data;
	});

  return result;
}
