'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _clui = require('clui');

var _cliTable = require('cli-table');

var _cliTable2 = _interopRequireDefault(_cliTable);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _toolsActions = require('../actions/tools-actions');

var toolsActions = _interopRequireWildcard(_toolsActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2) {
		var getState = _ref2.getState;
		var dispatch = _ref2.dispatch;
		var spinner, tools, table, toolRows;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						spinner = new _clui.Spinner('Fetching your tools…');


						spinner.start();

						// Load tools
						_context.prev = 2;
						_context.next = 5;
						return dispatch(toolsActions.load());

					case 5:
						_context.next = 12;
						break;

					case 7:
						_context.prev = 7;
						_context.t0 = _context['catch'](2);

						spinner.stop();
						console.log(_chalk2.default.red('Failed to fetch: ' + _context.t0.message));
						return _context.abrupt('return');

					case 12:

						spinner.stop();

						tools = toolsActions.getTools(getState());

						if (!(tools.length === 0)) {
							_context.next = 17;
							break;
						}

						console.log(_chalk2.default.cyan('Your tool list is empty!'));
						return _context.abrupt('return');

					case 17:
						table = new _cliTable2.default({
							colWidths: [24, 32]
						});
						toolRows = tools.map(function (tool) {
							return [colorToChalk(tool.color)(tool.name), fullURL(tool.uri)];
						});


						table.push.apply(table, (0, _toConsumableArray3.default)(toolRows));

						console.log(table.toString());

					case 21:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this, [[2, 7]]);
	}));

	return function (_x) {
		return _ref.apply(this, arguments);
	};
}();

function colorToChalk(color) {
	switch (color) {
		case 'red':
			return _chalk2.default.red;
		case 'green':
			return _chalk2.default.green;
		case 'blue':
			return _chalk2.default.cyan;
		case 'orange':
			return _chalk2.default.yellow;
		case 'purple':
			return _chalk2.default.magenta;
		default:
			return _chalk2.default.white;
	}
}

