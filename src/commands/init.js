import chalk from 'chalk';
import { Spinner } from 'clui';
import URI from 'urijs';
import config from '../config';

import { existFile } from '../libs/file';
import * as specActions from '../actions/spec-actions';

export default async function({getState, dispatch}, url) {

	const spinner = new Spinner('Initializing spec…');
	spinner.start();

	// ensure not init'ed
	try {
		const exists = await existFile(config.specFileName);
		if (exists) {
			console.log(chalk.red(`Init failed: project already exist`));
			spinner.stop();
			return;
		}
	}
	catch(e) {
		console.log(chalk.red(e));
		spinner.stop();
		return;
	}

	// parse url
	const uri = URI(url);
	const scheme = uri.protocol();
	const host = uri.host();
	const basePath = normalizeBasePath(uri.path());

	if (scheme == '' || host == '') {
		console.log(chalk.red(`Init failed: invalid url format`));
		return;
	}

	// build spec
	let spec = {};
	spec['swagger'] = '2.0';
	spec['info'] = {
		"title": `${host} API`,
		"version": "1.0.0"
	};
	spec['host'] = host;
	if (basePath != '') {
		spec['basePath'] = basePath;
	}
	spec['schemes'] = [
		scheme
	];
	spec['paths'] = {};

	// save spec
	try {
		await dispatch(specActions.save(spec));
	}
	catch(e) {
		console.log(chalk.red(e));
		spinner.stop();
		return;
	}
	
	spinner.stop();
	console.log(chalk.green(`Project created for ${url}`));
}

function normalizeBasePath(basePath) {
	return basePath.replace(/\/$/, "");
}
