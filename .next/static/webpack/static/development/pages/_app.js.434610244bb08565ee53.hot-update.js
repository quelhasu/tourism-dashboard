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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_sidebar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-sidebar */ "./node_modules/react-sidebar/dist/react-sidebar.esm.js");











var navbarLogoStyle = {
  height: 35,
  marginRight: 10,
  marginTop: -5
};
var navbarStyle = {
  borderBottom: "0.5px solid #d1d1d1",
  backgroundColor: "#FFF!important",
  padding: "1rem 2.5rem",
  boxShadow: "0px 1px 5px 0px rgba(0,0,0,0.2)"
};
var headerStyle = {
  marginBottom: 30
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
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Navi, _React$Component);

  function Navi(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Navi);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Navi).call(this, props));
    _this.state = {
      sidebarOpen: true
    };
    _this.onSetSidebarOpen = _this.onSetSidebarOpen.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
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
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: headerStyle,
        className: "jsx-1418008680"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_sidebar__WEBPACK_IMPORTED_MODULE_10__["default"], {
        sidebar: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", {
          className: "jsx-1418008680"
        }, "Sidebar content"),
        open: "true",
        transitions: "false",
        onSetOpen: this.onSetSidebarOpen,
        docked: "true",
        styles: {
          sidebar: {
            background: "white"
          }
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: function onClick() {
          return _this2.onSetSidebarOpen(true);
        },
        className: "jsx-1418008680"
      }, "Open sidebar")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1418008680"
      }, "body{margin:0;font-family:\"Montserrat\",sans-serif;}nav.jsx-1418008680{text-align:center;}ul.jsx-1418008680{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}nav.jsx-1418008680>ul.jsx-1418008680{margin:0;}li.jsx-1418008680{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0 16px 0 0;margin:0;}a.jsx-1418008680{color:#067df7;-webkit-text-decoration:none;text-decoration:none;font-size:14px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VzaWx2L3N0YWdlL3RvdXJpc20tZGFzaGJvYXJkL2NvbXBvbmVudHMvbmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdHb0IsQUFHa0IsQUFNUyxBQUdMLEFBS0osQUFHSSxBQUtDLFNBbkJ1QixBQVl2QyxLQVF1QixJQWhCdkIsMkJBSEEsbUJBb0JpQixVQWRlLEFBUVgsS0FPckIsY0FOVyxTQUNYLHVGQVRBIiwiZmlsZSI6Ii9ob21lL2VzaWx2L3N0YWdlL3RvdXJpc20tZGFzaGJvYXJkL2NvbXBvbmVudHMvbmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHtcbiAgQ29sbGFwc2UsXG4gIE5hdmJhcixcbiAgTmF2YmFyVG9nZ2xlcixcbiAgTmF2YmFyQnJhbmQsXG4gIE5hdixcbiAgTmF2SXRlbSxcbiAgTmF2TGluayxcbiAgVW5jb250cm9sbGVkRHJvcGRvd24sXG4gIERyb3Bkb3duVG9nZ2xlLFxuICBEcm9wZG93bk1lbnUsXG4gIERyb3Bkb3duSXRlbVxufSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IFNpZGViYXIgZnJvbSBcInJlYWN0LXNpZGViYXJcIjtcblxuY29uc3QgbmF2YmFyTG9nb1N0eWxlID0ge1xuICBoZWlnaHQ6IDM1LFxuICBtYXJnaW5SaWdodDogMTAsXG4gIG1hcmdpblRvcDogLTVcbn1cblxuY29uc3QgbmF2YmFyU3R5bGUgPSB7XG4gIGJvcmRlckJvdHRvbTogXCIwLjVweCBzb2xpZCAjZDFkMWQxXCIsXG4gIGJhY2tncm91bmRDb2xvcjogXCIjRkZGIWltcG9ydGFudFwiLFxuICBwYWRkaW5nOiBcIjFyZW0gMi41cmVtXCIsXG4gIGJveFNoYWRvdzogXCIwcHggMXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjIpXCJcbn1cblxuY29uc3QgaGVhZGVyU3R5bGUgPSB7XG4gIG1hcmdpbkJvdHRvbTogMzBcbn07XG5cblxuY29uc3QgbGlua3MgPSBbXG4gIHsgaHJlZjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zZWdtZW50aW8vY3JlYXRlLW5leHQtYXBwJywgbGFiZWw6ICdHaXRodWInLCBpY29uOiAnZmFiIGZhLWdpdGh1Yi1hbHQnIH0sXG5dLm1hcChsaW5rID0+IHtcbiAgbGluay5rZXkgPSBgbmF2LWxpbmstJHtsaW5rLmhyZWZ9LSR7bGluay5sYWJlbH1gXG4gIHJldHVybiBsaW5rXG59KVxuXG5jb25zdCBtZW51ID0gW1xuICB7IGhyZWY6ICcvc3RhdHMnLCBsYWJlbDogJ1N0YXRzJywgaWNvbjogJycgfSxcbiAgeyBocmVmOiAnL25hdGlvbmFsLzIwMTYnLCBsYWJlbDogJ05hdGlvbmFsJywgaWNvbjogJycgfSxcbiAgeyBocmVmOiAnL2ludGVybmF0aW9uYWwvMjAxNicsIGxhYmVsOiAnSW50ZXJuYXRpb25hbCcsIGljb246ICcnIH0sXG4gIHsgaHJlZjogJy9ncm91cGluZy8yMDE2LzIvZ2lyb25kZScsIGxhYmVsOiAnR3JvdXBpbmcnLCBpY29uOiAnJyB9XG5dLm1hcChsaW5rID0+IHtcbiAgbGluay5rZXkgPSBgbWVudS1saW5rLSR7bGluay5ocmVmfS0ke2xpbmsubGFiZWx9YFxuICByZXR1cm4gbGlua1xufSlcblxuY2xhc3MgTmF2aSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaWRlYmFyT3BlbjogdHJ1ZVxuICAgIH07XG4gICAgdGhpcy5vblNldFNpZGViYXJPcGVuID0gdGhpcy5vblNldFNpZGViYXJPcGVuLmJpbmQodGhpcyk7XG4gIH1cblxuICBvblNldFNpZGViYXJPcGVuKG9wZW4pIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2lkZWJhck9wZW46IG9wZW4gfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e2hlYWRlclN0eWxlfT5cbiAgICAgICAgey8qIDxOYXZiYXIgc3R5bGU9e25hdmJhclN0eWxlfSBjb2xvcj1cImxpZ2h0XCIgbGlnaHQgZXhwYW5kPVwibWRcIj5cbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9lbW9qaXBlZGlhLXVzLnMzLmR1YWxzdGFjay51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS90aHVtYnMvMTYwL2FwcGxlLzgxL2FpcnBsYW5lXzI3MDgucG5nXCIgc3R5bGU9e25hdmJhckxvZ29TdHlsZX0gLz5cbiAgICAgICAgICBUb3VyaXNtXG4gICAgICAgIDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxOYXYgY2xhc3NOYW1lPVwibXItYXV0b1wiIG5hdmJhcj5cbiAgICAgICAge21lbnUubWFwKCh7IGtleSwgaHJlZiwgbGFiZWwsIGljb24gfSkgPT4gKFxuICAgICAgICAgIDxOYXZJdGVtIGtleT17a2V5fT5cbiAgICAgICAgICAgIDxMaW5rIGtleT17YGxpbmstJHtrZXl9YH0gaHJlZj17aHJlZn0+PGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj57bGFiZWx9IDxpIGNsYXNzTmFtZT17aWNvbn0+PC9pPjwvYT48L0xpbms+XG4gICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICApKX1cbiAgICAgIDwvTmF2PlxuICAgIDwvTmF2YmFyPiAqL31cbiAgICAgICAgPFNpZGViYXJcbiAgICAgICAgICBzaWRlYmFyPXs8Yj5TaWRlYmFyIGNvbnRlbnQ8L2I+fVxuICAgICAgICAgIG9wZW49XCJ0cnVlXCJcbiAgICAgICAgICB0cmFuc2l0aW9ucz1cImZhbHNlXCJcbiAgICAgICAgICBvblNldE9wZW49e3RoaXMub25TZXRTaWRlYmFyT3Blbn1cbiAgICAgICAgICBkb2NrZWQ9XCJ0cnVlXCJcbiAgICAgICAgICBzdHlsZXM9e3sgc2lkZWJhcjogeyBiYWNrZ3JvdW5kOiBcIndoaXRlXCIgfSB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uU2V0U2lkZWJhck9wZW4odHJ1ZSl9PlxuICAgICAgICAgICAgT3BlbiBzaWRlYmFyXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L1NpZGViYXI+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgOmdsb2JhbChib2R5KSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgLy8gZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgQXZlbmlyIE5leHQsIEF2ZW5pcixcbiAgICAgICAgLy8gICBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgICAgIH1cbiAgICAgIG5hdiB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIHVsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgfVxuICAgICAgbmF2ID4gdWwge1xuICAgICAgICAvLyBwYWRkaW5nOiAxNnB4IDVweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgICAgbGkge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBwYWRkaW5nOiAwIDE2cHggMCAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6ICMwNjdkZjc7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cblxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlcbiJdfQ== */\n/*@ sourceURL=/home/esilv/stage/tourism-dashboard/components/nav.js */"));
    }
  }]);

  return Navi;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Navi);

/***/ })

})
//# sourceMappingURL=_app.js.434610244bb08565ee53.hot-update.js.map