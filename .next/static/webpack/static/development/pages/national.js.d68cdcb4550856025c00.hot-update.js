webpackHotUpdate("static/development/pages/national.js",{

/***/ "./pages/national.js":
/*!***************************!*\
  !*** ./pages/national.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return National; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/head */ "./components/head.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_going_chart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/going-chart */ "./components/going-chart.js");
/* harmony import */ var _components_diff_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/diff-table */ "./components/diff-table.js");
/* harmony import */ var _components_month_chart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/month-chart */ "./components/month-chart.js");














var selectedYear = 2016;

var National =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(National, _React$Component);

  function National(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, National);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(National).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(National, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1607256993"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_head__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "National"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-1607256993"
      }, "National"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_going_chart__WEBPACK_IMPORTED_MODULE_11__["default"], {
        evolution: this.props.data['Evolution'],
        year: selectedYear
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_diff_table__WEBPACK_IMPORTED_MODULE_12__["default"], {
        evolution: this.props.data['Evolution'],
        year: selectedYear,
        var: "Ingoing"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_diff_table__WEBPACK_IMPORTED_MODULE_12__["default"], {
        evolution: this.props.data['Evolution'],
        year: selectedYear,
        var: "Outgoing"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_month_chart__WEBPACK_IMPORTED_MODULE_13__["default"], {
        evolution: this.props.data['Monthly'],
        var: "Ingoing"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1607256993"
      }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdW5uYW1lZC9TOC1zdGFnZS90b3VyaXNtLWRhc2hib2FyZC9wYWdlcy9uYXRpb25hbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4S29CIiwiZmlsZSI6Ii9Vc2Vycy9xdW5uYW1lZC9TOC1zdGFnZS90b3VyaXNtLWRhc2hib2FyZC9wYWdlcy9uYXRpb25hbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBHb2luZ0NoYXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvZ29pbmctY2hhcnQnXG5pbXBvcnQgRGlmZlRhYmxlIGZyb20gJy4uL2NvbXBvbmVudHMvZGlmZi10YWJsZSc7XG5pbXBvcnQgTW9udGhDaGFydCBmcm9tICcuLi9jb21wb25lbnRzL21vbnRoLWNoYXJ0JztcblxudmFyIHNlbGVjdGVkWWVhciA9IDIwMTZcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF0aW9uYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL0JNL25hdGlvbmFsLzIwMTYvP2NvdW50cmllcz1CZWxnaXVtLEZyYW5jZScpO1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhIDogcmVzcG9uc2UuZGF0YVxuICAgIH1cbiAgICAvLyByZXR1cm4ge1xuICAgIC8vICAgZGF0YToge1xuICAgIC8vICAgICBcIkV2b2x1dGlvblwiOiB7XG4gICAgLy8gICAgICAgXCJNaWRpLVB5csOpbsOpZXNcIjoge1xuICAgIC8vICAgICAgICAgXCIyMDE1XCI6IHtcbiAgICAvLyAgICAgICAgICAgXCJJbmdvaW5nXCI6IDE1LjgzLFxuICAgIC8vICAgICAgICAgICBcIk91dGdvaW5nXCI6IDE2LjI3XG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICAgICAgXCIyMDE2XCI6IHtcbiAgICAvLyAgICAgICAgICAgXCJJbmdvaW5nXCI6IDE2LjE0LFxuICAgIC8vICAgICAgICAgICBcIk91dGdvaW5nXCI6IDE2LjUxXG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICAgICAgXCJkaWZmXCI6IHtcbiAgICAvLyAgICAgICAgICAgXCJJbmdvaW5nXCI6IDAuMzEsXG4gICAgLy8gICAgICAgICAgIFwiT3V0Z29pbmdcIjogMC4yNFxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgIH0sXG4gICAgLy8gICAgICAgXCJQb2l0b3UtQ2hhcmVudGVzXCI6IHtcbiAgICAvLyAgICAgICAgIFwiMjAxNVwiOiB7XG4gICAgLy8gICAgICAgICAgIFwiSW5nb2luZ1wiOiAxNC41MixcbiAgICAvLyAgICAgICAgICAgXCJPdXRnb2luZ1wiOiAxNC4yXG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICAgICAgXCIyMDE2XCI6IHtcbiAgICAvLyAgICAgICAgICAgXCJJbmdvaW5nXCI6IDE1LjgxLFxuICAgIC8vICAgICAgICAgICBcIk91dGdvaW5nXCI6IDE0LjhcbiAgICAvLyAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICBcImRpZmZcIjoge1xuICAgIC8vICAgICAgICAgICBcIkluZ29pbmdcIjogMS4yOSxcbiAgICAvLyAgICAgICAgICAgXCJPdXRnb2luZ1wiOiAwLjZcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIFwiTW9udGhseVwiOiB7XG4gICAgLy8gICAgICAgXCJQb2l0b3UtQ2hhcmVudGVzXCI6IHtcbiAgICAvLyAgICAgICAgIFwiSW5nb2luZ1wiOiB7XG4gICAgLy8gICAgICAgICAgIFwibW9udGhzXCI6IFtcbiAgICAvLyAgICAgICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgICBcImxvd1wiOiA4OCxcbiAgICAvLyAgICAgICAgICAgICAgIFwiaGlnaFwiOiAwXG4gICAgLy8gICAgICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgICBcImxvd1wiOiAxMTYsXG4gICAgLy8gICAgICAgICAgICAgICBcImhpZ2hcIjogMFxuICAgIC8vICAgICAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgICAgXCJsb3dcIjogMTY0LFxuICAgIC8vICAgICAgICAgICAgICAgXCJoaWdoXCI6IDBcbiAgICAvLyAgICAgICAgICAgICB9LFxuICAgIC8vICAgICAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICAgIFwibG93XCI6IDIxMyxcbiAgICAvLyAgICAgICAgICAgICAgIFwiaGlnaFwiOiAwXG4gICAgLy8gICAgICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgICBcImxvd1wiOiAyNTgsXG4gICAgLy8gICAgICAgICAgICAgICBcImhpZ2hcIjogMFxuICAgIC8vICAgICAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgICAgXCJsb3dcIjogMTkzLFxuICAgIC8vICAgICAgICAgICAgICAgXCJoaWdoXCI6IDBcbiAgICAvLyAgICAgICAgICAgICB9LFxuICAgIC8vICAgICAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICAgIFwibG93XCI6IDQwMCxcbiAgICAvLyAgICAgICAgICAgICAgIFwiaGlnaFwiOiAwXG4gICAgLy8gICAgICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgICBcImxvd1wiOiA2NjMsXG4gICAgLy8gICAgICAgICAgICAgICBcImhpZ2hcIjogMFxuICAgIC8vICAgICAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgICAgXCJsb3dcIjogMzY0LFxuICAgIC8vICAgICAgICAgICAgICAgXCJoaWdoXCI6IDBcbiAgICAvLyAgICAgICAgICAgICB9LFxuICAgIC8vICAgICAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICAgIFwibG93XCI6IDE3NCxcbiAgICAvLyAgICAgICAgICAgICAgIFwiaGlnaFwiOiAwXG4gICAgLy8gICAgICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgICBcImxvd1wiOiAxMTYsXG4gICAgLy8gICAgICAgICAgICAgICBcImhpZ2hcIjogMFxuICAgIC8vICAgICAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgICAgXCJsb3dcIjogMyxcbiAgICAvLyAgICAgICAgICAgICAgIFwiaGlnaFwiOiAwXG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICBdXG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICAgICAgXCJPdXRnb2luZ1wiOiB7XG4gICAgLy8gICAgICAgICAgIFwibW9udGhzXCI6IFtcbiAgICAvLyAgICAgICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgICBcImxvd1wiOiA5NixcbiAgICAvLyAgICAgICAgICAgICAgIFwiaGlnaFwiOiAwXG4gICAgLy8gICAgICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgICBcImxvd1wiOiAxMjQsXG4gICAgLy8gICAgICAgICAgICAgICBcImhpZ2hcIjogMFxuICAgIC8vICAgICAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgICAgXCJsb3dcIjogMTQyLFxuICAgIC8vICAgICAgICAgICAgICAgXCJoaWdoXCI6IDBcbiAgICAvLyAgICAgICAgICAgICB9LFxuICAgIC8vICAgICAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICAgIFwibG93XCI6IDE3NCxcbiAgICAvLyAgICAgICAgICAgICAgIFwiaGlnaFwiOiAwXG4gICAgLy8gICAgICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgICBcImxvd1wiOiAyNDEsXG4gICAgLy8gICAgICAgICAgICAgICBcImhpZ2hcIjogMFxuICAgIC8vICAgICAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgICAgXCJsb3dcIjogMTgyLFxuICAgIC8vICAgICAgICAgICAgICAgXCJoaWdoXCI6IDBcbiAgICAvLyAgICAgICAgICAgICB9LFxuICAgIC8vICAgICAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICAgIFwibG93XCI6IDM3MyxcbiAgICAvLyAgICAgICAgICAgICAgIFwiaGlnaFwiOiAwXG4gICAgLy8gICAgICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgICBcImxvd1wiOiA2NDcsXG4gICAgLy8gICAgICAgICAgICAgICBcImhpZ2hcIjogMFxuICAgIC8vICAgICAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgICAgXCJsb3dcIjogMzE3LFxuICAgIC8vICAgICAgICAgICAgICAgXCJoaWdoXCI6IDBcbiAgICAvLyAgICAgICAgICAgICB9LFxuICAgIC8vICAgICAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICAgIFwibG93XCI6IDE2MSxcbiAgICAvLyAgICAgICAgICAgICAgIFwiaGlnaFwiOiAwXG4gICAgLy8gICAgICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgICBcImxvd1wiOiAxMTcsXG4gICAgLy8gICAgICAgICAgICAgICBcImhpZ2hcIjogMFxuICAgIC8vICAgICAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgICAgXCJsb3dcIjogMixcbiAgICAvLyAgICAgICAgICAgICAgIFwiaGlnaFwiOiAwXG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICBdXG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICB9XG4gICAgLy8gICB9XG4gICAgLy8gfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZCB0aXRsZT1cIk5hdGlvbmFsXCIgLz5cbiAgICAgICAgPGgxPk5hdGlvbmFsPC9oMT5cbiAgICAgICAgPEdvaW5nQ2hhcnQgZXZvbHV0aW9uPXt0aGlzLnByb3BzLmRhdGFbJ0V2b2x1dGlvbiddfSB5ZWFyPXtzZWxlY3RlZFllYXJ9Lz5cblxuICAgICAgICA8RGlmZlRhYmxlIGV2b2x1dGlvbj17dGhpcy5wcm9wcy5kYXRhWydFdm9sdXRpb24nXX0geWVhcj17c2VsZWN0ZWRZZWFyfSB2YXI9J0luZ29pbmcnLz5cbiAgICAgICAgPERpZmZUYWJsZSBldm9sdXRpb249e3RoaXMucHJvcHMuZGF0YVsnRXZvbHV0aW9uJ119IHllYXI9e3NlbGVjdGVkWWVhcn0gdmFyPSdPdXRnb2luZycvPlxuXG4gICAgICAgIDxNb250aENoYXJ0IGV2b2x1dGlvbj17dGhpcy5wcm9wcy5kYXRhWydNb250aGx5J119IHZhcj0nSW5nb2luZycvPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgIFxuICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG59Il19 */\n/*@ sourceURL=/Users/qunnamed/S8-stage/tourism-dashboard/pages/national.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_10___default.a.get('http://localhost:3000/BM/national/2016/?countries=Belgium,France');

              case 2:
                response = _context.sent;
                return _context.abrupt("return", {
                  data: response.data // return {
                  //   data: {
                  //     "Evolution": {
                  //       "Midi-Pyrénées": {
                  //         "2015": {
                  //           "Ingoing": 15.83,
                  //           "Outgoing": 16.27
                  //         },
                  //         "2016": {
                  //           "Ingoing": 16.14,
                  //           "Outgoing": 16.51
                  //         },
                  //         "diff": {
                  //           "Ingoing": 0.31,
                  //           "Outgoing": 0.24
                  //         }
                  //       },
                  //       "Poitou-Charentes": {
                  //         "2015": {
                  //           "Ingoing": 14.52,
                  //           "Outgoing": 14.2
                  //         },
                  //         "2016": {
                  //           "Ingoing": 15.81,
                  //           "Outgoing": 14.8
                  //         },
                  //         "diff": {
                  //           "Ingoing": 1.29,
                  //           "Outgoing": 0.6
                  //         }
                  //       }
                  //     },
                  //     "Monthly": {
                  //       "Poitou-Charentes": {
                  //         "Ingoing": {
                  //           "months": [
                  //             {
                  //               "low": 88,
                  //               "high": 0
                  //             },
                  //             {
                  //               "low": 116,
                  //               "high": 0
                  //             },
                  //             {
                  //               "low": 164,
                  //               "high": 0
                  //             },
                  //             {
                  //               "low": 213,
                  //               "high": 0
                  //             },
                  //             {
                  //               "low": 258,
                  //               "high": 0
                  //             },
                  //             {
                  //               "low": 193,
                  //               "high": 0
                  //             },
                  //             {
                  //               "low": 400,
                  //               "high": 0
                  //             },
                  //             {
                  //               "low": 663,
                  //               "high": 0
                  //             },
                  //             {
                  //               "low": 364,
                  //               "high": 0
                  //             },
                  //             {
                  //               "low": 174,
                  //               "high": 0
                  //             },
                  //             {
                  //               "low": 116,
                  //               "high": 0
                  //             },
                  //             {
                  //               "low": 3,
                  //               "high": 0
                  //             }
                  //           ]
                  //         },
                  //         "Outgoing": {
                  //           "months": [
                  //             {
                  //               "low": 96,
                  //               "high": 0
                  //             },
                  //             {
                  //               "low": 124,
                  //               "high": 0
                  //             },
                  //             {
                  //               "low": 142,
                  //               "high": 0
                  //             },
                  //             {
                  //               "low": 174,
                  //               "high": 0
                  //             },
                  //             {
                  //               "low": 241,
                  //               "high": 0
                  //             },
                  //             {
                  //               "low": 182,
                  //               "high": 0
                  //             },
                  //             {
                  //               "low": 373,
                  //               "high": 0
                  //             },
                  //             {
                  //               "low": 647,
                  //               "high": 0
                  //             },
                  //             {
                  //               "low": 317,
                  //               "high": 0
                  //             },
                  //             {
                  //               "low": 161,
                  //               "high": 0
                  //             },
                  //             {
                  //               "low": 117,
                  //               "high": 0
                  //             },
                  //             {
                  //               "low": 2,
                  //               "high": 0
                  //             }
                  //           ]
                  //         }
                  //       }
                  //     }
                  //   }
                  // }

                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return National;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=national.js.d68cdcb4550856025c00.hot-update.js.map