import chalk from 'chalk';
import { Spinner } from 'clui';

import config from '../config';
import { deleteFile } from '../libs/file';
import * as userActions from '../actions/user-actions';

const logoutMessage = 'You are logged out of Toolbeam.';

export default async function(store) {

	store.dispatch(userActions.load());

	// ensure not logged in
	if ( ! userActions.isLoggedIn(store.getState())) {
		console.log(chalk.cyan(logoutMessage));
		return;
	}

	const spinner = new Spinner('Logging out of Toolbeam…');
	spinner.start();

	// log out
	try {
		await store.dispatch(userActions.logout());
	}
	catch(e) {
		if (e.code == 1002) {
			// ignore Invalid Session error
		}
		else {
			spinner.stop();
			console.log(chalk.red(`Logout failed: ${e.message}`));
			return;
		}
	}

	// delete file
	try {
		await deleteFile(config.specFileName);
	}
	catch(e) {
		console.log(chalk.red(e));
		spinner.stop();
		return;
	}
	
	spinner.stop();
	console.log(chalk.cyan(logoutMessage));

}
