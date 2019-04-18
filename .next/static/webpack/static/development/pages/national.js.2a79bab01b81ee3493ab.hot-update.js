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
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/head */ "./components/head.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_going_chart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/going-chart */ "./components/going-chart.js");
/* harmony import */ var _components_diff_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/diff-table */ "./components/diff-table.js");
/* harmony import */ var _components_month_chart__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/month-chart */ "./components/month-chart.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/menu */ "./components/menu.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _utils_colors__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../utils/colors */ "./utils/colors.js");
/* harmony import */ var _utils_colors__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_utils_colors__WEBPACK_IMPORTED_MODULE_21__);























var National =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(National, _React$Component);

  function National(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, National);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(National).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "topYear", [{
      value: 2014,
      label: '2014'
    }, {
      value: 2015,
      label: '2015'
    }, {
      value: 2016,
      label: '2016'
    }]);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "state", {
      selectedYear: {
        value: _this.props.year,
        label: _this.props.year
      },
      data: _this.props.data,
      info: {
        topCountries: _this.props.info.topCountries.map(function (el) {
          return {
            value: el,
            label: el
          };
        }),
        topRegions: _this.props.info.topRegions.map(function (el) {
          return {
            value: el,
            label: el
          };
        }),
        topAges: _this.props.info.topAges.map(function (el) {
          return {
            value: el,
            label: el
          };
        })
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "axiosProgress", function (url) {
      console.log('%c' + url, 'color: blue');
      ;
      nprogress__WEBPACK_IMPORTED_MODULE_18___default.a.start();
      return axios__WEBPACK_IMPORTED_MODULE_12___default.a.get(url).then(function (res) {
        return res;
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleYearChange",
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(selectedYear) {
        var res, info;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.axiosProgress("http://localhost:3000/BM/national/".concat(selectedYear.value, "/"));

              case 2:
                res = _context.sent;
                _context.next = 5;
                return axios__WEBPACK_IMPORTED_MODULE_12___default.a.get("http://localhost:3000/BM/national/".concat(selectedYear.value, "/info"));

              case 5:
                info = _context.sent;

                _this.setState({
                  data: res.data,
                  selectedYear: selectedYear,
                  info: {
                    topCountries: info.data.topCountries.map(function (el) {
                      return {
                        value: el,
                        label: el
                      };
                    }),
                    topRegions: info.data.topRegions.map(function (el) {
                      return {
                        value: el,
                        label: el
                      };
                    }),
                    topAges: info.data.topAges.map(function (el) {
                      return {
                        value: el,
                        label: el
                      };
                    })
                  }
                });

                _this.selected = JSON.parse(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(_this.state.info));
                nprogress__WEBPACK_IMPORTED_MODULE_18___default.a.done();

              case 9:
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleCountriesChange",
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(newValue, actionMeta) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this.selected.topCountries = newValue;

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2, _x3) {
        return _ref2.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleRegionsChange",
    /*#__PURE__*/
    function () {
      var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(newValue, actionMeta) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this.selected.topRegions = newValue;

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x4, _x5) {
        return _ref3.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleAgesRange",
    /*#__PURE__*/
    function () {
      var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(newValue, actionMeta) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this.selected.topAges = newValue || {
                  value: "-",
                  label: '-'
                };
                console.log(_this.selected.topAges);

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x6, _x7) {
        return _ref4.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleSubmit",
    /*#__PURE__*/
    function () {
      var _ref5 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(event) {
        var res;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                event.preventDefault();
                _context5.next = 3;
                return _this.axiosProgress("http://localhost:3000/BM/national/".concat(_this.state.selectedYear.value, "/?      countries=").concat(_this.selected.topCountries.map(function (el) {
                  return el.value;
                }).join(), "&      regions=").concat(_this.selected.topRegions.map(function (el) {
                  return el.value;
                }).join(), "&      ages=").concat(_this.selected.topAges.value).replace(/ /g, ""));

              case 3:
                res = _context5.sent;

                _this.setState({
                  data: res.data
                });

                nprogress__WEBPACK_IMPORTED_MODULE_18___default.a.done();

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x8) {
        return _ref5.apply(this, arguments);
      };
    }());

    _this.handleYearChange = _this.handleYearChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.selected = JSON.parse(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(_this.state.info));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(National, [{
    key: "render",
    value: function render() {
      var selectedYear = this.state.selectedYear;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "col"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "col-md-11"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_19__["Nav"], {
        className: "justify-content-center"
      }, this.topYear.map(function (_ref6) {
        var value = _ref6.value,
            label = _ref6.label;
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_19__["NavItem"], {
          key: "nav-navitem-".concat(label)
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_20___default.a, {
          key: "nav-navitem-link".concat(label),
          href: "/".concat(value)
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
          className: "nav-link"
        }, label, " ")));
      })))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_menu__WEBPACK_IMPORTED_MODULE_16__["default"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("form", {
        onSubmit: this.handleSubmit.bind(this)
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "form-group row"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
        className: "col-md-1 col-form-label"
      }, "Countries"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "col-md-11"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_17__["default"], {
        key: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(this.state.info.topCountries),
        defaultValue: this.state.info.topCountries,
        isSearchable: true,
        isClearable: true,
        isMulti: true,
        name: "countries",
        closeMenuOnSelect: false,
        options: this.state.info.topCountries,
        className: "basic-multi-select",
        classNamePrefix: "select",
        placeholder: "Select..",
        onChange: this.handleCountriesChange
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "form-group row"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
        className: "col-md-1 col-form-label"
      }, "Regions"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "col-md-11"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_17__["default"], {
        key: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(this.state.info.topRegions),
        defaultValue: this.state.info.topRegions,
        isMulti: true,
        isClearable: true,
        isSearchable: true,
        name: "regions",
        closeMenuOnSelect: false,
        options: this.state.info.topRegions,
        className: "basic-multi-select",
        classNamePrefix: "select",
        onChange: this.handleRegionsChange
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "form-group row"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
        className: "col-md-1 col-form-label  ml-auto"
      }, "Ages"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "col-md-2"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_17__["default"], {
        key: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(this.state.info.topAges),
        defaultValue: [this.state.info.topAges[0]],
        isClearable: true,
        name: "ages",
        options: this.state.info.topAges,
        className: "basic-multi-select",
        classNamePrefix: "select",
        onChange: this.handleAgesRange
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "col-auto"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
        type: "submit",
        className: "btn btn-outline-primary"
      }, "Update"))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_head__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: "National"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1", null, "National"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_going_chart__WEBPACK_IMPORTED_MODULE_13__["default"], {
        evolution: this.state.data['Evolution'],
        year: this.state.selectedYear['value'],
        colors: _utils_colors__WEBPACK_IMPORTED_MODULE_21__["nationalSelectedColors"]
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_diff_table__WEBPACK_IMPORTED_MODULE_14__["default"], {
        evolution: this.state.data['Evolution'],
        year: this.state.selectedYear['value'],
        var: "Ingoing"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_diff_table__WEBPACK_IMPORTED_MODULE_14__["default"], {
        evolution: this.state.data['Evolution'],
        year: this.state.selectedYear['value'],
        var: "Outgoing"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_month_chart__WEBPACK_IMPORTED_MODULE_15__["default"], {
        height: "200",
        evolution: this.state.data['Monthly'],
        var: "Ingoing",
        colors: _utils_colors__WEBPACK_IMPORTED_MODULE_21__["nationalSelectedColors"]
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_month_chart__WEBPACK_IMPORTED_MODULE_15__["default"], {
        height: "200",
        evolution: this.state.data['Monthly'],
        var: "Outgoing",
        colors: _utils_colors__WEBPACK_IMPORTED_MODULE_21__["nationalSelectedColors"]
      }))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(_ref7) {
        var req, year, response, info;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                req = _ref7.req;
                year = Number(req.params.year) || 2016;
                _context6.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_12___default.a.get("http://localhost:3000/BM/national/".concat(year, "/?countries=Belgium,France"));

              case 4:
                response = _context6.sent;
                _context6.next = 7;
                return axios__WEBPACK_IMPORTED_MODULE_12___default.a.get("http://localhost:3000/BM/national/".concat(year, "/info/?limit=10"));

              case 7:
                info = _context6.sent;
                return _context6.abrupt("return", {
                  data: response.data,
                  info: info.data,
                  year: year
                });

              case 9:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function getInitialProps(_x9) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return National;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);



/***/ })

})
//# sourceMappingURL=national.js.2a79bab01b81ee3493ab.hot-update.js.map