import * as types from '../actions/action-types';

const initialState = {
	session_id: null,
	user: null,
	phone_number: null,
	login_error: null,
	logout_error: null,
	signup_error: null,
};

export default function user(state = initialState, action = {}) {
  switch (action.type) {

    case types.USER_LOAD:
			// Handled in middleware
			return state;
    case types.USER_LOAD_SUCCESS:
			return { ...state,
				session_id: action.session_id,
				user: action.user,
				phone_number: action.phone_number,
			};


    case types.USER_LOGIN:
			return { ...state,
				login_error: null
			};
    case types.USER_LOGIN_SUCCESS:
			const result = action.result.data;

			return { ...state,
				session_id: result.session_id,
				user: result.user,
			};
    case types.USER_LOGIN_FAIL:
			return { ...state,
				login_error: action.error
			};


    case types.USER_LOGOUT:
			return { ...state,
				logout_error: null,
			};
    case types.USER_LOGOUT_SUCCESS:
			return state;
    case types.USER_LOGOUT_FAIL:
			return { ...state,
				logout_error: action.error
			};


    case types.USER_SIGNUP:
			return { ...state,
				signup_error: null
			};
    case types.USER_SIGNUP_SUCCESS:
			return { ...state,
				session_id: action.result.data.session_id,
				user: action.result.data.user,
			};
    case types.USER_SIGNUP_FAIL:
			return { ...state,
				signup_error: action.error
			};


    case types.USER_CACHE_PHNUMBER:
			// Handled in middleware
			return state;

    default:
      return state;
  }
}
