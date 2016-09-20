import * as types from './action-types';
import { toolsFromOpenapi, specNameFromOpenapi, specUUIDFromOpenapi } from '../libs/consume-openapi';
import { writeFile } from '../libs/file';
import config from '../config';

/////////////
// Actions //
/////////////

export function save(json) {
	return async(dispatch, getState) => {

		// update state
		dispatch({
			type: types.SPEC_SAVE,
			json: json
		});

		// write to file
		await writeFile(config.specFileName, getData(getState()));
	};
}

export function loadInfo(uuid) {
	return {
		types: [types.SPEC_LOAD_INFO, types.SPEC_LOAD_INFO_SUCCESS, types.SPEC_LOAD_INFO_FAIL],
		promise: (client, sessionId) => {
			return client.get('/user/get_spec', {
				params: {
					session_id: sessionId,
					spec_uuid	: uuid,
				}});
		}
	};
}

export function load(url) {
	return {
		types: [types.SPEC_LOAD, types.SPEC_LOAD_SUCCESS, types.SPEC_LOAD_FAIL],
		promise: (client) => client.get('/test/curl', {
			params: {
				url: url
			}
		})
	};
}

export function create(specData) {
	return {
		types: [types.SPEC_CREATE, types.SPEC_CREATE_SUCCESS, types.SPEC_CREATE_FAIL],
		promise: (client, sessionId) => {
			return client.post('/user/create_spec', {
				data: {
					spec_name			: specNameFromOpenapi(specData),
					spec_data 		: JSON.stringify(specData),
					tools 				: JSON.stringify(toolsFromOpenapi(specData)),
					session_id 		: sessionId,
				}});
		}
	};
}

export function update(specData) {
	return {
		types: [types.SPEC_UPDATE, types.SPEC_UPDATE_SUCCESS, types.SPEC_UPDATE_FAIL],
		promise: (client, sessionId) => {
			return client.post('/user/update_spec', {
				data: {
					spec_uuid			: specUUIDFromOpenapi(specData),
					spec_name			: specNameFromOpenapi(specData),
					spec_data 		: JSON.stringify(specData),
					tools 				: JSON.stringify(toolsFromOpenapi(specData)),
					session_id 		: sessionId,
				}});
		}
	};
}

//////////////////////
// Public Functions //
//////////////////////

export function getSpecFileLink(state) {
	return state.spec.info.file_link;
}

export function getData(state) {
	return state.spec.data;
}
