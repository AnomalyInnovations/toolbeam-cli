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

var _json = require('../libs/json');

var _specActions = require('../actions/spec-actions');

var specActions = _interopRequireWildcard(_specActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2, path, toolData, paramData) {
		var getState = _ref2.getState;
		var dispatch = _ref2.dispatch;
		var spinner, operation, security, error, exists, fileStr, json;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						spinner = new _clui.Spinner('Adding tool…');

						spinner.start();

						// validate parameter
						operation = normalizeOperation(toolData.operation);
						security = normalizeSecurity(toolData.security);
						error = false;

						paramData.forEach(function (perData) {
							if (!perData.name) {
								error = 'missing parameter name';
								return;
							} else if (!perData.in) {
								error = 'missing parameter in';
								return;
							}
						});

						if (!error) {
							_context.next = 10;
							break;
						}

						console.log(_chalk2.default.red('Add failed: ' + error + '.'));
						spinner.stop();
						return _context.abrupt('return');

					case 10:
						_context.prev = 10;
						_context.next = 13;
						return (0, _file.existFile)(_config2.default.specFileName);

					case 13:
						exists = _context.sent;

						if (exists) {
							_context.next = 18;
							break;
						}

						console.log(_chalk2.default.red('Add failed: ensure to run tb init first.'));
						spinner.stop();
						return _context.abrupt('return');

					case 18:
						_context.next = 25;
						break;

					case 20:
						_context.prev = 20;
						_context.t0 = _context['catch'](10);

						console.log(_chalk2.default.red(_context.t0));
						spinner.stop();
						return _context.abrupt('return');

					case 25:

						// load spec
						fileStr = void 0;
						_context.prev = 26;
						_context.next = 29;
						return (0, _file.readFile)(_config2.default.specFileName);

					case 29:
						fileStr = _context.sent;
						_context.next = 37;
						break;

					case 32:
						_context.prev = 32;
						_context.t1 = _context['catch'](26);

						console.log(_chalk2.default.red(_context.t1));
						spinner.stop();
						return _context.abrupt('return');

					case 37:

						// validate JSON
						json = (0, _json.quietParse)((0, _json.minifyJSON)(fileStr));

						if (!(json === null)) {
							_context.next = 42;
							break;
						}

						console.log(_chalk2.default.red('Error: Invalid JSON'));
						spinner.stop();
						return _context.abrupt('return');

					case 42:
						if (!(json.paths && json.paths[path] && json.paths[path][operation])) {
							_context.next = 46;
							break;
						}

						console.log(_chalk2.default.red('Add failed: tool already exist.'));
						spinner.stop();
						return _context.abrupt('return');

					case 46:

						// add auth
						if (security == 'basic') {
							json.securityDefinitions = json.securityDefinitions || {};
							json.securityDefinitions.basic_auth = json.securityDefinitions.basic_auth || { 'type': 'basic' };
						}

						// add tool
						json.paths = json.paths || {};
						json.paths[path] = json.paths[path] || {};
						json.paths[path][operation] = {
							"x-tb-name": operation + ' ' + path,
							"operationId": operation + ' ' + path,
							"security": security == 'basic' ? [{ 'basic_auth': [] }] : [],
							"parameters": [],
							"responses": {
								"200": {
									"description": "Results"
								}
							},
							"x-tb-actionLabel": operation == 'get' ? 'Get' : 'Submit',
							"x-tb-color": "red",
							"x-tb-needsConfirm": false,
							"x-tb-needsNotificationPermission": false
						};
						paramData.forEach(function (perData) {
							json.paths[path][operation].parameters.push({
								"name": perData.name,
								"in": perData.in,
								"required": true,
								"type": "string",
								"x-tb-fieldLabel": perData.name,
								"x-tb-fieldPlaceholder": "",
								"x-tb-fieldType": "text"
							});
						});

						// save spec
						_context.prev = 51;

						dispatch(specActions.save(json));
						_context.next = 60;
						break;

					case 55:
						_context.prev = 55;
						_context.t2 = _context['catch'](51);

						console.log(_chalk2.default.red(_context.t2));
						spinner.stop();
						return _context.abrupt('return');

					case 60:

						spinner.stop();
						console.log(_chalk2.default.green('Tool added for ' + path));

					case 62:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this, [[10, 20], [26, 32], [51, 55]]);
	}));

	return function (_x, _x2, _x3, _x4) {
		return _ref.apply(this, arguments);
	};
}();

function normalizeOperation(operation) {
	operation = operation || 'get';
	operation = operation.toLowerCase();
	return operation;
}

