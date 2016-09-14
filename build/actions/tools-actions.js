'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.load = load;
exports.getTools = getTools;

var _actionTypes = require('./action-types');

var types = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/////////////
// Actions //
/////////////

function load() {
	return {
		types: [types.TOOLS_LOAD, types.TOOLS_LOAD_SUCCESS, types.TOOLS_LOAD_FAIL],
		promise: function promise(client, sessionId) {
			return client.get('/user/tools_owned', {
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

function getTools(state) {
	return state.tools.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL3Rvb2xzLWFjdGlvbnMuanMiXSwibmFtZXMiOlsibG9hZCIsImdldFRvb2xzIiwidHlwZXMiLCJUT09MU19MT0FEIiwiVE9PTFNfTE9BRF9TVUNDRVNTIiwiVE9PTFNfTE9BRF9GQUlMIiwicHJvbWlzZSIsImNsaWVudCIsInNlc3Npb25JZCIsImdldCIsInBhcmFtcyIsInNlc3Npb25faWQiLCJzdGF0ZSIsInRvb2xzIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFNZ0JBLEksR0FBQUEsSTtRQWVBQyxRLEdBQUFBLFE7O0FBckJoQjs7SUFBWUMsSzs7OztBQUVaO0FBQ0E7QUFDQTs7QUFFTyxTQUFTRixJQUFULEdBQWdCO0FBQ3RCLFFBQU87QUFDTkUsU0FBTyxDQUFDQSxNQUFNQyxVQUFQLEVBQW1CRCxNQUFNRSxrQkFBekIsRUFBNkNGLE1BQU1HLGVBQW5ELENBREQ7QUFFTkMsV0FBUyxpQkFBQ0MsTUFBRCxFQUFTQyxTQUFUO0FBQUEsVUFBdUJELE9BQU9FLEdBQVAsQ0FBVyxtQkFBWCxFQUFnQztBQUMvREMsWUFBUTtBQUNQQyxpQkFBWUg7QUFETDtBQUR1RCxJQUFoQyxDQUF2QjtBQUFBO0FBRkgsRUFBUDtBQVFBOztBQUVEO0FBQ0E7QUFDQTs7QUFFTyxTQUFTUCxRQUFULENBQWtCVyxLQUFsQixFQUF5QjtBQUMvQixRQUFPQSxNQUFNQyxLQUFOLENBQVlDLElBQW5CO0FBQ0EiLCJmaWxlIjoidG9vbHMtYWN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4vYWN0aW9uLXR5cGVzJztcblxuLy8vLy8vLy8vLy8vL1xuLy8gQWN0aW9ucyAvL1xuLy8vLy8vLy8vLy8vL1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZCgpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlczogW3R5cGVzLlRPT0xTX0xPQUQsIHR5cGVzLlRPT0xTX0xPQURfU1VDQ0VTUywgdHlwZXMuVE9PTFNfTE9BRF9GQUlMXSxcblx0XHRwcm9taXNlOiAoY2xpZW50LCBzZXNzaW9uSWQpID0+IGNsaWVudC5nZXQoJy91c2VyL3Rvb2xzX293bmVkJywge1xuXHRcdFx0cGFyYW1zOiB7XG5cdFx0XHRcdHNlc3Npb25faWQ6IHNlc3Npb25JZFxuXHRcdFx0fVxuXHRcdH0pXG5cdH07XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFB1YmxpYyBGdW5jdGlvbnMgLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRvb2xzKHN0YXRlKSB7XG5cdHJldHVybiBzdGF0ZS50b29scy5kYXRhO1xufVxuIl19