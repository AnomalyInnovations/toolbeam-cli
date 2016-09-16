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

						// build spec
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

						dispatch(specActions.init(spec));

						// write file
						_context.prev = 26;

						console.log(specActions.getData(getState()));
						_context.next = 30;
						return (0, _file.writeFile)(_config2.default.specFileName, specActions.getData(getState()));

					case 30:
						_context.next = 37;
						break;

					case 32:
						_context.prev = 32;
						_context.t1 = _context['catch'](26);

						console.log(_chalk2.default.red(_context.t1));
						spinner.stop();
						return _context.abrupt('return');

					case 37:

						spinner.stop();
						console.log(_chalk2.default.green('Project created for ' + url));

					case 39:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this, [[2, 12], [26, 32]]);
	}));

	return function (_x, _x2) {
		return _ref.apply(this, arguments);
	};
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9pbml0LmpzIl0sIm5hbWVzIjpbInNwZWNBY3Rpb25zIiwidXJsIiwiZ2V0U3RhdGUiLCJkaXNwYXRjaCIsInNwaW5uZXIiLCJzdGFydCIsInNwZWNGaWxlTmFtZSIsImV4aXN0cyIsImNvbnNvbGUiLCJsb2ciLCJyZWQiLCJzdG9wIiwidXJpIiwic2NoZW1lIiwicHJvdG9jb2wiLCJob3N0IiwiYmFzZVBhdGgiLCJwYXRoIiwic3BlYyIsImluaXQiLCJnZXREYXRhIiwiZ3JlZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7O0lBQVlBLFc7Ozs7Ozs7dUVBRUcsd0JBQXFDQyxHQUFyQztBQUFBLE1BQWdCQyxRQUFoQixTQUFnQkEsUUFBaEI7QUFBQSxNQUEwQkMsUUFBMUIsU0FBMEJBLFFBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVSQyxhQUZRLEdBRUUsa0JBQVksb0JBQVosQ0FGRjs7QUFHZEEsY0FBUUMsS0FBUjs7QUFFQTtBQUxjO0FBQUE7QUFBQSxhQU9RLHFCQUFVLGlCQUFPQyxZQUFqQixDQVBSOztBQUFBO0FBT1BDLFlBUE87O0FBQUEsV0FRVEEsTUFSUztBQUFBO0FBQUE7QUFBQTs7QUFTWkMsY0FBUUMsR0FBUixDQUFZLGdCQUFNQyxHQUFOLHNDQUFaO0FBQ0FOLGNBQVFPLElBQVI7QUFWWTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQWViSCxjQUFRQyxHQUFSLENBQVksZ0JBQU1DLEdBQU4sYUFBWjtBQUNBTixjQUFRTyxJQUFSO0FBaEJhOztBQUFBOztBQW9CZDtBQUNNQyxTQXJCUSxHQXFCRixxQkFBSVgsR0FBSixDQXJCRTtBQXNCUlksWUF0QlEsR0FzQkNELElBQUlFLFFBQUosRUF0QkQ7QUF1QlJDLFVBdkJRLEdBdUJESCxJQUFJRyxJQUFKLEVBdkJDO0FBd0JSQyxjQXhCUSxHQXdCR0osSUFBSUssSUFBSixFQXhCSDs7QUFBQSxZQTBCVkosVUFBVSxFQUFWLElBQWdCRSxRQUFRLEVBQXhCLElBQThCQyxZQUFZLEVBMUJoQztBQUFBO0FBQUE7QUFBQTs7QUEyQmJSLGNBQVFDLEdBQVIsQ0FBWSxnQkFBTUMsR0FBTixtQ0FBWjtBQTNCYTs7QUFBQTs7QUErQmQ7QUFDTVEsVUFoQ1EsR0FpQ2Q7QUFDQyxrQkFBVyxLQURaO0FBRUMsZUFBUTtBQUNQLGlCQUFZSCxJQUFaLFNBRE87QUFFUCxtQkFBVztBQUZKLFFBRlQ7QUFNQyxlQUFRQSxJQU5UO0FBT0MsbUJBQVlDLFFBUGI7QUFRQyxrQkFBVyxDQUNWSCxNQURVLENBUlo7QUFXQyxnQkFBUztBQVhWLE9BakNjOztBQStDZFYsZUFBU0gsWUFBWW1CLElBQVosQ0FBaUJELElBQWpCLENBQVQ7O0FBRUE7QUFqRGM7O0FBbURiVixjQUFRQyxHQUFSLENBQVlULFlBQVlvQixPQUFaLENBQW9CbEIsVUFBcEIsQ0FBWjtBQW5EYTtBQUFBLGFBb0RQLHFCQUFVLGlCQUFPSSxZQUFqQixFQUErQk4sWUFBWW9CLE9BQVosQ0FBb0JsQixVQUFwQixDQUEvQixDQXBETzs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQXVEYk0sY0FBUUMsR0FBUixDQUFZLGdCQUFNQyxHQUFOLGFBQVo7QUFDQU4sY0FBUU8sSUFBUjtBQXhEYTs7QUFBQTs7QUE0RGRQLGNBQVFPLElBQVI7QUFDQUgsY0FBUUMsR0FBUixDQUFZLGdCQUFNWSxLQUFOLDBCQUFtQ3BCLEdBQW5DLENBQVo7O0FBN0RjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEUiLCJmaWxlIjoiaW5pdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjaGFsayBmcm9tICdjaGFsayc7XG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSAnY2x1aSc7XG5pbXBvcnQgVVJJIGZyb20gJ3VyaWpzJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcblxuaW1wb3J0IHsgZXhpc3RGaWxlLCB3cml0ZUZpbGUgfSBmcm9tICcuLi9saWJzL2ZpbGUnO1xuaW1wb3J0ICogYXMgc3BlY0FjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9zcGVjLWFjdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbih7Z2V0U3RhdGUsIGRpc3BhdGNofSwgdXJsKSB7XG5cblx0Y29uc3Qgc3Bpbm5lciA9IG5ldyBTcGlubmVyKCdJbml0aWFsaXppbmcgc3BlY+KApicpO1xuXHRzcGlubmVyLnN0YXJ0KCk7XG5cblx0Ly8gZW5zdXJlIG5vdCBpbml0J2VkXG5cdHRyeSB7XG5cdFx0Y29uc3QgZXhpc3RzID0gYXdhaXQgZXhpc3RGaWxlKGNvbmZpZy5zcGVjRmlsZU5hbWUpO1xuXHRcdGlmIChleGlzdHMpIHtcblx0XHRcdGNvbnNvbGUubG9nKGNoYWxrLnJlZChgSW5pdCBmYWlsZWQ6IHByb2plY3QgYWxyZWFkeSBleGlzdGApKTtcblx0XHRcdHNwaW5uZXIuc3RvcCgpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fVxuXHRjYXRjaChlKSB7XG5cdFx0Y29uc29sZS5sb2coY2hhbGsucmVkKGUpKTtcblx0XHRzcGlubmVyLnN0b3AoKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBwYXJzZSB1cmxcblx0Y29uc3QgdXJpID0gVVJJKHVybCk7XG5cdGNvbnN0IHNjaGVtZSA9IHVyaS5wcm90b2NvbCgpO1xuXHRjb25zdCBob3N0ID0gdXJpLmhvc3QoKTtcblx0Y29uc3QgYmFzZVBhdGggPSB1cmkucGF0aCgpO1xuXG5cdGlmIChzY2hlbWUgPT0gJycgfHwgaG9zdCA9PSAnJyB8fCBiYXNlUGF0aCA9PSAnJykge1xuXHRcdGNvbnNvbGUubG9nKGNoYWxrLnJlZChgSW5pdCBmYWlsZWQ6IGludmFsaWQgdXJsIGZvcm1hdGApKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBidWlsZCBzcGVjXG5cdGNvbnN0IHNwZWMgPVxuXHR7XG5cdFx0XCJzd2FnZ2VyXCI6IFwiMi4wXCIsXG5cdFx0XCJpbmZvXCI6IHtcblx0XHRcdFwidGl0bGVcIjogYCR7aG9zdH0gQVBJYCxcblx0XHRcdFwidmVyc2lvblwiOiBcIjEuMC4wXCJcblx0XHR9LFxuXHRcdFwiaG9zdFwiOiBob3N0LFxuXHRcdFwiYmFzZVBhdGhcIjogYmFzZVBhdGgsXG5cdFx0XCJzY2hlbWVzXCI6IFtcblx0XHRcdHNjaGVtZVxuXHRcdF0sXG5cdFx0XCJwYXRoc1wiOiB7XG5cdFx0fVxuXHR9XG5cdGRpc3BhdGNoKHNwZWNBY3Rpb25zLmluaXQoc3BlYykpO1xuXG5cdC8vIHdyaXRlIGZpbGVcblx0dHJ5IHtcblx0XHRjb25zb2xlLmxvZyhzcGVjQWN0aW9ucy5nZXREYXRhKGdldFN0YXRlKCkpKTtcblx0XHRhd2FpdCB3cml0ZUZpbGUoY29uZmlnLnNwZWNGaWxlTmFtZSwgc3BlY0FjdGlvbnMuZ2V0RGF0YShnZXRTdGF0ZSgpKSk7XG5cdH1cblx0Y2F0Y2goZSkge1xuXHRcdGNvbnNvbGUubG9nKGNoYWxrLnJlZChlKSk7XG5cdFx0c3Bpbm5lci5zdG9wKCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdFxuXHRzcGlubmVyLnN0b3AoKTtcblx0Y29uc29sZS5sb2coY2hhbGsuZ3JlZW4oYFByb2plY3QgY3JlYXRlZCBmb3IgJHt1cmx9YCkpO1xufVxuIl19