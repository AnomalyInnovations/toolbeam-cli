'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var methods = ['get', 'post', 'put', 'patch', 'del'];

function formatUrl(path) {
	var adjustedPath = path[0] !== '/' ? '/' + path : path;
	return _config2.default.apiScheme + '://' + _config2.default.apiHost + ':' + _config2.default.apiPort + '/v1' + adjustedPath;
}

/*
 * This silly underscore is here to avoid a mysterious "ReferenceError: ApiClient is not defined" error.
 * See Issue #14. https://github.com/erikras/react-redux-universal-hot-example/issues/14
 *
 * Remove it at your own risk.
 */

var _ApiClient = function _ApiClient(req) {
	var _this = this;

	(0, _classCallCheck3.default)(this, _ApiClient);

	methods.forEach(function (method) {
		return _this[method] = function (path) {
			var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

			var params = _ref.params;
			var data = _ref.data;
			return new _promise2.default(function (resolve, reject) {
				var request = _superagent2.default[method](formatUrl(path));

				if (params) {
					request.query(params);
				}

				if (data) {
					request.type('form');
					request.send(data);
				}

				request.end(function (err) {
					var _ref2 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

					var body = _ref2.body;
					return err ? reject(body || err) : resolve(body);
				});
			});
		};
	});
};

var ApiClient = _ApiClient;