function fullURL(uri) {
	return _config2.default.webScheme + '://' + _config2.default.webHost + '/' + uri;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9saXN0LmpzIl0sIm5hbWVzIjpbInRvb2xzQWN0aW9ucyIsImdldFN0YXRlIiwiZGlzcGF0Y2giLCJzcGlubmVyIiwic3RhcnQiLCJsb2FkIiwic3RvcCIsImNvbnNvbGUiLCJsb2ciLCJyZWQiLCJtZXNzYWdlIiwidG9vbHMiLCJnZXRUb29scyIsImxlbmd0aCIsImN5YW4iLCJ0YWJsZSIsImNvbFdpZHRocyIsInRvb2xSb3dzIiwibWFwIiwiY29sb3JUb0NoYWxrIiwidG9vbCIsImNvbG9yIiwibmFtZSIsImZ1bGxVUkwiLCJ1cmkiLCJwdXNoIiwidG9TdHJpbmciLCJncmVlbiIsInllbGxvdyIsIm1hZ2VudGEiLCJ3aGl0ZSIsIndlYlNjaGVtZSIsIndlYkhvc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOztJQUFZQSxZOzs7Ozs7O3VFQUVHO0FBQUEsTUFBZ0JDLFFBQWhCLFNBQWdCQSxRQUFoQjtBQUFBLE1BQTBCQyxRQUExQixTQUEwQkEsUUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1JDLGFBRFEsR0FDRSxrQkFBWSxzQkFBWixDQURGOzs7QUFHZEEsY0FBUUMsS0FBUjs7QUFFQTtBQUxjO0FBQUE7QUFBQSxhQU9QRixTQUFTRixhQUFhSyxJQUFiLEVBQVQsQ0FQTzs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQVViRixjQUFRRyxJQUFSO0FBQ0FDLGNBQVFDLEdBQVIsQ0FBWSxnQkFBTUMsR0FBTix1QkFBOEIsWUFBRUMsT0FBaEMsQ0FBWjtBQVhhOztBQUFBOztBQWVkUCxjQUFRRyxJQUFSOztBQUVNSyxXQWpCUSxHQWlCQVgsYUFBYVksUUFBYixDQUFzQlgsVUFBdEIsQ0FqQkE7O0FBQUEsWUFtQlZVLE1BQU1FLE1BQU4sS0FBaUIsQ0FuQlA7QUFBQTtBQUFBO0FBQUE7O0FBb0JiTixjQUFRQyxHQUFSLENBQVksZ0JBQU1NLElBQU4sQ0FBVywwQkFBWCxDQUFaO0FBcEJhOztBQUFBO0FBd0JSQyxXQXhCUSxHQXdCQSx1QkFBVTtBQUN2QkMsa0JBQVcsQ0FBQyxFQUFELEVBQUssRUFBTDtBQURZLE9BQVYsQ0F4QkE7QUE0QlJDLGNBNUJRLEdBNEJHTixNQUFNTyxHQUFOLENBQVU7QUFBQSxjQUFRLENBQ2xDQyxhQUFhQyxLQUFLQyxLQUFsQixFQUF5QkQsS0FBS0UsSUFBOUIsQ0FEa0MsRUFDR0MsUUFBUUgsS0FBS0ksR0FBYixDQURILENBQVI7QUFBQSxPQUFWLENBNUJIOzs7QUFnQ2RULFlBQU1VLElBQU4sK0NBQWNSLFFBQWQ7O0FBRUFWLGNBQVFDLEdBQVIsQ0FBWU8sTUFBTVcsUUFBTixFQUFaOztBQWxDYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFOzs7Ozs7O0FBcUNmLFNBQVNQLFlBQVQsQ0FBc0JFLEtBQXRCLEVBQTZCO0FBQzVCLFNBQVFBLEtBQVI7QUFDQyxPQUFLLEtBQUw7QUFDQyxVQUFPLGdCQUFNWixHQUFiO0FBQ0QsT0FBSyxPQUFMO0FBQ0MsVUFBTyxnQkFBTWtCLEtBQWI7QUFDRCxPQUFLLE1BQUw7QUFDQyxVQUFPLGdCQUFNYixJQUFiO0FBQ0QsT0FBSyxRQUFMO0FBQ0MsVUFBTyxnQkFBTWMsTUFBYjtBQUNELE9BQUssUUFBTDtBQUNDLFVBQU8sZ0JBQU1DLE9BQWI7QUFDRDtBQUNDLFVBQU8sZ0JBQU1DLEtBQWI7QUFaRjtBQWNBOztBQUVELFNBQVNQLE9BQVQsQ0FBaUJDLEdBQWpCLEVBQXNCO0FBQ3JCLFFBQVUsaUJBQU9PLFNBQWpCLFdBQWdDLGlCQUFPQyxPQUF2QyxTQUFrRFIsR0FBbEQ7QUFDQSIsImZpbGUiOiJsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJztcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tICdjbHVpJztcbmltcG9ydCBUYWJsZSBmcm9tICdjbGktdGFibGUnO1xuXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgKiBhcyB0b29sc0FjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy90b29scy1hY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24oe2dldFN0YXRlLCBkaXNwYXRjaH0pIHtcblx0Y29uc3Qgc3Bpbm5lciA9IG5ldyBTcGlubmVyKCdGZXRjaGluZyB5b3VyIHRvb2xz4oCmJyk7XG5cblx0c3Bpbm5lci5zdGFydCgpO1xuXG5cdC8vIExvYWQgdG9vbHNcblx0dHJ5IHtcblx0XHRhd2FpdCBkaXNwYXRjaCh0b29sc0FjdGlvbnMubG9hZCgpKTtcblx0fVxuXHRjYXRjaChlKSB7XG5cdFx0c3Bpbm5lci5zdG9wKCk7XG5cdFx0Y29uc29sZS5sb2coY2hhbGsucmVkKGBGYWlsZWQgdG8gZmV0Y2g6ICR7ZS5tZXNzYWdlfWApKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRzcGlubmVyLnN0b3AoKTtcblxuXHRjb25zdCB0b29scyA9IHRvb2xzQWN0aW9ucy5nZXRUb29scyhnZXRTdGF0ZSgpKTtcblxuXHRpZiAodG9vbHMubGVuZ3RoID09PSAwKSB7XG5cdFx0Y29uc29sZS5sb2coY2hhbGsuY3lhbignWW91ciB0b29sIGxpc3QgaXMgZW1wdHkhJykpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHRhYmxlID0gbmV3IFRhYmxlKHtcblx0XHRjb2xXaWR0aHM6IFsyNCwgMzJdXG5cdH0pO1xuXG5cdGNvbnN0IHRvb2xSb3dzID0gdG9vbHMubWFwKHRvb2wgPT4gW1xuXHRcdGNvbG9yVG9DaGFsayh0b29sLmNvbG9yKSh0b29sLm5hbWUpLCBmdWxsVVJMKHRvb2wudXJpKVxuXHRdKTtcblxuXHR0YWJsZS5wdXNoKC4uLnRvb2xSb3dzKTtcblxuXHRjb25zb2xlLmxvZyh0YWJsZS50b1N0cmluZygpKTtcbn1cblxuZnVuY3Rpb24gY29sb3JUb0NoYWxrKGNvbG9yKSB7XG5cdHN3aXRjaCAoY29sb3IpIHtcblx0XHRjYXNlICdyZWQnOlxuXHRcdFx0cmV0dXJuIGNoYWxrLnJlZDtcblx0XHRjYXNlICdncmVlbic6XG5cdFx0XHRyZXR1cm4gY2hhbGsuZ3JlZW47XG5cdFx0Y2FzZSAnYmx1ZSc6XG5cdFx0XHRyZXR1cm4gY2hhbGsuY3lhbjtcblx0XHRjYXNlICdvcmFuZ2UnOlxuXHRcdFx0cmV0dXJuIGNoYWxrLnllbGxvdztcblx0XHRjYXNlICdwdXJwbGUnOlxuXHRcdFx0cmV0dXJuIGNoYWxrLm1hZ2VudGE7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBjaGFsay53aGl0ZTtcblx0fVxufVxuXG5mdW5jdGlvbiBmdWxsVVJMKHVyaSkge1xuXHRyZXR1cm4gYCR7Y29uZmlnLndlYlNjaGVtZX06Ly8ke2NvbmZpZy53ZWJIb3N0fS8ke3VyaX1gO1xufVxuIl19