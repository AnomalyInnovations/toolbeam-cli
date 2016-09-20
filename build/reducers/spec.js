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

		case types.SPEC_SAVE:
			return (0, _extends3.default)({}, state, {
				data: (0, _stringify2.default)(action.json, null, 2)
			});

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9zcGVjLmpzIl0sIm5hbWVzIjpbInVzZXIiLCJ0eXBlcyIsImluaXRpYWxTdGF0ZSIsImluZm8iLCJkYXRhIiwibG9hZF9pbmZvX2Vycm9yIiwibG9hZF9lcnJvciIsInVwZGF0ZV9lcnJvciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIlNQRUNfU0FWRSIsImpzb24iLCJTUEVDX0xPQURfSU5GTyIsIlNQRUNfTE9BRF9JTkZPX1NVQ0NFU1MiLCJyZXN1bHQiLCJzcGVjIiwiU1BFQ19MT0FEX0lORk9fRkFJTCIsImVycm9yIiwiU1BFQ19MT0FEIiwiU1BFQ19MT0FEX1NVQ0NFU1MiLCJKU09OIiwicGFyc2UiLCJTUEVDX0xPQURfRkFJTCIsIlNQRUNfVVBEQVRFIiwiU1BFQ19VUERBVEVfU1VDQ0VTUyIsIlNQRUNfVVBEQVRFX0ZBSUwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O2tCQVV3QkEsSTs7QUFWeEI7O0lBQVlDLEs7Ozs7OztBQUVaLElBQU1DLGVBQWU7QUFDcEJDLE9BQU0sSUFEYztBQUVwQkMsT0FBTSxJQUZjO0FBR3BCQyxrQkFBaUIsSUFIRztBQUlwQkMsYUFBWSxJQUpRO0FBS3BCQyxlQUFjO0FBTE0sQ0FBckI7O0FBUWUsU0FBU1AsSUFBVCxHQUFpRDtBQUFBLEtBQW5DUSxLQUFtQyx5REFBM0JOLFlBQTJCO0FBQUEsS0FBYk8sTUFBYSx5REFBSixFQUFJOztBQUM5RCxTQUFRQSxPQUFPQyxJQUFmOztBQUVFLE9BQUtULE1BQU1VLFNBQVg7QUFDRCxxQ0FBWUgsS0FBWjtBQUNDSixVQUFNLHlCQUFlSyxPQUFPRyxJQUF0QixFQUE0QixJQUE1QixFQUFrQyxDQUFsQztBQURQOztBQUlDLE9BQUtYLE1BQU1ZLGNBQVg7QUFDRCxxQ0FBWUwsS0FBWjtBQUNDSCxxQkFBaUI7QUFEbEI7QUFHQyxPQUFLSixNQUFNYSxzQkFBWDtBQUNELHFDQUFZTixLQUFaO0FBQ0NMLFVBQU1NLE9BQU9NLE1BQVAsQ0FBY1gsSUFBZCxDQUFtQlk7QUFEMUI7QUFHQyxPQUFLZixNQUFNZ0IsbUJBQVg7QUFDRCxxQ0FBWVQsS0FBWjtBQUNDSCxxQkFBaUJJLE9BQU9TO0FBRHpCOztBQUtDLE9BQUtqQixNQUFNa0IsU0FBWDtBQUNELHFDQUFZWCxLQUFaO0FBQ0NGLGdCQUFZO0FBRGI7QUFHQyxPQUFLTCxNQUFNbUIsaUJBQVg7QUFDRCxPQUFNaEIsT0FBTyx5QkFBZWlCLEtBQUtDLEtBQUwsQ0FBV2IsT0FBT00sTUFBUCxDQUFjWCxJQUF6QixDQUFmLEVBQStDLElBQS9DLEVBQXFELENBQXJELENBQWI7O0FBRUEscUNBQVlJLEtBQVo7QUFDQ0osVUFBTUE7QUFEUDtBQUdDLE9BQUtILE1BQU1zQixjQUFYO0FBQ0QscUNBQVlmLEtBQVo7QUFDQ0YsZ0JBQVlHLE9BQU9TO0FBRHBCOztBQUtDLE9BQUtqQixNQUFNdUIsV0FBWDtBQUNELHFDQUFZaEIsS0FBWjtBQUNDRCxrQkFBYztBQURmO0FBR0MsT0FBS04sTUFBTXdCLG1CQUFYO0FBQ0QsVUFBT2pCLEtBQVA7QUFDQyxPQUFLUCxNQUFNeUIsZ0JBQVg7QUFDRCxxQ0FBWWxCLEtBQVo7QUFDQ0Qsa0JBQWNFLE9BQU9TO0FBRHRCOztBQUlDO0FBQ0UsVUFBT1YsS0FBUDtBQWpESjtBQW1ERCIsImZpbGUiOiJzcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vYWN0aW9ucy9hY3Rpb24tdHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG5cdGluZm86IG51bGwsXG5cdGRhdGE6IG51bGwsXG5cdGxvYWRfaW5mb19lcnJvcjogbnVsbCxcblx0bG9hZF9lcnJvcjogbnVsbCxcblx0dXBkYXRlX2Vycm9yOiBudWxsLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uID0ge30pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gICAgY2FzZSB0eXBlcy5TUEVDX1NBVkU6XG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSxcblx0XHRcdFx0ZGF0YTogSlNPTi5zdHJpbmdpZnkoYWN0aW9uLmpzb24sIG51bGwsIDIpXG5cdFx0XHR9O1xuXG4gICAgY2FzZSB0eXBlcy5TUEVDX0xPQURfSU5GTzpcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLFxuXHRcdFx0XHRsb2FkX2luZm9fZXJyb3I6IG51bGxcblx0XHRcdH07XG4gICAgY2FzZSB0eXBlcy5TUEVDX0xPQURfSU5GT19TVUNDRVNTOlxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsXG5cdFx0XHRcdGluZm86IGFjdGlvbi5yZXN1bHQuZGF0YS5zcGVjXG5cdFx0XHR9O1xuICAgIGNhc2UgdHlwZXMuU1BFQ19MT0FEX0lORk9fRkFJTDpcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLFxuXHRcdFx0XHRsb2FkX2luZm9fZXJyb3I6IGFjdGlvbi5lcnJvclxuXHRcdFx0fTtcblxuXG4gICAgY2FzZSB0eXBlcy5TUEVDX0xPQUQ6XG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSxcblx0XHRcdFx0bG9hZF9lcnJvcjogbnVsbFxuXHRcdFx0fTtcbiAgICBjYXNlIHR5cGVzLlNQRUNfTE9BRF9TVUNDRVNTOlxuXHRcdFx0Y29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KEpTT04ucGFyc2UoYWN0aW9uLnJlc3VsdC5kYXRhKSwgbnVsbCwgMik7XG5cblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLFxuXHRcdFx0XHRkYXRhOiBkYXRhXG5cdFx0XHR9O1xuICAgIGNhc2UgdHlwZXMuU1BFQ19MT0FEX0ZBSUw6XG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSxcblx0XHRcdFx0bG9hZF9lcnJvcjogYWN0aW9uLmVycm9yXG5cdFx0XHR9O1xuXG5cbiAgICBjYXNlIHR5cGVzLlNQRUNfVVBEQVRFOlxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsXG5cdFx0XHRcdHVwZGF0ZV9lcnJvcjogbnVsbFxuXHRcdFx0fTtcbiAgICBjYXNlIHR5cGVzLlNQRUNfVVBEQVRFX1NVQ0NFU1M6XG5cdFx0XHRyZXR1cm4gc3RhdGU7XG4gICAgY2FzZSB0eXBlcy5TUEVDX1VQREFURV9GQUlMOlxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsXG5cdFx0XHRcdHVwZGF0ZV9lcnJvcjogYWN0aW9uLmVycm9yXG5cdFx0XHR9O1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIl19