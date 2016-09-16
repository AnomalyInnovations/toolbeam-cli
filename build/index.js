#!/usr/bin/env node
'use strict';

var _package = require('../package.json');

var _package2 = _interopRequireDefault(_package);

require('babel-polyfill');

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _yargs = require('yargs');

var _yargs2 = _interopRequireDefault(_yargs);

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

var _requireLogin2 = require('./libs/require-login');

var _requireLogin3 = _interopRequireDefault(_requireLogin2);

var _requireAnonymous2 = require('./libs/require-anonymous');

var _requireAnonymous3 = _interopRequireDefault(_requireAnonymous2);

var _commands = require('./commands');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Support source map outputs
require('source-map-support').install();

// Print all unhandled errors
process.on('unhandledRejection', function (err) {
	console.log(err.stack);
	process.exit(1);
});

// Command list
var SIGNUP = 'signup';
var LOGIN = 'login';
var INIT = 'init';
var LS = 'ls';
var PULL = 'pull';
var PUSH = 'push';
var LOGOUT = 'logout';
var WHOAMI = 'whoami';

var usagePrefix = 'Usage: tb';
var requireLogin = (0, _requireLogin3.default)(_store2.default);
var requireAnonymous = (0, _requireAnonymous3.default)(_store2.default);

var argv = _yargs2.default.usage(usagePrefix + ' <command>').demand(1, 1).command(SIGNUP, 'Sign up for Toolbeam', function (yargs) {
	return yargs.usage(usagePrefix + ' ' + SIGNUP);
}).command(LOGIN, 'Login to Toolbeam', function (yargs) {
	return yargs.usage(usagePrefix + ' ' + LOGIN);
}).command(INIT + ' <url>', 'Initialize your Toolbeam project', function (yargs) {
	return yargs.demand(1, 1, 'Missing: Base <url> of your API').strict().usage(usagePrefix + ' ' + INIT + ' <url>').example('tb ' + INIT + ' http://api.example.com', 'Initilize your Example API project').fail(function (msg) {
		return console.log(_chalk2.default.red(msg + '\n'));
	});
}).command(LS, 'List all your tools', function (yargs) {
	return yargs.usage(usagePrefix + ' ' + LS);
}).command(PULL, 'Pull your spec from Toolbeam', function (yargs) {
	return yargs.usage(usagePrefix + ' ' + PULL);
}).command(PUSH + ' <file>', 'Push your spec to Toolbeam', function (yargs) {
	return yargs.demand(1, 1, 'Missing: <file> that needs to be pushed').strict().usage(usagePrefix + ' ' + PUSH + ' <file>').example('tb ' + PUSH + ' spec.json', 'Push spec.json to Toolbeam').fail(function (msg) {
		return console.log(_chalk2.default.red(msg + '\n'));
	});
}).command(WHOAMI, 'Info about current logged in user', function (yargs) {
	return yargs.usage(usagePrefix + ' ' + WHOAMI);
}).command(LOGOUT, 'Logout from Toolbeam', function (yargs) {
	return yargs.usage(usagePrefix + ' ' + LOGOUT);
}).help('h').alias('h', 'help').alias('v', 'version').version(_package2.default.version).epilogue('For more information, checkout https://toolbeam.com').wrap(null).strict().fail(function (msg, err) {
	if (err) throw err;
	_yargs2.default.showHelp();
	process.exit(1);
}).argv;

