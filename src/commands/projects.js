import chalk from 'chalk';
import { Spinner } from 'clui';
import Table from 'cli-table';

import config from '../config';
import * as specsActions from '../actions/specs-actions';

export default async function({getState, dispatch}) {
	const spinner = new Spinner('Fetching your projects…');

	spinner.start();

	// Load projects
	try {
		await dispatch(specsActions.load());
	}
	catch(e) {
		spinner.stop();
		console.log(chalk.red(`Failed to fetch: ${e.message}`));
		return;
	}

	spinner.stop();

	const projects = specsActions.getSpecs(getState());

	if (projects.length === 0) {
		console.log(chalk.cyan('Your project list is empty!'));
		return;
	}

	const table = new Table({
		colWidths: [24, 35]
	});

	const projectRows = projects.map(project => [
		project.name, project.uuid
	]);

	table.push([["Project", "Project ID"], ...projectRows);

	console.log(table.toString());
}
