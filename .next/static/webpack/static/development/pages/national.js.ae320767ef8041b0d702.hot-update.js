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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);










var DiffTable =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(DiffTable, _React$Component);

  function DiffTable(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, DiffTable);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(DiffTable).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "createHead", function () {
      var length = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(_this.props.evolution).length;

      var table = [];
      var children = [];

      _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(_this.props.evolution).forEach(function (value, i) {
        if (i % Math.ceil(length / 2) == 0 && i != 0) {
          table.push(react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("th", {
            scope: "col"
          }), children));
          children = [];
        }

        children.push(react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("th", {
          key: "head-".concat(value)
        }, value));
        if (i == length - 1) table.push(react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("th", {
          scope: "col"
        }), children));
      });

      return table;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "createBody", function () {
      var length = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(_this.props.evolution).length;

      var table = [];
      var children = [];

      _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(_this.props.evolution).forEach(function (year, i) {
        {
          [_this.props.year, _this.props.year - 1, 'diff'].map(function (rowVar) {
            if (i % Math.ceil(length / 2) == 0 && i != 0) {
              table.push(react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tr", {
                key: "body-tr-".concat(rowVar)
              }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("th", {
                key: "body-th-".concat(rowVar),
                scope: "row"
              }, rowVar), children));
              children = [];
            }

            var value = _this.props.evolution[year][rowVar][_this.props.var];

            if (rowVar == 'diff') {
              children.push(react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
                key: "body-td-".concat(value, "-").concat(year),
                style: {
                  fontWeight: "bold",
                  color: value > 0 ? 'LimeGreen	' : 'red'
                }
              }, value > 0 ? "+".concat(value, "%") : "".concat(value, "%")));
            } else children.push(react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
              key: "body-td-".concat(value, "-").concat(year)
            }, value));

            if (i = length - 1) {
              table.push(react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tr", {
                key: "body-tr-".concat(rowVar)
              }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("th", {
                key: "body-th-".concat(rowVar),
                scope: "row"
              }, rowVar), children));
            }
          });
        }
      });

      return table;
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(DiffTable, [{
    key: "render",
    value: function render() {
      var length = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(this.props.evolution).length;

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("table", {
        style: {
          fontSize: 'small'
        },
        className: "table"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("thead", null, this.createHead()), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tbody", null, this.createBody())));
    }
  }]);

  return DiffTable;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=national.js.ae320767ef8041b0d702.hot-update.js.map