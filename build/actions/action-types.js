'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var USER_LOAD = exports.USER_LOAD = 'USER_LOAD';
var USER_LOAD_SUCCESS = exports.USER_LOAD_SUCCESS = 'USER_LOAD_SUCCESS';
var USER_LOGIN = exports.USER_LOGIN = 'USER_LOGIN';
var USER_LOGIN_SUCCESS = exports.USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
var USER_LOGIN_FAIL = exports.USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';
var USER_LOGOUT = exports.USER_LOGOUT = 'USER_LOGOUT';
var USER_LOGOUT_SUCCESS = exports.USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS';
var USER_LOGOUT_FAIL = exports.USER_LOGOUT_FAIL = 'USER_LOGOUT_FAIL';
var USER_SIGNUP = exports.USER_SIGNUP = 'USER_SIGNUP';
var USER_SIGNUP_SUCCESS = exports.USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS';
var USER_SIGNUP_FAIL = exports.USER_SIGNUP_FAIL = 'USER_SIGNUP_FAIL';

var SPEC_INIT = exports.SPEC_INIT = 'SPEC_INIT';
var SPEC_UPDATE = exports.SPEC_UPDATE = 'SPEC_UPDATE';
var SPEC_UPDATE_SUCCESS = exports.SPEC_UPDATE_SUCCESS = 'SPEC_UPDATE_SUCCESS';
var SPEC_UPDATE_FAIL = exports.SPEC_UPDATE_FAIL = 'SPEC_UPDATE_FAIL';
var SPEC_LOAD_INFO = exports.SPEC_LOAD_INFO = 'SPEC_LOAD_INFO';
var SPEC_LOAD_INFO_SUCCESS = exports.SPEC_LOAD_INFO_SUCCESS = 'SPEC_LOAD_INFO_SUCCESS';
var SPEC_LOAD_INFO_FAIL = exports.SPEC_LOAD_INFO_FAIL = 'SPEC_LOAD_INFO_FAIL';
var SPEC_LOAD = exports.SPEC_LOAD = 'SPEC_LOAD';
var SPEC_LOAD_SUCCESS = exports.SPEC_LOAD_SUCCESS = 'SPEC_LOAD_SUCCESS';
var SPEC_LOAD_FAIL = exports.SPEC_LOAD_FAIL = 'SPEC_LOAD_FAIL';

