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

var _tv = require('tv4');

var _tv2 = _interopRequireDefault(_tv);

var _clui = require('clui');

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _file = require('../libs/file');

var _json = require('../libs/json');

var _consumeOpenapi = require('../libs/consume-openapi');

var _specSchema = require('../libs/spec-schema');

var _specSchema2 = _interopRequireDefault(_specSchema);

var _specActions = require('../actions/spec-actions');

var specActions = _interopRequireWildcard(_specActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2) {
		var getState = _ref2.getState;
		var dispatch = _ref2.dispatch;
		var fileStr, spinner, json, isValid, error, path, createRet;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						fileStr = void 0;
						spinner = new _clui.Spinner('Pushing…');

						spinner.start();

						// Read file
						_context.prev = 3;
						_context.next = 6;
						return (0, _file.readFile)(_config2.default.specFileName);

					case 6:
						fileStr = _context.sent;
						_context.next = 14;
						break;

					case 9:
						_context.prev = 9;
						_context.t0 = _context['catch'](3);

						console.log(_chalk2.default.red(_context.t0));
						spinner.stop();
						return _context.abrupt('return');

					case 14:

						// Validate JSON
						json = (0, _json.quietParse)((0, _json.minifyJSON)(fileStr));

						if (!(json === null)) {
							_context.next = 19;
							break;
						}

						console.log(_chalk2.default.red('Error: Invalid JSON'));
						spinner.stop();
						return _context.abrupt('return');

					case 19:

						// Validate Open API Spec
						isValid = _tv2.default.validate(json, _specSchema2.default);

						if (isValid) {
							_context.next = 26;
							break;
						}

						error = _tv2.default.error;
						path = error.dataPath.split('/').splice(1).map(function (path) {
							return path.replace(/~1/gi, '/');
						}).join(' > ');

						console.log(_chalk2.default.red('Error: ' + error.message + ' in "' + path + '".'));
						spinner.stop();
						return _context.abrupt('return');

					case 26:
						if (!((0, _consumeOpenapi.specUUIDFromOpenapi)(json) != null)) {
							_context.next = 39;
							break;
						}

						_context.prev = 27;
						_context.next = 30;
						return dispatch(specActions.update(json));

					case 30:
						_context.next = 37;
						break;

					case 32:
						_context.prev = 32;
						_context.t1 = _context['catch'](27);

						spinner.stop();
						console.log(_chalk2.default.red('Push failed: ' + _context.t1.message));
						return _context.abrupt('return');

					case 37:
						_context.next = 71;
						break;

					case 39:
						// call create spec api
						createRet = void 0;
						_context.prev = 40;
						_context.next = 43;
						return dispatch(specActions.create(json));

					case 43:
						createRet = _context.sent;
						_context.next = 51;
						break;

					case 46:
						_context.prev = 46;
						_context.t2 = _context['catch'](40);

						spinner.stop();
						console.log(_chalk2.default.red('Push failed: ' + _context.t2.message));
						return _context.abrupt('return');

					case 51:

						// write file
						json.info['x-tb-uuid'] = createRet.data.spec.uuid;
						_context.prev = 52;

						dispatch(specActions.save(json));
						_context.next = 61;
						break;

					case 56:
						_context.prev = 56;
						_context.t3 = _context['catch'](52);

						console.log(_chalk2.default.red(_context.t3));
						spinner.stop();
						return _context.abrupt('return');

					case 61:
						_context.prev = 61;
						_context.next = 64;
						return dispatch(specActions.update(json));

					case 64:
						_context.next = 71;
						break;

					case 66:
						_context.prev = 66;
						_context.t4 = _context['catch'](61);

						spinner.stop();
						console.log(_chalk2.default.red('Push failed: ' + _context.t4.message));
						return _context.abrupt('return');

					case 71:

						spinner.stop();
						console.log(_chalk2.default.cyan('Pushed to Toolbeam.'));

					case 73:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this, [[3, 9], [27, 32], [40, 46], [52, 56], [61, 66]]);
	}));

	return function (_x) {
		return _ref.apply(this, arguments);
	};
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9wdXNoLmpzIl0sIm5hbWVzIjpbInNwZWNBY3Rpb25zIiwiZ2V0U3RhdGUiLCJkaXNwYXRjaCIsImZpbGVTdHIiLCJzcGlubmVyIiwic3RhcnQiLCJzcGVjRmlsZU5hbWUiLCJjb25zb2xlIiwibG9nIiwicmVkIiwic3RvcCIsImpzb24iLCJpc1ZhbGlkIiwidmFsaWRhdGUiLCJlcnJvciIsInBhdGgiLCJkYXRhUGF0aCIsInNwbGl0Iiwic3BsaWNlIiwibWFwIiwicmVwbGFjZSIsImpvaW4iLCJtZXNzYWdlIiwidXBkYXRlIiwiY3JlYXRlUmV0IiwiY3JlYXRlIiwiaW5mbyIsImRhdGEiLCJzcGVjIiwidXVpZCIsInNhdmUiLCJjeWFuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7O0lBQVlBLFc7Ozs7Ozs7dUVBRUc7QUFBQSxNQUFnQkMsUUFBaEIsU0FBZ0JBLFFBQWhCO0FBQUEsTUFBMEJDLFFBQTFCLFNBQTBCQSxRQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDVkMsYUFEVTtBQUdSQyxhQUhRLEdBR0Usa0JBQVksVUFBWixDQUhGOztBQUlkQSxjQUFRQyxLQUFSOztBQUVBO0FBTmM7QUFBQTtBQUFBLGFBUUcsb0JBQVMsaUJBQU9DLFlBQWhCLENBUkg7O0FBQUE7QUFRYkgsYUFSYTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQVdiSSxjQUFRQyxHQUFSLENBQVksZ0JBQU1DLEdBQU4sYUFBWjtBQUNBTCxjQUFRTSxJQUFSO0FBWmE7O0FBQUE7O0FBZ0JkO0FBQ0lDLFVBakJVLEdBaUJILHNCQUFXLHNCQUFXUixPQUFYLENBQVgsQ0FqQkc7O0FBQUEsWUFrQlZRLFNBQVMsSUFsQkM7QUFBQTtBQUFBO0FBQUE7O0FBbUJiSixjQUFRQyxHQUFSLENBQVksZ0JBQU1DLEdBQU4sQ0FBVSxxQkFBVixDQUFaO0FBQ0FMLGNBQVFNLElBQVI7QUFwQmE7O0FBQUE7O0FBd0JkO0FBQ01FLGFBekJRLEdBeUJFLGFBQWNDLFFBQWQsQ0FBdUJGLElBQXZCLHVCQXpCRjs7QUFBQSxVQTBCUEMsT0ExQk87QUFBQTtBQUFBO0FBQUE7O0FBMkJQRSxXQTNCTyxHQTJCQyxhQUFjQSxLQTNCZjtBQTRCUEMsVUE1Qk8sR0E0QkFELE1BQU1FLFFBQU4sQ0FBZUMsS0FBZixDQUFxQixHQUFyQixFQUNYQyxNQURXLENBQ0osQ0FESSxFQUVYQyxHQUZXLENBRVA7QUFBQSxjQUFRSixLQUFLSyxPQUFMLENBQWEsTUFBYixFQUFxQixHQUFyQixDQUFSO0FBQUEsT0FGTyxFQUdYQyxJQUhXLENBR04sS0FITSxDQTVCQTs7QUFnQ2JkLGNBQVFDLEdBQVIsQ0FBWSxnQkFBTUMsR0FBTixhQUFvQkssTUFBTVEsT0FBMUIsYUFBeUNQLElBQXpDLFFBQVo7QUFDQVgsY0FBUU0sSUFBUjtBQWpDYTs7QUFBQTtBQUFBLFlBcUNWLHlDQUFvQkMsSUFBcEIsS0FBNkIsSUFyQ25CO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxhQXdDTlQsU0FBU0YsWUFBWXVCLE1BQVosQ0FBbUJaLElBQW5CLENBQVQsQ0F4Q007O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUEyQ1pQLGNBQVFNLElBQVI7QUFDQUgsY0FBUUMsR0FBUixDQUFZLGdCQUFNQyxHQUFOLG1CQUEwQixZQUFFYSxPQUE1QixDQUFaO0FBNUNZOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQWlEYjtBQUNJRSxlQWxEUztBQUFBO0FBQUE7QUFBQSxhQW9ETXRCLFNBQVNGLFlBQVl5QixNQUFaLENBQW1CZCxJQUFuQixDQUFULENBcEROOztBQUFBO0FBb0RaYSxlQXBEWTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQXVEWnBCLGNBQVFNLElBQVI7QUFDQUgsY0FBUUMsR0FBUixDQUFZLGdCQUFNQyxHQUFOLG1CQUEwQixZQUFFYSxPQUE1QixDQUFaO0FBeERZOztBQUFBOztBQTREYjtBQUNBWCxXQUFLZSxJQUFMLENBQVUsV0FBVixJQUF5QkYsVUFBVUcsSUFBVixDQUFlQyxJQUFmLENBQW9CQyxJQUE3QztBQTdEYTs7QUErRFozQixlQUFTRixZQUFZOEIsSUFBWixDQUFpQm5CLElBQWpCLENBQVQ7QUEvRFk7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBa0VaSixjQUFRQyxHQUFSLENBQVksZ0JBQU1DLEdBQU4sYUFBWjtBQUNBTCxjQUFRTSxJQUFSO0FBbkVZOztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBeUVOUixTQUFTRixZQUFZdUIsTUFBWixDQUFtQlosSUFBbkIsQ0FBVCxDQXpFTTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQTRFWlAsY0FBUU0sSUFBUjtBQUNBSCxjQUFRQyxHQUFSLENBQVksZ0JBQU1DLEdBQU4sbUJBQTBCLFlBQUVhLE9BQTVCLENBQVo7QUE3RVk7O0FBQUE7O0FBa0ZkbEIsY0FBUU0sSUFBUjtBQUNBSCxjQUFRQyxHQUFSLENBQVksZ0JBQU11QixJQUFOLENBQVcscUJBQVgsQ0FBWjs7QUFuRmM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRSIsImZpbGUiOiJwdXNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJztcbmltcG9ydCBzcGVjVmFsaWRhdG9yIGZyb20gJ3R2NCc7XG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSAnY2x1aSc7XG5cbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7IHJlYWRGaWxlIH0gZnJvbSAnLi4vbGlicy9maWxlJztcbmltcG9ydCB7IHF1aWV0UGFyc2UsIG1pbmlmeUpTT04gfSBmcm9tICcuLi9saWJzL2pzb24nO1xuaW1wb3J0IHsgc3BlY1VVSURGcm9tT3BlbmFwaSB9IGZyb20gJy4uL2xpYnMvY29uc3VtZS1vcGVuYXBpJztcbmltcG9ydCBzcGVjU2NoZW1hIGZyb20gJy4uL2xpYnMvc3BlYy1zY2hlbWEnO1xuaW1wb3J0ICogYXMgc3BlY0FjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9zcGVjLWFjdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbih7Z2V0U3RhdGUsIGRpc3BhdGNofSkge1xuXHRsZXQgZmlsZVN0cjtcblxuXHRjb25zdCBzcGlubmVyID0gbmV3IFNwaW5uZXIoJ1B1c2hpbmfigKYnKTtcblx0c3Bpbm5lci5zdGFydCgpO1xuXG5cdC8vIFJlYWQgZmlsZVxuXHR0cnkge1xuXHRcdGZpbGVTdHIgPSBhd2FpdCByZWFkRmlsZShjb25maWcuc3BlY0ZpbGVOYW1lKTtcblx0fVxuXHRjYXRjaChlKSB7XG5cdFx0Y29uc29sZS5sb2coY2hhbGsucmVkKGUpKTtcblx0XHRzcGlubmVyLnN0b3AoKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBWYWxpZGF0ZSBKU09OXG5cdGxldCBqc29uID0gcXVpZXRQYXJzZShtaW5pZnlKU09OKGZpbGVTdHIpKTtcblx0aWYgKGpzb24gPT09IG51bGwpIHtcblx0XHRjb25zb2xlLmxvZyhjaGFsay5yZWQoJ0Vycm9yOiBJbnZhbGlkIEpTT04nKSk7XG5cdFx0c3Bpbm5lci5zdG9wKCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gVmFsaWRhdGUgT3BlbiBBUEkgU3BlY1xuXHRjb25zdCBpc1ZhbGlkID0gc3BlY1ZhbGlkYXRvci52YWxpZGF0ZShqc29uLCBzcGVjU2NoZW1hKTtcblx0aWYgKCAhIGlzVmFsaWQpIHtcblx0XHRjb25zdCBlcnJvciA9IHNwZWNWYWxpZGF0b3IuZXJyb3I7XG5cdFx0Y29uc3QgcGF0aCA9IGVycm9yLmRhdGFQYXRoLnNwbGl0KCcvJylcblx0XHRcdC5zcGxpY2UoMSlcblx0XHRcdC5tYXAocGF0aCA9PiBwYXRoLnJlcGxhY2UoL34xL2dpLCAnLycpKVxuXHRcdFx0LmpvaW4oJyA+ICcpO1xuXHRcdGNvbnNvbGUubG9nKGNoYWxrLnJlZChgRXJyb3I6ICR7ZXJyb3IubWVzc2FnZX0gaW4gXCIke3BhdGh9XCIuYCkpO1xuXHRcdHNwaW5uZXIuc3RvcCgpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmIChzcGVjVVVJREZyb21PcGVuYXBpKGpzb24pICE9IG51bGwpIHtcblx0XHQvLyBjYWxsIHVwZGF0ZSBzcGVjIGFwaVxuXHRcdHRyeSB7XG5cdFx0XHRhd2FpdCBkaXNwYXRjaChzcGVjQWN0aW9ucy51cGRhdGUoanNvbikpO1xuXHRcdH1cblx0XHRjYXRjaChlKSB7XG5cdFx0XHRzcGlubmVyLnN0b3AoKTtcblx0XHRcdGNvbnNvbGUubG9nKGNoYWxrLnJlZChgUHVzaCBmYWlsZWQ6ICR7ZS5tZXNzYWdlfWApKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gY2FsbCBjcmVhdGUgc3BlYyBhcGlcblx0XHRsZXQgY3JlYXRlUmV0O1xuXHRcdHRyeSB7XG5cdFx0XHRjcmVhdGVSZXQgPSBhd2FpdCBkaXNwYXRjaChzcGVjQWN0aW9ucy5jcmVhdGUoanNvbikpO1xuXHRcdH1cblx0XHRjYXRjaChlKSB7XG5cdFx0XHRzcGlubmVyLnN0b3AoKTtcblx0XHRcdGNvbnNvbGUubG9nKGNoYWxrLnJlZChgUHVzaCBmYWlsZWQ6ICR7ZS5tZXNzYWdlfWApKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyB3cml0ZSBmaWxlXG5cdFx0anNvbi5pbmZvWyd4LXRiLXV1aWQnXSA9IGNyZWF0ZVJldC5kYXRhLnNwZWMudXVpZDtcblx0XHR0cnkge1xuXHRcdFx0ZGlzcGF0Y2goc3BlY0FjdGlvbnMuc2F2ZShqc29uKSk7XG5cdFx0fVxuXHRcdGNhdGNoKGUpIHtcblx0XHRcdGNvbnNvbGUubG9nKGNoYWxrLnJlZChlKSk7XG5cdFx0XHRzcGlubmVyLnN0b3AoKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBjYWxsIHVwZGF0ZSBzcGVjIGFwaVxuXHRcdHRyeSB7XG5cdFx0XHRhd2FpdCBkaXNwYXRjaChzcGVjQWN0aW9ucy51cGRhdGUoanNvbikpO1xuXHRcdH1cblx0XHRjYXRjaChlKSB7XG5cdFx0XHRzcGlubmVyLnN0b3AoKTtcblx0XHRcdGNvbnNvbGUubG9nKGNoYWxrLnJlZChgUHVzaCBmYWlsZWQ6ICR7ZS5tZXNzYWdlfWApKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdH1cblx0XG5cdHNwaW5uZXIuc3RvcCgpO1xuXHRjb25zb2xlLmxvZyhjaGFsay5jeWFuKCdQdXNoZWQgdG8gVG9vbGJlYW0uJykpO1xufVxuIl19