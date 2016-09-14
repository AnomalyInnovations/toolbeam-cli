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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcHRpb25zL2xpc3QuanMiXSwibmFtZXMiOlsidG9vbHNBY3Rpb25zIiwiZ2V0U3RhdGUiLCJkaXNwYXRjaCIsInNwaW5uZXIiLCJzdGFydCIsImxvYWQiLCJzdG9wIiwiY29uc29sZSIsImxvZyIsInJlZCIsIm1lc3NhZ2UiLCJ0b29scyIsImdldFRvb2xzIiwibGVuZ3RoIiwiY3lhbiIsInRhYmxlIiwiY29sV2lkdGhzIiwidG9vbFJvd3MiLCJtYXAiLCJjb2xvclRvQ2hhbGsiLCJ0b29sIiwiY29sb3IiLCJuYW1lIiwiZnVsbFVSTCIsInVyaSIsInB1c2giLCJ0b1N0cmluZyIsImdyZWVuIiwieWVsbG93IiwibWFnZW50YSIsIndoaXRlIiwid2ViU2NoZW1lIiwid2ViSG9zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7O0lBQVlBLFk7Ozs7Ozs7dUVBRUc7QUFBQSxNQUFnQkMsUUFBaEIsU0FBZ0JBLFFBQWhCO0FBQUEsTUFBMEJDLFFBQTFCLFNBQTBCQSxRQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUkMsYUFEUSxHQUNFLGtCQUFZLHNCQUFaLENBREY7OztBQUdkQSxjQUFRQyxLQUFSOztBQUVBO0FBTGM7QUFBQTtBQUFBLGFBT1BGLFNBQVNGLGFBQWFLLElBQWIsRUFBVCxDQVBPOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBVWJGLGNBQVFHLElBQVI7QUFDQUMsY0FBUUMsR0FBUixDQUFZLGdCQUFNQyxHQUFOLHVCQUE4QixZQUFFQyxPQUFoQyxDQUFaO0FBWGE7O0FBQUE7O0FBZWRQLGNBQVFHLElBQVI7O0FBRU1LLFdBakJRLEdBaUJBWCxhQUFhWSxRQUFiLENBQXNCWCxVQUF0QixDQWpCQTs7QUFBQSxZQW1CVlUsTUFBTUUsTUFBTixLQUFpQixDQW5CUDtBQUFBO0FBQUE7QUFBQTs7QUFvQmJOLGNBQVFDLEdBQVIsQ0FBWSxnQkFBTU0sSUFBTixDQUFXLDBCQUFYLENBQVo7QUFwQmE7O0FBQUE7QUF3QlJDLFdBeEJRLEdBd0JBLHVCQUFVO0FBQ3ZCQyxrQkFBVyxDQUFDLEVBQUQsRUFBSyxFQUFMO0FBRFksT0FBVixDQXhCQTtBQTRCUkMsY0E1QlEsR0E0QkdOLE1BQU1PLEdBQU4sQ0FBVTtBQUFBLGNBQVEsQ0FDbENDLGFBQWFDLEtBQUtDLEtBQWxCLEVBQXlCRCxLQUFLRSxJQUE5QixDQURrQyxFQUNHQyxRQUFRSCxLQUFLSSxHQUFiLENBREgsQ0FBUjtBQUFBLE9BQVYsQ0E1Qkg7OztBQWdDZFQsWUFBTVUsSUFBTiwrQ0FBY1IsUUFBZDs7QUFFQVYsY0FBUUMsR0FBUixDQUFZTyxNQUFNVyxRQUFOLEVBQVo7O0FBbENjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEU7Ozs7Ozs7QUFxQ2YsU0FBU1AsWUFBVCxDQUFzQkUsS0FBdEIsRUFBNkI7QUFDNUIsU0FBUUEsS0FBUjtBQUNDLE9BQUssS0FBTDtBQUNDLFVBQU8sZ0JBQU1aLEdBQWI7QUFDRCxPQUFLLE9BQUw7QUFDQyxVQUFPLGdCQUFNa0IsS0FBYjtBQUNELE9BQUssTUFBTDtBQUNDLFVBQU8sZ0JBQU1iLElBQWI7QUFDRCxPQUFLLFFBQUw7QUFDQyxVQUFPLGdCQUFNYyxNQUFiO0FBQ0QsT0FBSyxRQUFMO0FBQ0MsVUFBTyxnQkFBTUMsT0FBYjtBQUNEO0FBQ0MsVUFBTyxnQkFBTUMsS0FBYjtBQVpGO0FBY0E7O0FBRUQsU0FBU1AsT0FBVCxDQUFpQkMsR0FBakIsRUFBc0I7QUFDckIsUUFBVSxpQkFBT08sU0FBakIsV0FBZ0MsaUJBQU9DLE9BQXZDLFNBQWtEUixHQUFsRDtBQUNBIiwiZmlsZSI6Imxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnO1xuaW1wb3J0IHsgU3Bpbm5lciB9IGZyb20gJ2NsdWknO1xuaW1wb3J0IFRhYmxlIGZyb20gJ2NsaS10YWJsZSc7XG5cbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCAqIGFzIHRvb2xzQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL3Rvb2xzLWFjdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbih7Z2V0U3RhdGUsIGRpc3BhdGNofSkge1xuXHRjb25zdCBzcGlubmVyID0gbmV3IFNwaW5uZXIoJ0ZldGNoaW5nIHlvdXIgdG9vbHPigKYnKTtcblxuXHRzcGlubmVyLnN0YXJ0KCk7XG5cblx0Ly8gTG9hZCB0b29sc1xuXHR0cnkge1xuXHRcdGF3YWl0IGRpc3BhdGNoKHRvb2xzQWN0aW9ucy5sb2FkKCkpO1xuXHR9XG5cdGNhdGNoKGUpIHtcblx0XHRzcGlubmVyLnN0b3AoKTtcblx0XHRjb25zb2xlLmxvZyhjaGFsay5yZWQoYEZhaWxlZCB0byBmZXRjaDogJHtlLm1lc3NhZ2V9YCkpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHNwaW5uZXIuc3RvcCgpO1xuXG5cdGNvbnN0IHRvb2xzID0gdG9vbHNBY3Rpb25zLmdldFRvb2xzKGdldFN0YXRlKCkpO1xuXG5cdGlmICh0b29scy5sZW5ndGggPT09IDApIHtcblx0XHRjb25zb2xlLmxvZyhjaGFsay5jeWFuKCdZb3VyIHRvb2wgbGlzdCBpcyBlbXB0eSEnKSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgdGFibGUgPSBuZXcgVGFibGUoe1xuXHRcdGNvbFdpZHRoczogWzI0LCAzMl1cblx0fSk7XG5cblx0Y29uc3QgdG9vbFJvd3MgPSB0b29scy5tYXAodG9vbCA9PiBbXG5cdFx0Y29sb3JUb0NoYWxrKHRvb2wuY29sb3IpKHRvb2wubmFtZSksIGZ1bGxVUkwodG9vbC51cmkpXG5cdF0pO1xuXG5cdHRhYmxlLnB1c2goLi4udG9vbFJvd3MpO1xuXG5cdGNvbnNvbGUubG9nKHRhYmxlLnRvU3RyaW5nKCkpO1xufVxuXG5mdW5jdGlvbiBjb2xvclRvQ2hhbGsoY29sb3IpIHtcblx0c3dpdGNoIChjb2xvcikge1xuXHRcdGNhc2UgJ3JlZCc6XG5cdFx0XHRyZXR1cm4gY2hhbGsucmVkO1xuXHRcdGNhc2UgJ2dyZWVuJzpcblx0XHRcdHJldHVybiBjaGFsay5ncmVlbjtcblx0XHRjYXNlICdibHVlJzpcblx0XHRcdHJldHVybiBjaGFsay5jeWFuO1xuXHRcdGNhc2UgJ29yYW5nZSc6XG5cdFx0XHRyZXR1cm4gY2hhbGsueWVsbG93O1xuXHRcdGNhc2UgJ3B1cnBsZSc6XG5cdFx0XHRyZXR1cm4gY2hhbGsubWFnZW50YTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIGNoYWxrLndoaXRlO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGZ1bGxVUkwodXJpKSB7XG5cdHJldHVybiBgJHtjb25maWcud2ViU2NoZW1lfTovLyR7Y29uZmlnLndlYkhvc3R9LyR7dXJpfWA7XG59XG4iXX0=