import chalk from 'chalk';
import { Spinner } from 'clui';
import URI from 'urijs';
import config from '../config';

import { writeFile } from '../libs/file';
import * as specActions from '../actions/spec-actions';

export default async function({getState, dispatch}, url) {

	// ensure not init'ed

	// parse url
	const uri = URI(url);
	const scheme = uri.protocol();
	const host = uri.host();
	const basePath = uri.path();

	if (scheme == '' || host == '' || basePath == '') {
		console.log(chalk.red(`Init failed: invalid url format`));
		return;
	}

	// build spec
	const spec =
	{
		"swagger": "2.0",
		"info": {
			"title": `${host} API`,
			"version": "1.0.0"
		},
		"host": host,
		"basePath": basePath,
		"schemes": [
			scheme
		],
		"paths": {
		}
	}
	dispatch(specActions.init(spec));

	// write file
	const spinner = new Spinner('Initializing spec…');

	spinner.start();
	try {
		console.log(specActions.getData(getState()));
		await writeFile(config.specFileName, specActions.getData(getState()));
	}
	catch(e) {
		console.log(chalk.red(e));
		spinner.stop();
		return;
	}
	
	spinner.stop();
	console.log(chalk.green(`Project created for ${url}`));
}
