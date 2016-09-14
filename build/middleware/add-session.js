'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _userActions = require('../actions/user-actions');

exports.default = function (_ref) {
	var getState = _ref.getState;
	var dispatch = _ref.dispatch;
	return function (next) {
		return function (action) {

			if (action.promise) {
				(function () {
					var sessionId = (0, _userActions.getSessionId)(getState());
					var promise = action.promise;

					action.promise = function (client) {
						return promise(client, sessionId);
					};
				})();
			}

			return next(action);
		};
	};
}; /**
    * Middleware to add the session id to any api client calls 
    */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWRkbGV3YXJlL2FkZC1zZXNzaW9uLmpzIl0sIm5hbWVzIjpbImdldFN0YXRlIiwiZGlzcGF0Y2giLCJhY3Rpb24iLCJwcm9taXNlIiwic2Vzc2lvbklkIiwiY2xpZW50IiwibmV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0E7O2tCQUVlO0FBQUEsS0FBRUEsUUFBRixRQUFFQSxRQUFGO0FBQUEsS0FBWUMsUUFBWixRQUFZQSxRQUFaO0FBQUEsUUFBMEI7QUFBQSxTQUFRLGtCQUFVOztBQUUxRCxPQUFJQyxPQUFPQyxPQUFYLEVBQW9CO0FBQUE7QUFDbkIsU0FBTUMsWUFBWSwrQkFBYUosVUFBYixDQUFsQjtBQUNBLFNBQU1HLFVBQVVELE9BQU9DLE9BQXZCOztBQUVBRCxZQUFPQyxPQUFQLEdBQWlCO0FBQUEsYUFBVUEsUUFBUUUsTUFBUixFQUFnQkQsU0FBaEIsQ0FBVjtBQUFBLE1BQWpCO0FBSm1CO0FBS25COztBQUVELFVBQU9FLEtBQUtKLE1BQUwsQ0FBUDtBQUNBLEdBVndDO0FBQUEsRUFBMUI7QUFBQSxDLEVBTGYiLCJmaWxlIjoiYWRkLXNlc3Npb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1pZGRsZXdhcmUgdG8gYWRkIHRoZSBzZXNzaW9uIGlkIHRvIGFueSBhcGkgY2xpZW50IGNhbGxzIFxuICovXG5pbXBvcnQgeyBnZXRTZXNzaW9uSWQgfSBmcm9tICcuLi9hY3Rpb25zL3VzZXItYWN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7Z2V0U3RhdGUsIGRpc3BhdGNofSkgPT4gbmV4dCA9PiBhY3Rpb24gPT4ge1xuXG5cdGlmIChhY3Rpb24ucHJvbWlzZSkge1xuXHRcdGNvbnN0IHNlc3Npb25JZCA9IGdldFNlc3Npb25JZChnZXRTdGF0ZSgpKTtcblx0XHRjb25zdCBwcm9taXNlID0gYWN0aW9uLnByb21pc2U7XG5cblx0XHRhY3Rpb24ucHJvbWlzZSA9IGNsaWVudCA9PiBwcm9taXNlKGNsaWVudCwgc2Vzc2lvbklkKTtcblx0fVxuXG5cdHJldHVybiBuZXh0KGFjdGlvbik7XG59XG4iXX0=