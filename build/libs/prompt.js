'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.getPrompt = getPrompt;

var _prompt = require('prompt');

var _prompt2 = _interopRequireDefault(_prompt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getPrompt(prompts) {
	return new _promise2.default(function (resolve, reject) {
		_prompt2.default.get(prompts, function (err, results) {
			err ? reject(err) : resolve(results);
		});
	});
}
//# sourceMappingURL=prompt.js.map