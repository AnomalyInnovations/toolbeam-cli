'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = tools;

var _actionTypes = require('../actions/action-types');

var types = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
	data: null,
	load_error: null
};

function tools() {
	var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	switch (action.type) {

		case types.TOOLS_LOAD:
			return (0, _extends3.default)({}, state, {
				load_error: null
			});
		case types.TOOLS_LOAD_SUCCESS:
			return (0, _extends3.default)({}, state, {
				data: action.result.data.tools
			});
		case types.TOOLS_LOAD_FAIL:
			return (0, _extends3.default)({}, state, {
				load_error: action.error
			});

		default:
			return state;
	}
}
//# sourceMappingURL=tools.js.map