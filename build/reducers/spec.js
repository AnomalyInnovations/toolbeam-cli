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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9zcGVjLmpzIl0sIm5hbWVzIjpbInVzZXIiLCJ0eXBlcyIsImluaXRpYWxTdGF0ZSIsImluZm8iLCJkYXRhIiwibG9hZF9pbmZvX2Vycm9yIiwibG9hZF9lcnJvciIsInVwZGF0ZV9lcnJvciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIlNQRUNfTE9BRF9JTkZPIiwiU1BFQ19MT0FEX0lORk9fU1VDQ0VTUyIsInJlc3VsdCIsInNwZWMiLCJTUEVDX0xPQURfSU5GT19GQUlMIiwiZXJyb3IiLCJTUEVDX0xPQUQiLCJTUEVDX0xPQURfU1VDQ0VTUyIsIkpTT04iLCJwYXJzZSIsIlNQRUNfTE9BRF9GQUlMIiwiU1BFQ19VUERBVEUiLCJTUEVDX1VQREFURV9TVUNDRVNTIiwiU1BFQ19VUERBVEVfRkFJTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7a0JBVXdCQSxJOztBQVZ4Qjs7SUFBWUMsSzs7Ozs7O0FBRVosSUFBTUMsZUFBZTtBQUNwQkMsT0FBTSxJQURjO0FBRXBCQyxPQUFNLElBRmM7QUFHcEJDLGtCQUFpQixJQUhHO0FBSXBCQyxhQUFZLElBSlE7QUFLcEJDLGVBQWM7QUFMTSxDQUFyQjs7QUFRZSxTQUFTUCxJQUFULEdBQWlEO0FBQUEsS0FBbkNRLEtBQW1DLHlEQUEzQk4sWUFBMkI7QUFBQSxLQUFiTyxNQUFhLHlEQUFKLEVBQUk7O0FBQzlELFNBQVFBLE9BQU9DLElBQWY7O0FBRUUsT0FBS1QsTUFBTVUsY0FBWDtBQUNELHFDQUFZSCxLQUFaO0FBQ0NILHFCQUFpQjtBQURsQjtBQUdDLE9BQUtKLE1BQU1XLHNCQUFYO0FBQ0QscUNBQVlKLEtBQVo7QUFDQ0wsVUFBTU0sT0FBT0ksTUFBUCxDQUFjVCxJQUFkLENBQW1CVTtBQUQxQjtBQUdDLE9BQUtiLE1BQU1jLG1CQUFYO0FBQ0QscUNBQVlQLEtBQVo7QUFDQ0gscUJBQWlCSSxPQUFPTztBQUR6Qjs7QUFLQyxPQUFLZixNQUFNZ0IsU0FBWDtBQUNELHFDQUFZVCxLQUFaO0FBQ0NGLGdCQUFZO0FBRGI7QUFHQyxPQUFLTCxNQUFNaUIsaUJBQVg7QUFDRCxPQUFNZCxPQUFPLHlCQUFlZSxLQUFLQyxLQUFMLENBQVdYLE9BQU9JLE1BQVAsQ0FBY1QsSUFBekIsQ0FBZixFQUErQyxJQUEvQyxFQUFxRCxDQUFyRCxDQUFiOztBQUVBLHFDQUFZSSxLQUFaO0FBQ0NKLFVBQU1BO0FBRFA7QUFHQyxPQUFLSCxNQUFNb0IsY0FBWDtBQUNELHFDQUFZYixLQUFaO0FBQ0NGLGdCQUFZRyxPQUFPTztBQURwQjs7QUFLQyxPQUFLZixNQUFNcUIsV0FBWDtBQUNELHFDQUFZZCxLQUFaO0FBQ0NELGtCQUFjO0FBRGY7QUFHQyxPQUFLTixNQUFNc0IsbUJBQVg7QUFDRCxVQUFPZixLQUFQO0FBQ0MsT0FBS1AsTUFBTXVCLGdCQUFYO0FBQ0QscUNBQVloQixLQUFaO0FBQ0NELGtCQUFjRSxPQUFPTztBQUR0Qjs7QUFJQztBQUNFLFVBQU9SLEtBQVA7QUE1Q0o7QUE4Q0QiLCJmaWxlIjoic3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL2FjdGlvbnMvYWN0aW9uLXR5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuXHRpbmZvOiBudWxsLFxuXHRkYXRhOiBudWxsLFxuXHRsb2FkX2luZm9fZXJyb3I6IG51bGwsXG5cdGxvYWRfZXJyb3I6IG51bGwsXG5cdHVwZGF0ZV9lcnJvcjogbnVsbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbiA9IHt9KSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblxuICAgIGNhc2UgdHlwZXMuU1BFQ19MT0FEX0lORk86XG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSxcblx0XHRcdFx0bG9hZF9pbmZvX2Vycm9yOiBudWxsXG5cdFx0XHR9O1xuICAgIGNhc2UgdHlwZXMuU1BFQ19MT0FEX0lORk9fU1VDQ0VTUzpcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLFxuXHRcdFx0XHRpbmZvOiBhY3Rpb24ucmVzdWx0LmRhdGEuc3BlY1xuXHRcdFx0fTtcbiAgICBjYXNlIHR5cGVzLlNQRUNfTE9BRF9JTkZPX0ZBSUw6XG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSxcblx0XHRcdFx0bG9hZF9pbmZvX2Vycm9yOiBhY3Rpb24uZXJyb3Jcblx0XHRcdH07XG5cblxuICAgIGNhc2UgdHlwZXMuU1BFQ19MT0FEOlxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsXG5cdFx0XHRcdGxvYWRfZXJyb3I6IG51bGxcblx0XHRcdH07XG4gICAgY2FzZSB0eXBlcy5TUEVDX0xPQURfU1VDQ0VTUzpcblx0XHRcdGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeShKU09OLnBhcnNlKGFjdGlvbi5yZXN1bHQuZGF0YSksIG51bGwsIDIpO1xuXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSxcblx0XHRcdFx0ZGF0YTogZGF0YVxuXHRcdFx0fTtcbiAgICBjYXNlIHR5cGVzLlNQRUNfTE9BRF9GQUlMOlxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsXG5cdFx0XHRcdGxvYWRfZXJyb3I6IGFjdGlvbi5lcnJvclxuXHRcdFx0fTtcblxuXG4gICAgY2FzZSB0eXBlcy5TUEVDX1VQREFURTpcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLFxuXHRcdFx0XHR1cGRhdGVfZXJyb3I6IG51bGxcblx0XHRcdH07XG4gICAgY2FzZSB0eXBlcy5TUEVDX1VQREFURV9TVUNDRVNTOlxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuICAgIGNhc2UgdHlwZXMuU1BFQ19VUERBVEVfRkFJTDpcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLFxuXHRcdFx0XHR1cGRhdGVfZXJyb3I6IGFjdGlvbi5lcnJvclxuXHRcdFx0fTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiJdfQ==