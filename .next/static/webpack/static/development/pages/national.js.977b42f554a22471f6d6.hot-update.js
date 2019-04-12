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
      }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdW5uYW1lZC9TOC1zdGFnZS90b3VyaXNtLWRhc2hib2FyZC9wYWdlcy9uYXRpb25hbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErS29CIiwiZmlsZSI6Ii9Vc2Vycy9xdW5uYW1lZC9TOC1zdGFnZS90b3VyaXNtLWRhc2hib2FyZC9wYWdlcy9uYXRpb25hbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBHb2luZ0NoYXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvZ29pbmctY2hhcnQnXG5pbXBvcnQgRGlmZlRhYmxlIGZyb20gJy4uL2NvbXBvbmVudHMvZGlmZi10YWJsZSc7XG5pbXBvcnQgTW9udGhDaGFydCBmcm9tICcuLi9jb21wb25lbnRzL21vbnRoLWNoYXJ0JztcblxudmFyIHNlbGVjdGVkWWVhciA9IDIwMTZcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF0aW9uYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICAvLyBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL0JNL25hdGlvbmFsLzIwMTYvP2NvdW50cmllcz1CZWxnaXVtLEZyYW5jZScpO1xuICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAvLyByZXR1cm4ge1xuICAgIC8vICAgZGF0YSA6IHJlc3BvbnNlLmRhdGFcbiAgICAvLyB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgXCJFdm9sdXRpb25cIjoge1xuICAgICAgICAgIFwiTWlkaS1QeXLDqW7DqWVzXCI6IHtcbiAgICAgICAgICAgIFwiMjAxNVwiOiB7XG4gICAgICAgICAgICAgIFwiSW5nb2luZ1wiOiAxNS44MyxcbiAgICAgICAgICAgICAgXCJPdXRnb2luZ1wiOiAxNi4yN1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiB7XG4gICAgICAgICAgICAgIFwiSW5nb2luZ1wiOiAxNi4xNCxcbiAgICAgICAgICAgICAgXCJPdXRnb2luZ1wiOiAxNi41MVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZGlmZlwiOiB7XG4gICAgICAgICAgICAgIFwiSW5nb2luZ1wiOiAwLjMxLFxuICAgICAgICAgICAgICBcIk91dGdvaW5nXCI6IDAuMjRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiUG9pdG91LUNoYXJlbnRlc1wiOiB7XG4gICAgICAgICAgICBcIjIwMTVcIjoge1xuICAgICAgICAgICAgICBcIkluZ29pbmdcIjogMTQuNTIsXG4gICAgICAgICAgICAgIFwiT3V0Z29pbmdcIjogMTQuMlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiMjAxNlwiOiB7XG4gICAgICAgICAgICAgIFwiSW5nb2luZ1wiOiAxNS44MSxcbiAgICAgICAgICAgICAgXCJPdXRnb2luZ1wiOiAxNC44XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJkaWZmXCI6IHtcbiAgICAgICAgICAgICAgXCJJbmdvaW5nXCI6IDEuMjksXG4gICAgICAgICAgICAgIFwiT3V0Z29pbmdcIjogMC42XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIk1vbnRobHlcIjoge1xuICAgICAgICAgIFwiUG9pdG91LUNoYXJlbnRlc1wiOiB7XG4gICAgICAgICAgICBcIkluZ29pbmdcIjoge1xuICAgICAgICAgICAgICBcIm1vbnRoc1wiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJsb3dcIjogODgsXG4gICAgICAgICAgICAgICAgICBcImhpZ2hcIjogMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJsb3dcIjogMTE2LFxuICAgICAgICAgICAgICAgICAgXCJoaWdoXCI6IDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwibG93XCI6IDE2NCxcbiAgICAgICAgICAgICAgICAgIFwiaGlnaFwiOiAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcImxvd1wiOiAyMTMsXG4gICAgICAgICAgICAgICAgICBcImhpZ2hcIjogMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJsb3dcIjogMjU4LFxuICAgICAgICAgICAgICAgICAgXCJoaWdoXCI6IDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwibG93XCI6IDE5MyxcbiAgICAgICAgICAgICAgICAgIFwiaGlnaFwiOiAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcImxvd1wiOiA0MDAsXG4gICAgICAgICAgICAgICAgICBcImhpZ2hcIjogMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJsb3dcIjogNjYzLFxuICAgICAgICAgICAgICAgICAgXCJoaWdoXCI6IDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwibG93XCI6IDM2NCxcbiAgICAgICAgICAgICAgICAgIFwiaGlnaFwiOiAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcImxvd1wiOiAxNzQsXG4gICAgICAgICAgICAgICAgICBcImhpZ2hcIjogMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJsb3dcIjogMTE2LFxuICAgICAgICAgICAgICAgICAgXCJoaWdoXCI6IDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwibG93XCI6IDMsXG4gICAgICAgICAgICAgICAgICBcImhpZ2hcIjogMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiT3V0Z29pbmdcIjoge1xuICAgICAgICAgICAgICBcIm1vbnRoc1wiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJsb3dcIjogOTYsXG4gICAgICAgICAgICAgICAgICBcImhpZ2hcIjogMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJsb3dcIjogMTI0LFxuICAgICAgICAgICAgICAgICAgXCJoaWdoXCI6IDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwibG93XCI6IDE0MixcbiAgICAgICAgICAgICAgICAgIFwiaGlnaFwiOiAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcImxvd1wiOiAxNzQsXG4gICAgICAgICAgICAgICAgICBcImhpZ2hcIjogMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJsb3dcIjogMjQxLFxuICAgICAgICAgICAgICAgICAgXCJoaWdoXCI6IDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwibG93XCI6IDE4MixcbiAgICAgICAgICAgICAgICAgIFwiaGlnaFwiOiAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcImxvd1wiOiAzNzMsXG4gICAgICAgICAgICAgICAgICBcImhpZ2hcIjogMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJsb3dcIjogNjQ3LFxuICAgICAgICAgICAgICAgICAgXCJoaWdoXCI6IDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwibG93XCI6IDMxNyxcbiAgICAgICAgICAgICAgICAgIFwiaGlnaFwiOiAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcImxvd1wiOiAxNjEsXG4gICAgICAgICAgICAgICAgICBcImhpZ2hcIjogMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJsb3dcIjogMTE3LFxuICAgICAgICAgICAgICAgICAgXCJoaWdoXCI6IDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwibG93XCI6IDIsXG4gICAgICAgICAgICAgICAgICBcImhpZ2hcIjogMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWQgdGl0bGU9XCJOYXRpb25hbFwiIC8+XG4gICAgICAgIDxoMT5OYXRpb25hbDwvaDE+XG4gICAgICAgIDxHb2luZ0NoYXJ0IGV2b2x1dGlvbj17dGhpcy5wcm9wcy5kYXRhWydFdm9sdXRpb24nXX0geWVhcj17c2VsZWN0ZWRZZWFyfS8+XG5cbiAgICAgICAgPERpZmZUYWJsZSBldm9sdXRpb249e3RoaXMucHJvcHMuZGF0YVsnRXZvbHV0aW9uJ119IHllYXI9e3NlbGVjdGVkWWVhcn0gdmFyPSdJbmdvaW5nJy8+XG4gICAgICAgIDxEaWZmVGFibGUgZXZvbHV0aW9uPXt0aGlzLnByb3BzLmRhdGFbJ0V2b2x1dGlvbiddfSB5ZWFyPXtzZWxlY3RlZFllYXJ9IHZhcj0nT3V0Z29pbmcnLz5cblxuICAgICAgICA8TW9udGhDaGFydCBldm9sdXRpb249e3RoaXMucHJvcHMuZGF0YVsnTW9udGhseSddfSB2YXI9J0luZ29pbmcnLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICBcbiAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxufSJdfQ== */\n/*@ sourceURL=/Users/qunnamed/S8-stage/tourism-dashboard/pages/national.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", {
                  data: {
                    "Evolution": {
                      "Midi-Pyrénées": {
                        "2015": {
                          "Ingoing": 15.83,
                          "Outgoing": 16.27
                        },
                        "2016": {
                          "Ingoing": 16.14,
                          "Outgoing": 16.51
                        },
                        "diff": {
                          "Ingoing": 0.31,
                          "Outgoing": 0.24
                        }
                      },
                      "Poitou-Charentes": {
                        "2015": {
                          "Ingoing": 14.52,
                          "Outgoing": 14.2
                        },
                        "2016": {
                          "Ingoing": 15.81,
                          "Outgoing": 14.8
                        },
                        "diff": {
                          "Ingoing": 1.29,
                          "Outgoing": 0.6
                        }
                      }
                    },
                    "Monthly": {
                      "Poitou-Charentes": {
                        "Ingoing": {
                          "months": [{
                            "low": 88,
                            "high": 0
                          }, {
                            "low": 116,
                            "high": 0
                          }, {
                            "low": 164,
                            "high": 0
                          }, {
                            "low": 213,
                            "high": 0
                          }, {
                            "low": 258,
                            "high": 0
                          }, {
                            "low": 193,
                            "high": 0
                          }, {
                            "low": 400,
                            "high": 0
                          }, {
                            "low": 663,
                            "high": 0
                          }, {
                            "low": 364,
                            "high": 0
                          }, {
                            "low": 174,
                            "high": 0
                          }, {
                            "low": 116,
                            "high": 0
                          }, {
                            "low": 3,
                            "high": 0
                          }]
                        },
                        "Outgoing": {
                          "months": [{
                            "low": 96,
                            "high": 0
                          }, {
                            "low": 124,
                            "high": 0
                          }, {
                            "low": 142,
                            "high": 0
                          }, {
                            "low": 174,
                            "high": 0
                          }, {
                            "low": 241,
                            "high": 0
                          }, {
                            "low": 182,
                            "high": 0
                          }, {
                            "low": 373,
                            "high": 0
                          }, {
                            "low": 647,
                            "high": 0
                          }, {
                            "low": 317,
                            "high": 0
                          }, {
                            "low": 161,
                            "high": 0
                          }, {
                            "low": 117,
                            "high": 0
                          }, {
                            "low": 2,
                            "high": 0
                          }]
                        }
                      }
                    }
                  }
                });

              case 1:
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
//# sourceMappingURL=national.js.977b42f554a22471f6d6.hot-update.js.map