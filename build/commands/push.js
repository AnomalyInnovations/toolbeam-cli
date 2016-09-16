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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9wdXNoLmpzIl0sIm5hbWVzIjpbInNwZWNBY3Rpb25zIiwic3RvcmUiLCJmaWxlIiwiZmlsZVN0ciIsInNwaW5uZXIiLCJzdGFydCIsImNvbnNvbGUiLCJsb2ciLCJyZWQiLCJzdG9wIiwianNvbiIsImlzVmFsaWQiLCJ2YWxpZGF0ZSIsImVycm9yIiwicGF0aCIsImRhdGFQYXRoIiwic3BsaXQiLCJzcGxpY2UiLCJtYXAiLCJyZXBsYWNlIiwiam9pbiIsIm1lc3NhZ2UiLCJkaXNwYXRjaCIsInVwZGF0ZSIsImN5YW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUVBOztBQUNBOztBQUNBOzs7O0FBQ0E7O0lBQVlBLFc7Ozs7Ozs7dUVBRUcsaUJBQWVDLEtBQWYsRUFBc0JDLElBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNWQyxhQURVO0FBR1JDLGFBSFEsR0FHRSwrQkFBdUJGLElBQXZCLE9BSEY7O0FBSWRFLGNBQVFDLEtBQVI7O0FBRUE7QUFOYztBQUFBO0FBQUEsYUFRRyxvQkFBU0gsSUFBVCxDQVJIOztBQUFBO0FBUWJDLGFBUmE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFXYkcsY0FBUUMsR0FBUixDQUFZLGdCQUFNQyxHQUFOLGFBQVo7QUFDQUosY0FBUUssSUFBUjtBQVphOztBQUFBOztBQWdCZDtBQUNNQyxVQWpCUSxHQWlCRCxzQkFBVyxzQkFBV1AsT0FBWCxDQUFYLENBakJDOztBQUFBLFlBa0JWTyxTQUFTLElBbEJDO0FBQUE7QUFBQTtBQUFBOztBQW1CYkosY0FBUUMsR0FBUixDQUFZLGdCQUFNQyxHQUFOLENBQVUscUJBQVYsQ0FBWjtBQUNBSixjQUFRSyxJQUFSO0FBcEJhOztBQUFBOztBQXdCZDtBQUNNRSxhQXpCUSxHQXlCRSxhQUFjQyxRQUFkLENBQXVCRixJQUF2Qix1QkF6QkY7O0FBQUEsVUEwQlBDLE9BMUJPO0FBQUE7QUFBQTtBQUFBOztBQTJCUEUsV0EzQk8sR0EyQkMsYUFBY0EsS0EzQmY7QUE0QlBDLFVBNUJPLEdBNEJBRCxNQUFNRSxRQUFOLENBQWVDLEtBQWYsQ0FBcUIsR0FBckIsRUFDWEMsTUFEVyxDQUNKLENBREksRUFFWEMsR0FGVyxDQUVQO0FBQUEsY0FBUUosS0FBS0ssT0FBTCxDQUFhLE1BQWIsRUFBcUIsR0FBckIsQ0FBUjtBQUFBLE9BRk8sRUFHWEMsSUFIVyxDQUdOLEtBSE0sQ0E1QkE7O0FBZ0NiZCxjQUFRQyxHQUFSLENBQVksZ0JBQU1DLEdBQU4sYUFBb0JLLE1BQU1RLE9BQTFCLGFBQXlDUCxJQUF6QyxRQUFaO0FBQ0FWLGNBQVFLLElBQVI7QUFqQ2E7O0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFzQ1BSLE1BQU1xQixRQUFOLENBQWV0QixZQUFZdUIsTUFBWixDQUFtQmIsSUFBbkIsQ0FBZixDQXRDTzs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQXlDYk4sY0FBUUssSUFBUjtBQUNBSCxjQUFRQyxHQUFSLENBQVksZ0JBQU1DLEdBQU4sbUJBQTBCLFlBQUVhLE9BQTVCLENBQVo7QUExQ2E7O0FBQUE7O0FBOENkakIsY0FBUUssSUFBUjtBQUNBSCxjQUFRQyxHQUFSLENBQVksZ0JBQU1pQixJQUFOLGFBQXFCdEIsSUFBckIsbUJBQVo7O0FBL0NjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEUiLCJmaWxlIjoicHVzaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjaGFsayBmcm9tICdjaGFsayc7XG5pbXBvcnQgc3BlY1ZhbGlkYXRvciBmcm9tICd0djQnO1xuaW1wb3J0IHsgU3Bpbm5lciB9IGZyb20gJ2NsdWknO1xuXG5pbXBvcnQgeyByZWFkRmlsZSB9IGZyb20gJy4uL2xpYnMvZmlsZSc7XG5pbXBvcnQgeyBxdWlldFBhcnNlLCBtaW5pZnlKU09OIH0gZnJvbSAnLi4vbGlicy9qc29uJztcbmltcG9ydCBzcGVjU2NoZW1hIGZyb20gJy4uL2xpYnMvc3BlYy1zY2hlbWEnO1xuaW1wb3J0ICogYXMgc3BlY0FjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9zcGVjLWFjdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbihzdG9yZSwgZmlsZSkge1xuXHRsZXQgZmlsZVN0cjtcblxuXHRjb25zdCBzcGlubmVyID0gbmV3IFNwaW5uZXIoYFB1c2hpbmcgJHtmaWxlfeKApmApO1xuXHRzcGlubmVyLnN0YXJ0KCk7XG5cblx0Ly8gUmVhZCBmaWxlXG5cdHRyeSB7XG5cdFx0ZmlsZVN0ciA9IGF3YWl0IHJlYWRGaWxlKGZpbGUpO1xuXHR9XG5cdGNhdGNoKGUpIHtcblx0XHRjb25zb2xlLmxvZyhjaGFsay5yZWQoZSkpO1xuXHRcdHNwaW5uZXIuc3RvcCgpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIFZhbGlkYXRlIEpTT05cblx0Y29uc3QganNvbiA9IHF1aWV0UGFyc2UobWluaWZ5SlNPTihmaWxlU3RyKSk7XG5cdGlmIChqc29uID09PSBudWxsKSB7XG5cdFx0Y29uc29sZS5sb2coY2hhbGsucmVkKCdFcnJvcjogSW52YWxpZCBKU09OJykpO1xuXHRcdHNwaW5uZXIuc3RvcCgpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIFZhbGlkYXRlIE9wZW4gQVBJIFNwZWNcblx0Y29uc3QgaXNWYWxpZCA9IHNwZWNWYWxpZGF0b3IudmFsaWRhdGUoanNvbiwgc3BlY1NjaGVtYSk7XG5cdGlmICggISBpc1ZhbGlkKSB7XG5cdFx0Y29uc3QgZXJyb3IgPSBzcGVjVmFsaWRhdG9yLmVycm9yO1xuXHRcdGNvbnN0IHBhdGggPSBlcnJvci5kYXRhUGF0aC5zcGxpdCgnLycpXG5cdFx0XHQuc3BsaWNlKDEpXG5cdFx0XHQubWFwKHBhdGggPT4gcGF0aC5yZXBsYWNlKC9+MS9naSwgJy8nKSlcblx0XHRcdC5qb2luKCcgPiAnKTtcblx0XHRjb25zb2xlLmxvZyhjaGFsay5yZWQoYEVycm9yOiAke2Vycm9yLm1lc3NhZ2V9IGluIFwiJHtwYXRofVwiLmApKTtcblx0XHRzcGlubmVyLnN0b3AoKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR0cnkge1xuXHRcdGF3YWl0IHN0b3JlLmRpc3BhdGNoKHNwZWNBY3Rpb25zLnVwZGF0ZShqc29uKSk7XG5cdH1cblx0Y2F0Y2goZSkge1xuXHRcdHNwaW5uZXIuc3RvcCgpO1xuXHRcdGNvbnNvbGUubG9nKGNoYWxrLnJlZChgUHVzaCBmYWlsZWQ6ICR7ZS5tZXNzYWdlfWApKTtcblx0XHRyZXR1cm47XG5cdH1cblx0XG5cdHNwaW5uZXIuc3RvcCgpO1xuXHRjb25zb2xlLmxvZyhjaGFsay5jeWFuKGBQdXNoZWQgJHtmaWxlfSB0byBUb29sYmVhbS5gKSk7XG59XG4iXX0=