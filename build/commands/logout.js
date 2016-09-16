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

						if (userActions.isLoggedIn(store.getState())) {
							_context.next = 4;
							break;
						}

						console.log(_chalk2.default.cyan(logoutMessage));
						return _context.abrupt('return');

					case 4:
						spinner = new _clui.Spinner('Logging out of Toolbeam…');

						spinner.start();

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

						spinner.stop();
						console.log(_chalk2.default.cyan(logoutMessage));

					case 18:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this, [[6, 11]]);
	}));

	return function (_x) {
		return _ref.apply(this, arguments);
	};
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9sb2dvdXQuanMiXSwibmFtZXMiOlsidXNlckFjdGlvbnMiLCJsb2dvdXRNZXNzYWdlIiwic3RvcmUiLCJkaXNwYXRjaCIsImxvYWQiLCJpc0xvZ2dlZEluIiwiZ2V0U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiY3lhbiIsInNwaW5uZXIiLCJzdGFydCIsImxvZ291dCIsInN0b3AiLCJyZWQiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBRUE7O0lBQVlBLFc7Ozs7OztBQUVaLElBQU1DLGdCQUFnQixpQ0FBdEI7Ozt1RUFFZSxpQkFBZUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRWRBLFlBQU1DLFFBQU4sQ0FBZUgsWUFBWUksSUFBWixFQUFmOztBQUZjLFVBSVBKLFlBQVlLLFVBQVosQ0FBdUJILE1BQU1JLFFBQU4sRUFBdkIsQ0FKTztBQUFBO0FBQUE7QUFBQTs7QUFLYkMsY0FBUUMsR0FBUixDQUFZLGdCQUFNQyxJQUFOLENBQVdSLGFBQVgsQ0FBWjtBQUxhOztBQUFBO0FBU1JTLGFBVFEsR0FTRSxrQkFBWSwwQkFBWixDQVRGOztBQVVkQSxjQUFRQyxLQUFSOztBQVZjO0FBQUE7QUFBQSxhQWFQVCxNQUFNQyxRQUFOLENBQWVILFlBQVlZLE1BQVosRUFBZixDQWJPOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBZ0JiRixjQUFRRyxJQUFSO0FBQ0FOLGNBQVFDLEdBQVIsQ0FBWSxnQkFBTU0sR0FBTixxQkFBNEIsWUFBRUMsT0FBOUIsQ0FBWjtBQWpCYTs7QUFBQTs7QUFxQmRMLGNBQVFHLElBQVI7QUFDQU4sY0FBUUMsR0FBUixDQUFZLGdCQUFNQyxJQUFOLENBQVdSLGFBQVgsQ0FBWjs7QUF0QmM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRSIsImZpbGUiOiJsb2dvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnO1xuaW1wb3J0IHsgU3Bpbm5lciB9IGZyb20gJ2NsdWknO1xuXG5pbXBvcnQgKiBhcyB1c2VyQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL3VzZXItYWN0aW9ucyc7XG5cbmNvbnN0IGxvZ291dE1lc3NhZ2UgPSAnWW91IGFyZSBsb2dnZWQgb3V0IG9mIFRvb2xiZWFtLic7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uKHN0b3JlKSB7XG5cblx0c3RvcmUuZGlzcGF0Y2godXNlckFjdGlvbnMubG9hZCgpKTtcblxuXHRpZiAoICEgdXNlckFjdGlvbnMuaXNMb2dnZWRJbihzdG9yZS5nZXRTdGF0ZSgpKSkge1xuXHRcdGNvbnNvbGUubG9nKGNoYWxrLmN5YW4obG9nb3V0TWVzc2FnZSkpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHNwaW5uZXIgPSBuZXcgU3Bpbm5lcignTG9nZ2luZyBvdXQgb2YgVG9vbGJlYW3igKYnKTtcblx0c3Bpbm5lci5zdGFydCgpO1xuXG5cdHRyeSB7XG5cdFx0YXdhaXQgc3RvcmUuZGlzcGF0Y2godXNlckFjdGlvbnMubG9nb3V0KCkpO1xuXHR9XG5cdGNhdGNoKGUpIHtcblx0XHRzcGlubmVyLnN0b3AoKTtcblx0XHRjb25zb2xlLmxvZyhjaGFsay5yZWQoYExvZ291dCBmYWlsZWQ6ICR7ZS5tZXNzYWdlfWApKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRzcGlubmVyLnN0b3AoKTtcblx0Y29uc29sZS5sb2coY2hhbGsuY3lhbihsb2dvdXRNZXNzYWdlKSk7XG5cbn1cbiJdfQ==