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
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
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
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-1607256993"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_head__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "Stats"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h1", {
        className: "jsx-1607256993"
      }, this.props.data['2010'].year), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("table", {
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
      }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(this.props.data).forEach(function (key) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
          className: "jsx-1607256993"
        }, _this.props.data[key]);
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tr", {
        className: "jsx-1607256993"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("th", {
        scope: "row",
        className: "jsx-1607256993"
      }, "1"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", {
        className: "jsx-1607256993"
      }, "Mark"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", {
        className: "jsx-1607256993"
      }, "Otto"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", {
        className: "jsx-1607256993"
      }, "@mdo")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tr", {
        className: "jsx-1607256993"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("th", {
        scope: "row",
        className: "jsx-1607256993"
      }, "2"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", {
        className: "jsx-1607256993"
      }, "Jacob"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", {
        className: "jsx-1607256993"
      }, "Thornton"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", {
        className: "jsx-1607256993"
      }, "@fat")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tr", {
        className: "jsx-1607256993"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("th", {
        scope: "row",
        className: "jsx-1607256993"
      }, "3"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", {
        className: "jsx-1607256993"
      }, "Larry"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", {
        className: "jsx-1607256993"
      }, "the Bird"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", {
        className: "jsx-1607256993"
      }, "@twitter")))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "1607256993"
      }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdW5uYW1lZC9TOC1zdGFnZS90b3VyaXNtLWRhc2hib2FyZC9wYWdlcy9zdGF0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRm9CIiwiZmlsZSI6Ii9Vc2Vycy9xdW5uYW1lZC9TOC1zdGFnZS90b3VyaXNtLWRhc2hib2FyZC9wYWdlcy9zdGF0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICAvLyBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL0JNL3N0YXRzL2ZyYW5jZS9naXJvbmRlJyk7XG4gICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgIC8vIHJldHVybiB7XG4gICAgLy8gICBkYXRhOiByZXNwb25zZS5kYXRhXG4gICAgLy8gfVxuXG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIFwiMjAxMFwiOiB7XG4gICAgICAgIFwieWVhclwiOiAyMDEwLFxuICAgICAgICBcInVzZXJzXCI6IFwiMTIgOTI5XCIsXG4gICAgICAgIFwiP1wiOiAwLFxuICAgICAgICBcInJldmlld3NcIjogXCI0MiA2ODdcIixcbiAgICAgICAgXCJGcmFuY2VcIjogXCI0IDA2NlwiLFxuICAgICAgICBcIkdpcm9uZGVcIjogXCIyIDI4MFwiXG4gICAgICB9LFxuICAgICAgXCIyMDExXCI6IHtcbiAgICAgICAgXCJ5ZWFyXCI6IDIwMTEsXG4gICAgICAgIFwidXNlcnNcIjogXCIyNCAwODRcIixcbiAgICAgICAgXCI/XCI6IDAsXG4gICAgICAgIFwicmV2aWV3c1wiOiBcIjExMiAzNThcIixcbiAgICAgICAgXCJGcmFuY2VcIjogXCI4IDczMFwiLFxuICAgICAgICBcIkdpcm9uZGVcIjogXCI2IDQ3NVwiXG4gICAgICB9LFxuICAgICAgXCIyMDEyXCI6IHtcbiAgICAgICAgXCJ5ZWFyXCI6IDIwMTIsXG4gICAgICAgIFwidXNlcnNcIjogXCI0MCA5MTNcIixcbiAgICAgICAgXCI/XCI6IDAsXG4gICAgICAgIFwicmV2aWV3c1wiOiBcIjMwMCA5MDBcIixcbiAgICAgICAgXCJGcmFuY2VcIjogXCIxNiAwMjVcIixcbiAgICAgICAgXCJHaXJvbmRlXCI6IFwiMTYgNTM1XCJcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgZGF0YTogZGF0YVxuICAgIH1cblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZCB0aXRsZT1cIlN0YXRzXCIgLz5cbiAgICAgICAgPGgxPnt0aGlzLnByb3BzLmRhdGFbJzIwMTAnXS55ZWFyfTwvaDE+XG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+WWVhcjwvdGg+XG4gICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPiMgVXNlcnM8L3RoPlxuICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj4jIEZyZW5jaDwvdGg+XG4gICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPiMgUmV2aWV3czwvdGg+XG4gICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPiMgR2lyb25kZSdzIHJldmlld3M8L3RoPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5wcm9wcy5kYXRhKS5mb3JFYWNoKGtleSA9PiBcbiAgICAgICAgICAgICAgICA8cD57dGhpcy5wcm9wcy5kYXRhW2tleV19PC9wPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPjE8L3RoPlxuICAgICAgICAgICAgICA8dGQ+TWFyazwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD5PdHRvPC90ZD5cbiAgICAgICAgICAgICAgPHRkPkBtZG88L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRoIHNjb3BlPVwicm93XCI+MjwvdGg+XG4gICAgICAgICAgICAgIDx0ZD5KYWNvYjwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD5UaG9ybnRvbjwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD5AZmF0PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPjM8L3RoPlxuICAgICAgICAgICAgICA8dGQ+TGFycnk8L3RkPlxuICAgICAgICAgICAgICA8dGQ+dGhlIEJpcmQ8L3RkPlxuICAgICAgICAgICAgICA8dGQ+QHR3aXR0ZXI8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgIFxuICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG59Il19 */\n/*@ sourceURL=/Users/qunnamed/S8-stage/tourism-dashboard/pages/stats.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var data;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // const response = await axios.get('http://localhost:3000/BM/stats/france/gironde');
                // console.log(response);
                // return {
                //   data: response.data
                // }
                data = {
                  "2010": {
                    "year": 2010,
                    "users": "12 929",
                    "?": 0,
                    "reviews": "42 687",
                    "France": "4 066",
                    "Gironde": "2 280"
                  },
                  "2011": {
                    "year": 2011,
                    "users": "24 084",
                    "?": 0,
                    "reviews": "112 358",
                    "France": "8 730",
                    "Gironde": "6 475"
                  },
                  "2012": {
                    "year": 2012,
                    "users": "40 913",
                    "?": 0,
                    "reviews": "300 900",
                    "France": "16 025",
                    "Gironde": "16 535"
                  }
                };
                return _context.abrupt("return", {
                  data: data
                });

              case 2:
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
//# sourceMappingURL=stats.js.144c62b0cff2098cc0f2.hot-update.js.map