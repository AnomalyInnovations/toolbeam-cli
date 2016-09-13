import * as types from '../actions/action-types';

const initialState = {
	data: null,
	load_error: null,
};

export default function tools(state = initialState, action = {}) {
  switch (action.type) {


    case types.TOOLS_LOAD:
			return { ...state,
				load_error: null
			};
    case types.TOOLS_LOAD_SUCCESS:
			return { ...state,
				data: action.result.data.tools
			};
    case types.TOOLS_LOAD_FAIL:
			return { ...state,
				load_error: action.error
			};


    default:
      return state;
  }
}
