import prompt from 'prompt';
import chalk from 'chalk';
import * as errors from '../errors';
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
		throw errors.ERR_SIGNUP_PSWDS_DONT_MATCH;
	}

	console.log(chalk.gray('Signing up for Toolbeam'));

	await store.dispatch(userActions.signup(email, password));

	console.log(`You are signed up. We've sent a verification email to '${email}'.`);

}
