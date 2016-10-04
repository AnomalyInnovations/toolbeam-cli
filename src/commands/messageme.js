import superagent from 'superagent';
import prompt from 'prompt';
import chalk from 'chalk';
import { getPrompt } from '../libs/prompt';
import { truncate } from '../libs/string';

import config from '../config';
import * as errors from '../errors';
import * as toolsActions from '../actions/tools-actions';
import * as userActions from '../actions/user-actions';

const numberPrompt = {
	name: 'number',
	description: 'Enter your phone number:',
	message: 'Please enter your phone number',
	required: true
};

const confirmPrompt = {
  name: 'confirm',
  description: null,
};

export default async function({getState, dispatch}) {

	let number = userActions.getCachedPhoneNumber(getState());
	let promptNumber = (typeof number == 'undefined') || (number === null);

	prompt.start();

	prompt.message = '';
	prompt.delimiter = '';

	// Confirm sending to cached number
	if (number) {
		confirmPrompt.description = `Send a text message to '${number}'? [Y/n]`;

		const { confirm } = await getPrompt([confirmPrompt]);

		if (confirm != 'Yes' && confirm != 'Y') {
			promptNumber = true;
		}
	}

	// If not prompt for the number
	if (promptNumber) {
		number = (await getPrompt([numberPrompt])).number;
	}

	console.log(chalk.gray('Fetching your recent tools'));

	// Load tools
	await dispatch(toolsActions.load({ mode: 'tool_id_desc' }));

	const tools = toolsActions.getTools(getState());

	if (tools.length === 0) {
		console.log('You haven\'t created any tools yet!');
		return;
	}

	const toolsSummary = tools.slice(0, 3).reduce((acc, tool) => (
		`${acc}\n${truncate(tool.name, 60, '...')} - ${fullURL(tool.uri)}`
	), '');

	// Make a request to Textbelt
	const ret = await textbelt(number, `Toolbeam:\n${toolsSummary}`);

	if (ret.success === true) {
		// Cache phone number
		dispatch(userActions.cachePhoneNumber(number));
		console.log(`Text message sent to '${number}'. You should be receiving it shortly.`);
	}
	else if (ret.success === false && ret.message) {
		throw ret.message.slice(0, -1);
	}
	else {
		throw errors.ERR_MSGME_REQUEST_FAIL;
	}
}

function textbelt(number, message) {
	return new Promise((resolve, reject) => {
		superagent
			.post('http://textbelt.com/text')
			.send({
				number: number,
				message: message
			})
			.end((err, { body } = {}) => err ? reject(body || err) : resolve(body));
	});
}

function fullURL(uri) {
	return `${config.webScheme}://${config.webHost}/t/${uri}`;
}
