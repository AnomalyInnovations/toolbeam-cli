import chalk from 'chalk';
import { Spinner } from 'clui';
import URI from 'urijs';
import config from '../config';

import { existFile, readFile, writeFile } from '../libs/file';
import { quietParse, minifyJSON } from '../libs/json';
import * as specActions from '../actions/spec-actions';

export default async function({getState, dispatch}, path, oprn) {

	const spinner = new Spinner('Removing tool…');
	spinner.start();

	// validate parameter
	oprn = normalizeOperation(oprn);

	// ensure spec exists
	try {
		const exists = await existFile(config.specFileName);
		if ( ! exists) {
			console.log(chalk.red('Remove failed: project not found in current directory.'));
			spinner.stop();
			return;
		}
	}
	catch(e) {
		console.log(chalk.red(e));
		spinner.stop();
		return;
	}

	// load spec
	let fileStr;
	try {
		fileStr = await readFile(config.specFileName);
	}
	catch(e) {
		console.log(chalk.red(e));
		spinner.stop();
		return;
	}

	// validate JSON
	const json = quietParse(minifyJSON(fileStr));
	if (json === null) {
		console.log(chalk.red('Remove failed: Invalid JSON'));
		spinner.stop();
		return;
	}

	// ensure tool exist
	if (( ! json.paths) || ( ! json.paths[path]) || ( ! json.paths[path][operation])) {
		console.log(chalk.red('Remove failed: tool does not exist.'));
		spinner.stop();
		return;
	}

	// remove tool
	delete json.paths[path][operation];
	if (Object.keys(json.paths[path]).length === 0) {
		delete json.paths[path];
	}

	// save spec
	try {
		dispatch(specActions.save(json));
	}
	catch(e) {
		console.log(chalk.red(e));
		spinner.stop();
		return;
	}
	
	spinner.stop();
	console.log(chalk.green(`Tool removed for ${path}`));
}

function normalizeOperation(operation) {
	operation = operation || 'get';
	operation = operation.toLowerCase();
	return operation;
}
