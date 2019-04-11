webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");




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
  marginBottom: 100
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
  href: '/national',
  label: 'National',
  icon: ''
}, {
  href: '#',
  label: 'International',
  icon: ''
}, {
  href: '#',
  label: 'Grouping',
  icon: ''
}].map(function (link) {
  link.key = "menu-link-".concat(link.href, "-").concat(link.label);
  return link;
});

var Navi = function Navi() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: headerStyle,
    className: "jsx-1418008680"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"], {
    style: navbarStyle,
    fixed: "top",
    color: "light",
    light: true,
    expand: "md"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-1418008680" + " " + "navbar-brand"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/81/airplane_2708.png",
    style: navbarLogoStyle,
    className: "jsx-1418008680"
  }), "Tourism")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"], {
    className: "mr-auto",
    navbar: true
  }, menu.map(function (_ref) {
    var key = _ref.key,
        href = _ref.href,
        label = _ref.label,
        icon = _ref.icon;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavItem"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: href
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-1418008680" + " " + "nav-link"
    }, label, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "jsx-1418008680" + " " + (icon || "")
    }))));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"], {
    className: "ml-auto",
    navbar: true
  }, links.map(function (_ref2) {
    var key = _ref2.key,
        href = _ref2.href,
        label = _ref2.label,
        icon = _ref2.icon;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavItem"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
      key: key,
      href: href
    }, label, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "jsx-1418008680" + " " + (icon || "")
    })));
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1418008680"
  }, "body{margin:0;font-family:\"Montserrat\",sans-serif;}nav.jsx-1418008680{text-align:center;}ul.jsx-1418008680{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}nav.jsx-1418008680>ul.jsx-1418008680{margin:0;}li.jsx-1418008680{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0 16px 0 0;margin:0;}a.jsx-1418008680{color:#067df7;-webkit-text-decoration:none;text-decoration:none;font-size:14px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdW5uYW1lZC9TOC1zdGFnZS90b3VyaXNtLWRhc2hib2FyZC9jb21wb25lbnRzL25hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RWdCLEFBR2tCLEFBTVMsQUFHTCxBQUtKLEFBR0ksQUFLQyxTQW5CdUIsQUFZdkMsS0FRdUIsSUFoQnZCLDJCQUhBLG1CQW9CaUIsVUFkZSxBQVFYLEtBT3JCLGNBTlcsU0FDWCx1RkFUQSIsImZpbGUiOiIvVXNlcnMvcXVubmFtZWQvUzgtc3RhZ2UvdG91cmlzbS1kYXNoYm9hcmQvY29tcG9uZW50cy9uYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQge1xuICBDb2xsYXBzZSxcbiAgTmF2YmFyLFxuICBOYXZiYXJUb2dnbGVyLFxuICBOYXZiYXJCcmFuZCxcbiAgTmF2LFxuICBOYXZJdGVtLFxuICBOYXZMaW5rLFxuICBVbmNvbnRyb2xsZWREcm9wZG93bixcbiAgRHJvcGRvd25Ub2dnbGUsXG4gIERyb3Bkb3duTWVudSxcbiAgRHJvcGRvd25JdGVtXG59IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5cbmNvbnN0IG5hdmJhckxvZ29TdHlsZSA9IHtcbiAgaGVpZ2h0OiAzNSxcbiAgbWFyZ2luUmlnaHQ6IDEwLFxuICBtYXJnaW5Ub3A6IC01XG59XG5cbmNvbnN0IG5hdmJhclN0eWxlID0ge1xuICBib3JkZXJCb3R0b206IFwiMC41cHggc29saWQgI2QxZDFkMVwiLFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGRiFpbXBvcnRhbnRcIixcbiAgcGFkZGluZzogXCIxcmVtIDIuNXJlbVwiLFxuICBib3hTaGFkb3c6IFwiMHB4IDFweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4yKVwiXG59XG5cbmNvbnN0IGhlYWRlclN0eWxlID0ge1xuICBtYXJnaW5Cb3R0b206IDEwMFxufTtcblxuXG5jb25zdCBsaW5rcyA9IFtcbiAgeyBocmVmOiAnaHR0cHM6Ly9naXRodWIuY29tL3NlZ21lbnRpby9jcmVhdGUtbmV4dC1hcHAnLCBsYWJlbDogJ0dpdGh1YicsIGljb246ICdmYWIgZmEtZ2l0aHViLWFsdCcgfSxcbl0ubWFwKGxpbmsgPT4ge1xuICBsaW5rLmtleSA9IGBuYXYtbGluay0ke2xpbmsuaHJlZn0tJHtsaW5rLmxhYmVsfWBcbiAgcmV0dXJuIGxpbmtcbn0pXG5cbmNvbnN0IG1lbnUgPSBbXG4gIHsgaHJlZjogJy9zdGF0cycsIGxhYmVsOiAnU3RhdHMnLCBpY29uOicnfSxcbiAgeyBocmVmOiAnL25hdGlvbmFsJywgbGFiZWw6ICdOYXRpb25hbCcsIGljb246ICcnIH0sXG4gIHsgaHJlZjogJyMnLCBsYWJlbDogJ0ludGVybmF0aW9uYWwnLCBpY29uOiAnJyB9LFxuICB7IGhyZWY6ICcjJywgbGFiZWw6ICdHcm91cGluZycsIGljb246ICcnIH1cbl0ubWFwKGxpbmsgPT4ge1xuICBsaW5rLmtleSA9IGBtZW51LWxpbmstJHtsaW5rLmhyZWZ9LSR7bGluay5sYWJlbH1gXG4gIHJldHVybiBsaW5rXG59KVxuXG5jb25zdCBOYXZpID0gKCkgPT4gKFxuICA8ZGl2IHN0eWxlPXtoZWFkZXJTdHlsZX0+XG4gICAgPE5hdmJhciBzdHlsZT17bmF2YmFyU3R5bGV9IGZpeGVkPVwidG9wXCIgY29sb3I9XCJsaWdodFwiIGxpZ2h0IGV4cGFuZD1cIm1kXCI+XG4gICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vZW1vamlwZWRpYS11cy5zMy5kdWFsc3RhY2sudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vdGh1bWJzLzE2MC9hcHBsZS84MS9haXJwbGFuZV8yNzA4LnBuZ1wiIHN0eWxlPXtuYXZiYXJMb2dvU3R5bGV9IC8+XG4gICAgICAgICAgVG91cmlzbVxuICAgICAgICA8L2E+XG4gICAgICA8L0xpbms+XG4gICAgICA8TmF2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIiBuYXZiYXI+XG4gICAgICAgIHttZW51Lm1hcCgoeyBrZXksIGhyZWYsIGxhYmVsLCBpY29uIH0pID0+IChcbiAgICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9PjxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+e2xhYmVsfSA8aSBjbGFzc05hbWU9e2ljb259PjwvaT48L2E+PC9MaW5rPlxuICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgKSl9XG4gICAgICA8L05hdj5cblxuICAgICAgPE5hdiBjbGFzc05hbWU9XCJtbC1hdXRvXCIgbmF2YmFyPlxuICAgICAgICB7bGlua3MubWFwKCh7IGtleSwgaHJlZiwgbGFiZWwsIGljb24gfSkgPT4gKFxuICAgICAgICAgIDxOYXZJdGVtPlxuICAgICAgICAgICAgPE5hdkxpbmsga2V5PXtrZXl9IGhyZWY9e2hyZWZ9PntsYWJlbH0gPGkgY2xhc3NOYW1lPXtpY29ufT48L2k+PC9OYXZMaW5rPlxuICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgKSl9XG4gICAgICA8L05hdj5cbiAgICA8L05hdmJhcj5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIDpnbG9iYWwoYm9keSkge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIC8vIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIEF2ZW5pciBOZXh0LCBBdmVuaXIsXG4gICAgICAgIC8vICAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gICAgICB9XG4gICAgICBuYXYge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICB1bCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIH1cbiAgICAgIG5hdiA+IHVsIHtcbiAgICAgICAgLy8gcGFkZGluZzogMTZweCA1cHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cbiAgICAgIGxpIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgcGFkZGluZzogMCAxNnB4IDAgMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiAjMDY3ZGY3O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlcbiJdfQ== */\n/*@ sourceURL=/Users/qunnamed/S8-stage/tourism-dashboard/components/nav.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Navi);

/***/ })

})
//# sourceMappingURL=_app.js.39f3e72f26fc371cbcc5.hot-update.js.map