switch (argv._[0]) {
	case SIGNUP:
		requireAnonymous(function () {
			return (0, _commands.signup)(_store2.default);
		});
		break;
	case LOGIN:
		requireAnonymous(function () {
			return (0, _commands.login)(_store2.default);
		});
		break;
	case INIT:
		requireLogin(function () {
			return (0, _commands.init)(_store2.default, argv.url);
		});
		break;
	case LS:
		requireLogin(function () {
			return (0, _commands.list)(_store2.default);
		});
		break;
	case PULL:
		requireLogin(function () {
			return (0, _commands.pull)(_store2.default);
		});
		break;
	case PUSH:
		requireLogin(function () {
			return (0, _commands.push)(_store2.default, argv.file);
		});
		break;
	case LOGOUT:
		(0, _commands.logout)(_store2.default);
	case WHOAMI:
		requireLogin(function () {
			return (0, _commands.whoami)(_store2.default);
		});
		break;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiaW5zdGFsbCIsInByb2Nlc3MiLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJzdGFjayIsImV4aXQiLCJTSUdOVVAiLCJMT0dJTiIsIklOSVQiLCJMUyIsIlBVTEwiLCJQVVNIIiwiTE9HT1VUIiwiV0hPQU1JIiwidXNhZ2VQcmVmaXgiLCJyZXF1aXJlTG9naW4iLCJyZXF1aXJlQW5vbnltb3VzIiwiYXJndiIsInVzYWdlIiwiZGVtYW5kIiwiY29tbWFuZCIsInlhcmdzIiwic3RyaWN0IiwiZXhhbXBsZSIsImZhaWwiLCJyZWQiLCJtc2ciLCJoZWxwIiwiYWxpYXMiLCJ2ZXJzaW9uIiwiZXBpbG9ndWUiLCJ3cmFwIiwic2hvd0hlbHAiLCJfIiwidXJsIiwiZmlsZSJdLCJtYXBwaW5ncyI6Ijs7QUFXQTs7OztBQUVBOztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQWxCQTtBQUNBQSxRQUFRLG9CQUFSLEVBQThCQyxPQUE5Qjs7QUFFQTtBQUNBQyxRQUFRQyxFQUFSLENBQVcsb0JBQVgsRUFBaUMsZUFBTztBQUNwQ0MsU0FBUUMsR0FBUixDQUFZQyxJQUFJQyxLQUFoQjtBQUNBTCxTQUFRTSxJQUFSLENBQWEsQ0FBYjtBQUNILENBSEQ7O0FBMEJBO0FBQ0EsSUFBTUMsU0FBUyxRQUFmO0FBQ0EsSUFBTUMsUUFBUSxPQUFkO0FBQ0EsSUFBTUMsT0FBTyxNQUFiO0FBQ0EsSUFBTUMsS0FBSyxJQUFYO0FBQ0EsSUFBTUMsT0FBTyxNQUFiO0FBQ0EsSUFBTUMsT0FBTyxNQUFiO0FBQ0EsSUFBTUMsU0FBUyxRQUFmO0FBQ0EsSUFBTUMsU0FBUyxRQUFmOztBQUVBLElBQU1DLGNBQWMsV0FBcEI7QUFDQSxJQUFNQyxlQUFlLDRDQUFyQjtBQUNBLElBQU1DLG1CQUFtQixnREFBekI7O0FBRUEsSUFBTUMsT0FBTyxnQkFDWEMsS0FEVyxDQUNGSixXQURF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RCxNQUFLekIsRUFBTDtBQUNDTSxlQUFhO0FBQUEsVUFBTSxvQ0FBTjtBQUFBLEdBQWI7QUFDQTtBQUNELE1BQUtMLElBQUw7QUFDQ0ssZUFBYTtBQUFBLFVBQU0sb0NBQU47QUFBQSxHQUFiO0FBQ0E7QUFDRCxNQUFLSixJQUFMO0FBQ0NJLGVBQWE7QUFBQSxVQUFNLHFDQUFZRSxLQUFLa0IsSUFBakIsQ0FBTjtBQUFBLEdBQWI7QUFDQTtBQUNELE1BQUt2QixNQUFMO0FBQ0M7QUFDRCxNQUFLQyxNQUFMO0FBQ0NFLGVBQWE7QUFBQSxVQUFNLHNDQUFOO0FBQUEsR0FBYjtBQUNBO0FBdkJGIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi8vIFN1cHBvcnQgc291cmNlIG1hcCBvdXRwdXRzXG5yZXF1aXJlKCdzb3VyY2UtbWFwLXN1cHBvcnQnKS5pbnN0YWxsKCk7XG5cbi8vIFByaW50IGFsbCB1bmhhbmRsZWQgZXJyb3JzXG5wcm9jZXNzLm9uKCd1bmhhbmRsZWRSZWplY3Rpb24nLCBlcnIgPT4ge1xuICAgIGNvbnNvbGUubG9nKGVyci5zdGFjayk7XG4gICAgcHJvY2Vzcy5leGl0KDEpO1xufSk7XG5cbmltcG9ydCBwYWNrYWdlSnNvbiBmcm9tICcuLi9wYWNrYWdlLmpzb24nO1xuXG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmltcG9ydCBjaGFsayBmcm9tICdjaGFsayc7XG5pbXBvcnQgeWFyZ3MgZnJvbSAneWFyZ3MnO1xuXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5pbXBvcnQgX3JlcXVpcmVMb2dpbiBmcm9tICcuL2xpYnMvcmVxdWlyZS1sb2dpbic7XG5pbXBvcnQgX3JlcXVpcmVBbm9ueW1vdXMgZnJvbSAnLi9saWJzL3JlcXVpcmUtYW5vbnltb3VzJztcbmltcG9ydCB7XG5cdGluaXQsXG5cdGxpc3QsXG5cdGxvZ2luLFxuXHRsb2dvdXQsXG5cdHB1bGwsXG5cdHB1c2gsXG5cdHNpZ251cCxcblx0d2hvYW1pLFxufSBmcm9tICcuL2NvbW1hbmRzJztcblxuXG4vLyBDb21tYW5kIGxpc3RcbmNvbnN0IFNJR05VUCA9ICdzaWdudXAnO1xuY29uc3QgTE9HSU4gPSAnbG9naW4nO1xuY29uc3QgSU5JVCA9ICdpbml0JztcbmNvbnN0IExTID0gJ2xzJztcbmNvbnN0IFBVTEwgPSAncHVsbCc7XG5jb25zdCBQVVNIID0gJ3B1c2gnO1xuY29uc3QgTE9HT1VUID0gJ2xvZ291dCc7XG5jb25zdCBXSE9BTUkgPSAnd2hvYW1pJztcblxuY29uc3QgdXNhZ2VQcmVmaXggPSAnVXNhZ2U6IHRiJztcbmNvbnN0IHJlcXVpcmVMb2dpbiA9IF9yZXF1aXJlTG9naW4oc3RvcmUpO1xuY29uc3QgcmVxdWlyZUFub255bW91cyA9IF9yZXF1aXJlQW5vbnltb3VzKHN0b3JlKTtcblxuY29uc3QgYXJndiA9IHlhcmdzXG5cdC51c2FnZShgJHt1c2FnZVByZWZpeH0gPGNvbW1hbmQ+YClcblx0LmRlbWFuZCgxLCAxKVxuXHQuY29tbWFuZChTSUdOVVAsICdTaWduIHVwIGZvciBUb29sYmVhbScsXG5cdFx0eWFyZ3MgPT4geWFyZ3MudXNhZ2UoYCR7dXNhZ2VQcmVmaXh9ICR7U0lHTlVQfWApKVxuXHQuY29tbWFuZChMT0dJTiwgJ0xvZ2luIHRvIFRvb2xiZWFtJyxcblx0XHR5YXJncyA9PiB5YXJncy51c2FnZShgJHt1c2FnZVByZWZpeH0gJHtMT0dJTn1gKSlcblx0LmNvbW1hbmQoYCR7SU5JVH0gPHVybD5gLCAnSW5pdGlhbGl6ZSB5b3VyIFRvb2xiZWFtIHByb2plY3QnLFxuXHRcdHlhcmdzID0+IHlhcmdzXG5cdFx0XHQuZGVtYW5kKDEsIDEsICdNaXNzaW5nOiBCYXNlIDx1cmw+IG9mIHlvdXIgQVBJJylcblx0XHRcdC5zdHJpY3QoKVxuXHRcdFx0LnVzYWdlKGAke3VzYWdlUHJlZml4fSAke0lOSVR9IDx1cmw+YClcblx0XHRcdC5leGFtcGxlKGB0YiAke0lOSVR9IGh0dHA6Ly9hcGkuZXhhbXBsZS5jb21gLCAnSW5pdGlsaXplIHlvdXIgRXhhbXBsZSBBUEkgcHJvamVjdCcpXG5cdFx0XHQuZmFpbChtc2cgPT4gY29uc29sZS5sb2coY2hhbGsucmVkKGAke21zZ31cXG5gKSkpKVxuXHQuY29tbWFuZChMUywgJ0xpc3QgYWxsIHlvdXIgdG9vbHMnLFxuXHRcdHlhcmdzID0+IHlhcmdzLnVzYWdlKGAke3VzYWdlUHJlZml4fSAke0xTfWApKVxuXHQuY29tbWFuZChQVUxMLCAnUHVsbCB5b3VyIHNwZWMgZnJvbSBUb29sYmVhbScsXG5cdFx0eWFyZ3MgPT4geWFyZ3MudXNhZ2UoYCR7dXNhZ2VQcmVmaXh9ICR7UFVMTH1gKSlcblx0LmNvbW1hbmQoYCR7UFVTSH0gPGZpbGU+YCwgJ1B1c2ggeW91ciBzcGVjIHRvIFRvb2xiZWFtJyxcblx0XHR5YXJncyA9PiB5YXJnc1xuXHRcdFx0LmRlbWFuZCgxLCAxLCAnTWlzc2luZzogPGZpbGU+IHRoYXQgbmVlZHMgdG8gYmUgcHVzaGVkJylcblx0XHRcdC5zdHJpY3QoKVxuXHRcdFx0LnVzYWdlKGAke3VzYWdlUHJlZml4fSAke1BVU0h9IDxmaWxlPmApXG5cdFx0XHQuZXhhbXBsZShgdGIgJHtQVVNIfSBzcGVjLmpzb25gLCAnUHVzaCBzcGVjLmpzb24gdG8gVG9vbGJlYW0nKVxuXHRcdFx0LmZhaWwobXNnID0+IGNvbnNvbGUubG9nKGNoYWxrLnJlZChgJHttc2d9XFxuYCkpKSlcblx0LmNvbW1hbmQoV0hPQU1JLCAnSW5mbyBhYm91dCBjdXJyZW50IGxvZ2dlZCBpbiB1c2VyJyxcblx0XHR5YXJncyA9PiB5YXJncy51c2FnZShgJHt1c2FnZVByZWZpeH0gJHtXSE9BTUl9YCkpXG5cdC5jb21tYW5kKExPR09VVCwgJ0xvZ291dCBmcm9tIFRvb2xiZWFtJyxcblx0XHR5YXJncyA9PiB5YXJncy51c2FnZShgJHt1c2FnZVByZWZpeH0gJHtMT0dPVVR9YCkpXG5cdC5oZWxwKCdoJylcblx0LmFsaWFzKCdoJywgJ2hlbHAnKVxuXHQuYWxpYXMoJ3YnLCAndmVyc2lvbicpXG5cdC52ZXJzaW9uKHBhY2thZ2VKc29uLnZlcnNpb24pXG5cdC5lcGlsb2d1ZSgnRm9yIG1vcmUgaW5mb3JtYXRpb24sIGNoZWNrb3V0IGh0dHBzOi8vdG9vbGJlYW0uY29tJylcblx0LndyYXAobnVsbClcblx0LnN0cmljdCgpXG5cdC5mYWlsKChtc2csIGVycikgPT4ge1xuXHRcdGlmIChlcnIpIHRocm93IGVycjtcblx0XHR5YXJncy5zaG93SGVscCgpO1xuXHRcdHByb2Nlc3MuZXhpdCgxKTtcblx0fSlcblx0LmFyZ3Y7XG5cbnN3aXRjaCAoYXJndi5fWzBdKSB7XG5cdGNhc2UgU0lHTlVQOlxuXHRcdHJlcXVpcmVBbm9ueW1vdXMoKCkgPT4gc2lnbnVwKHN0b3JlKSk7XG5cdFx0YnJlYWs7XG5cdGNhc2UgTE9HSU46XG5cdFx0cmVxdWlyZUFub255bW91cygoKSA9PiBsb2dpbihzdG9yZSkpO1xuXHRcdGJyZWFrO1xuXHRjYXNlIElOSVQ6XG5cdFx0cmVxdWlyZUxvZ2luKCgpID0+IGluaXQoc3RvcmUsIGFyZ3YudXJsKSk7XG5cdFx0YnJlYWs7XG5cdGNhc2UgTFM6XG5cdFx0cmVxdWlyZUxvZ2luKCgpID0+IGxpc3Qoc3RvcmUpKTtcblx0XHRicmVhaztcblx0Y2FzZSBQVUxMOlxuXHRcdHJlcXVpcmVMb2dpbigoKSA9PiBwdWxsKHN0b3JlKSk7XG5cdFx0YnJlYWs7XG5cdGNhc2UgUFVTSDpcblx0XHRyZXF1aXJlTG9naW4oKCkgPT4gcHVzaChzdG9yZSwgYXJndi5maWxlKSk7XG5cdFx0YnJlYWs7XG5cdGNhc2UgTE9HT1VUOlxuXHRcdGxvZ291dChzdG9yZSk7XG5cdGNhc2UgV0hPQU1JOlxuXHRcdHJlcXVpcmVMb2dpbigoKSA9PiB3aG9hbWkoc3RvcmUpKTtcblx0XHRicmVhaztcbn1cbiJdfQ==