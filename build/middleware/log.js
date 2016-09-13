'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _actionTypes = require('../actions/action-types');

var types = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = function (debug) {
	var debugStore = debug('store');

	return function (store) {
		return function (next) {
			return function (action) {
				var result = next(action);

				switch (action.type) {
					case types.USER_LOGIN_SUCCESS:
						debugStore(action.type + ' ' + result.result);
						break;
					case types.USER_LOGIN_FAIL:
						debugStore(action.type + ' ' + result.error);
						break;
					default:
						debugStore('' + action.type);
						break;
				}

				return result;
			};
		};
	};
};
//# sourceMappingURL=log.js.map