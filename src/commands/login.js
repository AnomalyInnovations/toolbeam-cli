import prompt from 'prompt';
import chalk from 'chalk';
import { Spinner } from 'clui';
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

	const spinner = new Spinner('Logging in to Toolbeam…');
	spinner.start();

	try {
		await store.dispatch(userActions.login(email, password));
		spinner.stop();
	}
	catch(e) {
		spinner.stop();
		console.log(chalk.red(`Login failed: ${e.message}`));
		return;
	}

	console.log(chalk.cyan('You are logged in to Toolbeam.'));
}
