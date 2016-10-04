#!/usr/bin/env node

// Support source map outputs
require('source-map-support').install();

// Print all unhandled errors
process.on('unhandledRejection', e => {
	console.log(e.stack);
	process.exit(1);
});

import packageJson from '../package.json';

import 'babel-polyfill';
import chalk from 'chalk';
import yargs from 'yargs';
import updateNotifier from 'update-notifier';

import store from './store';
import errorHandler from './libs/error-handler';
import { trimChar } from './libs/string';
import { quietParse } from './libs/json';
import _requireLogin from './libs/require-login';
import _requireAnonymous from './libs/require-anonymous';
import {
	add,
	init,
	login,
	logout,
	messageme,
	projectLs,
	projectRm,
	pull,
	push,
	remove,
	signup,
	whoami,
} from './commands';


// Command list
const SIGNUP = 'signup';
const LOGIN = 'login';
const INIT = 'init';
const ADD = 'add';
const PROJECT = 'project';
const LS = 'ls';
const LIST = 'list';
const RM = 'rm';
const REMOVE = 'remove';
const PULL = 'pull';
const PUSH = 'push';
const LOGOUT = 'logout';
const WHOAMI = 'whoami';
const MSGME = 'messageme';

const PROJECTLSDESC = 'List all your projects';
const PROJECTRMDESC = 'Remove a project';

const usagePrefix = 'Usage: tb';
const requireLogin = _requireLogin(store);
const requireAnonymous = _requireAnonymous(store);

const failFn = msg => console.log(chalk.red(`${msg}\n`));

const argv = yargs
	.usage(`${usagePrefix} <command>`)
	.demand(1, 1)

	.command(SIGNUP, 'Sign up for Toolbeam',
		yargs => yargs.usage(`${usagePrefix} ${SIGNUP}`))

	.command(LOGIN, 'Login to Toolbeam',
		yargs => yargs.usage(`${usagePrefix} ${LOGIN}`))

	.command(`${INIT} <url>`, 'Initialize your Toolbeam project',
		yargs => yargs
			.demand(1, 1, 'Missing: Base <url> of your API')
			.strict()
			.usage(`${usagePrefix} ${INIT} <url>`)
			.example(`tb ${INIT} http://api.example.com`, 'Initilize your Example API project')
			.fail(failFn))

	.command(`${ADD} [oprn] <path>`, 'Add an API resource as a tool',
		yargs => yargs
			.demand(1, 2, 'Missing: <path> of your API resource')
			.strict()
			.check(checkOperation)
			.option('set', {
				type: 'array',
				group: 'Tool Options:',
				desc: 'Set <key>:<value> options for the tool',
			})
			.option('set-param', {
				type: 'array',
				group: 'Parameter Options:',
				desc: 'Set a parameter for the tool and <key>:<value> options',
			})
			.epilogue('For a full list of tool and parameter options refer to https://github.com/AnomalyInnovations/toolbeam-cli')
			.usage(`${usagePrefix} ${ADD} [oprn] <path> [options]`)
			.example(`tb ${ADD} /users`, 'Add a GET resource')
			.example(`tb ${ADD} POST /user/31/like`, 'Add a POST resource')
			.example(`tb ${ADD} POST /users/{id} --set-param name:id in:path`, 'Add a POST resource with a path parameter')
			.fail(failFn))

	.command(`${REMOVE} [oprn] <path>`, false, yargs => cmdRemove(yargs, RM))
	.command(`${RM} [oprn] <path>`, 'Remove the given API resource', yargs => cmdRemove(yargs, RM))

	.command(PUSH, 'Push your current project spec to Toolbeam',
		yargs => yargs.usage(`${usagePrefix} ${PUSH}`))

	.command(`${PULL} [id]`, 'Pull your current project spec from Toolbeam',
		yargs => yargs
			.usage(`${usagePrefix} ${PULL} [id]`)
			.strict()
			.example(`tb ${PULL}`, 'Pull the current project spec')
			.example(`tb ${PULL} 96a6d7f2`, 'Pull the project spec for the given id')
			.fail(failFn))

	.command(PROJECT, 'View and manage your projects',
		yargs => yargs
			.usage(`${usagePrefix} ${PROJECT} <command>`)
			.demand(2, 2)
			.strict()
			.command(LS, PROJECTLSDESC, yargs => cmdProjectLs(yargs, LS))
			.command(LIST, false, yargs => cmdProjectLs(yargs, LIST))
			.command(`${RM} <id>`, PROJECTRMDESC, yargs => cmdProjectRm(yargs, RM))
			.command(`${REMOVE} <id>`, false, yargs => cmdProjectRm(yargs, REMOVE)))

	.command(MSGME, 'Send a text message with your recently created tools',
		yargs => yargs.usage(`${usagePrefix} ${MSGME}`))

	.command(WHOAMI, 'Info about current logged in user',
		yargs => yargs.usage(`${usagePrefix} ${WHOAMI}`))

	.command(LOGOUT, 'Logout from Toolbeam',
		yargs => yargs.usage(`${usagePrefix} ${LOGOUT}`))

	.help('h')
	.alias('h', 'help')
	.alias('v', 'version')
	.version(packageJson.version)
	.epilogue('For more information, checkout https://toolbeam.com')
	.wrap(null)
	.strict()
	.fail((msg, err) => {
		if (err) throw err;

		checkUpdates();
		yargs.showHelp();

		process.exit(1);
	})
	.argv;

