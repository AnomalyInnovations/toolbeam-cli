'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

exports.loadInfo = loadInfo;
exports.load = load;
exports.update = update;
exports.getSpecFileLink = getSpecFileLink;
exports.getData = getData;

var _actionTypes = require('./action-types');

var types = _interopRequireWildcard(_actionTypes);

var _consumeOpenapi = require('../libs/consume-openapi');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/////////////
// Actions //
/////////////

function loadInfo() {
	return {
		types: [types.SPEC_LOAD_INFO, types.SPEC_LOAD_INFO_SUCCESS, types.SPEC_LOAD_INFO_FAIL],
		promise: function promise(client, sessionId) {
			return client.get('/user/get_spec', {
				params: {
					session_id: sessionId
				} });
		}
	};
}

function load(url) {
	return {
		types: [types.SPEC_LOAD, types.SPEC_LOAD_SUCCESS, types.SPEC_LOAD_FAIL],
		promise: function promise(client) {
			return client.get('/test/curl', {
				params: {
					url: url
				}
			});
		}
	};
}

function update(specData) {
	return {
		types: [types.SPEC_UPDATE, types.SPEC_UPDATE_SUCCESS, types.SPEC_UPDATE_FAIL],
		promise: function promise(client, sessionId) {
			return client.post('/user/update_spec', {
				data: {
					spec_name: (0, _consumeOpenapi.specNameFromOpenapi)(specData),
					spec_data: (0, _stringify2.default)(specData),
					tools: (0, _stringify2.default)((0, _consumeOpenapi.toolsFromOpenapi)(specData)),
					session_id: sessionId
				} });
		}
	};
}

//////////////////////
// Public Functions //
//////////////////////

function getSpecFileLink(state) {
	return state.spec.info.file_link;
}

function getData(state) {
	return state.spec.data;
}
//# sourceMappingURL=spec-actions.js.map