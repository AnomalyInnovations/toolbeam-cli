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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcHRpb25zL2xvZ2luLmpzIl0sIm5hbWVzIjpbInVzZXJBY3Rpb25zIiwicHJvbXB0cyIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIm1lc3NhZ2UiLCJyZXF1aXJlZCIsImhpZGRlbiIsInJlcGxhY2UiLCJzdG9yZSIsInN0YXJ0IiwiZGVsaW1pdGVyIiwiZW1haWwiLCJwYXNzd29yZCIsInNwaW5uZXIiLCJkaXNwYXRjaCIsImxvZ2luIiwic3RvcCIsImNvbnNvbGUiLCJsb2ciLCJyZWQiLCJjeWFuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7SUFBWUEsVzs7Ozs7O0FBRVosSUFBTUMsVUFBVSxDQUNmO0FBQ0NDLE9BQU0sT0FEUDtBQUVDQyxjQUFhLG1CQUZkO0FBR0NDLFVBQVMseUJBSFY7QUFJQ0MsV0FBVTtBQUpYLENBRGUsRUFPZjtBQUNDSCxPQUFNLFVBRFA7QUFFQ0MsY0FBYSxzQkFGZDtBQUdDQyxVQUFTLDRCQUhWO0FBSUNFLFNBQVEsSUFKVDtBQUtDQyxVQUFTLEdBTFY7QUFNQ0YsV0FBVTtBQU5YLENBUGUsQ0FBaEI7Ozt1RUFpQmUsaUJBQWVHLEtBQWY7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFZCx1QkFBT0MsS0FBUDs7QUFFQSx1QkFBT0wsT0FBUCxHQUFpQixFQUFqQjtBQUNBLHVCQUFPTSxTQUFQLEdBQW1CLEVBQW5COztBQUxjO0FBQUEsYUFPa0Isd0JBQVVULE9BQVYsQ0FQbEI7O0FBQUE7QUFBQTtBQU9QVSxXQVBPLFNBT1BBLEtBUE87QUFPQUMsY0FQQSxTQU9BQSxRQVBBO0FBU1JDLGFBVFEsR0FTRSxrQkFBWSx5QkFBWixDQVRGOztBQVVkQSxjQUFRSixLQUFSOztBQVZjO0FBQUE7QUFBQSxhQWFQRCxNQUFNTSxRQUFOLENBQWVkLFlBQVllLEtBQVosQ0FBa0JKLEtBQWxCLEVBQXlCQyxRQUF6QixDQUFmLENBYk87O0FBQUE7QUFjYkMsY0FBUUcsSUFBUjtBQWRhO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQWlCYkgsY0FBUUcsSUFBUjtBQUNBQyxjQUFRQyxHQUFSLENBQVksZ0JBQU1DLEdBQU4sb0JBQTJCLFlBQUVmLE9BQTdCLENBQVo7QUFsQmE7O0FBQUE7O0FBc0JkYSxjQUFRQyxHQUFSLENBQVksZ0JBQU1FLElBQU4sQ0FBVyxnQ0FBWCxDQUFaOztBQXRCYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFIiwiZmlsZSI6ImxvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb21wdCBmcm9tICdwcm9tcHQnO1xuaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJztcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tICdjbHVpJztcbmltcG9ydCB7IGdldFByb21wdCB9IGZyb20gJy4uL2xpYnMvcHJvbXB0JztcbmltcG9ydCAqIGFzIHVzZXJBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvdXNlci1hY3Rpb25zJztcblxuY29uc3QgcHJvbXB0cyA9IFtcblx0e1xuXHRcdG5hbWU6ICdlbWFpbCcsXG5cdFx0ZGVzY3JpcHRpb246ICdFbnRlciB5b3VyIGVtYWlsOicsXG5cdFx0bWVzc2FnZTogJ1BsZWFzZSBlbnRlciB5b3VyIGVtYWlsJyxcblx0XHRyZXF1aXJlZDogdHJ1ZVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogJ3Bhc3N3b3JkJyxcblx0XHRkZXNjcmlwdGlvbjogJ0VudGVyIHlvdXIgcGFzc3dvcmQ6Jyxcblx0XHRtZXNzYWdlOiAnUGxlYXNlIGVudGVyIHlvdXIgcGFzc3dvcmQnLFxuXHRcdGhpZGRlbjogdHJ1ZSxcblx0XHRyZXBsYWNlOiAnKicsXG5cdFx0cmVxdWlyZWQ6IHRydWVcblx0fSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uKHN0b3JlKSB7XG5cblx0cHJvbXB0LnN0YXJ0KCk7XG5cblx0cHJvbXB0Lm1lc3NhZ2UgPSAnJztcblx0cHJvbXB0LmRlbGltaXRlciA9ICcnO1xuXG5cdGNvbnN0IHtlbWFpbCwgcGFzc3dvcmR9ID0gYXdhaXQgZ2V0UHJvbXB0KHByb21wdHMpO1xuXG5cdGNvbnN0IHNwaW5uZXIgPSBuZXcgU3Bpbm5lcignTG9nZ2luZyBpbiB0byBUb29sYmVhbeKApicpO1xuXHRzcGlubmVyLnN0YXJ0KCk7XG5cblx0dHJ5IHtcblx0XHRhd2FpdCBzdG9yZS5kaXNwYXRjaCh1c2VyQWN0aW9ucy5sb2dpbihlbWFpbCwgcGFzc3dvcmQpKTtcblx0XHRzcGlubmVyLnN0b3AoKTtcblx0fVxuXHRjYXRjaChlKSB7XG5cdFx0c3Bpbm5lci5zdG9wKCk7XG5cdFx0Y29uc29sZS5sb2coY2hhbGsucmVkKGBMb2dpbiBmYWlsZWQ6ICR7ZS5tZXNzYWdlfWApKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zb2xlLmxvZyhjaGFsay5jeWFuKCdZb3UgYXJlIGxvZ2dlZCBpbiB0byBUb29sYmVhbS4nKSk7XG59XG4iXX0=