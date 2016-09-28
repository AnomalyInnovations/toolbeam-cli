import chalk from 'chalk';

import * as userActions from '../actions/user-actions';

export default function(store) {
	console.log(chalk.cyan(`You are logged in as '${userActions.getUserEmail(store.getState())}'.`));
	console.log(chalk.cyan(`API KEY: ${userActions.getUserApiKey(store.getState())}.`));
}
