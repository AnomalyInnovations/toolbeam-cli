import chalk from 'chalk';
import jsonpointer from 'jsonpointer';
import specValidator from 'tv4';

import config from '../config';
import { lintParse, prettyPrint, indentJsonString } from '../libs/json';
import { readFile } from '../libs/file';
import { specUUIDFromOpenapi } from '../libs/consume-openapi';
import specSchema from '../libs/spec-schema';
import * as specActions from '../actions/spec-actions';

export default async function({getState, dispatch}) {
	let fileStr, json;

	console.log(chalk.gray(`Loading ${config.specFileName}...`));

	// Read file
	try {
		fileStr = await readFile(config.specFileName);
	}
	catch (e) {
		throw `Unable to load ${config.specFileName}`;
	}

	console.log(chalk.gray('Validating spec'));

	json = lintParse(fileStr);

	// Validate Open API Spec
	const isValid = specValidator.validate(json, specSchema);
	if ( ! isValid) {
		const error = specValidator.error;
		const contextPath = getPathContext(error.dataPath);
		const context = getSchemaContext(json, error.dataPath);
		throw `${error.message}${contextPath}\n${context}`;
	}

	console.log(chalk.gray(`Pushing ${config.specFileName}...`));

	// Create if no UUID, Update if has UUID
	(specUUIDFromOpenapi(json) == null)
		? await handleCreateSpec(dispatch, json)
		: await handleUpdateSpec(dispatch, json);
}

async function handleCreateSpec(dispatch, json) {
	// call create spec api
	const createRet = await dispatch(specActions.create(json));

	// write file
	json.info['x-tb-uuid'] = createRet.data.spec.uuid;
	dispatch(specActions.save(json));

	// call update spec api
	await dispatch(specActions.update(json));

	if (createRet.data.tools_added) {
		createRet.data.tools_added.forEach(tool => {
			console.log(chalk.green(`Tool '${tool.name}' added`));
		});
	}

	console.log(chalk.green(`Project '${json.info.title}' created`));
}

async function handleUpdateSpec(dispatch, json) {
	// call update spec api
	const updateRet = await dispatch(specActions.update(json));

	if (updateRet.data.tools_removed) {
		updateRet.data.tools_removed.forEach(tool => {
			console.log(chalk.yellow(`Tool '${tool.name}' removed`));
		});
	}
	if (updateRet.data.tools_added) {
		updateRet.data.tools_added.forEach(tool => {
			console.log(chalk.green(`Tool '${tool.name}' added`));
		});
	}

	console.log(chalk.cyan(`Project '${json.info.title}' updated`));
}

///////////////////////
// Private Functions //
///////////////////////

function getPathContext(path) {
	if (path === '') return '';

	const pathStr = path.split('/')
		.splice(1)
		.map(path => path.replace(/~1/gi, '/'))
		.join(' > ');

	return ` in "${pathStr}"`;
}

function getSchemaContext(data, path) {
	const displayAsString = ref => (typeof ref === 'string')
		? `"${ref}"`
		: ref;
	const getBraces = isArray => isArray
		? [ '[', ']' ]
		: [ '{', '}' ];

	// Root object
	if (path === '') {
		return limitNumLines(prettyPrint(data), 15, Array.isArray(data));
	}

	const ref = jsonpointer.get(data, path);
	const isRefArray = Array.isArray(ref);
	const refKey = path.split('/').pop();
	const pathUp = path.split('/').slice(0, -1).join('/');
	const parent = jsonpointer.get(data, pathUp);
	const isParentArr = Array.isArray(parent);
	const braces = getBraces(isParentArr);

	let refStr, bodyStr;

	// Array or object
	if (typeof ref === 'object') {

		refStr = limitNumLines(prettyPrint(ref), 10, isRefArray);

		bodyStr = isParentArr
			? indentJsonString(refStr)
			: indentJsonString(`"${refKey}": ${refStr}`);

	}
	// Number, Boolean, or String
	else {

		refStr = displayAsString(ref);

		bodyStr = isParentArr
			? `  ${refStr},`
			: `  ${displayAsString(refKey)}: ${refStr},`;

	}

	return `${braces[0]}\n  ...\n\n${bodyStr}\n\n  ...\n${braces[1]}`;
}

function limitNumLines(str, num, isArray = false) {
	const brace = isArray
		? ']'
		: '}';
	const lines = str.split('\n');

	return (num >= lines.length)
		? str
		: `${lines.slice(0, num).join('\n')}\n  ...\n}`;
}
