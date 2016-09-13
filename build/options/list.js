'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _clui = require('clui');

var _cliTable = require('cli-table');

var _cliTable2 = _interopRequireDefault(_cliTable);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _toolsActions = require('../actions/tools-actions');

var toolsActions = _interopRequireWildcard(_toolsActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2) {
		var getState = _ref2.getState;
		var dispatch = _ref2.dispatch;
		var spinner, tools, table, toolRows;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						spinner = new _clui.Spinner('Fetching your tools…');


						spinner.start();

						// Load tools
						_context.prev = 2;
						_context.next = 5;
						return dispatch(toolsActions.load());

					case 5:
						_context.next = 12;
						break;

					case 7:
						_context.prev = 7;
						_context.t0 = _context['catch'](2);

						spinner.stop();
						console.log(_chalk2.default.red('Failed to fetch: ' + _context.t0.message));
						return _context.abrupt('return');

					case 12:

						spinner.stop();

						tools = toolsActions.getTools(getState());

						if (!(tools.length === 0)) {
							_context.next = 17;
							break;
						}

						console.log(_chalk2.default.cyan('Your tool list is empty!'));
						return _context.abrupt('return');

					case 17:
						table = new _cliTable2.default({
							colWidths: [24, 32]
						});
						toolRows = tools.map(function (tool) {
							return [colorToChalk(tool.color)(tool.name), fullURL(tool.uri)];
						});


						table.push.apply(table, (0, _toConsumableArray3.default)(toolRows));

						console.log(table.toString());

					case 21:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this, [[2, 7]]);
	}));

	return function (_x) {
		return _ref.apply(this, arguments);
	};
}();

function colorToChalk(color) {
	switch (color) {
		case 'red':
			return _chalk2.default.red;
		case 'green':
			return _chalk2.default.green;
		case 'blue':
			return _chalk2.default.cyan;
		case 'orange':
			return _chalk2.default.yellow;
		case 'purple':
			return _chalk2.default.magenta;
		default:
			return _chalk2.default.white;
	}
}

function fullURL(uri) {
	return _config2.default.webScheme + '://' + _config2.default.webHost + '/' + uri;
}
//# sourceMappingURL=list.js.map