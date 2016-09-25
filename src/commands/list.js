import chalk from 'chalk';
import { Spinner } from 'clui';
import Table from 'cli-table';

import config from '../config';
import * as toolsActions from '../actions/tools-actions';

export default async function({getState, dispatch}) {
	const spinner = new Spinner('Fetching your tools…');

	spinner.start();

	// Load tools
	try {
		await dispatch(toolsActions.load());
	}
	catch(e) {
		spinner.stop();
		console.log(chalk.red(`Failed to fetch: ${e.message}`));
		return;
	}

	spinner.stop();

	const tools = toolsActions.getTools(getState());

	if (tools.length === 0) {
		console.log(chalk.cyan('Your tool list is empty!'));
		return;
	}

	const table = new Table({
		colWidths: [24, 34]
	});

	const toolRows = tools.map(tool => [
		colorToChalk(tool.color)(tool.name), fullURL(tool.uri)
	]);

	table.push(...toolRows);

	console.log(table.toString());
}

function colorToChalk(color) {
	switch (color) {
		case 'red':
			return chalk.red;
		case 'green':
			return chalk.green;
		case 'blue':
			return chalk.cyan;
		case 'orange':
			return chalk.yellow;
		case 'purple':
			return chalk.magenta;
		default:
			return chalk.white;
	}
}

function fullURL(uri) {
	return `${config.webScheme}://${config.webHost}/t/${uri}`;
}
