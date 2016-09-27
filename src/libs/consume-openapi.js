const operations					= ['get', 'put', 'post', 'delete', 'options', 'head', 'patch'];
const getOperationObject	= (oapi, ep) => oapi.paths[ep.path][ep.operation];
const getIdFromEndpoint 	= ep => `${ep.operation} ${ep.path}`;

export function toolsFromOpenapi(oapi) {
	return getEndpoints(oapi)
		.map(endpoint => endpointsToTool(
			endpoint,
			getOperationObject(oapi, endpoint),
		));
}

export function specNameFromOpenapi(oapi) {
	return (oapi.info && oapi.info.title)
		? oapi.info.title
		: oapi.host;
}

export function specUUIDFromOpenapi(oapi) {
	return (oapi.info && oapi.info['x-tb-uuid'])
		? oapi.info['x-tb-uuid']
		: null;
}

export function toolNameFromEndpoint(ep) {
	const parts = ep.path.replace(/^\//, '').split('/').map(part => capitalize(part));
	const name = parts.join(' ');
	return (name == '')
		? capitalize(ep.operation)
		: `${capitalize(ep.operation)} ${name}`;
}

function getEndpoints(oapi) {
	return Object.keys(oapi.paths).reduce((acc, path) => {
		Object.keys(oapi.paths[path])
			.forEach(operation => {
				(operations.includes(operation.toLowerCase()))
					&& acc.push({path: path, operation: operation});
			});
		return acc;
	}, []);
}

function endpointsToTool(endpoint, opr) {
	const { path: path, operation: operation } = endpoint;
	const name = opr['x-tb-name']
		? opr['x-tb-name']
		: toolNameFromEndpoint(endpoint);
	const id = opr.operationId
		? opr.operationId
		: getIdFromEndpoint(endpoint);
	const ret = {
		name			: name,
		id				: id,
		spec_path	: [path, operation]
	};

	// pass in color if defined
	if (opr['x-tb-color']) {
		ret['color'] = opr['x-tb-color'];
	}

	return ret;
}

function capitalize(str) {
	str = str.toLowerCase();
	return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}
