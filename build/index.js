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
_commander2.default.command('init <url>').description('initialize project').action(function (url) {
  return requireLogin(function () {
    return (0, _options.init)(_store2.default, url);
  });
});

_commander2.default.command('ls').description('list of your tools').action(function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiaW5zdGFsbCIsInByb2Nlc3MiLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJzdGFjayIsImV4aXQiLCJyZXF1aXJlTG9naW4iLCJyZXF1aXJlQW5vbnltb3VzIiwidmVyc2lvbiIsImNvbW1hbmQiLCJkZXNjcmlwdGlvbiIsImFjdGlvbiIsInVybCIsImZpbGUiLCJwYXJzZSIsImFyZ3YiXSwibWFwcGluZ3MiOiI7O0FBV0E7Ozs7QUFFQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBWUE7Ozs7QUFDQTs7Ozs7O0FBOUJBO0FBQ0FBLFFBQVEsb0JBQVIsRUFBOEJDLE9BQTlCOztBQUVBO0FBQ0FDLFFBQVFDLEVBQVIsQ0FBVyxvQkFBWCxFQUFpQyxlQUFPO0FBQ3BDQyxVQUFRQyxHQUFSLENBQVlDLElBQUlDLEtBQWhCO0FBQ0FMLFVBQVFNLElBQVIsQ0FBYSxDQUFiO0FBQ0gsQ0FIRDs7QUE0QkEsSUFBTUMsZUFBZSw0Q0FBckI7QUFDQSxJQUFNQyxtQkFBbUIsZ0RBQXpCOztBQUVBLG9CQUNJQyxPQURKLENBQ1ksa0JBQVFBLE9BRHBCO0FBRUc7OEVBRkg7O0FBS0E7QUFDQSxvQkFDRUMsT0FERixDQUNVLFFBRFYsRUFFRUMsV0FGRixDQUVjLHFCQUZkLEVBR0VDLE1BSEYsQ0FHUztBQUFBLFNBQU1KLGlCQUFpQjtBQUFBLFdBQU0scUNBQU47QUFBQSxHQUFqQixDQUFOO0FBQUEsQ0FIVDs7QUFLQSxvQkFDRUUsT0FERixDQUNVLE9BRFYsRUFFRUMsV0FGRixDQUVjLG1CQUZkLEVBR0VDLE1BSEYsQ0FHUztBQUFBLFNBQU1KLGlCQUFpQjtBQUFBLFdBQU0sb0NBQU47QUFBQSxHQUFqQixDQUFOO0FBQUEsQ0FIVDs7QUFLQSxvQkFDRUUsT0FERixDQUNVLFFBRFYsRUFFRUMsV0FGRixDQUVjLHNCQUZkLEVBR0VDLE1BSEYsQ0FHUztBQUFBLFNBQU0scUNBQU47QUFBQSxDQUhUOztBQUtBLG9CQUNFRixPQURGLENBQ1UsUUFEVixFQUVFQyxXQUZGLENBRWMsVUFGZCxFQUdFQyxNQUhGLENBR1M7QUFBQSxTQUFNTCxhQUFhO0FBQUEsV0FBTSxxQ0FBTjtBQUFBLEdBQWIsQ0FBTjtBQUFBLENBSFQ7O0FBS0E7QUFDQSxvQkFDRUcsT0FERixDQUNVLFlBRFYsRUFFRUMsV0FGRixDQUVjLG9CQUZkLEVBR0VDLE1BSEYsQ0FHUztBQUFBLFNBQU9MLGFBQWE7QUFBQSxXQUFNLG9DQUFZTSxHQUFaLENBQU47QUFBQSxHQUFiLENBQVA7QUFBQSxDQUhUOztBQUtBLG9CQUNFSCxPQURGLENBQ1UsSUFEVixFQUVFQyxXQUZGLENBRWMsb0JBRmQsRUFHRUMsTUFIRixDQUdTO0FBQUEsU0FBTUwsYUFBYTtBQUFBLFdBQU0sbUNBQU47QUFBQSxHQUFiLENBQU47QUFBQSxDQUhUOztBQUtBLG9CQUNFRyxPQURGLENBQ1UsTUFEVixFQUVFQyxXQUZGLENBRWMseUJBRmQsRUFHRUMsTUFIRixDQUdTO0FBQUEsU0FBTUwsYUFBYTtBQUFBLFdBQU0sbUNBQU47QUFBQSxHQUFiLENBQU47QUFBQSxDQUhUOztBQUtBLG9CQUNFRyxPQURGLENBQ1UsYUFEVixFQUVFQyxXQUZGLENBRWMseUJBRmQsRUFHRUMsTUFIRixDQUdTO0FBQUEsU0FBUUwsYUFBYTtBQUFBLFdBQU0sb0NBQVlPLElBQVosQ0FBTjtBQUFBLEdBQWIsQ0FBUjtBQUFBLENBSFQ7O0FBS0Esb0JBQVFDLEtBQVIsQ0FBY2YsUUFBUWdCLElBQXRCOztBQUVBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi8vIFN1cHBvcnQgc291cmNlIG1hcCBvdXRwdXRzXG5yZXF1aXJlKCdzb3VyY2UtbWFwLXN1cHBvcnQnKS5pbnN0YWxsKCk7XG5cbi8vIFByaW50IGFsbCB1bmhhbmRsZWQgZXJyb3JzXG5wcm9jZXNzLm9uKCd1bmhhbmRsZWRSZWplY3Rpb24nLCBlcnIgPT4ge1xuICAgIGNvbnNvbGUubG9nKGVyci5zdGFjayk7XG4gICAgcHJvY2Vzcy5leGl0KDEpO1xufSk7XG5cbmltcG9ydCBwa2dKc29uIGZyb20gJy4uL3BhY2thZ2UuanNvbic7XG5cbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJztcbmltcG9ydCBmaWdsZXQgZnJvbSAnZmlnbGV0JztcbmltcG9ydCBjbGVhciBmcm9tICdjbGVhcic7XG5pbXBvcnQgX3JlcXVpcmVMb2dpbiBmcm9tICcuL2xpYnMvcmVxdWlyZS1sb2dpbic7XG5pbXBvcnQgX3JlcXVpcmVBbm9ueW1vdXMgZnJvbSAnLi9saWJzL3JlcXVpcmUtYW5vbnltb3VzJztcbmltcG9ydCB7XG5cdGluaXQsXG5cdGxpc3QsXG5cdGxvZ2luLFxuXHRsb2dvdXQsXG5cdHB1bGwsXG5cdHB1c2gsXG5cdHNpZ251cCxcblx0d2hvYW1pLFxufSBmcm9tICcuL29wdGlvbnMnO1xuXG5cbmltcG9ydCBwcm9ncmFtIGZyb20gJ2NvbW1hbmRlcic7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5cbmNvbnN0IHJlcXVpcmVMb2dpbiA9IF9yZXF1aXJlTG9naW4oc3RvcmUpO1xuY29uc3QgcmVxdWlyZUFub255bW91cyA9IF9yZXF1aXJlQW5vbnltb3VzKHN0b3JlKTtcblxucHJvZ3JhbVxuICAgLnZlcnNpb24ocGtnSnNvbi52ZXJzaW9uKVxuICAgLyoub3B0aW9uKCctQywgLS1jaGRpciA8cGF0aD4nLCAnY2hhbmdlIHRoZSB3b3JraW5nIGRpcmVjdG9yeScpXG4gICAub3B0aW9uKCctYywgLS1jb25maWcgPHBhdGg+JywgJ3NldCBjb25maWcgcGF0aC4gZGVmYXVsdHMgdG8gLi9kZXBsb3kuY29uZicpKi87XG5cbi8vIEFjY291bnQgQ29tbWFuZHNcbnByb2dyYW1cbiAuY29tbWFuZCgnc2lnbnVwJylcbiAuZGVzY3JpcHRpb24oJ3NpZ251cCBmb3IgVG9vbGJlYW0nKVxuIC5hY3Rpb24oKCkgPT4gcmVxdWlyZUFub255bW91cygoKSA9PiBzaWdudXAoc3RvcmUpKSk7XG5cbnByb2dyYW1cbiAuY29tbWFuZCgnbG9naW4nKVxuIC5kZXNjcmlwdGlvbignbG9naW4gdG8gVG9vbGJlYW0nKVxuIC5hY3Rpb24oKCkgPT4gcmVxdWlyZUFub255bW91cygoKSA9PiBsb2dpbihzdG9yZSkpKTtcblxucHJvZ3JhbVxuIC5jb21tYW5kKCdsb2dvdXQnKVxuIC5kZXNjcmlwdGlvbignbG9nb3V0IGZyb20gVG9vbGJlYW0nKVxuIC5hY3Rpb24oKCkgPT4gbG9nb3V0KHN0b3JlKSk7XG5cbnByb2dyYW1cbiAuY29tbWFuZCgnd2hvYW1pJylcbiAuZGVzY3JpcHRpb24oJ3dobyBhbSBpJylcbiAuYWN0aW9uKCgpID0+IHJlcXVpcmVMb2dpbigoKSA9PiB3aG9hbWkoc3RvcmUpKSk7XG5cbi8vIFByb2plY3QgQ29tbWFuZHNcbnByb2dyYW1cbiAuY29tbWFuZCgnaW5pdCA8dXJsPicpXG4gLmRlc2NyaXB0aW9uKCdpbml0aWFsaXplIHByb2plY3QnKVxuIC5hY3Rpb24odXJsID0+IHJlcXVpcmVMb2dpbigoKSA9PiBpbml0KHN0b3JlLCB1cmwpKSk7XG5cbnByb2dyYW1cbiAuY29tbWFuZCgnbHMnKVxuIC5kZXNjcmlwdGlvbignbGlzdCBvZiB5b3VyIHRvb2xzJylcbiAuYWN0aW9uKCgpID0+IHJlcXVpcmVMb2dpbigoKSA9PiBsaXN0KHN0b3JlKSkpO1xuXG5wcm9ncmFtXG4gLmNvbW1hbmQoJ3B1bGwnKVxuIC5kZXNjcmlwdGlvbigncHVsbCBzcGVjIGZyb20gVG9vbGJlYW0nKVxuIC5hY3Rpb24oKCkgPT4gcmVxdWlyZUxvZ2luKCgpID0+IHB1bGwoc3RvcmUpKSk7XG5cbnByb2dyYW1cbiAuY29tbWFuZCgncHVzaCA8ZmlsZT4nKVxuIC5kZXNjcmlwdGlvbigncHVzaCBhIHNwZWMgdG8gVG9vbGJlYW0nKVxuIC5hY3Rpb24oZmlsZSA9PiByZXF1aXJlTG9naW4oKCkgPT4gcHVzaChzdG9yZSwgZmlsZSkpKTtcblxucHJvZ3JhbS5wYXJzZShwcm9jZXNzLmFyZ3YpO1xuXG4vKlxucHJvZ3JhbVxuIC5jb21tYW5kKCdleGVjIDxjbWQ+JylcbiAuZGVzY3JpcHRpb24oJ3J1biB0aGUgZ2l2ZW4gcmVtb3RlIGNvbW1hbmQnKVxuIC5hY3Rpb24oZnVuY3Rpb24oY21kKSB7XG5cdCBjb25zb2xlLmxvZygnZXhlYyBcIiVzXCInLCBjbWQpO1xuIH0pO1xuXG5wcm9ncmFtXG4gLmNvbW1hbmQoJ3RlYXJkb3duIDxkaXI+IFtvdGhlckRpcnMuLi5dJylcbiAuZGVzY3JpcHRpb24oJ3J1biB0ZWFyZG93biBjb21tYW5kcycpXG4gLmFjdGlvbihmdW5jdGlvbihkaXIsIG90aGVyRGlycykge1xuXHQgY29uc29sZS5sb2coJ2RpciBcIiVzXCInLCBkaXIpO1xuXHQgaWYgKG90aGVyRGlycykge1xuXHRcdCBvdGhlckRpcnMuZm9yRWFjaChmdW5jdGlvbiAob0Rpcikge1xuXHRcdFx0IGNvbnNvbGUubG9nKCdkaXIgXCIlc1wiJywgb0Rpcik7XG5cdFx0IH0pO1xuXHQgfVxuIH0pO1xuXG5wcm9ncmFtXG4gLmNvbW1hbmQoJyonKVxuIC5kZXNjcmlwdGlvbignZGVwbG95IHRoZSBnaXZlbiBlbnYnKVxuIC5hY3Rpb24oZnVuY3Rpb24oZW52KSB7XG5cdCBjb25zb2xlLmxvZygnZGVwbG95aW5nIFwiJXNcIicsIGVudik7XG4gfSk7XG5cbi8vY29uc29sZS5sb2coJ2NoZGlyOiAlcyBjb25maWc6ICVzICB0ZXN0czogJXMgJywgcHJvZ3JhbS5jaGRpciwgcHJvZ3JhbS5jb25maWcsIHByb2dyYW0ubm9UZXN0cyk7XG4vL1xuLy9jbGVhcigpO1xuLy9jb25zb2xlLmxvZyhcbi8vICBjaGFsay5ncmVlbihcbi8vICAgIGZpZ2xldC50ZXh0U3luYygnVG9vbGJlYW0nLCB7IGhvcml6b250YWxMYXlvdXQ6ICdmdWxsJyB9KVxuLy8gIClcbi8vKTtcbiovXG4iXX0=