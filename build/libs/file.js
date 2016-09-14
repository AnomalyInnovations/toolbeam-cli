'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.readFile = readFile;
exports.writeFile = writeFile;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function readFile(file) {
	return new _promise2.default(function (resolve, reject) {
		_fs2.default.readFile(file, 'utf8', function (err, data) {
			err ? reject(err) : resolve(data);
		});
	});
}

function writeFile(file, content) {
	return new _promise2.default(function (resolve, reject) {
		_fs2.default.writeFile(file, content, function (err) {
			err ? reject(err) : resolve();
		});
	});
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWJzL2ZpbGUuanMiXSwibmFtZXMiOlsicmVhZEZpbGUiLCJ3cml0ZUZpbGUiLCJmaWxlIiwicmVzb2x2ZSIsInJlamVjdCIsImVyciIsImRhdGEiLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O1FBRWdCQSxRLEdBQUFBLFE7UUFVQUMsUyxHQUFBQSxTOztBQVpoQjs7Ozs7O0FBRU8sU0FBU0QsUUFBVCxDQUFrQkUsSUFBbEIsRUFBd0I7QUFDOUIsUUFBTyxzQkFBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdkMsZUFBR0osUUFBSCxDQUFZRSxJQUFaLEVBQWtCLE1BQWxCLEVBQTBCLFVBQUNHLEdBQUQsRUFBTUMsSUFBTixFQUFlO0FBQ3ZDRCxNQUFELEdBQ0dELE9BQU9DLEdBQVAsQ0FESCxHQUVHRixRQUFRRyxJQUFSLENBRkg7QUFHQSxHQUpEO0FBS0EsRUFOTSxDQUFQO0FBT0E7O0FBRU0sU0FBU0wsU0FBVCxDQUFtQkMsSUFBbkIsRUFBeUJLLE9BQXpCLEVBQWtDO0FBQ3hDLFFBQU8sc0JBQVksVUFBQ0osT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3ZDLGVBQUdILFNBQUgsQ0FBYUMsSUFBYixFQUFtQkssT0FBbkIsRUFBNEIsVUFBQ0YsR0FBRCxFQUFTO0FBQ25DQSxNQUFELEdBQ0dELE9BQU9DLEdBQVAsQ0FESCxHQUVHRixTQUZIO0FBR0EsR0FKRDtBQUtBLEVBTk0sQ0FBUDtBQU9BIiwiZmlsZSI6ImZpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVhZEZpbGUoZmlsZSkge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdGZzLnJlYWRGaWxlKGZpbGUsICd1dGY4JywgKGVyciwgZGF0YSkgPT4ge1xuXHRcdFx0KGVycilcblx0XHRcdFx0PyByZWplY3QoZXJyKVxuXHRcdFx0XHQ6IHJlc29sdmUoZGF0YSlcblx0XHR9KTtcblx0fSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3cml0ZUZpbGUoZmlsZSwgY29udGVudCkge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdGZzLndyaXRlRmlsZShmaWxlLCBjb250ZW50LCAoZXJyKSA9PiB7XG5cdFx0XHQoZXJyKVxuXHRcdFx0XHQ/IHJlamVjdChlcnIpXG5cdFx0XHRcdDogcmVzb2x2ZSgpXG5cdFx0fSk7XG5cdH0pO1xufVxuIl19