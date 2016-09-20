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

var _urijs = require('urijs');

var _urijs2 = _interopRequireDefault(_urijs);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _file = require('../libs/file');

var _specActions = require('../actions/spec-actions');

var specActions = _interopRequireWildcard(_specActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2, url) {
		var getState = _ref2.getState;
		var dispatch = _ref2.dispatch;
		var spinner, exists, uri, scheme, host, basePath, spec;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						spinner = new _clui.Spinner('Initializing spec…');

						spinner.start();

						// ensure not init'ed
						_context.prev = 2;
						_context.next = 5;
						return (0, _file.existFile)(_config2.default.specFileName);

					case 5:
						exists = _context.sent;

						if (!exists) {
							_context.next = 10;
							break;
						}

						console.log(_chalk2.default.red('Init failed: project already exist'));
						spinner.stop();
						return _context.abrupt('return');

					case 10:
						_context.next = 17;
						break;

					case 12:
						_context.prev = 12;
						_context.t0 = _context['catch'](2);

						console.log(_chalk2.default.red(_context.t0));
						spinner.stop();
						return _context.abrupt('return');

					case 17:

						// parse url
						uri = (0, _urijs2.default)(url);
						scheme = uri.protocol();
						host = uri.host();
						basePath = uri.path();

						if (!(scheme == '' || host == '' || basePath == '')) {
							_context.next = 24;
							break;
						}

						console.log(_chalk2.default.red('Init failed: invalid url format'));
						return _context.abrupt('return');

					case 24:
						_context.prev = 24;
						spec = {
							"swagger": "2.0",
							"info": {
								"title": host + ' API',
								"version": "1.0.0"
							},
							"host": host,
							"basePath": basePath,
							"schemes": [scheme],
							"paths": {}
						};
						_context.next = 28;
						return dispatch(specActions.save(spec));

					case 28:
						_context.next = 35;
						break;

					case 30:
						_context.prev = 30;
						_context.t1 = _context['catch'](24);

						console.log(_chalk2.default.red(_context.t1));
						spinner.stop();
						return _context.abrupt('return');

					case 35:

						spinner.stop();
						console.log(_chalk2.default.green('Project created for ' + url));

					case 37:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this, [[2, 12], [24, 30]]);
	}));

	return function (_x, _x2) {
		return _ref.apply(this, arguments);
	};
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9pbml0LmpzIl0sIm5hbWVzIjpbInNwZWNBY3Rpb25zIiwidXJsIiwiZ2V0U3RhdGUiLCJkaXNwYXRjaCIsInNwaW5uZXIiLCJzdGFydCIsInNwZWNGaWxlTmFtZSIsImV4aXN0cyIsImNvbnNvbGUiLCJsb2ciLCJyZWQiLCJzdG9wIiwidXJpIiwic2NoZW1lIiwicHJvdG9jb2wiLCJob3N0IiwiYmFzZVBhdGgiLCJwYXRoIiwic3BlYyIsInNhdmUiLCJncmVlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7SUFBWUEsVzs7Ozs7Ozt1RUFFRyx3QkFBcUNDLEdBQXJDO0FBQUEsTUFBZ0JDLFFBQWhCLFNBQWdCQSxRQUFoQjtBQUFBLE1BQTBCQyxRQUExQixTQUEwQkEsUUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRVJDLGFBRlEsR0FFRSxrQkFBWSxvQkFBWixDQUZGOztBQUdkQSxjQUFRQyxLQUFSOztBQUVBO0FBTGM7QUFBQTtBQUFBLGFBT1EscUJBQVUsaUJBQU9DLFlBQWpCLENBUFI7O0FBQUE7QUFPUEMsWUFQTzs7QUFBQSxXQVFUQSxNQVJTO0FBQUE7QUFBQTtBQUFBOztBQVNaQyxjQUFRQyxHQUFSLENBQVksZ0JBQU1DLEdBQU4sc0NBQVo7QUFDQU4sY0FBUU8sSUFBUjtBQVZZOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBZWJILGNBQVFDLEdBQVIsQ0FBWSxnQkFBTUMsR0FBTixhQUFaO0FBQ0FOLGNBQVFPLElBQVI7QUFoQmE7O0FBQUE7O0FBb0JkO0FBQ01DLFNBckJRLEdBcUJGLHFCQUFJWCxHQUFKLENBckJFO0FBc0JSWSxZQXRCUSxHQXNCQ0QsSUFBSUUsUUFBSixFQXRCRDtBQXVCUkMsVUF2QlEsR0F1QkRILElBQUlHLElBQUosRUF2QkM7QUF3QlJDLGNBeEJRLEdBd0JHSixJQUFJSyxJQUFKLEVBeEJIOztBQUFBLFlBMEJWSixVQUFVLEVBQVYsSUFBZ0JFLFFBQVEsRUFBeEIsSUFBOEJDLFlBQVksRUExQmhDO0FBQUE7QUFBQTtBQUFBOztBQTJCYlIsY0FBUUMsR0FBUixDQUFZLGdCQUFNQyxHQUFOLG1DQUFaO0FBM0JhOztBQUFBO0FBQUE7QUFpQ1BRLFVBakNPLEdBaUNBO0FBQ1osa0JBQVcsS0FEQztBQUVaLGVBQVE7QUFDUCxpQkFBWUgsSUFBWixTQURPO0FBRVAsbUJBQVc7QUFGSixRQUZJO0FBTVosZUFBUUEsSUFOSTtBQU9aLG1CQUFZQyxRQVBBO0FBUVosa0JBQVcsQ0FDVkgsTUFEVSxDQVJDO0FBV1osZ0JBQVM7QUFYRyxPQWpDQTtBQUFBO0FBQUEsYUErQ1BWLFNBQVNILFlBQVltQixJQUFaLENBQWlCRCxJQUFqQixDQUFULENBL0NPOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBa0RiVixjQUFRQyxHQUFSLENBQVksZ0JBQU1DLEdBQU4sYUFBWjtBQUNBTixjQUFRTyxJQUFSO0FBbkRhOztBQUFBOztBQXVEZFAsY0FBUU8sSUFBUjtBQUNBSCxjQUFRQyxHQUFSLENBQVksZ0JBQU1XLEtBQU4sMEJBQW1DbkIsR0FBbkMsQ0FBWjs7QUF4RGM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRSIsImZpbGUiOiJpbml0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJztcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tICdjbHVpJztcbmltcG9ydCBVUkkgZnJvbSAndXJpanMnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnO1xuXG5pbXBvcnQgeyBleGlzdEZpbGUgfSBmcm9tICcuLi9saWJzL2ZpbGUnO1xuaW1wb3J0ICogYXMgc3BlY0FjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9zcGVjLWFjdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbih7Z2V0U3RhdGUsIGRpc3BhdGNofSwgdXJsKSB7XG5cblx0Y29uc3Qgc3Bpbm5lciA9IG5ldyBTcGlubmVyKCdJbml0aWFsaXppbmcgc3BlY+KApicpO1xuXHRzcGlubmVyLnN0YXJ0KCk7XG5cblx0Ly8gZW5zdXJlIG5vdCBpbml0J2VkXG5cdHRyeSB7XG5cdFx0Y29uc3QgZXhpc3RzID0gYXdhaXQgZXhpc3RGaWxlKGNvbmZpZy5zcGVjRmlsZU5hbWUpO1xuXHRcdGlmIChleGlzdHMpIHtcblx0XHRcdGNvbnNvbGUubG9nKGNoYWxrLnJlZChgSW5pdCBmYWlsZWQ6IHByb2plY3QgYWxyZWFkeSBleGlzdGApKTtcblx0XHRcdHNwaW5uZXIuc3RvcCgpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fVxuXHRjYXRjaChlKSB7XG5cdFx0Y29uc29sZS5sb2coY2hhbGsucmVkKGUpKTtcblx0XHRzcGlubmVyLnN0b3AoKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBwYXJzZSB1cmxcblx0Y29uc3QgdXJpID0gVVJJKHVybCk7XG5cdGNvbnN0IHNjaGVtZSA9IHVyaS5wcm90b2NvbCgpO1xuXHRjb25zdCBob3N0ID0gdXJpLmhvc3QoKTtcblx0Y29uc3QgYmFzZVBhdGggPSB1cmkucGF0aCgpO1xuXG5cdGlmIChzY2hlbWUgPT0gJycgfHwgaG9zdCA9PSAnJyB8fCBiYXNlUGF0aCA9PSAnJykge1xuXHRcdGNvbnNvbGUubG9nKGNoYWxrLnJlZChgSW5pdCBmYWlsZWQ6IGludmFsaWQgdXJsIGZvcm1hdGApKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBzYXZlIHNwZWNcblx0dHJ5IHtcblx0XHRjb25zdCBzcGVjID0ge1xuXHRcdFx0XCJzd2FnZ2VyXCI6IFwiMi4wXCIsXG5cdFx0XHRcImluZm9cIjoge1xuXHRcdFx0XHRcInRpdGxlXCI6IGAke2hvc3R9IEFQSWAsXG5cdFx0XHRcdFwidmVyc2lvblwiOiBcIjEuMC4wXCJcblx0XHRcdH0sXG5cdFx0XHRcImhvc3RcIjogaG9zdCxcblx0XHRcdFwiYmFzZVBhdGhcIjogYmFzZVBhdGgsXG5cdFx0XHRcInNjaGVtZXNcIjogW1xuXHRcdFx0XHRzY2hlbWVcblx0XHRcdF0sXG5cdFx0XHRcInBhdGhzXCI6IHtcblx0XHRcdH1cblx0XHR9XG5cdFx0YXdhaXQgZGlzcGF0Y2goc3BlY0FjdGlvbnMuc2F2ZShzcGVjKSk7XG5cdH1cblx0Y2F0Y2goZSkge1xuXHRcdGNvbnNvbGUubG9nKGNoYWxrLnJlZChlKSk7XG5cdFx0c3Bpbm5lci5zdG9wKCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdFxuXHRzcGlubmVyLnN0b3AoKTtcblx0Y29uc29sZS5sb2coY2hhbGsuZ3JlZW4oYFByb2plY3QgY3JlYXRlZCBmb3IgJHt1cmx9YCkpO1xufVxuIl19