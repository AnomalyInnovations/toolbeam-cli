'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _prompt = require('prompt');

var _prompt2 = _interopRequireDefault(_prompt);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _clui = require('clui');

var _prompt3 = require('../libs/prompt');

var _userActions = require('../actions/user-actions');

var userActions = _interopRequireWildcard(_userActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prompts = [{
	name: 'email',
	description: 'Enter your email:',
	message: 'Please enter your email',
	required: true
}, {
	name: 'password',
	description: 'Enter your password:',
	message: 'Please enter your password',
	hidden: true,
	replace: '*',
	required: true
}];

exports.default = function () {
	var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(store) {
		var _ref2, email, password, spinner;

		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:

						store.dispatch(userActions.load());

						if (!userActions.isLoggedIn(store.getState())) {
							_context.next = 4;
							break;
						}

						console.log(_chalk2.default.cyan('You are logged in as \'' + userActions.getUserEmail(store.getState()) + '\'.'));
						return _context.abrupt('return');

					case 4:

						_prompt2.default.start();

						_prompt2.default.message = '';
						_prompt2.default.delimiter = '';

						_context.next = 9;
						return (0, _prompt3.getPrompt)(prompts);

					case 9:
						_ref2 = _context.sent;
						email = _ref2.email;
						password = _ref2.password;
						spinner = new _clui.Spinner('Logging in to Toolbeam…');

						spinner.start();

						_context.prev = 14;
						_context.next = 17;
						return store.dispatch(userActions.login(email, password));

					case 17:
						spinner.stop();
						_context.next = 25;
						break;

					case 20:
						_context.prev = 20;
						_context.t0 = _context['catch'](14);

						spinner.stop();
						console.log(_chalk2.default.red('Login failed: ' + _context.t0.message));
						return _context.abrupt('return');

					case 25:

						console.log(_chalk2.default.cyan('You are logged in to Toolbeam.'));

					case 26:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this, [[14, 20]]);
	}));

	return function (_x) {
		return _ref.apply(this, arguments);
	};
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcHRpb25zL2xvZ2luLmpzIl0sIm5hbWVzIjpbInVzZXJBY3Rpb25zIiwicHJvbXB0cyIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIm1lc3NhZ2UiLCJyZXF1aXJlZCIsImhpZGRlbiIsInJlcGxhY2UiLCJzdG9yZSIsImRpc3BhdGNoIiwibG9hZCIsImlzTG9nZ2VkSW4iLCJnZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJjeWFuIiwiZ2V0VXNlckVtYWlsIiwic3RhcnQiLCJkZWxpbWl0ZXIiLCJlbWFpbCIsInBhc3N3b3JkIiwic3Bpbm5lciIsImxvZ2luIiwic3RvcCIsInJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0lBQVlBLFc7Ozs7OztBQUVaLElBQU1DLFVBQVUsQ0FDZjtBQUNDQyxPQUFNLE9BRFA7QUFFQ0MsY0FBYSxtQkFGZDtBQUdDQyxVQUFTLHlCQUhWO0FBSUNDLFdBQVU7QUFKWCxDQURlLEVBT2Y7QUFDQ0gsT0FBTSxVQURQO0FBRUNDLGNBQWEsc0JBRmQ7QUFHQ0MsVUFBUyw0QkFIVjtBQUlDRSxTQUFRLElBSlQ7QUFLQ0MsVUFBUyxHQUxWO0FBTUNGLFdBQVU7QUFOWCxDQVBlLENBQWhCOzs7dUVBaUJlLGlCQUFlRyxLQUFmO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRWRBLFlBQU1DLFFBQU4sQ0FBZVQsWUFBWVUsSUFBWixFQUFmOztBQUZjLFdBSVZWLFlBQVlXLFVBQVosQ0FBdUJILE1BQU1JLFFBQU4sRUFBdkIsQ0FKVTtBQUFBO0FBQUE7QUFBQTs7QUFLYkMsY0FBUUMsR0FBUixDQUFZLGdCQUFNQyxJQUFOLDZCQUFvQ2YsWUFBWWdCLFlBQVosQ0FBeUJSLE1BQU1JLFFBQU4sRUFBekIsQ0FBcEMsU0FBWjtBQUxhOztBQUFBOztBQVNkLHVCQUFPSyxLQUFQOztBQUVBLHVCQUFPYixPQUFQLEdBQWlCLEVBQWpCO0FBQ0EsdUJBQU9jLFNBQVAsR0FBbUIsRUFBbkI7O0FBWmM7QUFBQSxhQWNrQix3QkFBVWpCLE9BQVYsQ0FkbEI7O0FBQUE7QUFBQTtBQWNQa0IsV0FkTyxTQWNQQSxLQWRPO0FBY0FDLGNBZEEsU0FjQUEsUUFkQTtBQWdCUkMsYUFoQlEsR0FnQkUsa0JBQVkseUJBQVosQ0FoQkY7O0FBaUJkQSxjQUFRSixLQUFSOztBQWpCYztBQUFBO0FBQUEsYUFvQlBULE1BQU1DLFFBQU4sQ0FBZVQsWUFBWXNCLEtBQVosQ0FBa0JILEtBQWxCLEVBQXlCQyxRQUF6QixDQUFmLENBcEJPOztBQUFBO0FBcUJiQyxjQUFRRSxJQUFSO0FBckJhO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQXdCYkYsY0FBUUUsSUFBUjtBQUNBVixjQUFRQyxHQUFSLENBQVksZ0JBQU1VLEdBQU4sb0JBQTJCLFlBQUVwQixPQUE3QixDQUFaO0FBekJhOztBQUFBOztBQTZCZFMsY0FBUUMsR0FBUixDQUFZLGdCQUFNQyxJQUFOLENBQVcsZ0NBQVgsQ0FBWjs7QUE3QmM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRSIsImZpbGUiOiJsb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9tcHQgZnJvbSAncHJvbXB0JztcbmltcG9ydCBjaGFsayBmcm9tICdjaGFsayc7XG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSAnY2x1aSc7XG5pbXBvcnQgeyBnZXRQcm9tcHQgfSBmcm9tICcuLi9saWJzL3Byb21wdCc7XG5pbXBvcnQgKiBhcyB1c2VyQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL3VzZXItYWN0aW9ucyc7XG5cbmNvbnN0IHByb21wdHMgPSBbXG5cdHtcblx0XHRuYW1lOiAnZW1haWwnLFxuXHRcdGRlc2NyaXB0aW9uOiAnRW50ZXIgeW91ciBlbWFpbDonLFxuXHRcdG1lc3NhZ2U6ICdQbGVhc2UgZW50ZXIgeW91ciBlbWFpbCcsXG5cdFx0cmVxdWlyZWQ6IHRydWVcblx0fSxcblx0e1xuXHRcdG5hbWU6ICdwYXNzd29yZCcsXG5cdFx0ZGVzY3JpcHRpb246ICdFbnRlciB5b3VyIHBhc3N3b3JkOicsXG5cdFx0bWVzc2FnZTogJ1BsZWFzZSBlbnRlciB5b3VyIHBhc3N3b3JkJyxcblx0XHRoaWRkZW46IHRydWUsXG5cdFx0cmVwbGFjZTogJyonLFxuXHRcdHJlcXVpcmVkOiB0cnVlXG5cdH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbihzdG9yZSkge1xuXG5cdHN0b3JlLmRpc3BhdGNoKHVzZXJBY3Rpb25zLmxvYWQoKSk7XG5cblx0aWYgKHVzZXJBY3Rpb25zLmlzTG9nZ2VkSW4oc3RvcmUuZ2V0U3RhdGUoKSkpIHtcblx0XHRjb25zb2xlLmxvZyhjaGFsay5jeWFuKGBZb3UgYXJlIGxvZ2dlZCBpbiBhcyAnJHt1c2VyQWN0aW9ucy5nZXRVc2VyRW1haWwoc3RvcmUuZ2V0U3RhdGUoKSl9Jy5gKSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0cHJvbXB0LnN0YXJ0KCk7XG5cblx0cHJvbXB0Lm1lc3NhZ2UgPSAnJztcblx0cHJvbXB0LmRlbGltaXRlciA9ICcnO1xuXG5cdGNvbnN0IHtlbWFpbCwgcGFzc3dvcmR9ID0gYXdhaXQgZ2V0UHJvbXB0KHByb21wdHMpO1xuXG5cdGNvbnN0IHNwaW5uZXIgPSBuZXcgU3Bpbm5lcignTG9nZ2luZyBpbiB0byBUb29sYmVhbeKApicpO1xuXHRzcGlubmVyLnN0YXJ0KCk7XG5cblx0dHJ5IHtcblx0XHRhd2FpdCBzdG9yZS5kaXNwYXRjaCh1c2VyQWN0aW9ucy5sb2dpbihlbWFpbCwgcGFzc3dvcmQpKTtcblx0XHRzcGlubmVyLnN0b3AoKTtcblx0fVxuXHRjYXRjaChlKSB7XG5cdFx0c3Bpbm5lci5zdG9wKCk7XG5cdFx0Y29uc29sZS5sb2coY2hhbGsucmVkKGBMb2dpbiBmYWlsZWQ6ICR7ZS5tZXNzYWdlfWApKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zb2xlLmxvZyhjaGFsay5jeWFuKCdZb3UgYXJlIGxvZ2dlZCBpbiB0byBUb29sYmVhbS4nKSk7XG5cbn1cbiJdfQ==