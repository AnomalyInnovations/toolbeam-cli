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

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _file = require('../libs/file');

var _userActions = require('../actions/user-actions');

var userActions = _interopRequireWildcard(_userActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logoutMessage = 'You are logged out of Toolbeam.';

exports.default = function () {
	var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(store) {
		var spinner;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:

						store.dispatch(userActions.load());

						// ensure not logged in

						if (userActions.isLoggedIn(store.getState())) {
							_context.next = 4;
							break;
						}

						console.log(_chalk2.default.cyan(logoutMessage));
						return _context.abrupt('return');

					case 4:
						spinner = new _clui.Spinner('Logging out of Toolbeam…');

						spinner.start();

						// log out
						_context.prev = 6;
						_context.next = 9;
						return store.dispatch(userActions.logout());

					case 9:
						_context.next = 16;
						break;

					case 11:
						_context.prev = 11;
						_context.t0 = _context['catch'](6);

						spinner.stop();
						console.log(_chalk2.default.red('Logout failed: ' + _context.t0.message));
						return _context.abrupt('return');

					case 16:
						_context.prev = 16;
						_context.next = 19;
						return (0, _file.deleteFile)(_config2.default.specFileName);

					case 19:
						_context.next = 26;
						break;

					case 21:
						_context.prev = 21;
						_context.t1 = _context['catch'](16);

						console.log(_chalk2.default.red(_context.t1));
						spinner.stop();
						return _context.abrupt('return');

					case 26:

						spinner.stop();
						console.log(_chalk2.default.cyan(logoutMessage));

					case 28:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this, [[6, 11], [16, 21]]);
	}));

	return function (_x) {
		return _ref.apply(this, arguments);
	};
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9sb2dvdXQuanMiXSwibmFtZXMiOlsidXNlckFjdGlvbnMiLCJsb2dvdXRNZXNzYWdlIiwic3RvcmUiLCJkaXNwYXRjaCIsImxvYWQiLCJpc0xvZ2dlZEluIiwiZ2V0U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiY3lhbiIsInNwaW5uZXIiLCJzdGFydCIsImxvZ291dCIsInN0b3AiLCJyZWQiLCJtZXNzYWdlIiwic3BlY0ZpbGVOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7QUFDQTs7SUFBWUEsVzs7Ozs7O0FBRVosSUFBTUMsZ0JBQWdCLGlDQUF0Qjs7O3VFQUVlLGlCQUFlQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFZEEsWUFBTUMsUUFBTixDQUFlSCxZQUFZSSxJQUFaLEVBQWY7O0FBRUE7O0FBSmMsVUFLUEosWUFBWUssVUFBWixDQUF1QkgsTUFBTUksUUFBTixFQUF2QixDQUxPO0FBQUE7QUFBQTtBQUFBOztBQU1iQyxjQUFRQyxHQUFSLENBQVksZ0JBQU1DLElBQU4sQ0FBV1IsYUFBWCxDQUFaO0FBTmE7O0FBQUE7QUFVUlMsYUFWUSxHQVVFLGtCQUFZLDBCQUFaLENBVkY7O0FBV2RBLGNBQVFDLEtBQVI7O0FBRUE7QUFiYztBQUFBO0FBQUEsYUFlUFQsTUFBTUMsUUFBTixDQUFlSCxZQUFZWSxNQUFaLEVBQWYsQ0FmTzs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQWtCYkYsY0FBUUcsSUFBUjtBQUNBTixjQUFRQyxHQUFSLENBQVksZ0JBQU1NLEdBQU4scUJBQTRCLFlBQUVDLE9BQTlCLENBQVo7QUFuQmE7O0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF5QlAsc0JBQVcsaUJBQU9DLFlBQWxCLENBekJPOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBNEJiVCxjQUFRQyxHQUFSLENBQVksZ0JBQU1NLEdBQU4sYUFBWjtBQUNBSixjQUFRRyxJQUFSO0FBN0JhOztBQUFBOztBQWlDZEgsY0FBUUcsSUFBUjtBQUNBTixjQUFRQyxHQUFSLENBQVksZ0JBQU1DLElBQU4sQ0FBV1IsYUFBWCxDQUFaOztBQWxDYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFIiwiZmlsZSI6ImxvZ291dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjaGFsayBmcm9tICdjaGFsayc7XG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSAnY2x1aSc7XG5cbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7IGRlbGV0ZUZpbGUgfSBmcm9tICcuLi9saWJzL2ZpbGUnO1xuaW1wb3J0ICogYXMgdXNlckFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy91c2VyLWFjdGlvbnMnO1xuXG5jb25zdCBsb2dvdXRNZXNzYWdlID0gJ1lvdSBhcmUgbG9nZ2VkIG91dCBvZiBUb29sYmVhbS4nO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbihzdG9yZSkge1xuXG5cdHN0b3JlLmRpc3BhdGNoKHVzZXJBY3Rpb25zLmxvYWQoKSk7XG5cblx0Ly8gZW5zdXJlIG5vdCBsb2dnZWQgaW5cblx0aWYgKCAhIHVzZXJBY3Rpb25zLmlzTG9nZ2VkSW4oc3RvcmUuZ2V0U3RhdGUoKSkpIHtcblx0XHRjb25zb2xlLmxvZyhjaGFsay5jeWFuKGxvZ291dE1lc3NhZ2UpKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBzcGlubmVyID0gbmV3IFNwaW5uZXIoJ0xvZ2dpbmcgb3V0IG9mIFRvb2xiZWFt4oCmJyk7XG5cdHNwaW5uZXIuc3RhcnQoKTtcblxuXHQvLyBsb2cgb3V0XG5cdHRyeSB7XG5cdFx0YXdhaXQgc3RvcmUuZGlzcGF0Y2godXNlckFjdGlvbnMubG9nb3V0KCkpO1xuXHR9XG5cdGNhdGNoKGUpIHtcblx0XHRzcGlubmVyLnN0b3AoKTtcblx0XHRjb25zb2xlLmxvZyhjaGFsay5yZWQoYExvZ291dCBmYWlsZWQ6ICR7ZS5tZXNzYWdlfWApKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBkZWxldGUgZmlsZVxuXHR0cnkge1xuXHRcdGF3YWl0IGRlbGV0ZUZpbGUoY29uZmlnLnNwZWNGaWxlTmFtZSk7XG5cdH1cblx0Y2F0Y2goZSkge1xuXHRcdGNvbnNvbGUubG9nKGNoYWxrLnJlZChlKSk7XG5cdFx0c3Bpbm5lci5zdG9wKCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdFxuXHRzcGlubmVyLnN0b3AoKTtcblx0Y29uc29sZS5sb2coY2hhbGsuY3lhbihsb2dvdXRNZXNzYWdlKSk7XG5cbn1cbiJdfQ==