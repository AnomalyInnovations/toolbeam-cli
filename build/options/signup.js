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
	required: true
}, {
	name: 'passwordConfirm',
	description: 'Confirm your password:',
	message: 'Please enter your password again',
	hidden: true,
	required: true
}];

exports.default = function () {
	var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(store) {
		var _ref2, email, password, passwordConfirm, spinner;

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
						passwordConfirm = _ref2.passwordConfirm;

						if (!(password != passwordConfirm)) {
							_context.next = 12;
							break;
						}

						console.log(_chalk2.default.red('Password does not match the confirm password.'));
						return _context.abrupt('return');

					case 12:
						spinner = new _clui.Spinner('Signing up for Toolbeam…');

						spinner.start();

						_context.prev = 14;
						_context.next = 17;
						return store.dispatch(userActions.signup(email, password));

					case 17:
						spinner.stop();
						_context.next = 25;
						break;

					case 20:
						_context.prev = 20;
						_context.t0 = _context['catch'](14);

						spinner.stop();
						console.log(_chalk2.default.red('Signup failed: ' + _context.t0.message));
						return _context.abrupt('return');

					case 25:

						console.log(_chalk2.default.green('You are signed up for Toolbeam.'));

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcHRpb25zL3NpZ251cC5qcyJdLCJuYW1lcyI6WyJ1c2VyQWN0aW9ucyIsInByb21wdHMiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJtZXNzYWdlIiwicmVxdWlyZWQiLCJoaWRkZW4iLCJzdG9yZSIsInN0YXJ0IiwiZGVsaW1pdGVyIiwiZW1haWwiLCJwYXNzd29yZCIsInBhc3N3b3JkQ29uZmlybSIsImNvbnNvbGUiLCJsb2ciLCJyZWQiLCJzcGlubmVyIiwiZGlzcGF0Y2giLCJzaWdudXAiLCJzdG9wIiwiZ3JlZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOztJQUFZQSxXOzs7Ozs7QUFFWixJQUFNQyxVQUFVLENBQ2Y7QUFDQ0MsT0FBTSxPQURQO0FBRUNDLGNBQWEsbUJBRmQ7QUFHQ0MsVUFBUyx5QkFIVjtBQUlDQyxXQUFVO0FBSlgsQ0FEZSxFQU9mO0FBQ0NILE9BQU0sVUFEUDtBQUVDQyxjQUFhLHNCQUZkO0FBR0NDLFVBQVMsNEJBSFY7QUFJQ0UsU0FBUSxJQUpUO0FBS0NELFdBQVU7QUFMWCxDQVBlLEVBY2Y7QUFDQ0gsT0FBTSxpQkFEUDtBQUVDQyxjQUFhLHdCQUZkO0FBR0NDLFVBQVMsa0NBSFY7QUFJQ0UsU0FBUSxJQUpUO0FBS0NELFdBQVU7QUFMWCxDQWRlLENBQWhCOzs7dUVBdUJlLGlCQUFlRSxLQUFmO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRWQsdUJBQU9DLEtBQVA7O0FBRUEsdUJBQU9KLE9BQVAsR0FBaUIsRUFBakI7QUFDQSx1QkFBT0ssU0FBUCxHQUFtQixFQUFuQjs7QUFMYztBQUFBLGFBT21DLHdCQUFVUixPQUFWLENBUG5DOztBQUFBO0FBQUE7QUFPUFMsV0FQTyxTQU9QQSxLQVBPO0FBT0FDLGNBUEEsU0FPQUEsUUFQQTtBQU9VQyxxQkFQVixTQU9VQSxlQVBWOztBQUFBLFlBU1ZELFlBQVlDLGVBVEY7QUFBQTtBQUFBO0FBQUE7O0FBVWJDLGNBQVFDLEdBQVIsQ0FBWSxnQkFBTUMsR0FBTixDQUFVLCtDQUFWLENBQVo7QUFWYTs7QUFBQTtBQWNSQyxhQWRRLEdBY0Usa0JBQVksMEJBQVosQ0FkRjs7QUFlZEEsY0FBUVIsS0FBUjs7QUFmYztBQUFBO0FBQUEsYUFrQlBELE1BQU1VLFFBQU4sQ0FBZWpCLFlBQVlrQixNQUFaLENBQW1CUixLQUFuQixFQUEwQkMsUUFBMUIsQ0FBZixDQWxCTzs7QUFBQTtBQW1CYkssY0FBUUcsSUFBUjtBQW5CYTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFzQmJILGNBQVFHLElBQVI7QUFDQU4sY0FBUUMsR0FBUixDQUFZLGdCQUFNQyxHQUFOLHFCQUE0QixZQUFFWCxPQUE5QixDQUFaO0FBdkJhOztBQUFBOztBQTJCZFMsY0FBUUMsR0FBUixDQUFZLGdCQUFNTSxLQUFOLENBQVksaUNBQVosQ0FBWjs7QUEzQmM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRSIsImZpbGUiOiJzaWdudXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJvbXB0IGZyb20gJ3Byb21wdCc7XG5pbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnO1xuaW1wb3J0IHsgU3Bpbm5lciB9IGZyb20gJ2NsdWknO1xuaW1wb3J0IHsgZ2V0UHJvbXB0IH0gZnJvbSAnLi4vbGlicy9wcm9tcHQnO1xuaW1wb3J0ICogYXMgdXNlckFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy91c2VyLWFjdGlvbnMnO1xuXG5jb25zdCBwcm9tcHRzID0gW1xuXHR7XG5cdFx0bmFtZTogJ2VtYWlsJyxcblx0XHRkZXNjcmlwdGlvbjogJ0VudGVyIHlvdXIgZW1haWw6Jyxcblx0XHRtZXNzYWdlOiAnUGxlYXNlIGVudGVyIHlvdXIgZW1haWwnLFxuXHRcdHJlcXVpcmVkOiB0cnVlXG5cdH0sXG5cdHtcblx0XHRuYW1lOiAncGFzc3dvcmQnLFxuXHRcdGRlc2NyaXB0aW9uOiAnRW50ZXIgeW91ciBwYXNzd29yZDonLFxuXHRcdG1lc3NhZ2U6ICdQbGVhc2UgZW50ZXIgeW91ciBwYXNzd29yZCcsXG5cdFx0aGlkZGVuOiB0cnVlLFxuXHRcdHJlcXVpcmVkOiB0cnVlXG5cdH0sXG5cdHtcblx0XHRuYW1lOiAncGFzc3dvcmRDb25maXJtJyxcblx0XHRkZXNjcmlwdGlvbjogJ0NvbmZpcm0geW91ciBwYXNzd29yZDonLFxuXHRcdG1lc3NhZ2U6ICdQbGVhc2UgZW50ZXIgeW91ciBwYXNzd29yZCBhZ2FpbicsXG5cdFx0aGlkZGVuOiB0cnVlLFxuXHRcdHJlcXVpcmVkOiB0cnVlXG5cdH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbihzdG9yZSkge1xuXG5cdHByb21wdC5zdGFydCgpO1xuXG5cdHByb21wdC5tZXNzYWdlID0gJyc7XG5cdHByb21wdC5kZWxpbWl0ZXIgPSAnJztcblxuXHRjb25zdCB7ZW1haWwsIHBhc3N3b3JkLCBwYXNzd29yZENvbmZpcm19ID0gYXdhaXQgZ2V0UHJvbXB0KHByb21wdHMpO1xuXG5cdGlmIChwYXNzd29yZCAhPSBwYXNzd29yZENvbmZpcm0pIHtcblx0XHRjb25zb2xlLmxvZyhjaGFsay5yZWQoJ1Bhc3N3b3JkIGRvZXMgbm90IG1hdGNoIHRoZSBjb25maXJtIHBhc3N3b3JkLicpKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBzcGlubmVyID0gbmV3IFNwaW5uZXIoJ1NpZ25pbmcgdXAgZm9yIFRvb2xiZWFt4oCmJyk7XG5cdHNwaW5uZXIuc3RhcnQoKTtcblxuXHR0cnkge1xuXHRcdGF3YWl0IHN0b3JlLmRpc3BhdGNoKHVzZXJBY3Rpb25zLnNpZ251cChlbWFpbCwgcGFzc3dvcmQpKTtcblx0XHRzcGlubmVyLnN0b3AoKTtcblx0fVxuXHRjYXRjaChlKSB7XG5cdFx0c3Bpbm5lci5zdG9wKCk7XG5cdFx0Y29uc29sZS5sb2coY2hhbGsucmVkKGBTaWdudXAgZmFpbGVkOiAke2UubWVzc2FnZX1gKSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc29sZS5sb2coY2hhbGsuZ3JlZW4oJ1lvdSBhcmUgc2lnbmVkIHVwIGZvciBUb29sYmVhbS4nKSk7XG5cbn1cbiJdfQ==