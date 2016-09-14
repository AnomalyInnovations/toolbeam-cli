'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _preferences = require('preferences');

var _preferences2 = _interopRequireDefault(_preferences);

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _apiClient = require('./libs/api-client');

var _apiClient2 = _interopRequireDefault(_apiClient);

var _reducers = require('./reducers');

var reducers = _interopRequireWildcard(_reducers);

var _actionTypes = require('./actions/action-types');

var _middleware = require('./middleware');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var client = new _apiClient2.default();
var preferences = new _preferences2.default('toolbeam');

var middleware = [_middleware.addSessionMiddleware, _middleware.sessionExpiryMiddleware, _reduxThunk2.default, (0, _middleware.apiClientMiddleware)(client), (0, _middleware.prefsStoreMiddleware)(preferences), (0, _middleware.logMiddleWare)(_debug2.default)];

var createStoreWithMiddleware = _redux.applyMiddleware.apply(undefined, middleware)(_redux.createStore);
var appReducer = (0, _redux.combineReducers)(reducers);
var reducer = function reducer(state, action) {
	// Clear the state on logout
	if (action.type === _actionTypes.USER_LOGOUT_SUCCESS) {
		state = undefined;
	}

	return appReducer(state, action);
};

exports.default = createStoreWithMiddleware(reducer);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdG9yZS5qcyJdLCJuYW1lcyI6WyJyZWR1Y2VycyIsImNsaWVudCIsInByZWZlcmVuY2VzIiwibWlkZGxld2FyZSIsImNyZWF0ZVN0b3JlV2l0aE1pZGRsZXdhcmUiLCJhcHBSZWR1Y2VyIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7SUFBWUEsUTs7QUFDWjs7QUFFQTs7Ozs7O0FBU0EsSUFBTUMsU0FBUyx5QkFBZjtBQUNBLElBQU1DLGNBQWMsMEJBQWdCLFVBQWhCLENBQXBCOztBQUVBLElBQU1DLGFBQWEsOEZBSWxCLHFDQUFvQkYsTUFBcEIsQ0FKa0IsRUFLbEIsc0NBQXFCQyxXQUFyQixDQUxrQixFQU1sQiwrQ0FOa0IsQ0FBbkI7O0FBU0EsSUFBTUUsNEJBQTRCLHdDQUFtQkQsVUFBbkIscUJBQWxDO0FBQ0EsSUFBTUUsYUFBYSw0QkFBZ0JMLFFBQWhCLENBQW5CO0FBQ0EsSUFBTU0sVUFBVyxTQUFYQSxPQUFXLENBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUNuQztBQUNBLEtBQUlBLE9BQU9DLElBQVAscUNBQUosRUFBeUM7QUFDeENGLFVBQVFHLFNBQVI7QUFDQTs7QUFFRCxRQUFPTCxXQUFXRSxLQUFYLEVBQWtCQyxNQUFsQixDQUFQO0FBQ0EsQ0FQRDs7a0JBU2VKLDBCQUEwQkUsT0FBMUIsQyIsImZpbGUiOiJzdG9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgUHJlZmVyZW5jZXMgZnJvbSAncHJlZmVyZW5jZXMnO1xuaW1wb3J0IGRlYnVnIGZyb20gJ2RlYnVnJztcbmltcG9ydCBBcGlDbGllbnQgZnJvbSAnLi9saWJzL2FwaS1jbGllbnQnO1xuaW1wb3J0ICogYXMgcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2Vycyc7XG5pbXBvcnQgeyBVU0VSX0xPR09VVF9TVUNDRVNTIH0gZnJvbSAnLi9hY3Rpb25zL2FjdGlvbi10eXBlcyc7XG5cbmltcG9ydCB7IFxuXHRhZGRTZXNzaW9uTWlkZGxld2FyZSxcblx0YXBpQ2xpZW50TWlkZGxld2FyZSxcblx0bG9nTWlkZGxlV2FyZSxcblx0cHJlZnNTdG9yZU1pZGRsZXdhcmUsXG5cdHNlc3Npb25FeHBpcnlNaWRkbGV3YXJlLFxufSAgZnJvbSAnLi9taWRkbGV3YXJlJztcblxuXG5jb25zdCBjbGllbnQgPSBuZXcgQXBpQ2xpZW50KCk7XG5jb25zdCBwcmVmZXJlbmNlcyA9IG5ldyBQcmVmZXJlbmNlcygndG9vbGJlYW0nKTtcblxuY29uc3QgbWlkZGxld2FyZSA9IFtcblx0YWRkU2Vzc2lvbk1pZGRsZXdhcmUsXG5cdHNlc3Npb25FeHBpcnlNaWRkbGV3YXJlLFxuXHR0aHVuayxcblx0YXBpQ2xpZW50TWlkZGxld2FyZShjbGllbnQpLFxuXHRwcmVmc1N0b3JlTWlkZGxld2FyZShwcmVmZXJlbmNlcyksXG5cdGxvZ01pZGRsZVdhcmUoZGVidWcpLFxuXTtcblxuY29uc3QgY3JlYXRlU3RvcmVXaXRoTWlkZGxld2FyZSA9IGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKShjcmVhdGVTdG9yZSk7XG5jb25zdCBhcHBSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHJlZHVjZXJzKTtcbmNvbnN0IHJlZHVjZXIgPSAgKHN0YXRlLCBhY3Rpb24pID0+IHtcblx0Ly8gQ2xlYXIgdGhlIHN0YXRlIG9uIGxvZ291dFxuXHRpZiAoYWN0aW9uLnR5cGUgPT09IFVTRVJfTE9HT1VUX1NVQ0NFU1MpIHtcblx0XHRzdGF0ZSA9IHVuZGVmaW5lZDtcblx0fVxuXG5cdHJldHVybiBhcHBSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdG9yZVdpdGhNaWRkbGV3YXJlKHJlZHVjZXIpO1xuIl19