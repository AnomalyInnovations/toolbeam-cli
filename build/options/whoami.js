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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcHRpb25zL3dob2FtaS5qcyJdLCJuYW1lcyI6WyJ1c2VyQWN0aW9ucyIsInN0b3JlIiwiY29uc29sZSIsImxvZyIsImN5YW4iLCJnZXRVc2VyRW1haWwiLCJnZXRTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUVBOztJQUFZQSxXOzs7Ozs7O3VFQUVHLGlCQUFlQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRWRDLGNBQVFDLEdBQVIsQ0FBWSxnQkFBTUMsSUFBTiw2QkFBb0NKLFlBQVlLLFlBQVosQ0FBeUJKLE1BQU1LLFFBQU4sRUFBekIsQ0FBcEMsU0FBWjs7QUFGYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFIiwiZmlsZSI6Indob2FtaS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjaGFsayBmcm9tICdjaGFsayc7XG5cbmltcG9ydCAqIGFzIHVzZXJBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvdXNlci1hY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24oc3RvcmUpIHtcblxuXHRjb25zb2xlLmxvZyhjaGFsay5jeWFuKGBZb3UgYXJlIGxvZ2dlZCBpbiBhcyAnJHt1c2VyQWN0aW9ucy5nZXRVc2VyRW1haWwoc3RvcmUuZ2V0U3RhdGUoKSl9Jy5gKSk7XG59XG4iXX0=