webpackHotUpdate("static/development/pages/stats.js",{

/***/ "./pages/stats.js":
/*!************************!*\
  !*** ./pages/stats.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Stats; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/head */ "./components/head.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);













var Stats =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Stats, _React$Component);

  function Stats(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Stats);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Stats).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Stats, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-1607256993"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_head__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "Stats"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("table", {
        className: "jsx-1607256993" + " " + "table"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("thead", {
        className: "jsx-1607256993"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tr", {
        className: "jsx-1607256993"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("th", {
        scope: "col",
        className: "jsx-1607256993"
      }, "Year"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("th", {
        scope: "col",
        className: "jsx-1607256993"
      }, "# Users"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("th", {
        scope: "col",
        className: "jsx-1607256993"
      }, "# French"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("th", {
        scope: "col",
        className: "jsx-1607256993"
      }, "# Reviews"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("th", {
        scope: "col",
        className: "jsx-1607256993"
      }, "# Gironde's reviews"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tbody", {
        className: "jsx-1607256993"
      }, _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_2___default()(this.props.data).map(function (year) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tr", {
          className: "jsx-1607256993"
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("th", {
          scope: "row",
          className: "jsx-1607256993"
        }, year.year), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", {
          className: "jsx-1607256993"
        }, year.users), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", {
          className: "jsx-1607256993"
        }, year.France), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", {
          className: "jsx-1607256993"
        }, year.reviews), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", {
          className: "jsx-1607256993"
        }, year.Gironde));
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "1607256993"
      }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdW5uYW1lZC9TOC1zdGFnZS90b3VyaXNtLWRhc2hib2FyZC9wYWdlcy9zdGF0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRG9CIiwiZmlsZSI6Ii9Vc2Vycy9xdW5uYW1lZC9TOC1zdGFnZS90b3VyaXNtLWRhc2hib2FyZC9wYWdlcy9zdGF0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL0JNL3N0YXRzL2ZyYW5jZS9naXJvbmRlJyk7XG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiByZXNwb25zZS5kYXRhXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZCB0aXRsZT1cIlN0YXRzXCIgLz5cbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5ZZWFyPC90aD5cbiAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+IyBVc2VyczwvdGg+XG4gICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPiMgRnJlbmNoPC90aD5cbiAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+IyBSZXZpZXdzPC90aD5cbiAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+IyBHaXJvbmRlJ3MgcmV2aWV3czwvdGg+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMucHJvcHMuZGF0YSkubWFwKCh5ZWFyKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwicm93XCI+e3llYXIueWVhcn08L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3llYXIudXNlcnN9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnt5ZWFyLkZyYW5jZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3llYXIucmV2aWV3c308L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3llYXIuR2lyb25kZX08L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgIFxuICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG59Il19 */\n/*@ sourceURL=/Users/qunnamed/S8-stage/tourism-dashboard/pages/stats.js */"));
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
                return axios__WEBPACK_IMPORTED_MODULE_11___default.a.get('http://localhost:3000/BM/stats/france/gironde');

              case 2:
                response = _context.sent;
                console.log(response);
                return _context.abrupt("return", {
                  data: response.data
                });

              case 5:
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

  return Stats;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);



/***/ })

})
//# sourceMappingURL=stats.js.f5727326e939f90e8777.hot-update.js.map