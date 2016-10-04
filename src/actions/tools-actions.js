import * as types from './action-types';

/////////////
// Actions //
/////////////

export function load(options = {}) {
	return {
		types: [types.TOOLS_LOAD, types.TOOLS_LOAD_SUCCESS, types.TOOLS_LOAD_FAIL],
		promise: (client, sessionId) => client.get('/user/tools_owned', {
			params: {
				session_id: sessionId,
				...options
			}
		})
	};
}

//////////////////////
// Public Functions //
//////////////////////

export function getTools(state) {
	return state.tools.data;
}
