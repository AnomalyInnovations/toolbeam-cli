#!/usr/bin/env node
'use strict';

var _package = require('../package.json');

var _package2 = _interopRequireDefault(_package);

require('babel-polyfill');

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _figlet = require('figlet');

var _figlet2 = _interopRequireDefault(_figlet);

var _clear = require('clear');

var _clear2 = _interopRequireDefault(_clear);

var _requireLogin2 = require('./libs/require-login');

var _requireLogin3 = _interopRequireDefault(_requireLogin2);

var _requireAnonymous2 = require('./libs/require-anonymous');

var _requireAnonymous3 = _interopRequireDefault(_requireAnonymous2);

var _options = require('./options');

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Support source map outputs
require('source-map-support').install();

// Print all unhandled errors
process.on('unhandledRejection', function (err) {
  console.log(err.stack);
  process.exit(1);
});

var requireLogin = (0, _requireLogin3.default)(_store2.default);
var requireAnonymous = (0, _requireAnonymous3.default)(_store2.default);

_commander2.default.version(_package2.default.version)
/*.option('-C, --chdir <path>', 'change the working directory')
.option('-c, --config <path>', 'set config path. defaults to ./deploy.conf')*/;

// Account Commands
_commander2.default.command('signup').description('signup for Toolbeam').action(function () {
  return requireAnonymous(function () {
    return (0, _options.signup)(_store2.default);
  });
});

_commander2.default.command('login').description('login to Toolbeam').action(function () {
  return requireAnonymous(function () {
    return (0, _options.login)(_store2.default);
  });
});

_commander2.default.command('logout').description('logout from Toolbeam').action(function () {
  return (0, _options.logout)(_store2.default);
});

_commander2.default.command('whoami').description('who am i').action(function () {
  return requireLogin(function () {
    return (0, _options.whoami)(_store2.default);
  });
});

// Project Commands
_commander2.default.command('ls').description('list of your tools').action(function () {
  return requireLogin(function () {
    return (0, _options.list)(_store2.default);
  });
});

_commander2.default.command('create').description('create new tool').action(function () {
  return requireLogin(function () {
    return (0, _options.list)(_store2.default);
  });
});

_commander2.default.command('pull').description('pull spec from Toolbeam').action(function () {
  return requireLogin(function () {
    return (0, _options.pull)(_store2.default);
  });
});

_commander2.default.command('push <file>').description('push a spec to Toolbeam').action(function (file) {
  return requireLogin(function () {
    return (0, _options.push)(_store2.default, file);
  });
});

_commander2.default.parse(process.argv);

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
//# sourceMappingURL=index.js.map