function normalizeSecurity(operation) {
	operation = operation || 'none';
	operation = operation.toLowerCase();
	return operation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9hZGQuanMiXSwibmFtZXMiOlsic3BlY0FjdGlvbnMiLCJwYXRoIiwidG9vbERhdGEiLCJwYXJhbURhdGEiLCJnZXRTdGF0ZSIsImRpc3BhdGNoIiwic3Bpbm5lciIsInN0YXJ0Iiwib3BlcmF0aW9uIiwibm9ybWFsaXplT3BlcmF0aW9uIiwic2VjdXJpdHkiLCJub3JtYWxpemVTZWN1cml0eSIsImVycm9yIiwiZm9yRWFjaCIsInBlckRhdGEiLCJuYW1lIiwiaW4iLCJjb25zb2xlIiwibG9nIiwicmVkIiwic3RvcCIsInNwZWNGaWxlTmFtZSIsImV4aXN0cyIsImZpbGVTdHIiLCJqc29uIiwicGF0aHMiLCJzZWN1cml0eURlZmluaXRpb25zIiwiYmFzaWNfYXV0aCIsInBhcmFtZXRlcnMiLCJwdXNoIiwic2F2ZSIsImdyZWVuIiwidG9Mb3dlckNhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0lBQVlBLFc7Ozs7Ozs7dUVBRUcsd0JBQXFDQyxJQUFyQyxFQUEyQ0MsUUFBM0MsRUFBcURDLFNBQXJEO0FBQUEsTUFBZ0JDLFFBQWhCLFNBQWdCQSxRQUFoQjtBQUFBLE1BQTBCQyxRQUExQixTQUEwQkEsUUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRVJDLGFBRlEsR0FFRSxrQkFBWSxjQUFaLENBRkY7O0FBR2RBLGNBQVFDLEtBQVI7O0FBRUE7QUFDTUMsZUFOUSxHQU1JQyxtQkFBbUJQLFNBQVNNLFNBQTVCLENBTko7QUFPUkUsY0FQUSxHQU9HQyxrQkFBa0JULFNBQVNRLFFBQTNCLENBUEg7QUFRVkUsV0FSVSxHQVFGLEtBUkU7O0FBU2RULGdCQUFVVSxPQUFWLENBQWtCLG1CQUFXO0FBQzVCLFdBQUssQ0FBRUMsUUFBUUMsSUFBZixFQUFxQjtBQUNwQkgsZ0JBQVEsd0JBQVI7QUFDQTtBQUNBLFFBSEQsTUFJSyxJ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UUMsSUFEMkI7QUFFM0MsY0FBTUQsUUFBUUUsRUFGNkI7QUFHM0Msb0JBQVksSUFIK0I7QUFJM0MsZ0JBQVEsUUFKbUM7QUFLM0MsMkJBQW1CRixRQUFRQyxJQUxnQjtBQU0zQyxpQ0FBeUIsRUFOa0I7QUFPM0MsMEJBQWtCO0FBUHlCLFFBQTVDO0FBU0EsT0FWRDs7QUFZQTtBQXZHYzs7QUF5R2JWLGVBQVNMLFlBQVk4QixJQUFaLENBQWlCTixJQUFqQixDQUFUO0FBekdhO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQTRHYlAsY0FBUUMsR0FBUixDQUFZLGdCQUFNQyxHQUFOLGFBQVo7QUFDQWIsY0FBUWMsSUFBUjtBQTdHYTs7QUFBQTs7QUFpSGRkLGNBQVFjLElBQVI7QUFDQUgsY0FBUUMsR0FBUixDQUFZLGdCQUFNYSxLQUFOLHFCQUE4QjlCLElBQTlCLENBQVo7O0FBbEhjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEU7Ozs7Ozs7QUFxSGYsU0FBU1Esa0JBQVQsQ0FBNEJELFNBQTVCLEVBQXVDO0FBQ3RDQSxhQUFZQSxhQUFhLEtBQXpCO0FBQ0FBLGFBQVlBLFVBQVV3QixXQUFWLEVBQVo7QUFDQSxRQUFPeEIsU0FBUDtBQUNBOztBQUVELFNBQVNHLGlCQUFULENBQTJCSCxTQUEzQixFQUFzQztBQUNyQ0EsYUFBWUEsYUFBYSxNQUF6QjtBQUNBQSxhQUFZQSxVQUFVd0IsV0FBVixFQUFaO0FBQ0EsUUFBT3hCLFNBQVA7QUFDQSIsImZpbGUiOiJhZGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnO1xuaW1wb3J0IHsgU3Bpbm5lciB9IGZyb20gJ2NsdWknO1xuaW1wb3J0IFVSSSBmcm9tICd1cmlqcyc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XG5cbmltcG9ydCB7IGV4aXN0RmlsZSwgcmVhZEZpbGUsIHdyaXRlRmlsZSB9IGZyb20gJy4uL2xpYnMvZmlsZSc7XG5pbXBvcnQgeyBxdWlldFBhcnNlLCBtaW5pZnlKU09OIH0gZnJvbSAnLi4vbGlicy9qc29uJztcbmltcG9ydCAqIGFzIHNwZWNBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvc3BlYy1hY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24oe2dldFN0YXRlLCBkaXNwYXRjaH0sIHBhdGgsIHRvb2xEYXRhLCBwYXJhbURhdGEpIHtcblxuXHRjb25zdCBzcGlubmVyID0gbmV3IFNwaW5uZXIoJ0FkZGluZyB0b29s4oCmJyk7XG5cdHNwaW5uZXIuc3RhcnQoKTtcblxuXHQvLyB2YWxpZGF0ZSBwYXJhbWV0ZXJcblx0Y29uc3Qgb3BlcmF0aW9uID0gbm9ybWFsaXplT3BlcmF0aW9uKHRvb2xEYXRhLm9wZXJhdGlvbik7XG5cdGNvbnN0IHNlY3VyaXR5ID0gbm9ybWFsaXplU2VjdXJpdHkodG9vbERhdGEuc2VjdXJpdHkpO1xuXHRsZXQgZXJyb3IgPSBmYWxzZTtcblx0cGFyYW1EYXRhLmZvckVhY2gocGVyRGF0YSA9PiB7XG5cdFx0aWYgKCAhIHBlckRhdGEubmFtZSkge1xuXHRcdFx0ZXJyb3IgPSAnbWlzc2luZyBwYXJhbWV0ZXIgbmFtZSc7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGVsc2UgaWYgKCAhIHBlckRhdGEuaW4pIHtcblx0XHRcdGVycm9yID0gJ21pc3NpbmcgcGFyYW1ldGVyIGluJztcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdH0pO1xuXHRpZiAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmxvZyhjaGFsay5yZWQoYEFkZCBmYWlsZWQ6ICR7ZXJyb3J9LmApKTtcblx0XHRzcGlubmVyLnN0b3AoKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBlbnN1cmUgc3BlYyBleGlzdHNcblx0dHJ5IHtcblx0XHRjb25zdCBleGlzdHMgPSBhd2FpdCBleGlzdEZpbGUoY29uZmlnLnNwZWNGaWxlTmFtZSk7XG5cdFx0aWYgKCAhIGV4aXN0cykge1xuXHRcdFx0Y29uc29sZS5sb2coY2hhbGsucmVkKCdBZGQgZmFpbGVkOiBlbnN1cmUgdG8gcnVuIHRiIGluaXQgZmlyc3QuJykpO1xuXHRcdFx0c3Bpbm5lci5zdG9wKCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9XG5cdGNhdGNoKGUpIHtcblx0XHRjb25zb2xlLmxvZyhjaGFsay5yZWQoZSkpO1xuXHRcdHNwaW5uZXIuc3RvcCgpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIGxvYWQgc3BlY1xuXHRsZXQgZmlsZVN0cjtcblx0dHJ5IHtcblx0XHRmaWxlU3RyID0gYXdhaXQgcmVhZEZpbGUoY29uZmlnLnNwZWNGaWxlTmFtZSk7XG5cdH1cblx0Y2F0Y2goZSkge1xuXHRcdGNvbnNvbGUubG9nKGNoYWxrLnJlZChlKSk7XG5cdFx0c3Bpbm5lci5zdG9wKCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gdmFsaWRhdGUgSlNPTlxuXHRjb25zdCBqc29uID0gcXVpZXRQYXJzZShtaW5pZnlKU09OKGZpbGVTdHIpKTtcblx0aWYgKGpzb24gPT09IG51bGwpIHtcblx0XHRjb25zb2xlLmxvZyhjaGFsay5yZWQoJ0Vycm9yOiBJbnZhbGlkIEpTT04nKSk7XG5cdFx0c3Bpbm5lci5zdG9wKCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gZW5zdXJlIHRvb2wgbm90IGV4aXN0XG5cdGlmIChqc29uLnBhdGhzICYmIGpzb24ucGF0aHNbcGF0aF0gJiYganNvbi5wYXRoc1twYXRoXVtvcGVyYXRpb25dKSB7XG5cdFx0Y29uc29sZS5sb2coY2hhbGsucmVkKCdBZGQgZmFpbGVkOiB0b29sIGFscmVhZHkgZXhpc3QuJykpO1xuXHRcdHNwaW5uZXIuc3RvcCgpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIGFkZCBhdXRoXG5cdGlmIChzZWN1cml0eSA9PSAnYmFzaWMnKSB7XG5cdFx0anNvbi5zZWN1cml0eURlZmluaXRpb25zID0ganNvbi5zZWN1cml0eURlZmluaXRpb25zIHx8IHt9O1xuXHRcdGpzb24uc2VjdXJpdHlEZWZpbml0aW9ucy5iYXNpY19hdXRoID0ganNvbi5zZWN1cml0eURlZmluaXRpb25zLmJhc2ljX2F1dGhcblx0XHRcdHx8IHsndHlwZSc6ICdiYXNpYyd9O1xuXHR9XG5cblx0Ly8gYWRkIHRvb2xcblx0anNvbi5wYXRocyA9IGpzb24ucGF0aHMgfHwge307XG5cdGpzb24ucGF0aHNbcGF0aF0gPSBqc29uLnBhdGhzW3BhdGhdIHx8IHt9O1xuXHRqc29uLnBhdGhzW3BhdGhdW29wZXJhdGlvbl0gPSB7XG5cdFx0XCJ4LXRiLW5hbWVcIjogYCR7b3BlcmF0aW9ufSAke3BhdGh9YCxcblx0XHRcIm9wZXJhdGlvbklkXCI6IGAke29wZXJhdGlvbn0gJHtwYXRofWAsXG5cdFx0XCJzZWN1cml0eVwiOiBzZWN1cml0eSA9PSAnYmFzaWMnID8gW3snYmFzaWNfYXV0aCc6IFtdfV0gOiBbXSxcblx0XHRcInBhcmFtZXRlcnNcIjogW10sXG5cdFx0XCJyZXNwb25zZXNcIjoge1xuXHRcdFx0XCIyMDBcIjoge1xuXHRcdFx0XHRcImRlc2NyaXB0aW9uXCI6IFwiUmVzdWx0c1wiXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRcIngtdGItYWN0aW9uTGFiZWxcIjogb3BlcmF0aW9uID09ICdnZXQnID8gJ0dldCcgOiAnU3VibWl0Jyxcblx0XHRcIngtdGItY29sb3JcIjogXCJyZWRcIixcblx0XHRcIngtdGItbmVlZHNDb25maXJtXCI6IGZhbHNlLFxuXHRcdFwieC10Yi1uZWVkc05vdGlmaWNhdGlvblBlcm1pc3Npb25cIjogZmFsc2Vcblx0fTtcblx0cGFyYW1EYXRhLmZvckVhY2gocGVyRGF0YSA9PiB7XG5cdFx0anNvbi5wYXRoc1twYXRoXVtvcGVyYXRpb25dLnBhcmFtZXRlcnMucHVzaCh7XG5cdFx0XHRcIm5hbWVcIjogcGVyRGF0YS5uYW1lLFxuXHRcdFx0XCJpblwiOiBwZXJEYXRhLmluLFxuXHRcdFx0XCJyZXF1aXJlZFwiOiB0cnVlLFxuXHRcdFx0XCJ0eXBlXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcIngtdGItZmllbGRMYWJlbFwiOiBwZXJEYXRhLm5hbWUsXG5cdFx0XHRcIngtdGItZmllbGRQbGFjZWhvbGRlclwiOiBcIlwiLFxuXHRcdFx0XCJ4LXRiLWZpZWxkVHlwZVwiOiBcInRleHRcIlxuXHRcdH0pO1xuXHR9KTtcblxuXHQvLyBzYXZlIHNwZWNcblx0dHJ5IHtcblx0XHRkaXNwYXRjaChzcGVjQWN0aW9ucy5zYXZlKGpzb24pKTtcblx0fVxuXHRjYXRjaChlKSB7XG5cdFx0Y29uc29sZS5sb2coY2hhbGsucmVkKGUpKTtcblx0XHRzcGlubmVyLnN0b3AoKTtcblx0XHRyZXR1cm47XG5cdH1cblx0XG5cdHNwaW5uZXIuc3RvcCgpO1xuXHRjb25zb2xlLmxvZyhjaGFsay5ncmVlbihgVG9vbCBhZGRlZCBmb3IgJHtwYXRofWApKTtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplT3BlcmF0aW9uKG9wZXJhdGlvbikge1xuXHRvcGVyYXRpb24gPSBvcGVyYXRpb24gfHwgJ2dldCc7XG5cdG9wZXJhdGlvbiA9IG9wZXJhdGlvbi50b0xvd2VyQ2FzZSgpO1xuXHRyZXR1cm4gb3BlcmF0aW9uO1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVTZWN1cml0eShvcGVyYXRpb24pIHtcblx0b3BlcmF0aW9uID0gb3BlcmF0aW9uIHx8ICdub25lJztcblx0b3BlcmF0aW9uID0gb3BlcmF0aW9uLnRvTG93ZXJDYXNlKCk7XG5cdHJldHVybiBvcGVyYXRpb247XG59XG4iXX0=