import chalk from 'chalk';
import * as userActions from '../actions/user-actions';

export default store => callback => {
	if ( ! userActions.isLoggedIn(store.getState())) {
		console.log(chalk.red('Error: You need to be logged in to continue'));
		return;
	}

	return callback();
}
