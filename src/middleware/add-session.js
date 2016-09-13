/**
 * Middleware to add the session id to any api client calls 
 */
import { getSessionId } from '../actions/user-actions';

export default ({getState, dispatch}) => next => action => {

	if (action.promise) {
		const sessionId = getSessionId(getState());
		const promise = action.promise;

		action.promise = client => promise(client, sessionId);
	}

	return next(action);
}
