import * as types from '../actions/action-types';

export default debug => {
	const debugStore = debug('store');

	return store => next => action => {
		const result = next(action);

		switch (action.type) {
			case types.USER_LOGIN_SUCCESS:
				debugStore(`${action.type} ${result.result}`);
				break;
			case types.USER_LOGIN_FAIL:
				debugStore(`${action.type} ${result.error}`);
				break;
			default:
				debugStore(`${action.type}`);
				break;
		}

		return result;
	};
}
