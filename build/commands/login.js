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

						_prompt2.default.start();

						_prompt2.default.message = '';
						_prompt2.default.delimiter = '';

						_context.next = 5;
						return (0, _prompt3.getPrompt)(prompts);

					case 5:
						_ref2 = _context.sent;
						email = _ref2.email;
						password = _ref2.password;
						spinner = new _clui.Spinner('Logging in to Toolbeam…');

						spinner.start();

						_context.prev = 10;
						_context.next = 13;
						return store.dispatch(userActions.login(email, password));

					case 13:
						spinner.stop();
						_context.next = 21;
						break;

					case 16:
						_context.prev = 16;
						_context.t0 = _context['catch'](10);

						spinner.stop();
						console.log(_chalk2.default.red('Login failed: ' + _context.t0.message));
						return _context.abrupt('return');

					case 21:

						console.log(_chalk2.default.cyan('You are logged in to Toolbeam.'));

					case 22:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this, [[10, 16]]);
	}));

	return function (_x) {
		return _ref.apply(this, arguments);
	};
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9sb2dpbi5qcyJdLCJuYW1lcyI6WyJ1c2VyQWN0aW9ucyIsInByb21wdHMiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJtZXNzYWdlIiwicmVxdWlyZWQiLCJoaWRkZW4iLCJyZXBsYWNlIiwic3RvcmUiLCJzdGFydCIsImRlbGltaXRlciIsImVtYWlsIiwicGFzc3dvcmQiLCJzcGlubmVyIiwiZGlzcGF0Y2giLCJsb2dpbiIsInN0b3AiLCJjb25zb2xlIiwibG9nIiwicmVkIiwiY3lhbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0lBQVlBLFc7Ozs7OztBQUVaLElBQU1DLFVBQVUsQ0FDZjtBQUNDQyxPQUFNLE9BRFA7QUFFQ0MsY0FBYSxtQkFGZDtBQUdDQyxVQUFTLHlCQUhWO0FBSUNDLFdBQVU7QUFKWCxDQURlLEVBT2Y7QUFDQ0gsT0FBTSxVQURQO0FBRUNDLGNBQWEsc0JBRmQ7QUFHQ0MsVUFBUyw0QkFIVjtBQUlDRSxTQUFRLElBSlQ7QUFLQ0MsVUFBUyxHQUxWO0FBTUNGLFdBQVU7QUFOWCxDQVBlLENBQWhCOzs7dUVBaUJlLGlCQUFlRyxLQUFmO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRWQsdUJBQU9DLEtBQVA7O0FBRUEsdUJBQU9MLE9BQVAsR0FBaUIsRUFBakI7QUFDQSx1QkFBT00sU0FBUCxHQUFtQixFQUFuQjs7QUFMYztBQUFBLGFBT2tCLHdCQUFVVCxPQUFWLENBUGxCOztBQUFBO0FBQUE7QUFPUFUsV0FQTyxTQU9QQSxLQVBPO0FBT0FDLGNBUEEsU0FPQUEsUUFQQTtBQVNSQyxhQVRRLEdBU0Usa0JBQVkseUJBQVosQ0FURjs7QUFVZEEsY0FBUUosS0FBUjs7QUFWYztBQUFBO0FBQUEsYUFhUEQsTUFBTU0sUUFBTixDQUFlZCxZQUFZZSxLQUFaLENBQWtCSixLQUFsQixFQUF5QkMsUUFBekIsQ0FBZixDQWJPOztBQUFBO0FBY2JDLGNBQVFHLElBQVI7QUFkYTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFpQmJILGNBQVFHLElBQVI7QUFDQUMsY0FBUUMsR0FBUixDQUFZLGdCQUFNQyxHQUFOLG9CQUEyQixZQUFFZixPQUE3QixDQUFaO0FBbEJhOztBQUFBOztBQXNCZGEsY0FBUUMsR0FBUixDQUFZLGdCQUFNRSxJQUFOLENBQVcsZ0NBQVgsQ0FBWjs7QUF0QmM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRSIsImZpbGUiOiJsb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9tcHQgZnJvbSAncHJvbXB0JztcbmltcG9ydCBjaGFsayBmcm9tICdjaGFsayc7XG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSAnY2x1aSc7XG5pbXBvcnQgeyBnZXRQcm9tcHQgfSBmcm9tICcuLi9saWJzL3Byb21wdCc7XG5pbXBvcnQgKiBhcyB1c2VyQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL3VzZXItYWN0aW9ucyc7XG5cbmNvbnN0IHByb21wdHMgPSBbXG5cdHtcblx0XHRuYW1lOiAnZW1haWwnLFxuXHRcdGRlc2NyaXB0aW9uOiAnRW50ZXIgeW91ciBlbWFpbDonLFxuXHRcdG1lc3NhZ2U6ICdQbGVhc2UgZW50ZXIgeW91ciBlbWFpbCcsXG5cdFx0cmVxdWlyZWQ6IHRydWVcblx0fSxcblx0e1xuXHRcdG5hbWU6ICdwYXNzd29yZCcsXG5cdFx0ZGVzY3JpcHRpb246ICdFbnRlciB5b3VyIHBhc3N3b3JkOicsXG5cdFx0bWVzc2FnZTogJ1BsZWFzZSBlbnRlciB5b3VyIHBhc3N3b3JkJyxcblx0XHRoaWRkZW46IHRydWUsXG5cdFx0cmVwbGFjZTogJyonLFxuXHRcdHJlcXVpcmVkOiB0cnVlXG5cdH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbihzdG9yZSkge1xuXG5cdHByb21wdC5zdGFydCgpO1xuXG5cdHByb21wdC5tZXNzYWdlID0gJyc7XG5cdHByb21wdC5kZWxpbWl0ZXIgPSAnJztcblxuXHRjb25zdCB7ZW1haWwsIHBhc3N3b3JkfSA9IGF3YWl0IGdldFByb21wdChwcm9tcHRzKTtcblxuXHRjb25zdCBzcGlubmVyID0gbmV3IFNwaW5uZXIoJ0xvZ2dpbmcgaW4gdG8gVG9vbGJlYW3igKYnKTtcblx0c3Bpbm5lci5zdGFydCgpO1xuXG5cdHRyeSB7XG5cdFx0YXdhaXQgc3RvcmUuZGlzcGF0Y2godXNlckFjdGlvbnMubG9naW4oZW1haWwsIHBhc3N3b3JkKSk7XG5cdFx0c3Bpbm5lci5zdG9wKCk7XG5cdH1cblx0Y2F0Y2goZSkge1xuXHRcdHNwaW5uZXIuc3RvcCgpO1xuXHRcdGNvbnNvbGUubG9nKGNoYWxrLnJlZChgTG9naW4gZmFpbGVkOiAke2UubWVzc2FnZX1gKSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc29sZS5sb2coY2hhbGsuY3lhbignWW91IGFyZSBsb2dnZWQgaW4gdG8gVG9vbGJlYW0uJykpO1xufVxuIl19