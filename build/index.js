#!/usr/bin/env node
'use strict';

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

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
var ADD = 'add';
var PROJECTS = 'projects';
var LS = 'ls';
var PULL = 'pull';
var PUSH = 'push';
var LOGOUT = 'logout';
var WHOAMI = 'whoami';

var usagePrefix = 'Usage: tb';
var requireLogin = (0, _requireLogin3.default)(_store2.default);
var requireAnonymous = (0, _requireAnonymous3.default)(_store2.default);

var failFn = function failFn(msg) {
	return console.log(_chalk2.default.red(msg + '\n'));
};

var argv = _yargs2.default.usage(usagePrefix + ' <command>').demand(1, 1).command(SIGNUP, 'Sign up for Toolbeam', function (yargs) {
	return yargs.usage(usagePrefix + ' ' + SIGNUP);
}).command(LOGIN, 'Login to Toolbeam', function (yargs) {
	return yargs.usage(usagePrefix + ' ' + LOGIN);
}).command(INIT + ' <url>', 'Initialize your Toolbeam project', function (yargs) {
	return yargs.demand(1, 1, 'Missing: Base <url> of your API').strict().usage(usagePrefix + ' ' + INIT + ' <url>').example('tb ' + INIT + ' http://api.example.com', 'Initilize your Example API project').fail(failFn);
}).command(ADD + ' <path>', 'Add an API resource as a tool', function (yargs) {
	return yargs.demand(1, 1, 'Missing: <path> of your API resource').strict().option('set', {
		type: 'array',
		group: 'Tool Options:',
		desc: 'Set <key>:<value> options for the tool'
	}).option('set-param', {
		type: 'array',
		group: 'Parameter Options:',
		desc: 'Set a parameter for the tool and <key>:<value> options'
	}).epilogue('For a full list of tool and parameter options refer to https://github.com/AnomalyInnovations/toolbeam-cli/blob/master/README.md').usage(usagePrefix + ' ' + ADD + ' <path> [options]').example('tb ' + ADD + ' /users', 'Add the resource \/users to the spec').example('tb ' + ADD + ' /users/{id} --set-param name:id in:path', 'Add a GET resource with a path parameter').example('tb ' + ADD + ' /user/31/like --set operation:POST', 'Add a POST resource').fail(failFn);
}).command(PROJECTS, 'List all your projects', function (yargs) {
	return yargs.usage(usagePrefix + ' ' + PROJECTS);
}).command(LS, 'List all your tools', function (yargs) {
	return yargs.usage(usagePrefix + ' ' + LS);
}).command(PULL, 'Pull your spec from Toolbeam', function (yargs) {
	return yargs.usage(usagePrefix + ' ' + PULL);
}).command(PUSH, 'Push your spec to Toolbeam', function (yargs) {
	return yargs.usage(usagePrefix + ' ' + PUSH);
}).command(WHOAMI, 'Info about current logged in user', function (yargs) {
	return yargs.usage(usagePrefix + ' ' + WHOAMI);
}).command(LOGOUT, 'Logout from Toolbeam', function (yargs) {
	return yargs.usage(usagePrefix + ' ' + LOGOUT);
}).help('h').alias('h', 'help').alias('v', 'version').version(_package2.default.version).epilogue('For more information, checkout https://toolbeam.com').wrap(null).strict().fail(function (msg, err) {
	if (err) throw err;
	_yargs2.default.showHelp();
	process.exit(1);
}).argv;

