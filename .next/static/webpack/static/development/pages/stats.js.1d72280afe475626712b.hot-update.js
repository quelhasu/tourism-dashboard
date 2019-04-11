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












var Stats =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Stats, _React$Component);

  function Stats(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Stats);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Stats).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Stats, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1607256993"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_head__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "Stats"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-1607256993"
      }, this.props.data['2010'].year), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.fetchData,
        className: "jsx-1607256993"
      }, "Fetch Data"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1607256993"
      }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdW5uYW1lZC9TOC1zdGFnZS90b3VyaXNtLWRhc2hib2FyZC9wYWdlcy9zdGF0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RG9CIiwiZmlsZSI6Ii9Vc2Vycy9xdW5uYW1lZC9TOC1zdGFnZS90b3VyaXNtLWRhc2hib2FyZC9wYWdlcy9zdGF0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICAvLyBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL0JNL3N0YXRzL2ZyYW5jZS9naXJvbmRlJyk7XG4gICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgIC8vIHJldHVybiB7XG4gICAgLy8gICBkYXRhOiByZXNwb25zZS5kYXRhXG4gICAgLy8gfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGEgOiB7XG4gICAgICAgIFwiMjAxMFwiOiB7XG4gICAgICAgICAgXCJ5ZWFyXCI6IDIwMTAsXG4gICAgICAgICAgXCJ1c2Vyc1wiOiBcIjEyIDkyOVwiLFxuICAgICAgICAgIFwiP1wiOiAwLFxuICAgICAgICAgIFwicmV2aWV3c1wiOiBcIjQyIDY4N1wiLFxuICAgICAgICAgIFwiRnJhbmNlXCI6IFwiNCAwNjZcIixcbiAgICAgICAgICBcIkdpcm9uZGVcIjogXCIyIDI4MFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiMjAxMVwiOiB7XG4gICAgICAgICAgXCJ5ZWFyXCI6IDIwMTEsXG4gICAgICAgICAgXCJ1c2Vyc1wiOiBcIjI0IDA4NFwiLFxuICAgICAgICAgIFwiP1wiOiAwLFxuICAgICAgICAgIFwicmV2aWV3c1wiOiBcIjExMiAzNThcIixcbiAgICAgICAgICBcIkZyYW5jZVwiOiBcIjggNzMwXCIsXG4gICAgICAgICAgXCJHaXJvbmRlXCI6IFwiNiA0NzVcIlxuICAgICAgICB9LFxuICAgICAgICBcIjIwMTJcIjoge1xuICAgICAgICAgIFwieWVhclwiOiAyMDEyLFxuICAgICAgICAgIFwidXNlcnNcIjogXCI0MCA5MTNcIixcbiAgICAgICAgICBcIj9cIjogMCxcbiAgICAgICAgICBcInJldmlld3NcIjogXCIzMDAgOTAwXCIsXG4gICAgICAgICAgXCJGcmFuY2VcIjogXCIxNiAwMjVcIixcbiAgICAgICAgICBcIkdpcm9uZGVcIjogXCIxNiA1MzVcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkIHRpdGxlPVwiU3RhdHNcIiAvPlxuICAgICAgICA8aDE+e3RoaXMucHJvcHMuZGF0YVsnMjAxMCddLnllYXJ9PC9oMT5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmZldGNoRGF0YX0+XG4gICAgICAgICAgRmV0Y2ggRGF0YVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgIFxuICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG59Il19 */\n/*@ sourceURL=/Users/qunnamed/S8-stage/tourism-dashboard/pages/stats.js */"));
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

  return Stats;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=stats.js.1d72280afe475626712b.hot-update.js.map