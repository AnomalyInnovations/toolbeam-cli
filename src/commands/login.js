import prompt from 'prompt';
import chalk from 'chalk';
import { getPrompt } from '../libs/prompt';
import * as userActions from '../actions/user-actions';

const prompts = [
	{
		name: 'email',
		description: 'Enter your email:',
		message: 'Please enter your email',
		required: true
	},
	{
		name: 'password',
		description: 'Enter your password:',
		message: 'Please enter your password',
		hidden: true,
		required: true
	},
];

export default async function(store) {

	prompt.start();

	prompt.message = '';
	prompt.delimiter = '';

	let email, password;
	try {
		{email, password} = await getPrompt(prompts);
	}
	catch(e) {
		throw {message: 'Login cancelled'};
	}

	console.log(chalk.cyan('Logging in to Toolbeam…'));

	await store.dispatch(userActions.login(email, password));

	console.log(chalk.cyan('You are logged in to Toolbeam.'));
}
