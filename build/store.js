'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _preferences = require('preferences');

var _preferences2 = _interopRequireDefault(_preferences);

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _apiClient = require('./libs/api-client');

var _apiClient2 = _interopRequireDefault(_apiClient);

var _reducers = require('./reducers');

var reducers = _interopRequireWildcard(_reducers);

var _actionTypes = require('./actions/action-types');

var _middleware = require('./middleware');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var client = new _apiClient2.default();
var preferences = new _preferences2.default('toolbeam');

var middleware = [_middleware.addSessionMiddleware, _middleware.sessionExpiryMiddleware, _reduxThunk2.default, (0, _middleware.apiClientMiddleware)(client), (0, _middleware.prefsStoreMiddleware)(preferences), (0, _middleware.logMiddleWare)(_debug2.default)];

var createStoreWithMiddleware = _redux.applyMiddleware.apply(undefined, middleware)(_redux.createStore);
var appReducer = (0, _redux.combineReducers)(reducers);
var reducer = function reducer(state, action) {
	// Clear the state on logout
	if (action.type === _actionTypes.USER_LOGOUT_SUCCESS) {
		state = undefined;
	}

	return appReducer(state, action);
};

exports.default = createStoreWithMiddleware(reducer);
//# sourceMappingURL=store.js.map