import * as types from '../actions/action-types';

const initialState = {
};

export default function user(state = initialState, action = {}) {
  switch (action.type) {

    case types.TRACKER_TRACK:
			// Handled in middleware
			return state;

    default:
      return state;
  }
}
