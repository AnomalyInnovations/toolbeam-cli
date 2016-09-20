'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.save = save;
exports.loadInfo = loadInfo;
exports.load = load;
exports.create = create;
exports.update = update;
exports.getSpecFileLink = getSpecFileLink;
exports.getData = getData;

var _actionTypes = require('./action-types');

var types = _interopRequireWildcard(_actionTypes);

var _consumeOpenapi = require('../libs/consume-openapi');

var _file = require('../libs/file');

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/////////////
// Actions //
/////////////

function save(json) {
	var _this = this;

	return function () {
		var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(dispatch, getState) {
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:

							// update state
							dispatch({
								type: types.SPEC_SAVE,
								json: json
							});

							// write to file
							_context.next = 3;
							return (0, _file.writeFile)(_config2.default.specFileName, getData(getState()));

						case 3:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, _this);
		}));

		return function (_x, _x2) {
			return _ref.apply(this, arguments);
		};
	}();
}

function loadInfo(uuid) {
	return {
		types: [types.SPEC_LOAD_INFO, types.SPEC_LOAD_INFO_SUCCESS, types.SPEC_LOAD_INFO_FAIL],
		promise: function promise(client, sessionId) {
			return client.get('/user/get_spec', {
				params: {
					session_id: sessionId,
					spec_uuid: uuid
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

function create(specData) {
	return {
		types: [types.SPEC_CREATE, types.SPEC_CREATE_SUCCESS, types.SPEC_CREATE_FAIL],
		promise: function promise(client, sessionId) {
			return client.post('/user/create_spec', {
				data: {
					spec_name: (0, _consumeOpenapi.specNameFromOpenapi)(specData),
					spec_data: (0, _stringify2.default)(specData),
					tools: (0, _stringify2.default)((0, _consumeOpenapi.toolsFromOpenapi)(specData)),
					session_id: sessionId
				} });
		}
	};
}

function update(specData) {
	return {
		types: [types.SPEC_UPDATE, types.SPEC_UPDATE_SUCCESS, types.SPEC_UPDATE_FAIL],
		promise: function promise(client, sessionId) {
			return client.post('/user/update_spec', {
				data: {
					spec_uuid: (0, _consumeOpenapi.specUUIDFromOpenapi)(specData),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL3NwZWMtYWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJzYXZlIiwibG9hZEluZm8iLCJsb2FkIiwiY3JlYXRlIiwidXBkYXRlIiwiZ2V0U3BlY0ZpbGVMaW5rIiwiZ2V0RGF0YSIsInR5cGVzIiwianNvbiIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJ0eXBlIiwiU1BFQ19TQVZFIiwic3BlY0ZpbGVOYW1lIiwidXVpZCIsIlNQRUNfTE9BRF9JTkZPIiwiU1BFQ19MT0FEX0lORk9fU1VDQ0VTUyIsIlNQRUNfTE9BRF9JTkZPX0ZBSUwiLCJwcm9taXNlIiwiY2xpZW50Iiwic2Vzc2lvbklkIiwiZ2V0IiwicGFyYW1zIiwic2Vzc2lvbl9pZCIsInNwZWNfdXVpZCIsInVybCIsIlNQRUNfTE9BRCIsIlNQRUNfTE9BRF9TVUNDRVNTIiwiU1BFQ19MT0FEX0ZBSUwiLCJzcGVjRGF0YSIsIlNQRUNfQ1JFQVRFIiwiU1BFQ19DUkVBVEVfU1VDQ0VTUyIsIlNQRUNfQ1JFQVRFX0ZBSUwiLCJwb3N0IiwiZGF0YSIsInNwZWNfbmFtZSIsInNwZWNfZGF0YSIsInRvb2xzIiwiU1BFQ19VUERBVEUiLCJTUEVDX1VQREFURV9TVUNDRVNTIiwiU1BFQ19VUERBVEVfRkFJTCIsInN0YXRlIiwic3BlYyIsImluZm8iLCJmaWxlX2xpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQVNnQkEsSSxHQUFBQSxJO1FBY0FDLFEsR0FBQUEsUTtRQWFBQyxJLEdBQUFBLEk7UUFXQUMsTSxHQUFBQSxNO1FBZUFDLE0sR0FBQUEsTTtRQW9CQUMsZSxHQUFBQSxlO1FBSUFDLE8sR0FBQUEsTzs7QUF0RmhCOztJQUFZQyxLOztBQUNaOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBO0FBQ0E7QUFDQTs7QUFFTyxTQUFTUCxJQUFULENBQWNRLElBQWQsRUFBb0I7QUFBQTs7QUFDMUI7QUFBQSx3RUFBTyxpQkFBTUMsUUFBTixFQUFnQkMsUUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFTjtBQUNBRCxnQkFBUztBQUNSRSxjQUFNSixNQUFNSyxTQURKO0FBRVJKLGNBQU1BO0FBRkUsUUFBVDs7QUFLQTtBQVJNO0FBQUEsY0FTQSxxQkFBVSxpQkFBT0ssWUFBakIsRUFBK0JQLFFBQVFJLFVBQVIsQ0FBL0IsQ0FUQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFQOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBV0E7O0FBRU0sU0FBU1QsUUFBVCxDQUFrQmEsSUFBbEIsRUFBd0I7QUFDOUIsUUFBTztBQUNOUCxTQUFPLENBQUNBLE1BQU1RLGNBQVAsRUFBdUJSLE1BQU1TLHNCQUE3QixFQUFxRFQsTUFBTVUsbUJBQTNELENBREQ7QUFFTkMsV0FBUyxpQkFBQ0MsTUFBRCxFQUFTQyxTQUFULEVBQXVCO0FBQy9CLFVBQU9ELE9BQU9FLEdBQVAsQ0FBVyxnQkFBWCxFQUE2QjtBQUNuQ0MsWUFBUTtBQUNQQyxpQkFBWUgsU0FETDtBQUVQSSxnQkFBWVY7QUFGTCxLQUQyQixFQUE3QixDQUFQO0FBS0E7QUFSSyxFQUFQO0FBVUE7O0FBRU0sU0FBU1osSUFBVCxDQUFjdUIsR0FBZCxFQUFtQjtBQUN6QixRQUFPO0FBQ05sQixTQUFPLENBQUNBLE1BQU1tQixTQUFQLEVBQWtCbkIsTUFBTW9CLGlCQUF4QixFQUEyQ3BCLE1BQU1xQixjQUFqRCxDQUREO0FBRU5WLFdBQVMsaUJBQUNDLE1BQUQ7QUFBQSxVQUFZQSxPQUFPRSxHQUFQLENBQVcsWUFBWCxFQUF5QjtBQUM3Q0MsWUFBUTtBQUNQRyxVQUFLQTtBQURFO0FBRHFDLElBQXpCLENBQVo7QUFBQTtBQUZILEVBQVA7QUFRQTs7QUFFTSxTQUFTdEIsTUFBVCxDQUFnQjBCLFFBQWhCLEVBQTBCO0FBQ2hDLFFBQU87QUFDTnRCLFNBQU8sQ0FBQ0EsTUFBTXVCLFdBQVAsRUFBb0J2QixNQUFNd0IsbUJBQTFCLEVBQStDeEIsTUFBTXlCLGdCQUFyRCxDQUREO0FBRU5kLFdBQVMsaUJBQUNDLE1BQUQsRUFBU0MsU0FBVCxFQUF1QjtBQUMvQixVQUFPRCxPQUFPYyxJQUFQLENBQVksbUJBQVosRUFBaUM7QUFDdkNDLFVBQU07QUFDTEMsZ0JBQWMseUNBQW9CTixRQUFwQixDQURUO0FBRUxPLGdCQUFjLHlCQUFlUCxRQUFmLENBRlQ7QUFHTFEsWUFBWSx5QkFBZSxzQ0FBaUJSLFFBQWpCLENBQWYsQ0FIUDtBQUlMTixpQkFBZUg7QUFKVixLQURpQyxFQUFqQyxDQUFQO0FBT0E7QUFWSyxFQUFQO0FBWUE7O0FBRU0sU0FBU2hCLE1BQVQsQ0FBZ0J5QixRQUFoQixFQUEwQjtBQUNoQyxRQUFPO0FBQ050QixTQUFPLENBQUNBLE1BQU0rQixXQUFQLEVBQW9CL0IsTUFBTWdDLG1CQUExQixFQUErQ2hDLE1BQU1pQyxnQkFBckQsQ0FERDtBQUVOdEIsV0FBUyxpQkFBQ0MsTUFBRCxFQUFTQyxTQUFULEVBQXVCO0FBQy9CLFVBQU9ELE9BQU9jLElBQVAsQ0FBWSxtQkFBWixFQUFpQztBQUN2Q0MsVUFBTTtBQUNMVixnQkFBYyx5Q0FBb0JLLFFBQXBCLENBRFQ7QUFFTE0sZ0JBQWMseUNBQW9CTixRQUFwQixDQUZUO0FBR0xPLGdCQUFjLHlCQUFlUCxRQUFmLENBSFQ7QUFJTFEsWUFBWSx5QkFBZSxzQ0FBaUJSLFFBQWpCLENBQWYsQ0FKUDtBQUtMTixpQkFBZUg7QUFMVixLQURpQyxFQUFqQyxDQUFQO0FBUUE7QUFYSyxFQUFQO0FBYUE7O0FBRUQ7QUFDQTtBQUNBOztBQUVPLFNBQVNmLGVBQVQsQ0FBeUJvQyxLQUF6QixFQUFnQztBQUN0QyxRQUFPQSxNQUFNQyxJQUFOLENBQVdDLElBQVgsQ0FBZ0JDLFNBQXZCO0FBQ0E7O0FBRU0sU0FBU3RDLE9BQVQsQ0FBaUJtQyxLQUFqQixFQUF3QjtBQUM5QixRQUFPQSxNQUFNQyxJQUFOLENBQVdSLElBQWxCO0FBQ0EiLCJmaWxlIjoic3BlYy1hY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi9hY3Rpb24tdHlwZXMnO1xuaW1wb3J0IHsgdG9vbHNGcm9tT3BlbmFwaSwgc3BlY05hbWVGcm9tT3BlbmFwaSwgc3BlY1VVSURGcm9tT3BlbmFwaSB9IGZyb20gJy4uL2xpYnMvY29uc3VtZS1vcGVuYXBpJztcbmltcG9ydCB7IHdyaXRlRmlsZSB9IGZyb20gJy4uL2xpYnMvZmlsZSc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XG5cbi8vLy8vLy8vLy8vLy9cbi8vIEFjdGlvbnMgLy9cbi8vLy8vLy8vLy8vLy9cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmUoanNvbikge1xuXHRyZXR1cm4gYXN5bmMoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG5cblx0XHQvLyB1cGRhdGUgc3RhdGVcblx0XHRkaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiB0eXBlcy5TUEVDX1NBVkUsXG5cdFx0XHRqc29uOiBqc29uXG5cdFx0fSk7XG5cblx0XHQvLyB3cml0ZSB0byBmaWxlXG5cdFx0YXdhaXQgd3JpdGVGaWxlKGNvbmZpZy5zcGVjRmlsZU5hbWUsIGdldERhdGEoZ2V0U3RhdGUoKSkpO1xuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZEluZm8odXVpZCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGVzOiBbdHlwZXMuU1BFQ19MT0FEX0lORk8sIHR5cGVzLlNQRUNfTE9BRF9JTkZPX1NVQ0NFU1MsIHR5cGVzLlNQRUNfTE9BRF9JTkZPX0ZBSUxdLFxuXHRcdHByb21pc2U6IChjbGllbnQsIHNlc3Npb25JZCkgPT4ge1xuXHRcdFx0cmV0dXJuIGNsaWVudC5nZXQoJy91c2VyL2dldF9zcGVjJywge1xuXHRcdFx0XHRwYXJhbXM6IHtcblx0XHRcdFx0XHRzZXNzaW9uX2lkOiBzZXNzaW9uSWQsXG5cdFx0XHRcdFx0c3BlY191dWlkXHQ6IHV1aWQsXG5cdFx0XHRcdH19KTtcblx0XHR9XG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkKHVybCkge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGVzOiBbdHlwZXMuU1BFQ19MT0FELCB0eXBlcy5TUEVDX0xPQURfU1VDQ0VTUywgdHlwZXMuU1BFQ19MT0FEX0ZBSUxdLFxuXHRcdHByb21pc2U6IChjbGllbnQpID0+IGNsaWVudC5nZXQoJy90ZXN0L2N1cmwnLCB7XG5cdFx0XHRwYXJhbXM6IHtcblx0XHRcdFx0dXJsOiB1cmxcblx0XHRcdH1cblx0XHR9KVxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlKHNwZWNEYXRhKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZXM6IFt0eXBlcy5TUEVDX0NSRUFURSwgdHlwZXMuU1BFQ19DUkVBVEVfU1VDQ0VTUywgdHlwZXMuU1BFQ19DUkVBVEVfRkFJTF0sXG5cdFx0cHJvbWlzZTogKGNsaWVudCwgc2Vzc2lvbklkKSA9PiB7XG5cdFx0XHRyZXR1cm4gY2xpZW50LnBvc3QoJy91c2VyL2NyZWF0ZV9zcGVjJywge1xuXHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0c3BlY19uYW1lXHRcdFx0OiBzcGVjTmFtZUZyb21PcGVuYXBpKHNwZWNEYXRhKSxcblx0XHRcdFx0XHRzcGVjX2RhdGEgXHRcdDogSlNPTi5zdHJpbmdpZnkoc3BlY0RhdGEpLFxuXHRcdFx0XHRcdHRvb2xzIFx0XHRcdFx0OiBKU09OLnN0cmluZ2lmeSh0b29sc0Zyb21PcGVuYXBpKHNwZWNEYXRhKSksXG5cdFx0XHRcdFx0c2Vzc2lvbl9pZCBcdFx0OiBzZXNzaW9uSWQsXG5cdFx0XHRcdH19KTtcblx0XHR9XG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGUoc3BlY0RhdGEpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlczogW3R5cGVzLlNQRUNfVVBEQVRFLCB0eXBlcy5TUEVDX1VQREFURV9TVUNDRVNTLCB0eXBlcy5TUEVDX1VQREFURV9GQUlMXSxcblx0XHRwcm9taXNlOiAoY2xpZW50LCBzZXNzaW9uSWQpID0+IHtcblx0XHRcdHJldHVybiBjbGllbnQucG9zdCgnL3VzZXIvdXBkYXRlX3NwZWMnLCB7XG5cdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRzcGVjX3V1aWRcdFx0XHQ6IHNwZWNVVUlERnJvbU9wZW5hcGkoc3BlY0RhdGEpLFxuXHRcdFx0XHRcdHNwZWNfbmFtZVx0XHRcdDogc3BlY05hbWVGcm9tT3BlbmFwaShzcGVjRGF0YSksXG5cdFx0XHRcdFx0c3BlY19kYXRhIFx0XHQ6IEpTT04uc3RyaW5naWZ5KHNwZWNEYXRhKSxcblx0XHRcdFx0XHR0b29scyBcdFx0XHRcdDogSlNPTi5zdHJpbmdpZnkodG9vbHNGcm9tT3BlbmFwaShzcGVjRGF0YSkpLFxuXHRcdFx0XHRcdHNlc3Npb25faWQgXHRcdDogc2Vzc2lvbklkLFxuXHRcdFx0XHR9fSk7XG5cdFx0fVxuXHR9O1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBQdWJsaWMgRnVuY3Rpb25zIC8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTcGVjRmlsZUxpbmsoc3RhdGUpIHtcblx0cmV0dXJuIHN0YXRlLnNwZWMuaW5mby5maWxlX2xpbms7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhKHN0YXRlKSB7XG5cdHJldHVybiBzdGF0ZS5zcGVjLmRhdGE7XG59XG4iXX0=