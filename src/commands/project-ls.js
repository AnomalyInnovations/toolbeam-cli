import chalk from 'chalk';
import Table from 'cli-table';
import { indent, truncate } from '../libs/string';

import config from '../config';
import * as specsActions from '../actions/specs-actions';
import * as toolsActions from '../actions/tools-actions';

export default async function({getState, dispatch}) {
	console.log(chalk.gray('Fetching your projects'));

	// Load projects
	await dispatch(specsActions.load());

	// Build output
	const projects = specsActions.getSpecs(getState());

	if (projects.length === 0) {
		console.log('Your project list is empty!');
		return;
	}

	// Load tools
	await dispatch(toolsActions.load());

	console.log('Your Projects:\n');

	const tools = toolsActions.getTools(getState());

	const toolGroupedByProject = tools.reduce((acc, tool) => {
		const projectId = tool.spec_id;

		if ( ! acc.hasOwnProperty(projectId)) {
			acc[projectId] = [];
		}

		acc[projectId].push([
			truncate(colorToChalk(tool.color)(tool.name), 35),
			fullURL(tool.uri)
		]);

		return acc;
	}, {});

	projects.forEach(project => {
		let table;

		console.log(`  ${truncate(project.name, 60)} (id: ${project.uuid})`);
		const toolsInProject = toolGroupedByProject[project.id];

		if (toolsInProject) {
			table = new Table({
				colWidths: [35, 35]
			});
			table.push(...toolsInProject);
		}
		else {
			table = new Table({
				colWidths: [ 36 ]
			});
			table.push(['There are no tools in this project']);
		}

		console.log(`${indent(table.toString())}\n`);
	});
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
