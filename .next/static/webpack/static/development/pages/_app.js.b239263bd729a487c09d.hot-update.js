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
        className: "jsx-1623902694"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "jsx-1623902694" + " " + "navbar-brand"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/81/airplane_2708.png",
        style: navbarLogoStyle,
        className: "jsx-1623902694"
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
          className: "jsx-1623902694" + " " + "nav-link"
        }, label, " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
          className: "jsx-1623902694" + " " + (icon || "")
        }))));
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1623902694"
      }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VzaWx2L3N0YWdlL3RvdXJpc20tZGFzaGJvYXJkL2NvbXBvbmVudHMvbmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtGb0IiLCJmaWxlIjoiL2hvbWUvZXNpbHYvc3RhZ2UvdG91cmlzbS1kYXNoYm9hcmQvY29tcG9uZW50cy9uYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQge1xuICBDb2xsYXBzZSxcbiAgTmF2YmFyLFxuICBOYXZiYXJUb2dnbGVyLFxuICBOYXZiYXJCcmFuZCxcbiAgTmF2LFxuICBOYXZJdGVtLFxuICBOYXZMaW5rLFxuICBVbmNvbnRyb2xsZWREcm9wZG93bixcbiAgRHJvcGRvd25Ub2dnbGUsXG4gIERyb3Bkb3duTWVudSxcbiAgRHJvcGRvd25JdGVtXG59IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQgU2lkZWJhciBmcm9tIFwicmVhY3Qtc2lkZWJhclwiO1xuXG5jb25zdCBuYXZiYXJMb2dvU3R5bGUgPSB7XG4gIGhlaWdodDogMzUsXG4gIG1hcmdpblJpZ2h0OiAxMCxcbiAgbWFyZ2luVG9wOiAtNVxufVxuXG5jb25zdCBuYXZiYXJTdHlsZSA9IHtcbiAgYm9yZGVyQm90dG9tOiBcIjAuNXB4IHNvbGlkICNkMWQxZDFcIixcbiAgYmFja2dyb3VuZENvbG9yOiBcIiNGRkYhaW1wb3J0YW50XCIsXG4gIHBhZGRpbmc6IFwiMXJlbSAyLjVyZW1cIixcbiAgYm94U2hhZG93OiBcIjBweCAxcHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMilcIlxufVxuXG5jb25zdCBoZWFkZXJTdHlsZSA9IHtcbiAgbWFyZ2luQm90dG9tOiAzMFxufTtcblxuXG5jb25zdCBsaW5rcyA9IFtcbiAgeyBocmVmOiAnaHR0cHM6Ly9naXRodWIuY29tL3NlZ21lbnRpby9jcmVhdGUtbmV4dC1hcHAnLCBsYWJlbDogJ0dpdGh1YicsIGljb246ICdmYWIgZmEtZ2l0aHViLWFsdCcgfSxcbl0ubWFwKGxpbmsgPT4ge1xuICBsaW5rLmtleSA9IGBuYXYtbGluay0ke2xpbmsuaHJlZn0tJHtsaW5rLmxhYmVsfWBcbiAgcmV0dXJuIGxpbmtcbn0pXG5cbmNvbnN0IG1lbnUgPSBbXG4gIHsgaHJlZjogJy9zdGF0cycsIGxhYmVsOiAnU3RhdHMnLCBpY29uOiAnJyB9LFxuICB7IGhyZWY6ICcvbmF0aW9uYWwvMjAxNicsIGxhYmVsOiAnTmF0aW9uYWwnLCBpY29uOiAnJyB9LFxuICB7IGhyZWY6ICcvaW50ZXJuYXRpb25hbC8yMDE2JywgbGFiZWw6ICdJbnRlcm5hdGlvbmFsJywgaWNvbjogJycgfSxcbiAgeyBocmVmOiAnL2dyb3VwaW5nLzIwMTYvMi9naXJvbmRlJywgbGFiZWw6ICdHcm91cGluZycsIGljb246ICcnIH1cbl0ubWFwKGxpbmsgPT4ge1xuICBsaW5rLmtleSA9IGBtZW51LWxpbmstJHtsaW5rLmhyZWZ9LSR7bGluay5sYWJlbH1gXG4gIHJldHVybiBsaW5rXG59KVxuXG5jbGFzcyBOYXZpIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgfVxuXG4gIG9uU2V0U2lkZWJhck9wZW4ob3Blbikge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaWRlYmFyT3Blbjogb3BlbiB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17aGVhZGVyU3R5bGV9PlxuICAgICAgICAgey8qIDxOYXZiYXIgc3R5bGU9e25hdmJhclN0eWxlfSBjb2xvcj1cImxpZ2h0XCIgbGlnaHQgZXhwYW5kPVwibWRcIj4gKi99XG4gICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vZW1vamlwZWRpYS11cy5zMy5kdWFsc3RhY2sudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vdGh1bWJzLzE2MC9hcHBsZS84MS9haXJwbGFuZV8yNzA4LnBuZ1wiIHN0eWxlPXtuYXZiYXJMb2dvU3R5bGV9IC8+XG4gICAgICAgICAgVG91cmlzbVxuICAgICAgICA8L2E+XG4gICAgICA8L0xpbms+XG4gICAgICA8TmF2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIiBuYXZiYXI+XG4gICAgICAgIHttZW51Lm1hcCgoeyBrZXksIGhyZWYsIGxhYmVsLCBpY29uIH0pID0+IChcbiAgICAgICAgICA8TmF2SXRlbSBrZXk9e2tleX0+XG4gICAgICAgICAgICA8TGluayBrZXk9e2BsaW5rLSR7a2V5fWB9IGhyZWY9e2hyZWZ9PjxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+e2xhYmVsfSA8aSBjbGFzc05hbWU9e2ljb259PjwvaT48L2E+PC9MaW5rPlxuICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgKSl9XG4gICAgICA8L05hdj5cbiAgICB7LyogPC9OYXZiYXI+ICovfVxuICAgICAgICBcblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAvLyA6Z2xvYmFsKGJvZHkpIHtcbiAgICAgIC8vICAgbWFyZ2luOiAwO1xuICAgICAgLy8gICAvLyBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBBdmVuaXIgTmV4dCwgQXZlbmlyLFxuICAgICAgLy8gICAvLyAgIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICAgIC8vICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICAgICAgLy8gfVxuICAgICAgLy8gbmF2IHtcbiAgICAgIC8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgLy8gfVxuICAgICAgLy8gdWwge1xuICAgICAgLy8gICBkaXNwbGF5OiBmbGV4O1xuICAgICAgLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAvLyB9XG4gICAgICAvLyBuYXYgPiB1bCB7XG4gICAgICAvLyAgIC8vIHBhZGRpbmc6IDE2cHggNXB4O1xuICAgICAgLy8gICBtYXJnaW46IDA7XG4gICAgICAvLyB9XG4gICAgICAvLyBsaSB7XG4gICAgICAvLyAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAvLyAgIHBhZGRpbmc6IDAgMTZweCAwIDA7XG4gICAgICAvLyAgIG1hcmdpbjogMDtcbiAgICAgIC8vIH1cbiAgICAgIC8vIGEge1xuICAgICAgLy8gICBjb2xvcjogIzA2N2RmNztcbiAgICAgIC8vICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgLy8gICBmb250LXNpemU6IDE0cHg7XG4gICAgICAvLyB9XG4gICAgYH08L3N0eWxlPlxuXG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2aVxuIl19 */\n/*@ sourceURL=/home/esilv/stage/tourism-dashboard/components/nav.js */"));
    }
  }]);

  return Navi;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Navi);

/***/ })

})
//# sourceMappingURL=_app.js.b239263bd729a487c09d.hot-update.js.map