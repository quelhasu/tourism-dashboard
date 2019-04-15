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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/head */ "./components/head.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_going_chart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/going-chart */ "./components/going-chart.js");
/* harmony import */ var _components_diff_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/diff-table */ "./components/diff-table.js");
/* harmony import */ var _components_month_chart__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/month-chart */ "./components/month-chart.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/menu */ "./components/menu.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_17__);



















var National =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(National, _React$Component);

  function National(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, National);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(National).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "topYear", [{
      value: 2014,
      label: '2014'
    }, {
      value: 2015,
      label: '2015'
    }, {
      value: 2016,
      label: '2016'
    }]);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "axiosProgress", function (url) {
      nprogress__WEBPACK_IMPORTED_MODULE_17___default.a.start();
      return axios__WEBPACK_IMPORTED_MODULE_11___default.a.get(url).then(function (res) {
        nprogress__WEBPACK_IMPORTED_MODULE_17___default.a.done();
        return res;
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleYearChange",
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(selectedYear) {
        var res;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.axiosProgress('http://localhost:3000/BM/national/' + selectedYear.value + '/?countries=Belgium,France');

              case 2:
                res = _context.sent;

                _this.setState({
                  data: res.data,
                  selectedYear: selectedYear
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _this.handleYearChange = _this.handleYearChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.state = {
      selectedYear: {
        value: 2016,
        label: '2016'
      },
      data: props.data
    };
    _this.topCountries = props.info.topCountries.map(function (el) {
      return {
        value: el,
        label: el
      };
    });
    _this.topRegions = props.info.topRegions.map(function (el) {
      return {
        value: el,
        label: el
      };
    });
    _this.topAges = props.info.topAges.map(function (el) {
      return {
        value: el,
        label: el
      };
    });
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(National, [{
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      var selectedYear = this.state.selectedYear;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_menu__WEBPACK_IMPORTED_MODULE_15__["default"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("form", {
        onSubmit: this.handleSubmit.bind(this)
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h1", null, "Menu"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "form-group row"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col-md-2"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_16__["default"], {
        value: selectedYear,
        onChange: this.handleYearChange,
        options: this.topYear
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col-md-8"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_16__["default"], {
        defaultValue: this.topCountries,
        isMulti: true,
        name: "colors",
        options: this.topCountries,
        className: "basic-multi-select",
        classNamePrefix: "select countries"
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "form-group row"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col-md-2"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_16__["default"], {
        defaultValue: [this.topAges[0]],
        isMulti: true,
        name: "colors",
        options: this.topAges,
        className: "basic-multi-select",
        classNamePrefix: "select countries"
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col-md-8"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_16__["default"], {
        defaultValue: this.topRegions,
        isMulti: true,
        name: "colors",
        options: this.topRegions,
        className: "basic-multi-select",
        classNamePrefix: "select countries"
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
        type: "submit",
        class: "btn btn-primary"
      }, "Update"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_head__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "National"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h1", null, "National"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_going_chart__WEBPACK_IMPORTED_MODULE_12__["default"], {
        evolution: this.state.data['Evolution'],
        year: this.state.selectedYear['value']
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_diff_table__WEBPACK_IMPORTED_MODULE_13__["default"], {
        evolution: this.state.data['Evolution'],
        year: this.state.selectedYear['value'],
        var: "Ingoing"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_diff_table__WEBPACK_IMPORTED_MODULE_13__["default"], {
        evolution: this.state.data['Evolution'],
        year: this.state.selectedYear['value'],
        var: "Outgoing"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_month_chart__WEBPACK_IMPORTED_MODULE_14__["default"], {
        evolution: this.state.data['Monthly'],
        var: "Ingoing"
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_month_chart__WEBPACK_IMPORTED_MODULE_14__["default"], {
        evolution: this.state.data['Monthly'],
        var: "Outgoing"
      }))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var response, info;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_11___default.a.get('http://localhost:3000/BM/national/2016/?countries=Belgium,France');

              case 2:
                response = _context2.sent;
                _context2.next = 5;
                return axios__WEBPACK_IMPORTED_MODULE_11___default.a.get('http://localhost:3000/BM/national/2016/info');

              case 5:
                info = _context2.sent;
                return _context2.abrupt("return", {
                  data: response.data,
                  info: info.data
                });

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return National;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);



/***/ })

})
//# sourceMappingURL=national.js.f5efbdcd727fdd9a246a.hot-update.js.map