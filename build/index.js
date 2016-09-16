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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiaW5zdGFsbCIsInByb2Nlc3MiLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJzdGFjayIsImV4aXQiLCJTSUdOVVAiLCJMT0dJTiIsIklOSVQiLCJBREQiLCJMUyIsIlBVTEwiLCJQVVNIIiwiTE9HT1VUIiwiV0hPQU1JIiwidXNhZ2VQcmVmaXgiLCJyZXF1aXJlTG9naW4iLCJyZXF1aXJlQW5vbnltb3VzIiwiZmFpbEZuIiwicmVkIiwibXNnIiwiYXJndiIsInVzYWdlIiwiZGVtYW5kIiwiY29tbWFuZCIsInlhcmdzIiwic3RyaWN0IiwiZXhhbXBsZSIsImZhaWwiLCJvcHRpb24iLCJ0eXBlIiwiZ3JvdXAiLCJkZXNjIiwiZXBpbG9ndWUiLCJoZWxwIiwiYWxpYXMiLCJ2ZXJzaW9uIiwid3JhcCIsInNob3dIZWxwIiwiXyIsInVybCIsInBhcnNlQWRkT3B0aW9ucyIsInNldCIsInRvb2xPcHRzIiwicGFyYW1PcHRzIiwiZmlsZSIsInRvb2xPcHRTdHIiLCJwYXJhbU9wdFN0ciIsInJlZHVjZSIsImFjYyIsIm9wdCIsInNwIiwic3BsaXQiLCJsZW5ndGgiLCJpIiwib3B0cyIsImtleSIsInZhbHVlIiwidG9Mb3dlckNhc2UiLCJjdXJyZW50IiwibGlzdCIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7OztBQVdBOzs7O0FBRUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBbEJBO0FBQ0FBLFFBQVEsb0JBQVIsRUFBOEJDLE9BQTlCOztBQUVBO0FBQ0FDLFFBQVFDLEVBQVIsQ0FBVyxvQkFBWCxFQUFpQyxlQUFPO0FBQ3BDQyxTQUFRQyxHQUFSLENBQVlDLElBQUlDLEtBQWhCO0FBQ0FMLFNBQVFNLElBQVIsQ0FBYSxDQUFiO0FBQ0gsQ0FIRDs7QUEwQkE7QUFDQSxJQUFNQyxTQUFTLFFBQWY7QUFDQSxJQUFNQyxRQUFRLE9BQWQ7QUFDQSxJ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QixNQUExQixFQUFrQztBQUNqQztBQUNBLE9BQUlULElBQUlVLE9BQUosS0FBZ0IsSUFBcEIsRUFBMEI7QUFDekJWLFFBQUlXLElBQUosQ0FBU0MsSUFBVCxDQUFjWixJQUFJVSxPQUFsQjtBQUNBOztBQUVEVixPQUFJVSxPQUFKLEdBQWMsRUFBZDtBQUNBOztBQUVEVixNQUFJVSxPQUFKLENBQVlILEdBQVosSUFBbUJDLEtBQW5COztBQUVBO0FBQ0EsTUFBSUgsSUFBSSxDQUFKLEtBQVVDLEtBQUtGLE1BQW5CLEVBQTJCO0FBQzFCSixPQUFJVyxJQUFKLENBQVNDLElBQVQsQ0FBY1osSUFBSVUsT0FBbEI7QUFDQTs7QUFFRCxTQUFPVixHQUFQO0FBQ0EsRUEzQmlCLEVBMkJmLEVBQUNXLE1BQU0sRUFBUCxFQUFXRCxTQUFTLElBQXBCLEVBM0JlLEVBMkJZQyxJQTNCOUI7O0FBNkJBLFFBQU87QUFDTmpCLG9CQURNO0FBRU5DO0FBRk0sRUFBUDtBQUlBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi8vIFN1cHBvcnQgc291cmNlIG1hcCBvdXRwdXRzXG5yZXF1aXJlKCdzb3VyY2UtbWFwLXN1cHBvcnQnKS5pbnN0YWxsKCk7XG5cbi8vIFByaW50IGFsbCB1bmhhbmRsZWQgZXJyb3JzXG5wcm9jZXNzLm9uKCd1bmhhbmRsZWRSZWplY3Rpb24nLCBlcnIgPT4ge1xuICAgIGNvbnNvbGUubG9nKGVyci5zdGFjayk7XG4gICAgcHJvY2Vzcy5leGl0KDEpO1xufSk7XG5cbmltcG9ydCBwYWNrYWdlSnNvbiBmcm9tICcuLi9wYWNrYWdlLmpzb24nO1xuXG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmltcG9ydCBjaGFsayBmcm9tICdjaGFsayc7XG5pbXBvcnQgeWFyZ3MgZnJvbSAneWFyZ3MnO1xuXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5pbXBvcnQgX3JlcXVpcmVMb2dpbiBmcm9tICcuL2xpYnMvcmVxdWlyZS1sb2dpbic7XG5pbXBvcnQgX3JlcXVpcmVBbm9ueW1vdXMgZnJvbSAnLi9saWJzL3JlcXVpcmUtYW5vbnltb3VzJztcbmltcG9ydCB7XG5cdGluaXQsXG5cdGxpc3QsXG5cdGxvZ2luLFxuXHRsb2dvdXQsXG5cdHB1bGwsXG5cdHB1c2gsXG5cdHNpZ251cCxcblx0d2hvYW1pLFxufSBmcm9tICcuL2NvbW1hbmRzJztcblxuXG4vLyBDb21tYW5kIGxpc3RcbmNvbnN0IFNJR05VUCA9ICdzaWdudXAnO1xuY29uc3QgTE9HSU4gPSAnbG9naW4nO1xuY29uc3QgSU5JVCA9ICdpbml0JztcbmNvbnN0IEFERCA9ICdhZGQnO1xuY29uc3QgTFMgPSAnbHMnO1xuY29uc3QgUFVMTCA9ICdwdWxsJztcbmNvbnN0IFBVU0ggPSAncHVzaCc7XG5jb25zdCBMT0dPVVQgPSAnbG9nb3V0JztcbmNvbnN0IFdIT0FNSSA9ICd3aG9hbWknO1xuXG5jb25zdCB1c2FnZVByZWZpeCA9ICdVc2FnZTogdGInO1xuY29uc3QgcmVxdWlyZUxvZ2luID0gX3JlcXVpcmVMb2dpbihzdG9yZSk7XG5jb25zdCByZXF1aXJlQW5vbnltb3VzID0gX3JlcXVpcmVBbm9ueW1vdXMoc3RvcmUpO1xuXG5jb25zdCBmYWlsRm4gPSBtc2cgPT4gY29uc29sZS5sb2coY2hhbGsucmVkKGAke21zZ31cXG5gKSk7XG5cbmNvbnN0IGFyZ3YgPSB5YXJnc1xuXHQudXNhZ2UoYCR7dXNhZ2VQcmVmaXh9IDxjb21tYW5kPmApXG5cdC5kZW1hbmQoMSwgMSlcblxuXHQuY29tbWFuZChTSUdOVVAsICdTaWduIHVwIGZvciBUb29sYmVhbScsXG5cdFx0eWFyZ3MgPT4geWFyZ3MudXNhZ2UoYCR7dXNhZ2VQcmVmaXh9ICR7U0lHTlVQfWApKVxuXG5cdC5jb21tYW5kKExPR0lOLCAnTG9naW4gdG8gVG9vbGJlYW0nLFxuXHRcdHlhcmdzID0+IHlhcmdzLnVzYWdlKGAke3VzYWdlUHJlZml4fSAke0xPR0lOfWApKVxuXG5cdC5jb21tYW5kKGAke0lOSVR9IDx1cmw+YCwgJ0luaXRpYWxpemUgeW91ciBUb29sYmVhbSBwcm9qZWN0Jyxcblx0XHR5YXJncyA9PiB5YXJnc1xuXHRcdFx0LmRlbWFuZCgxLCAxLCAnTWlzc2luZzogQmFzZSA8dXJsPiBvZiB5b3VyIEFQSScpXG5cdFx0XHQuc3RyaWN0KClcblx0XHRcdC51c2FnZShgJHt1c2FnZVByZWZpeH0gJHtJTklUfSA8dXJsPmApXG5cdFx0XHQuZXhhbXBsZShgdGIgJHtJTklUfSBodHRwOi8vYXBpLmV4YW1wbGUuY29tYCwgJ0luaXRpbGl6ZSB5b3VyIEV4YW1wbGUgQVBJIHByb2plY3QnKVxuXHRcdFx0LmZhaWwoZmFpbEZuKSlcblxuXHQuY29tbWFuZChgJHtBRER9IDxwYXRoPmAsICdBZGQgYW4gQVBJIHJlc291cmNlIGFzIGEgdG9vbCcsXG5cdFx0eWFyZ3MgPT4geWFyZ3Ncblx0XHRcdC5kZW1hbmQoMSwgMSwgJ01pc3Npbmc6IDxwYXRoPiBvZiB5b3VyIEFQSSByZXNvdXJjZScpXG5cdFx0XHQuc3RyaWN0KClcblx0XHRcdC5vcHRpb24oJ3NldCcsIHtcblx0XHRcdFx0dHlwZTogJ2FycmF5Jyxcblx0XHRcdFx0Z3JvdXA6ICdUb29sIE9wdGlvbnM6Jyxcblx0XHRcdFx0ZGVzYzogJ1NldCA8a2V5Pjo8dmFsdWU+IG9wdGlvbnMgZm9yIHRoZSB0b29sJyxcblx0XHRcdH0pXG5cdFx0XHQub3B0aW9uKCdzZXQtcGFyYW0nLCB7XG5cdFx0XHRcdHR5cGU6ICdhcnJheScsXG5cdFx0XHRcdGdyb3VwOiAnUGFyYW1ldGVyIE9wdGlvbnM6Jyxcblx0XHRcdFx0ZGVzYzogJ1NldCBhIHBhcmFtZXRlciBmb3IgdGhlIHRvb2wgYW5kIDxrZXk+Ojx2YWx1ZT4gb3B0aW9ucycsXG5cdFx0XHR9KVxuXHRcdFx0LmVwaWxvZ3VlKCdGb3IgYSBmdWxsIGxpc3Qgb2YgdG9vbCBhbmQgcGFyYW1ldGVyIG9wdGlvbnMgcmVmZXIgdG8gaHR0cHM6Ly9naXRodWIuY29tL0Fub21hbHlJbm5vdmF0aW9ucy90b29sYmVhbS1jbGkvYmxvYi9tYXN0ZXIvUkVBRE1FLm1kJylcblx0XHRcdC51c2FnZShgJHt1c2FnZVByZWZpeH0gJHtBRER9IDxwYXRoPiBbb3B0aW9uc11gKVxuXHRcdFx0LmV4YW1wbGUoYHRiICR7QUREfSAvdXNlcnNgLCAnQWRkIHRoZSByZXNvdXJjZSBcXC91c2VycyB0byB0aGUgc3BlYycpXG5cdFx0XHQuZXhhbXBsZShgdGIgJHtBRER9IC91c2Vycy97aWR9IC0tc2V0LXBhcmFtIG5hbWU6aWQgaW46cGF0aGAsICdBZGQgYSBHRVQgcmVzb3VyY2Ugd2l0aCBhIHBhdGggcGFyYW1ldGVyJylcblx0XHRcdC5leGFtcGxlKGB0YiAke0FERH0gL3VzZXIvMzEvbGlrZSAtLXNldCBvcGVyYXRpb246UE9TVGAsICdBZGQgYSBQT1NUIHJlc291cmNlJylcblx0XHRcdC5mYWlsKGZhaWxGbikpXG5cblx0LmNvbW1hbmQoTFMsICdMaXN0IGFsbCB5b3VyIHRvb2xzJyxcblx0XHR5YXJncyA9PiB5YXJncy51c2FnZShgJHt1c2FnZVByZWZpeH0gJHtMU31gKSlcblxuXHQuY29tbWFuZChQVUxMLCAnUHVsbCB5b3VyIHNwZWMgZnJvbSBUb29sYmVhbScsXG5cdFx0eWFyZ3MgPT4geWFyZ3MudXNhZ2UoYCR7dXNhZ2VQcmVmaXh9ICR7UFVMTH1gKSlcblxuXHQuY29tbWFuZChgJHtQVVNIfSA8ZmlsZT5gLCAnUHVzaCB5b3VyIHNwZWMgdG8gVG9vbGJlYW0nLFxuXHRcdHlhcmdzID0+IHlhcmdzXG5cdFx0XHQuZGVtYW5kKDEsIDEsICdNaXNzaW5nOiA8ZmlsZT4gdGhhdCBuZWVkcyB0byBiZSBwdXNoZWQnKVxuXHRcdFx0LnN0cmljdCgpXG5cdFx0XHQudXNhZ2UoYCR7dXNhZ2VQcmVmaXh9ICR7UFVTSH0gPGZpbGU+YClcblx0XHRcdC5leGFtcGxlKGB0YiAke1BVU0h9IHNwZWMuanNvbmAsICdQdXNoIHNwZWMuanNvbiB0byBUb29sYmVhbScpXG5cdFx0XHQuZmFpbChmYWlsRm4pKVxuXG5cdC5jb21tYW5kKFdIT0FNSSwgJ0luZm8gYWJvdXQgY3VycmVudCBsb2dnZWQgaW4gdXNlcicsXG5cdFx0eWFyZ3MgPT4geWFyZ3MudXNhZ2UoYCR7dXNhZ2VQcmVmaXh9ICR7V0hPQU1JfWApKVxuXG5cdC5jb21tYW5kKExPR09VVCwgJ0xvZ291dCBmcm9tIFRvb2xiZWFtJyxcblx0XHR5YXJncyA9PiB5YXJncy51c2FnZShgJHt1c2FnZVByZWZpeH0gJHtMT0dPVVR9YCkpXG5cblx0LmhlbHAoJ2gnKVxuXHQuYWxpYXMoJ2gnLCAnaGVscCcpXG5cdC5hbGlhcygndicsICd2ZXJzaW9uJylcblx0LnZlcnNpb24ocGFja2FnZUpzb24udmVyc2lvbilcblx0LmVwaWxvZ3VlKCdGb3IgbW9yZSBpbmZvcm1hdGlvbiwgY2hlY2tvdXQgaHR0cHM6Ly90b29sYmVhbS5jb20nKVxuXHQud3JhcChudWxsKVxuXHQuc3RyaWN0KClcblx0LmZhaWwoKG1zZywgZXJyKSA9PiB7XG5cdFx0aWYgKGVycikgdGhyb3cgZXJyO1xuXHRcdHlhcmdzLnNob3dIZWxwKCk7XG5cdFx0cHJvY2Vzcy5leGl0KDEpO1xuXHR9KVxuXHQuYXJndjtcblxuc3dpdGNoIChhcmd2Ll9bMF0pIHtcblx0Y2FzZSBTSUdOVVA6XG5cdFx0cmVxdWlyZUFub255bW91cygoKSA9PiBzaWdudXAoc3RvcmUpKTtcblx0XHRicmVhaztcblx0Y2FzZSBMT0dJTjpcblx0XHRyZXF1aXJlQW5vbnltb3VzKCgpID0+IGxvZ2luKHN0b3JlKSk7XG5cdFx0YnJlYWs7XG5cdGNhc2UgSU5JVDpcblx0XHRyZXF1aXJlTG9naW4oKCkgPT4gaW5pdChzdG9yZSwgYXJndi51cmwpKTtcblx0XHRicmVhaztcblx0Y2FzZSBBREQ6XG5cdFx0Y29uc3Qge3Rvb2xPcHRzLCBwYXJhbU9wdHN9ID0gcGFyc2VBZGRPcHRpb25zKGFyZ3Yuc2V0LCBhcmd2WydzZXQtcGFyYW0nXSk7XG5cdFx0Ly9yZXF1aXJlTG9naW4oKCkgPT4gYWRkKHN0b3JlLCBhcmd2LnBhdGgsIHRvb2xPcHRzLCBwYXJhbU9wdHMpKTtcblx0XHRicmVhaztcblx0Y2FzZSBMUzpcblx0XHRyZXF1aXJlTG9naW4oKCkgPT4gbGlzdChzdG9yZSkpO1xuXHRcdGJyZWFrO1xuXHRjYXNlIFBVTEw6XG5cdFx0cmVxdWlyZUxvZ2luKCgpID0+IHB1bGwoc3RvcmUpKTtcblx0XHRicmVhaztcblx0Y2FzZSBQVVNIOlxuXHRcdHJlcXVpcmVMb2dpbigoKSA9PiBwdXNoKHN0b3JlLCBhcmd2LmZpbGUpKTtcblx0XHRicmVhaztcblx0Y2FzZSBMT0dPVVQ6XG5cdFx0bG9nb3V0KHN0b3JlKTtcblx0Y2FzZSBXSE9BTUk6XG5cdFx0cmVxdWlyZUxvZ2luKCgpID0+IHdob2FtaShzdG9yZSkpO1xuXHRcdGJyZWFrO1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gUHJpdmF0ZSBGdW5jdGlvbnMgLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmZ1bmN0aW9uIHBhcnNlQWRkT3B0aW9ucyh0b29sT3B0U3RyID0gW10sIHBhcmFtT3B0U3RyID0gW10pIHtcblx0Y29uc3QgdG9vbE9wdHMgPSB0b29sT3B0U3RyLnJlZHVjZSgoYWNjLCBvcHQpID0+IHtcblx0XHRjb25zdCBzcCA9IG9wdC5zcGxpdCgnOicpO1xuXG5cdFx0aWYgKHNwLmxlbmd0aCA9PT0gMikge1xuXHRcdFx0YWNjW3NwWzBdXSA9IHNwWzFdO1xuXHRcdH1cblxuXHRcdHJldHVybiBhY2M7XG5cdH0sIHt9KTtcblxuXHRjb25zdCBwYXJhbU9wdHMgPSBwYXJhbU9wdFN0ci5yZWR1Y2UoKGFjYywgb3B0LCBpLCBvcHRzKSA9PiB7XG5cdFx0Y29uc3Qgc3AgPSBvcHQuc3BsaXQoJzonKTtcblxuXHRcdGlmIChzcC5sZW5ndGggIT09IDIpIHtcblx0XHRcdHJldHVybiBhY2M7XG5cdFx0fVxuXG5cdFx0Y29uc3QgW2tleSwgdmFsdWVdID0gc3A7XG5cblx0XHQvLyBTdGFydGluZyBhIG5ldyBwYXJhbVxuXHRcdGlmIChrZXkudG9Mb3dlckNhc2UoKSA9PT0gJ25hbWUnKSB7XG5cdFx0XHQvLyBGaW5pc2ggd2hhdCB3YXMgYmVpbmcgcHJvY2Vzc2VkXG5cdFx0XHRpZiAoYWNjLmN1cnJlbnQgIT09IG51bGwpIHtcblx0XHRcdFx0YWNjLmxpc3QucHVzaChhY2MuY3VycmVudCk7XG5cdFx0XHR9XG5cblx0XHRcdGFjYy5jdXJyZW50ID0ge307XG5cdFx0fVxuXG5cdFx0YWNjLmN1cnJlbnRba2V5XSA9IHZhbHVlO1xuXG5cdFx0Ly8gSWYgZW5kIG9mIGxpc3QgZmluaXNoIHByb2Nlc3Npbmdcblx0XHRpZiAoaSArIDEgPT09IG9wdHMubGVuZ3RoKSB7XG5cdFx0XHRhY2MubGlzdC5wdXNoKGFjYy5jdXJyZW50KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gYWNjO1xuXHR9LCB7bGlzdDogW10sIGN1cnJlbnQ6IG51bGx9KS5saXN0O1xuXG5cdHJldHVybiB7XG5cdFx0dG9vbE9wdHMsXG5cdFx0cGFyYW1PcHRzXG5cdH07XG59XG4iXX0=