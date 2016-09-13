'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = user;

var _actionTypes = require('../actions/action-types');

var types = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
	info: null,
	data: null,
	load_info_error: null,
	load_error: null,
	update_error: null
};

function user() {
	var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	switch (action.type) {

		case types.SPEC_LOAD_INFO:
			return (0, _extends3.default)({}, state, {
				load_info_error: null
			});
		case types.SPEC_LOAD_INFO_SUCCESS:
			return (0, _extends3.default)({}, state, {
				info: action.result.data.spec
			});
		case types.SPEC_LOAD_INFO_FAIL:
			return (0, _extends3.default)({}, state, {
				load_info_error: action.error
			});

		case types.SPEC_LOAD:
			return (0, _extends3.default)({}, state, {
				load_error: null
			});
		case types.SPEC_LOAD_SUCCESS:
			var data = (0, _stringify2.default)(JSON.parse(action.result.data), null, 2);

			return (0, _extends3.default)({}, state, {
				data: data
			});
		case types.SPEC_LOAD_FAIL:
			return (0, _extends3.default)({}, state, {
				load_error: action.error
			});

		case types.SPEC_UPDATE:
			return (0, _extends3.default)({}, state, {
				update_error: null
			});
		case types.SPEC_UPDATE_SUCCESS:
			return state;
		case types.SPEC_UPDATE_FAIL:
			return (0, _extends3.default)({}, state, {
				update_error: action.error
			});

		default:
			return state;
	}
}
//# sourceMappingURL=spec.js.map