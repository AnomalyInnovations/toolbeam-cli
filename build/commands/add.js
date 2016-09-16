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
							"x-tb-action_label": operation == 'get' ? 'Get' : 'Submit',
							"x-tb-color": "red"
						};
						paramData.forEach(function (perData) {
							json.paths[path][operation].parameters.push({
								"name": perData.name,
								"in": perData.in,
								"required": true,
								"type": "string",
								"x-tb-field_label": perData.name,
								"x-tb-field_placeholder": "",
								"x-tb-field_type": "text"
							});
						});

						// build spec
						dispatch(specActions.init(json));

						// write file
						_context.prev = 52;

						console.log(specActions.getData(getState()));
						_context.next = 56;
						return (0, _file.writeFile)(_config2.default.specFileName, specActions.getData(getState()));

					case 56:
						_context.next = 63;
						break;

					case 58:
						_context.prev = 58;
						_context.t2 = _context['catch'](52);

						console.log(_chalk2.default.red(_context.t2));
						spinner.stop();
						return _context.abrupt('return');

					case 63:

						spinner.stop();
						console.log(_chalk2.default.green('Tool added for ' + path));

					case 65:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this, [[10, 20], [26, 32], [52, 58]]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9hZGQuanMiXSwibmFtZXMiOlsic3BlY0FjdGlvbnMiLCJwYXRoIiwidG9vbERhdGEiLCJwYXJhbURhdGEiLCJnZXRTdGF0ZSIsImRpc3BhdGNoIiwic3Bpbm5lciIsInN0YXJ0Iiwib3BlcmF0aW9uIiwibm9ybWFsaXplT3BlcmF0aW9uIiwic2VjdXJpdHkiLCJub3JtYWxpemVTZWN1cml0eSIsImVycm9yIiwiZm9yRWFjaCIsInBlckRhdGEiLCJuYW1lIiwiaW4iLCJjb25zb2xlIiwibG9nIiwicmVkIiwic3RvcCIsInNwZWNGaWxlTmFtZSIsImV4aXN0cyIsImZpbGVTdHIiLCJqc29uIiwicGF0aHMiLCJzZWN1cml0eURlZmluaXRpb25zIiwiYmFzaWNfYXV0aCIsInBhcmFtZXRlcnMiLCJwdXNoIiwiaW5pdCIsImdldERhdGEiLCJncmVlbiIsInRvTG93ZXJDYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUNBOztBQUNBOztJQUFZQSxXOzs7Ozs7O3VFQUVHLHdCQUFxQ0MsSUFBckMsRUFBMkNDLFFBQTNDLEVBQXFEQyxTQUFyRDtBQUFBLE1BQWdCQyxRQUFoQixTQUFnQkEsUUFBaEI7QUFBQSxNQUEwQkMsUUFBMUIsU0FBMEJBLFFBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVSQyxhQUZRLEdBRUUsa0JBQVksY0FBWixDQUZGOztBQUdkQSxjQUFRQyxLQUFSOztBQUVBO0FBQ01DLGVBTlEsR0FNSUMsbUJBQW1CUCxTQUFTTSxTQUE1QixDQU5KO0FBT1JFLGNBUFEsR0FPR0Msa0JBQWtCVCxTQUFTUSxRQUEzQixDQVBIO0FBUVZFLFdBUlUsR0FRRixLQVJFOztBQVNkVCxnQkFBVVUsT0FBVixDQUFrQixtQkFBVztBQUM1QixXQUFLLENBQUVDLFFBQVFDLElBQWYsRUFBcUI7QUFDcEJILGdCQUFRLHdCQUFSO0FBQ0E7QUFDQSxR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LEVBRjZCO0FBRzNDLG9CQUFZLElBSCtCO0FBSTNDLGdCQUFRLFFBSm1DO0FBSzNDLDRCQUFvQkYsUUFBUUMsSUFMZTtBQU0zQyxrQ0FBMEIsRUFOaUI7QUFPM0MsMkJBQW1CO0FBUHdCLFFBQTVDO0FBU0EsT0FWRDs7QUFZQTtBQUNBVixlQUFTTCxZQUFZOEIsSUFBWixDQUFpQk4sSUFBakIsQ0FBVDs7QUFFQTtBQXhHYzs7QUEwR2JQLGNBQVFDLEdBQVIsQ0FBWWxCLFlBQVkrQixPQUFaLENBQW9CM0IsVUFBcEIsQ0FBWjtBQTFHYTtBQUFBLGFBMkdQLHFCQUFVLGlCQUFPaUIsWUFBakIsRUFBK0JyQixZQUFZK0IsT0FBWixDQUFvQjNCLFVBQXBCLENBQS9CLENBM0dPOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBOEdiYSxjQUFRQyxHQUFSLENBQVksZ0JBQU1DLEdBQU4sYUFBWjtBQUNBYixjQUFRYyxJQUFSO0FBL0dhOztBQUFBOztBQW1IZGQsY0FBUWMsSUFBUjtBQUNBSCxjQUFRQyxHQUFSLENBQVksZ0JBQU1jLEtBQU4scUJBQThCL0IsSUFBOUIsQ0FBWjs7QUFwSGM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRTs7Ozs7OztBQXVIZixTQUFTUSxrQkFBVCxDQUE0QkQsU0FBNUIsRUFBdUM7QUFDdENBLGFBQVlBLGFBQWEsS0FBekI7QUFDQUEsYUFBWUEsVUFBVXlCLFdBQVYsRUFBWjtBQUNBLFFBQU96QixTQUFQO0FBQ0E7O0FBRUQsU0FBU0csaUJBQVQsQ0FBMkJILFNBQTNCLEVBQXNDO0FBQ3JDQSxhQUFZQSxhQUFhLE1BQXpCO0FBQ0FBLGFBQVlBLFVBQVV5QixXQUFWLEVBQVo7QUFDQSxRQUFPekIsU0FBUDtBQUNBIiwiZmlsZSI6ImFkZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjaGFsayBmcm9tICdjaGFsayc7XG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSAnY2x1aSc7XG5pbXBvcnQgVVJJIGZyb20gJ3VyaWpzJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcblxuaW1wb3J0IHsgZXhpc3RGaWxlLCByZWFkRmlsZSwgd3JpdGVGaWxlIH0gZnJvbSAnLi4vbGlicy9maWxlJztcbmltcG9ydCB7IHF1aWV0UGFyc2UsIG1pbmlmeUpTT04gfSBmcm9tICcuLi9saWJzL2pzb24nO1xuaW1wb3J0ICogYXMgc3BlY0FjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9zcGVjLWFjdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbih7Z2V0U3RhdGUsIGRpc3BhdGNofSwgcGF0aCwgdG9vbERhdGEsIHBhcmFtRGF0YSkge1xuXG5cdGNvbnN0IHNwaW5uZXIgPSBuZXcgU3Bpbm5lcignQWRkaW5nIHRvb2zigKYnKTtcblx0c3Bpbm5lci5zdGFydCgpO1xuXG5cdC8vIHZhbGlkYXRlIHBhcmFtZXRlclxuXHRjb25zdCBvcGVyYXRpb24gPSBub3JtYWxpemVPcGVyYXRpb24odG9vbERhdGEub3BlcmF0aW9uKTtcblx0Y29uc3Qgc2VjdXJpdHkgPSBub3JtYWxpemVTZWN1cml0eSh0b29sRGF0YS5zZWN1cml0eSk7XG5cdGxldCBlcnJvciA9IGZhbHNlO1xuXHRwYXJhbURhdGEuZm9yRWFjaChwZXJEYXRhID0+IHtcblx0XHRpZiAoICEgcGVyRGF0YS5uYW1lKSB7XG5cdFx0XHRlcnJvciA9ICdtaXNzaW5nIHBhcmFtZXRlciBuYW1lJztcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoICEgcGVyRGF0YS5pbikge1xuXHRcdFx0ZXJyb3IgPSAnbWlzc2luZyBwYXJhbWV0ZXIgaW4nO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fSk7XG5cdGlmIChlcnJvcikge1xuXHRcdGNvbnNvbGUubG9nKGNoYWxrLnJlZChgQWRkIGZhaWxlZDogJHtlcnJvcn0uYCkpO1xuXHRcdHNwaW5uZXIuc3RvcCgpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIGVuc3VyZSBzcGVjIGV4aXN0c1xuXHR0cnkge1xuXHRcdGNvbnN0IGV4aXN0cyA9IGF3YWl0IGV4aXN0RmlsZShjb25maWcuc3BlY0ZpbGVOYW1lKTtcblx0XHRpZiAoICEgZXhpc3RzKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhjaGFsay5yZWQoJ0FkZCBmYWlsZWQ6IGVuc3VyZSB0byBydW4gdGIgaW5pdCBmaXJzdC4nKSk7XG5cdFx0XHRzcGlubmVyLnN0b3AoKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdH1cblx0Y2F0Y2goZSkge1xuXHRcdGNvbnNvbGUubG9nKGNoYWxrLnJlZChlKSk7XG5cdFx0c3Bpbm5lci5zdG9wKCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gbG9hZCBzcGVjXG5cdGxldCBmaWxlU3RyO1xuXHR0cnkge1xuXHRcdGZpbGVTdHIgPSBhd2FpdCByZWFkRmlsZShjb25maWcuc3BlY0ZpbGVOYW1lKTtcblx0fVxuXHRjYXRjaChlKSB7XG5cdFx0Y29uc29sZS5sb2coY2hhbGsucmVkKGUpKTtcblx0XHRzcGlubmVyLnN0b3AoKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyB2YWxpZGF0ZSBKU09OXG5cdGNvbnN0IGpzb24gPSBxdWlldFBhcnNlKG1pbmlmeUpTT04oZmlsZVN0cikpO1xuXHRpZiAoanNvbiA9PT0gbnVsbCkge1xuXHRcdGNvbnNvbGUubG9nKGNoYWxrLnJlZCgnRXJyb3I6IEludmFsaWQgSlNPTicpKTtcblx0XHRzcGlubmVyLnN0b3AoKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBlbnN1cmUgdG9vbCBub3QgZXhpc3Rcblx0aWYgKGpzb24ucGF0aHMgJiYganNvbi5wYXRoc1twYXRoXSAmJiBqc29uLnBhdGhzW3BhdGhdW29wZXJhdGlvbl0pIHtcblx0XHRjb25zb2xlLmxvZyhjaGFsay5yZWQoJ0FkZCBmYWlsZWQ6IHRvb2wgYWxyZWFkeSBleGlzdC4nKSk7XG5cdFx0c3Bpbm5lci5zdG9wKCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gYWRkIGF1dGhcblx0aWYgKHNlY3VyaXR5ID09ICdiYXNpYycpIHtcblx0XHRqc29uLnNlY3VyaXR5RGVmaW5pdGlvbnMgPSBqc29uLnNlY3VyaXR5RGVmaW5pdGlvbnMgfHwge307XG5cdFx0anNvbi5zZWN1cml0eURlZmluaXRpb25zLmJhc2ljX2F1dGggPSBqc29uLnNlY3VyaXR5RGVmaW5pdGlvbnMuYmFzaWNfYXV0aFxuXHRcdFx0fHwgeyd0eXBlJzogJ2Jhc2ljJ307XG5cdH1cblxuXHQvLyBhZGQgdG9vbFxuXHRqc29uLnBhdGhzID0ganNvbi5wYXRocyB8fCB7fTtcblx0anNvbi5wYXRoc1twYXRoXSA9IGpzb24ucGF0aHNbcGF0aF0gfHwge307XG5cdGpzb24ucGF0aHNbcGF0aF1bb3BlcmF0aW9uXSA9IHtcblx0XHRcIngtdGItbmFtZVwiOiBgJHtvcGVyYXRpb259ICR7cGF0aH1gLFxuXHRcdFwib3BlcmF0aW9uSWRcIjogYCR7b3BlcmF0aW9ufSAke3BhdGh9YCxcblx0XHRcInNlY3VyaXR5XCI6IHNlY3VyaXR5ID09ICdiYXNpYycgPyBbeydiYXNpY19hdXRoJzogW119XSA6IFtdLFxuXHRcdFwicGFyYW1ldGVyc1wiOiBbXSxcblx0XHRcInJlc3BvbnNlc1wiOiB7XG5cdFx0XHRcIjIwMFwiOiB7XG5cdFx0XHRcdFwiZGVzY3JpcHRpb25cIjogXCJSZXN1bHRzXCJcblx0XHRcdH1cblx0XHR9LFxuXHRcdFwieC10Yi1hY3Rpb25fbGFiZWxcIjogb3BlcmF0aW9uID09ICdnZXQnID8gJ0dldCcgOiAnU3VibWl0Jyxcblx0XHRcIngtdGItY29sb3JcIjogXCJyZWRcIlxuXHR9O1xuXHRwYXJhbURhdGEuZm9yRWFjaChwZXJEYXRhID0+IHtcblx0XHRqc29uLnBhdGhzW3BhdGhdW29wZXJhdGlvbl0ucGFyYW1ldGVycy5wdXNoKHtcblx0XHRcdFwibmFtZVwiOiBwZXJEYXRhLm5hbWUsXG5cdFx0XHRcImluXCI6IHBlckRhdGEuaW4sXG5cdFx0XHRcInJlcXVpcmVkXCI6IHRydWUsXG5cdFx0XHRcInR5cGVcIjogXCJzdHJpbmdcIixcblx0XHRcdFwieC10Yi1maWVsZF9sYWJlbFwiOiBwZXJEYXRhLm5hbWUsXG5cdFx0XHRcIngtdGItZmllbGRfcGxhY2Vob2xkZXJcIjogXCJcIixcblx0XHRcdFwieC10Yi1maWVsZF90eXBlXCI6IFwidGV4dFwiXG5cdFx0fSk7XG5cdH0pO1xuXG5cdC8vIGJ1aWxkIHNwZWNcblx0ZGlzcGF0Y2goc3BlY0FjdGlvbnMuaW5pdChqc29uKSk7XG5cblx0Ly8gd3JpdGUgZmlsZVxuXHR0cnkge1xuXHRcdGNvbnNvbGUubG9nKHNwZWNBY3Rpb25zLmdldERhdGEoZ2V0U3RhdGUoKSkpO1xuXHRcdGF3YWl0IHdyaXRlRmlsZShjb25maWcuc3BlY0ZpbGVOYW1lLCBzcGVjQWN0aW9ucy5nZXREYXRhKGdldFN0YXRlKCkpKTtcblx0fVxuXHRjYXRjaChlKSB7XG5cdFx0Y29uc29sZS5sb2coY2hhbGsucmVkKGUpKTtcblx0XHRzcGlubmVyLnN0b3AoKTtcblx0XHRyZXR1cm47XG5cdH1cblx0XG5cdHNwaW5uZXIuc3RvcCgpO1xuXHRjb25zb2xlLmxvZyhjaGFsay5ncmVlbihgVG9vbCBhZGRlZCBmb3IgJHtwYXRofWApKTtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplT3BlcmF0aW9uKG9wZXJhdGlvbikge1xuXHRvcGVyYXRpb24gPSBvcGVyYXRpb24gfHwgJ2dldCc7XG5cdG9wZXJhdGlvbiA9IG9wZXJhdGlvbi50b0xvd2VyQ2FzZSgpO1xuXHRyZXR1cm4gb3BlcmF0aW9uO1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVTZWN1cml0eShvcGVyYXRpb24pIHtcblx0b3BlcmF0aW9uID0gb3BlcmF0aW9uIHx8ICdub25lJztcblx0b3BlcmF0aW9uID0gb3BlcmF0aW9uLnRvTG93ZXJDYXNlKCk7XG5cdHJldHVybiBvcGVyYXRpb247XG59XG4iXX0=