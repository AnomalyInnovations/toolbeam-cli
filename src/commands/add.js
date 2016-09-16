import chalk from 'chalk';
import { Spinner } from 'clui';
import URI from 'urijs';
import config from '../config';

import { existFile, readFile, writeFile } from '../libs/file';
import { quietParse, minifyJSON } from '../libs/json';
import * as specActions from '../actions/spec-actions';

export default async function({getState, dispatch}, path, toolData, paramData) {

	const spinner = new Spinner('Adding tool…');
	spinner.start();

	// validate parameter
	const operation = normalizeOperation(toolData.operation);
	const security = normalizeSecurity(toolData.security);
	let error = false;
	paramData.forEach(perData => {
		if ( ! perData.name) {
			error = 'missing parameter name';
			return;
		}
		else if ( ! perData.in) {
			error = 'missing parameter in';
			return;
		}
	});
	if (error) {
		console.log(chalk.red(`Add failed: ${error}.`));
		spinner.stop();
		return;
	}

	// ensure spec exists
	try {
		const exists = await existFile(config.specFileName);
		if ( ! exists) {
			console.log(chalk.red('Add failed: ensure to run tb init first.'));
			spinner.stop();
			return;
		}
	}
	catch(e) {
		console.log(chalk.red(e));
		spinner.stop();
		return;
	}

	// load spec
	let fileStr;
	try {
		fileStr = await readFile(config.specFileName);
	}
	catch(e) {
		console.log(chalk.red(e));
		spinner.stop();
		return;
	}

	// validate JSON
	const json = quietParse(minifyJSON(fileStr));
	if (json === null) {
		console.log(chalk.red('Error: Invalid JSON'));
		spinner.stop();
		return;
	}

	// ensure tool not exist
	if (json.paths && json.paths[path] && json.paths[path][operation]) {
		console.log(chalk.red('Add failed: tool already exist.'));
		spinner.stop();
		return;
	}

	// add auth
	if (security == 'basic') {
		json.securityDefinitions = json.securityDefinitions || {};
		json.securityDefinitions.basic_auth = json.securityDefinitions.basic_auth
			|| {'type': 'basic'};
	}

	// add tool
	json.paths = json.paths || {};
	json.paths[path] = json.paths[path] || {};
	json.paths[path][operation] = {
		"x-tb-name": `${operation} ${path}`,
		"operationId": `${operation} ${path}`,
		"security": security == 'basic' ? [{'basic_auth': []}] : [],
		"parameters": [],
		"responses": {
			"200": {
				"description": "Results"
			}
		},
		"x-tb-action_label": operation == 'get' ? 'Get' : 'Submit',
		"x-tb-color": "red"
	};
	paramData.forEach(perData => {
		json.paths[path][operation].parameters.push({
			"name": perData.name,
			"in": perData.in,
			"required": true,
			"type": "string",
			"x-tb-field_label": perData.name,
			"x-tb-field_placeholder": "",
			"x-tb-field_type": "text"
		});
	});

	// build spec
	dispatch(specActions.init(json));

	// write file
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
	console.log(chalk.green(`Tool added for ${path}`));
}

function normalizeOperation(operation) {
	operation = operation || 'get';
	operation = operation.toLowerCase();
	return operation;
}

function normalizeSecurity(operation) {
	operation = operation || 'none';
	operation = operation.toLowerCase();
	return operation;
}
