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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9zaWdudXAuanMiXSwibmFtZXMiOlsidXNlckFjdGlvbnMiLCJwcm9tcHRzIiwibmFtZSIsImRlc2NyaXB0aW9uIiwibWVzc2FnZSIsInJlcXVpcmVkIiwiaGlkZGVuIiwic3RvcmUiLCJzdGFydCIsImRlbGltaXRlciIsImVtYWlsIiwicGFzc3dvcmQiLCJwYXNzd29yZENvbmZpcm0iLCJjb25zb2xlIiwibG9nIiwicmVkIiwic3Bpbm5lciIsImRpc3BhdGNoIiwic2lnbnVwIiwic3RvcCIsImdyZWVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7SUFBWUEsVzs7Ozs7O0FBRVosSUFBTUMsVUFBVSxDQUNmO0FBQ0NDLE9BQU0sT0FEUDtBQUVDQyxjQUFhLG1CQUZkO0FBR0NDLFVBQVMseUJBSFY7QUFJQ0MsV0FBVTtBQUpYLENBRGUsRUFPZjtBQUNDSCxPQUFNLFVBRFA7QUFFQ0MsY0FBYSxzQkFGZDtBQUdDQyxVQUFTLDRCQUhWO0FBSUNFLFNBQVEsSUFKVDtBQUtDRCxXQUFVO0FBTFgsQ0FQZSxFQWNmO0FBQ0NILE9BQU0saUJBRFA7QUFFQ0MsY0FBYSx3QkFGZDtBQUdDQyxVQUFTLGtDQUhWO0FBSUNFLFNBQVEsSUFKVDtBQUtDRCxXQUFVO0FBTFgsQ0FkZSxDQUFoQjs7O3VFQXVCZSxpQkFBZUUsS0FBZjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVkLHVCQUFPQyxLQUFQOztBQUVBLHVCQUFPSixPQUFQLEdBQWlCLEVBQWpCO0FBQ0EsdUJBQU9LLFNBQVAsR0FBbUIsRUFBbkI7O0FBTGM7QUFBQSxhQU9tQyx3QkFBVVIsT0FBVixDQVBuQzs7QUFBQTtBQUFBO0FBT1BTLFdBUE8sU0FPUEEsS0FQTztBQU9BQyxjQVBBLFNBT0FBLFFBUEE7QUFPVUMscUJBUFYsU0FPVUEsZUFQVjs7QUFBQSxZQVNWRCxZQUFZQyxlQVRGO0FBQUE7QUFBQTtBQUFBOztBQVViQyxjQUFRQyxHQUFSLENBQVksZ0JBQU1DLEdBQU4sQ0FBVSwrQ0FBVixDQUFaO0FBVmE7O0FBQUE7QUFjUkMsYUFkUSxHQWNFLGtCQUFZLDBCQUFaLENBZEY7O0FBZWRBLGNBQVFSLEtBQVI7O0FBZmM7QUFBQTtBQUFBLGFBa0JQRCxNQUFNVSxRQUFOLENBQWVqQixZQUFZa0IsTUFBWixDQUFtQlIsS0FBbkIsRUFBMEJDLFFBQTFCLENBQWYsQ0FsQk87O0FBQUE7QUFtQmJLLGNBQVFHLElBQVI7QUFuQmE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBc0JiSCxjQUFRRyxJQUFSO0FBQ0FOLGNBQVFDLEdBQVIsQ0FBWSxnQkFBTUMsR0FBTixxQkFBNEIsWUFBRVgsT0FBOUIsQ0FBWjtBQXZCYTs7QUFBQTs7QUEyQmRTLGNBQVFDLEdBQVIsQ0FBWSxnQkFBTU0sS0FBTixDQUFZLGlDQUFaLENBQVo7O0FBM0JjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEUiLCJmaWxlIjoic2lnbnVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb21wdCBmcm9tICdwcm9tcHQnO1xuaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJztcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tICdjbHVpJztcbmltcG9ydCB7IGdldFByb21wdCB9IGZyb20gJy4uL2xpYnMvcHJvbXB0JztcbmltcG9ydCAqIGFzIHVzZXJBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvdXNlci1hY3Rpb25zJztcblxuY29uc3QgcHJvbXB0cyA9IFtcblx0e1xuXHRcdG5hbWU6ICdlbWFpbCcsXG5cdFx0ZGVzY3JpcHRpb246ICdFbnRlciB5b3VyIGVtYWlsOicsXG5cdFx0bWVzc2FnZTogJ1BsZWFzZSBlbnRlciB5b3VyIGVtYWlsJyxcblx0XHRyZXF1aXJlZDogdHJ1ZVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogJ3Bhc3N3b3JkJyxcblx0XHRkZXNjcmlwdGlvbjogJ0VudGVyIHlvdXIgcGFzc3dvcmQ6Jyxcblx0XHRtZXNzYWdlOiAnUGxlYXNlIGVudGVyIHlvdXIgcGFzc3dvcmQnLFxuXHRcdGhpZGRlbjogdHJ1ZSxcblx0XHRyZXF1aXJlZDogdHJ1ZVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogJ3Bhc3N3b3JkQ29uZmlybScsXG5cdFx0ZGVzY3JpcHRpb246ICdDb25maXJtIHlvdXIgcGFzc3dvcmQ6Jyxcblx0XHRtZXNzYWdlOiAnUGxlYXNlIGVudGVyIHlvdXIgcGFzc3dvcmQgYWdhaW4nLFxuXHRcdGhpZGRlbjogdHJ1ZSxcblx0XHRyZXF1aXJlZDogdHJ1ZVxuXHR9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24oc3RvcmUpIHtcblxuXHRwcm9tcHQuc3RhcnQoKTtcblxuXHRwcm9tcHQubWVzc2FnZSA9ICcnO1xuXHRwcm9tcHQuZGVsaW1pdGVyID0gJyc7XG5cblx0Y29uc3Qge2VtYWlsLCBwYXNzd29yZCwgcGFzc3dvcmRDb25maXJtfSA9IGF3YWl0IGdldFByb21wdChwcm9tcHRzKTtcblxuXHRpZiAocGFzc3dvcmQgIT0gcGFzc3dvcmRDb25maXJtKSB7XG5cdFx0Y29uc29sZS5sb2coY2hhbGsucmVkKCdQYXNzd29yZCBkb2VzIG5vdCBtYXRjaCB0aGUgY29uZmlybSBwYXNzd29yZC4nKSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgc3Bpbm5lciA9IG5ldyBTcGlubmVyKCdTaWduaW5nIHVwIGZvciBUb29sYmVhbeKApicpO1xuXHRzcGlubmVyLnN0YXJ0KCk7XG5cblx0dHJ5IHtcblx0XHRhd2FpdCBzdG9yZS5kaXNwYXRjaCh1c2VyQWN0aW9ucy5zaWdudXAoZW1haWwsIHBhc3N3b3JkKSk7XG5cdFx0c3Bpbm5lci5zdG9wKCk7XG5cdH1cblx0Y2F0Y2goZSkge1xuXHRcdHNwaW5uZXIuc3RvcCgpO1xuXHRcdGNvbnNvbGUubG9nKGNoYWxrLnJlZChgU2lnbnVwIGZhaWxlZDogJHtlLm1lc3NhZ2V9YCkpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnNvbGUubG9nKGNoYWxrLmdyZWVuKCdZb3UgYXJlIHNpZ25lZCB1cCBmb3IgVG9vbGJlYW0uJykpO1xuXG59XG4iXX0=