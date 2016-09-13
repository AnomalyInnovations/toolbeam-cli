import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import Preferences from 'preferences';
import debug from 'debug';
import ApiClient from './libs/api-client';
import * as reducers from './reducers';
import { USER_LOGOUT_SUCCESS } from './actions/action-types';

import { 
	addSessionMiddleware,
	apiClientMiddleware,
	logMiddleWare,
	prefsStoreMiddleware,
	sessionExpiryMiddleware,
}  from './middleware';


const client = new ApiClient();
const preferences = new Preferences('toolbeam');

const middleware = [
	addSessionMiddleware,
	sessionExpiryMiddleware,
	thunk,
	apiClientMiddleware(client),
	prefsStoreMiddleware(preferences),
	logMiddleWare(debug),
];

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
const appReducer = combineReducers(reducers);
const reducer =  (state, action) => {
	// Clear the state on logout
	if (action.type === USER_LOGOUT_SUCCESS) {
		state = undefined;
	}

	return appReducer(state, action)
};

export default createStoreWithMiddleware(reducer);
