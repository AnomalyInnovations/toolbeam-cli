import chalk from 'chalk';
import URI from 'urijs';
import config from '../config';
import * as errors from '../errors';

import { toolNameFromEndpoint, generateLabelFromValue } from '../libs/consume-openapi';
import { existFile, readFile, writeFile } from '../libs/file';
import { lintParse } from '../libs/json';
import * as specActions from '../actions/spec-actions';

export default async function({getState, dispatch}, operation = 'GET', path, toolData, paramData) {

	console.log(chalk.gray(`Adding '${operation} ${path}'`));

	// validate parameter
	path = normalizePath(path);
	operation = normalizeOperation(operation);
	const security = normalizeSecurity(toolData.security);
	const permission = normalizePermission(toolData.needsNotificationPermission);
	paramData = normalizeParams(paramData);

	console.log(chalk.gray(`Loading ${config.specFileName}`));

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
	const toolName = toolNameFromEndpoint({path:path, operation:operation});
	json.paths = json.paths || {};
	json.paths[path] = json.paths[path] || {};
	json.paths[path][operation] = {
		"x-tb-name": toolName,
		"operationId": generateOperationId(json),
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
		"x-tb-needsNotificationPermission": permission,
	};
	paramData.forEach(perData => {
		let param = {
			"name": perData.name,
			"in": perData.in,
			"required": true,
			"type": generateParamTypeFromFieldType(perData.field),
			"x-tb-fieldLabel": generateLabelFromValue(perData.name),
			"x-tb-fieldPlaceholder": "",
			"x-tb-fieldType": perData.field
		};
		// Handle specified enum
		if (perData.enum) {
			const enumValues = normalizeParamEnum(perData.enum);
			const enumLabels = generateParamEnumLabel(enumValues);
			param = {...param,
				"enum": enumValues,
				"x-tb-fieldEnumLabel": enumLabels,
			};
		}
		// Handle NOT specified enum, but field is of 'select' type
		else if (perData.field == 'select') {
			param = {...param,
				"enum": ["Value1", "Value2"],
				"x-tb-fieldEnumLabel": ["Option1", "Option2"],
			}
		}
		json.paths[path][operation].parameters.push(param);
	});

	// save spec
	await dispatch(specActions.save(json));
	
	console.log(chalk.green(`Added tool '${toolName}' to spec`));
	console.log(`Run 'tb push' to create your tool`);
}

function normalizePath(path) {
	return path.startsWith('/') ? path : '/' + path;
}

function normalizeOperation(operation) {
	operation = operation.toLowerCase();
	return operation;
}

function normalizeSecurity(security) {
	security = security || 'none';
	security = security.toLowerCase();
	return security;
}

function normalizePermission(permission) {
	if (permission === undefined) {
		return false;
	}
	if (permission === true || permission == false) {
		return permission;
	}
	throw errors.ERR_ADD_INVALID_NOTIFICATION_PERMISSION;
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
			throw errors.ERR_ADD_MISSING_PARAM_FIELD;
		}
		else if ( ! perData.name) {
			throw errors.ERR_ADD_MISSING_PARAM_NAME;
		}
		else if ( ! perData.in) {
			throw errors.ERR_ADD_MISSING_PARAM_IN;
		}
	});
	return paramData;
}

function normalizeParamEnum(enumValues) {
	return Array.isArray(enumValues)
		? enumValues
		: [enumValues];
}

async function ensureSpecFileExists() {
	const exists = await existFile(config.specFileName);
	if ( ! exists) {
		throw errors.ERR_ADD_SPEC_NOT_EXISTS;
	}
}

function ensureToolNotExists(json, path, operation) {
	if (json.paths && json.paths[path] && json.paths[path][operation]) {
		throw errors.ERR_ADD_TOOL_EXISTS;
	}
}

function generateOperationId(json) {
	// Generate id
	let text = "";
	let possible = "abcdefghijklmnopqrstuvwxyz";
	for (let i=0; i < 8; i++ ) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}

	// Verify does not thrash
	for (let path in json.paths) {
		for (let operation in json.paths[path]) {
			if (json.paths[path][operation].operationId == text) {
				return generateOperationId(json);
			}
		}
	}

	return text;
}

function generateParamTypeFromFieldType(fieldType) {
	return (fieldType == 'image' || fieldType == 'video')
		? 'file'
		: 'string';
}

function generateParamEnumLabel(enumValues) {
	return enumValues.map(value => generateLabelFromValue(value.toString()));
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
