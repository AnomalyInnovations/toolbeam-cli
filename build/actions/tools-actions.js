'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.load = load;
exports.getTools = getTools;

var _actionTypes = require('./action-types');

var types = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/////////////
// Actions //
/////////////

function load() {
	return {
		types: [types.TOOLS_LOAD, types.TOOLS_LOAD_SUCCESS, types.TOOLS_LOAD_FAIL],
		promise: function promise(client, sessionId) {
			return client.get('/user/tools_owned', {
				params: {
					session_id: sessionId
				}
			});
		}
	};
}

//////////////////////
// Public Functions //
//////////////////////

function getTools(state) {
	return state.tools.data;
}
//# sourceMappingURL=tools-actions.js.map