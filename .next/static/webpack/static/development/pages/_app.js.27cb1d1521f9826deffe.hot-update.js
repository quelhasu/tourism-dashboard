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










var navbarLogoStyle = {// height: 35,
  // marginRight: 10,
  // marginTop: -5
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
    key: "onSetSidebarOpen",
    value: function onSetSidebarOpen(open) {
      this.setState({
        sidebarOpen: open
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: headerStyle,
        className: "jsx-1418008680"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "jsx-1418008680" + " " + "navbar-brand"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/81/airplane_2708.png",
        style: navbarLogoStyle,
        className: "jsx-1418008680"
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
          className: "jsx-1418008680" + " " + "nav-link"
        }, label, " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
          className: "jsx-1418008680" + " " + (icon || "")
        }))));
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1418008680"
      }, "body{margin:0;font-family:\"Montserrat\",sans-serif;}nav.jsx-1418008680{text-align:center;}ul.jsx-1418008680{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}nav.jsx-1418008680>ul.jsx-1418008680{margin:0;}li.jsx-1418008680{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0 16px 0 0;margin:0;}a.jsx-1418008680{color:#067df7;-webkit-text-decoration:none;text-decoration:none;font-size:14px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VzaWx2L3N0YWdlL3RvdXJpc20tZGFzaGJvYXJkL2NvbXBvbmVudHMvbmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtGb0IsQUFHa0IsQUFNUyxBQUdMLEFBS0osQUFHSSxBQUtDLFNBbkJ1QixBQVl2QyxLQVF1QixJQWhCdkIsMkJBSEEsbUJBb0JpQixVQWRlLEFBUVgsS0FPckIsY0FOVyxTQUNYLHVGQVRBIiwiZmlsZSI6Ii9ob21lL2VzaWx2L3N0YWdlL3RvdXJpc20tZGFzaGJvYXJkL2NvbXBvbmVudHMvbmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHtcbiAgQ29sbGFwc2UsXG4gIE5hdmJhcixcbiAgTmF2YmFyVG9nZ2xlcixcbiAgTmF2YmFyQnJhbmQsXG4gIE5hdixcbiAgTmF2SXRlbSxcbiAgTmF2TGluayxcbiAgVW5jb250cm9sbGVkRHJvcGRvd24sXG4gIERyb3Bkb3duVG9nZ2xlLFxuICBEcm9wZG93bk1lbnUsXG4gIERyb3Bkb3duSXRlbVxufSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IFNpZGViYXIgZnJvbSBcInJlYWN0LXNpZGViYXJcIjtcblxuY29uc3QgbmF2YmFyTG9nb1N0eWxlID0ge1xuICAvLyBoZWlnaHQ6IDM1LFxuICAvLyBtYXJnaW5SaWdodDogMTAsXG4gIC8vIG1hcmdpblRvcDogLTVcbn1cblxuY29uc3QgbmF2YmFyU3R5bGUgPSB7XG4gIC8vIGJvcmRlckJvdHRvbTogXCIwLjVweCBzb2xpZCAjZDFkMWQxXCIsXG4gIC8vIGJhY2tncm91bmRDb2xvcjogXCIjRkZGIWltcG9ydGFudFwiLFxuICAvLyBwYWRkaW5nOiBcIjFyZW0gMi41cmVtXCIsXG4gIC8vIGJveFNoYWRvdzogXCIwcHggMXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjIpXCJcbn1cblxuY29uc3QgaGVhZGVyU3R5bGUgPSB7XG4gIC8vIG1hcmdpbkJvdHRvbTogMzBcbn07XG5cblxuY29uc3QgbGlua3MgPSBbXG4gIHsgaHJlZjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zZWdtZW50aW8vY3JlYXRlLW5leHQtYXBwJywgbGFiZWw6ICdHaXRodWInLCBpY29uOiAnZmFiIGZhLWdpdGh1Yi1hbHQnIH0sXG5dLm1hcChsaW5rID0+IHtcbiAgbGluay5rZXkgPSBgbmF2LWxpbmstJHtsaW5rLmhyZWZ9LSR7bGluay5sYWJlbH1gXG4gIHJldHVybiBsaW5rXG59KVxuXG5jb25zdCBtZW51ID0gW1xuICB7IGhyZWY6ICcvc3RhdHMnLCBsYWJlbDogJ1N0YXRzJywgaWNvbjogJycgfSxcbiAgeyBocmVmOiAnL25hdGlvbmFsLzIwMTYnLCBsYWJlbDogJ05hdGlvbmFsJywgaWNvbjogJycgfSxcbiAgeyBocmVmOiAnL2ludGVybmF0aW9uYWwvMjAxNicsIGxhYmVsOiAnSW50ZXJuYXRpb25hbCcsIGljb246ICcnIH0sXG4gIHsgaHJlZjogJy9ncm91cGluZy8yMDE2LzIvZ2lyb25kZScsIGxhYmVsOiAnR3JvdXBpbmcnLCBpY29uOiAnJyB9XG5dLm1hcChsaW5rID0+IHtcbiAgbGluay5rZXkgPSBgbWVudS1saW5rLSR7bGluay5ocmVmfS0ke2xpbmsubGFiZWx9YFxuICByZXR1cm4gbGlua1xufSlcblxuY2xhc3MgTmF2aSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gIH1cblxuICBvblNldFNpZGViYXJPcGVuKG9wZW4pIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2lkZWJhck9wZW46IG9wZW4gfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e2hlYWRlclN0eWxlfT5cbiAgICAgICAgIHsvKiA8TmF2YmFyIHN0eWxlPXtuYXZiYXJTdHlsZX0gY29sb3I9XCJsaWdodFwiIGxpZ2h0IGV4cGFuZD1cIm1kXCI+ICovfVxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2Vtb2ppcGVkaWEtdXMuczMuZHVhbHN0YWNrLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3RodW1icy8xNjAvYXBwbGUvODEvYWlycGxhbmVfMjcwOC5wbmdcIiBzdHlsZT17bmF2YmFyTG9nb1N0eWxlfSAvPlxuICAgICAgICAgIFRvdXJpc21cbiAgICAgICAgPC9hPlxuICAgICAgPC9MaW5rPlxuICAgICAgPE5hdiBjbGFzc05hbWU9XCJtci1hdXRvXCIgbmF2YmFyPlxuICAgICAgICB7bWVudS5tYXAoKHsga2V5LCBocmVmLCBsYWJlbCwgaWNvbiB9KSA9PiAoXG4gICAgICAgICAgPE5hdkl0ZW0ga2V5PXtrZXl9PlxuICAgICAgICAgICAgPExpbmsga2V5PXtgbGluay0ke2tleX1gfSBocmVmPXtocmVmfT48YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPntsYWJlbH0gPGkgY2xhc3NOYW1lPXtpY29ufT48L2k+PC9hPjwvTGluaz5cbiAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICkpfVxuICAgICAgPC9OYXY+XG4gICAgey8qIDwvTmF2YmFyPiAqL31cbiAgICAgICAgXG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgOmdsb2JhbChib2R5KSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgLy8gZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgQXZlbmlyIE5leHQsIEF2ZW5pcixcbiAgICAgICAgLy8gICBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgICAgIH1cbiAgICAgIG5hdiB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIHVsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgfVxuICAgICAgbmF2ID4gdWwge1xuICAgICAgICAvLyBwYWRkaW5nOiAxNnB4IDVweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgICAgbGkge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBwYWRkaW5nOiAwIDE2cHggMCAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6ICMwNjdkZjc7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cblxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlcbiJdfQ== */\n/*@ sourceURL=/home/esilv/stage/tourism-dashboard/components/nav.js */"));
    }
  }]);

  return Navi;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Navi);

/***/ })

})
//# sourceMappingURL=_app.js.27cb1d1521f9826deffe.hot-update.js.map