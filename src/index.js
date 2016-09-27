#!/usr/bin/env node

// Support source map outputs
require('source-map-support').install();

// Print all unhandled errors
process.on('unhandledRejection', err => {
    console.log(err.stack);
    process.exit(1);
});

import packageJson from '../package.json';

import 'babel-polyfill';
import chalk from 'chalk';
import yargs from 'yargs';

import store from './store';
import _requireLogin from './libs/require-login';
import _requireAnonymous from './libs/require-anonymous';
import {
	add,
	init,
	login,
	logout,
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

	.command(`${ADD} <path> [oprn]`, 'Add an API resource as a tool',
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
			.usage(`${usagePrefix} ${ADD} <path> [oprn] [options]`)
			.example(`tb ${ADD} /users`, 'Add a GET resource')
			.example(`tb ${ADD} /user/31/like POST`, 'Add a POST resource')
			.example(`tb ${ADD} /users/{id} POST --set-param name:id in:path`, 'Add a POST resource with a path parameter')
			.fail(failFn))

	.command(`${REMOVE} <path> [oprn]`, false, yargs => cmdRemove(yargs, RM))
	.command(`${RM} <path> [oprn]`, 'Remove the given API resource', yargs => cmdRemove(yargs, RM))

	.command(`${PULL} [id]`, 'Pull your current project spec from Toolbeam',
		yargs => yargs
			.usage(`${usagePrefix} ${PULL} [id]`)
			.strict()
			.example(`tb ${PULL}`, 'Pull the current project spec')
			.example(`tb ${PULL} 96a6d7f2`, 'Pull the project spec for the given id')
			.fail(failFn))

	.command(PUSH, 'Push your current project spec to Toolbeam',
		yargs => yargs.usage(`${usagePrefix} ${PUSH}`))

	.command(PROJECT, 'View and manage your projects',
		yargs => yargs
			.usage(`${usagePrefix} ${PROJECT} <command>`)
			.demand(2, 2, 'Missing: <command> to be executed')
			.strict()
			.command(LS, PROJECTLSDESC, yargs => cmdProjectLs(yargs, LS))
			.command(LIST, false, yargs => cmdProjectLs(yargs, LIST))
			.command(`${RM} <id>`, PROJECTRMDESC, yargs => cmdProjectRm(yargs, RM))
			.command(`${REMOVE} <id>`, false, yargs => cmdProjectRm(yargs, REMOVE))
			.fail(failFn))

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
		yargs.showHelp();
		process.exit(1);
	})
	.argv;

switch (argv._[0]) {
	case SIGNUP:
		requireAnonymous(() => signup(store));
		break;
	case LOGIN:
		requireAnonymous(() => login(store));
		break;
	case INIT:
		requireLogin(() => init(store, argv.url));
		break;
	case ADD:
		const {toolOpts, paramOpts} = parseAddOptions(argv.set, argv['set-param']);
		requireLogin(() => add(store, argv.path, argv.oprn, toolOpts, paramOpts));
		break;
	case RM:
	case REMOVE:
		requireLogin(() => remove(store, argv.path, argv.oprn));
		break;
	case PULL:
		requireLogin(() => pull(store, argv.id));
		break;
	case PUSH:
		requireLogin(() => push(store));
		break;
	case PROJECT:
		switch (argv._[1]) {
			case LS:
			case LIST:
				requireLogin(() => projectLs(store));
				break;
			case RM:
			case REMOVE:
				requireLogin(() => projectRm(store, argv.id));
				break;
		}
		break;
	case WHOAMI:
		requireLogin(() => whoami(store));
		break;
	case LOGOUT:
		logout(store);
		break;
	default:
		yargs.showHelp();
}

///////////////////////
// Private Functions //
///////////////////////

function parseAddOptions(toolOptStr = [], paramOptStr = []) {
	const toolOpts = toolOptStr.reduce((acc, opt) => {
		const sp = opt.split(':');

		if (sp.length === 2) {
			acc[sp[0]] = sp[1];
		}

		return acc;
	}, {});

	const paramOpts = paramOptStr.reduce((acc, opt, i, opts) => {
		const sp = opt.split(':');

		if (sp.length !== 2) {
			return acc;
		}

		const [key, value] = sp;

		// Starting a new param
		if (key.toLowerCase() === 'name') {
			// Finish what was being processed
			if (acc.current !== null) {
				acc.list.push(acc.current);
			}

			acc.current = {};
		}

		acc.current[key] = value;

		// If end of list finish processing
		if (i + 1 === opts.length) {
			acc.list.push(acc.current);
		}

		return acc;
	}, {list: [], current: null}).list;

	return {
		toolOpts,
		paramOpts
	};
}

function checkOperation(argv) {
	const types = {
		'get': true,
		'post': true,
		'put': true,
		'patch': true,
		'delete': true
	};

	if (argv._[2] && ! types.hasOwnProperty(argv._[2].toLowerCase())) {
		return 'Error: Not a valid HTTP operation <oprn>';
	}
	return true;
}

function cmdRemove(yargs, cmd) {
	yargs
		.demand(1, 2, 'Missing: <path> of your API resource')
		.strict()
		.check(checkOperation)
		.usage(`${usagePrefix} ${cmd} <path> [oprn]`)
		.example(`tb ${cmd} /users`, 'Remove the \/users GET resource')
		.example(`tb ${cmd} /users/{id} POST`, 'Remove the \/users/{id} POST resource')
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
		.strict();
}
