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
//# sourceMappingURL=file.js.map