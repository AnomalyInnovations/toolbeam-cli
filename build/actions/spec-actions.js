'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

exports.loadInfo = loadInfo;
exports.load = load;
exports.update = update;
exports.getSpecFileLink = getSpecFileLink;
exports.getData = getData;

var _actionTypes = require('./action-types');

var types = _interopRequireWildcard(_actionTypes);

var _consumeOpenapi = require('../libs/consume-openapi');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/////////////
// Actions //
/////////////

function loadInfo() {
	return {
		types: [types.SPEC_LOAD_INFO, types.SPEC_LOAD_INFO_SUCCESS, types.SPEC_LOAD_INFO_FAIL],
		promise: function promise(client, sessionId) {
			return client.get('/user/get_spec', {
				params: {
					session_id: sessionId
				} });
		}
	};
}

function load(url) {
	return {
		types: [types.SPEC_LOAD, types.SPEC_LOAD_SUCCESS, types.SPEC_LOAD_FAIL],
		promise: function promise(client) {
			return client.get('/test/curl', {
				params: {
					url: url
				}
			});
		}
	};
}

function update(specData) {
	return {
		types: [types.SPEC_UPDATE, types.SPEC_UPDATE_SUCCESS, types.SPEC_UPDATE_FAIL],
		promise: function promise(client, sessionId) {
			return client.post('/user/update_spec', {
				data: {
					spec_name: (0, _consumeOpenapi.specNameFromOpenapi)(specData),
					spec_data: (0, _stringify2.default)(specData),
					tools: (0, _stringify2.default)((0, _consumeOpenapi.toolsFromOpenapi)(specData)),
					session_id: sessionId
				} });
		}
	};
}

//////////////////////
// Public Functions //
//////////////////////

function getSpecFileLink(state) {
	return state.spec.info.file_link;
}

