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
import {
	list,
	login,
	logout,
	pull,
	push,
} from './options';


// Command list
const LOGIN = 'login';
const LS = 'ls';
const PULL = 'pull';
const PUSH = 'push';
const LOGOUT = 'logout';

const usagePrefix = 'Usage: tb';
const requireLogin = _requireLogin(store);

const argv = yargs
	.usage(`${usagePrefix} <command>`)
	.demand(1, 1)
	.command(LOGIN, 'Login to Toolbeam',
		yargs => yargs.usage(`${usagePrefix} ${LOGIN}`))
	.command(LS, 'List all your tools',
		yargs => yargs.usage(`${usagePrefix} ${LS}`))
	.command(PULL, 'Pull your spec from Toolbeam',
		yargs => yargs.usage(`${usagePrefix} ${PULL}`))
	.command(`${PUSH} <file>`, 'Push your spec to Toolbeam',
		yargs => yargs
			.demand(1, 1, 'Missing: <file> that needs to be pushed')
			.strict()
			.usage(`${usagePrefix} ${PUSH} <file>`)
			.example(`tb ${PUSH} spec.json`, 'Push spec.json to Toolbeam')
			.fail(msg => console.log(chalk.red(`${msg}\n`))))
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
	case LOGIN:
		login(store);
		break;
	case LS:
		requireLogin(() => list(store));
		break;
	case PULL:
		requireLogin(() => pull(store));
		break;
	case PUSH:
		requireLogin(() => push(store, argv.file));
		break;
	case LOGOUT:
		logout(store);
		break;
}
