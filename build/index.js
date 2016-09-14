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

_commander2.default.version(_package2.default.version)
/*.option('-C, --chdir <path>', 'change the working directory')
.option('-c, --config <path>', 'set config path. defaults to ./deploy.conf')*/;

_commander2.default.command('login').description('login to Toolbeam').action(function () {
  return (0, _options.login)(_store2.default);
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

_commander2.default.command('logout').description('logout from Toolbeam').action(function () {
  return (0, _options.logout)(_store2.default);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiaW5zdGFsbCIsInByb2Nlc3MiLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJzdGFjayIsImV4aXQiLCJyZXF1aXJlTG9naW4iLCJ2ZXJzaW9uIiwiY29tbWFuZCIsImRlc2NyaXB0aW9uIiwiYWN0aW9uIiwiZmlsZSIsInBhcnNlIiwiYXJndiJdLCJtYXBwaW5ncyI6Ijs7QUFXQTs7OztBQUVBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBU0E7Ozs7QUFDQTs7Ozs7O0FBMUJBO0FBQ0FBLFFBQVEsb0JBQVIsRUFBOEJDLE9BQTlCOztBQUVBO0FBQ0FDLFFBQVFDLEVBQVIsQ0FBVyxvQkFBWCxFQUFpQyxlQUFPO0FBQ3BDQyxVQUFRQyxHQUFSLENBQVlDLElBQUlDLEtBQWhCO0FBQ0FMLFVBQVFNLElBQVIsQ0FBYSxDQUFiO0FBQ0gsQ0FIRDs7QUF3QkEsSUFBTUMsZUFBZSw0Q0FBckI7O0FBRUEsb0JBQ0lDLE9BREosQ0FDWSxrQkFBUUEsT0FEcEI7QUFFRzs4RUFGSDs7QUFLQSxvQkFDRUMsT0FERixDQUNVLE9BRFYsRUFFRUMsV0FGRixDQUVjLG1CQUZkLEVBR0VDLE1BSEYsQ0FHUztBQUFBLFNBQU0sb0NBQU47QUFBQSxDQUhUOztBQUtBLG9CQUNFRixPQURGLENBQ1UsSUFEVixFQUVFQyxXQUZGLENBRWMsb0JBRmQsRUFHRUMsTUFIRixDQUdTO0FBQUEsU0FBTUosYUFBYTtBQUFBLFdBQU0sbUNBQU47QUFBQSxHQUFiLENBQU47QUFBQSxDQUhUOztBQUtBLG9CQUNFRSxPQURGLENBQ1UsTUFEVixFQUVFQyxXQUZGLENBRWMseUJBRmQsRUFHRUMsTUFIRixDQUdTO0FBQUEsU0FBTUosYUFBYTtBQUFBLFdBQU0sbUNBQU47QUFBQSxHQUFiLENBQU47QUFBQSxDQUhUOztBQUtBLG9CQUNFRSxPQURGLENBQ1UsYUFEVixFQUVFQyxXQUZGLENBRWMseUJBRmQsRUFHRUMsTUFIRixDQUdTO0FBQUEsU0FBUUosYUFBYTtBQUFBLFdBQU0sb0NBQVlLLElBQVosQ0FBTjtBQUFBLEdBQWIsQ0FBUjtBQUFBLENBSFQ7O0FBS0Esb0JBQ0VILE9BREYsQ0FDVSxRQURWLEVBRUVDLFdBRkYsQ0FFYyxzQkFGZCxFQUdFQyxNQUhGLENBR1M7QUFBQSxTQUFNLHFDQUFOO0FBQUEsQ0FIVDs7QUFLQSxvQkFBUUUsS0FBUixDQUFjYixRQUFRYyxJQUF0Qjs7QUFFQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4vLyBTdXBwb3J0IHNvdXJjZSBtYXAgb3V0cHV0c1xucmVxdWlyZSgnc291cmNlLW1hcC1zdXBwb3J0JykuaW5zdGFsbCgpO1xuXG4vLyBQcmludCBhbGwgdW5oYW5kbGVkIGVycm9yc1xucHJvY2Vzcy5vbigndW5oYW5kbGVkUmVqZWN0aW9uJywgZXJyID0+IHtcbiAgICBjb25zb2xlLmxvZyhlcnIuc3RhY2spO1xuICAgIHByb2Nlc3MuZXhpdCgxKTtcbn0pO1xuXG5pbXBvcnQgcGtnSnNvbiBmcm9tICcuLi9wYWNrYWdlLmpzb24nO1xuXG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcbmltcG9ydCBjaGFsayBmcm9tICdjaGFsayc7XG5pbXBvcnQgZmlnbGV0IGZyb20gJ2ZpZ2xldCc7XG5pbXBvcnQgY2xlYXIgZnJvbSAnY2xlYXInO1xuaW1wb3J0IF9yZXF1aXJlTG9naW4gZnJvbSAnLi9saWJzL3JlcXVpcmUtbG9naW4nO1xuaW1wb3J0IHtcblx0bGlzdCxcblx0bG9naW4sXG5cdGxvZ291dCxcblx0cHVsbCxcblx0cHVzaCxcbn0gZnJvbSAnLi9vcHRpb25zJztcblxuXG5pbXBvcnQgcHJvZ3JhbSBmcm9tICdjb21tYW5kZXInO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnO1xuXG5jb25zdCByZXF1aXJlTG9naW4gPSBfcmVxdWlyZUxvZ2luKHN0b3JlKTtcblxucHJvZ3JhbVxuICAgLnZlcnNpb24ocGtnSnNvbi52ZXJzaW9uKVxuICAgLyoub3B0aW9uKCctQywgLS1jaGRpciA8cGF0aD4nLCAnY2hhbmdlIHRoZSB3b3JraW5nIGRpcmVjdG9yeScpXG4gICAub3B0aW9uKCctYywgLS1jb25maWcgPHBhdGg+JywgJ3NldCBjb25maWcgcGF0aC4gZGVmYXVsdHMgdG8gLi9kZXBsb3kuY29uZicpKi87XG5cbnByb2dyYW1cbiAuY29tbWFuZCgnbG9naW4nKVxuIC5kZXNjcmlwdGlvbignbG9naW4gdG8gVG9vbGJlYW0nKVxuIC5hY3Rpb24oKCkgPT4gbG9naW4oc3RvcmUpKTtcblxucHJvZ3JhbVxuIC5jb21tYW5kKCdscycpXG4gLmRlc2NyaXB0aW9uKCdsaXN0IG9mIHlvdXIgdG9vbHMnKVxuIC5hY3Rpb24oKCkgPT4gcmVxdWlyZUxvZ2luKCgpID0+IGxpc3Qoc3RvcmUpKSk7XG5cbnByb2dyYW1cbiAuY29tbWFuZCgncHVsbCcpXG4gLmRlc2NyaXB0aW9uKCdwdWxsIHNwZWMgZnJvbSBUb29sYmVhbScpXG4gLmFjdGlvbigoKSA9PiByZXF1aXJlTG9naW4oKCkgPT4gcHVsbChzdG9yZSkpKTtcblxucHJvZ3JhbVxuIC5jb21tYW5kKCdwdXNoIDxmaWxlPicpXG4gLmRlc2NyaXB0aW9uKCdwdXNoIGEgc3BlYyB0byBUb29sYmVhbScpXG4gLmFjdGlvbihmaWxlID0+IHJlcXVpcmVMb2dpbigoKSA9PiBwdXNoKHN0b3JlLCBmaWxlKSkpO1xuXG5wcm9ncmFtXG4gLmNvbW1hbmQoJ2xvZ291dCcpXG4gLmRlc2NyaXB0aW9uKCdsb2dvdXQgZnJvbSBUb29sYmVhbScpXG4gLmFjdGlvbigoKSA9PiBsb2dvdXQoc3RvcmUpKTtcblxucHJvZ3JhbS5wYXJzZShwcm9jZXNzLmFyZ3YpO1xuXG4vKlxucHJvZ3JhbVxuIC5jb21tYW5kKCdleGVjIDxjbWQ+JylcbiAuZGVzY3JpcHRpb24oJ3J1biB0aGUgZ2l2ZW4gcmVtb3RlIGNvbW1hbmQnKVxuIC5hY3Rpb24oZnVuY3Rpb24oY21kKSB7XG5cdCBjb25zb2xlLmxvZygnZXhlYyBcIiVzXCInLCBjbWQpO1xuIH0pO1xuXG5wcm9ncmFtXG4gLmNvbW1hbmQoJ3RlYXJkb3duIDxkaXI+IFtvdGhlckRpcnMuLi5dJylcbiAuZGVzY3JpcHRpb24oJ3J1biB0ZWFyZG93biBjb21tYW5kcycpXG4gLmFjdGlvbihmdW5jdGlvbihkaXIsIG90aGVyRGlycykge1xuXHQgY29uc29sZS5sb2coJ2RpciBcIiVzXCInLCBkaXIpO1xuXHQgaWYgKG90aGVyRGlycykge1xuXHRcdCBvdGhlckRpcnMuZm9yRWFjaChmdW5jdGlvbiAob0Rpcikge1xuXHRcdFx0IGNvbnNvbGUubG9nKCdkaXIgXCIlc1wiJywgb0Rpcik7XG5cdFx0IH0pO1xuXHQgfVxuIH0pO1xuXG5wcm9ncmFtXG4gLmNvbW1hbmQoJyonKVxuIC5kZXNjcmlwdGlvbignZGVwbG95IHRoZSBnaXZlbiBlbnYnKVxuIC5hY3Rpb24oZnVuY3Rpb24oZW52KSB7XG5cdCBjb25zb2xlLmxvZygnZGVwbG95aW5nIFwiJXNcIicsIGVudik7XG4gfSk7XG5cbi8vY29uc29sZS5sb2coJ2NoZGlyOiAlcyBjb25maWc6ICVzICB0ZXN0czogJXMgJywgcHJvZ3JhbS5jaGRpciwgcHJvZ3JhbS5jb25maWcsIHByb2dyYW0ubm9UZXN0cyk7XG4vL1xuLy9jbGVhcigpO1xuLy9jb25zb2xlLmxvZyhcbi8vICBjaGFsay5ncmVlbihcbi8vICAgIGZpZ2xldC50ZXh0U3luYygnVG9vbGJlYW0nLCB7IGhvcml6b250YWxMYXlvdXQ6ICdmdWxsJyB9KVxuLy8gIClcbi8vKTtcbiovXG4iXX0=