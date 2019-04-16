webpackHotUpdate("static/development/pages/national.js",{

/***/ "./components/diff-table.js":
/*!**********************************!*\
  !*** ./components/diff-table.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DiffTable; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);








var DiffTable =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(DiffTable, _React$Component);

  function DiffTable(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, DiffTable);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(DiffTable).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(DiffTable, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", null, this.props.var, " evolution"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("table", {
        style: {
          fontSize: 'small'
        },
        className: "table"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", {
        scope: "col"
      }), _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(this.props.evolution).map(function (value) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", {
          key: "head-".concat(value)
        }, value);
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tbody", null, [this.props.year, this.props.year - 1, 'diff'].map(function (rowVar) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("th", {
          key: "body-".concat(rowVar),
          scope: "row"
        }, rowVar), _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(_this.props.evolution).map(function (year) {
          var value = _this.props.evolution[year][rowVar][_this.props.var];

          if (rowVar == 'diff') {
            value = value > 0 ? "+".concat(value, "%") : "".concat(value, "%");
            return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", {
              key: "body-td-".concat(value),
              style: {
                fontWeight: "bold"
              }
            }, value);
          } else return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("td", null, value);
        }));
      }))));
    }
  }]);

  return DiffTable;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=national.js.ad2508e03603aa327935.hot-update.js.map