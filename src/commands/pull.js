import chalk from 'chalk';
import config from '../config';
import * as errors from '../errors';
import { existFile, readFile, writeFile } from '../libs/file';
import { lintParse } from '../libs/json';
import { specUUIDFromOpenapi } from '../libs/consume-openapi';
import * as specActions from '../actions/spec-actions';

export default async function({getState, dispatch}, uuid) {
	console.log(chalk.gray('Pulling spec...'));
	
	// Validate UUID passed in
	uuid = uuid
		? await validateUuidInArgument(uuid)
		: await validateUuidInFile();

	// Load spec info & data
	await dispatch(specActions.loadInfo(uuid));
	await dispatch(specActions.load(specActions.getSpecFileLink(getState())));

	// Write to file
	await writeFile(config.specFileName, specActions.getData(getState()));
	
	console.log(chalk.cyan('Pulled from Toolbeam.'));
}

async function validateUuidInArgument(uuid) {
	const exists = await existFile(config.specFileName);
	if (exists) {
		// Check UUID does not match current project
		const fileStr = await readFile(config.specFileName);
		const json = lintParse(fileStr);
		if (json && uuid != specUUIDFromOpenapi(json)) {
			throw errors.ERR_PULL_UUID_DOES_NOT_MATCH;
		}
	}
	return uuid;
}

async function validateUuidInFile() {
	const exists = await existFile(config.specFileName);
	if ( ! exists) {
		throw errors.ERR_PULL_UUID_NOT_PROVIDED;
	}

	const fileStr = await readFile(config.specFileName);
	const json = lintParse(fileStr);
	if ( ! json) {
		throw errors.ERR_PULL_PARSE_SPEC_JSON;
	}

	const uuid = specUUIDFromOpenapi(json);
	if ( ! uuid) {
		throw errors.ERR_PULL_UUID_NOT_IN_SPEC;
	}

	return uuid;
}
