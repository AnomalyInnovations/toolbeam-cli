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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWJzL3Byb21wdC5qcyJdLCJuYW1lcyI6WyJnZXRQcm9tcHQiLCJwcm9tcHRzIiwicmVzb2x2ZSIsInJlamVjdCIsImdldCIsImVyciIsInJlc3VsdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7UUFFZ0JBLFMsR0FBQUEsUzs7QUFGaEI7Ozs7OztBQUVPLFNBQVNBLFNBQVQsQ0FBbUJDLE9BQW5CLEVBQTRCO0FBQ2xDLFFBQU8sc0JBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3ZDLG1CQUFPQyxHQUFQLENBQVdILE9BQVgsRUFBb0IsVUFBQ0ksR0FBRCxFQUFNQyxPQUFOLEVBQWtCO0FBQ3BDRCxNQUFELEdBQ0dGLE9BQU9FLEdBQVAsQ0FESCxHQUVHSCxRQUFRSSxPQUFSLENBRkg7QUFHQSxHQUpEO0FBS0EsRUFOTSxDQUFQO0FBT0EiLCJmaWxlIjoicHJvbXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb21wdCBmcm9tICdwcm9tcHQnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvbXB0KHByb21wdHMpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRwcm9tcHQuZ2V0KHByb21wdHMsIChlcnIsIHJlc3VsdHMpID0+IHtcblx0XHRcdChlcnIpXG5cdFx0XHRcdD8gcmVqZWN0KGVycilcblx0XHRcdFx0OiByZXNvbHZlKHJlc3VsdHMpO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuIl19