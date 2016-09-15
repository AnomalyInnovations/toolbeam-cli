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

var _options = require('./options');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Support source map outputs
require('source-map-support').install();

// Print all unhandled errors
process.on('unhandledRejection', function (err) {
	console.log(err.stack);
	process.exit(1);
});

// Command list
var LOGIN = 'login';
var LS = 'ls';
var PULL = 'pull';
var PUSH = 'push';
var LOGOUT = 'logout';

var usagePrefix = 'Usage: tb';
var requireLogin = (0, _requireLogin3.default)(_store2.default);

var argv = _yargs2.default.usage(usagePrefix + ' <command>').demand(1, 1).command(LOGIN, 'Login to Toolbeam', function (yargs) {
	return yargs.usage(usagePrefix + ' ' + LOGIN);
}).command(LS, 'List all your tools', function (yargs) {
	return yargs.usage(usagePrefix + ' ' + LS);
}).command(PULL, 'Pull your spec from Toolbeam', function (yargs) {
	return yargs.usage(usagePrefix + ' ' + PULL);
}).command(PUSH + ' <file>', 'Push your spec to Toolbeam', function (yargs) {
	return yargs.demand(1, 1, 'Missing: <file> that needs to be pushed').strict().usage(usagePrefix + ' ' + PUSH + ' <file>').example('tb ' + PUSH + ' spec.json', 'Push spec.json to Toolbeam').fail(function (msg) {
		return console.log(_chalk2.default.red(msg + '\n'));
	});
}).command(LOGOUT, 'Logout from Toolbeam', function (yargs) {
	return yargs.usage(usagePrefix + ' ' + LOGOUT);
}).help('h').alias('h', 'help').alias('v', 'version').version(_package2.default.version).epilogue('For more information, checkout https://toolbeam.com').wrap(null).strict().fail(function (msg, err) {
	if (err) throw err;
	_yargs2.default.showHelp();
	process.exit(1);
}).argv;

