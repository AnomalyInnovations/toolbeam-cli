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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWRkbGV3YXJlL3ByZWZzLXN0b3JlLmpzIl0sIm5hbWVzIjpbInVzZXJBY3Rpb25zIiwidHlwZXMiLCJnZXRTdGF0ZSIsImRpc3BhdGNoIiwicmVzdWx0IiwibmV4dCIsImFjdGlvbiIsInR5cGUiLCJVU0VSX0xPQUQiLCJwcmVmcyIsInNlc3Npb25faWQiLCJsb2FkVXNlckZyb21QcmVmcyIsInVzZXIiLCJVU0VSX0xPR0lOX1NVQ0NFU1MiLCJkYXRhIiwiVVNFUl9MT0dPVVRfU1VDQ0VTUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0lBQVlBLFc7O0FBQ1o7O0lBQVlDLEs7Ozs7a0JBRUc7QUFBQSxRQUNkO0FBQUEsTUFBRUMsUUFBRixRQUFFQSxRQUFGO0FBQUEsTUFBWUMsUUFBWixRQUFZQSxRQUFaO0FBQUEsU0FBMEI7QUFBQSxVQUFRLGtCQUFVO0FBQzNDLFFBQU1DLFNBQVNDLEtBQUtDLE1BQUwsQ0FBZjs7QUFFQSxZQUFRQSxPQUFPQyxJQUFmO0FBQ0MsVUFBS04sTUFBTU8sU0FBWDtBQUNDLFVBQUlDLE1BQU1DLFVBQVYsRUFBc0I7QUFDckJQLGdCQUFTSCxZQUFZVyxpQkFBWixDQUE4QkYsTUFBTUcsSUFBcEMsRUFBMENILE1BQU1DLFVBQWhELENBQVQ7QUFDQTtBQUNEO0FBQ0QsVUFBS1QsTUFBTVksa0JBQVg7QUFDQ0osWUFBTUcsSUFBTixHQUFhUixPQUFPQSxNQUFQLENBQWNVLElBQWQsQ0FBbUJGLElBQWhDO0FBQ0FILFlBQU1DLFVBQU4sR0FBbUJOLE9BQU9BLE1BQVAsQ0FBY1UsSUFBZCxDQUFtQkosVUFBdEM7QUFDQTtBQUNELFVBQUtULE1BQU1jLG1CQUFYO0FBQ0NOLFlBQU1HLElBQU4sR0FBYSxJQUFiO0FBQ0FILFlBQU1DLFVBQU4sR0FBbUIsSUFBbkI7QUFDQTtBQUNEO0FBZEQ7O0FBaUJBLFdBQU9OLE1BQVA7QUFDQSxJQXJCeUI7QUFBQSxHQUExQjtBQUFBLEVBRGM7QUFBQSxDIiwiZmlsZSI6InByZWZzLXN0b3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdXNlckFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy91c2VyLWFjdGlvbnMnO1xuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vYWN0aW9ucy9hY3Rpb24tdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBwcmVmcyA9PiAoXG5cdCh7Z2V0U3RhdGUsIGRpc3BhdGNofSkgPT4gbmV4dCA9PiBhY3Rpb24gPT4ge1xuXHRcdGNvbnN0IHJlc3VsdCA9IG5leHQoYWN0aW9uKTtcblxuXHRcdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRcdGNhc2UgdHlwZXMuVVNFUl9MT0FEOlxuXHRcdFx0XHRpZiAocHJlZnMuc2Vzc2lvbl9pZCkge1xuXHRcdFx0XHRcdGRpc3BhdGNoKHVzZXJBY3Rpb25zLmxvYWRVc2VyRnJvbVByZWZzKHByZWZzLnVzZXIsIHByZWZzLnNlc3Npb25faWQpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgdHlwZXMuVVNFUl9MT0dJTl9TVUNDRVNTOlxuXHRcdFx0XHRwcmVmcy51c2VyID0gcmVzdWx0LnJlc3VsdC5kYXRhLnVzZXI7XG5cdFx0XHRcdHByZWZzLnNlc3Npb25faWQgPSByZXN1bHQucmVzdWx0LmRhdGEuc2Vzc2lvbl9pZDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIHR5cGVzLlVTRVJfTE9HT1VUX1NVQ0NFU1M6XG5cdFx0XHRcdHByZWZzLnVzZXIgPSBudWxsO1xuXHRcdFx0XHRwcmVmcy5zZXNzaW9uX2lkID0gbnVsbDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cbilcbiJdfQ==