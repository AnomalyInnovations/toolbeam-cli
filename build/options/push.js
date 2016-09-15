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

var _file = require('../libs/file');

var _json = require('../libs/json');

var _specSchema = require('../libs/spec-schema');

var _specSchema2 = _interopRequireDefault(_specSchema);

var _specActions = require('../actions/spec-actions');

var specActions = _interopRequireWildcard(_specActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(store, file) {
		var fileStr, spinner, json, isValid, error, path;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						fileStr = void 0;
						spinner = new _clui.Spinner('Pushing ' + file + '…');

						spinner.start();

						// Read file
						_context.prev = 3;
						_context.next = 6;
						return (0, _file.readFile)(file);

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
						_context.prev = 26;
						_context.next = 29;
						return store.dispatch(specActions.update(json));

					case 29:
						_context.next = 36;
						break;

					case 31:
						_context.prev = 31;
						_context.t1 = _context['catch'](26);

						spinner.stop();
						console.log(_chalk2.default.red('Push failed: ' + _context.t1.message));
						return _context.abrupt('return');

					case 36:

						spinner.stop();
						console.log(_chalk2.default.cyan('Pushed ' + file + ' to Toolbeam.'));

					case 38:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this, [[3, 9], [26, 31]]);
	}));

	return function (_x, _x2) {
		return _ref.apply(this, arguments);
	};
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcHRpb25zL3B1c2guanMiXSwibmFtZXMiOlsic3BlY0FjdGlvbnMiLCJzdG9yZSIsImZpbGUiLCJmaWxlU3RyIiwic3Bpbm5lciIsInN0YXJ0IiwiY29uc29sZSIsImxvZyIsInJlZCIsInN0b3AiLCJqc29uIiwiaXNWYWxpZCIsInZhbGlkYXRlIiwiZXJyb3IiLCJwYXRoIiwiZGF0YVBhdGgiLCJzcGxpdCIsInNwbGljZSIsIm1hcCIsInJlcGxhY2UiLCJqb2luIiwibWVzc2FnZSIsImRpc3BhdGNoIiwidXBkYXRlIiwiY3lhbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7SUFBWUEsVzs7Ozs7Ozt1RUFFRyxpQkFBZUMsS0FBZixFQUFzQkMsSUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1ZDLGFBRFU7QUFHUkMsYUFIUSxHQUdFLCtCQUF1QkYsSUFBdkIsT0FIRjs7QUFJZEUsY0FBUUMsS0FBUjs7QUFFQTtBQU5jO0FBQUE7QUFBQSxhQVFHLG9CQUFTSCxJQUFULENBUkg7O0FBQUE7QUFRYkMsYUFSYTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQVdiRyxjQUFRQyxHQUFSLENBQVksZ0JBQU1DLEdBQU4sYUFBWjtBQUNBSixjQUFRSyxJQUFSO0FBWmE7O0FBQUE7O0FBZ0JkO0FBQ01DLFVBakJRLEdBaUJELHNCQUFXLHNCQUFXUCxPQUFYLENBQVgsQ0FqQkM7O0FBQUEsWUFrQlZPLFNBQVMsSUFsQkM7QUFBQTtBQUFBO0FBQUE7O0FBbUJiSixjQUFRQyxHQUFSLENBQVksZ0JBQU1DLEdBQU4sQ0FBVSxxQkFBVixDQUFaO0FBQ0FKLGNBQVFLLElBQVI7QUFwQmE7O0FBQUE7O0FBd0JkO0FBQ01FLGFBekJRLEdBeUJFLGFBQWNDLFFBQWQsQ0FBdUJGLElBQXZCLHVCQXpCRjs7QUFBQSxVQTBCUEMsT0ExQk87QUFBQTtBQUFBO0FBQUE7O0FBMkJQRSxXQTNCTyxHQTJCQyxhQUFjQSxLQTNCZjtBQTRCUEMsVUE1Qk8sR0E0QkFELE1BQU1FLFFBQU4sQ0FBZUMsS0FBZixDQUFxQixHQUFyQixFQUNYQyxNQURXLENBQ0osQ0FESSxFQUVYQyxHQUZXLENBRVA7QUFBQSxjQUFRSixLQUFLSyxPQUFMLENBQWEsTUFBYixFQUFxQixHQUFyQixDQUFSO0FBQUEsT0FGTyxFQUdYQyxJQUhXLENBR04sS0FITSxDQTVCQTs7QUFnQ2JkLGNBQVFDLEdBQVIsQ0FBWSxnQkFBTUMsR0FBTixhQUFvQkssTUFBTVEsT0FBMUIsYUFBeUNQLElBQXpDLFFBQVo7QUFDQVYsY0FBUUssSUFBUjtBQWpDYTs7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXNDUFIsTUFBTXFCLFFBQU4sQ0FBZXRCLFlBQVl1QixNQUFaLENBQW1CYixJQUFuQixDQUFmLENBdENPOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBeUNiTixjQUFRSyxJQUFSO0FBQ0FILGNBQVFDLEdBQVIsQ0FBWSxnQkFBTUMsR0FBTixtQkFBMEIsWUFBRWEsT0FBNUIsQ0FBWjtBQTFDYTs7QUFBQTs7QUE4Q2RqQixjQUFRSyxJQUFSO0FBQ0FILGNBQVFDLEdBQVIsQ0FBWSxnQkFBTWlCLElBQU4sYUFBcUJ0QixJQUFyQixtQkFBWjs7QUEvQ2M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRSIsImZpbGUiOiJwdXNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJztcbmltcG9ydCBzcGVjVmFsaWRhdG9yIGZyb20gJ3R2NCc7XG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSAnY2x1aSc7XG5cbmltcG9ydCB7IHJlYWRGaWxlIH0gZnJvbSAnLi4vbGlicy9maWxlJztcbmltcG9ydCB7IHF1aWV0UGFyc2UsIG1pbmlmeUpTT04gfSBmcm9tICcuLi9saWJzL2pzb24nO1xuaW1wb3J0IHNwZWNTY2hlbWEgZnJvbSAnLi4vbGlicy9zcGVjLXNjaGVtYSc7XG5pbXBvcnQgKiBhcyBzcGVjQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL3NwZWMtYWN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uKHN0b3JlLCBmaWxlKSB7XG5cdGxldCBmaWxlU3RyO1xuXG5cdGNvbnN0IHNwaW5uZXIgPSBuZXcgU3Bpbm5lcihgUHVzaGluZyAke2ZpbGV94oCmYCk7XG5cdHNwaW5uZXIuc3RhcnQoKTtcblxuXHQvLyBSZWFkIGZpbGVcblx0dHJ5IHtcblx0XHRmaWxlU3RyID0gYXdhaXQgcmVhZEZpbGUoZmlsZSk7XG5cdH1cblx0Y2F0Y2goZSkge1xuXHRcdGNvbnNvbGUubG9nKGNoYWxrLnJlZChlKSk7XG5cdFx0c3Bpbm5lci5zdG9wKCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gVmFsaWRhdGUgSlNPTlxuXHRjb25zdCBqc29uID0gcXVpZXRQYXJzZShtaW5pZnlKU09OKGZpbGVTdHIpKTtcblx0aWYgKGpzb24gPT09IG51bGwpIHtcblx0XHRjb25zb2xlLmxvZyhjaGFsay5yZWQoJ0Vycm9yOiBJbnZhbGlkIEpTT04nKSk7XG5cdFx0c3Bpbm5lci5zdG9wKCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gVmFsaWRhdGUgT3BlbiBBUEkgU3BlY1xuXHRjb25zdCBpc1ZhbGlkID0gc3BlY1ZhbGlkYXRvci52YWxpZGF0ZShqc29uLCBzcGVjU2NoZW1hKTtcblx0aWYgKCAhIGlzVmFsaWQpIHtcblx0XHRjb25zdCBlcnJvciA9IHNwZWNWYWxpZGF0b3IuZXJyb3I7XG5cdFx0Y29uc3QgcGF0aCA9IGVycm9yLmRhdGFQYXRoLnNwbGl0KCcvJylcblx0XHRcdC5zcGxpY2UoMSlcblx0XHRcdC5tYXAocGF0aCA9PiBwYXRoLnJlcGxhY2UoL34xL2dpLCAnLycpKVxuXHRcdFx0LmpvaW4oJyA+ICcpO1xuXHRcdGNvbnNvbGUubG9nKGNoYWxrLnJlZChgRXJyb3I6ICR7ZXJyb3IubWVzc2FnZX0gaW4gXCIke3BhdGh9XCIuYCkpO1xuXHRcdHNwaW5uZXIuc3RvcCgpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHRyeSB7XG5cdFx0YXdhaXQgc3RvcmUuZGlzcGF0Y2goc3BlY0FjdGlvbnMudXBkYXRlKGpzb24pKTtcblx0fVxuXHRjYXRjaChlKSB7XG5cdFx0c3Bpbm5lci5zdG9wKCk7XG5cdFx0Y29uc29sZS5sb2coY2hhbGsucmVkKGBQdXNoIGZhaWxlZDogJHtlLm1lc3NhZ2V9YCkpO1xuXHRcdHJldHVybjtcblx0fVxuXHRcblx0c3Bpbm5lci5zdG9wKCk7XG5cdGNvbnNvbGUubG9nKGNoYWxrLmN5YW4oYFB1c2hlZCAke2ZpbGV9IHRvIFRvb2xiZWFtLmApKTtcbn1cbiJdfQ==