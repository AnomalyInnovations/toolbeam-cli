import * as types from './action-types';

/////////////
// Actions //
/////////////

export function load() {
	return {
		types: [types.SPECS_LOAD, types.SPECS_LOAD_SUCCESS, types.SPECS_LOAD_FAIL],
		promise: (client, sessionId) => client.get('/user/get_specs', {
			params: {
				session_id: sessionId
			}
		})
	};
}

//////////////////////
// Public Functions //
//////////////////////

export function getSpecs(state) {
	return state.specs.data;
}
