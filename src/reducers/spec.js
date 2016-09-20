import * as types from '../actions/action-types';

const initialState = {
	info: null,
	data: null,
	load_info_error: null,
	load_error: null,
	update_error: null,
};

export default function user(state = initialState, action = {}) {
  switch (action.type) {

    case types.SPEC_SAVE:
			return { ...state,
				data: JSON.stringify(action.json, null, 2)
			};

    case types.SPEC_LOAD_INFO:
			return { ...state,
				load_info_error: null
			};
    case types.SPEC_LOAD_INFO_SUCCESS:
			return { ...state,
				info: action.result.data.spec
			};
    case types.SPEC_LOAD_INFO_FAIL:
			return { ...state,
				load_info_error: action.error
			};


    case types.SPEC_LOAD:
			return { ...state,
				load_error: null
			};
    case types.SPEC_LOAD_SUCCESS:
			const data = JSON.stringify(JSON.parse(action.result.data), null, 2);

			return { ...state,
				data: data
			};
    case types.SPEC_LOAD_FAIL:
			return { ...state,
				load_error: action.error
			};


    case types.SPEC_UPDATE:
			return { ...state,
				update_error: null
			};
    case types.SPEC_UPDATE_SUCCESS:
			return state;
    case types.SPEC_UPDATE_FAIL:
			return { ...state,
				update_error: action.error
			};

    default:
      return state;
  }
}