(function () {
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
		case ADD:
			var _parseAddOptions = parseAddOptions(argv.set, argv['set-param']);

			var toolOpts = _parseAddOptions.toolOpts;
			var paramOpts = _parseAddOptions.paramOpts;

			requireLogin(function () {
				return (0, _commands.add)(_store2.default, argv.path, toolOpts, paramOpts);
			});
			break;
		case PROJECTS:
			requireLogin(function () {
				return (0, _commands.projects)(_store2.default);
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
				return (0, _commands.push)(_store2.default);
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

	///////////////////////
	// Private Functions //
	///////////////////////
})();

function parseAddOptions() {
	var toolOptStr = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	var paramOptStr = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

	var toolOpts = toolOptStr.reduce(function (acc, opt) {
		var sp = opt.split(':');

		if (sp.length === 2) {
			acc[sp[0]] = sp[1];
		}

		return acc;
	}, {});

	var paramOpts = paramOptStr.reduce(function (acc, opt, i, opts) {
		var sp = opt.split(':');

		if (sp.length !== 2) {
			return acc;
		}

		var _sp = (0, _slicedToArray3.default)(sp, 2);

		var key = _sp[0];
		var value = _sp[1];

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
	}, { list: [], current: null }).list;

	return {
		toolOpts: toolOpts,
		paramOpts: paramOpts
	};
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiaW5zdGFsbCIsInByb2Nlc3MiLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJzdGFjayIsImV4aXQiLCJTSUdOVVAiLCJMT0dJTiIsIklOSVQiLCJBREQiLCJQUk9KRUNUUyIsIkxTIiwiUFVMTCIsIlBVU0giLCJMT0dPVVQiLCJXSE9BTUkiLCJ1c2FnZVByZWZpeCIsInJlcXVpcmVMb2dpbiIsInJlcXVpcmVBbm9ueW1vdXMiLCJmYWlsRm4iLCJyZWQiLCJtc2ciLCJhcmd2IiwidXNhZ2UiLCJkZW1hbmQiLCJjb21tYW5kIiwieWFyZ3MiLCJzdHJpY3QiLCJleGFtcGxlIiwiZmFpbCIsIm9wdGlvbiIsInR5cGUiLCJncm91cCIsImRlc2MiLCJlcGlsb2d1ZSIsImhlbHAiLCJhbGlhcyIsInZlcnNpb24iLCJ3cmFwIiwic2hvd0hlbHAiLCJfIiwidXJsIiwicGFyc2VBZGRPcHRpb25zIiwic2V0IiwidG9vbE9wdHMiLCJwYXJhbU9wdHMiLCJwYXRoIiwidG9vbE9wdFN0ciIsInBhcmFtT3B0U3RyIiwicmVkdWNlIiwiYWNjIiwib3B0Iiwic3AiLCJzcGxpdCIsImxlbmd0aCIsImkiLCJvcHRzIiwia2V5IiwidmFsdWUiLCJ0b0xvd2VyQ2FzZSIsImN1cnJlbnQiLCJsaXN0IiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBV0E7Ozs7QUFFQTs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFsQkE7QUFDQUEsUUFBUSxvQkFBUixFQUE4QkMsT0FBOUI7O0FBRUE7QUFDQUMsUUFBUUMsRUFBUixDQUFXLG9CQUFYLEVBQWlDLGVBQU87QUFDcENDLFNBQVFDLEdBQVIsQ0FBWUMsSUFBSUMsS0FBaEI7QUFDQUwsU0FBUU0sSUFBUixDQUFhLENBQWI7QUFDSCxDQUhEOztBQTRCQTtBQUNBLElBQU1DLFNBQVMsUUFBZjtBQUNBLElBQU1DLFFBQVEs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OztBQUVBLE1BQUlELEdBQUdFLE1BQUgsS0FBYyxDQUFsQixFQUFxQjtBQUNwQixVQUFPSixHQUFQO0FBQ0E7O0FBTDBELHlDQU90Q0UsRUFQc0M7O0FBQUEsTUFPcERLLEdBUG9EO0FBQUEsTUFPL0NDLEtBUCtDOztBQVMzRDs7QUFDQSxNQUFJRCxJQUFJRSxXQUFKLE9BQXNCLE1BQTFCLEVBQWtDO0FBQ2pDO0FBQ0EsT0FBSVQsSUFBSVUsT0FBSixLQUFnQixJQUFwQixFQUEwQjtBQUN6QlYsUUFBSVcsSUFBSixDQUFTQyxJQUFULENBQWNaLElBQUlVLE9BQWxCO0FBQ0E7O0FBRURWLE9BQUlVLE9BQUosR0FBYyxFQUFkO0FBQ0E7O0FBRURWLE1BQUlVLE9BQUosQ0FBWUgsR0FBWixJQUFtQkMsS0FBbkI7O0FBRUE7QUFDQSxNQUFJSCxJQUFJLENBQUosS0FBVUMsS0FBS0YsTUFBbkIsRUFBMkI7QUFDMUJKLE9BQUlXLElBQUosQ0FBU0MsSUFBVCxDQUFjWixJQUFJVSxPQUFsQjtBQUNBOztBQUVELFNBQU9WLEdBQVA7QUFDQSxFQTNCaUIsRUEyQmYsRUFBQ1csTUFBTSxFQUFQLEVBQVdELFNBQVMsSUFBcEIsRUEzQmUsRUEyQllDLElBM0I5Qjs7QUE2QkEsUUFBTztBQUNOakIsb0JBRE07QUFFTkM7QUFGTSxFQUFQO0FBSUEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLy8gU3VwcG9ydCBzb3VyY2UgbWFwIG91dHB1dHNcbnJlcXVpcmUoJ3NvdXJjZS1tYXAtc3VwcG9ydCcpLmluc3RhbGwoKTtcblxuLy8gUHJpbnQgYWxsIHVuaGFuZGxlZCBlcnJvcnNcbnByb2Nlc3Mub24oJ3VuaGFuZGxlZFJlamVjdGlvbicsIGVyciA9PiB7XG4gICAgY29uc29sZS5sb2coZXJyLnN0YWNrKTtcbiAgICBwcm9jZXNzLmV4aXQoMSk7XG59KTtcblxuaW1wb3J0IHBhY2thZ2VKc29uIGZyb20gJy4uL3BhY2thZ2UuanNvbic7XG5cbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJztcbmltcG9ydCB5YXJncyBmcm9tICd5YXJncyc7XG5cbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJztcbmltcG9ydCBfcmVxdWlyZUxvZ2luIGZyb20gJy4vbGlicy9yZXF1aXJlLWxvZ2luJztcbmltcG9ydCBfcmVxdWlyZUFub255bW91cyBmcm9tICcuL2xpYnMvcmVxdWlyZS1hbm9ueW1vdXMnO1xuaW1wb3J0IHtcblx0YWRkLFxuXHRpbml0LFxuXHRsaXN0LFxuXHRsb2dpbixcblx0bG9nb3V0LFxuXHRwcm9qZWN0cyxcblx0cHVsbCxcblx0cHVzaCxcblx0c2lnbnVwLFxuXHR3aG9hbWksXG59IGZyb20gJy4vY29tbWFuZHMnO1xuXG5cbi8vIENvbW1hbmQgbGlzdFxuY29uc3QgU0lHTlVQID0gJ3NpZ251cCc7XG5jb25zdCBMT0dJTiA9ICdsb2dpbic7XG5jb25zdCBJTklUID0gJ2luaXQnO1xuY29uc3QgQUREID0gJ2FkZCc7XG5jb25zdCBQUk9KRUNUUyA9ICdwcm9qZWN0cyc7XG5jb25zdCBMUyA9ICdscyc7XG5jb25zdCBQVUxMID0gJ3B1bGwnO1xuY29uc3QgUFVTSCA9ICdwdXNoJztcbmNvbnN0IExPR09VVCA9ICdsb2dvdXQnO1xuY29uc3QgV0hPQU1JID0gJ3dob2FtaSc7XG5cbmNvbnN0IHVzYWdlUHJlZml4ID0gJ1VzYWdlOiB0Yic7XG5jb25zdCByZXF1aXJlTG9naW4gPSBfcmVxdWlyZUxvZ2luKHN0b3JlKTtcbmNvbnN0IHJlcXVpcmVBbm9ueW1vdXMgPSBfcmVxdWlyZUFub255bW91cyhzdG9yZSk7XG5cbmNvbnN0IGZhaWxGbiA9IG1zZyA9PiBjb25zb2xlLmxvZyhjaGFsay5yZWQoYCR7bXNnfVxcbmApKTtcblxuY29uc3QgYXJndiA9IHlhcmdzXG5cdC51c2FnZShgJHt1c2FnZVByZWZpeH0gPGNvbW1hbmQ+YClcblx0LmRlbWFuZCgxLCAxKVxuXG5cdC5jb21tYW5kKFNJR05VUCwgJ1NpZ24gdXAgZm9yIFRvb2xiZWFtJyxcblx0XHR5YXJncyA9PiB5YXJncy51c2FnZShgJHt1c2FnZVByZWZpeH0gJHtTSUdOVVB9YCkpXG5cblx0LmNvbW1hbmQoTE9HSU4sICdMb2dpbiB0byBUb29sYmVhbScsXG5cdFx0eWFyZ3MgPT4geWFyZ3MudXNhZ2UoYCR7dXNhZ2VQcmVmaXh9ICR7TE9HSU59YCkpXG5cblx0LmNvbW1hbmQoYCR7SU5JVH0gPHVybD5gLCAnSW5pdGlhbGl6ZSB5b3VyIFRvb2xiZWFtIHByb2plY3QnLFxuXHRcdHlhcmdzID0+IHlhcmdzXG5cdFx0XHQuZGVtYW5kKDEsIDEsICdNaXNzaW5nOiBCYXNlIDx1cmw+IG9mIHlvdXIgQVBJJylcblx0XHRcdC5zdHJpY3QoKVxuXHRcdFx0LnVzYWdlKGAke3VzYWdlUHJlZml4fSAke0lOSVR9IDx1cmw+YClcblx0XHRcdC5leGFtcGxlKGB0YiAke0lOSVR9IGh0dHA6Ly9hcGkuZXhhbXBsZS5jb21gLCAnSW5pdGlsaXplIHlvdXIgRXhhbXBsZSBBUEkgcHJvamVjdCcpXG5cdFx0XHQuZmFpbChmYWlsRm4pKVxuXG5cdC5jb21tYW5kKGAke0FERH0gPHBhdGg+YCwgJ0FkZCBhbiBBUEkgcmVzb3VyY2UgYXMgYSB0b29sJyxcblx0XHR5YXJncyA9PiB5YXJnc1xuXHRcdFx0LmRlbWFuZCgxLCAxLCAnTWlzc2luZzogPHBhdGg+IG9mIHlvdXIgQVBJIHJlc291cmNlJylcblx0XHRcdC5zdHJpY3QoKVxuXHRcdFx0Lm9wdGlvbignc2V0Jywge1xuXHRcdFx0XHR0eXBlOiAnYXJyYXknLFxuXHRcdFx0XHRncm91cDogJ1Rvb2wgT3B0aW9uczonLFxuXHRcdFx0XHRkZXNjOiAnU2V0IDxrZXk+Ojx2YWx1ZT4gb3B0aW9ucyBmb3IgdGhlIHRvb2wnLFxuXHRcdFx0fSlcblx0XHRcdC5vcHRpb24oJ3NldC1wYXJhbScsIHtcblx0XHRcdFx0dHlwZTogJ2FycmF5Jyxcblx0XHRcdFx0Z3JvdXA6ICdQYXJhbWV0ZXIgT3B0aW9uczonLFxuXHRcdFx0XHRkZXNjOiAnU2V0IGEgcGFyYW1ldGVyIGZvciB0aGUgdG9vbCBhbmQgPGtleT46PHZhbHVlPiBvcHRpb25zJyxcblx0XHRcdH0pXG5cdFx0XHQuZXBpbG9ndWUoJ0ZvciBhIGZ1bGwgbGlzdCBvZiB0b29sIGFuZCBwYXJhbWV0ZXIgb3B0aW9ucyByZWZlciB0byBodHRwczovL2dpdGh1Yi5jb20vQW5vbWFseUlubm92YXRpb25zL3Rvb2xiZWFtLWNsaS9ibG9iL21hc3Rlci9SRUFETUUubWQnKVxuXHRcdFx0LnVzYWdlKGAke3VzYWdlUHJlZml4fSAke0FERH0gPHBhdGg+IFtvcHRpb25zXWApXG5cdFx0XHQuZXhhbXBsZShgdGIgJHtBRER9IC91c2Vyc2AsICdBZGQgdGhlIHJlc291cmNlIFxcL3VzZXJzIHRvIHRoZSBzcGVjJylcblx0XHRcdC5leGFtcGxlKGB0YiAke0FERH0gL3VzZXJzL3tpZH0gLS1zZXQtcGFyYW0gbmFtZTppZCBpbjpwYXRoYCwgJ0FkZCBhIEdFVCByZXNvdXJjZSB3aXRoIGEgcGF0aCBwYXJhbWV0ZXInKVxuXHRcdFx0LmV4YW1wbGUoYHRiICR7QUREfSAvdXNlci8zMS9saWtlIC0tc2V0IG9wZXJhdGlvbjpQT1NUYCwgJ0FkZCBhIFBPU1QgcmVzb3VyY2UnKVxuXHRcdFx0LmZhaWwoZmFpbEZuKSlcblxuXHQuY29tbWFuZChQUk9KRUNUUywgJ0xpc3QgYWxsIHlvdXIgcHJvamVjdHMnLFxuXHRcdHlhcmdzID0+IHlhcmdzLnVzYWdlKGAke3VzYWdlUHJlZml4fSAke1BST0pFQ1RTfWApKVxuXG5cdC5jb21tYW5kKExTLCAnTGlzdCBhbGwgeW91ciB0b29scycsXG5cdFx0eWFyZ3MgPT4geWFyZ3MudXNhZ2UoYCR7dXNhZ2VQcmVmaXh9ICR7TFN9YCkpXG5cblx0LmNvbW1hbmQoUFVMTCwgJ1B1bGwgeW91ciBzcGVjIGZyb20gVG9vbGJlYW0nLFxuXHRcdHlhcmdzID0+IHlhcmdzLnVzYWdlKGAke3VzYWdlUHJlZml4fSAke1BVTEx9YCkpXG5cblx0LmNvbW1hbmQoUFVTSCwgJ1B1c2ggeW91ciBzcGVjIHRvIFRvb2xiZWFtJyxcblx0XHR5YXJncyA9PiB5YXJncy51c2FnZShgJHt1c2FnZVByZWZpeH0gJHtQVVNIfWApKVxuXG5cdC5jb21tYW5kKFdIT0FNSSwgJ0luZm8gYWJvdXQgY3VycmVudCBsb2dnZWQgaW4gdXNlcicsXG5cdFx0eWFyZ3MgPT4geWFyZ3MudXNhZ2UoYCR7dXNhZ2VQcmVmaXh9ICR7V0hPQU1JfWApKVxuXG5cdC5jb21tYW5kKExPR09VVCwgJ0xvZ291dCBmcm9tIFRvb2xiZWFtJyxcblx0XHR5YXJncyA9PiB5YXJncy51c2FnZShgJHt1c2FnZVByZWZpeH0gJHtMT0dPVVR9YCkpXG5cblx0LmhlbHAoJ2gnKVxuXHQuYWxpYXMoJ2gnLCAnaGVscCcpXG5cdC5hbGlhcygndicsICd2ZXJzaW9uJylcblx0LnZlcnNpb24ocGFja2FnZUpzb24udmVyc2lvbilcblx0LmVwaWxvZ3VlKCdGb3IgbW9yZSBpbmZvcm1hdGlvbiwgY2hlY2tvdXQgaHR0cHM6Ly90b29sYmVhbS5jb20nKVxuXHQud3JhcChudWxsKVxuXHQuc3RyaWN0KClcblx0LmZhaWwoKG1zZywgZXJyKSA9PiB7XG5cdFx0aWYgKGVycikgdGhyb3cgZXJyO1xuXHRcdHlhcmdzLnNob3dIZWxwKCk7XG5cdFx0cHJvY2Vzcy5leGl0KDEpO1xuXHR9KVxuXHQuYXJndjtcblxuc3dpdGNoIChhcmd2Ll9bMF0pIHtcblx0Y2FzZSBTSUdOVVA6XG5cdFx0cmVxdWlyZUFub255bW91cygoKSA9PiBzaWdudXAoc3RvcmUpKTtcblx0XHRicmVhaztcblx0Y2FzZSBMT0dJTjpcblx0XHRyZXF1aXJlQW5vbnltb3VzKCgpID0+IGxvZ2luKHN0b3JlKSk7XG5cdFx0YnJlYWs7XG5cdGNhc2UgSU5JVDpcblx0XHRyZXF1aXJlTG9naW4oKCkgPT4gaW5pdChzdG9yZSwgYXJndi51cmwpKTtcblx0XHRicmVhaztcblx0Y2FzZSBBREQ6XG5cdFx0Y29uc3Qge3Rvb2xPcHRzLCBwYXJhbU9wdHN9ID0gcGFyc2VBZGRPcHRpb25zKGFyZ3Yuc2V0LCBhcmd2WydzZXQtcGFyYW0nXSk7XG5cdFx0cmVxdWlyZUxvZ2luKCgpID0+IGFkZChzdG9yZSwgYXJndi5wYXRoLCB0b29sT3B0cywgcGFyYW1PcHRzKSk7XG5cdFx0YnJlYWs7XG5cdGNhc2UgUFJPSkVDVFM6XG5cdFx0cmVxdWlyZUxvZ2luKCgpID0+IHByb2plY3RzKHN0b3JlKSk7XG5cdFx0YnJlYWs7XG5cdGNhc2UgTFM6XG5cdFx0cmVxdWlyZUxvZ2luKCgpID0+IGxpc3Qoc3RvcmUpKTtcblx0XHRicmVhaztcblx0Y2FzZSBQVUxMOlxuXHRcdHJlcXVpcmVMb2dpbigoKSA9PiBwdWxsKHN0b3JlKSk7XG5cdFx0YnJlYWs7XG5cdGNhc2UgUFVTSDpcblx0XHRyZXF1aXJlTG9naW4oKCkgPT4gcHVzaChzdG9yZSkpO1xuXHRcdGJyZWFrO1xuXHRjYXNlIExPR09VVDpcblx0XHRsb2dvdXQoc3RvcmUpO1xuXHRjYXNlIFdIT0FNSTpcblx0XHRyZXF1aXJlTG9naW4oKCkgPT4gd2hvYW1pKHN0b3JlKSk7XG5cdFx0YnJlYWs7XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBQcml2YXRlIEZ1bmN0aW9ucyAvL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuZnVuY3Rpb24gcGFyc2VBZGRPcHRpb25zKHRvb2xPcHRTdHIgPSBbXSwgcGFyYW1PcHRTdHIgPSBbXSkge1xuXHRjb25zdCB0b29sT3B0cyA9IHRvb2xPcHRTdHIucmVkdWNlKChhY2MsIG9wdCkgPT4ge1xuXHRcdGNvbnN0IHNwID0gb3B0LnNwbGl0KCc6Jyk7XG5cblx0XHRpZiAoc3AubGVuZ3RoID09PSAyKSB7XG5cdFx0XHRhY2Nbc3BbMF1dID0gc3BbMV07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGFjYztcblx0fSwge30pO1xuXG5cdGNvbnN0IHBhcmFtT3B0cyA9IHBhcmFtT3B0U3RyLnJlZHVjZSgoYWNjLCBvcHQsIGksIG9wdHMpID0+IHtcblx0XHRjb25zdCBzcCA9IG9wdC5zcGxpdCgnOicpO1xuXG5cdFx0aWYgKHNwLmxlbmd0aCAhPT0gMikge1xuXHRcdFx0cmV0dXJuIGFjYztcblx0XHR9XG5cblx0XHRjb25zdCBba2V5LCB2YWx1ZV0gPSBzcDtcblxuXHRcdC8vIFN0YXJ0aW5nIGEgbmV3IHBhcmFtXG5cdFx0aWYgKGtleS50b0xvd2VyQ2FzZSgpID09PSAnbmFtZScpIHtcblx0XHRcdC8vIEZpbmlzaCB3aGF0IHdhcyBiZWluZyBwcm9jZXNzZWRcblx0XHRcdGlmIChhY2MuY3VycmVudCAhPT0gbnVsbCkge1xuXHRcdFx0XHRhY2MubGlzdC5wdXNoKGFjYy5jdXJyZW50KTtcblx0XHRcdH1cblxuXHRcdFx0YWNjLmN1cnJlbnQgPSB7fTtcblx0XHR9XG5cblx0XHRhY2MuY3VycmVudFtrZXldID0gdmFsdWU7XG5cblx0XHQvLyBJZiBlbmQgb2YgbGlzdCBmaW5pc2ggcHJvY2Vzc2luZ1xuXHRcdGlmIChpICsgMSA9PT0gb3B0cy5sZW5ndGgpIHtcblx0XHRcdGFjYy5saXN0LnB1c2goYWNjLmN1cnJlbnQpO1xuXHRcdH1cblxuXHRcdHJldHVybiBhY2M7XG5cdH0sIHtsaXN0OiBbXSwgY3VycmVudDogbnVsbH0pLmxpc3Q7XG5cblx0cmV0dXJuIHtcblx0XHR0b29sT3B0cyxcblx0XHRwYXJhbU9wdHNcblx0fTtcbn1cbiJdfQ==