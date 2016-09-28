import chalk from 'chalk';

import config from '../config';
import { deleteFile } from '../libs/file';
import * as userActions from '../actions/user-actions';

const logoutMessage = 'You are logged out of Toolbeam';

export default async function(store) {

	store.dispatch(userActions.load());

	// ensure not logged in
	if ( ! userActions.isLoggedIn(store.getState())) {
		console.log(chalk.cyan(logoutMessage));
		return;
	}

	console.log(chalk.gray('Logging out of Toolbeam...'));

	// log out
	try {
		await store.dispatch(userActions.logout());
	}
	catch(e) {
		// ignore all errors
	}

	console.log(chalk.cyan(logoutMessage));
}
