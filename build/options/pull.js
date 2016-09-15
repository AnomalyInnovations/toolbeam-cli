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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcHRpb25zL3B1bGwuanMiXSwibmFtZXMiOlsic3BlY0FjdGlvbnMiLCJmaWxlTmFtZSIsImdldFN0YXRlIiwiZGlzcGF0Y2giLCJzcGlubmVyIiwic3RhcnQiLCJsb2FkSW5mbyIsImxvYWQiLCJnZXRTcGVjRmlsZUxpbmsiLCJzdG9wIiwiY29uc29sZSIsImxvZyIsInJlZCIsIm1lc3NhZ2UiLCJnZXREYXRhIiwiY3lhbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUVBOztBQUNBOztJQUFZQSxXOzs7Ozs7QUFFWixJQUFNQyxXQUFXLFdBQWpCOzs7dUVBRWU7QUFBQSxNQUFnQkMsUUFBaEIsU0FBZ0JBLFFBQWhCO0FBQUEsTUFBMEJDLFFBQTFCLFNBQTBCQSxRQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUkMsYUFEUSxHQUNFLGtCQUFZLGVBQVosQ0FERjs7O0FBR2RBLGNBQVFDLEtBQVI7O0FBRUE7QUFMYztBQUFBO0FBQUEsYUFPUEYsU0FBU0gsWUFBWU0sUUFBWixFQUFULENBUE87O0FBQUE7QUFBQTtBQUFBLGFBUVBILFNBQVNILFlBQVlPLElBQVosQ0FBaUJQLFlBQVlRLGVBQVosQ0FBNEJOLFVBQTVCLENBQWpCLENBQVQsQ0FSTzs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQVdiRSxjQUFRSyxJQUFSO0FBQ0FDLGNBQVFDLEdBQVIsQ0FBWSxnQkFBTUMsR0FBTixtQkFBMEIsWUFBRUMsT0FBNUIsQ0FBWjtBQVphOztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBa0JQLHFCQUFVWixRQUFWLEVBQW9CRCxZQUFZYyxPQUFaLENBQW9CWixVQUFwQixDQUFwQixDQWxCTzs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQXFCYlEsY0FBUUMsR0FBUixDQUFZLGdCQUFNQyxHQUFOLGFBQVo7QUFDQVIsY0FBUUssSUFBUjtBQXRCYTs7QUFBQTs7QUEwQmRMLGNBQVFLLElBQVI7QUFDQUMsY0FBUUMsR0FBUixDQUFZLGdCQUFNSSxJQUFOLGFBQXFCZCxRQUFyQixxQkFBWjs7QUEzQmM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRSIsImZpbGUiOiJwdWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJztcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tICdjbHVpJztcblxuaW1wb3J0IHsgd3JpdGVGaWxlIH0gZnJvbSAnLi4vbGlicy9maWxlJztcbmltcG9ydCAqIGFzIHNwZWNBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvc3BlYy1hY3Rpb25zJztcblxuY29uc3QgZmlsZU5hbWUgPSAnc3BlYy5qc29uJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24oe2dldFN0YXRlLCBkaXNwYXRjaH0pIHtcblx0Y29uc3Qgc3Bpbm5lciA9IG5ldyBTcGlubmVyKCdQdWxsaW5nIHNwZWPigKYnKTtcblxuXHRzcGlubmVyLnN0YXJ0KCk7XG5cblx0Ly8gTG9hZCBzcGVjIGluZm8gJiBkYXRhXG5cdHRyeSB7XG5cdFx0YXdhaXQgZGlzcGF0Y2goc3BlY0FjdGlvbnMubG9hZEluZm8oKSk7XG5cdFx0YXdhaXQgZGlzcGF0Y2goc3BlY0FjdGlvbnMubG9hZChzcGVjQWN0aW9ucy5nZXRTcGVjRmlsZUxpbmsoZ2V0U3RhdGUoKSkpKTtcblx0fVxuXHRjYXRjaChlKSB7XG5cdFx0c3Bpbm5lci5zdG9wKCk7XG5cdFx0Y29uc29sZS5sb2coY2hhbGsucmVkKGBQdWxsIGZhaWxlZDogJHtlLm1lc3NhZ2V9YCkpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIFdyaXRlIGZpbGVcblx0dHJ5IHtcblx0XHRhd2FpdCB3cml0ZUZpbGUoZmlsZU5hbWUsIHNwZWNBY3Rpb25zLmdldERhdGEoZ2V0U3RhdGUoKSkpO1xuXHR9XG5cdGNhdGNoKGUpIHtcblx0XHRjb25zb2xlLmxvZyhjaGFsay5yZWQoZSkpO1xuXHRcdHNwaW5uZXIuc3RvcCgpO1xuXHRcdHJldHVybjtcblx0fVxuXHRcblx0c3Bpbm5lci5zdG9wKCk7XG5cdGNvbnNvbGUubG9nKGNoYWxrLmN5YW4oYFB1bGxlZCAke2ZpbGVOYW1lfSBmcm9tIFRvb2xiZWFtLmApKTtcbn1cbiJdfQ==