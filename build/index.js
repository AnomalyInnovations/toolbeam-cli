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
		//requireLogin(() => add(store, argv.path, toolOpts, paramOpts));

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiaW5zdGFsbCIsInByb2Nlc3MiLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJzdGFjayIsImV4aXQiLCJTSUdOVVAiLCJMT0dJTiIsIklOSVQiLCJBREQiLCJMUyIsIlBVTEwiLCJQVVNIIiwiTE9HT1VUIiwiV0hPQU1JIiwidXNhZ2VQcmVmaXgiLCJyZXF1aXJlTG9naW4iLCJyZXF1aXJlQW5vbnltb3VzIiwiZmFpbEZuIiwicmVkIiwibXNnIiwiYXJndiIsInVzYWdlIiwiZGVtYW5kIiwiY29tbWFuZCIsInlhcmdzIiwic3RyaWN0IiwiZXhhbXBsZSIsImZhaWwiLCJvcHRpb24iLCJ0eXBlIiwiZ3JvdXAiLCJkZXNjIiwiZXBpbG9ndWUiLCJoZWxwIiwiYWxpYXMiLCJ2ZXJzaW9uIiwid3JhcCIsInNob3dIZWxwIiwiXyIsInVybCIsInBhcnNlQWRkT3B0aW9ucyIsInNldCIsInRvb2xPcHRzIiwicGFyYW1PcHRzIiwiZmlsZSIsInRvb2xPcHRTdHIiLCJwYXJhbU9wdFN0ciIsInJlZHVjZSIsImFjYyIsIm9wdCIsInNwIiwic3BsaXQiLCJsZW5ndGgiLCJpIiwib3B0cyIsImtleSIsInZhbHVlIiwidG9Mb3dlckNhc2UiLCJjdXJyZW50IiwibGlzdCIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7OztBQVdBOzs7O0FBRUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBbEJBO0FBQ0FBLFFBQVEsb0JBQVIsRUFBOEJDLE9BQTlCOztBQUVBO0FBQ0FDLFFBQVFDLEVBQVIsQ0FBVyxvQkFBWCxFQUFpQyxlQUFPO0FBQ3BDQyxTQUFRQyxHQUFSLENBQVlDLElBQUlDLEtBQWhCO0FBQ0FMLFNBQVFNLElBQVIsQ0FBYSxDQUFiO0FBQ0gsQ0FIRDs7QUEyQkE7QUFDQSxJQUFNQyxTQUFTLFFBQWY7QUFDQSxJQUFNQyxRQUFRLE9BQWQ7QUFDQSxJ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QixNQUExQixFQUFrQztBQUNqQztBQUNBLE9BQUlULElBQUlVLE9BQUosS0FBZ0IsSUFBcEIsRUFBMEI7QUFDekJWLFFBQUlXLElBQUosQ0FBU0MsSUFBVCxDQUFjWixJQUFJVSxPQUFsQjtBQUNBOztBQUVEVixPQUFJVSxPQUFKLEdBQWMsRUFBZDtBQUNBOztBQUVEVixNQUFJVSxPQUFKLENBQVlILEdBQVosSUFBbUJDLEtBQW5COztBQUVBO0FBQ0EsTUFBSUgsSUFBSSxDQUFKLEtBQVVDLEtBQUtGLE1BQW5CLEVBQTJCO0FBQzFCSixPQUFJVyxJQUFKLENBQVNDLElBQVQsQ0FBY1osSUFBSVUsT0FBbEI7QUFDQTs7QUFFRCxTQUFPVixHQUFQO0FBQ0EsRUEzQmlCLEVBMkJmLEVBQUNXLE1BQU0sRUFBUCxFQUFXRCxTQUFTLElBQXBCLEVBM0JlLEVBMkJZQyxJQTNCOUI7O0FBNkJBLFFBQU87QUFDTmpCLG9CQURNO0FBRU5DO0FBRk0sRUFBUDtBQUlBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi8vIFN1cHBvcnQgc291cmNlIG1hcCBvdXRwdXRzXG5yZXF1aXJlKCdzb3VyY2UtbWFwLXN1cHBvcnQnKS5pbnN0YWxsKCk7XG5cbi8vIFByaW50IGFsbCB1bmhhbmRsZWQgZXJyb3JzXG5wcm9jZXNzLm9uKCd1bmhhbmRsZWRSZWplY3Rpb24nLCBlcnIgPT4ge1xuICAgIGNvbnNvbGUubG9nKGVyci5zdGFjayk7XG4gICAgcHJvY2Vzcy5leGl0KDEpO1xufSk7XG5cbmltcG9ydCBwYWNrYWdlSnNvbiBmcm9tICcuLi9wYWNrYWdlLmpzb24nO1xuXG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmltcG9ydCBjaGFsayBmcm9tICdjaGFsayc7XG5pbXBvcnQgeWFyZ3MgZnJvbSAneWFyZ3MnO1xuXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5pbXBvcnQgX3JlcXVpcmVMb2dpbiBmcm9tICcuL2xpYnMvcmVxdWlyZS1sb2dpbic7XG5pbXBvcnQgX3JlcXVpcmVBbm9ueW1vdXMgZnJvbSAnLi9saWJzL3JlcXVpcmUtYW5vbnltb3VzJztcbmltcG9ydCB7XG5cdGFkZCxcblx0aW5pdCxcblx0bGlzdCxcblx0bG9naW4sXG5cdGxvZ291dCxcblx0cHVsbCxcblx0cHVzaCxcblx0c2lnbnVwLFxuXHR3aG9hbWksXG59IGZyb20gJy4vY29tbWFuZHMnO1xuXG5cbi8vIENvbW1hbmQgbGlzdFxuY29uc3QgU0lHTlVQID0gJ3NpZ251cCc7XG5jb25zdCBMT0dJTiA9ICdsb2dpbic7XG5jb25zdCBJTklUID0gJ2luaXQnO1xuY29uc3QgQUREID0gJ2FkZCc7XG5jb25zdCBMUyA9ICdscyc7XG5jb25zdCBQVUxMID0gJ3B1bGwnO1xuY29uc3QgUFVTSCA9ICdwdXNoJztcbmNvbnN0IExPR09VVCA9ICdsb2dvdXQnO1xuY29uc3QgV0hPQU1JID0gJ3dob2FtaSc7XG5cbmNvbnN0IHVzYWdlUHJlZml4ID0gJ1VzYWdlOiB0Yic7XG5jb25zdCByZXF1aXJlTG9naW4gPSBfcmVxdWlyZUxvZ2luKHN0b3JlKTtcbmNvbnN0IHJlcXVpcmVBbm9ueW1vdXMgPSBfcmVxdWlyZUFub255bW91cyhzdG9yZSk7XG5cbmNvbnN0IGZhaWxGbiA9IG1zZyA9PiBjb25zb2xlLmxvZyhjaGFsay5yZWQoYCR7bXNnfVxcbmApKTtcblxuY29uc3QgYXJndiA9IHlhcmdzXG5cdC51c2FnZShgJHt1c2FnZVByZWZpeH0gPGNvbW1hbmQ+YClcblx0LmRlbWFuZCgxLCAxKVxuXG5cdC5jb21tYW5kKFNJR05VUCwgJ1NpZ24gdXAgZm9yIFRvb2xiZWFtJyxcblx0XHR5YXJncyA9PiB5YXJncy51c2FnZShgJHt1c2FnZVByZWZpeH0gJHtTSUdOVVB9YCkpXG5cblx0LmNvbW1hbmQoTE9HSU4sICdMb2dpbiB0byBUb29sYmVhbScsXG5cdFx0eWFyZ3MgPT4geWFyZ3MudXNhZ2UoYCR7dXNhZ2VQcmVmaXh9ICR7TE9HSU59YCkpXG5cblx0LmNvbW1hbmQoYCR7SU5JVH0gPHVybD5gLCAnSW5pdGlhbGl6ZSB5b3VyIFRvb2xiZWFtIHByb2plY3QnLFxuXHRcdHlhcmdzID0+IHlhcmdzXG5cdFx0XHQuZGVtYW5kKDEsIDEsICdNaXNzaW5nOiBCYXNlIDx1cmw+IG9mIHlvdXIgQVBJJylcblx0XHRcdC5zdHJpY3QoKVxuXHRcdFx0LnVzYWdlKGAke3VzYWdlUHJlZml4fSAke0lOSVR9IDx1cmw+YClcblx0XHRcdC5leGFtcGxlKGB0YiAke0lOSVR9IGh0dHA6Ly9hcGkuZXhhbXBsZS5jb21gLCAnSW5pdGlsaXplIHlvdXIgRXhhbXBsZSBBUEkgcHJvamVjdCcpXG5cdFx0XHQuZmFpbChmYWlsRm4pKVxuXG5cdC5jb21tYW5kKGAke0FERH0gPHBhdGg+YCwgJ0FkZCBhbiBBUEkgcmVzb3VyY2UgYXMgYSB0b29sJyxcblx0XHR5YXJncyA9PiB5YXJnc1xuXHRcdFx0LmRlbWFuZCgxLCAxLCAnTWlzc2luZzogPHBhdGg+IG9mIHlvdXIgQVBJIHJlc291cmNlJylcblx0XHRcdC5zdHJpY3QoKVxuXHRcdFx0Lm9wdGlvbignc2V0Jywge1xuXHRcdFx0XHR0eXBlOiAnYXJyYXknLFxuXHRcdFx0XHRncm91cDogJ1Rvb2wgT3B0aW9uczonLFxuXHRcdFx0XHRkZXNjOiAnU2V0IDxrZXk+Ojx2YWx1ZT4gb3B0aW9ucyBmb3IgdGhlIHRvb2wnLFxuXHRcdFx0fSlcblx0XHRcdC5vcHRpb24oJ3NldC1wYXJhbScsIHtcblx0XHRcdFx0dHlwZTogJ2FycmF5Jyxcblx0XHRcdFx0Z3JvdXA6ICdQYXJhbWV0ZXIgT3B0aW9uczonLFxuXHRcdFx0XHRkZXNjOiAnU2V0IGEgcGFyYW1ldGVyIGZvciB0aGUgdG9vbCBhbmQgPGtleT46PHZhbHVlPiBvcHRpb25zJyxcblx0XHRcdH0pXG5cdFx0XHQuZXBpbG9ndWUoJ0ZvciBhIGZ1bGwgbGlzdCBvZiB0b29sIGFuZCBwYXJhbWV0ZXIgb3B0aW9ucyByZWZlciB0byBodHRwczovL2dpdGh1Yi5jb20vQW5vbWFseUlubm92YXRpb25zL3Rvb2xiZWFtLWNsaS9ibG9iL21hc3Rlci9SRUFETUUubWQnKVxuXHRcdFx0LnVzYWdlKGAke3VzYWdlUHJlZml4fSAke0FERH0gPHBhdGg+IFtvcHRpb25zXWApXG5cdFx0XHQuZXhhbXBsZShgdGIgJHtBRER9IC91c2Vyc2AsICdBZGQgdGhlIHJlc291cmNlIFxcL3VzZXJzIHRvIHRoZSBzcGVjJylcblx0XHRcdC5leGFtcGxlKGB0YiAke0FERH0gL3VzZXJzL3tpZH0gLS1zZXQtcGFyYW0gbmFtZTppZCBpbjpwYXRoYCwgJ0FkZCBhIEdFVCByZXNvdXJjZSB3aXRoIGEgcGF0aCBwYXJhbWV0ZXInKVxuXHRcdFx0LmV4YW1wbGUoYHRiICR7QUREfSAvdXNlci8zMS9saWtlIC0tc2V0IG9wZXJhdGlvbjpQT1NUYCwgJ0FkZCBhIFBPU1QgcmVzb3VyY2UnKVxuXHRcdFx0LmZhaWwoZmFpbEZuKSlcblxuXHQuY29tbWFuZChMUywgJ0xpc3QgYWxsIHlvdXIgdG9vbHMnLFxuXHRcdHlhcmdzID0+IHlhcmdzLnVzYWdlKGAke3VzYWdlUHJlZml4fSAke0xTfWApKVxuXG5cdC5jb21tYW5kKFBVTEwsICdQdWxsIHlvdXIgc3BlYyBmcm9tIFRvb2xiZWFtJyxcblx0XHR5YXJncyA9PiB5YXJncy51c2FnZShgJHt1c2FnZVByZWZpeH0gJHtQVUxMfWApKVxuXG5cdC5jb21tYW5kKGAke1BVU0h9IDxmaWxlPmAsICdQdXNoIHlvdXIgc3BlYyB0byBUb29sYmVhbScsXG5cdFx0eWFyZ3MgPT4geWFyZ3Ncblx0XHRcdC5kZW1hbmQoMSwgMSwgJ01pc3Npbmc6IDxmaWxlPiB0aGF0IG5lZWRzIHRvIGJlIHB1c2hlZCcpXG5cdFx0XHQuc3RyaWN0KClcblx0XHRcdC51c2FnZShgJHt1c2FnZVByZWZpeH0gJHtQVVNIfSA8ZmlsZT5gKVxuXHRcdFx0LmV4YW1wbGUoYHRiICR7UFVTSH0gc3BlYy5qc29uYCwgJ1B1c2ggc3BlYy5qc29uIHRvIFRvb2xiZWFtJylcblx0XHRcdC5mYWlsKGZhaWxGbikpXG5cblx0LmNvbW1hbmQoV0hPQU1JLCAnSW5mbyBhYm91dCBjdXJyZW50IGxvZ2dlZCBpbiB1c2VyJyxcblx0XHR5YXJncyA9PiB5YXJncy51c2FnZShgJHt1c2FnZVByZWZpeH0gJHtXSE9BTUl9YCkpXG5cblx0LmNvbW1hbmQoTE9HT1VULCAnTG9nb3V0IGZyb20gVG9vbGJlYW0nLFxuXHRcdHlhcmdzID0+IHlhcmdzLnVzYWdlKGAke3VzYWdlUHJlZml4fSAke0xPR09VVH1gKSlcblxuXHQuaGVscCgnaCcpXG5cdC5hbGlhcygnaCcsICdoZWxwJylcblx0LmFsaWFzKCd2JywgJ3ZlcnNpb24nKVxuXHQudmVyc2lvbihwYWNrYWdlSnNvbi52ZXJzaW9uKVxuXHQuZXBpbG9ndWUoJ0ZvciBtb3JlIGluZm9ybWF0aW9uLCBjaGVja291dCBodHRwczovL3Rvb2xiZWFtLmNvbScpXG5cdC53cmFwKG51bGwpXG5cdC5zdHJpY3QoKVxuXHQuZmFpbCgobXNnLCBlcnIpID0+IHtcblx0XHRpZiAoZXJyKSB0aHJvdyBlcnI7XG5cdFx0eWFyZ3Muc2hvd0hlbHAoKTtcblx0XHRwcm9jZXNzLmV4aXQoMSk7XG5cdH0pXG5cdC5hcmd2O1xuXG5zd2l0Y2ggKGFyZ3YuX1swXSkge1xuXHRjYXNlIFNJR05VUDpcblx0XHRyZXF1aXJlQW5vbnltb3VzKCgpID0+IHNpZ251cChzdG9yZSkpO1xuXHRcdGJyZWFrO1xuXHRjYXNlIExPR0lOOlxuXHRcdHJlcXVpcmVBbm9ueW1vdXMoKCkgPT4gbG9naW4oc3RvcmUpKTtcblx0XHRicmVhaztcblx0Y2FzZSBJTklUOlxuXHRcdHJlcXVpcmVMb2dpbigoKSA9PiBpbml0KHN0b3JlLCBhcmd2LnVybCkpO1xuXHRcdGJyZWFrO1xuXHRjYXNlIEFERDpcblx0XHRjb25zdCB7dG9vbE9wdHMsIHBhcmFtT3B0c30gPSBwYXJzZUFkZE9wdGlvbnMoYXJndi5zZXQsIGFyZ3ZbJ3NldC1wYXJhbSddKTtcblx0XHQvL3JlcXVpcmVMb2dpbigoKSA9PiBhZGQoc3RvcmUsIGFyZ3YucGF0aCwgdG9vbE9wdHMsIHBhcmFtT3B0cykpO1xuXHRcdGJyZWFrO1xuXHRjYXNlIExTOlxuXHRcdHJlcXVpcmVMb2dpbigoKSA9PiBsaXN0KHN0b3JlKSk7XG5cdFx0YnJlYWs7XG5cdGNhc2UgUFVMTDpcblx0XHRyZXF1aXJlTG9naW4oKCkgPT4gcHVsbChzdG9yZSkpO1xuXHRcdGJyZWFrO1xuXHRjYXNlIFBVU0g6XG5cdFx0cmVxdWlyZUxvZ2luKCgpID0+IHB1c2goc3RvcmUsIGFyZ3YuZmlsZSkpO1xuXHRcdGJyZWFrO1xuXHRjYXNlIExPR09VVDpcblx0XHRsb2dvdXQoc3RvcmUpO1xuXHRjYXNlIFdIT0FNSTpcblx0XHRyZXF1aXJlTG9naW4oKCkgPT4gd2hvYW1pKHN0b3JlKSk7XG5cdFx0YnJlYWs7XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBQcml2YXRlIEZ1bmN0aW9ucyAvL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuZnVuY3Rpb24gcGFyc2VBZGRPcHRpb25zKHRvb2xPcHRTdHIgPSBbXSwgcGFyYW1PcHRTdHIgPSBbXSkge1xuXHRjb25zdCB0b29sT3B0cyA9IHRvb2xPcHRTdHIucmVkdWNlKChhY2MsIG9wdCkgPT4ge1xuXHRcdGNvbnN0IHNwID0gb3B0LnNwbGl0KCc6Jyk7XG5cblx0XHRpZiAoc3AubGVuZ3RoID09PSAyKSB7XG5cdFx0XHRhY2Nbc3BbMF1dID0gc3BbMV07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGFjYztcblx0fSwge30pO1xuXG5cdGNvbnN0IHBhcmFtT3B0cyA9IHBhcmFtT3B0U3RyLnJlZHVjZSgoYWNjLCBvcHQsIGksIG9wdHMpID0+IHtcblx0XHRjb25zdCBzcCA9IG9wdC5zcGxpdCgnOicpO1xuXG5cdFx0aWYgKHNwLmxlbmd0aCAhPT0gMikge1xuXHRcdFx0cmV0dXJuIGFjYztcblx0XHR9XG5cblx0XHRjb25zdCBba2V5LCB2YWx1ZV0gPSBzcDtcblxuXHRcdC8vIFN0YXJ0aW5nIGEgbmV3IHBhcmFtXG5cdFx0aWYgKGtleS50b0xvd2VyQ2FzZSgpID09PSAnbmFtZScpIHtcblx0XHRcdC8vIEZpbmlzaCB3aGF0IHdhcyBiZWluZyBwcm9jZXNzZWRcblx0XHRcdGlmIChhY2MuY3VycmVudCAhPT0gbnVsbCkge1xuXHRcdFx0XHRhY2MubGlzdC5wdXNoKGFjYy5jdXJyZW50KTtcblx0XHRcdH1cblxuXHRcdFx0YWNjLmN1cnJlbnQgPSB7fTtcblx0XHR9XG5cblx0XHRhY2MuY3VycmVudFtrZXldID0gdmFsdWU7XG5cblx0XHQvLyBJZiBlbmQgb2YgbGlzdCBmaW5pc2ggcHJvY2Vzc2luZ1xuXHRcdGlmIChpICsgMSA9PT0gb3B0cy5sZW5ndGgpIHtcblx0XHRcdGFjYy5saXN0LnB1c2goYWNjLmN1cnJlbnQpO1xuXHRcdH1cblxuXHRcdHJldHVybiBhY2M7XG5cdH0sIHtsaXN0OiBbXSwgY3VycmVudDogbnVsbH0pLmxpc3Q7XG5cblx0cmV0dXJuIHtcblx0XHR0b29sT3B0cyxcblx0XHRwYXJhbU9wdHNcblx0fTtcbn1cbiJdfQ==