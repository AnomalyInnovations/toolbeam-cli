import chalk from 'chalk';
import Table from 'cli-table';

import config from '../config';
import * as specActions from '../actions/spec-actions';

export default async function({getState, dispatch}, uuid) {
	console.log(chalk.gray(`Removing project with id '${uuid}'`));

	await dispatch(specActions.remove(uuid));

	console.log(chalk.red(`Project ${uuid} removed`));
}
