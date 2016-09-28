import chalk from 'chalk';
import * as userActions from '../actions/user-actions';

export default store => callback => {
	store.dispatch(userActions.load());

	if ( ! userActions.isLoggedIn(store.getState())) {
		console.log(chalk.red('You need to be logged in to continue'));
		return;
	}

	callback();
}
