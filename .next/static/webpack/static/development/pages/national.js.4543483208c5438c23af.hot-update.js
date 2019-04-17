webpackHotUpdate("static/development/pages/national.js",{

/***/ "./components/going-chart.js":
/*!***********************************!*\
  !*** ./components/going-chart.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GoingChart; });
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
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var _utils_colors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/colors */ "./utils/colors.js");
/* harmony import */ var _utils_colors__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_utils_colors__WEBPACK_IMPORTED_MODULE_10__);











var options = {
  datasetFill: true,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      gridLines: {
        color: "rgba(0, 0, 0, 0)"
      },
      ticks: {
        stepSize: 50
      }
    }],
    yAxes: [{
      ticks: {
        beginAtZero: true,
        callback: function callback(value, index, values) {
          return value + "%";
        },
        stepSize: 2
      }
    }]
  }
};

var GoingChart =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(GoingChart, _React$Component);

  function GoingChart(_props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, GoingChart);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(GoingChart).call(this, _props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "chartData", function (props) {
      _this.data.labels = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(props.evolution).map(function (key) {
        return key;
      });
      _this.data.datasets[0].data = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(props.evolution).map(function (key) {
        return props.evolution[key][props.year]['Ingoing'];
      });
      _this.data.datasets[1].data = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(props.evolution).map(function (key) {
        return props.evolution[key][props.year]['Outgoing'];
      });
      var colors = orderColors(_this.data.labels);
      _this.data.datasets[0].backgroundColor = colors.ingoing;
      _this.data.datasets[0].borderColor = colors.ingoing;
      _this.data.datasets[1].backgroundColor = colors.outgoing;
      _this.data.datasets[1].borderColor = colors.outgoing;
    });

    _this.data = {
      labels: '',
      datasets: [{
        label: 'Ingoing',
        borderWidth: 1
      }, {
        label: 'Outgoing',
        borderWidth: 1
      }]
    };

    _this.chartData(_props);

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(GoingChart, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.chartData(nextProps);
    }
  }, {
    key: "render",
    value: function render() {
      // this
      // Object.keys(this.props.evolution).forEach((key, i) => {
      //   // console.log(this.props.evolution[key][this.props.year])
      //   // console.log(i, this.props.evolution[key])
      //   // if(i == 1) return props.evolution[year]['Ingoing']
      // });
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_9__["Bar"], {
        data: this.data,
        width: 100,
        height: 20,
        options: options
      }));
    }
  }]);

  return GoingChart;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



function orderColors(names) {
  var alpha = "0.3";
  var ingoing = [],
      outgoing = [];

  for (var i = 0; i < names.length; i++) {
    ingoing.push(_utils_colors__WEBPACK_IMPORTED_MODULE_10__["selectedColors"][names[i]]);
    outgoing.push(_utils_colors__WEBPACK_IMPORTED_MODULE_10__["selectedColors"][names[i]].replace('rgb', 'rgba').replace(')', ',' + alpha + ')'));
  }

  ;
  return {
    ingoing: ingoing,
    outgoing: outgoing
  };
}

/***/ })

})
//# sourceMappingURL=national.js.4543483208c5438c23af.hot-update.js.map