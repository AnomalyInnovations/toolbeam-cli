'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = specs;

var _actionTypes = require('../actions/action-types');

var types = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
	data: null,
	load_error: null
};

function specs() {
	var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	switch (action.type) {

		case types.SPECS_LOAD:
			return (0, _extends3.default)({}, state, {
				load_error: null
			});
		case types.SPECS_LOAD_SUCCESS:
			return (0, _extends3.default)({}, state, {
				data: action.result.data.specs
			});
		case types.SPECS_LOAD_FAIL:
			return (0, _extends3.default)({}, state, {
				load_error: action.error
			});

		default:
			return state;
	}
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9zcGVjcy5qcyJdLCJuYW1lcyI6WyJzcGVjcyIsInR5cGVzIiwiaW5pdGlhbFN0YXRlIiwiZGF0YSIsImxvYWRfZXJyb3IiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJTUEVDU19MT0FEIiwiU1BFQ1NfTE9BRF9TVUNDRVNTIiwicmVzdWx0IiwiU1BFQ1NfTE9BRF9GQUlMIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7a0JBT3dCQSxLOztBQVB4Qjs7SUFBWUMsSzs7Ozs7O0FBRVosSUFBTUMsZUFBZTtBQUNwQkMsT0FBTSxJQURjO0FBRXBCQyxhQUFZO0FBRlEsQ0FBckI7O0FBS2UsU0FBU0osS0FBVCxHQUFrRDtBQUFBLEtBQW5DSyxLQUFtQyx5REFBM0JILFlBQTJCO0FBQUEsS0FBYkksTUFBYSx5REFBSixFQUFJOztBQUMvRCxTQUFRQSxPQUFPQyxJQUFmOztBQUdFLE9BQUtOLE1BQU1PLFVBQVg7QUFDRCxxQ0FBWUgsS0FBWjtBQUNDRCxnQkFBWTtBQURiO0FBR0MsT0FBS0gsTUFBTVEsa0JBQVg7QUFDRCxxQ0FBWUosS0FBWjtBQUNDRixVQUFNRyxPQUFPSSxNQUFQLENBQWNQLElBQWQsQ0FBbUJIO0FBRDFCO0FBR0MsT0FBS0MsTUFBTVUsZUFBWDtBQUNELHFDQUFZTixLQUFaO0FBQ0NELGdCQUFZRSxPQUFPTTtBQURwQjs7QUFLQztBQUNFLFVBQU9QLEtBQVA7QUFsQko7QUFvQkQiLCJmaWxlIjoic3BlY3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9hY3Rpb25zL2FjdGlvbi10eXBlcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcblx0ZGF0YTogbnVsbCxcblx0bG9hZF9lcnJvcjogbnVsbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNwZWNzKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24gPSB7fSkge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cblxuICAgIGNhc2UgdHlwZXMuU1BFQ1NfTE9BRDpcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLFxuXHRcdFx0XHRsb2FkX2Vycm9yOiBudWxsXG5cdFx0XHR9O1xuICAgIGNhc2UgdHlwZXMuU1BFQ1NfTE9BRF9TVUNDRVNTOlxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsXG5cdFx0XHRcdGRhdGE6IGFjdGlvbi5yZXN1bHQuZGF0YS5zcGVjc1xuXHRcdFx0fTtcbiAgICBjYXNlIHR5cGVzLlNQRUNTX0xPQURfRkFJTDpcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLFxuXHRcdFx0XHRsb2FkX2Vycm9yOiBhY3Rpb24uZXJyb3Jcblx0XHRcdH07XG5cblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiJdfQ==