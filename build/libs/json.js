"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.quietParse = quietParse;
exports.minifyJSON = minifyJSON;
function quietParse(str) {
	var o = null;

	try {
		o = JSON.parse(str);
	} catch (e) {}

	return o;
}

function minifyJSON(json) {

	var tokenizer = /"|(\/\*)|(\*\/)|(\/\/)|\n|\r/g,
	    in_string = false,
	    in_multiline_comment = false,
	    in_singleline_comment = false,
	    tmp = void 0,
	    tmp2 = void 0,
	    new_str = [],
	    ns = 0,
	    from = 0,
	    lc = void 0,
	    rc = void 0;

	tokenizer.lastIndex = 0;

	while (tmp = tokenizer.exec(json)) {
		lc = RegExp.leftContext;
		rc = RegExp.rightContext;
		if (!in_multiline_comment && !in_singleline_comment) {
			tmp2 = lc.substring(from);
			if (!in_string) {
				tmp2 = tmp2.replace(/(\n|\r|\s)*/g, "");
			}
			new_str[ns++] = tmp2;
		}
		from = tokenizer.lastIndex;

		if (tmp[0] == "\"" && !in_multiline_comment && !in_singleline_comment) {
			tmp2 = lc.match(/(\\)*$/);
			if (!in_string || !tmp2 || tmp2[0].length % 2 == 0) {
				// start of string with ", or unescaped " character found to end string
				in_string = !in_string;
			}
			from--; // include " character in next catch
			rc = json.substring(from);
		} else if (tmp[0] == "/*" && !in_string && !in_multiline_comment && !in_singleline_comment) {
			in_multiline_comment = true;
		} else if (tmp[0] == "*/" && !in_string && in_multiline_comment && !in_singleline_comment) {
			in_multiline_comment = false;
		} else if (tmp[0] == "//" && !in_string && !in_multiline_comment && !in_singleline_comment) {
			in_singleline_comment = true;
		} else if ((tmp[0] == "\n" || tmp[0] == "\r") && !in_string && !in_multiline_comment && in_singleline_comment) {
			in_singleline_comment = false;
		} else if (!in_multiline_comment && !in_singleline_comment && !/\n|\r|\s/.test(tmp[0])) {
			new_str[ns++] = tmp[0];
		}
	}
	new_str[ns++] = rc;
	return new_str.join("");
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWJzL2pzb24uanMiXSwibmFtZXMiOlsicXVpZXRQYXJzZSIsIm1pbmlmeUpTT04iLCJzdHIiLCJvIiwiSlNPTiIsInBhcnNlIiwiZSIsImpzb24iLCJ0b2tlbml6ZXIiLCJpbl9zdHJpbmciLCJpbl9tdWx0aWxpbmVfY29tbWVudCIsImluX3NpbmdsZWxpbmVfY29tbWVudCIsInRtcCIsInRtcDIiLCJuZXdfc3RyIiwibnMiLCJmcm9tIiwibGMiLCJyYyIsImxhc3RJbmRleCIsImV4ZWMiLCJSZWdFeHAiLCJsZWZ0Q29udGV4dCIsInJpZ2h0Q29udGV4dCIsInN1YnN0cmluZyIsInJlcGxhY2UiLCJtYXRjaCIsImxlbmd0aCIsInRlc3QiLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7OztRQUFnQkEsVSxHQUFBQSxVO1FBV0FDLFUsR0FBQUEsVTtBQVhULFNBQVNELFVBQVQsQ0FBb0JFLEdBQXBCLEVBQXlCO0FBQy9CLEtBQUlDLElBQUksSUFBUjs7QUFFQSxLQUFJO0FBQ0hBLE1BQUlDLEtBQUtDLEtBQUwsQ0FBV0gsR0FBWCxDQUFKO0FBQ0EsRUFGRCxDQUdBLE9BQU1JLENBQU4sRUFBUyxDQUFHOztBQUVaLFFBQU9ILENBQVA7QUFDQTs7QUFFTSxTQUFTRixVQUFULENBQW9CTSxJQUFwQixFQUEwQjs7QUFFaEMsS0FBSUMsWUFBWSwrQkFBaEI7QUFBQSxLQUNDQyxZQUFZLEtBRGI7QUFBQSxLQUVDQyx1QkFBdUIsS0FGeEI7QUFBQSxLQUdDQyx3QkFBd0IsS0FIekI7QUFBQSxLQUlDQyxZQUpEO0FBQUEsS0FJTUMsYUFKTjtBQUFBLEtBSVlDLFVBQVUsRUFKdEI7QUFBQSxLQUkwQkMsS0FBSyxDQUovQjtBQUFBLEtBSWtDQyxPQUFPLENBSnpDO0FBQUEsS0FJNENDLFdBSjVDO0FBQUEsS0FJZ0RDLFdBSmhEOztBQU9BVixXQUFVVyxTQUFWLEdBQXNCLENBQXRCOztBQUVBLFFBQU9QLE1BQU1KLFVBQVVZLElBQVYsQ0FBZWIsSUFBZixDQUFiLEVBQW1DO0FBQ2xDVSxPQUFLSSxPQUFPQyxXQUFaO0FBQ0FKLE9BQUtHLE9BQU9FLFlBQVo7QUFDQSxNQUFJLENBQUNiLG9CQUFELElBQXlCLENBQUNDLHFCQUE5QixFQUFxRDtBQUNwREUsVUFBT0ksR0FBR08sU0FBSCxDQUFhUixJQUFiLENBQVA7QUFDQSxPQUFJLENBQUNQLFNBQUwsRUFBZ0I7QUFDZkksV0FBT0EsS0FBS1ksT0FBTCxDQUFhLGNBQWIsRUFBNEIsRUFBNUIsQ0FBUDtBQUNBO0FBQ0RYLFdBQVFDLElBQVIsSUFBZ0JGLElBQWhCO0FBQ0E7QUFDREcsU0FBT1IsVUFBVVcsU0FBakI7O0FBRUEsTUFBSVAsSUFBSSxDQUFKLEtBQVUsSUFBVixJQUFrQixDQUFDRixvQkFBbkIsSUFBMkMsQ0FBQ0MscUJBQWhELEVBQXVFO0FBQ3RFRSxVQUFPSSxHQUFHUyxLQUFILENBQVMsUUFBVCxDQUFQO0FBQ0EsT0FBSSxDQUFDakIsU0FBRCxJQUFjLENBQUNJLElBQWYsSUFBd0JBLEtBQUssQ0FBTCxFQUFRYyxNQUFSLEdBQWlCLENBQWxCLElBQXdCLENBQW5ELEVBQXNEO0FBQUU7QUFDdkRsQixnQkFBWSxDQUFDQSxTQUFiO0FBQ0E7QUFDRE8sVUFMc0UsQ0FLOUQ7QUFDUkUsUUFBS1gsS0FBS2lCLFNBQUwsQ0FBZVIsSUFBZixDQUFMO0FBQ0EsR0FQRCxNQVFLLElBQUlKLElBQUksQ0FBSixLQUFVLElBQVYsSUFBa0IsQ0FBQ0gsU0FBbkIsSUFBZ0MsQ0FBQ0Msb0JBQWpDLElBQXlELENBQUNDLHFCQUE5RCxFQUFxRjtBQUN6RkQsMEJBQXVCLElBQXZCO0FBQ0EsR0FGSSxNQUdBLElBQUlFLElBQUksQ0FBSixLQUFVLElBQVYsSUFBa0IsQ0FBQ0gsU0FBbkIsSUFBZ0NDLG9CQUFoQyxJQUF3RCxDQUFDQyxxQkFBN0QsRUFBb0Y7QUFDeEZELDBCQUF1QixLQUF2QjtBQUNBLEdBRkksTUFHQSxJQUFJRSxJQUFJLENBQUosS0FBVSxJQUFWLElBQWtCLENBQUNILFNBQW5CLElBQWdDLENBQUNDLG9CQUFqQyxJQUF5RCxDQUFDQyxxQkFBOUQsRUFBcUY7QUFDekZBLDJCQUF3QixJQUF4QjtBQUNBLEdBRkksTUFHQSxJQUFJLENBQUNDLElBQUksQ0FBSixLQUFVLElBQVYsSUFBa0JBLElBQUksQ0FBSixLQUFVLElBQTdCLEtBQXNDLENBQUNILFNBQXZDLElBQW9ELENBQUNDLG9CQUFyRCxJQUE2RUMscUJBQWpGLEVBQXdHO0FBQzVHQSwyQkFBd0IsS0FBeEI7QUFDQSxHQUZJLE1BR0EsSUFBSSxDQUFDRCxvQkFBRCxJQUF5QixDQUFDQyxxQkFBMUIsSUFBbUQsQ0FBRSxXQUFXaUIsSUFBWCxDQUFnQmhCLElBQUksQ0FBSixDQUFoQixDQUF6RCxFQUFtRjtBQUN2RkUsV0FBUUMsSUFBUixJQUFnQkgsSUFBSSxDQUFKLENBQWhCO0FBQ0E7QUFDRDtBQUNERSxTQUFRQyxJQUFSLElBQWdCRyxFQUFoQjtBQUNBLFFBQU9KLFFBQVFlLElBQVIsQ0FBYSxFQUFiLENBQVA7QUFDQSIsImZpbGUiOiJqc29uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHF1aWV0UGFyc2Uoc3RyKSB7XG5cdGxldCBvID0gbnVsbDtcblxuXHR0cnkge1xuXHRcdG8gPSBKU09OLnBhcnNlKHN0cik7XG5cdH1cblx0Y2F0Y2goZSkgeyB9XG5cblx0cmV0dXJuIG87XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaW5pZnlKU09OKGpzb24pIHtcblxuXHRsZXQgdG9rZW5pemVyID0gL1wifChcXC9cXCopfChcXCpcXC8pfChcXC9cXC8pfFxcbnxcXHIvZyxcblx0XHRpbl9zdHJpbmcgPSBmYWxzZSxcblx0XHRpbl9tdWx0aWxpbmVfY29tbWVudCA9IGZhbHNlLFxuXHRcdGluX3NpbmdsZWxpbmVfY29tbWVudCA9IGZhbHNlLFxuXHRcdHRtcCwgdG1wMiwgbmV3X3N0ciA9IFtdLCBucyA9IDAsIGZyb20gPSAwLCBsYywgcmNcblx0O1xuXG5cdHRva2VuaXplci5sYXN0SW5kZXggPSAwO1xuXG5cdHdoaWxlICh0bXAgPSB0b2tlbml6ZXIuZXhlYyhqc29uKSkge1xuXHRcdGxjID0gUmVnRXhwLmxlZnRDb250ZXh0O1xuXHRcdHJjID0gUmVnRXhwLnJpZ2h0Q29udGV4dDtcblx0XHRpZiAoIWluX211bHRpbGluZV9jb21tZW50ICYmICFpbl9zaW5nbGVsaW5lX2NvbW1lbnQpIHtcblx0XHRcdHRtcDIgPSBsYy5zdWJzdHJpbmcoZnJvbSk7XG5cdFx0XHRpZiAoIWluX3N0cmluZykge1xuXHRcdFx0XHR0bXAyID0gdG1wMi5yZXBsYWNlKC8oXFxufFxccnxcXHMpKi9nLFwiXCIpO1xuXHRcdFx0fVxuXHRcdFx0bmV3X3N0cltucysrXSA9IHRtcDI7XG5cdFx0fVxuXHRcdGZyb20gPSB0b2tlbml6ZXIubGFzdEluZGV4O1xuXG5cdFx0aWYgKHRtcFswXSA9PSBcIlxcXCJcIiAmJiAhaW5fbXVsdGlsaW5lX2NvbW1lbnQgJiYgIWluX3NpbmdsZWxpbmVfY29tbWVudCkge1xuXHRcdFx0dG1wMiA9IGxjLm1hdGNoKC8oXFxcXCkqJC8pO1xuXHRcdFx0aWYgKCFpbl9zdHJpbmcgfHwgIXRtcDIgfHwgKHRtcDJbMF0ubGVuZ3RoICUgMikgPT0gMCkge1x0Ly8gc3RhcnQgb2Ygc3RyaW5nIHdpdGggXCIsIG9yIHVuZXNjYXBlZCBcIiBjaGFyYWN0ZXIgZm91bmQgdG8gZW5kIHN0cmluZ1xuXHRcdFx0XHRpbl9zdHJpbmcgPSAhaW5fc3RyaW5nO1xuXHRcdFx0fVxuXHRcdFx0ZnJvbS0tOyAvLyBpbmNsdWRlIFwiIGNoYXJhY3RlciBpbiBuZXh0IGNhdGNoXG5cdFx0XHRyYyA9IGpzb24uc3Vic3RyaW5nKGZyb20pO1xuXHRcdH1cblx0XHRlbHNlIGlmICh0bXBbMF0gPT0gXCIvKlwiICYmICFpbl9zdHJpbmcgJiYgIWluX211bHRpbGluZV9jb21tZW50ICYmICFpbl9zaW5nbGVsaW5lX2NvbW1lbnQpIHtcblx0XHRcdGluX211bHRpbGluZV9jb21tZW50ID0gdHJ1ZTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAodG1wWzBdID09IFwiKi9cIiAmJiAhaW5fc3RyaW5nICYmIGluX211bHRpbGluZV9jb21tZW50ICYmICFpbl9zaW5nbGVsaW5lX2NvbW1lbnQpIHtcblx0XHRcdGluX211bHRpbGluZV9jb21tZW50ID0gZmFsc2U7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKHRtcFswXSA9PSBcIi8vXCIgJiYgIWluX3N0cmluZyAmJiAhaW5fbXVsdGlsaW5lX2NvbW1lbnQgJiYgIWluX3NpbmdsZWxpbmVfY29tbWVudCkge1xuXHRcdFx0aW5fc2luZ2xlbGluZV9jb21tZW50ID0gdHJ1ZTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoKHRtcFswXSA9PSBcIlxcblwiIHx8IHRtcFswXSA9PSBcIlxcclwiKSAmJiAhaW5fc3RyaW5nICYmICFpbl9tdWx0aWxpbmVfY29tbWVudCAmJiBpbl9zaW5nbGVsaW5lX2NvbW1lbnQpIHtcblx0XHRcdGluX3NpbmdsZWxpbmVfY29tbWVudCA9IGZhbHNlO1xuXHRcdH1cblx0XHRlbHNlIGlmICghaW5fbXVsdGlsaW5lX2NvbW1lbnQgJiYgIWluX3NpbmdsZWxpbmVfY29tbWVudCAmJiAhKC9cXG58XFxyfFxccy8udGVzdCh0bXBbMF0pKSkge1xuXHRcdFx0bmV3X3N0cltucysrXSA9IHRtcFswXTtcblx0XHR9XG5cdH1cblx0bmV3X3N0cltucysrXSA9IHJjO1xuXHRyZXR1cm4gbmV3X3N0ci5qb2luKFwiXCIpO1xufVxuIl19