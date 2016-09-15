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
		var uri, scheme, host, basePath, spec, spinner;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:

						// ensure not init'ed

						// parse url
						uri = (0, _urijs2.default)(url);
						scheme = uri.protocol();
						host = uri.host();
						basePath = uri.path();

						if (!(scheme == '' || host == '' || basePath == '')) {
							_context.next = 7;
							break;
						}

						console.log(_chalk2.default.red('Init failed: invalid url format'));
						return _context.abrupt('return');

					case 7:

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
						spinner = new _clui.Spinner('Initializing spec…');


						spinner.start();
						_context.prev = 11;

						console.log(specActions.getData(getState()));
						_context.next = 15;
						return (0, _file.writeFile)(_config2.default.specFileName, specActions.getData(getState()));

					case 15:
						_context.next = 22;
						break;

					case 17:
						_context.prev = 17;
						_context.t0 = _context['catch'](11);

						console.log(_chalk2.default.red(_context.t0));
						spinner.stop();
						return _context.abrupt('return');

					case 22:

						spinner.stop();
						console.log(_chalk2.default.green('Project created for ' + url));

					case 24:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this, [[11, 17]]);
	}));

	return function (_x, _x2) {
		return _ref.apply(this, arguments);
	};
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcHRpb25zL2luaXQuanMiXSwibmFtZXMiOlsic3BlY0FjdGlvbnMiLCJ1cmwiLCJnZXRTdGF0ZSIsImRpc3BhdGNoIiwidXJpIiwic2NoZW1lIiwicHJvdG9jb2wiLCJob3N0IiwiYmFzZVBhdGgiLCJwYXRoIiwiY29uc29sZSIsImxvZyIsInJlZCIsInNwZWMiLCJpbml0Iiwic3Bpbm5lciIsInN0YXJ0IiwiZ2V0RGF0YSIsInNwZWNGaWxlTmFtZSIsInN0b3AiLCJncmVlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7SUFBWUEsVzs7Ozs7Ozt1RUFFRyx3QkFBcUNDLEdBQXJDO0FBQUEsTUFBZ0JDLFFBQWhCLFNBQWdCQSxRQUFoQjtBQUFBLE1BQTBCQyxRQUExQixTQUEwQkEsUUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVkOztBQUVBO0FBQ01DLFNBTFEsR0FLRixxQkFBSUgsR0FBSixDQUxFO0FBTVJJLFlBTlEsR0FNQ0QsSUFBSUUsUUFBSixFQU5EO0FBT1JDLFVBUFEsR0FPREgsSUFBSUcsSUFBSixFQVBDO0FBUVJDLGNBUlEsR0FRR0osSUFBSUssSUFBSixFQVJIOztBQUFBLFlBVVZKLFVBQVUsRUFBVixJQUFnQkUsUUFBUSxFQUF4QixJQUE4QkMsWUFBWSxFQVZoQztBQUFBO0FBQUE7QUFBQTs7QUFXYkUsY0FBUUMsR0FBUixDQUFZLGdCQUFNQyxHQUFOLG1DQUFaO0FBWGE7O0FBQUE7O0FBZWQ7QUFDTUMsVUFoQlEsR0FpQmQ7QUFDQyxrQkFBVyxLQURaO0FBRUMsZUFBUTtBQUNQLGlCQUFZTixJQUFaLFNBRE87QUFFUCxtQkFBVztBQUZKLFFBRlQ7QUFNQyxlQUFRQSxJQU5UO0FBT0MsbUJBQVlDLFFBUGI7QUFRQyxrQkFBVyxDQUNWSCxNQURVLENBUlo7QUFXQyxnQkFBUztBQVhWLE9BakJjOztBQStCZEYsZUFBU0gsWUFBWWMsSUFBWixDQUFpQkQsSUFBakIsQ0FBVDs7QUFFQTtBQUNNRSxhQWxDUSxHQWtDRSxrQkFBWSxvQkFBWixDQWxDRjs7O0FBb0NkQSxjQUFRQyxLQUFSO0FBcENjOztBQXNDYk4sY0FBUUMsR0FBUixDQUFZWCxZQUFZaUIsT0FBWixDQUFvQmYsVUFBcEIsQ0FBWjtBQXRDYTtBQUFBLGFBdUNQLHFCQUFVLGlCQUFPZ0IsWUFBakIsRUFBK0JsQixZQUFZaUIsT0FBWixDQUFvQmYsVUFBcEIsQ0FBL0IsQ0F2Q087O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUEwQ2JRLGNBQVFDLEdBQVIsQ0FBWSxnQkFBTUMsR0FBTixhQUFaO0FBQ0FHLGNBQVFJLElBQVI7QUEzQ2E7O0FBQUE7O0FBK0NkSixjQUFRSSxJQUFSO0FBQ0FULGNBQVFDLEdBQVIsQ0FBWSxnQkFBTVMsS0FBTiwwQkFBbUNuQixHQUFuQyxDQUFaOztBQWhEYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFIiwiZmlsZSI6ImluaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnO1xuaW1wb3J0IHsgU3Bpbm5lciB9IGZyb20gJ2NsdWknO1xuaW1wb3J0IFVSSSBmcm9tICd1cmlqcyc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XG5cbmltcG9ydCB7IHdyaXRlRmlsZSB9IGZyb20gJy4uL2xpYnMvZmlsZSc7XG5pbXBvcnQgKiBhcyBzcGVjQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL3NwZWMtYWN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uKHtnZXRTdGF0ZSwgZGlzcGF0Y2h9LCB1cmwpIHtcblxuXHQvLyBlbnN1cmUgbm90IGluaXQnZWRcblxuXHQvLyBwYXJzZSB1cmxcblx0Y29uc3QgdXJpID0gVVJJKHVybCk7XG5cdGNvbnN0IHNjaGVtZSA9IHVyaS5wcm90b2NvbCgpO1xuXHRjb25zdCBob3N0ID0gdXJpLmhvc3QoKTtcblx0Y29uc3QgYmFzZVBhdGggPSB1cmkucGF0aCgpO1xuXG5cdGlmIChzY2hlbWUgPT0gJycgfHwgaG9zdCA9PSAnJyB8fCBiYXNlUGF0aCA9PSAnJykge1xuXHRcdGNvbnNvbGUubG9nKGNoYWxrLnJlZChgSW5pdCBmYWlsZWQ6IGludmFsaWQgdXJsIGZvcm1hdGApKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBidWlsZCBzcGVjXG5cdGNvbnN0IHNwZWMgPVxuXHR7XG5cdFx0XCJzd2FnZ2VyXCI6IFwiMi4wXCIsXG5cdFx0XCJpbmZvXCI6IHtcblx0XHRcdFwidGl0bGVcIjogYCR7aG9zdH0gQVBJYCxcblx0XHRcdFwidmVyc2lvblwiOiBcIjEuMC4wXCJcblx0XHR9LFxuXHRcdFwiaG9zdFwiOiBob3N0LFxuXHRcdFwiYmFzZVBhdGhcIjogYmFzZVBhdGgsXG5cdFx0XCJzY2hlbWVzXCI6IFtcblx0XHRcdHNjaGVtZVxuXHRcdF0sXG5cdFx0XCJwYXRoc1wiOiB7XG5cdFx0fVxuXHR9XG5cdGRpc3BhdGNoKHNwZWNBY3Rpb25zLmluaXQoc3BlYykpO1xuXG5cdC8vIHdyaXRlIGZpbGVcblx0Y29uc3Qgc3Bpbm5lciA9IG5ldyBTcGlubmVyKCdJbml0aWFsaXppbmcgc3BlY+KApicpO1xuXG5cdHNwaW5uZXIuc3RhcnQoKTtcblx0dHJ5IHtcblx0XHRjb25zb2xlLmxvZyhzcGVjQWN0aW9ucy5nZXREYXRhKGdldFN0YXRlKCkpKTtcblx0XHRhd2FpdCB3cml0ZUZpbGUoY29uZmlnLnNwZWNGaWxlTmFtZSwgc3BlY0FjdGlvbnMuZ2V0RGF0YShnZXRTdGF0ZSgpKSk7XG5cdH1cblx0Y2F0Y2goZSkge1xuXHRcdGNvbnNvbGUubG9nKGNoYWxrLnJlZChlKSk7XG5cdFx0c3Bpbm5lci5zdG9wKCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdFxuXHRzcGlubmVyLnN0b3AoKTtcblx0Y29uc29sZS5sb2coY2hhbGsuZ3JlZW4oYFByb2plY3QgY3JlYXRlZCBmb3IgJHt1cmx9YCkpO1xufVxuIl19