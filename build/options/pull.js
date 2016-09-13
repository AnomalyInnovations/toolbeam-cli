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
//# sourceMappingURL=pull.js.map