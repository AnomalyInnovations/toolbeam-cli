'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.load = load;
exports.getSpecs = getSpecs;

var _actionTypes = require('./action-types');

var types = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/////////////
// Actions //
/////////////

function load() {
	return {
		types: [types.SPECS_LOAD, types.SPECS_LOAD_SUCCESS, types.SPECS_LOAD_FAIL],
		promise: function promise(client, sessionId) {
			return client.get('/user/get_specs', {
				params: {
					session_id: sessionId
				}
			});
		}
	};
}

//////////////////////
// Public Functions //
//////////////////////

function getSpecs(state) {
	return state.specs.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL3NwZWNzLWFjdGlvbnMuanMiXSwibmFtZXMiOlsibG9hZCIsImdldFNwZWNzIiwidHlwZXMiLCJTUEVDU19MT0FEIiwiU1BFQ1NfTE9BRF9TVUNDRVNTIiwiU1BFQ1NfTE9BRF9GQUlMIiwicHJvbWlzZSIsImNsaWVudCIsInNlc3Npb25JZCIsImdldCIsInBhcmFtcyIsInNlc3Npb25faWQiLCJzdGF0ZSIsInNwZWNzIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFNZ0JBLEksR0FBQUEsSTtRQWVBQyxRLEdBQUFBLFE7O0FBckJoQjs7SUFBWUMsSzs7OztBQUVaO0FBQ0E7QUFDQTs7QUFFTyxTQUFTRixJQUFULEdBQWdCO0FBQ3RCLFFBQU87QUFDTkUsU0FBTyxDQUFDQSxNQUFNQyxVQUFQLEVBQW1CRCxNQUFNRSxrQkFBekIsRUFBNkNGLE1BQU1HLGVBQW5ELENBREQ7QUFFTkMsV0FBUyxpQkFBQ0MsTUFBRCxFQUFTQyxTQUFUO0FBQUEsVUFBdUJELE9BQU9FLEdBQVAsQ0FBVyxpQkFBWCxFQUE4QjtBQUM3REMsWUFBUTtBQUNQQyxpQkFBWUg7QUFETDtBQURxRCxJQUE5QixDQUF2QjtBQUFBO0FBRkgsRUFBUDtBQVFBOztBQUVEO0FBQ0E7QUFDQTs7QUFFTyxTQUFTUCxRQUFULENBQWtCVyxLQUFsQixFQUF5QjtBQUMvQixRQUFPQSxNQUFNQyxLQUFOLENBQVlDLElBQW5CO0FBQ0EiLCJmaWxlIjoic3BlY3MtYWN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4vYWN0aW9uLXR5cGVzJztcblxuLy8vLy8vLy8vLy8vL1xuLy8gQWN0aW9ucyAvL1xuLy8vLy8vLy8vLy8vL1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZCgpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlczogW3R5cGVzLlNQRUNTX0xPQUQsIHR5cGVzLlNQRUNTX0xPQURfU1VDQ0VTUywgdHlwZXMuU1BFQ1NfTE9BRF9GQUlMXSxcblx0XHRwcm9taXNlOiAoY2xpZW50LCBzZXNzaW9uSWQpID0+IGNsaWVudC5nZXQoJy91c2VyL2dldF9zcGVjcycsIHtcblx0XHRcdHBhcmFtczoge1xuXHRcdFx0XHRzZXNzaW9uX2lkOiBzZXNzaW9uSWRcblx0XHRcdH1cblx0XHR9KVxuXHR9O1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBQdWJsaWMgRnVuY3Rpb25zIC8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTcGVjcyhzdGF0ZSkge1xuXHRyZXR1cm4gc3RhdGUuc3BlY3MuZGF0YTtcbn1cbiJdfQ==