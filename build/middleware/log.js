'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _actionTypes = require('../actions/action-types');

var types = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = function (debug) {
	var debugStore = debug('store');

	return function (store) {
		return function (next) {
			return function (action) {
				var result = next(action);

				switch (action.type) {
					case types.USER_LOGIN_SUCCESS:
						debugStore(action.type + ' ' + result.result);
						break;
					case types.USER_LOGIN_FAIL:
						debugStore(action.type + ' ' + result.error);
						break;
					default:
						debugStore('' + action.type);
						break;
				}

				return result;
			};
		};
	};
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWRkbGV3YXJlL2xvZy5qcyJdLCJuYW1lcyI6WyJ0eXBlcyIsImRlYnVnU3RvcmUiLCJkZWJ1ZyIsInJlc3VsdCIsIm5leHQiLCJhY3Rpb24iLCJ0eXBlIiwiVVNFUl9MT0dJTl9TVUNDRVNTIiwiVVNFUl9MT0dJTl9GQUlMIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztJQUFZQSxLOzs7O2tCQUVHLGlCQUFTO0FBQ3ZCLEtBQU1DLGFBQWFDLE1BQU0sT0FBTixDQUFuQjs7QUFFQSxRQUFPO0FBQUEsU0FBUztBQUFBLFVBQVEsa0JBQVU7QUFDakMsUUFBTUMsU0FBU0MsS0FBS0MsTUFBTCxDQUFmOztBQUVBLFlBQVFBLE9BQU9DLElBQWY7QUFDQyxVQUFLTixNQUFNTyxrQkFBWDtBQUNDTixpQkFBY0ksT0FBT0MsSUFBckIsU0FBNkJILE9BQU9BLE1BQXBDO0FBQ0E7QUFDRCxVQUFLSCxNQUFNUSxlQUFYO0FBQ0NQLGlCQUFjSSxPQUFPQyxJQUFyQixTQUE2QkgsT0FBT00sS0FBcEM7QUFDQTtBQUNEO0FBQ0NSLHNCQUFjSSxPQUFPQyxJQUFyQjtBQUNBO0FBVEY7O0FBWUEsV0FBT0gsTUFBUDtBQUNBLElBaEJlO0FBQUEsR0FBVDtBQUFBLEVBQVA7QUFpQkEsQyIsImZpbGUiOiJsb2cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9hY3Rpb25zL2FjdGlvbi10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlYnVnID0+IHtcblx0Y29uc3QgZGVidWdTdG9yZSA9IGRlYnVnKCdzdG9yZScpO1xuXG5cdHJldHVybiBzdG9yZSA9PiBuZXh0ID0+IGFjdGlvbiA9PiB7XG5cdFx0Y29uc3QgcmVzdWx0ID0gbmV4dChhY3Rpb24pO1xuXG5cdFx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdFx0Y2FzZSB0eXBlcy5VU0VSX0xPR0lOX1NVQ0NFU1M6XG5cdFx0XHRcdGRlYnVnU3RvcmUoYCR7YWN0aW9uLnR5cGV9ICR7cmVzdWx0LnJlc3VsdH1gKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIHR5cGVzLlVTRVJfTE9HSU5fRkFJTDpcblx0XHRcdFx0ZGVidWdTdG9yZShgJHthY3Rpb24udHlwZX0gJHtyZXN1bHQuZXJyb3J9YCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0ZGVidWdTdG9yZShgJHthY3Rpb24udHlwZX1gKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcbn1cbiJdfQ==