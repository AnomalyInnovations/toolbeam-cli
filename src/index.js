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
	list,
	login,
	logout,
	projects,
	pull,
	push,
	signup,
	whoami,
} from './commands';


// Command list
const SIGNUP = 'signup';
const LOGIN = 'login';
const INIT = 'init';
const ADD = 'add';
const PROJECTS = 'projects';
const LS = 'ls';
const PULL = 'pull';
const PUSH = 'push';
const LOGOUT = 'logout';
const WHOAMI = 'whoami';

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

	.command(`${ADD} <path>`, 'Add an API resource as a tool',
		yargs => yargs
			.demand(1, 1, 'Missing: <path> of your API resource')
			.strict()
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
			.epilogue('For a full list of tool and parameter options refer to https://github.com/AnomalyInnovations/toolbeam-cli/blob/master/README.md')
			.usage(`${usagePrefix} ${ADD} <path> [options]`)
			.example(`tb ${ADD} /users`, 'Add the resource \/users to the spec')
			.example(`tb ${ADD} /users/{id} --set-param name:id in:path`, 'Add a GET resource with a path parameter')
			.example(`tb ${ADD} /user/31/like --set operation:POST`, 'Add a POST resource')
			.fail(failFn))

	.command(PROJECTS, 'List all your projects',
		yargs => yargs.usage(`${usagePrefix} ${PROJECTS}`))

	.command(LS, 'List all your tools',
		yargs => yargs.usage(`${usagePrefix} ${LS}`))

	.command(`${PULL} [id]`, 'Pull your current project spec from Toolbeam',
		yargs => yargs
			.usage(`${usagePrefix} ${PULL} [id]    Optionally pass in a project id`)
			.strict()
			.fail(failFn))

	.command(PUSH, 'Push your current project spec to Toolbeam',
		yargs => yargs.usage(`${usagePrefix} ${PUSH}`))

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
		requireLogin(() => add(store, argv.path, toolOpts, paramOpts));
		break;
	case PROJECTS:
		requireLogin(() => projects(store));
		break;
	case LS:
		requireLogin(() => list(store));
		break;
	case PULL:
		requireLogin(() => pull(store, argv.id));
		break;
	case PUSH:
		requireLogin(() => push(store));
		break;
	case LOGOUT:
		logout(store);
	case WHOAMI:
		requireLogin(() => whoami(store));
		break;
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
