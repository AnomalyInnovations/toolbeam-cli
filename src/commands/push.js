import chalk from 'chalk';
import specValidator from 'tv4';
import { Spinner } from 'clui';

import config from '../config';
import { readFile } from '../libs/file';
import { quietParse, minifyJSON } from '../libs/json';
import { specUUIDFromOpenapi } from '../libs/consume-openapi';
import specSchema from '../libs/spec-schema';
import * as specActions from '../actions/spec-actions';

export default async function({getState, dispatch}) {
	let fileStr;

	const spinner = new Spinner('Pushing…');
	spinner.start();

	// Read file
	try {
		fileStr = await readFile(config.specFileName);
	}
	catch(e) {
		console.log(chalk.red(e));
		spinner.stop();
		return;
	}

	// Validate JSON
	let json = quietParse(minifyJSON(fileStr));
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

	if (specUUIDFromOpenapi(json) != null) {
		// call update spec api
		let updateRet;
		try {
			updateRet = await dispatch(specActions.update(json));
		}
		catch(e) {
			spinner.stop();
			console.log(chalk.red(`Push failed: ${e.message}`));
			return;
		}

		spinner.stop();

		// print update status
		console.log(chalk.cyan('Pushed to Toolbeam.'));
		if (updateRet.data.tools_removed) {
			updateRet.data.tools_removed.forEach(tool => {
				console.log(chalk.red(`Removed ${tool.name}`));
			});
		}
		if (updateRet.data.tools_added) {
			updateRet.data.tools_added.forEach(tool => {
				console.log(chalk.green(`Added ${tool.name}`));
			});
		}
	}
	else {
		// call create spec api
		let createRet;
		try {
			createRet = await dispatch(specActions.create(json));
		}
		catch(e) {
			spinner.stop();
			console.log(chalk.red(`Push failed: ${e.message}`));
			return;
		}

		// write file
		json.info['x-tb-uuid'] = createRet.data.spec.uuid;
		try {
			dispatch(specActions.save(json));
		}
		catch(e) {
			console.log(chalk.red(e));
			spinner.stop();
			return;
		}

		// call update spec api
		try {
			await dispatch(specActions.update(json));
		}
		catch(e) {
			spinner.stop();
			console.log(chalk.red(`Push failed: ${e.message}`));
			return;
		}

		spinner.stop();

		// print update status
		console.log(chalk.cyan('Pushed to Toolbeam.'));
		if (createRet.data.tools_added) {
			updateRet.data.tools_added.forEach(tool => {
				console.log(chalk.green(`Added ${tool.name}`));
			});
		}
	}
}
