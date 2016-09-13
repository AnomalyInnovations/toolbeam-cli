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
//# sourceMappingURL=push.js.map