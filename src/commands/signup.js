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
	{
		name: 'passwordConfirm',
		description: 'Confirm your password:',
		message: 'Please enter your password again',
		hidden: true,
		required: true
	},
];

export default async function(store) {

	prompt.start();

	prompt.message = '';
	prompt.delimiter = '';

	const {email, password, passwordConfirm} = await getPrompt(prompts);

	if (password != passwordConfirm) {
		console.log(chalk.red('Password does not match the confirm password.'));
		return;
	}

	const spinner = new Spinner('Signing up for Toolbeam…');
	spinner.start();

	try {
		await store.dispatch(userActions.signup(email, password));
		spinner.stop();
	}
	catch(e) {
		spinner.stop();
		console.log(chalk.red(`Signup failed: ${e.message}`));
		return;
	}

	console.log(chalk.green('You are signed up for Toolbeam.'));

}
