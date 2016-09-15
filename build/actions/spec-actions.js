'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

exports.init = init;
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

function init(json) {
	return {
		type: types.SPEC_INIT,
		json: json
	};
}

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL3NwZWMtYWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJpbml0IiwibG9hZEluZm8iLCJsb2FkIiwidXBkYXRlIiwiZ2V0U3BlY0ZpbGVMaW5rIiwiZ2V0RGF0YSIsInR5cGVzIiwianNvbiIsInR5cGUiLCJTUEVDX0lOSVQiLCJTUEVDX0xPQURfSU5GTyIsIlNQRUNfTE9BRF9JTkZPX1NVQ0NFU1MiLCJTUEVDX0xPQURfSU5GT19GQUlMIiwicHJvbWlzZSIsImNsaWVudCIsInNlc3Npb25JZCIsImdldCIsInBhcmFtcyIsInNlc3Npb25faWQiLCJ1cmwiLCJTUEVDX0xPQUQiLCJTUEVDX0xPQURfU1VDQ0VTUyIsIlNQRUNfTE9BRF9GQUlMIiwic3BlY0RhdGEiLCJTUEVDX1VQREFURSIsIlNQRUNfVVBEQVRFX1NVQ0NFU1MiLCJTUEVDX1VQREFURV9GQUlMIiwicG9zdCIsImRhdGEiLCJzcGVjX25hbWUiLCJzcGVjX2RhdGEiLCJ0b29scyIsInN0YXRlIiwic3BlYyIsImluZm8iLCJmaWxlX2xpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7UUFPZ0JBLEksR0FBQUEsSTtRQU9BQyxRLEdBQUFBLFE7UUFZQUMsSSxHQUFBQSxJO1FBV0FDLE0sR0FBQUEsTTtRQW1CQUMsZSxHQUFBQSxlO1FBSUFDLE8sR0FBQUEsTzs7QUE1RGhCOztJQUFZQyxLOztBQUNaOzs7Ozs7QUFFQTtBQUNBO0FBQ0E7O0FBRU8sU0FBU04sSUFBVCxDQUFjTyxJQUFkLEVBQW9CO0FBQzFCLFFBQU87QUFDTkMsUUFBTUYsTUFBTUcsU0FETjtBQUVORixRQUFNQTtBQUZBLEVBQVA7QUFJQTs7QUFFTSxTQUFTTixRQUFULEdBQW9CO0FBQzFCLFFBQU87QUFDTkssU0FBTyxDQUFDQSxNQUFNSSxjQUFQLEVBQXVCSixNQUFNSyxzQkFBN0IsRUFBcURMLE1BQU1NLG1CQUEzRCxDQUREO0FBRU5DLFdBQVMsaUJBQUNDLE1BQUQsRUFBU0MsU0FBVCxFQUF1QjtBQUMvQixVQUFPRCxPQUFPRSxHQUFQLENBQVcsZ0JBQVgsRUFBNkI7QUFDbkNDLFlBQVE7QUFDUEMsaUJBQWNIO0FBRFAsS0FEMkIsRUFBN0IsQ0FBUDtBQUlBO0FBUEssRUFBUDtBQVNBOztBQUVNLFNBQVNiLElBQVQsQ0FBY2lCLEdBQWQsRUFBbUI7QUFDekIsUUFBTztBQUNOYixTQUFPLENBQUNBLE1BQU1jLFNBQVAsRUFBa0JkLE1BQU1lLGlCQUF4QixFQUEyQ2YsTUFBTWdCLGNBQWpELENBREQ7QUFFTlQsV0FBUyxpQkFBQ0MsTUFBRDtBQUFBLFVBQVlBLE9BQU9FLEdBQVAsQ0FBVyxZQUFYLEVBQXlCO0FBQzdDQyxZQUFRO0FBQ1BFLFVBQUtBO0FBREU7QUFEcUMsSUFBekIsQ0FBWjtBQUFBO0FBRkgsRUFBUDtBQVFBOztBQUVNLFNBQVNoQixNQUFULENBQWdCb0IsUUFBaEIsRUFBMEI7QUFDaEMsUUFBTztBQUNOakIsU0FBTyxDQUFDQSxNQUFNa0IsV0FBUCxFQUFvQmxCLE1BQU1tQixtQkFBMUIsRUFBK0NuQixNQUFNb0IsZ0JBQXJELENBREQ7QUFFTmIsV0FBUyxpQkFBQ0MsTUFBRCxFQUFTQyxTQUFULEVBQXVCO0FBQy9CLFVBQU9ELE9BQU9hLElBQVAsQ0FBWSxtQkFBWixFQUFpQztBQUN2Q0MsVUFBTTtBQUNMQyxnQkFBYSx5Q0FBb0JOLFFBQXBCLENBRFI7QUFFTE8sZ0JBQWEseUJBQWVQLFFBQWYsQ0FGUjtBQUdMUSxZQUFXLHlCQUFlLHNDQUFpQlIsUUFBakIsQ0FBZixDQUhOO0FBSUxMLGlCQUFjSDtBQUpULEtBRGlDLEVBQWpDLENBQVA7QUFPQTtBQVZLLEVBQVA7QUFZQTs7QUFFRDtBQUNBO0FBQ0E7O0FBRU8sU0FBU1gsZUFBVCxDQUF5QjRCLEtBQXpCLEVBQWdDO0FBQ3RDLFFBQU9BLE1BQU1DLElBQU4sQ0FBV0MsSUFBWCxDQUFnQkMsU0FBdkI7QUFDQTs7QUFFTSxTQUFTOUIsT0FBVCxDQUFpQjJCLEtBQWpCLEVBQXdCO0FBQzlCLFFBQU9BLE1BQU1DLElBQU4sQ0FBV0wsSUFBbEI7QUFDQSIsImZpbGUiOiJzcGVjLWFjdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuL2FjdGlvbi10eXBlcyc7XG5pbXBvcnQgeyB0b29sc0Zyb21PcGVuYXBpLCBzcGVjTmFtZUZyb21PcGVuYXBpIH0gZnJvbSAnLi4vbGlicy9jb25zdW1lLW9wZW5hcGknO1xuXG4vLy8vLy8vLy8vLy8vXG4vLyBBY3Rpb25zIC8vXG4vLy8vLy8vLy8vLy8vXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0KGpzb24pIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiB0eXBlcy5TUEVDX0lOSVQsXG5cdFx0anNvbjoganNvblxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZEluZm8oKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZXM6IFt0eXBlcy5TUEVDX0xPQURfSU5GTywgdHlwZXMuU1BFQ19MT0FEX0lORk9fU1VDQ0VTUywgdHlwZXMuU1BFQ19MT0FEX0lORk9fRkFJTF0sXG5cdFx0cHJvbWlzZTogKGNsaWVudCwgc2Vzc2lvbklkKSA9PiB7XG5cdFx0XHRyZXR1cm4gY2xpZW50LmdldCgnL3VzZXIvZ2V0X3NwZWMnLCB7XG5cdFx0XHRcdHBhcmFtczoge1xuXHRcdFx0XHRcdHNlc3Npb25faWQgXHQ6IHNlc3Npb25JZCxcblx0XHRcdFx0fX0pO1xuXHRcdH1cblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWQodXJsKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZXM6IFt0eXBlcy5TUEVDX0xPQUQsIHR5cGVzLlNQRUNfTE9BRF9TVUNDRVNTLCB0eXBlcy5TUEVDX0xPQURfRkFJTF0sXG5cdFx0cHJvbWlzZTogKGNsaWVudCkgPT4gY2xpZW50LmdldCgnL3Rlc3QvY3VybCcsIHtcblx0XHRcdHBhcmFtczoge1xuXHRcdFx0XHR1cmw6IHVybFxuXHRcdFx0fVxuXHRcdH0pXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGUoc3BlY0RhdGEpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlczogW3R5cGVzLlNQRUNfVVBEQVRFLCB0eXBlcy5TUEVDX1VQREFURV9TVUNDRVNTLCB0eXBlcy5TUEVDX1VQREFURV9GQUlMXSxcblx0XHRwcm9taXNlOiAoY2xpZW50LCBzZXNzaW9uSWQpID0+IHtcblx0XHRcdHJldHVybiBjbGllbnQucG9zdCgnL3VzZXIvdXBkYXRlX3NwZWMnLCB7XG5cdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRzcGVjX25hbWVcdFx0OiBzcGVjTmFtZUZyb21PcGVuYXBpKHNwZWNEYXRhKSxcblx0XHRcdFx0XHRzcGVjX2RhdGEgXHQ6IEpTT04uc3RyaW5naWZ5KHNwZWNEYXRhKSxcblx0XHRcdFx0XHR0b29scyBcdFx0XHQ6IEpTT04uc3RyaW5naWZ5KHRvb2xzRnJvbU9wZW5hcGkoc3BlY0RhdGEpKSxcblx0XHRcdFx0XHRzZXNzaW9uX2lkIFx0OiBzZXNzaW9uSWQsXG5cdFx0XHRcdH19KTtcblx0XHR9XG5cdH07XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFB1YmxpYyBGdW5jdGlvbnMgLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNwZWNGaWxlTGluayhzdGF0ZSkge1xuXHRyZXR1cm4gc3RhdGUuc3BlYy5pbmZvLmZpbGVfbGluaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGEoc3RhdGUpIHtcblx0cmV0dXJuIHN0YXRlLnNwZWMuZGF0YTtcbn1cbiJdfQ==