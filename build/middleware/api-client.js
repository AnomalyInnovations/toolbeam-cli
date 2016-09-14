'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = apiClientMiddleware;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function apiClientMiddleware(client) {
  return function (_ref) {
    var dispatch = _ref.dispatch;
    var getState = _ref.getState;

    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState);
        }

        var promise = action.promise;
        var types = action.types;
        var rest = (0, _objectWithoutProperties3.default)(action, ['promise', 'types']); // eslint-disable-line no-redeclare

        if (!promise) {
          return next(action);
        }

        var _types = (0, _slicedToArray3.default)(types, 3);

        var REQUEST = _types[0];
        var SUCCESS = _types[1];
        var FAILURE = _types[2];

        next((0, _extends3.default)({}, rest, { type: REQUEST }));

        var actionPromise = promise(client);
        actionPromise.then(function (result) {
          return next((0, _extends3.default)({}, rest, { result: result, type: SUCCESS }));
        }, function (error) {
          return next((0, _extends3.default)({}, rest, { error: error, type: FAILURE }));
        }).catch(function (error) {
          console.error('MIDDLEWARE ERROR:', error);
          next((0, _extends3.default)({}, rest, { error: error, type: FAILURE }));
        });

        return actionPromise;
      };
    };
  };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWRkbGV3YXJlL2FwaS1jbGllbnQuanMiXSwibmFtZXMiOlsiYXBpQ2xpZW50TWlkZGxld2FyZSIsImNsaWVudCIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJhY3Rpb24iLCJwcm9taXNlIiwidHlwZXMiLCJyZXN0IiwibmV4dCIsIlJFUVVFU1QiLCJTVUNDRVNTIiwiRkFJTFVSRSIsInR5cGUiLCJhY3Rpb25Qcm9taXNlIiwidGhlbiIsInJlc3VsdCIsImVycm9yIiwiY2F0Y2giLCJjb25zb2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBQXdCQSxtQjs7OztBQUFULFNBQVNBLG1CQUFULENBQTZCQyxNQUE3QixFQUFxQztBQUNsRCxTQUFPLGdCQUEwQjtBQUFBLFFBQXhCQyxRQUF3QixRQUF4QkEsUUFBd0I7QUFBQSxRQUFkQyxRQUFjLFFBQWRBLFFBQWM7O0FBQy9CLFdBQU87QUFBQSxhQUFRLGtCQUFVO0FBQ3ZCLFlBQUksT0FBT0MsTUFBUCxLQUFrQixVQUF0QixFQUFrQztBQUNoQyxpQkFBT0EsT0FBT0YsUUFBUCxFQUFpQkMsUUFBakIsQ0FBUDtBQUNEOztBQUhzQixZQUtmRSxPQUxlLEdBS2FELE1BTGIsQ0FLZkMsT0FMZTtBQUFBLFlBS05DLEtBTE0sR0FLYUYsTUFMYixDQUtORSxLQUxNO0FBQUEsWUFLSUMsSUFMSiwwQ0FLYUgsTUFMYix5QkFLcUI7O0FBQzVDLFlBQUksQ0FBQ0MsT0FBTCxFQUFjO0FBQ1osaUJBQU9HLEtBQUtKLE1BQUwsQ0FBUDtBQUNEOztBQVJzQixrREFVYUUsS0FWYjs7QUFBQSxZQVVoQkcsT0FWZ0I7QUFBQSxZQVVQQyxPQVZPO0FBQUEsWUFVRUMsT0FWRjs7QUFXdkJILHdDQUFTRCxJQUFULElBQWVLLE1BQU1ILE9BQXJCOztBQUVBLFlBQU1JLGdCQUFnQlIsUUFBUUosTUFBUixDQUF0QjtBQUNBWSxzQkFBY0MsSUFBZCxDQUNFLFVBQUNDLE1BQUQ7QUFBQSxpQkFBWVAsZ0NBQVNELElBQVQsSUFBZVEsY0FBZixFQUF1QkgsTUFBTUYsT0FBN0IsSUFBWjtBQUFBLFNBREYsRUFFRSxVQUFDTSxLQUFEO0FBQUEsaUJBQVdSLGdDQUFTRCxJQUFULElBQWVTLFlBQWYsRUFBc0JKLE1BQU1ELE9BQTVCLElBQVg7QUFBQSxTQUZGLEVBR0VNLEtBSEYsQ0FHUSxVQUFDRCxLQUFELEVBQVU7QUFDaEJFLGtCQUFRRixLQUFSLENBQWMsbUJBQWQsRUFBbUNBLEtBQW5DO0FBQ0FSLDBDQUFTRCxJQUFULElBQWVTLFlBQWYsRUFBc0JKLE1BQU1ELE9BQTVCO0FBQ0QsU0FORDs7QUFRQSxlQUFPRSxhQUFQO0FBQ0QsT0F2Qk07QUFBQSxLQUFQO0FBd0JELEdBekJEO0FBMEJEIiwiZmlsZSI6ImFwaS1jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcGlDbGllbnRNaWRkbGV3YXJlKGNsaWVudCkge1xuICByZXR1cm4gKHtkaXNwYXRjaCwgZ2V0U3RhdGV9KSA9PiB7XG4gICAgcmV0dXJuIG5leHQgPT4gYWN0aW9uID0+IHtcbiAgICAgIGlmICh0eXBlb2YgYWN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBhY3Rpb24oZGlzcGF0Y2gsIGdldFN0YXRlKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBwcm9taXNlLCB0eXBlcywgLi4ucmVzdCB9ID0gYWN0aW9uOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXJlZGVjbGFyZVxuICAgICAgaWYgKCFwcm9taXNlKSB7XG4gICAgICAgIHJldHVybiBuZXh0KGFjdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IFtSRVFVRVNULCBTVUNDRVNTLCBGQUlMVVJFXSA9IHR5cGVzO1xuICAgICAgbmV4dCh7Li4ucmVzdCwgdHlwZTogUkVRVUVTVH0pO1xuXG4gICAgICBjb25zdCBhY3Rpb25Qcm9taXNlID0gcHJvbWlzZShjbGllbnQpO1xuICAgICAgYWN0aW9uUHJvbWlzZS50aGVuKFxuICAgICAgICAocmVzdWx0KSA9PiBuZXh0KHsuLi5yZXN0LCByZXN1bHQsIHR5cGU6IFNVQ0NFU1N9KSxcbiAgICAgICAgKGVycm9yKSA9PiBuZXh0KHsuLi5yZXN0LCBlcnJvciwgdHlwZTogRkFJTFVSRX0pXG4gICAgICApLmNhdGNoKChlcnJvcik9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ01JRERMRVdBUkUgRVJST1I6JywgZXJyb3IpO1xuICAgICAgICBuZXh0KHsuLi5yZXN0LCBlcnJvciwgdHlwZTogRkFJTFVSRX0pO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBhY3Rpb25Qcm9taXNlO1xuICAgIH07XG4gIH07XG59XG4iXX0=