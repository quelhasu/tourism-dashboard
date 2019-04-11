webpackHotUpdate("static/development/pages/national.js",{

/***/ "./pages/national.js":
/*!***************************!*\
  !*** ./pages/national.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);









// import Head from '../components/head'
// import Layout from '../components/layout'



var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Index, _React$Component);

  function Index(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Index).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {// NProgress.start();
      // NProgress.configure({ easing: 'ease', speed: 500 });
    }
  }, {
    key: "render",
    // static async getInitialProps() {
    //   axios.get('http://localhost:3000/BM/national/2016/info')
    //   .then(function (response) {
    //     console.log(response);
    //     return {
    //       content: response,
    //       loaded: true
    //     }
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    //   // progressAxios('http://localhost:3000/BM/national/2016/info')
    //   //   .then(resp=>{
    //   //     console.log(resp);
    //   //   })
    //   // console.log(`Show data fetched. Count: ${data.length}`);
    //   return {
    //     hello: "hello"
    //   };
    // }
    // fetchData() {
    // }
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1607256993"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-1607256993"
      }, "Hello"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.fetchData,
        className: "jsx-1607256993"
      }, "Fetch Data"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1607256993"
      }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdW5uYW1lZC9TOC1zdGFnZS90b3VyaXNtLWRhc2hib2FyZC9wYWdlcy9uYXRpb25hbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RG9CIiwiZmlsZSI6Ii9Vc2Vycy9xdW5uYW1lZC9TOC1zdGFnZS90b3VyaXNtLWRhc2hib2FyZC9wYWdlcy9uYXRpb25hbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBIZWFkIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZCdcbi8vIGltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBOUHJvZ3Jlc3Muc3RhcnQoKTtcbiAgICAvLyBOUHJvZ3Jlc3MuY29uZmlndXJlKHsgZWFzaW5nOiAnZWFzZScsIHNwZWVkOiA1MDAgfSk7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzICgpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL0JNL25hdGlvbmFsLzIwMTYvaW5mbycpO1xuICAgIHJldHVybiB7fVxuICB9XG5cbiAgLy8gc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgLy8gICBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9CTS9uYXRpb25hbC8yMDE2L2luZm8nKVxuICAvLyAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAvLyAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAvLyAgICAgcmV0dXJuIHtcbiAgLy8gICAgICAgY29udGVudDogcmVzcG9uc2UsXG4gIC8vICAgICAgIGxvYWRlZDogdHJ1ZVxuICAvLyAgICAgfVxuICAvLyAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAvLyAgIH0pXG4gIC8vICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAvLyAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAvLyAgIH0pO1xuICAvLyAgIC8vIHByb2dyZXNzQXhpb3MoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9CTS9uYXRpb25hbC8yMDE2L2luZm8nKVxuICAvLyAgIC8vICAgLnRoZW4ocmVzcD0+e1xuICAvLyAgIC8vICAgICBjb25zb2xlLmxvZyhyZXNwKTtcbiAgLy8gICAvLyAgIH0pXG5cbiAgLy8gICAvLyBjb25zb2xlLmxvZyhgU2hvdyBkYXRhIGZldGNoZWQuIENvdW50OiAke2RhdGEubGVuZ3RofWApO1xuXG4gIC8vICAgcmV0dXJuIHtcbiAgLy8gICAgIGhlbGxvOiBcImhlbGxvXCJcbiAgLy8gICB9O1xuICAvLyB9XG5cbiAgLy8gZmV0Y2hEYXRhKCkge1xuICAvLyB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7LyogPEhlYWQgdGl0bGU9XCJOYXRpb25hbFwiIC8+ICovfVxuICAgICAgICB7LyogPExheW91dD4gKi99XG4gICAgICAgICAgPGgxPkhlbGxvPC9oMT5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuZmV0Y2hEYXRhfT5cbiAgICAgICAgICAgIEZldGNoIERhdGFcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgey8qIDwvTGF5b3V0PiAqL31cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgIFxuICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG59Il19 */\n/*@ sourceURL=/Users/qunnamed/S8-stage/tourism-dashboard/pages/national.js */"));
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
                return axios__WEBPACK_IMPORTED_MODULE_10___default.a.get('http://localhost:3000/BM/national/2016/info');

              case 2:
                response = _context.sent;
                return _context.abrupt("return", {});

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

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=national.js.8cd87e1bc445f6a75205.hot-update.js.map