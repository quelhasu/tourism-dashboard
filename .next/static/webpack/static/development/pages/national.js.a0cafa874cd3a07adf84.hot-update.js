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
      }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdW5uYW1lZC9TOC1zdGFnZS90b3VyaXNtLWRhc2hib2FyZC9wYWdlcy9uYXRpb25hbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RG9CIiwiZmlsZSI6Ii9Vc2Vycy9xdW5uYW1lZC9TOC1zdGFnZS90b3VyaXNtLWRhc2hib2FyZC9wYWdlcy9uYXRpb25hbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBIZWFkIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZCdcbi8vIGltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBOUHJvZ3Jlc3Muc3RhcnQoKTtcbiAgICAvLyBOUHJvZ3Jlc3MuY29uZmlndXJlKHsgZWFzaW5nOiAnZWFzZScsIHNwZWVkOiA1MDAgfSk7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzICgpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL0JNL25hdGlvbmFsLzIwMTYvaW5mbycpXG4gICAgcmV0dXJuIHt9XG4gIH1cblxuICAvLyBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xuICAvLyAgIGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL0JNL25hdGlvbmFsLzIwMTYvaW5mbycpXG4gIC8vICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gIC8vICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gIC8vICAgICByZXR1cm4ge1xuICAvLyAgICAgICBjb250ZW50OiByZXNwb25zZSxcbiAgLy8gICAgICAgbG9hZGVkOiB0cnVlXG4gIC8vICAgICB9XG4gIC8vICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gIC8vICAgfSlcbiAgLy8gICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gIC8vICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIC8vICAgfSk7XG4gIC8vICAgLy8gcHJvZ3Jlc3NBeGlvcygnaHR0cDovL2xvY2FsaG9zdDozMDAwL0JNL25hdGlvbmFsLzIwMTYvaW5mbycpXG4gIC8vICAgLy8gICAudGhlbihyZXNwPT57XG4gIC8vICAgLy8gICAgIGNvbnNvbGUubG9nKHJlc3ApO1xuICAvLyAgIC8vICAgfSlcblxuICAvLyAgIC8vIGNvbnNvbGUubG9nKGBTaG93IGRhdGEgZmV0Y2hlZC4gQ291bnQ6ICR7ZGF0YS5sZW5ndGh9YCk7XG5cbiAgLy8gICByZXR1cm4ge1xuICAvLyAgICAgaGVsbG86IFwiaGVsbG9cIlxuICAvLyAgIH07XG4gIC8vIH1cblxuICAvLyBmZXRjaERhdGEoKSB7XG4gIC8vIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHsvKiA8SGVhZCB0aXRsZT1cIk5hdGlvbmFsXCIgLz4gKi99XG4gICAgICAgIHsvKiA8TGF5b3V0PiAqL31cbiAgICAgICAgICA8aDE+SGVsbG88L2gxPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5mZXRjaERhdGF9PlxuICAgICAgICAgICAgRmV0Y2ggRGF0YVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICB7LyogPC9MYXlvdXQ+ICovfVxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgXG4gICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbn0iXX0= */\n/*@ sourceURL=/Users/qunnamed/S8-stage/tourism-dashboard/pages/national.js */"));
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
//# sourceMappingURL=national.js.a0cafa874cd3a07adf84.hot-update.js.map