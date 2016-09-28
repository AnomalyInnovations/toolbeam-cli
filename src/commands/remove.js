import chalk from 'chalk';
import URI from 'urijs';
import config from '../config';
import errors from '../errors';

import { existFile, readFile, writeFile } from '../libs/file';
import { quietParse, minifyJSON } from '../libs/json';
import * as specActions from '../actions/spec-actions';

export default async function({getState, dispatch}, path, oprn) {
	console.log(chalk.cyan('Removing tool...'));

	// validate parameter
	operation = normalizeOperation(oprn);

	// load spec
	await ensureSpecFileExists();
	const json = await ensureSpecFileValidJson();
	ensureToolExists();

	// remove tool
	delete json.paths[path][operation];
	if (Object.keys(json.paths[path]).length === 0) {
		delete json.paths[path];
	}

	// save spec
	dispatch(specActions.save(json));
	
	console.log(chalk.green(`Tool removed for ${path}`));
}

function normalizeOperation(operation) {
	operation = operation || 'get';
	operation = operation.toLowerCase();
	return operation;
}

async function ensureSpecFileExists() {
	const exists = await existFile(config.specFileName);
	if ( ! exists) {
		throw(ERR_REMOVE_SPEC_NOT_EXISTS);
	}
}

async function ensureSpecFileValidJson() {
	const fileStr = await readFile(config.specFileName);
	const json = quietParse(minifyJSON(fileStr));
	if (json === null) {
		throw(ERR_REMOVE_PARSE_SPEC_JSON);
	}
	return json;
}

function ensureToolExists() {
	if (( ! json.paths) || ( ! json.paths[path]) || ( ! json.paths[path][operation])) {
		throw(ERR_REMOVE_TOOL_NOT_EXISTS);
	}
}
