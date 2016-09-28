import chalk from 'chalk';
import Table from 'cli-table';

import config from '../config';
import * as specsActions from '../actions/specs-actions';
import * as toolsActions from '../actions/tools-actions';

export default async function({getState, dispatch}) {
	console.log(chalk.cyan('Fetching your projects...'));

	// Load projects
	await dispatch(specsActions.load());

	// Load tools
	await dispatch(toolsActions.load());

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
		colWidths: [35, 15, 35, 35]
	});

	const toolRows = tools.map(tool => {
		const projectId = tool.spec_id;
		const project = projectsById[projectId];
		return [
			trunc(project.name, 35),
			project.uuid,
			trunc(colorToChalk(tool.color)(tool.name), 35),
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

function trunc(string, length) {
	return (string.length > length)
		? string.substr(0, length-1) + '…'
		: string;
}
