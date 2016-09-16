'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _clui = require('clui');

var _file = require('../libs/file');

var _specActions = require('../actions/spec-actions');

var specActions = _interopRequireWildcard(_specActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fileName = 'spec.json';

exports.default = function () {
	var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2) {
		var getState = _ref2.getState;
		var dispatch = _ref2.dispatch;
		var spinner;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						spinner = new _clui.Spinner('Pulling spec…');


						spinner.start();

						// Load spec info & data
						_context.prev = 2;
						_context.next = 5;
						return dispatch(specActions.loadInfo());

					case 5:
						_context.next = 7;
						return dispatch(specActions.load(specActions.getSpecFileLink(getState())));

					case 7:
						_context.next = 14;
						break;

					case 9:
						_context.prev = 9;
						_context.t0 = _context['catch'](2);

						spinner.stop();
						console.log(_chalk2.default.red('Pull failed: ' + _context.t0.message));
						return _context.abrupt('return');

					case 14:
						_context.prev = 14;
						_context.next = 17;
						return (0, _file.writeFile)(fileName, specActions.getData(getState()));

					case 17:
						_context.next = 24;
						break;

					case 19:
						_context.prev = 19;
						_context.t1 = _context['catch'](14);

						console.log(_chalk2.default.red(_context.t1));
						spinner.stop();
						return _context.abrupt('return');

					case 24:

						spinner.stop();
						console.log(_chalk2.default.cyan('Pulled ' + fileName + ' from Toolbeam.'));

					case 26:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this, [[2, 9], [14, 19]]);
	}));

	return function (_x) {
		return _ref.apply(this, arguments);
	};
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9wdWxsLmpzIl0sIm5hbWVzIjpbInNwZWNBY3Rpb25zIiwiZmlsZU5hbWUiLCJnZXRTdGF0ZSIsImRpc3BhdGNoIiwic3Bpbm5lciIsInN0YXJ0IiwibG9hZEluZm8iLCJsb2FkIiwiZ2V0U3BlY0ZpbGVMaW5rIiwic3RvcCIsImNvbnNvbGUiLCJsb2ciLCJyZWQiLCJtZXNzYWdlIiwiZ2V0RGF0YSIsImN5YW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFFQTs7QUFDQTs7SUFBWUEsVzs7Ozs7O0FBRVosSUFBTUMsV0FBVyxXQUFqQjs7O3VFQUVlO0FBQUEsTUFBZ0JDLFFBQWhCLFNBQWdCQSxRQUFoQjtBQUFBLE1BQTBCQyxRQUExQixTQUEwQkEsUUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1JDLGFBRFEsR0FDRSxrQkFBWSxlQUFaLENBREY7OztBQUdkQSxjQUFRQyxLQUFSOztBQUVBO0FBTGM7QUFBQTtBQUFBLGFBT1BGLFNBQVNILFlBQVlNLFFBQVosRUFBVCxDQVBPOztBQUFBO0FBQUE7QUFBQSxhQVFQSCxTQUFTSCxZQUFZTyxJQUFaLENBQWlCUCxZQUFZUSxlQUFaLENBQTRCTixVQUE1QixDQUFqQixDQUFULENBUk87O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFXYkUsY0FBUUssSUFBUjtBQUNBQyxjQUFRQyxHQUFSLENBQVksZ0JBQU1DLEdBQU4sbUJBQTBCLFlBQUVDLE9BQTVCLENBQVo7QUFaYTs7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWtCUCxxQkFBVVosUUFBVixFQUFvQkQsWUFBWWMsT0FBWixDQUFvQlosVUFBcEIsQ0FBcEIsQ0FsQk87O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFxQmJRLGNBQVFDLEdBQVIsQ0FBWSxnQkFBTUMsR0FBTixhQUFaO0FBQ0FSLGNBQVFLLElBQVI7QUF0QmE7O0FBQUE7O0FBMEJkTCxjQUFRSyxJQUFSO0FBQ0FDLGNBQVFDLEdBQVIsQ0FBWSxnQkFBTUksSUFBTixhQUFxQmQsUUFBckIscUJBQVo7O0FBM0JjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEUiLCJmaWxlIjoicHVsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjaGFsayBmcm9tICdjaGFsayc7XG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSAnY2x1aSc7XG5cbmltcG9ydCB7IHdyaXRlRmlsZSB9IGZyb20gJy4uL2xpYnMvZmlsZSc7XG5pbXBvcnQgKiBhcyBzcGVjQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL3NwZWMtYWN0aW9ucyc7XG5cbmNvbnN0IGZpbGVOYW1lID0gJ3NwZWMuanNvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uKHtnZXRTdGF0ZSwgZGlzcGF0Y2h9KSB7XG5cdGNvbnN0IHNwaW5uZXIgPSBuZXcgU3Bpbm5lcignUHVsbGluZyBzcGVj4oCmJyk7XG5cblx0c3Bpbm5lci5zdGFydCgpO1xuXG5cdC8vIExvYWQgc3BlYyBpbmZvICYgZGF0YVxuXHR0cnkge1xuXHRcdGF3YWl0IGRpc3BhdGNoKHNwZWNBY3Rpb25zLmxvYWRJbmZvKCkpO1xuXHRcdGF3YWl0IGRpc3BhdGNoKHNwZWNBY3Rpb25zLmxvYWQoc3BlY0FjdGlvbnMuZ2V0U3BlY0ZpbGVMaW5rKGdldFN0YXRlKCkpKSk7XG5cdH1cblx0Y2F0Y2goZSkge1xuXHRcdHNwaW5uZXIuc3RvcCgpO1xuXHRcdGNvbnNvbGUubG9nKGNoYWxrLnJlZChgUHVsbCBmYWlsZWQ6ICR7ZS5tZXNzYWdlfWApKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBXcml0ZSBmaWxlXG5cdHRyeSB7XG5cdFx0YXdhaXQgd3JpdGVGaWxlKGZpbGVOYW1lLCBzcGVjQWN0aW9ucy5nZXREYXRhKGdldFN0YXRlKCkpKTtcblx0fVxuXHRjYXRjaChlKSB7XG5cdFx0Y29uc29sZS5sb2coY2hhbGsucmVkKGUpKTtcblx0XHRzcGlubmVyLnN0b3AoKTtcblx0XHRyZXR1cm47XG5cdH1cblx0XG5cdHNwaW5uZXIuc3RvcCgpO1xuXHRjb25zb2xlLmxvZyhjaGFsay5jeWFuKGBQdWxsZWQgJHtmaWxlTmFtZX0gZnJvbSBUb29sYmVhbS5gKSk7XG59XG4iXX0=