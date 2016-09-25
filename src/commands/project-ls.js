import chalk from 'chalk';
import { Spinner } from 'clui';
import Table from 'cli-table';

import config from '../config';
import * as specsActions from '../actions/specs-actions';
import * as toolsActions from '../actions/tools-actions';

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

	// Build output
	const projects = specsActions.getSpecs(getState());
	const projectsById = projects.reduce((acc, project) => {
		acc[project.id] = project
		return acc;
	}, {});
	const tools = toolsActions.getTools(getState());

	if (tools.length === 0) {
		console.log(chalk.cyan('Your project list is empty!'));
		return;
	}

	const table = new Table({
		colWidths: [24, 35, 35, 35]
	});

	const toolRows = tools.map(tool => {
		const projectId = tool.spec_id;
		const project = projectsById[projectId];
		return [
			project.name,
			project.uuid,
			colorToChalk(tool.color)(tool.name),
			fullURL(tool.uri)
		];
	});

	table.push(["Project", "Project ID", "Tool", "Tool Link"], ...toolRows);

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
