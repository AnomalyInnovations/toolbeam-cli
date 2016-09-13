import chalk from 'chalk';
import specValidator from 'tv4';
import { Spinner } from 'clui';

import { readFile } from '../libs/file';
import { quietParse, minifyJSON } from '../libs/json';
import specSchema from '../libs/spec-schema';
import * as specActions from '../actions/spec-actions';

export default async function(store, file) {
	let fileStr;

	const spinner = new Spinner(`Pushing ${file}…`);
	spinner.start();

	// Read file
	try {
		fileStr = await readFile(file);
	}
	catch(e) {
		console.log(chalk.red(e));
		spinner.stop();
		return;
	}

	// Validate JSON
	const json = quietParse(minifyJSON(fileStr));
	if (json === null) {
		console.log(chalk.red('Error: Invalid JSON'));
		spinner.stop();
		return;
	}

	// Validate Open API Spec
	const isValid = specValidator.validate(json, specSchema);
	if ( ! isValid) {
		const error = specValidator.error;
		const path = error.dataPath.split('/')
			.splice(1)
			.map(path => path.replace(/~1/gi, '/'))
			.join(' > ');
		console.log(chalk.red(`Error: ${error.message} in "${path}".`));
		spinner.stop();
		return;
	}

	try {
		await store.dispatch(specActions.update(json));
	}
	catch(e) {
		spinner.stop();
		console.log(chalk.red(`Push failed: ${e.message}`));
		return;
	}
	
	spinner.stop();
	console.log(chalk.cyan(`Pushed ${file} to Toolbeam.`));
}
