import chalk from 'chalk';
import { Spinner } from 'clui';
import URI from 'urijs';
import config from '../config';

import { existFile, readFile, writeFile } from '../libs/file';
import { quietParse, minifyJSON } from '../libs/json';
import * as specActions from '../actions/spec-actions';

export default async function({getState, dispatch}, path, oprn, toolData, paramData) {

	const spinner = new Spinner('Adding tool…');
	spinner.start();

	// validate parameter
	oprn = normalizeOperation(oprn);
	const security = normalizeSecurity(toolData.security);
	let error = false;
	paramData.forEach(perData => {
		perData.field = normalizeFieldType(perData.field);
		if ( ! perData.field) {
			error = 'missing parameter field';
			return;
		}
		else if ( ! perData.name) {
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
		"operationId": generateOperationId(),
		"security": security == 'basic' ? [{'basic_auth': []}] : [],
		"parameters": [],
		"responses": {
			"200": {
				"description": "Results"
			}
		},
		"x-tb-actionLabel": operation == 'get' ? 'Get' : 'Submit',
		"x-tb-color": generateColor(),
		"x-tb-needsConfirm": false,
		"x-tb-needsNotificationPermission": false
	};
	paramData.forEach(perData => {
		let param = {
			"name": perData.name,
			"in": perData.in,
			"required": true,
			"type": "string",
			"x-tb-fieldLabel": perData.name,
			"x-tb-fieldPlaceholder": "",
			"x-tb-fieldType": perData.field
		};
		if (perData.field == 'select') {
			param = {...param,
				"enum": ["Value1", "Value2"],
				"x-tb-fieldEnumLabel": ["Option1", "Option2"],
			}
		}
		json.paths[path][operation].parameters.push(param);
	});

	// save spec
	try {
		dispatch(specActions.save(json));
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

function normalizeFieldType(param) {
	param = param || 'text';
	operation = operation.toLowerCase();
	return operation;
}

function generateOperationId() {
	var text = "";
	var possible = "abcdefghijklmnopqrstuvwxyz";

	for( var i=0; i < 8; i++ ) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}

	return text;
}

function generateColor() {
	const colorNum = Math.floor(Math.random() * 5);
	switch (colorNum) {
		case 0: return "red";
		case 1: return "blue";
		case 2: return "purple";
		case 3: return "green";
		case 4:
		default:
			return "orange";
	}
}
