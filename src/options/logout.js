import chalk from 'chalk';
import { Spinner } from 'clui';

import * as userActions from '../actions/user-actions';

const logoutMessage = 'You are logged out of Toolbeam.';

export default async function(store) {

	store.dispatch(userActions.load());

	if ( ! userActions.isLoggedIn(store.getState())) {
		console.log(chalk.cyan(logoutMessage));
		return;
	}

	const spinner = new Spinner('Logging out of Toolbeam…');
	spinner.start();

	try {
		await store.dispatch(userActions.logout());
	}
	catch(e) {
		spinner.stop();
		console.log(chalk.red(`Logout failed: ${e.message}`));
		return;
	}

	spinner.stop();
	console.log(chalk.cyan(logoutMessage));

}