// Run the command
try {
	Promise.resolve(runCommand(argv)).catch(errorHandler);
}
catch(e) {
	errorHandler(e);
}

///////////////////////
// Private Functions //
///////////////////////

function runCommand(argv) {
	switch (argv._[0]) {
		case SIGNUP:
			return requireAnonymous(() => signup(store));
		case LOGIN:
			return requireAnonymous(() => login(store));
		case INIT:
			return requireLogin(() => init(store, argv.url));
		case ADD:
			return requireLogin(() =>
				add(
					store,
					...getPathOprn(argv),
					parseAddToolOptions(argv.set),
					parseAddParamOptions(argv.setParam)
				));
		case RM:
		case REMOVE:
			return requireLogin(() => remove(store, ...getPathOprn(argv)));
		case PULL:
			return requireLogin(() => pull(store, argv.id));
		case PUSH:
			return requireLogin(() => push(store));
		case PROJECT:
			switch (argv._[1]) {
				case LS:
				case LIST:
					return requireLogin(() => projectLs(store));
				case RM:
				case REMOVE:
					return requireLogin(() => projectRm(store, argv.id));
			}
			break;
		case MSGME:
			return requireLogin(() => messageme(store));
		case WHOAMI:
			return requireLogin(() => whoami(store));
		case LOGOUT:
			return logout(store);
		default:
			return yargs.showHelp();
	}
}

function cmdRemove(yargs, cmd) {
	yargs
		.demand(1, 2, 'Missing: <path> of your API resource')
		.strict()
		.check(checkOperation)
		.usage(`${usagePrefix} ${cmd} [oprn] <path>`)
		.example(`tb ${cmd} /users`, 'Remove the \/users GET resource')
		.example(`tb ${cmd} POST /users/{id}`, 'Remove the \/users/{id} POST resource')
		.fail(failFn);
}

function cmdProjectLs(yargs, cmd) {
	yargs.usage(`${usagePrefix} ${PROJECT} ${cmd}`);
}

function cmdProjectRm(yargs, cmd) {
	yargs
		.usage(`${usagePrefix} ${PROJECT} ${cmd} <id>`)
		.demand(1, 1, 'Missing: <id> of the project to be removed')
		.example(`tb ${cmd} 96a6d7f2`, 'Remove the project with the given id')
		.strict()
		.fail(failFn);
}

function parseAddToolOptions(options = []) {
	return options.reduce((acc, opt) => {
		const sp = trimChar(opt, ':').split(':');

		if (sp.length >= 2) {
			acc[sp[0]] = parseValue(sp.slice(1).join(':'));
		}

		return acc;
	}, {});
}

function parseAddParamOptions(options = []) {
	return options.reduce((acc, opt, i, opts) => {
		const sp = trimChar(opt, ':').split(':');

		if (sp.length >= 2) {

			const key = sp[0];
			const value = parseValue(sp.slice(1).join(':'));

			// Starting a new param
			if (key.toLowerCase() === 'name') {
				// Finish what was being processed
				if (acc.current !== null) {
					acc.list.push(acc.current);
				}

				acc.current = {};
			}

			acc.current[key] = value;

		}

		// If end of list finish processing
		if (i + 1 === opts.length) {
			acc.list.push(acc.current);
		}

		return acc;
	}, {list: [], current: null}).list;
}

function parseValue(value) {
	// Try and parse value as boolean or number
	const parsedVal = quietParse(value);

	if (parsedVal !== null) {
		return parsedVal;
	}

	// Try and parse as an array
	const parsedArray = parseArray(value);

	if (parsedArray !== null) {
		return parsedArray;
	}

	return value;
}

function parseArray(value) {
	const sp = trimChar(value, ',').split(',');

	if (sp.length === 1) {
		return null;
	}

	return sp.map(part => part.trim());
}

function getPathOprn(argv) {
	return [
		argv.oprn ? argv.path : argv.oprn,
		argv.oprn || argv.path
	];
}

function checkOperation(argv) {
	const types = {
		'get': true,
		'post': true,
		'put': true,
		'patch': true,
		'delete': true
	};

	if (argv._[2] && ! types.hasOwnProperty(argv._[1].toLowerCase())) {
		return 'Error: Not a valid HTTP operation <oprn>';
	}
	return true;
}

function checkUpdates() {
	const notifier = updateNotifier({ pkg: packageJson });

	notifier.notify();
}
