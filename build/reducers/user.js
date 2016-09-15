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
	logout_error: null,
	signup_error: null
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

		case types.USER_SIGNUP:
			return (0, _extends3.default)({}, state, {
				signup_error: null
			});
		case types.USER_SIGNUP_SUCCESS:
			return (0, _extends3.default)({}, state, {
				session_id: action.result.data.session_id,
				user: action.result.data.user
			});
		case types.USER_SIGNUP_FAIL:
			return (0, _extends3.default)({}, state, {
				signup_error: action.error
			});

		default:
			return state;
	}
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy91c2VyLmpzIl0sIm5hbWVzIjpbInVzZXIiLCJ0eXBlcyIsImluaXRpYWxTdGF0ZSIsInNlc3Npb25faWQiLCJsb2dpbl9lcnJvciIsImxvZ291dF9lcnJvciIsInNpZ251cF9lcnJvciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIlVTRVJfTE9BRCIsIlVTRVJfTE9BRF9TVUNDRVNTIiwiVVNFUl9MT0dJTiIsIlVTRVJfTE9HSU5fU1VDQ0VTUyIsInJlc3VsdCIsImRhdGEiLCJVU0VSX0xPR0lOX0ZBSUwiLCJlcnJvciIsIlVTRVJfTE9HT1VUIiwiVVNFUl9MT0dPVVRfU1VDQ0VTUyIsIlVTRVJfTE9HT1VUX0ZBSUwiLCJVU0VSX1NJR05VUCIsIlVTRVJfU0lHTlVQX1NVQ0NFU1MiLCJVU0VSX1NJR05VUF9GQUlMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O2tCQVV3QkEsSTs7QUFWeEI7O0lBQVlDLEs7Ozs7OztBQUVaLElBQU1DLGVBQWU7QUFDcEJDLGFBQVksSUFEUTtBQUVwQkgsT0FBTSxJQUZjO0FBR3BCSSxjQUFhLElBSE87QUFJcEJDLGVBQWMsSUFKTTtBQUtwQkMsZUFBYztBQUxNLENBQXJCOztBQVFlLFNBQVNOLElBQVQsR0FBaUQ7QUFBQSxLQUFuQ08sS0FBbUMseURBQTNCTCxZQUEyQjtBQUFBLEtBQWJNLE1BQWEseURBQUosRUFBSTs7QUFDOUQsU0FBUUEsT0FBT0MsSUFBZjs7QUFFRSxPQUFLUixNQUFNUyxTQUFYO0FBQ0QsVUFBT0gsS0FBUDtBQUNDLE9BQUtOLE1BQU1VLGlCQUFYO0FBQ0QscUNBQVlKLEtBQVo7QUFDQ0osZ0JBQVlLLE9BQU9MLFVBRHBCO0FBRUNILFVBQU1RLE9BQU9SO0FBRmQ7O0FBTUMsT0FBS0MsTUFBTVcsVUFBWDtBQUNELHFDQUFZTCxLQUFaO0FBQ0NILGlCQUFhO0FBRGQ7QUFHQyxPQUFLSCxNQUFNWSxrQkFBWDtBQUNELE9BQU1DLFNBQVNOLE9BQU9NLE1BQVAsQ0FBY0MsSUFBN0I7O0FBRUEscUNBQVlSLEtBQVo7QUFDQ0osZ0JBQVlXLE9BQU9YLFVBRHBCO0FBRUNILFVBQU1jLE9BQU9kO0FBRmQ7QUFJQyxPQUFLQyxNQUFNZSxlQUFYO0FBQ0QscUNBQVlULEtBQVo7QUFDQ0gsaUJBQWFJLE9BQU9TO0FBRHJCOztBQUtDLE9BQUtoQixNQUFNaUIsV0FBWDtBQUNELHFDQUFZWCxLQUFaO0FBQ0NGLGtCQUFjO0FBRGY7QUFHQyxPQUFLSixNQUFNa0IsbUJBQVg7QUFDRCxVQUFPWixLQUFQO0FBQ0MsT0FBS04sTUFBTW1CLGdCQUFYO0FBQ0QscUNBQVliLEtBQVo7QUFDQ0Ysa0JBQWNHLE9BQU9TO0FBRHRCOztBQUtDLE9BQUtoQixNQUFNb0IsV0FBWDtBQUNELHFDQUFZZCxLQUFaO0FBQ0NELGtCQUFjO0FBRGY7QUFHQyxPQUFLTCxNQUFNcUIsbUJBQVg7QUFDRCxxQ0FBWWYsS0FBWjtBQUNDSixnQkFBWUssT0FBT00sTUFBUCxDQUFjQyxJQUFkLENBQW1CWixVQURoQztBQUVDSCxVQUFNUSxPQUFPTSxNQUFQLENBQWNDLElBQWQsQ0FBbUJmO0FBRjFCO0FBSUMsT0FBS0MsTUFBTXNCLGdCQUFYO0FBQ0QscUNBQVloQixLQUFaO0FBQ0NELGtCQUFjRSxPQUFPUztBQUR0Qjs7QUFJQztBQUNFLFVBQU9WLEtBQVA7QUF2REo7QUF5REQiLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL2FjdGlvbnMvYWN0aW9uLXR5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuXHRzZXNzaW9uX2lkOiBudWxsLFxuXHR1c2VyOiBudWxsLFxuXHRsb2dpbl9lcnJvcjogbnVsbCxcblx0bG9nb3V0X2Vycm9yOiBudWxsLFxuXHRzaWdudXBfZXJyb3I6IG51bGwsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24gPSB7fSkge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgICBjYXNlIHR5cGVzLlVTRVJfTE9BRDpcblx0XHRcdHJldHVybiBzdGF0ZTtcbiAgICBjYXNlIHR5cGVzLlVTRVJfTE9BRF9TVUNDRVNTOlxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsXG5cdFx0XHRcdHNlc3Npb25faWQ6IGFjdGlvbi5zZXNzaW9uX2lkLFxuXHRcdFx0XHR1c2VyOiBhY3Rpb24udXNlcixcblx0XHRcdH07XG5cblxuICAgIGNhc2UgdHlwZXMuVVNFUl9MT0dJTjpcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLFxuXHRcdFx0XHRsb2dpbl9lcnJvcjogbnVsbFxuXHRcdFx0fTtcbiAgICBjYXNlIHR5cGVzLlVTRVJfTE9HSU5fU1VDQ0VTUzpcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGFjdGlvbi5yZXN1bHQuZGF0YTtcblxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsXG5cdFx0XHRcdHNlc3Npb25faWQ6IHJlc3VsdC5zZXNzaW9uX2lkLFxuXHRcdFx0XHR1c2VyOiByZXN1bHQudXNlcixcblx0XHRcdH07XG4gICAgY2FzZSB0eXBlcy5VU0VSX0xPR0lOX0ZBSUw6XG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSxcblx0XHRcdFx0bG9naW5fZXJyb3I6IGFjdGlvbi5lcnJvclxuXHRcdFx0fTtcblxuXG4gICAgY2FzZSB0eXBlcy5VU0VSX0xPR09VVDpcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLFxuXHRcdFx0XHRsb2dvdXRfZXJyb3I6IG51bGwsXG5cdFx0XHR9O1xuICAgIGNhc2UgdHlwZXMuVVNFUl9MT0dPVVRfU1VDQ0VTUzpcblx0XHRcdHJldHVybiBzdGF0ZTtcbiAgICBjYXNlIHR5cGVzLlVTRVJfTE9HT1VUX0ZBSUw6XG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSxcblx0XHRcdFx0bG9nb3V0X2Vycm9yOiBhY3Rpb24uZXJyb3Jcblx0XHRcdH07XG5cblxuICAgIGNhc2UgdHlwZXMuVVNFUl9TSUdOVVA6XG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSxcblx0XHRcdFx0c2lnbnVwX2Vycm9yOiBudWxsXG5cdFx0XHR9O1xuICAgIGNhc2UgdHlwZXMuVVNFUl9TSUdOVVBfU1VDQ0VTUzpcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLFxuXHRcdFx0XHRzZXNzaW9uX2lkOiBhY3Rpb24ucmVzdWx0LmRhdGEuc2Vzc2lvbl9pZCxcblx0XHRcdFx0dXNlcjogYWN0aW9uLnJlc3VsdC5kYXRhLnVzZXIsXG5cdFx0XHR9O1xuICAgIGNhc2UgdHlwZXMuVVNFUl9TSUdOVVBfRkFJTDpcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLFxuXHRcdFx0XHRzaWdudXBfZXJyb3I6IGFjdGlvbi5lcnJvclxuXHRcdFx0fTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiJdfQ==