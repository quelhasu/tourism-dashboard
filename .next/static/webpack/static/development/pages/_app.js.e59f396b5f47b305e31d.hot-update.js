webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_sidebar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-sidebar */ "./node_modules/react-sidebar/dist/react-sidebar.esm.js");










var navbarLogoStyle = {
  height: 35,
  marginRight: 10,
  marginTop: -5
};
var navbarStyle = {// borderBottom: "0.5px solid #d1d1d1",
  // backgroundColor: "#FFF!important",
  // padding: "1rem 2.5rem",
  // boxShadow: "0px 1px 5px 0px rgba(0,0,0,0.2)"
};
var headerStyle = {// marginBottom: 30
};
var links = [{
  href: 'https://github.com/segmentio/create-next-app',
  label: 'Github',
  icon: 'fab fa-github-alt'
}].map(function (link) {
  link.key = "nav-link-".concat(link.href, "-").concat(link.label);
  return link;
});
var menu = [{
  href: '/stats',
  label: 'Stats',
  icon: ''
}, {
  href: '/national/2016',
  label: 'National',
  icon: ''
}, {
  href: '/international/2016',
  label: 'International',
  icon: ''
}, {
  href: '/grouping/2016/2/gironde',
  label: 'Grouping',
  icon: ''
}].map(function (link) {
  link.key = "menu-link-".concat(link.href, "-").concat(link.label);
  return link;
});

var Navi =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Navi, _React$Component);

  function Navi(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Navi);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Navi).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Navi, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: headerStyle,
        className: "jsx-2721615391"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Navbar"], {
        style: navbarStyle,
        bg: "",
        sticky: "top",
        light: true,
        expand: "md"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "jsx-2721615391" + " " + "navbar-brand"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/81/airplane_2708.png",
        style: navbarLogoStyle,
        className: "jsx-2721615391"
      }), "Tourism")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Nav"], {
        className: "mr-auto",
        navbar: true
      }, menu.map(function (_ref) {
        var key = _ref.key,
            href = _ref.href,
            label = _ref.label,
            icon = _ref.icon;
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavItem"], {
          key: key
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          key: "link-".concat(key),
          href: href
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
          className: "jsx-2721615391" + " " + "nav-link"
        }, label, " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
          className: "jsx-2721615391" + " " + (icon || "")
        }))));
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2721615391"
      }, "body{margin:0;font-family:\"Montserrat\",sans-serif;padding:0;}nav.jsx-2721615391{text-align:center;}ul.jsx-2721615391{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}nav.jsx-2721615391>ul.jsx-2721615391{margin:0;}li.jsx-2721615391{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0 16px 0 0;margin:0;}a.jsx-2721615391{color:#067df7;-webkit-text-decoration:none;text-decoration:none;font-size:14px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VzaWx2L3N0YWdlL3RvdXJpc20tZGFzaGJvYXJkL2NvbXBvbmVudHMvbmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRFb0IsQUFHa0IsQUFPUyxBQUdMLEFBS0osQUFHSSxBQUtDLFNBcEJ1QixBQWF2QyxLQVF1QixJQWhCdkIsMkJBSlksVUFDWixTQW9CaUIsVUFkZSxBQVFYLEtBT3JCLGNBTlcsU0FDWCx1RkFUQSIsImZpbGUiOiIvaG9tZS9lc2lsdi9zdGFnZS90b3VyaXNtLWRhc2hib2FyZC9jb21wb25lbnRzL25hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7XG4gIENvbGxhcHNlLFxuICBOYXZiYXIsXG4gIE5hdmJhclRvZ2dsZXIsXG4gIE5hdmJhckJyYW5kLFxuICBOYXYsXG4gIE5hdkl0ZW0sXG4gIE5hdkxpbmssXG4gIFVuY29udHJvbGxlZERyb3Bkb3duLFxuICBEcm9wZG93blRvZ2dsZSxcbiAgRHJvcGRvd25NZW51LFxuICBEcm9wZG93bkl0ZW1cbn0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCBTaWRlYmFyIGZyb20gXCJyZWFjdC1zaWRlYmFyXCI7XG5cbmNvbnN0IG5hdmJhckxvZ29TdHlsZSA9IHtcbiAgaGVpZ2h0OiAzNSxcbiAgbWFyZ2luUmlnaHQ6IDEwLFxuICBtYXJnaW5Ub3A6IC01XG59XG5cbmNvbnN0IG5hdmJhclN0eWxlID0ge1xuICAvLyBib3JkZXJCb3R0b206IFwiMC41cHggc29saWQgI2QxZDFkMVwiLFxuICAvLyBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGRiFpbXBvcnRhbnRcIixcbiAgLy8gcGFkZGluZzogXCIxcmVtIDIuNXJlbVwiLFxuICAvLyBib3hTaGFkb3c6IFwiMHB4IDFweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4yKVwiXG59XG5cbmNvbnN0IGhlYWRlclN0eWxlID0ge1xuICAvLyBtYXJnaW5Cb3R0b206IDMwXG59O1xuXG5cbmNvbnN0IGxpbmtzID0gW1xuICB7IGhyZWY6ICdodHRwczovL2dpdGh1Yi5jb20vc2VnbWVudGlvL2NyZWF0ZS1uZXh0LWFwcCcsIGxhYmVsOiAnR2l0aHViJywgaWNvbjogJ2ZhYiBmYS1naXRodWItYWx0JyB9LFxuXS5tYXAobGluayA9PiB7XG4gIGxpbmsua2V5ID0gYG5hdi1saW5rLSR7bGluay5ocmVmfS0ke2xpbmsubGFiZWx9YFxuICByZXR1cm4gbGlua1xufSlcblxuY29uc3QgbWVudSA9IFtcbiAgeyBocmVmOiAnL3N0YXRzJywgbGFiZWw6ICdTdGF0cycsIGljb246ICcnIH0sXG4gIHsgaHJlZjogJy9uYXRpb25hbC8yMDE2JywgbGFiZWw6ICdOYXRpb25hbCcsIGljb246ICcnIH0sXG4gIHsgaHJlZjogJy9pbnRlcm5hdGlvbmFsLzIwMTYnLCBsYWJlbDogJ0ludGVybmF0aW9uYWwnLCBpY29uOiAnJyB9LFxuICB7IGhyZWY6ICcvZ3JvdXBpbmcvMjAxNi8yL2dpcm9uZGUnLCBsYWJlbDogJ0dyb3VwaW5nJywgaWNvbjogJycgfVxuXS5tYXAobGluayA9PiB7XG4gIGxpbmsua2V5ID0gYG1lbnUtbGluay0ke2xpbmsuaHJlZn0tJHtsaW5rLmxhYmVsfWBcbiAgcmV0dXJuIGxpbmtcbn0pXG5cbmNsYXNzIE5hdmkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17aGVhZGVyU3R5bGV9PlxuICAgICAgICA8TmF2YmFyIHN0eWxlPXtuYXZiYXJTdHlsZX0gYmc9XCJcIiBzdGlja3k9XCJ0b3BcIiBsaWdodCBleHBhbmQ9XCJtZFwiPlxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2Vtb2ppcGVkaWEtdXMuczMuZHVhbHN0YWNrLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3RodW1icy8xNjAvYXBwbGUvODEvYWlycGxhbmVfMjcwOC5wbmdcIiBzdHlsZT17bmF2YmFyTG9nb1N0eWxlfSAvPlxuICAgICAgICAgIFRvdXJpc21cbiAgICAgICAgPC9hPlxuICAgICAgPC9MaW5rPlxuICAgICAgPE5hdiBjbGFzc05hbWU9XCJtci1hdXRvXCIgbmF2YmFyPlxuICAgICAgICB7bWVudS5tYXAoKHsga2V5LCBocmVmLCBsYWJlbCwgaWNvbiB9KSA9PiAoXG4gICAgICAgICAgPE5hdkl0ZW0ga2V5PXtrZXl9PlxuICAgICAgICAgICAgPExpbmsga2V5PXtgbGluay0ke2tleX1gfSBocmVmPXtocmVmfT48YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPntsYWJlbH0gPGkgY2xhc3NOYW1lPXtpY29ufT48L2k+PC9hPjwvTGluaz5cbiAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICkpfVxuICAgICAgPC9OYXY+XG4gICAgPC9OYXZiYXI+XG4gICAgICAgIFxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICA6Z2xvYmFsKGJvZHkpIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAvLyBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBBdmVuaXIgTmV4dCwgQXZlbmlyLFxuICAgICAgICAvLyAgIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuICAgICAgbmF2IHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgICAgdWwge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICB9XG4gICAgICBuYXYgPiB1bCB7XG4gICAgICAgIC8vIHBhZGRpbmc6IDE2cHggNXB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgICBsaSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBhZGRpbmc6IDAgMTZweCAwIDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogIzA2N2RmNztcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuXG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2aVxuIl19 */\n/*@ sourceURL=/home/esilv/stage/tourism-dashboard/components/nav.js */"));
    }
  }]);

  return Navi;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Navi);

/***/ })

})
//# sourceMappingURL=_app.js.e59f396b5f47b305e31d.hot-update.js.map