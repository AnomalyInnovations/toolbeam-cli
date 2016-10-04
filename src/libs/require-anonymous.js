import chalk from 'chalk';
import * as userActions from '../actions/user-actions';

export default store => callback => {
	store.dispatch(userActions.load());

	if (userActions.isLoggedIn(store.getState())) {
		console.log(`You are logged in as '${userActions.getUserEmail(store.getState())}'`);
		return;
	}

	return callback();
}