var TOOLS_LOAD = exports.TOOLS_LOAD = 'TOOLS_LOAD';
var TOOLS_LOAD_SUCCESS = exports.TOOLS_LOAD_SUCCESS = 'TOOLS_LOAD_SUCCESS';
var TOOLS_LOAD_FAIL = exports.TOOLS_LOAD_FAIL = 'TOOLS_LOAD_FAIL';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL2FjdGlvbi10eXBlcy5qcyJdLCJuYW1lcyI6WyJVU0VSX0xPQUQiLCJVU0VSX0xPQURfU1VDQ0VTUyIsIlVTRVJfTE9HSU4iLCJVU0VSX0xPR0lOX1NVQ0NFU1MiLCJVU0VSX0xPR0lOX0ZBSUwiLCJVU0VSX0xPR09VVCIsIlVTRVJfTE9HT1VUX1NVQ0NFU1MiLCJVU0VSX0xPR09VVF9GQUlMIiwiVVNFUl9TSUdOVVAiLCJVU0VSX1NJR05VUF9TVUNDRVNTIiwiVVNFUl9TSUdOVVBfRkFJTCIsIlNQRUNfSU5JVCIsIlNQRUNfVVBEQVRFIiwiU1BFQ19VUERBVEVfU1VDQ0VTUyIsIlNQRUNfVVBEQVRFX0ZBSUwiLCJTUEVDX0xPQURfSU5GTyIsIlNQRUNfTE9BRF9JTkZPX1NVQ0NFU1MiLCJTUEVDX0xPQURfSU5GT19GQUlMIiwiU1BFQ19MT0FEIiwiU1BFQ19MT0FEX1NVQ0NFU1MiLCJTUEVDX0xPQURfRkFJTCIsIlRPT0xTX0xPQUQiLCJUT09MU19MT0FEX1NVQ0NFU1MiLCJUT09MU19MT0FEX0ZBSUwiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sSUFBTUEsZ0NBQVksV0FBbEI7QUFDQSxJQUFNQyxnREFBb0IsbUJBQTFCO0FBQ0EsSUFBTUMsa0NBQWEsWUFBbkI7QUFDQSxJQUFNQyxrREFBcUIsb0JBQTNCO0FBQ0EsSUFBTUMsNENBQWtCLGlCQUF4QjtBQUNBLElBQU1DLG9DQUFjLGFBQXBCO0FBQ0EsSUFBTUMsb0RBQXNCLHFCQUE1QjtBQUNBLElBQU1DLDhDQUFtQixrQkFBekI7QUFDQSxJQUFNQyxvQ0FBYyxhQUFwQjtBQUNBLElBQU1DLG9EQUFzQixxQkFBNUI7QUFDQSxJQUFNQyw4Q0FBbUIsa0JBQXpCOztBQUVBLElBQU1DLGdDQUFZLFdBQWxCO0FBQ0EsSUFBTUMsb0NBQWMsYUFBcEI7QUFDQSxJQUFNQyxvREFBc0IscUJBQTVCO0FBQ0EsSUFBTUMsOENBQW1CLGtCQUF6QjtBQUNBLElBQU1DLDBDQUFpQixnQkFBdkI7QUFDQSxJQUFNQywwREFBeUIsd0JBQS9CO0FBQ0EsSUFBTUMsb0RBQXNCLHFCQUE1QjtBQUNBLElBQU1DLGdDQUFZLFdBQWxCO0FBQ0EsSUFBTUMsZ0RBQW9CLG1CQUExQjtBQUNBLElBQU1DLDBDQUFpQixnQkFBdkI7O0FBRUEsSUFBTUMsa0NBQWEsWUFBbkI7QUFDQSxJQUFNQyxrREFBcUIsb0JBQTNCO0FBQ0EsSUFBTUMsNENBQWtCLGlCQUF4QiIsImZpbGUiOiJhY3Rpb24tdHlwZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgVVNFUl9MT0FEID0gJ1VTRVJfTE9BRCc7XG5leHBvcnQgY29uc3QgVVNFUl9MT0FEX1NVQ0NFU1MgPSAnVVNFUl9MT0FEX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IFVTRVJfTE9HSU4gPSAnVVNFUl9MT0dJTic7XG5leHBvcnQgY29uc3QgVVNFUl9MT0dJTl9TVUNDRVNTID0gJ1VTRVJfTE9HSU5fU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgVVNFUl9MT0dJTl9GQUlMID0gJ1VTRVJfTE9HSU5fRkFJTCc7XG5leHBvcnQgY29uc3QgVVNFUl9MT0dPVVQgPSAnVVNFUl9MT0dPVVQnO1xuZXhwb3J0IGNvbnN0IFVTRVJfTE9HT1VUX1NVQ0NFU1MgPSAnVVNFUl9MT0dPVVRfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgVVNFUl9MT0dPVVRfRkFJTCA9ICdVU0VSX0xPR09VVF9GQUlMJztcbmV4cG9ydCBjb25zdCBVU0VSX1NJR05VUCA9ICdVU0VSX1NJR05VUCc7XG5leHBvcnQgY29uc3QgVVNFUl9TSUdOVVBfU1VDQ0VTUyA9ICdVU0VSX1NJR05VUF9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBVU0VSX1NJR05VUF9GQUlMID0gJ1VTRVJfU0lHTlVQX0ZBSUwnO1xuXG5leHBvcnQgY29uc3QgU1BFQ19JTklUID0gJ1NQRUNfSU5JVCc7XG5leHBvcnQgY29uc3QgU1BFQ19VUERBVEUgPSAnU1BFQ19VUERBVEUnO1xuZXhwb3J0IGNvbnN0IFNQRUNfVVBEQVRFX1NVQ0NFU1MgPSAnU1BFQ19VUERBVEVfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgU1BFQ19VUERBVEVfRkFJTCA9ICdTUEVDX1VQREFURV9GQUlMJztcbmV4cG9ydCBjb25zdCBTUEVDX0xPQURfSU5GTyA9ICdTUEVDX0xPQURfSU5GTyc7XG5leHBvcnQgY29uc3QgU1BFQ19MT0FEX0lORk9fU1VDQ0VTUyA9ICdTUEVDX0xPQURfSU5GT19TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBTUEVDX0xPQURfSU5GT19GQUlMID0gJ1NQRUNfTE9BRF9JTkZPX0ZBSUwnO1xuZXhwb3J0IGNvbnN0IFNQRUNfTE9BRCA9ICdTUEVDX0xPQUQnO1xuZXhwb3J0IGNvbnN0IFNQRUNfTE9BRF9TVUNDRVNTID0gJ1NQRUNfTE9BRF9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBTUEVDX0xPQURfRkFJTCA9ICdTUEVDX0xPQURfRkFJTCc7XG5cbmV4cG9ydCBjb25zdCBUT09MU19MT0FEID0gJ1RPT0xTX0xPQUQnO1xuZXhwb3J0IGNvbnN0IFRPT0xTX0xPQURfU1VDQ0VTUyA9ICdUT09MU19MT0FEX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IFRPT0xTX0xPQURfRkFJTCA9ICdUT09MU19MT0FEX0ZBSUwnO1xuIl19