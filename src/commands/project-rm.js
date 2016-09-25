import chalk from 'chalk';
import { Spinner } from 'clui';
import Table from 'cli-table';

import config from '../config';
import * as specActions from '../actions/spec-actions';

export default async function({getState, dispatch}, uuid) {
	const spinner = new Spinner('Removing project…');

	spinner.start();

	// Load projects
	try {
		await dispatch(specActions.remove(uuid));
	}
	catch(e) {
		spinner.stop();
		console.log(chalk.red(`Failed to fetch: ${e.message}`));
		return;
	}

	spinner.stop();
	console.log(chalk.cyan(`Tools in project ${uuid} removed`));
	console.log(chalk.cyan(`Project ${uuid} removed.`));
}
