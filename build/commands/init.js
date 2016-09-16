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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9pbml0LmpzIl0sIm5hbWVzIjpbInNwZWNBY3Rpb25zIiwidXJsIiwiZ2V0U3RhdGUiLCJkaXNwYXRjaCIsInVyaSIsInNjaGVtZSIsInByb3RvY29sIiwiaG9zdCIsImJhc2VQYXRoIiwicGF0aCIsImNvbnNvbGUiLCJsb2ciLCJyZWQiLCJzcGVjIiwiaW5pdCIsInNwaW5uZXIiLCJzdGFydCIsImdldERhdGEiLCJzcGVjRmlsZU5hbWUiLCJzdG9wIiwiZ3JlZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7O0lBQVlBLFc7Ozs7Ozs7dUVBRUcsd0JBQXFDQyxHQUFyQztBQUFBLE1BQWdCQyxRQUFoQixTQUFnQkEsUUFBaEI7QUFBQSxNQUEwQkMsUUFBMUIsU0FBMEJBLFFBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFZDs7QUFFQTtBQUNNQyxTQUxRLEdBS0YscUJBQUlILEdBQUosQ0FMRTtBQU1SSSxZQU5RLEdBTUNELElBQUlFLFFBQUosRUFORDtBQU9SQyxVQVBRLEdBT0RILElBQUlHLElBQUosRUFQQztBQVFSQyxjQVJRLEdBUUdKLElBQUlLLElBQUosRUFSSDs7QUFBQSxZQVVWSixVQUFVLEVBQVYsSUFBZ0JFLFFBQVEsRUFBeEIsSUFBOEJDLFlBQVksRUFWaEM7QUFBQTtBQUFBO0FBQUE7O0FBV2JFLGNBQVFDLEdBQVIsQ0FBWSxnQkFBTUMsR0FBTixtQ0FBWjtBQVhhOztBQUFBOztBQWVkO0FBQ01DLFVBaEJRLEdBaUJkO0FBQ0Msa0JBQVcsS0FEWjtBQUVDLGVBQVE7QUFDUCxpQkFBWU4sSUFBWixTQURPO0FBRVAsbUJBQVc7QUFGSixRQUZUO0FBTUMsZUFBUUEsSUFOVDtBQU9DLG1CQUFZQyxRQVBiO0FBUUMsa0JBQVcsQ0FDVkgsTUFEVSxDQVJaO0FBV0MsZ0JBQVM7QUFYVixPQWpCYzs7QUErQmRGLGVBQVNILFlBQVljLElBQVosQ0FBaUJELElBQWpCLENBQVQ7O0FBRUE7QUFDTUUsYUFsQ1EsR0FrQ0Usa0JBQVksb0JBQVosQ0FsQ0Y7OztBQW9DZEEsY0FBUUMsS0FBUjtBQXBDYzs7QUFzQ2JOLGNBQVFDLEdBQVIsQ0FBWVgsWUFBWWlCLE9BQVosQ0FBb0JmLFVBQXBCLENBQVo7QUF0Q2E7QUFBQSxhQXVDUCxxQkFBVSxpQkFBT2dCLFlBQWpCLEVBQStCbEIsWUFBWWlCLE9BQVosQ0FBb0JmLFVBQXBCLENBQS9CLENBdkNPOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBMENiUSxjQUFRQyxHQUFSLENBQVksZ0JBQU1DLEdBQU4sYUFBWjtBQUNBRyxjQUFRSSxJQUFSO0FBM0NhOztBQUFBOztBQStDZEosY0FBUUksSUFBUjtBQUNBVCxjQUFRQyxHQUFSLENBQVksZ0JBQU1TLEtBQU4sMEJBQW1DbkIsR0FBbkMsQ0FBWjs7QUFoRGM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRSIsImZpbGUiOiJpbml0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJztcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tICdjbHVpJztcbmltcG9ydCBVUkkgZnJvbSAndXJpanMnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnO1xuXG5pbXBvcnQgeyB3cml0ZUZpbGUgfSBmcm9tICcuLi9saWJzL2ZpbGUnO1xuaW1wb3J0ICogYXMgc3BlY0FjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9zcGVjLWFjdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbih7Z2V0U3RhdGUsIGRpc3BhdGNofSwgdXJsKSB7XG5cblx0Ly8gZW5zdXJlIG5vdCBpbml0J2VkXG5cblx0Ly8gcGFyc2UgdXJsXG5cdGNvbnN0IHVyaSA9IFVSSSh1cmwpO1xuXHRjb25zdCBzY2hlbWUgPSB1cmkucHJvdG9jb2woKTtcblx0Y29uc3QgaG9zdCA9IHVyaS5ob3N0KCk7XG5cdGNvbnN0IGJhc2VQYXRoID0gdXJpLnBhdGgoKTtcblxuXHRpZiAoc2NoZW1lID09ICcnIHx8IGhvc3QgPT0gJycgfHwgYmFzZVBhdGggPT0gJycpIHtcblx0XHRjb25zb2xlLmxvZyhjaGFsay5yZWQoYEluaXQgZmFpbGVkOiBpbnZhbGlkIHVybCBmb3JtYXRgKSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gYnVpbGQgc3BlY1xuXHRjb25zdCBzcGVjID1cblx0e1xuXHRcdFwic3dhZ2dlclwiOiBcIjIuMFwiLFxuXHRcdFwiaW5mb1wiOiB7XG5cdFx0XHRcInRpdGxlXCI6IGAke2hvc3R9IEFQSWAsXG5cdFx0XHRcInZlcnNpb25cIjogXCIxLjAuMFwiXG5cdFx0fSxcblx0XHRcImhvc3RcIjogaG9zdCxcblx0XHRcImJhc2VQYXRoXCI6IGJhc2VQYXRoLFxuXHRcdFwic2NoZW1lc1wiOiBbXG5cdFx0XHRzY2hlbWVcblx0XHRdLFxuXHRcdFwicGF0aHNcIjoge1xuXHRcdH1cblx0fVxuXHRkaXNwYXRjaChzcGVjQWN0aW9ucy5pbml0KHNwZWMpKTtcblxuXHQvLyB3cml0ZSBmaWxlXG5cdGNvbnN0IHNwaW5uZXIgPSBuZXcgU3Bpbm5lcignSW5pdGlhbGl6aW5nIHNwZWPigKYnKTtcblxuXHRzcGlubmVyLnN0YXJ0KCk7XG5cdHRyeSB7XG5cdFx0Y29uc29sZS5sb2coc3BlY0FjdGlvbnMuZ2V0RGF0YShnZXRTdGF0ZSgpKSk7XG5cdFx0YXdhaXQgd3JpdGVGaWxlKGNvbmZpZy5zcGVjRmlsZU5hbWUsIHNwZWNBY3Rpb25zLmdldERhdGEoZ2V0U3RhdGUoKSkpO1xuXHR9XG5cdGNhdGNoKGUpIHtcblx0XHRjb25zb2xlLmxvZyhjaGFsay5yZWQoZSkpO1xuXHRcdHNwaW5uZXIuc3RvcCgpO1xuXHRcdHJldHVybjtcblx0fVxuXHRcblx0c3Bpbm5lci5zdG9wKCk7XG5cdGNvbnNvbGUubG9nKGNoYWxrLmdyZWVuKGBQcm9qZWN0IGNyZWF0ZWQgZm9yICR7dXJsfWApKTtcbn1cbiJdfQ==