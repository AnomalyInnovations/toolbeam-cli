'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

exports.toolsFromOpenapi = toolsFromOpenapi;
exports.specNameFromOpenapi = specNameFromOpenapi;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var operations = ['get', 'put', 'post', 'delete', 'options', 'head', 'patch'];
var getOperationObject = function getOperationObject(oapi, ep) {
	return oapi.paths[ep.path][ep.operation];
};
var getIdFromEndpoint = function getIdFromEndpoint(ep) {
	return ep.operation + ' ' + ep.path;
};

function toolsFromOpenapi(oapi) {
	return getEndpoints(oapi).map(function (endpoint) {
		return endpointsToTool(endpoint, getOperationObject(oapi, endpoint));
	});
}

function specNameFromOpenapi(oapi) {
	return oapi.info && oapi.info.title ? oapi.info.title : oapi.host;
}

function getEndpoints(oapi) {
	return (0, _keys2.default)(oapi.paths).reduce(function (acc, path) {
		(0, _keys2.default)(oapi.paths[path]).forEach(function (operation) {
			operations.includes(operation.toLowerCase()) && acc.push({ path: path, operation: operation });
		});
		return acc;
	}, []);
}

function getNameFromEndpoint(ep) {
	var name = ep.path.replace(/^\//, '').split('/').pop();
	return name == '' ? capitalize(ep.operation) : capitalize(ep.operation) + ' ' + capitalize(name);
}

function endpointsToTool(endpoint, opr) {
	var path = endpoint.path;
	var operation = endpoint.operation;

	var name = opr['x-tb-name'] ? opr['x-tb-name'] : getNameFromEndpoint(endpoint);
	var id = opr.operationId ? opr.operationId : getIdFromEndpoint(endpoint);
	var ret = {
		name: name,
		id: id,
		spec_path: [path, operation]
	};

	// pass in color if defined
	if (opr['x-tb-color']) {
		ret['color'] = opr['x-tb-color'];
	}

	return ret;
}

function capitalize(str) {
	str = str.toLowerCase();
	return '' + str.charAt(0).toUpperCase() + str.slice(1);
}
//# sourceMappingURL=consume-openapi.js.map