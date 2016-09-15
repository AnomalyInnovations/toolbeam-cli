'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _userActions = require('../actions/user-actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (store) {
	return function (next) {
		return function (action) {
			var result = next(action);

			result instanceof _promise2.default && result.catch(function (data) {
				if (data.error == 401) {
					store.dispatch((0, _userActions.logoutSuccess)());
				}
				return data;
			});

			return result;
		};
	};
}; /**
    * Middleware to clear the session and prefs
    * when the API returns a 401 error
    */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWRkbGV3YXJlL3Nlc3Npb24tZXhwaXJ5LmpzIl0sIm5hbWVzIjpbInJlc3VsdCIsIm5leHQiLCJhY3Rpb24iLCJjYXRjaCIsImRhdGEiLCJlcnJvciIsInN0b3JlIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFJQTs7OztrQkFFZTtBQUFBLFFBQVM7QUFBQSxTQUFRLGtCQUFVO0FBQ3pDLE9BQUlBLFNBQVNDLEtBQUtDLE1BQUwsQ0FBYjs7QUFFQ0Ysc0NBQUQsSUFBK0JBLE9BQU9HLEtBQVAsQ0FBYSxVQUFDQyxJQUFELEVBQVU7QUFDckQsUUFBSUEsS0FBS0MsS0FBTCxJQUFjLEdBQWxCLEVBQXVCO0FBQ3RCQyxXQUFNQyxRQUFOLENBQWUsaUNBQWY7QUFDQTtBQUNELFdBQU9ILElBQVA7QUFDQSxJQUw4QixDQUEvQjs7QUFPQyxVQUFPSixNQUFQO0FBQ0QsR0FYdUI7QUFBQSxFQUFUO0FBQUEsQyxFQU5mIiwiZmlsZSI6InNlc3Npb24tZXhwaXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBNaWRkbGV3YXJlIHRvIGNsZWFyIHRoZSBzZXNzaW9uIGFuZCBwcmVmc1xuICogd2hlbiB0aGUgQVBJIHJldHVybnMgYSA0MDEgZXJyb3JcbiAqL1xuaW1wb3J0IHsgbG9nb3V0U3VjY2VzcyB9IGZyb20gJy4uL2FjdGlvbnMvdXNlci1hY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmUgPT4gbmV4dCA9PiBhY3Rpb24gPT4ge1xuXHRsZXQgcmVzdWx0ID0gbmV4dChhY3Rpb24pO1xuXG5cdChyZXN1bHQgaW5zdGFuY2VvZiBQcm9taXNlKSAmJiByZXN1bHQuY2F0Y2goKGRhdGEpID0+IHtcblx0XHRpZiAoZGF0YS5lcnJvciA9PSA0MDEpIHtcblx0XHRcdHN0b3JlLmRpc3BhdGNoKGxvZ291dFN1Y2Nlc3MoKSk7XG5cdFx0fVxuXHRcdHJldHVybiBkYXRhO1xuXHR9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuIl19