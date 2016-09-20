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

var _specsActions = require('../actions/specs-actions');

var specsActions = _interopRequireWildcard(_specsActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2) {
		var getState = _ref2.getState;
		var dispatch = _ref2.dispatch;
		var spinner, projects, table, projectRows;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						spinner = new _clui.Spinner('Fetching your projects…');


						spinner.start();

						// Load projects
						_context.prev = 2;
						_context.next = 5;
						return dispatch(specsActions.load());

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

						projects = specsActions.getSpecs(getState());

						if (!(projects.length === 0)) {
							_context.next = 17;
							break;
						}

						console.log(_chalk2.default.cyan('Your project list is empty!'));
						return _context.abrupt('return');

					case 17:
						table = new _cliTable2.default({
							colWidths: [24, 35]
						});
						projectRows = projects.map(function (project) {
							return [project.name, project.uuid];
						});


						table.push.apply(table, [["Project", "Project ID"]].concat((0, _toConsumableArray3.default)(projectRows)));

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9wcm9qZWN0cy5qcyJdLCJuYW1lcyI6WyJzcGVjc0FjdGlvbnMiLCJnZXRTdGF0ZSIsImRpc3BhdGNoIiwic3Bpbm5lciIsInN0YXJ0IiwibG9hZCIsInN0b3AiLCJjb25zb2xlIiwibG9nIiwicmVkIiwibWVzc2FnZSIsInByb2plY3RzIiwiZ2V0U3BlY3MiLCJsZW5ndGgiLCJjeWFuIiwidGFibGUiLCJjb2xXaWR0aHMiLCJwcm9qZWN0Um93cyIsIm1hcCIsInByb2plY3QiLCJuYW1lIiwidXVpZCIsInB1c2giLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7O0lBQVlBLFk7Ozs7Ozs7dUVBRUc7QUFBQSxNQUFnQkMsUUFBaEIsU0FBZ0JBLFFBQWhCO0FBQUEsTUFBMEJDLFFBQTFCLFNBQTBCQSxRQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUkMsYUFEUSxHQUNFLGtCQUFZLHlCQUFaLENBREY7OztBQUdkQSxjQUFRQyxLQUFSOztBQUVBO0FBTGM7QUFBQTtBQUFBLGFBT1BGLFNBQVNGLGFBQWFLLElBQWIsRUFBVCxDQVBPOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBVWJGLGNBQVFHLElBQVI7QUFDQUMsY0FBUUMsR0FBUixDQUFZLGdCQUFNQyxHQUFOLHVCQUE4QixZQUFFQyxPQUFoQyxDQUFaO0FBWGE7O0FBQUE7O0FBZWRQLGNBQVFHLElBQVI7O0FBRU1LLGNBakJRLEdBaUJHWCxhQUFhWSxRQUFiLENBQXNCWCxVQUF0QixDQWpCSDs7QUFBQSxZQW1CVlUsU0FBU0UsTUFBVCxLQUFvQixDQW5CVjtBQUFBO0FBQUE7QUFBQTs7QUFvQmJOLGNBQVFDLEdBQVIsQ0FBWSxnQkFBTU0sSUFBTixDQUFXLDZCQUFYLENBQVo7QUFwQmE7O0FBQUE7QUF3QlJDLFdBeEJRLEdBd0JBLHVCQUFVO0FBQ3ZCQyxrQkFBVyxDQUFDLEVBQUQsRUFBSyxFQUFMO0FBRFksT0FBVixDQXhCQTtBQTRCUkMsaUJBNUJRLEdBNEJNTixTQUFTTyxHQUFULENBQWE7QUFBQSxjQUFXLENBQzNDQyxRQUFRQyxJQURtQyxFQUM3QkQsUUFBUUUsSUFEcUIsQ0FBWDtBQUFBLE9BQWIsQ0E1Qk47OztBQWdDZE4sWUFBTU8sSUFBTixlQUFXLENBQUMsU0FBRCxFQUFZLFlBQVosQ0FBWCwwQ0FBeUNMLFdBQXpDOztBQUVBVixjQUFRQyxHQUFSLENBQVlPLE1BQU1RLFFBQU4sRUFBWjs7QUFsQ2M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRSIsImZpbGUiOiJwcm9qZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjaGFsayBmcm9tICdjaGFsayc7XG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSAnY2x1aSc7XG5pbXBvcnQgVGFibGUgZnJvbSAnY2xpLXRhYmxlJztcblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0ICogYXMgc3BlY3NBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvc3BlY3MtYWN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uKHtnZXRTdGF0ZSwgZGlzcGF0Y2h9KSB7XG5cdGNvbnN0IHNwaW5uZXIgPSBuZXcgU3Bpbm5lcignRmV0Y2hpbmcgeW91ciBwcm9qZWN0c+KApicpO1xuXG5cdHNwaW5uZXIuc3RhcnQoKTtcblxuXHQvLyBMb2FkIHByb2plY3RzXG5cdHRyeSB7XG5cdFx0YXdhaXQgZGlzcGF0Y2goc3BlY3NBY3Rpb25zLmxvYWQoKSk7XG5cdH1cblx0Y2F0Y2goZSkge1xuXHRcdHNwaW5uZXIuc3RvcCgpO1xuXHRcdGNvbnNvbGUubG9nKGNoYWxrLnJlZChgRmFpbGVkIHRvIGZldGNoOiAke2UubWVzc2FnZX1gKSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0c3Bpbm5lci5zdG9wKCk7XG5cblx0Y29uc3QgcHJvamVjdHMgPSBzcGVjc0FjdGlvbnMuZ2V0U3BlY3MoZ2V0U3RhdGUoKSk7XG5cblx0aWYgKHByb2plY3RzLmxlbmd0aCA9PT0gMCkge1xuXHRcdGNvbnNvbGUubG9nKGNoYWxrLmN5YW4oJ1lvdXIgcHJvamVjdCBsaXN0IGlzIGVtcHR5IScpKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB0YWJsZSA9IG5ldyBUYWJsZSh7XG5cdFx0Y29sV2lkdGhzOiBbMjQsIDM1XVxuXHR9KTtcblxuXHRjb25zdCBwcm9qZWN0Um93cyA9IHByb2plY3RzLm1hcChwcm9qZWN0ID0+IFtcblx0XHRwcm9qZWN0Lm5hbWUsIHByb2plY3QudXVpZFxuXHRdKTtcblxuXHR0YWJsZS5wdXNoKFtcIlByb2plY3RcIiwgXCJQcm9qZWN0IElEXCJdLCAuLi5wcm9qZWN0Um93cyk7XG5cblx0Y29uc29sZS5sb2codGFibGUudG9TdHJpbmcoKSk7XG59XG4iXX0=