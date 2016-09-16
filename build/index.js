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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiaW5zdGFsbCIsInByb2Nlc3MiLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJzdGFjayIsImV4aXQiLCJTSUdOVVAiLCJMT0dJTiIsIklOSVQiLCJMUyIsIlBVTEwiLCJQVVNIIiwiTE9HT1VUIiwiV0hPQU1JIiwidXNhZ2VQcmVmaXgiLCJyZXF1aXJlTG9naW4iLCJyZXF1aXJlQW5vbnltb3VzIiwiYXJndiIsInVzYWdlIiwiZGVtYW5kIiwiY29tbWFuZCIsInlhcmdzIiwic3RyaWN0IiwiZXhhbXBsZSIsImZhaWwiLCJyZWQiLCJtc2ciLCJoZWxwIiwiYWxpYXMiLCJ2ZXJzaW9uIiwiZXBpbG9ndWUiLCJ3cmFwIiwic2hvd0hlbHAiLCJfIiwidXJsIiwiZmlsZSJdLCJtYXBwaW5ncyI6Ijs7QUFXQTs7OztBQUVBOztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQWxCQTtBQUNBQSxRQUFRLG9CQUFSLEVBQThCQyxPQUE5Qjs7QUFFQTtBQUNBQyxRQUFRQyxFQUFSLENBQVcsb0JBQVgsRUFBaUMsZUFBTztBQUNwQ0MsU0FBUUMsR0FBUixDQUFZQyxJQUFJQyxLQUFoQjtBQUNBTCxTQUFRTSxJQUFSLENBQWEsQ0FBYjtBQUNILENBSEQ7O0FBMkJBO0FBQ0EsSUFBTUMsU0FBUyxRQUFmO0FBQ0EsSUFBTUMsUUFBUSxPQUFkO0FBQ0EsSUFBTUMsT0FBTyxNQUFiO0FBQ0EsSUFBTUMsS0FBSyxJQUFYO0FBQ0EsSUFBTUMsT0FBTyxNQUFiO0FBQ0EsSUFBTUMsT0FBTyxNQUFiO0FBQ0EsSUFBTUMsU0FBUyxRQUFmO0FBQ0EsSUFBTUMsU0FBUyxRQUFmOztBQUVBLElBQU1DLGNBQWMsV0FBcEI7QUFDQSxJQUFNQyxlQUFlLDRDQUFyQjtBQUNBLElBQU1DLG1CQUFtQixnREFBekI7O0FBRUEsSUFBTUMsT0FBTyxnQkFDWEMsS0FEVyxDQUNGSixXQURF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RCxNQUFLekIsRUFBTDtBQUNDTSxlQUFhO0FBQUEsVUFBTSxvQ0FBTjtBQUFBLEdBQWI7QUFDQTtBQUNELE1BQUtMLElBQUw7QUFDQ0ssZUFBYTtBQUFBLFVBQU0sb0NBQU47QUFBQSxHQUFiO0FBQ0E7QUFDRCxNQUFLSixJQUFMO0FBQ0NJLGVBQWE7QUFBQSxVQUFNLHFDQUFZRSxLQUFLa0IsSUFBakIsQ0FBTjtBQUFBLEdBQWI7QUFDQTtBQUNELE1BQUt2QixNQUFMO0FBQ0M7QUFDRCxNQUFLQyxNQUFMO0FBQ0NFLGVBQWE7QUFBQSxVQUFNLHNDQUFOO0FBQUEsR0FBYjtBQUNBO0FBdkJGIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi8vIFN1cHBvcnQgc291cmNlIG1hcCBvdXRwdXRzXG5yZXF1aXJlKCdzb3VyY2UtbWFwLXN1cHBvcnQnKS5pbnN0YWxsKCk7XG5cbi8vIFByaW50IGFsbCB1bmhhbmRsZWQgZXJyb3JzXG5wcm9jZXNzLm9uKCd1bmhhbmRsZWRSZWplY3Rpb24nLCBlcnIgPT4ge1xuICAgIGNvbnNvbGUubG9nKGVyci5zdGFjayk7XG4gICAgcHJvY2Vzcy5leGl0KDEpO1xufSk7XG5cbmltcG9ydCBwYWNrYWdlSnNvbiBmcm9tICcuLi9wYWNrYWdlLmpzb24nO1xuXG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmltcG9ydCBjaGFsayBmcm9tICdjaGFsayc7XG5pbXBvcnQgeWFyZ3MgZnJvbSAneWFyZ3MnO1xuXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5pbXBvcnQgX3JlcXVpcmVMb2dpbiBmcm9tICcuL2xpYnMvcmVxdWlyZS1sb2dpbic7XG5pbXBvcnQgX3JlcXVpcmVBbm9ueW1vdXMgZnJvbSAnLi9saWJzL3JlcXVpcmUtYW5vbnltb3VzJztcbmltcG9ydCB7XG5cdGFkZCxcblx0aW5pdCxcblx0bGlzdCxcblx0bG9naW4sXG5cdGxvZ291dCxcblx0cHVsbCxcblx0cHVzaCxcblx0c2lnbnVwLFxuXHR3aG9hbWksXG59IGZyb20gJy4vY29tbWFuZHMnO1xuXG5cbi8vIENvbW1hbmQgbGlzdFxuY29uc3QgU0lHTlVQID0gJ3NpZ251cCc7XG5jb25zdCBMT0dJTiA9ICdsb2dpbic7XG5jb25zdCBJTklUID0gJ2luaXQnO1xuY29uc3QgTFMgPSAnbHMnO1xuY29uc3QgUFVMTCA9ICdwdWxsJztcbmNvbnN0IFBVU0ggPSAncHVzaCc7XG5jb25zdCBMT0dPVVQgPSAnbG9nb3V0JztcbmNvbnN0IFdIT0FNSSA9ICd3aG9hbWknO1xuXG5jb25zdCB1c2FnZVByZWZpeCA9ICdVc2FnZTogdGInO1xuY29uc3QgcmVxdWlyZUxvZ2luID0gX3JlcXVpcmVMb2dpbihzdG9yZSk7XG5jb25zdCByZXF1aXJlQW5vbnltb3VzID0gX3JlcXVpcmVBbm9ueW1vdXMoc3RvcmUpO1xuXG5jb25zdCBhcmd2ID0geWFyZ3Ncblx0LnVzYWdlKGAke3VzYWdlUHJlZml4fSA8Y29tbWFuZD5gKVxuXHQuZGVtYW5kKDEsIDEpXG5cdC5jb21tYW5kKFNJR05VUCwgJ1NpZ24gdXAgZm9yIFRvb2xiZWFtJyxcblx0XHR5YXJncyA9PiB5YXJncy51c2FnZShgJHt1c2FnZVByZWZpeH0gJHtTSUdOVVB9YCkpXG5cdC5jb21tYW5kKExPR0lOLCAnTG9naW4gdG8gVG9vbGJlYW0nLFxuXHRcdHlhcmdzID0+IHlhcmdzLnVzYWdlKGAke3VzYWdlUHJlZml4fSAke0xPR0lOfWApKVxuXHQuY29tbWFuZChgJHtJTklUfSA8dXJsPmAsICdJbml0aWFsaXplIHlvdXIgVG9vbGJlYW0gcHJvamVjdCcsXG5cdFx0eWFyZ3MgPT4geWFyZ3Ncblx0XHRcdC5kZW1hbmQoMSwgMSwgJ01pc3Npbmc6IEJhc2UgPHVybD4gb2YgeW91ciBBUEknKVxuXHRcdFx0LnN0cmljdCgpXG5cdFx0XHQudXNhZ2UoYCR7dXNhZ2VQcmVmaXh9ICR7SU5JVH0gPHVybD5gKVxuXHRcdFx0LmV4YW1wbGUoYHRiICR7SU5JVH0gaHR0cDovL2FwaS5leGFtcGxlLmNvbWAsICdJbml0aWxpemUgeW91ciBFeGFtcGxlIEFQSSBwcm9qZWN0Jylcblx0XHRcdC5mYWlsKG1zZyA9PiBjb25zb2xlLmxvZyhjaGFsay5yZWQoYCR7bXNnfVxcbmApKSkpXG5cdC5jb21tYW5kKExTLCAnTGlzdCBhbGwgeW91ciB0b29scycsXG5cdFx0eWFyZ3MgPT4geWFyZ3MudXNhZ2UoYCR7dXNhZ2VQcmVmaXh9ICR7TFN9YCkpXG5cdC5jb21tYW5kKFBVTEwsICdQdWxsIHlvdXIgc3BlYyBmcm9tIFRvb2xiZWFtJyxcblx0XHR5YXJncyA9PiB5YXJncy51c2FnZShgJHt1c2FnZVByZWZpeH0gJHtQVUxMfWApKVxuXHQuY29tbWFuZChgJHtQVVNIfSA8ZmlsZT5gLCAnUHVzaCB5b3VyIHNwZWMgdG8gVG9vbGJlYW0nLFxuXHRcdHlhcmdzID0+IHlhcmdzXG5cdFx0XHQuZGVtYW5kKDEsIDEsICdNaXNzaW5nOiA8ZmlsZT4gdGhhdCBuZWVkcyB0byBiZSBwdXNoZWQnKVxuXHRcdFx0LnN0cmljdCgpXG5cdFx0XHQudXNhZ2UoYCR7dXNhZ2VQcmVmaXh9ICR7UFVTSH0gPGZpbGU+YClcblx0XHRcdC5leGFtcGxlKGB0YiAke1BVU0h9IHNwZWMuanNvbmAsICdQdXNoIHNwZWMuanNvbiB0byBUb29sYmVhbScpXG5cdFx0XHQuZmFpbChtc2cgPT4gY29uc29sZS5sb2coY2hhbGsucmVkKGAke21zZ31cXG5gKSkpKVxuXHQuY29tbWFuZChXSE9BTUksICdJbmZvIGFib3V0IGN1cnJlbnQgbG9nZ2VkIGluIHVzZXInLFxuXHRcdHlhcmdzID0+IHlhcmdzLnVzYWdlKGAke3VzYWdlUHJlZml4fSAke1dIT0FNSX1gKSlcblx0LmNvbW1hbmQoTE9HT1VULCAnTG9nb3V0IGZyb20gVG9vbGJlYW0nLFxuXHRcdHlhcmdzID0+IHlhcmdzLnVzYWdlKGAke3VzYWdlUHJlZml4fSAke0xPR09VVH1gKSlcblx0LmhlbHAoJ2gnKVxuXHQuYWxpYXMoJ2gnLCAnaGVscCcpXG5cdC5hbGlhcygndicsICd2ZXJzaW9uJylcblx0LnZlcnNpb24ocGFja2FnZUpzb24udmVyc2lvbilcblx0LmVwaWxvZ3VlKCdGb3IgbW9yZSBpbmZvcm1hdGlvbiwgY2hlY2tvdXQgaHR0cHM6Ly90b29sYmVhbS5jb20nKVxuXHQud3JhcChudWxsKVxuXHQuc3RyaWN0KClcblx0LmZhaWwoKG1zZywgZXJyKSA9PiB7XG5cdFx0aWYgKGVycikgdGhyb3cgZXJyO1xuXHRcdHlhcmdzLnNob3dIZWxwKCk7XG5cdFx0cHJvY2Vzcy5leGl0KDEpO1xuXHR9KVxuXHQuYXJndjtcblxuc3dpdGNoIChhcmd2Ll9bMF0pIHtcblx0Y2FzZSBTSUdOVVA6XG5cdFx0cmVxdWlyZUFub255bW91cygoKSA9PiBzaWdudXAoc3RvcmUpKTtcblx0XHRicmVhaztcblx0Y2FzZSBMT0dJTjpcblx0XHRyZXF1aXJlQW5vbnltb3VzKCgpID0+IGxvZ2luKHN0b3JlKSk7XG5cdFx0YnJlYWs7XG5cdGNhc2UgSU5JVDpcblx0XHRyZXF1aXJlTG9naW4oKCkgPT4gaW5pdChzdG9yZSwgYXJndi51cmwpKTtcblx0XHRicmVhaztcblx0Y2FzZSBMUzpcblx0XHRyZXF1aXJlTG9naW4oKCkgPT4gbGlzdChzdG9yZSkpO1xuXHRcdGJyZWFrO1xuXHRjYXNlIFBVTEw6XG5cdFx0cmVxdWlyZUxvZ2luKCgpID0+IHB1bGwoc3RvcmUpKTtcblx0XHRicmVhaztcblx0Y2FzZSBQVVNIOlxuXHRcdHJlcXVpcmVMb2dpbigoKSA9PiBwdXNoKHN0b3JlLCBhcmd2LmZpbGUpKTtcblx0XHRicmVhaztcblx0Y2FzZSBMT0dPVVQ6XG5cdFx0bG9nb3V0KHN0b3JlKTtcblx0Y2FzZSBXSE9BTUk6XG5cdFx0cmVxdWlyZUxvZ2luKCgpID0+IHdob2FtaShzdG9yZSkpO1xuXHRcdGJyZWFrO1xufVxuIl19