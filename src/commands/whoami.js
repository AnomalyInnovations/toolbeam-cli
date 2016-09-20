import chalk from 'chalk';

import * as userActions from '../actions/user-actions';

export default async function(store) {

	console.log(chalk.cyan(`You are logged in as '${userActions.getUserEmail(store.getState())}'.`));
}