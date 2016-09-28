import chalk from 'chalk';
import specValidator from 'tv4';

import config from '../config';
import { readFile } from '../libs/file';
import { quietParse, minifyJSON } from '../libs/json';
import { specUUIDFromOpenapi } from '../libs/consume-openapi';
import specSchema from '../libs/spec-schema';
import * as specActions from '../actions/spec-actions';

export default async function({getState, dispatch}) {
	console.log(chalk.gray('Pushing spec...'));

	// Read file
	const fileStr = await readFile(config.specFileName);
	const json = JSON.parse(minifyJSON(fileStr));

	// Validate Open API Spec
	const isValid = specValidator.validate(json, specSchema);
	if ( ! isValid) {
		const error = specValidator.error;
		const path = error.dataPath.split('/')
			.splice(1)
			.map(path => path.replace(/~1/gi, '/'))
			.join(' > ');
		throw(`Error: ${error.message} in "${path}".`);
	}

	// Create if no UUID, Update if has UUID
	(specUUIDFromOpenapi(json) == null)
		? await handleCreateSpec(json)
		: await handleUpdateSpec(json);
}

async function handleCreateSpec(json) {
	// call create spec api
	const createRet = await dispatch(specActions.create(json));

	// write file
	json.info['x-tb-uuid'] = createRet.data.spec.uuid;
	dispatch(specActions.save(json));

	// call update spec api
	await dispatch(specActions.update(json));

	// print update status
	console.log(chalk.cyan('Pushed to Toolbeam.'));
	if (createRet.data.tools_added) {
		createRet.data.tools_added.forEach(tool => {
			console.log(chalk.green(`Added ${tool.name}`));
		});
	}
}

async function handleUpdateSpec(json) {
	// call update spec api
	const updateRet = await dispatch(specActions.update(json));

	// print update status
	console.log(chalk.cyan('Pushed to Toolbeam.'));
	if (updateRet.data.tools_removed) {
		updateRet.data.tools_removed.forEach(tool => {
			console.log(chalk.red(`Removed ${tool.name}`));
		});
	}
	if (updateRet.data.tools_added) {
		updateRet.data.tools_added.forEach(tool => {
			console.log(chalk.green(`Added ${tool.name}`));
		});
	}
}
