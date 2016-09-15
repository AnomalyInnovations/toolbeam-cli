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

		if (userActions.isLoggedIn(store.getState())) {
			console.log(_chalk2.default.cyan('You are logged in as \'' + userActions.getUserEmail(store.getState()) + '\'.'));
			return;
		}

		callback();
	};
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWJzL3JlcXVpcmUtYW5vbnltb3VzLmpzIl0sIm5hbWVzIjpbInVzZXJBY3Rpb25zIiwic3RvcmUiLCJkaXNwYXRjaCIsImxvYWQiLCJpc0xvZ2dlZEluIiwiZ2V0U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiY3lhbiIsImdldFVzZXJFbWFpbCIsImNhbGxiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOztJQUFZQSxXOzs7Ozs7a0JBRUc7QUFBQSxRQUFTLG9CQUFZO0FBQ25DQyxRQUFNQyxRQUFOLENBQWVGLFlBQVlHLElBQVosRUFBZjs7QUFFQSxNQUFJSCxZQUFZSSxVQUFaLENBQXVCSCxNQUFNSSxRQUFOLEVBQXZCLENBQUosRUFBOEM7QUFDN0NDLFdBQVFDLEdBQVIsQ0FBWSxnQkFBTUMsSUFBTiw2QkFBb0NSLFlBQVlTLFlBQVosQ0FBeUJSLE1BQU1JLFFBQU4sRUFBekIsQ0FBcEMsU0FBWjtBQUNBO0FBQ0E7O0FBRURLO0FBQ0EsRUFUYztBQUFBLEMiLCJmaWxlIjoicmVxdWlyZS1hbm9ueW1vdXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnO1xuaW1wb3J0ICogYXMgdXNlckFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy91c2VyLWFjdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZSA9PiBjYWxsYmFjayA9PiB7XG5cdHN0b3JlLmRpc3BhdGNoKHVzZXJBY3Rpb25zLmxvYWQoKSk7XG5cblx0aWYgKHVzZXJBY3Rpb25zLmlzTG9nZ2VkSW4oc3RvcmUuZ2V0U3RhdGUoKSkpIHtcblx0XHRjb25zb2xlLmxvZyhjaGFsay5jeWFuKGBZb3UgYXJlIGxvZ2dlZCBpbiBhcyAnJHt1c2VyQWN0aW9ucy5nZXRVc2VyRW1haWwoc3RvcmUuZ2V0U3RhdGUoKSl9Jy5gKSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y2FsbGJhY2soKTtcbn1cbiJdfQ==