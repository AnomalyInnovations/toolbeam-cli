import chalk from 'chalk';
import URI from 'urijs';
import config from '../config';
import * as errors from '../errors';

import { existFile, readFile, writeFile } from '../libs/file';
import { quietParse, minifyJSON } from '../libs/json';
import * as specActions from '../actions/spec-actions';

export default async function({getState, dispatch}, oprn, path) {
	console.log(chalk.gray('Removing tool...'));

	// validate parameter
	const operation = normalizeOperation(oprn);

	// load spec
	await ensureSpecFileExists();
	const json = await ensureSpecFileValidJson();
	ensureToolExists(path, operation, json);

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
		throw(errors.ERR_REMOVE_SPEC_NOT_EXISTS);
	}
}

async function ensureSpecFileValidJson() {
	const fileStr = await readFile(config.specFileName);
	const json = quietParse(minifyJSON(fileStr));
	if (json === null) {
		throw(errors.ERR_REMOVE_PARSE_SPEC_JSON);
	}
	return json;
}

function ensureToolExists(path, operation, json) {
	if (( ! json.paths) || ( ! json.paths[path]) || ( ! json.paths[path][operation])) {
		throw(errors.ERR_REMOVE_TOOL_NOT_EXISTS);
	}
}
