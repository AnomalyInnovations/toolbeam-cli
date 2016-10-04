import prompt from 'prompt';
import { getPrompt } from '../libs/prompt';
import chalk from 'chalk';
import Table from 'cli-table';

import config from '../config';
import * as specActions from '../actions/spec-actions';

const prompts = [{
  name: 'confirm',
  description: 'Are you sure you want to remove this project? [Y/n]'
}];

export default async function({getState, dispatch}, uuid) {

	prompt.start();

	prompt.message = '';
	prompt.delimiter = '';

	const { confirm } = await getPrompt(prompts);

	if (confirm == 'Yes' || confirm == 'Y') {

		console.log(chalk.gray(`Removing project with id '${uuid}'`));

		const ret = await dispatch(specActions.remove(uuid));
		const projectName = ret.data.spec.name;

		console.log(chalk.red(`Project ${projectName} (id: ${uuid}) removed`));

	}
}
