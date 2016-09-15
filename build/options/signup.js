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
//# sourceMappingURL=signup.js.map