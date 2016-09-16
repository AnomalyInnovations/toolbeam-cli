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
}).command(LS, 'List all your tools', function (yargs) {
	return yargs.usage(usagePrefix + ' ' + LS);
}).command(PULL, 'Pull your spec from Toolbeam', function (yargs) {
	return yargs.usage(usagePrefix + ' ' + PULL);
}).command(PUSH + ' <file>', 'Push your spec to Toolbeam', function (yargs) {
	return yargs.demand(1, 1, 'Missing: <file> that needs to be pushed').strict().usage(usagePrefix + ' ' + PUSH + ' <file>').example('tb ' + PUSH + ' spec.json', 'Push spec.json to Toolbeam').fail(failFn);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiaW5zdGFsbCIsInByb2Nlc3MiLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJzdGFjayIsImV4aXQiLCJTSUdOVVAiLCJMT0dJTiIsIklOSVQiLCJBREQiLCJMUyIsIlBVTEwiLCJQVVNIIiwiTE9HT1VUIiwiV0hPQU1JIiwidXNhZ2VQcmVmaXgiLCJyZXF1aXJlTG9naW4iLCJyZXF1aXJlQW5vbnltb3VzIiwiZmFpbEZuIiwicmVkIiwibXNnIiwiYXJndiIsInVzYWdlIiwiZGVtYW5kIiwiY29tbWFuZCIsInlhcmdzIiwic3RyaWN0IiwiZXhhbXBsZSIsImZhaWwiLCJvcHRpb24iLCJ0eXBlIiwiZ3JvdXAiLCJkZXNjIiwiZXBpbG9ndWUiLCJoZWxwIiwiYWxpYXMiLCJ2ZXJzaW9uIiwid3JhcCIsInNob3dIZWxwIiwiXyIsInVybCIsInBhcnNlQWRkT3B0aW9ucyIsInNldCIsInRvb2xPcHRzIiwicGFyYW1PcHRzIiwicGF0aCIsImZpbGUiLCJ0b29sT3B0U3RyIiwicGFyYW1PcHRTdHIiLCJyZWR1Y2UiLCJhY2MiLCJvcHQiLCJzcCIsInNwbGl0IiwibGVuZ3RoIiwiaSIsIm9wdHMiLCJrZXkiLCJ2YWx1ZSIsInRvTG93ZXJDYXNlIiwiY3VycmVudCIsImxpc3QiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFXQTs7OztBQUVBOztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQWxCQTtBQUNBQSxRQUFRLG9CQUFSLEVBQThCQyxPQUE5Qjs7QUFFQTtBQUNBQyxRQUFRQyxFQUFSLENBQVcsb0JBQVgsRUFBaUMsZUFBTztBQUNwQ0MsU0FBUUMsR0FBUixDQUFZQyxJQUFJQyxLQUFoQjtBQUNBTCxTQUFRTSxJQUFSLENBQWEsQ0FBYjtBQUNILENBSEQ7O0FBMkJBO0FBQ0EsSUFBTUMsU0FBUyxRQUFmO0FBQ0EsSUFBTUMsUUFBUSxPQUFk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OztBQUwwRCx5Q0FPdENFLEVBUHNDOztBQUFBLE1BT3BESyxHQVBvRDtBQUFBLE1BTy9DQyxLQVArQzs7QUFTM0Q7O0FBQ0EsTUFBSUQsSUFBSUUsV0FBSixPQUFzQixNQUExQixFQUFrQztBQUNqQztBQUNBLE9BQUlULElBQUlVLE9BQUosS0FBZ0IsSUFBcEIsRUFBMEI7QUFDekJWLFFBQUlXLElBQUosQ0FBU0MsSUFBVCxDQUFjWixJQUFJVSxPQUFsQjtBQUNBOztBQUVEVixPQUFJVSxPQUFKLEdBQWMsRUFBZDtBQUNBOztBQUVEVixNQUFJVSxPQUFKLENBQVlILEdBQVosSUFBbUJDLEtBQW5COztBQUVBO0FBQ0EsTUFBSUgsSUFBSSxDQUFKLEtBQVVDLEtBQUtGLE1BQW5CLEVBQTJCO0FBQzFCSixPQUFJVyxJQUFKLENBQVNDLElBQVQsQ0FBY1osSUFBSVUsT0FBbEI7QUFDQTs7QUFFRCxTQUFPVixHQUFQO0FBQ0EsRUEzQmlCLEVBMkJmLEVBQUNXLE1BQU0sRUFBUCxFQUFXRCxTQUFTLElBQXBCLEVBM0JlLEVBMkJZQyxJQTNCOUI7O0FBNkJBLFFBQU87QUFDTmxCLG9CQURNO0FBRU5DO0FBRk0sRUFBUDtBQUlBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi8vIFN1cHBvcnQgc291cmNlIG1hcCBvdXRwdXRzXG5yZXF1aXJlKCdzb3VyY2UtbWFwLXN1cHBvcnQnKS5pbnN0YWxsKCk7XG5cbi8vIFByaW50IGFsbCB1bmhhbmRsZWQgZXJyb3JzXG5wcm9jZXNzLm9uKCd1bmhhbmRsZWRSZWplY3Rpb24nLCBlcnIgPT4ge1xuICAgIGNvbnNvbGUubG9nKGVyci5zdGFjayk7XG4gICAgcHJvY2Vzcy5leGl0KDEpO1xufSk7XG5cbmltcG9ydCBwYWNrYWdlSnNvbiBmcm9tICcuLi9wYWNrYWdlLmpzb24nO1xuXG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmltcG9ydCBjaGFsayBmcm9tICdjaGFsayc7XG5pbXBvcnQgeWFyZ3MgZnJvbSAneWFyZ3MnO1xuXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5pbXBvcnQgX3JlcXVpcmVMb2dpbiBmcm9tICcuL2xpYnMvcmVxdWlyZS1sb2dpbic7XG5pbXBvcnQgX3JlcXVpcmVBbm9ueW1vdXMgZnJvbSAnLi9saWJzL3JlcXVpcmUtYW5vbnltb3VzJztcbmltcG9ydCB7XG5cdGFkZCxcblx0aW5pdCxcblx0bGlzdCxcblx0bG9naW4sXG5cdGxvZ291dCxcblx0cHVsbCxcblx0cHVzaCxcblx0c2lnbnVwLFxuXHR3aG9hbWksXG59IGZyb20gJy4vY29tbWFuZHMnO1xuXG5cbi8vIENvbW1hbmQgbGlzdFxuY29uc3QgU0lHTlVQID0gJ3NpZ251cCc7XG5jb25zdCBMT0dJTiA9ICdsb2dpbic7XG5jb25zdCBJTklUID0gJ2luaXQnO1xuY29uc3QgQUREID0gJ2FkZCc7XG5jb25zdCBMUyA9ICdscyc7XG5jb25zdCBQVUxMID0gJ3B1bGwnO1xuY29uc3QgUFVTSCA9ICdwdXNoJztcbmNvbnN0IExPR09VVCA9ICdsb2dvdXQnO1xuY29uc3QgV0hPQU1JID0gJ3dob2FtaSc7XG5cbmNvbnN0IHVzYWdlUHJlZml4ID0gJ1VzYWdlOiB0Yic7XG5jb25zdCByZXF1aXJlTG9naW4gPSBfcmVxdWlyZUxvZ2luKHN0b3JlKTtcbmNvbnN0IHJlcXVpcmVBbm9ueW1vdXMgPSBfcmVxdWlyZUFub255bW91cyhzdG9yZSk7XG5cbmNvbnN0IGZhaWxGbiA9IG1zZyA9PiBjb25zb2xlLmxvZyhjaGFsay5yZWQoYCR7bXNnfVxcbmApKTtcblxuY29uc3QgYXJndiA9IHlhcmdzXG5cdC51c2FnZShgJHt1c2FnZVByZWZpeH0gPGNvbW1hbmQ+YClcblx0LmRlbWFuZCgxLCAxKVxuXG5cdC5jb21tYW5kKFNJR05VUCwgJ1NpZ24gdXAgZm9yIFRvb2xiZWFtJyxcblx0XHR5YXJncyA9PiB5YXJncy51c2FnZShgJHt1c2FnZVByZWZpeH0gJHtTSUdOVVB9YCkpXG5cblx0LmNvbW1hbmQoTE9HSU4sICdMb2dpbiB0byBUb29sYmVhbScsXG5cdFx0eWFyZ3MgPT4geWFyZ3MudXNhZ2UoYCR7dXNhZ2VQcmVmaXh9ICR7TE9HSU59YCkpXG5cblx0LmNvbW1hbmQoYCR7SU5JVH0gPHVybD5gLCAnSW5pdGlhbGl6ZSB5b3VyIFRvb2xiZWFtIHByb2plY3QnLFxuXHRcdHlhcmdzID0+IHlhcmdzXG5cdFx0XHQuZGVtYW5kKDEsIDEsICdNaXNzaW5nOiBCYXNlIDx1cmw+IG9mIHlvdXIgQVBJJylcblx0XHRcdC5zdHJpY3QoKVxuXHRcdFx0LnVzYWdlKGAke3VzYWdlUHJlZml4fSAke0lOSVR9IDx1cmw+YClcblx0XHRcdC5leGFtcGxlKGB0YiAke0lOSVR9IGh0dHA6Ly9hcGkuZXhhbXBsZS5jb21gLCAnSW5pdGlsaXplIHlvdXIgRXhhbXBsZSBBUEkgcHJvamVjdCcpXG5cdFx0XHQuZmFpbChmYWlsRm4pKVxuXG5cdC5jb21tYW5kKGAke0FERH0gPHBhdGg+YCwgJ0FkZCBhbiBBUEkgcmVzb3VyY2UgYXMgYSB0b29sJyxcblx0XHR5YXJncyA9PiB5YXJnc1xuXHRcdFx0LmRlbWFuZCgxLCAxLCAnTWlzc2luZzogPHBhdGg+IG9mIHlvdXIgQVBJIHJlc291cmNlJylcblx0XHRcdC5zdHJpY3QoKVxuXHRcdFx0Lm9wdGlvbignc2V0Jywge1xuXHRcdFx0XHR0eXBlOiAnYXJyYXknLFxuXHRcdFx0XHRncm91cDogJ1Rvb2wgT3B0aW9uczonLFxuXHRcdFx0XHRkZXNjOiAnU2V0IDxrZXk+Ojx2YWx1ZT4gb3B0aW9ucyBmb3IgdGhlIHRvb2wnLFxuXHRcdFx0fSlcblx0XHRcdC5vcHRpb24oJ3NldC1wYXJhbScsIHtcblx0XHRcdFx0dHlwZTogJ2FycmF5Jyxcblx0XHRcdFx0Z3JvdXA6ICdQYXJhbWV0ZXIgT3B0aW9uczonLFxuXHRcdFx0XHRkZXNjOiAnU2V0IGEgcGFyYW1ldGVyIGZvciB0aGUgdG9vbCBhbmQgPGtleT46PHZhbHVlPiBvcHRpb25zJyxcblx0XHRcdH0pXG5cdFx0XHQuZXBpbG9ndWUoJ0ZvciBhIGZ1bGwgbGlzdCBvZiB0b29sIGFuZCBwYXJhbWV0ZXIgb3B0aW9ucyByZWZlciB0byBodHRwczovL2dpdGh1Yi5jb20vQW5vbWFseUlubm92YXRpb25zL3Rvb2xiZWFtLWNsaS9ibG9iL21hc3Rlci9SRUFETUUubWQnKVxuXHRcdFx0LnVzYWdlKGAke3VzYWdlUHJlZml4fSAke0FERH0gPHBhdGg+IFtvcHRpb25zXWApXG5cdFx0XHQuZXhhbXBsZShgdGIgJHtBRER9IC91c2Vyc2AsICdBZGQgdGhlIHJlc291cmNlIFxcL3VzZXJzIHRvIHRoZSBzcGVjJylcblx0XHRcdC5leGFtcGxlKGB0YiAke0FERH0gL3VzZXJzL3tpZH0gLS1zZXQtcGFyYW0gbmFtZTppZCBpbjpwYXRoYCwgJ0FkZCBhIEdFVCByZXNvdXJjZSB3aXRoIGEgcGF0aCBwYXJhbWV0ZXInKVxuXHRcdFx0LmV4YW1wbGUoYHRiICR7QUREfSAvdXNlci8zMS9saWtlIC0tc2V0IG9wZXJhdGlvbjpQT1NUYCwgJ0FkZCBhIFBPU1QgcmVzb3VyY2UnKVxuXHRcdFx0LmZhaWwoZmFpbEZuKSlcblxuXHQuY29tbWFuZChMUywgJ0xpc3QgYWxsIHlvdXIgdG9vbHMnLFxuXHRcdHlhcmdzID0+IHlhcmdzLnVzYWdlKGAke3VzYWdlUHJlZml4fSAke0xTfWApKVxuXG5cdC5jb21tYW5kKFBVTEwsICdQdWxsIHlvdXIgc3BlYyBmcm9tIFRvb2xiZWFtJyxcblx0XHR5YXJncyA9PiB5YXJncy51c2FnZShgJHt1c2FnZVByZWZpeH0gJHtQVUxMfWApKVxuXG5cdC5jb21tYW5kKGAke1BVU0h9IDxmaWxlPmAsICdQdXNoIHlvdXIgc3BlYyB0byBUb29sYmVhbScsXG5cdFx0eWFyZ3MgPT4geWFyZ3Ncblx0XHRcdC5kZW1hbmQoMSwgMSwgJ01pc3Npbmc6IDxmaWxlPiB0aGF0IG5lZWRzIHRvIGJlIHB1c2hlZCcpXG5cdFx0XHQuc3RyaWN0KClcblx0XHRcdC51c2FnZShgJHt1c2FnZVByZWZpeH0gJHtQVVNIfSA8ZmlsZT5gKVxuXHRcdFx0LmV4YW1wbGUoYHRiICR7UFVTSH0gc3BlYy5qc29uYCwgJ1B1c2ggc3BlYy5qc29uIHRvIFRvb2xiZWFtJylcblx0XHRcdC5mYWlsKGZhaWxGbikpXG5cblx0LmNvbW1hbmQoV0hPQU1JLCAnSW5mbyBhYm91dCBjdXJyZW50IGxvZ2dlZCBpbiB1c2VyJyxcblx0XHR5YXJncyA9PiB5YXJncy51c2FnZShgJHt1c2FnZVByZWZpeH0gJHtXSE9BTUl9YCkpXG5cblx0LmNvbW1hbmQoTE9HT1VULCAnTG9nb3V0IGZyb20gVG9vbGJlYW0nLFxuXHRcdHlhcmdzID0+IHlhcmdzLnVzYWdlKGAke3VzYWdlUHJlZml4fSAke0xPR09VVH1gKSlcblxuXHQuaGVscCgnaCcpXG5cdC5hbGlhcygnaCcsICdoZWxwJylcblx0LmFsaWFzKCd2JywgJ3ZlcnNpb24nKVxuXHQudmVyc2lvbihwYWNrYWdlSnNvbi52ZXJzaW9uKVxuXHQuZXBpbG9ndWUoJ0ZvciBtb3JlIGluZm9ybWF0aW9uLCBjaGVja291dCBodHRwczovL3Rvb2xiZWFtLmNvbScpXG5cdC53cmFwKG51bGwpXG5cdC5zdHJpY3QoKVxuXHQuZmFpbCgobXNnLCBlcnIpID0+IHtcblx0XHRpZiAoZXJyKSB0aHJvdyBlcnI7XG5cdFx0eWFyZ3Muc2hvd0hlbHAoKTtcblx0XHRwcm9jZXNzLmV4aXQoMSk7XG5cdH0pXG5cdC5hcmd2O1xuXG5zd2l0Y2ggKGFyZ3YuX1swXSkge1xuXHRjYXNlIFNJR05VUDpcblx0XHRyZXF1aXJlQW5vbnltb3VzKCgpID0+IHNpZ251cChzdG9yZSkpO1xuXHRcdGJyZWFrO1xuXHRjYXNlIExPR0lOOlxuXHRcdHJlcXVpcmVBbm9ueW1vdXMoKCkgPT4gbG9naW4oc3RvcmUpKTtcblx0XHRicmVhaztcblx0Y2FzZSBJTklUOlxuXHRcdHJlcXVpcmVMb2dpbigoKSA9PiBpbml0KHN0b3JlLCBhcmd2LnVybCkpO1xuXHRcdGJyZWFrO1xuXHRjYXNlIEFERDpcblx0XHRjb25zdCB7dG9vbE9wdHMsIHBhcmFtT3B0c30gPSBwYXJzZUFkZE9wdGlvbnMoYXJndi5zZXQsIGFyZ3ZbJ3NldC1wYXJhbSddKTtcblx0XHRyZXF1aXJlTG9naW4oKCkgPT4gYWRkKHN0b3JlLCBhcmd2LnBhdGgsIHRvb2xPcHRzLCBwYXJhbU9wdHMpKTtcblx0XHRicmVhaztcblx0Y2FzZSBMUzpcblx0XHRyZXF1aXJlTG9naW4oKCkgPT4gbGlzdChzdG9yZSkpO1xuXHRcdGJyZWFrO1xuXHRjYXNlIFBVTEw6XG5cdFx0cmVxdWlyZUxvZ2luKCgpID0+IHB1bGwoc3RvcmUpKTtcblx0XHRicmVhaztcblx0Y2FzZSBQVVNIOlxuXHRcdHJlcXVpcmVMb2dpbigoKSA9PiBwdXNoKHN0b3JlLCBhcmd2LmZpbGUpKTtcblx0XHRicmVhaztcblx0Y2FzZSBMT0dPVVQ6XG5cdFx0bG9nb3V0KHN0b3JlKTtcblx0Y2FzZSBXSE9BTUk6XG5cdFx0cmVxdWlyZUxvZ2luKCgpID0+IHdob2FtaShzdG9yZSkpO1xuXHRcdGJyZWFrO1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gUHJpdmF0ZSBGdW5jdGlvbnMgLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmZ1bmN0aW9uIHBhcnNlQWRkT3B0aW9ucyh0b29sT3B0U3RyID0gW10sIHBhcmFtT3B0U3RyID0gW10pIHtcblx0Y29uc3QgdG9vbE9wdHMgPSB0b29sT3B0U3RyLnJlZHVjZSgoYWNjLCBvcHQpID0+IHtcblx0XHRjb25zdCBzcCA9IG9wdC5zcGxpdCgnOicpO1xuXG5cdFx0aWYgKHNwLmxlbmd0aCA9PT0gMikge1xuXHRcdFx0YWNjW3NwWzBdXSA9IHNwWzFdO1xuXHRcdH1cblxuXHRcdHJldHVybiBhY2M7XG5cdH0sIHt9KTtcblxuXHRjb25zdCBwYXJhbU9wdHMgPSBwYXJhbU9wdFN0ci5yZWR1Y2UoKGFjYywgb3B0LCBpLCBvcHRzKSA9PiB7XG5cdFx0Y29uc3Qgc3AgPSBvcHQuc3BsaXQoJzonKTtcblxuXHRcdGlmIChzcC5sZW5ndGggIT09IDIpIHtcblx0XHRcdHJldHVybiBhY2M7XG5cdFx0fVxuXG5cdFx0Y29uc3QgW2tleSwgdmFsdWVdID0gc3A7XG5cblx0XHQvLyBTdGFydGluZyBhIG5ldyBwYXJhbVxuXHRcdGlmIChrZXkudG9Mb3dlckNhc2UoKSA9PT0gJ25hbWUnKSB7XG5cdFx0XHQvLyBGaW5pc2ggd2hhdCB3YXMgYmVpbmcgcHJvY2Vzc2VkXG5cdFx0XHRpZiAoYWNjLmN1cnJlbnQgIT09IG51bGwpIHtcblx0XHRcdFx0YWNjLmxpc3QucHVzaChhY2MuY3VycmVudCk7XG5cdFx0XHR9XG5cblx0XHRcdGFjYy5jdXJyZW50ID0ge307XG5cdFx0fVxuXG5cdFx0YWNjLmN1cnJlbnRba2V5XSA9IHZhbHVlO1xuXG5cdFx0Ly8gSWYgZW5kIG9mIGxpc3QgZmluaXNoIHByb2Nlc3Npbmdcblx0XHRpZiAoaSArIDEgPT09IG9wdHMubGVuZ3RoKSB7XG5cdFx0XHRhY2MubGlzdC5wdXNoKGFjYy5jdXJyZW50KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gYWNjO1xuXHR9LCB7bGlzdDogW10sIGN1cnJlbnQ6IG51bGx9KS5saXN0O1xuXG5cdHJldHVybiB7XG5cdFx0dG9vbE9wdHMsXG5cdFx0cGFyYW1PcHRzXG5cdH07XG59XG4iXX0=