switch (argv._[0]) {
	case LOGIN:
		(0, _options.login)(_store2.default);
		break;
	case LS:
		requireLogin(function () {
			return (0, _options.list)(_store2.default);
		});
		break;
	case PULL:
		requireLogin(function () {
			return (0, _options.pull)(_store2.default);
		});
		break;
	case PUSH:
		requireLogin(function () {
			return (0, _options.push)(_store2.default, argv.file);
		});
		break;
	case LOGOUT:
		(0, _options.logout)(_store2.default);
		break;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiaW5zdGFsbCIsInByb2Nlc3MiLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJzdGFjayIsImV4aXQiLCJMT0dJTiIsIkxTIiwiUFVMTCIsIlBVU0giLCJMT0dPVVQiLCJ1c2FnZVByZWZpeCIsInJlcXVpcmVMb2dpbiIsImFyZ3YiLCJ1c2FnZSIsImRlbWFuZCIsImNvbW1hbmQiLCJ5YXJncyIsInN0cmljdCIsImV4YW1wbGUiLCJmYWlsIiwicmVkIiwibXNnIiwiaGVscCIsImFsaWFzIiwidmVyc2lvbiIsImVwaWxvZ3VlIiwid3JhcCIsInNob3dIZWxwIiwiXyIsImZpbGUiXSwibWFwcGluZ3MiOiI7O0FBV0E7Ozs7QUFFQTs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBakJBO0FBQ0FBLFFBQVEsb0JBQVIsRUFBOEJDLE9BQTlCOztBQUVBO0FBQ0FDLFFBQVFDLEVBQVIsQ0FBVyxvQkFBWCxFQUFpQyxlQUFPO0FBQ3BDQyxTQUFRQyxHQUFSLENBQVlDLElBQUlDLEtBQWhCO0FBQ0FMLFNBQVFNLElBQVIsQ0FBYSxDQUFiO0FBQ0gsQ0FIRDs7QUFzQkE7QUFDQSxJQUFNQyxRQUFRLE9BQWQ7QUFDQSxJQUFNQyxLQUFLLElBQVg7QUFDQSxJQUFNQyxPQUFPLE1BQWI7QUFDQSxJQUFNQyxPQUFPLE1BQWI7QUFDQSxJQUFNQyxTQUFTLFFBQWY7O0FBRUEsSUFBTUMsY0FBYyxXQUFwQjtBQUNBLElBQU1DLGVBQWUsNENBQXJCOztBQUVBLElBQU1DLE9BQU8sZ0JBQ1hDLEtBRFcsQ0FDRkgsV0FERSxpQkFFWEksTUFGVyxDQUVKLENBRkksRUFFRCxDQUZDLEVBR1hDLE9BSFcsQ0FHSFYsS0FIRyxFQUdJLG1CQUhKLEVBSVg7QUFBQSxRQUFTVyxNQUFNSCxLQUFOLENBQWVILFdBQWYsU0FBOEJMLEtBQTlCLENBQVQ7QUFBQSxDQUpXLEVBS1hVLE9BTFcsQ0FLSFQsRUFMRyxFQUtDLHFCQUxELEVBTVg7QUFBQSxRQUFTVSxNQUFNSCxLQUFOLENBQWVILFdBQWYsU0FBOEJKLEVBQTlCLENBQVQ7QUFBQSxDQU5XLEVBT1hTLE9BUFcsQ0FPSFIsSUFQRyxFQU9HLDhCQVBILEVBUVg7QUFBQSxRQUFTUyxNQUFNSCxLQUFOLENBQWVILFdBQWYsU0FBOEJILElBQTlCLENBQVQ7QUFBQSxDQVJXLEVBU1hRLE9BVFcsQ0FTQVAsSUFUQSxjQVNlLDRCQVRmLEVBVVg7QUFBQSxRQUFTUSxNQUNQRixNQURPLENBQ0EsQ0FEQSxFQUNHLENBREgsRUFDTSx5Q0FETixFQUVQRyxNQUZPLEdBR1BKLEtBSE8sQ0FHRUgsV0FIRixTQUdpQkYsSUFIakIsY0FJUFUsT0FKTyxTQUlPVixJQUpQLGlCQUl5Qiw0QkFKekIsRUFLUFcsSUFMTyxDQUtGO0FBQUEsU0FBT25CLFFBQVFDLEdBQVIsQ0FBWSxnQkFBTW1CLEdBQU4sQ0FBYUMsR0FBYixRQUFaLENBQVA7QUFBQSxFQUxFLENBQVQ7QUFBQSxDQVZXLEVBZ0JYTixPQWhCVyxDQWdCSE4sTUFoQkcsRUFnQkssc0JBaEJMLEVBaUJYO0FBQUEsUUFBU08sTUFBTUgsS0FBTixDQUFlSCxXQUFmLFNBQThCRCxNQUE5QixDQUFUO0FBQUEsQ0FqQlcsRUFrQlhhLElBbEJXLENBa0JOLEdBbEJNLEVBbUJYQyxLQW5CVyxDQW1CTCxHQW5CSyxFQW1CQSxNQW5CQSxFQW9CWEEsS0FwQlcsQ0FvQkwsR0FwQkssRUFvQkEsU0FwQkEsRUFxQlhDLE9BckJXLENBcUJILGtCQUFZQSxPQXJCVCxFQXNCWEMsUUF0QlcsQ0FzQkYscURBdEJFLEVBdUJYQyxJQXZCVyxDQXVCTixJQXZCTSxFQXdCWFQsTUF4QlcsR0F5QlhFLElBekJXLENBeUJOLFVBQUNFLEdBQUQsRUFBTW5CLEdBQU4sRUFBYztBQUNuQixLQUFJQSxHQUFKLEVBQVMsTUFBTUEsR0FBTjtBQUNULGlCQUFNeUIsUUFBTjtBQUNBN0IsU0FBUU0sSUFBUixDQUFhLENBQWI7QUFDQSxDQTdCVyxFQThCWFEsSUE5QkY7O0FBZ0NBLFFBQVFBLEtBQUtnQixDQUFMLENBQU8sQ0FBUCxDQUFSO0FBQ0MsTUFBS3ZCLEtBQUw7QUFDQztBQUNBO0FBQ0QsTUFBS0MsRUFBTDtBQUNDSyxlQUFhO0FBQUEsVUFBTSxtQ0FBTjtBQUFBLEdBQWI7QUFDQTtBQUNELE1BQUtKLElBQUw7QUFDQ0ksZUFBYTtBQUFBLFVBQU0sbUNBQU47QUFBQSxHQUFiO0FBQ0E7QUFDRCxNQUFLSCxJQUFMO0FBQ0NHLGVBQWE7QUFBQSxVQUFNLG9DQUFZQyxLQUFLaUIsSUFBakIsQ0FBTjtBQUFBLEdBQWI7QUFDQTtBQUNELE1BQUtwQixNQUFMO0FBQ0M7QUFDQTtBQWZGIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi8vIFN1cHBvcnQgc291cmNlIG1hcCBvdXRwdXRzXG5yZXF1aXJlKCdzb3VyY2UtbWFwLXN1cHBvcnQnKS5pbnN0YWxsKCk7XG5cbi8vIFByaW50IGFsbCB1bmhhbmRsZWQgZXJyb3JzXG5wcm9jZXNzLm9uKCd1bmhhbmRsZWRSZWplY3Rpb24nLCBlcnIgPT4ge1xuICAgIGNvbnNvbGUubG9nKGVyci5zdGFjayk7XG4gICAgcHJvY2Vzcy5leGl0KDEpO1xufSk7XG5cbmltcG9ydCBwYWNrYWdlSnNvbiBmcm9tICcuLi9wYWNrYWdlLmpzb24nO1xuXG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmltcG9ydCBjaGFsayBmcm9tICdjaGFsayc7XG5pbXBvcnQgeWFyZ3MgZnJvbSAneWFyZ3MnO1xuXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5pbXBvcnQgX3JlcXVpcmVMb2dpbiBmcm9tICcuL2xpYnMvcmVxdWlyZS1sb2dpbic7XG5pbXBvcnQge1xuXHRsaXN0LFxuXHRsb2dpbixcblx0bG9nb3V0LFxuXHRwdWxsLFxuXHRwdXNoLFxufSBmcm9tICcuL29wdGlvbnMnO1xuXG5cbi8vIENvbW1hbmQgbGlzdFxuY29uc3QgTE9HSU4gPSAnbG9naW4nO1xuY29uc3QgTFMgPSAnbHMnO1xuY29uc3QgUFVMTCA9ICdwdWxsJztcbmNvbnN0IFBVU0ggPSAncHVzaCc7XG5jb25zdCBMT0dPVVQgPSAnbG9nb3V0JztcblxuY29uc3QgdXNhZ2VQcmVmaXggPSAnVXNhZ2U6IHRiJztcbmNvbnN0IHJlcXVpcmVMb2dpbiA9IF9yZXF1aXJlTG9naW4oc3RvcmUpO1xuXG5jb25zdCBhcmd2ID0geWFyZ3Ncblx0LnVzYWdlKGAke3VzYWdlUHJlZml4fSA8Y29tbWFuZD5gKVxuXHQuZGVtYW5kKDEsIDEpXG5cdC5jb21tYW5kKExPR0lOLCAnTG9naW4gdG8gVG9vbGJlYW0nLFxuXHRcdHlhcmdzID0+IHlhcmdzLnVzYWdlKGAke3VzYWdlUHJlZml4fSAke0xPR0lOfWApKVxuXHQuY29tbWFuZChMUywgJ0xpc3QgYWxsIHlvdXIgdG9vbHMnLFxuXHRcdHlhcmdzID0+IHlhcmdzLnVzYWdlKGAke3VzYWdlUHJlZml4fSAke0xTfWApKVxuXHQuY29tbWFuZChQVUxMLCAnUHVsbCB5b3VyIHNwZWMgZnJvbSBUb29sYmVhbScsXG5cdFx0eWFyZ3MgPT4geWFyZ3MudXNhZ2UoYCR7dXNhZ2VQcmVmaXh9ICR7UFVMTH1gKSlcblx0LmNvbW1hbmQoYCR7UFVTSH0gPGZpbGU+YCwgJ1B1c2ggeW91ciBzcGVjIHRvIFRvb2xiZWFtJyxcblx0XHR5YXJncyA9PiB5YXJnc1xuXHRcdFx0LmRlbWFuZCgxLCAxLCAnTWlzc2luZzogPGZpbGU+IHRoYXQgbmVlZHMgdG8gYmUgcHVzaGVkJylcblx0XHRcdC5zdHJpY3QoKVxuXHRcdFx0LnVzYWdlKGAke3VzYWdlUHJlZml4fSAke1BVU0h9IDxmaWxlPmApXG5cdFx0XHQuZXhhbXBsZShgdGIgJHtQVVNIfSBzcGVjLmpzb25gLCAnUHVzaCBzcGVjLmpzb24gdG8gVG9vbGJlYW0nKVxuXHRcdFx0LmZhaWwobXNnID0+IGNvbnNvbGUubG9nKGNoYWxrLnJlZChgJHttc2d9XFxuYCkpKSlcblx0LmNvbW1hbmQoTE9HT1VULCAnTG9nb3V0IGZyb20gVG9vbGJlYW0nLFxuXHRcdHlhcmdzID0+IHlhcmdzLnVzYWdlKGAke3VzYWdlUHJlZml4fSAke0xPR09VVH1gKSlcblx0LmhlbHAoJ2gnKVxuXHQuYWxpYXMoJ2gnLCAnaGVscCcpXG5cdC5hbGlhcygndicsICd2ZXJzaW9uJylcblx0LnZlcnNpb24ocGFja2FnZUpzb24udmVyc2lvbilcblx0LmVwaWxvZ3VlKCdGb3IgbW9yZSBpbmZvcm1hdGlvbiwgY2hlY2tvdXQgaHR0cHM6Ly90b29sYmVhbS5jb20nKVxuXHQud3JhcChudWxsKVxuXHQuc3RyaWN0KClcblx0LmZhaWwoKG1zZywgZXJyKSA9PiB7XG5cdFx0aWYgKGVycikgdGhyb3cgZXJyO1xuXHRcdHlhcmdzLnNob3dIZWxwKCk7XG5cdFx0cHJvY2Vzcy5leGl0KDEpO1xuXHR9KVxuXHQuYXJndjtcblxuc3dpdGNoIChhcmd2Ll9bMF0pIHtcblx0Y2FzZSBMT0dJTjpcblx0XHRsb2dpbihzdG9yZSk7XG5cdFx0YnJlYWs7XG5cdGNhc2UgTFM6XG5cdFx0cmVxdWlyZUxvZ2luKCgpID0+IGxpc3Qoc3RvcmUpKTtcblx0XHRicmVhaztcblx0Y2FzZSBQVUxMOlxuXHRcdHJlcXVpcmVMb2dpbigoKSA9PiBwdWxsKHN0b3JlKSk7XG5cdFx0YnJlYWs7XG5cdGNhc2UgUFVTSDpcblx0XHRyZXF1aXJlTG9naW4oKCkgPT4gcHVzaChzdG9yZSwgYXJndi5maWxlKSk7XG5cdFx0YnJlYWs7XG5cdGNhc2UgTE9HT1VUOlxuXHRcdGxvZ291dChzdG9yZSk7XG5cdFx0YnJlYWs7XG59XG4iXX0=