import chalk from 'chalk';
import URI from 'urijs';
import config from '../config';
import * as errors from '../errors';

import { toolNameFromEndpoint } from '../libs/consume-openapi';
import { existFile, readFile, writeFile } from '../libs/file';
import { lintParse } from '../libs/json';
import * as specActions from '../actions/spec-actions';

export default async function({getState, dispatch}, path, oprn, toolData, paramData) {
	console.log(chalk.gray('Adding tool...'));

	// validate parameter
	const operation = normalizeOperation(oprn);
	const security = normalizeSecurity(toolData.security);
	paramData = normalizeParams(paramData);

	await ensureSpecFileExists();

	// load spec
	const fileStr = await readFile(config.specFileName);
	const json = lintParse(fileStr);

	ensureToolNotExists(json, path, operation);

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
		"x-tb-name": toolNameFromEndpoint({path:path, operation:operation}),
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
	dispatch(specActions.save(json));
	
	console.log(chalk.green(`Tool added for ${path}`));
}

function normalizeOperation(operation) {
	operation = operation || 'get';
	operation = operation.toLowerCase();
	return operation;
}

function normalizeSecurity(security) {
	security = security || 'none';
	security = security.toLowerCase();
	return security;
}

function normalizeFieldType(param) {
	param = param || 'text';
	param = param.toLowerCase();
	return param;
}

function normalizeParams(paramData) {
	paramData.forEach(perData => {
		perData.field = normalizeFieldType(perData.field);
		if ( ! perData.field) {
			throw {message: errors.ERR_ADD_MISSING_PARAM_FIELD};
		}
		else if ( ! perData.name) {
			throw {message: errors.ERR_ADD_MISSING_PARAM_NAME};
		}
		else if ( ! perData.in) {
			throw {message: errors.ERR_ADD_MISSING_PARAM_IN};
		}
	});
	return paramData;
}

async function ensureSpecFileExists() {
	const exists = await existFile(config.specFileName);
	if ( ! exists) {
		throw {message: errors.ERR_ADD_SPEC_NOT_EXISTS};
	}
}

function ensureToolNotExists(json, path, operation) {
	if (json.paths && json.paths[path] && json.paths[path][operation]) {
		throw {message: errors.ERR_ADD_TOOL_EXISTS};
	}
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
