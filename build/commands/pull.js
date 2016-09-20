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

var _json2 = require('../libs/json');

var _consumeOpenapi = require('../libs/consume-openapi');

var _specActions = require('../actions/spec-actions');

var specActions = _interopRequireWildcard(_specActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2, uuid) {
		var getState = _ref2.getState;
		var dispatch = _ref2.dispatch;

		var spinner, exists, fileStr, json, _fileStr, _json;

		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						spinner = new _clui.Spinner('Pulling spec…');


						spinner.start();

						_context.prev = 2;
						_context.next = 5;
						return (0, _file.existFile)(_config2.default.specFileName);

					case 5:
						exists = _context.sent;

						if (!uuid) {
							_context.next = 16;
							break;
						}

						if (!exists) {
							_context.next = 14;
							break;
						}

						_context.next = 10;
						return (0, _file.readFile)(_config2.default.specFileName);

					case 10:
						fileStr = _context.sent;
						json = (0, _json2.quietParse)((0, _json2.minifyJSON)(fileStr));

						if (!(json && uuid != (0, _consumeOpenapi.specUUIDFromOpenapi)(json))) {
							_context.next = 14;
							break;
						}

						throw 'UUID does not match current project.';

					case 14:
						_context.next = 27;
						break;

					case 16:
						if (exists) {
							_context.next = 18;
							break;
						}

						throw 'missing project UUID.';

					case 18:
						_context.next = 20;
						return (0, _file.readFile)(_config2.default.specFileName);

					case 20:
						_fileStr = _context.sent;
						_json = (0, _json2.quietParse)((0, _json2.minifyJSON)(_fileStr));

						if (_json) {
							_context.next = 24;
							break;
						}

						throw 'missing project UUID.';

					case 24:
						uuid = (0, _consumeOpenapi.specUUIDFromOpenapi)(_json);

						if (uuid) {
							_context.next = 27;
							break;
						}

						throw 'missing project UUID.';

					case 27:
						_context.next = 34;
						break;

					case 29:
						_context.prev = 29;
						_context.t0 = _context['catch'](2);

						spinner.stop();
						console.log(_chalk2.default.red('Pull failed: ' + _context.t0));
						return _context.abrupt('return');

					case 34:
						_context.prev = 34;
						_context.next = 37;
						return dispatch(specActions.loadInfo(uuid));

					case 37:
						_context.next = 39;
						return dispatch(specActions.load(specActions.getSpecFileLink(getState())));

					case 39:
						_context.next = 46;
						break;

					case 41:
						_context.prev = 41;
						_context.t1 = _context['catch'](34);

						spinner.stop();
						console.log(_chalk2.default.red('Pull failed: ' + _context.t1.message));
						return _context.abrupt('return');

					case 46:
						_context.prev = 46;
						_context.next = 49;
						return (0, _file.writeFile)(_config2.default.specFileName, specActions.getData(getState()));

					case 49:
						_context.next = 56;
						break;

					case 51:
						_context.prev = 51;
						_context.t2 = _context['catch'](46);

						console.log(_chalk2.default.red(_context.t2));
						spinner.stop();
						return _context.abrupt('return');

					case 56:

						spinner.stop();
						console.log(_chalk2.default.cyan('Pulled from Toolbeam.'));

					case 58:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this, [[2, 29], [34, 41], [46, 51]]);
	}));

	return function (_x, _x2) {
		return _ref.apply(this, arguments);
	};
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9wdWxsLmpzIl0sIm5hbWVzIjpbInNwZWNBY3Rpb25zIiwidXVpZCIsImdldFN0YXRlIiwiZGlzcGF0Y2giLCJzcGlubmVyIiwic3RhcnQiLCJzcGVjRmlsZU5hbWUiLCJleGlzdHMiLCJmaWxlU3RyIiwianNvbiIsInN0b3AiLCJjb25zb2xlIiwibG9nIiwicmVkIiwibG9hZEluZm8iLCJsb2FkIiwiZ2V0U3BlY0ZpbGVMaW5rIiwibWVzc2FnZSIsImdldERhdGEiLCJjeWFuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7SUFBWUEsVzs7Ozs7Ozt1RUFFRyx3QkFBcUNDLElBQXJDO0FBQUEsTUFBZ0JDLFFBQWhCLFNBQWdCQSxRQUFoQjtBQUFBLE1BQTBCQyxRQUExQixTQUEwQkEsUUFBMUI7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUkMsYUFEUSxHQUNFLGtCQUFZLGVBQVosQ0FERjs7O0FBR2RBLGNBQVFDLEtBQVI7O0FBSGM7QUFBQTtBQUFBLGFBTVEscUJBQVUsaUJBQU9DLFlBQWpCLENBTlI7O0FBQUE7QUFNUEMsWUFOTzs7QUFBQSxXQVNUTixJQVRTO0FBQUE7QUFBQTtBQUFBOztBQUFBLFdBVVJNLE1BVlE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxhQVlXLG9CQUFTLGlCQUFPRCxZQUFoQixDQVpYOztBQUFBO0FBWUxFLGFBWks7QUFhTEMsVUFiSyxHQWFFLHVCQUFXLHVCQUFXRCxPQUFYLENBQVgsQ0FiRjs7QUFBQSxZQWNQQyxRQUFRUixRQUFRLHlDQUFvQlEsSUFBcEIsQ0FkVDtBQUFBO0FBQUE7QUFBQTs7QUFBQSxZQWVKLHNDQWZJOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLFVBcUJMRixNQXJCSztBQUFBO0FBQUE7QUFBQTs7QUFBQSxZQXNCTCx1QkF0Qks7O0FBQUE7QUFBQTtBQUFBLGFBd0JVLG9CQUFTLGlCQUFPRCxZQUFoQixDQXhCVjs7QUFBQTtBQXdCTkUsY0F4Qk07QUF5Qk5DLFdBekJNLEdBeUJDLHVCQUFXLHVCQUFXRCxRQUFYLENBQVgsQ0F6QkQ7O0FBQUEsVUEwQkxDLEtBMUJLO0FBQUE7QUFBQTtBQUFBOztBQUFBLFlBMkJMLHVCQTNCSzs7QUFBQTtBQTZCWlIsYUFBTyx5Q0FBb0JRLEtBQXBCLENBQVA7O0FBN0JZLFVBOEJMUixJQTlCSztBQUFBO0FBQUE7QUFBQTs7QUFBQSxZQStCTCx1QkEvQks7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFvQ2JHLGNBQVFNLElBQVI7QUFDQUMsY0FBUUMsR0FBUixDQUFZLGdCQUFNQyxHQUFOLCtCQUFaO0FBckNhOztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBMkNQVixTQUFTSCxZQUFZYyxRQUFaLENBQXFCYixJQUFyQixDQUFULENBM0NPOztBQUFBO0FBQUE7QUFBQSxhQTRDUEUsU0FBU0gsWUFBWWUsSUFBWixDQUFpQmYsWUFBWWdCLGVBQVosQ0FBNEJkLFVBQTVCLENBQWpCLENBQVQsQ0E1Q087O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUErQ2JFLGNBQVFNLElBQVI7QUFDQUMsY0FBUUMsR0FBUixDQUFZLGdCQUFNQyxHQUFOLG1CQUEwQixZQUFFSSxPQUE1QixDQUFaO0FBaERhOztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBc0RQLHFCQUFVLGlCQUFPWCxZQUFqQixFQUErQk4sWUFBWWtCLE9BQVosQ0FBb0JoQixVQUFwQixDQUEvQixDQXRETzs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQXlEYlMsY0FBUUMsR0FBUixDQUFZLGdCQUFNQyxHQUFOLGFBQVo7QUFDQVQsY0FBUU0sSUFBUjtBQTFEYTs7QUFBQTs7QUE4RGROLGNBQVFNLElBQVI7QUFDQUMsY0FBUUMsR0FBUixDQUFZLGdCQUFNTyxJQUFOLENBQVcsdUJBQVgsQ0FBWjs7QUEvRGM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRSIsImZpbGUiOiJwdWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJztcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tICdjbHVpJztcblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgZXhpc3RGaWxlLCByZWFkRmlsZSwgd3JpdGVGaWxlIH0gZnJvbSAnLi4vbGlicy9maWxlJztcbmltcG9ydCB7IHF1aWV0UGFyc2UsIG1pbmlmeUpTT04gfSBmcm9tICcuLi9saWJzL2pzb24nO1xuaW1wb3J0IHsgc3BlY1VVSURGcm9tT3BlbmFwaSB9IGZyb20gJy4uL2xpYnMvY29uc3VtZS1vcGVuYXBpJztcbmltcG9ydCAqIGFzIHNwZWNBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvc3BlYy1hY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24oe2dldFN0YXRlLCBkaXNwYXRjaH0sIHV1aWQpIHtcblx0Y29uc3Qgc3Bpbm5lciA9IG5ldyBTcGlubmVyKCdQdWxsaW5nIHNwZWPigKYnKTtcblxuXHRzcGlubmVyLnN0YXJ0KCk7XG5cdFxuXHR0cnkge1xuXHRcdGNvbnN0IGV4aXN0cyA9IGF3YWl0IGV4aXN0RmlsZShjb25maWcuc3BlY0ZpbGVOYW1lKTtcblxuXHRcdC8vIENhc2UgMTogVVVJRCBwYXNzZWQgaW5cblx0XHRpZiAodXVpZCkge1xuXHRcdFx0aWYgKGV4aXN0cykge1xuXHRcdFx0XHQvLyBDaGVjayBVVUlEIGRvZXMgbm90IG1hdGNoIGN1cnJlbnQgcHJvamVjdFxuXHRcdFx0XHRjb25zdCBmaWxlU3RyID0gYXdhaXQgcmVhZEZpbGUoY29uZmlnLnNwZWNGaWxlTmFtZSk7XG5cdFx0XHRcdGNvbnN0IGpzb24gPSBxdWlldFBhcnNlKG1pbmlmeUpTT04oZmlsZVN0cikpO1xuXHRcdFx0XHRpZiAoanNvbiAmJiB1dWlkICE9IHNwZWNVVUlERnJvbU9wZW5hcGkoanNvbikpIHtcblx0XHRcdFx0XHR0aHJvdyAnVVVJRCBkb2VzIG5vdCBtYXRjaCBjdXJyZW50IHByb2plY3QuJztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBDYXNlIDI6IFVVSUQgbm90IHBhc3NlZCBpblxuXHRcdGVsc2Uge1xuXHRcdFx0aWYgKCAhIGV4aXN0cykge1xuXHRcdFx0XHR0aHJvdyAnbWlzc2luZyBwcm9qZWN0IFVVSUQuJztcblx0XHRcdH1cblx0XHRcdGNvbnN0IGZpbGVTdHIgPSBhd2FpdCByZWFkRmlsZShjb25maWcuc3BlY0ZpbGVOYW1lKTtcblx0XHRcdGNvbnN0IGpzb24gPSBxdWlldFBhcnNlKG1pbmlmeUpTT04oZmlsZVN0cikpO1xuXHRcdFx0aWYgKCAhIGpzb24pIHtcblx0XHRcdFx0dGhyb3cgJ21pc3NpbmcgcHJvamVjdCBVVUlELic7XG5cdFx0XHR9XG5cdFx0XHR1dWlkID0gc3BlY1VVSURGcm9tT3BlbmFwaShqc29uKTtcblx0XHRcdGlmICggISB1dWlkKSB7XG5cdFx0XHRcdHRocm93ICdtaXNzaW5nIHByb2plY3QgVVVJRC4nO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRjYXRjaChlKSB7XG5cdFx0c3Bpbm5lci5zdG9wKCk7XG5cdFx0Y29uc29sZS5sb2coY2hhbGsucmVkKGBQdWxsIGZhaWxlZDogJHtlfWApKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBMb2FkIHNwZWMgaW5mbyAmIGRhdGFcblx0dHJ5IHtcblx0XHRhd2FpdCBkaXNwYXRjaChzcGVjQWN0aW9ucy5sb2FkSW5mbyh1dWlkKSk7XG5cdFx0YXdhaXQgZGlzcGF0Y2goc3BlY0FjdGlvbnMubG9hZChzcGVjQWN0aW9ucy5nZXRTcGVjRmlsZUxpbmsoZ2V0U3RhdGUoKSkpKTtcblx0fVxuXHRjYXRjaChlKSB7XG5cdFx0c3Bpbm5lci5zdG9wKCk7XG5cdFx0Y29uc29sZS5sb2coY2hhbGsucmVkKGBQdWxsIGZhaWxlZDogJHtlLm1lc3NhZ2V9YCkpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIFdyaXRlIGZpbGVcblx0dHJ5IHtcblx0XHRhd2FpdCB3cml0ZUZpbGUoY29uZmlnLnNwZWNGaWxlTmFtZSwgc3BlY0FjdGlvbnMuZ2V0RGF0YShnZXRTdGF0ZSgpKSk7XG5cdH1cblx0Y2F0Y2goZSkge1xuXHRcdGNvbnNvbGUubG9nKGNoYWxrLnJlZChlKSk7XG5cdFx0c3Bpbm5lci5zdG9wKCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdFxuXHRzcGlubmVyLnN0b3AoKTtcblx0Y29uc29sZS5sb2coY2hhbGsuY3lhbignUHVsbGVkIGZyb20gVG9vbGJlYW0uJykpO1xufVxuIl19