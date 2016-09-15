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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcHRpb25zL2xvZ291dC5qcyJdLCJuYW1lcyI6WyJ1c2VyQWN0aW9ucyIsImxvZ291dE1lc3NhZ2UiLCJzdG9yZSIsImRpc3BhdGNoIiwibG9hZCIsImlzTG9nZ2VkSW4iLCJnZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJjeWFuIiwic3Bpbm5lciIsInN0YXJ0IiwibG9nb3V0Iiwic3RvcCIsInJlZCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFFQTs7SUFBWUEsVzs7Ozs7O0FBRVosSUFBTUMsZ0JBQWdCLGlDQUF0Qjs7O3VFQUVlLGlCQUFlQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFZEEsWUFBTUMsUUFBTixDQUFlSCxZQUFZSSxJQUFaLEVBQWY7O0FBRmMsVUFJUEosWUFBWUssVUFBWixDQUF1QkgsTUFBTUksUUFBTixFQUF2QixDQUpPO0FBQUE7QUFBQTtBQUFBOztBQUtiQyxjQUFRQyxHQUFSLENBQVksZ0JBQU1DLElBQU4sQ0FBV1IsYUFBWCxDQUFaO0FBTGE7O0FBQUE7QUFTUlMsYUFUUSxHQVNFLGtCQUFZLDBCQUFaLENBVEY7O0FBVWRBLGNBQVFDLEtBQVI7O0FBVmM7QUFBQTtBQUFBLGFBYVBULE1BQU1DLFFBQU4sQ0FBZUgsWUFBWVksTUFBWixFQUFmLENBYk87O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFnQmJGLGNBQVFHLElBQVI7QUFDQU4sY0FBUUMsR0FBUixDQUFZLGdCQUFNTSxHQUFOLHFCQUE0QixZQUFFQyxPQUE5QixDQUFaO0FBakJhOztBQUFBOztBQXFCZEwsY0FBUUcsSUFBUjtBQUNBTixjQUFRQyxHQUFSLENBQVksZ0JBQU1DLElBQU4sQ0FBV1IsYUFBWCxDQUFaOztBQXRCYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFIiwiZmlsZSI6ImxvZ291dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjaGFsayBmcm9tICdjaGFsayc7XG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSAnY2x1aSc7XG5cbmltcG9ydCAqIGFzIHVzZXJBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvdXNlci1hY3Rpb25zJztcblxuY29uc3QgbG9nb3V0TWVzc2FnZSA9ICdZb3UgYXJlIGxvZ2dlZCBvdXQgb2YgVG9vbGJlYW0uJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24oc3RvcmUpIHtcblxuXHRzdG9yZS5kaXNwYXRjaCh1c2VyQWN0aW9ucy5sb2FkKCkpO1xuXG5cdGlmICggISB1c2VyQWN0aW9ucy5pc0xvZ2dlZEluKHN0b3JlLmdldFN0YXRlKCkpKSB7XG5cdFx0Y29uc29sZS5sb2coY2hhbGsuY3lhbihsb2dvdXRNZXNzYWdlKSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgc3Bpbm5lciA9IG5ldyBTcGlubmVyKCdMb2dnaW5nIG91dCBvZiBUb29sYmVhbeKApicpO1xuXHRzcGlubmVyLnN0YXJ0KCk7XG5cblx0dHJ5IHtcblx0XHRhd2FpdCBzdG9yZS5kaXNwYXRjaCh1c2VyQWN0aW9ucy5sb2dvdXQoKSk7XG5cdH1cblx0Y2F0Y2goZSkge1xuXHRcdHNwaW5uZXIuc3RvcCgpO1xuXHRcdGNvbnNvbGUubG9nKGNoYWxrLnJlZChgTG9nb3V0IGZhaWxlZDogJHtlLm1lc3NhZ2V9YCkpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHNwaW5uZXIuc3RvcCgpO1xuXHRjb25zb2xlLmxvZyhjaGFsay5jeWFuKGxvZ291dE1lc3NhZ2UpKTtcblxufVxuIl19