'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = user;

var _actionTypes = require('../actions/action-types');

var types = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
	session_id: null,
	user: null,
	login_error: null,
	logout_error: null
};

function user() {
	var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	switch (action.type) {

		case types.USER_LOAD:
			return state;
		case types.USER_LOAD_SUCCESS:
			return (0, _extends3.default)({}, state, {
				session_id: action.session_id,
				user: action.user
			});

		case types.USER_LOGIN:
			return (0, _extends3.default)({}, state, {
				login_error: null
			});
		case types.USER_LOGIN_SUCCESS:
			var result = action.result.data;

			return (0, _extends3.default)({}, state, {
				session_id: result.session_id,
				user: result.user
			});
		case types.USER_LOGIN_FAIL:
			return (0, _extends3.default)({}, state, {
				login_error: action.error
			});

		case types.USER_LOGOUT:
			return (0, _extends3.default)({}, state, {
				logout_error: null
			});
		case types.USER_LOGOUT_SUCCESS:
			return state;
		case types.USER_LOGOUT_FAIL:
			return (0, _extends3.default)({}, state, {
				logout_error: action.error
			});

		default:
			return state;
	}
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy91c2VyLmpzIl0sIm5hbWVzIjpbInVzZXIiLCJ0eXBlcyIsImluaXRpYWxTdGF0ZSIsInNlc3Npb25faWQiLCJsb2dpbl9lcnJvciIsImxvZ291dF9lcnJvciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIlVTRVJfTE9BRCIsIlVTRVJfTE9BRF9TVUNDRVNTIiwiVVNFUl9MT0dJTiIsIlVTRVJfTE9HSU5fU1VDQ0VTUyIsInJlc3VsdCIsImRhdGEiLCJVU0VSX0xPR0lOX0ZBSUwiLCJlcnJvciIsIlVTRVJfTE9HT1VUIiwiVVNFUl9MT0dPVVRfU1VDQ0VTUyIsIlVTRVJfTE9HT1VUX0ZBSUwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7a0JBU3dCQSxJOztBQVR4Qjs7SUFBWUMsSzs7Ozs7O0FBRVosSUFBTUMsZUFBZTtBQUNwQkMsYUFBWSxJQURRO0FBRXBCSCxPQUFNLElBRmM7QUFHcEJJLGNBQWEsSUFITztBQUlwQkMsZUFBYztBQUpNLENBQXJCOztBQU9lLFNBQVNMLElBQVQsR0FBaUQ7QUFBQSxLQUFuQ00sS0FBbUMseURBQTNCSixZQUEyQjtBQUFBLEtBQWJLLE1BQWEseURBQUosRUFBSTs7QUFDOUQsU0FBUUEsT0FBT0MsSUFBZjs7QUFFRSxPQUFLUCxNQUFNUSxTQUFYO0FBQ0QsVUFBT0gsS0FBUDtBQUNDLE9BQUtMLE1BQU1TLGlCQUFYO0FBQ0QscUNBQVlKLEtBQVo7QUFDQ0gsZ0JBQVlJLE9BQU9KLFVBRHBCO0FBRUNILFVBQU1PLE9BQU9QO0FBRmQ7O0FBTUMsT0FBS0MsTUFBTVUsVUFBWDtBQUNELHFDQUFZTCxLQUFaO0FBQ0NGLGlCQUFhO0FBRGQ7QUFHQyxPQUFLSCxNQUFNVyxrQkFBWDtBQUNELE9BQU1DLFNBQVNOLE9BQU9NLE1BQVAsQ0FBY0MsSUFBN0I7O0FBRUEscUNBQVlSLEtBQVo7QUFDQ0gsZ0JBQVlVLE9BQU9WLFVBRHBCO0FBRUNILFVBQU1hLE9BQU9iO0FBRmQ7QUFJQyxPQUFLQyxNQUFNYyxlQUFYO0FBQ0QscUNBQVlULEtBQVo7QUFDQ0YsaUJBQWFHLE9BQU9TO0FBRHJCOztBQUtDLE9BQUtmLE1BQU1nQixXQUFYO0FBQ0QscUNBQVlYLEtBQVo7QUFDQ0Qsa0JBQWM7QUFEZjtBQUdDLE9BQUtKLE1BQU1pQixtQkFBWDtBQUNELFVBQU9aLEtBQVA7QUFDQyxPQUFLTCxNQUFNa0IsZ0JBQVg7QUFDRCxxQ0FBWWIsS0FBWjtBQUNDRCxrQkFBY0UsT0FBT1M7QUFEdEI7O0FBSUM7QUFDRSxVQUFPVixLQUFQO0FBeENKO0FBMENEIiwiZmlsZSI6InVzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9hY3Rpb25zL2FjdGlvbi10eXBlcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcblx0c2Vzc2lvbl9pZDogbnVsbCxcblx0dXNlcjogbnVsbCxcblx0bG9naW5fZXJyb3I6IG51bGwsXG5cdGxvZ291dF9lcnJvcjogbnVsbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbiA9IHt9KSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblxuICAgIGNhc2UgdHlwZXMuVVNFUl9MT0FEOlxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuICAgIGNhc2UgdHlwZXMuVVNFUl9MT0FEX1NVQ0NFU1M6XG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSxcblx0XHRcdFx0c2Vzc2lvbl9pZDogYWN0aW9uLnNlc3Npb25faWQsXG5cdFx0XHRcdHVzZXI6IGFjdGlvbi51c2VyLFxuXHRcdFx0fTtcblxuXG4gICAgY2FzZSB0eXBlcy5VU0VSX0xPR0lOOlxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsXG5cdFx0XHRcdGxvZ2luX2Vycm9yOiBudWxsXG5cdFx0XHR9O1xuICAgIGNhc2UgdHlwZXMuVVNFUl9MT0dJTl9TVUNDRVNTOlxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gYWN0aW9uLnJlc3VsdC5kYXRhO1xuXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSxcblx0XHRcdFx0c2Vzc2lvbl9pZDogcmVzdWx0LnNlc3Npb25faWQsXG5cdFx0XHRcdHVzZXI6IHJlc3VsdC51c2VyLFxuXHRcdFx0fTtcbiAgICBjYXNlIHR5cGVzLlVTRVJfTE9HSU5fRkFJTDpcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLFxuXHRcdFx0XHRsb2dpbl9lcnJvcjogYWN0aW9uLmVycm9yXG5cdFx0XHR9O1xuXG5cbiAgICBjYXNlIHR5cGVzLlVTRVJfTE9HT1VUOlxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsXG5cdFx0XHRcdGxvZ291dF9lcnJvcjogbnVsbCxcblx0XHRcdH07XG4gICAgY2FzZSB0eXBlcy5VU0VSX0xPR09VVF9TVUNDRVNTOlxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuICAgIGNhc2UgdHlwZXMuVVNFUl9MT0dPVVRfRkFJTDpcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLFxuXHRcdFx0XHRsb2dvdXRfZXJyb3I6IGFjdGlvbi5lcnJvclxuXHRcdFx0fTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiJdfQ==