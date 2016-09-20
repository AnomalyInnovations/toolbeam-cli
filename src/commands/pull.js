import chalk from 'chalk';
import { Spinner } from 'clui';

import config from '../config';
import { existFile, readFile, writeFile } from '../libs/file';
import { quietParse, minifyJSON } from '../libs/json';
import { specUUIDFromOpenapi } from '../libs/consume-openapi';
import * as specActions from '../actions/spec-actions';

export default async function({getState, dispatch}, uuid) {
	const spinner = new Spinner('Pulling spec…');

	spinner.start();
	
	try {
		const exists = await existFile(config.specFileName);

		// Case 1: UUID passed in
		if (uuid) {
			if (exists) {
				// Check UUID does not match current project
				const fileStr = await readFile(config.specFileName);
				const json = quietParse(minifyJSON(fileStr));
				if (json && uuid != specUUIDFromOpenapi(json)) {
					throw 'UUID does not match current project.';
				}
			}
		}
		// Case 2: UUID not passed in
		else {
			if ( ! exists) {
				throw 'missing project UUID.';
			}
			const fileStr = await readFile(config.specFileName);
			const json = quietParse(minifyJSON(fileStr));
			if ( ! json) {
				throw 'missing project UUID.';
			}
			uuid = specUUIDFromOpenapi(json);
			if ( ! uuid) {
				throw 'missing project UUID.';
			}
		}
	}
	catch(e) {
		spinner.stop();
		console.log(chalk.red(`Pull failed: ${e}`));
		return;
	}

	// Load spec info & data
	try {
		await dispatch(specActions.loadInfo(uuid));
		await dispatch(specActions.load(specActions.getSpecFileLink(getState())));
	}
	catch(e) {
		spinner.stop();
		console.log(chalk.red(`Pull failed: ${e.message}`));
		return;
	}

	// Write file
	try {
		await writeFile(config.specFileName, specActions.getData(getState()));
	}
	catch(e) {
		console.log(chalk.red(e));
		spinner.stop();
		return;
	}
	
	spinner.stop();
	console.log(chalk.cyan('Pulled from Toolbeam.'));
}