exports.default = ApiClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWJzL2FwaS1jbGllbnQuanMiXSwibmFtZXMiOlsibWV0aG9kcyIsImZvcm1hdFVybCIsInBhdGgiLCJhZGp1c3RlZFBhdGgiLCJhcGlTY2hlbWUiLCJhcGlIb3N0IiwiYXBpUG9ydCIsIl9BcGlDbGllbnQiLCJyZXEiLCJmb3JFYWNoIiwibWV0aG9kIiwicGFyYW1zIiwiZGF0YSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0IiwicXVlcnkiLCJ0eXBlIiwic2VuZCIsImVuZCIsImVyciIsImJvZHkiLCJBcGlDbGllbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsVUFBVSxDQUFDLEtBQUQsRUFBUSxNQUFSLEVBQWdCLEtBQWhCLEVBQXVCLE9BQXZCLEVBQWdDLEtBQWhDLENBQWhCOztBQUVBLFNBQVNDLFNBQVQsQ0FBbUJDLElBQW5CLEVBQXlCO0FBQ3hCLEtBQU1DLGVBQWVELEtBQUssQ0FBTCxNQUFZLEdBQVosR0FBa0IsTUFBTUEsSUFBeEIsR0FBK0JBLElBQXBEO0FBQ0EsUUFBVSxpQkFBT0UsU0FBakIsV0FBZ0MsaUJBQU9DLE9BQXZDLFNBQWtELGlCQUFPQyxPQUF6RCxXQUFzRUgsWUFBdEU7QUFDQTs7QUFFRDs7Ozs7OztJQU1NSSxVLEdBQ0wsb0JBQVlDLEdBQVosRUFBaUI7QUFBQTs7QUFBQTs7QUFDaEJSLFNBQVFTLE9BQVIsQ0FBZ0IsVUFBQ0MsTUFBRDtBQUFBLFNBQ2YsTUFBS0EsTUFBTCxJQUFlLFVBQUNSLElBQUQ7QUFBQSxvRUFBMEIsRUFBMUI7O0FBQUEsT0FBU1MsTUFBVCxRQUFTQSxNQUFUO0FBQUEsT0FBaUJDLElBQWpCLFFBQWlCQSxJQUFqQjtBQUFBLFVBQWlDLHNCQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNoRixRQUFNQyxVQUFVLHFCQUFXTCxNQUFYLEVBQW1CVCxVQUFVQyxJQUFWLENBQW5CLENBQWhCOztBQUVBLFFBQUlTLE1BQUosRUFBWTtBQUNYSSxhQUFRQyxLQUFSLENBQWNMLE1BQWQ7QUFDQTs7QUFFRCxRQUFJQyxJQUFKLEVBQVU7QUFDVEcsYUFBUUUsSUFBUixDQUFhLE1BQWI7QUFDQUYsYUFBUUcsSUFBUixDQUFhTixJQUFiO0FBQ0E7O0FBRURHLFlBQVFJLEdBQVIsQ0FBWSxVQUFDQyxHQUFEO0FBQUEsdUVBQWlCLEVBQWpCOztBQUFBLFNBQVFDLElBQVIsU0FBUUEsSUFBUjtBQUFBLFlBQXdCRCxNQUFNTixPQUFPTyxRQUFRRCxHQUFmLENBQU4sR0FBNEJQLFFBQVFRLElBQVIsQ0FBcEQ7QUFBQSxLQUFaO0FBQ0EsSUFiK0MsQ0FBakM7QUFBQSxHQURBO0FBQUEsRUFBaEI7QUFlQSxDOztBQUdGLElBQU1DLFlBQVlmLFVBQWxCOztrQkFFZWUsUyIsImZpbGUiOiJhcGktY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN1cGVyYWdlbnQgZnJvbSAnc3VwZXJhZ2VudCc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XG5cbmNvbnN0IG1ldGhvZHMgPSBbJ2dldCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdkZWwnXTtcblxuZnVuY3Rpb24gZm9ybWF0VXJsKHBhdGgpIHtcblx0Y29uc3QgYWRqdXN0ZWRQYXRoID0gcGF0aFswXSAhPT0gJy8nID8gJy8nICsgcGF0aCA6IHBhdGg7XG5cdHJldHVybiBgJHtjb25maWcuYXBpU2NoZW1lfTovLyR7Y29uZmlnLmFwaUhvc3R9OiR7Y29uZmlnLmFwaVBvcnR9L3YxJHthZGp1c3RlZFBhdGh9YDtcbn1cblxuLypcbiAqIFRoaXMgc2lsbHkgdW5kZXJzY29yZSBpcyBoZXJlIHRvIGF2b2lkIGEgbXlzdGVyaW91cyBcIlJlZmVyZW5jZUVycm9yOiBBcGlDbGllbnQgaXMgbm90IGRlZmluZWRcIiBlcnJvci5cbiAqIFNlZSBJc3N1ZSAjMTQuIGh0dHBzOi8vZ2l0aHViLmNvbS9lcmlrcmFzL3JlYWN0LXJlZHV4LXVuaXZlcnNhbC1ob3QtZXhhbXBsZS9pc3N1ZXMvMTRcbiAqXG4gKiBSZW1vdmUgaXQgYXQgeW91ciBvd24gcmlzay5cbiAqL1xuY2xhc3MgX0FwaUNsaWVudCB7XG5cdGNvbnN0cnVjdG9yKHJlcSkge1xuXHRcdG1ldGhvZHMuZm9yRWFjaCgobWV0aG9kKSA9PlxuXHRcdFx0dGhpc1ttZXRob2RdID0gKHBhdGgsIHsgcGFyYW1zLCBkYXRhIH0gPSB7fSkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRjb25zdCByZXF1ZXN0ID0gc3VwZXJhZ2VudFttZXRob2RdKGZvcm1hdFVybChwYXRoKSk7XG5cblx0XHRcdFx0aWYgKHBhcmFtcykge1xuXHRcdFx0XHRcdHJlcXVlc3QucXVlcnkocGFyYW1zKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChkYXRhKSB7XG5cdFx0XHRcdFx0cmVxdWVzdC50eXBlKCdmb3JtJyk7XG5cdFx0XHRcdFx0cmVxdWVzdC5zZW5kKGRhdGEpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmVxdWVzdC5lbmQoKGVyciwgeyBib2R5IH0gPSB7fSkgPT4gZXJyID8gcmVqZWN0KGJvZHkgfHwgZXJyKSA6IHJlc29sdmUoYm9keSkpO1xuXHRcdFx0fSkpO1xuXHR9XG59XG5cbmNvbnN0IEFwaUNsaWVudCA9IF9BcGlDbGllbnQ7XG5cbmV4cG9ydCBkZWZhdWx0IEFwaUNsaWVudDtcbiJdfQ==