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
//# sourceMappingURL=api-client.js.map