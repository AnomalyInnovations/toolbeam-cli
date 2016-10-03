import chalk from 'chalk';
import URI from 'urijs';
import config from '../config';
import * as errors from '../errors';

import { existFile, readFile, writeFile } from '../libs/file';
import { lintParse } from '../libs/json';
import * as specActions from '../actions/spec-actions';

export default async function({getState, dispatch}, oprn = 'GET', path) {

	console.log(chalk.gray(`Removing '${oprn} ${path}'`));

	// validate parameter
	const operation = normalizeOperation(oprn);

	console.log(chalk.gray(`Loading ${config.specFileName}`));

	// load spec
	await ensureSpecFileExists();
	const fileStr = await readFile(config.specFileName);
	const json = lintParse(fileStr);

	ensureToolExists(path, operation, json);

	const tool = json.paths[path][operation];

	// remove tool
	delete json.paths[path][operation];
	if (Object.keys(json.paths[path]).length === 0) {
		delete json.paths[path];
	}

	// save spec
	await dispatch(specActions.save(json));
	
	console.log(chalk.red(`Removed tool '${tool['x-tb-name']}' from spec`));
	console.log(`Run 'tb push' to remove your tool`);
}

function normalizeOperation(operation) {
	operation = operation || 'get';
	operation = operation.toLowerCase();
	return operation;
}

async function ensureSpecFileExists() {
	const exists = await existFile(config.specFileName);
	if ( ! exists) {
		throw errors.ERR_REMOVE_SPEC_NOT_EXISTS;
	}
}

function ensureToolExists(path, operation, json) {
	if (( ! json.paths) || ( ! json.paths[path]) || ( ! json.paths[path][operation])) {
		throw errors.ERR_REMOVE_TOOL_NOT_EXISTS;
	}
}
