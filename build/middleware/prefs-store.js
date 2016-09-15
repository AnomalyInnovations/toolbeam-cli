'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _userActions = require('../actions/user-actions');

var userActions = _interopRequireWildcard(_userActions);

var _actionTypes = require('../actions/action-types');

var types = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = function (prefs) {
	return function (_ref) {
		var getState = _ref.getState;
		var dispatch = _ref.dispatch;
		return function (next) {
			return function (action) {
				var result = next(action);

				switch (action.type) {
					case types.USER_LOAD:
						if (prefs.session_id) {
							dispatch(userActions.loadUserFromPrefs(prefs.user, prefs.session_id));
						}
						break;
					case types.USER_SIGNUP_SUCCESS:
					case types.USER_LOGIN_SUCCESS:
						prefs.user = result.result.data.user;
						prefs.session_id = result.result.data.session_id;
						break;
					case types.USER_LOGOUT_SUCCESS:
						prefs.user = null;
						prefs.session_id = null;
						break;
					default:
				}

				return result;
			};
		};
	};
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWRkbGV3YXJlL3ByZWZzLXN0b3JlLmpzIl0sIm5hbWVzIjpbInVzZXJBY3Rpb25zIiwidHlwZXMiLCJnZXRTdGF0ZSIsImRpc3BhdGNoIiwicmVzdWx0IiwibmV4dCIsImFjdGlvbiIsInR5cGUiLCJVU0VSX0xPQUQiLCJwcmVmcyIsInNlc3Npb25faWQiLCJsb2FkVXNlckZyb21QcmVmcyIsInVzZXIiLCJVU0VSX1NJR05VUF9TVUNDRVNTIiwiVVNFUl9MT0dJTl9TVUNDRVNTIiwiZGF0YSIsIlVTRVJfTE9HT1VUX1NVQ0NFU1MiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztJQUFZQSxXOztBQUNaOztJQUFZQyxLOzs7O2tCQUVHO0FBQUEsUUFDZDtBQUFBLE1BQUVDLFFBQUYsUUFBRUEsUUFBRjtBQUFBLE1BQVlDLFFBQVosUUFBWUEsUUFBWjtBQUFBLFNBQTBCO0FBQUEsVUFBUSxrQkFBVTtBQUMzQyxRQUFNQyxTQUFTQyxLQUFLQyxNQUFMLENBQWY7O0FBRUEsWUFBUUEsT0FBT0MsSUFBZjtBQUNDLFVBQUtOLE1BQU1PLFNBQVg7QUFDQyxVQUFJQyxNQUFNQyxVQUFWLEVBQXNCO0FBQ3JCUCxnQkFBU0gsWUFBWVcsaUJBQVosQ0FBOEJGLE1BQU1HLElBQXBDLEVBQTBDSCxNQUFNQyxVQUFoRCxDQUFUO0FBQ0E7QUFDRDtBQUNELFVBQUtULE1BQU1ZLG1CQUFYO0FBQ0EsVUFBS1osTUFBTWEsa0JBQVg7QUFDQ0wsWUFBTUcsSUFBTixHQUFhUixPQUFPQSxNQUFQLENBQWNXLElBQWQsQ0FBbUJILElBQWhDO0FBQ0FILFlBQU1DLFVBQU4sR0FBbUJOLE9BQU9BLE1BQVAsQ0FBY1csSUFBZCxDQUFtQkwsVUFBdEM7QUFDQTtBQUNELFVBQUtULE1BQU1lLG1CQUFYO0FBQ0NQLFlBQU1HLElBQU4sR0FBYSxJQUFiO0FBQ0FILFlBQU1DLFVBQU4sR0FBbUIsSUFBbkI7QUFDQTtBQUNEO0FBZkQ7O0FBa0JBLFdBQU9OLE1BQVA7QUFDQSxJQXRCeUI7QUFBQSxHQUExQjtBQUFBLEVBRGM7QUFBQSxDIiwiZmlsZSI6InByZWZzLXN0b3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdXNlckFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy91c2VyLWFjdGlvbnMnO1xuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vYWN0aW9ucy9hY3Rpb24tdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBwcmVmcyA9PiAoXG5cdCh7Z2V0U3RhdGUsIGRpc3BhdGNofSkgPT4gbmV4dCA9PiBhY3Rpb24gPT4ge1xuXHRcdGNvbnN0IHJlc3VsdCA9IG5leHQoYWN0aW9uKTtcblxuXHRcdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRcdGNhc2UgdHlwZXMuVVNFUl9MT0FEOlxuXHRcdFx0XHRpZiAocHJlZnMuc2Vzc2lvbl9pZCkge1xuXHRcdFx0XHRcdGRpc3BhdGNoKHVzZXJBY3Rpb25zLmxvYWRVc2VyRnJvbVByZWZzKHByZWZzLnVzZXIsIHByZWZzLnNlc3Npb25faWQpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgdHlwZXMuVVNFUl9TSUdOVVBfU1VDQ0VTUzpcblx0XHRcdGNhc2UgdHlwZXMuVVNFUl9MT0dJTl9TVUNDRVNTOlxuXHRcdFx0XHRwcmVmcy51c2VyID0gcmVzdWx0LnJlc3VsdC5kYXRhLnVzZXI7XG5cdFx0XHRcdHByZWZzLnNlc3Npb25faWQgPSByZXN1bHQucmVzdWx0LmRhdGEuc2Vzc2lvbl9pZDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIHR5cGVzLlVTRVJfTE9HT1VUX1NVQ0NFU1M6XG5cdFx0XHRcdHByZWZzLnVzZXIgPSBudWxsO1xuXHRcdFx0XHRwcmVmcy5zZXNzaW9uX2lkID0gbnVsbDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cbilcbiJdfQ==