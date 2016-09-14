'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _userActions = require('../actions/user-actions');

var userActions = _interopRequireWildcard(_userActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (store) {
	return function (callback) {
		store.dispatch(userActions.load());

		if (!userActions.isLoggedIn(store.getState())) {
			console.log(_chalk2.default.red('You need to be logged in to continue.'));
			return;
		}

		callback();
	};
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWJzL3JlcXVpcmUtbG9naW4uanMiXSwibmFtZXMiOlsidXNlckFjdGlvbnMiLCJzdG9yZSIsImRpc3BhdGNoIiwibG9hZCIsImlzTG9nZ2VkSW4iLCJnZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJyZWQiLCJjYWxsYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7SUFBWUEsVzs7Ozs7O2tCQUVHO0FBQUEsUUFBUyxvQkFBWTtBQUNuQ0MsUUFBTUMsUUFBTixDQUFlRixZQUFZRyxJQUFaLEVBQWY7O0FBRUEsTUFBSyxDQUFFSCxZQUFZSSxVQUFaLENBQXVCSCxNQUFNSSxRQUFOLEVBQXZCLENBQVAsRUFBaUQ7QUFDaERDLFdBQVFDLEdBQVIsQ0FBWSxnQkFBTUMsR0FBTixDQUFVLHVDQUFWLENBQVo7QUFDQTtBQUNBOztBQUVEQztBQUNBLEVBVGM7QUFBQSxDIiwiZmlsZSI6InJlcXVpcmUtbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnO1xuaW1wb3J0ICogYXMgdXNlckFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy91c2VyLWFjdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZSA9PiBjYWxsYmFjayA9PiB7XG5cdHN0b3JlLmRpc3BhdGNoKHVzZXJBY3Rpb25zLmxvYWQoKSk7XG5cblx0aWYgKCAhIHVzZXJBY3Rpb25zLmlzTG9nZ2VkSW4oc3RvcmUuZ2V0U3RhdGUoKSkpIHtcblx0XHRjb25zb2xlLmxvZyhjaGFsay5yZWQoJ1lvdSBuZWVkIHRvIGJlIGxvZ2dlZCBpbiB0byBjb250aW51ZS4nKSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y2FsbGJhY2soKTtcbn1cbiJdfQ==