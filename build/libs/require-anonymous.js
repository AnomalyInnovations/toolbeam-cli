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
//# sourceMappingURL=require-anonymous.js.map