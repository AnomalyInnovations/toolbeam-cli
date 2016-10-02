import chalk from 'chalk';
import URI from 'urijs';
import * as errors from '../errors';
import config from '../config';

import { existFile } from '../libs/file';
import * as specActions from '../actions/spec-actions';

export default async function({getState, dispatch}, url) {

	// ensure not init'ed
	const exists = await existFile(config.specFileName);
	if (exists) {
		throw errors.ERR_INIT_PROJECT_EXISTS;
	}

	console.log(chalk.gray('Initializing spec'));

	// parse url
	const uri = URI(url);
	const scheme = uri.protocol();
	const host = uri.host();
	const basePath = normalizeBasePath(uri.path());

	if (scheme == '' || host == '') {
		throw errors.ERR_INIT_INVALID_URL_FORMAT;
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

	console.log(chalk.gray(`Writing to ${config.specFileName}`));

	// save spec
	await dispatch(specActions.save(spec));
	
	console.log(`Spec created for ${url}`);
}

function normalizeBasePath(basePath) {
	return basePath.replace(/\/$/, "");
}
