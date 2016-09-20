import * as types from '../actions/action-types';

const initialState = {
	data: null,
	load_error: null,
};

export default function specs(state = initialState, action = {}) {
  switch (action.type) {


    case types.SPECS_LOAD:
			return { ...state,
				load_error: null
			};
    case types.SPECS_LOAD_SUCCESS:
			return { ...state,
				data: action.result.data.specs
			};
    case types.SPECS_LOAD_FAIL:
			return { ...state,
				load_error: action.error
			};


    default:
      return state;
  }
}
