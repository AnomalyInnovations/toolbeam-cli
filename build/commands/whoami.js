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

var _userActions = require('../actions/user-actions');

var userActions = _interopRequireWildcard(_userActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(store) {
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:

						console.log(_chalk2.default.cyan('You are logged in as \'' + userActions.getUserEmail(store.getState()) + '\'.'));

					case 1:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this);
	}));

	return function (_x) {
		return _ref.apply(this, arguments);
	};
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy93aG9hbWkuanMiXSwibmFtZXMiOlsidXNlckFjdGlvbnMiLCJzdG9yZSIsImNvbnNvbGUiLCJsb2ciLCJjeWFuIiwiZ2V0VXNlckVtYWlsIiwiZ2V0U3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFFQTs7SUFBWUEsVzs7Ozs7Ozt1RUFFRyxpQkFBZUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVkQyxjQUFRQyxHQUFSLENBQVksZ0JBQU1DLElBQU4sNkJBQW9DSixZQUFZSyxZQUFaLENBQXlCSixNQUFNSyxRQUFOLEVBQXpCLENBQXBDLFNBQVo7O0FBRmM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRSIsImZpbGUiOiJ3aG9hbWkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnO1xuXG5pbXBvcnQgKiBhcyB1c2VyQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL3VzZXItYWN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uKHN0b3JlKSB7XG5cblx0Y29uc29sZS5sb2coY2hhbGsuY3lhbihgWW91IGFyZSBsb2dnZWQgaW4gYXMgJyR7dXNlckFjdGlvbnMuZ2V0VXNlckVtYWlsKHN0b3JlLmdldFN0YXRlKCkpfScuYCkpO1xufVxuIl19