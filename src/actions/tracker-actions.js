import * as types from './action-types';

/////////////
// Actions //
/////////////

export function track(event, properties) {
	return {
		types: [ types.TRACKER_TRACK, types.TRACKER_TRACK_SUCCESS, types.TRACKER_TRACK_FAIL ],
		promise: (client, sessionId) => client.post('/public/track', {
			data: {
				session_id: sessionId,
				event_name: event,
				event_properties: JSON.stringify({
					arguments: JSON.stringify(properties)
				})
			}
		})
	};
}