function getData(state) {
	return state.spec.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL3NwZWMtYWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJsb2FkSW5mbyIsImxvYWQiLCJ1cGRhdGUiLCJnZXRTcGVjRmlsZUxpbmsiLCJnZXREYXRhIiwidHlwZXMiLCJTUEVDX0xPQURfSU5GTyIsIlNQRUNfTE9BRF9JTkZPX1NVQ0NFU1MiLCJTUEVDX0xPQURfSU5GT19GQUlMIiwicHJvbWlzZSIsImNsaWVudCIsInNlc3Npb25JZCIsImdldCIsInBhcmFtcyIsInNlc3Npb25faWQiLCJ1cmwiLCJTUEVDX0xPQUQiLCJTUEVDX0xPQURfU1VDQ0VTUyIsIlNQRUNfTE9BRF9GQUlMIiwic3BlY0RhdGEiLCJTUEVDX1VQREFURSIsIlNQRUNfVVBEQVRFX1NVQ0NFU1MiLCJTUEVDX1VQREFURV9GQUlMIiwicG9zdCIsImRhdGEiLCJzcGVjX25hbWUiLCJzcGVjX2RhdGEiLCJ0b29scyIsInN0YXRlIiwic3BlYyIsImluZm8iLCJmaWxlX2xpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7UUFPZ0JBLFEsR0FBQUEsUTtRQVlBQyxJLEdBQUFBLEk7UUFXQUMsTSxHQUFBQSxNO1FBbUJBQyxlLEdBQUFBLGU7UUFJQUMsTyxHQUFBQSxPOztBQXJEaEI7O0lBQVlDLEs7O0FBQ1o7Ozs7OztBQUVBO0FBQ0E7QUFDQTs7QUFFTyxTQUFTTCxRQUFULEdBQW9CO0FBQzFCLFFBQU87QUFDTkssU0FBTyxDQUFDQSxNQUFNQyxjQUFQLEVBQXVCRCxNQUFNRSxzQkFBN0IsRUFBcURGLE1BQU1HLG1CQUEzRCxDQUREO0FBRU5DLFdBQVMsaUJBQUNDLE1BQUQsRUFBU0MsU0FBVCxFQUF1QjtBQUMvQixVQUFPRCxPQUFPRSxHQUFQLENBQVcsZ0JBQVgsRUFBNkI7QUFDbkNDLFlBQVE7QUFDUEMsaUJBQWNIO0FBRFAsS0FEMkIsRUFBN0IsQ0FBUDtBQUlBO0FBUEssRUFBUDtBQVNBOztBQUVNLFNBQVNWLElBQVQsQ0FBY2MsR0FBZCxFQUFtQjtBQUN6QixRQUFPO0FBQ05WLFNBQU8sQ0FBQ0EsTUFBTVcsU0FBUCxFQUFrQlgsTUFBTVksaUJBQXhCLEVBQTJDWixNQUFNYSxjQUFqRCxDQUREO0FBRU5ULFdBQVMsaUJBQUNDLE1BQUQ7QUFBQSxVQUFZQSxPQUFPRSxHQUFQLENBQVcsWUFBWCxFQUF5QjtBQUM3Q0MsWUFBUTtBQUNQRSxVQUFLQTtBQURFO0FBRHFDLElBQXpCLENBQVo7QUFBQTtBQUZILEVBQVA7QUFRQTs7QUFFTSxTQUFTYixNQUFULENBQWdCaUIsUUFBaEIsRUFBMEI7QUFDaEMsUUFBTztBQUNOZCxTQUFPLENBQUNBLE1BQU1lLFdBQVAsRUFBb0JmLE1BQU1nQixtQkFBMUIsRUFBK0NoQixNQUFNaUIsZ0JBQXJELENBREQ7QUFFTmIsV0FBUyxpQkFBQ0MsTUFBRCxFQUFTQyxTQUFULEVBQXVCO0FBQy9CLFVBQU9ELE9BQU9hLElBQVAsQ0FBWSxtQkFBWixFQUFpQztBQUN2Q0MsVUFBTTtBQUNMQyxnQkFBYSx5Q0FBb0JOLFFBQXBCLENBRFI7QUFFTE8sZ0JBQWEseUJBQWVQLFFBQWYsQ0FGUjtBQUdMUSxZQUFXLHlCQUFlLHNDQUFpQlIsUUFBakIsQ0FBZixDQUhOO0FBSUxMLGlCQUFjSDtBQUpULEtBRGlDLEVBQWpDLENBQVA7QUFPQTtBQVZLLEVBQVA7QUFZQTs7QUFFRDtBQUNBO0FBQ0E7O0FBRU8sU0FBU1IsZUFBVCxDQUF5QnlCLEtBQXpCLEVBQWdDO0FBQ3RDLFFBQU9BLE1BQU1DLElBQU4sQ0FBV0MsSUFBWCxDQUFnQkMsU0FBdkI7QUFDQTs7QUFFTSxTQUFTM0IsT0FBVCxDQUFpQndCLEtBQWpCLEVBQXdCO0FBQzlCLFFBQU9BLE1BQU1DLElBQU4sQ0FBV0wsSUFBbEI7QUFDQSIsImZpbGUiOiJzcGVjLWFjdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuL2FjdGlvbi10eXBlcyc7XG5pbXBvcnQgeyB0b29sc0Zyb21PcGVuYXBpLCBzcGVjTmFtZUZyb21PcGVuYXBpIH0gZnJvbSAnLi4vbGlicy9jb25zdW1lLW9wZW5hcGknO1xuXG4vLy8vLy8vLy8vLy8vXG4vLyBBY3Rpb25zIC8vXG4vLy8vLy8vLy8vLy8vXG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkSW5mbygpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlczogW3R5cGVzLlNQRUNfTE9BRF9JTkZPLCB0eXBlcy5TUEVDX0xPQURfSU5GT19TVUNDRVNTLCB0eXBlcy5TUEVDX0xPQURfSU5GT19GQUlMXSxcblx0XHRwcm9taXNlOiAoY2xpZW50LCBzZXNzaW9uSWQpID0+IHtcblx0XHRcdHJldHVybiBjbGllbnQuZ2V0KCcvdXNlci9nZXRfc3BlYycsIHtcblx0XHRcdFx0cGFyYW1zOiB7XG5cdFx0XHRcdFx0c2Vzc2lvbl9pZCBcdDogc2Vzc2lvbklkLFxuXHRcdFx0XHR9fSk7XG5cdFx0fVxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZCh1cmwpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlczogW3R5cGVzLlNQRUNfTE9BRCwgdHlwZXMuU1BFQ19MT0FEX1NVQ0NFU1MsIHR5cGVzLlNQRUNfTE9BRF9GQUlMXSxcblx0XHRwcm9taXNlOiAoY2xpZW50KSA9PiBjbGllbnQuZ2V0KCcvdGVzdC9jdXJsJywge1xuXHRcdFx0cGFyYW1zOiB7XG5cdFx0XHRcdHVybDogdXJsXG5cdFx0XHR9XG5cdFx0fSlcblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZShzcGVjRGF0YSkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGVzOiBbdHlwZXMuU1BFQ19VUERBVEUsIHR5cGVzLlNQRUNfVVBEQVRFX1NVQ0NFU1MsIHR5cGVzLlNQRUNfVVBEQVRFX0ZBSUxdLFxuXHRcdHByb21pc2U6IChjbGllbnQsIHNlc3Npb25JZCkgPT4ge1xuXHRcdFx0cmV0dXJuIGNsaWVudC5wb3N0KCcvdXNlci91cGRhdGVfc3BlYycsIHtcblx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdHNwZWNfbmFtZVx0XHQ6IHNwZWNOYW1lRnJvbU9wZW5hcGkoc3BlY0RhdGEpLFxuXHRcdFx0XHRcdHNwZWNfZGF0YSBcdDogSlNPTi5zdHJpbmdpZnkoc3BlY0RhdGEpLFxuXHRcdFx0XHRcdHRvb2xzIFx0XHRcdDogSlNPTi5zdHJpbmdpZnkodG9vbHNGcm9tT3BlbmFwaShzcGVjRGF0YSkpLFxuXHRcdFx0XHRcdHNlc3Npb25faWQgXHQ6IHNlc3Npb25JZCxcblx0XHRcdFx0fX0pO1xuXHRcdH1cblx0fTtcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gUHVibGljIEZ1bmN0aW9ucyAvL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3BlY0ZpbGVMaW5rKHN0YXRlKSB7XG5cdHJldHVybiBzdGF0ZS5zcGVjLmluZm8uZmlsZV9saW5rO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YShzdGF0ZSkge1xuXHRyZXR1cm4gc3RhdGUuc3BlYy5kYXRhO1xufVxuIl19