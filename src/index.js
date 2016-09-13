#!/usr/bin/env node

// Support source map outputs
require('source-map-support').install();

// Print all unhandled errors
process.on('unhandledRejection', err => {
    console.log(err.stack);
    process.exit(1);
});

import pkgJson from '../package.json';

import 'babel-polyfill';
import chalk from 'chalk';
import figlet from 'figlet';
import clear from 'clear';
import _requireLogin from './libs/require-login';
import {
	list,
	login,
	logout,
	pull,
	push,
} from './options';


import program from 'commander';
import store from './store';

const requireLogin = _requireLogin(store);

program
   .version(pkgJson.version)
   /*.option('-C, --chdir <path>', 'change the working directory')
   .option('-c, --config <path>', 'set config path. defaults to ./deploy.conf')*/;

program
 .command('login')
 .description('login to Toolbeam')
 .action(() => login(store));

program
 .command('ls')
 .description('list of your tools')
 .action(() => requireLogin(() => list(store)));

program
 .command('pull')
 .description('pull spec from Toolbeam')
 .action(() => requireLogin(() => pull(store)));

program
 .command('push <file>')
 .description('push a spec to Toolbeam')
 .action(file => requireLogin(() => push(store, file)));

program
 .command('logout')
 .description('logout from Toolbeam')
 .action(() => logout(store));

program.parse(process.argv);

/*
program
 .command('exec <cmd>')
 .description('run the given remote command')
 .action(function(cmd) {
	 console.log('exec "%s"', cmd);
 });

program
 .command('teardown <dir> [otherDirs...]')
 .description('run teardown commands')
 .action(function(dir, otherDirs) {
	 console.log('dir "%s"', dir);
	 if (otherDirs) {
		 otherDirs.forEach(function (oDir) {
			 console.log('dir "%s"', oDir);
		 });
	 }
 });

program
 .command('*')
 .description('deploy the given env')
 .action(function(env) {
	 console.log('deploying "%s"', env);
 });

//console.log('chdir: %s config: %s  tests: %s ', program.chdir, program.config, program.noTests);
//
//clear();
//console.log(
//  chalk.green(
//    figlet.textSync('Toolbeam', { horizontalLayout: 'full' })
//  )
//);
*/
