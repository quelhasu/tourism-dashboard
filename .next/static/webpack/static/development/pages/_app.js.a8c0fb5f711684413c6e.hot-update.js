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
  marginBottom: 30
};
var menuLinks = {
  marginRight: 'auto'
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
  }, "body{margin:0;font-family:\"Montserrat\",sans-serif;}nav.jsx-1418008680{text-align:center;}ul.jsx-1418008680{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}nav.jsx-1418008680>ul.jsx-1418008680{margin:0;}li.jsx-1418008680{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0 16px 0 0;margin:0;}a.jsx-1418008680{color:#067df7;-webkit-text-decoration:none;text-decoration:none;font-size:14px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdW5uYW1lZC9TOC1zdGFnZS90b3VyaXNtLWRhc2hib2FyZC9jb21wb25lbnRzL25hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRWdCLEFBR2tCLEFBTVMsQUFHTCxBQUtKLEFBR0ksQUFLQyxTQW5CdUIsQUFZdkMsS0FRdUIsSUFoQnZCLDJCQUhBLG1CQW9CaUIsVUFkZSxBQVFYLEtBT3JCLGNBTlcsU0FDWCx1RkFUQSIsImZpbGUiOiIvVXNlcnMvcXVubmFtZWQvUzgtc3RhZ2UvdG91cmlzbS1kYXNoYm9hcmQvY29tcG9uZW50cy9uYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQge1xuICBDb2xsYXBzZSxcbiAgTmF2YmFyLFxuICBOYXZiYXJUb2dnbGVyLFxuICBOYXZiYXJCcmFuZCxcbiAgTmF2LFxuICBOYXZJdGVtLFxuICBOYXZMaW5rLFxuICBVbmNvbnRyb2xsZWREcm9wZG93bixcbiAgRHJvcGRvd25Ub2dnbGUsXG4gIERyb3Bkb3duTWVudSxcbiAgRHJvcGRvd25JdGVtXG59IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5cbmNvbnN0IG5hdmJhckxvZ29TdHlsZSA9IHtcbiAgaGVpZ2h0OiAzNSxcbiAgbWFyZ2luUmlnaHQ6IDEwLFxuICBtYXJnaW5Ub3A6IC01XG59XG5cbmNvbnN0IG5hdmJhclN0eWxlID0ge1xuICBib3JkZXJCb3R0b206IFwiMC41cHggc29saWQgI2QxZDFkMVwiLFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGRiFpbXBvcnRhbnRcIixcbiAgcGFkZGluZzogXCIxcmVtIDIuNXJlbVwiLFxuICBib3hTaGFkb3c6IFwiMHB4IDFweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4yKVwiXG59XG5cbmNvbnN0IGhlYWRlclN0eWxlID0ge1xuICBtYXJnaW5Cb3R0b206IDMwXG59O1xuXG5jb25zdCBtZW51TGlua3MgPSB7XG4gIG1hcmdpblJpZ2h0OiAnYXV0bydcbn1cblxuY29uc3QgbGlua3MgPSBbXG4gIHsgaHJlZjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zZWdtZW50aW8vY3JlYXRlLW5leHQtYXBwJywgbGFiZWw6ICdHaXRodWInLCBpY29uOiAnZmFiIGZhLWdpdGh1Yi1hbHQnIH0sXG5dLm1hcChsaW5rID0+IHtcbiAgbGluay5rZXkgPSBgbmF2LWxpbmstJHtsaW5rLmhyZWZ9LSR7bGluay5sYWJlbH1gXG4gIHJldHVybiBsaW5rXG59KVxuXG5jb25zdCBtZW51ID0gW1xuICB7IGhyZWY6ICcvbmF0aW9uYWwnLCBsYWJlbDogJ05hdGlvbmFsJywgaWNvbjogJycgfSxcbiAgeyBocmVmOiAnIycsIGxhYmVsOiAnSW50ZXJuYXRpb25hbCcsIGljb246ICcnIH0sXG4gIHsgaHJlZjogJyMnLCBsYWJlbDogJ0dyb3VwaW5nJywgaWNvbjogJycgfVxuXS5tYXAobGluayA9PiB7XG4gIGxpbmsua2V5ID0gYG1lbnUtbGluay0ke2xpbmsuaHJlZn0tJHtsaW5rLmxhYmVsfWBcbiAgcmV0dXJuIGxpbmtcbn0pXG5cbmNvbnN0IE5hdmkgPSAoKSA9PiAoXG4gIDxkaXYgc3R5bGU9e2hlYWRlclN0eWxlfT5cbiAgICA8TmF2YmFyIHN0eWxlPXtuYXZiYXJTdHlsZX0gZml4ZWQ9XCJ0b3BcIiBjb2xvcj1cImxpZ2h0XCIgbGlnaHQgZXhwYW5kPVwibWRcIj5cbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9lbW9qaXBlZGlhLXVzLnMzLmR1YWxzdGFjay51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS90aHVtYnMvMTYwL2FwcGxlLzgxL2FpcnBsYW5lXzI3MDgucG5nXCIgc3R5bGU9e25hdmJhckxvZ29TdHlsZX0gLz5cbiAgICAgICAgICBUb3VyaXNtXG4gICAgICAgIDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxOYXYgY2xhc3NOYW1lPVwibXItYXV0b1wiIG5hdmJhcj5cbiAgICAgICAge21lbnUubWFwKCh7IGtleSwgaHJlZiwgbGFiZWwsIGljb24gfSkgPT4gKFxuICAgICAgICAgIDxOYXZJdGVtPlxuICAgICAgICAgICAgPExpbmsgaHJlZj17aHJlZn0+PGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj57bGFiZWx9IDxpIGNsYXNzTmFtZT17aWNvbn0+PC9pPjwvYT48L0xpbms+XG4gICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICApKX1cbiAgICAgIDwvTmF2PlxuXG4gICAgICA8TmF2IGNsYXNzTmFtZT1cIm1sLWF1dG9cIiBuYXZiYXI+XG4gICAgICAgIHtsaW5rcy5tYXAoKHsga2V5LCBocmVmLCBsYWJlbCwgaWNvbiB9KSA9PiAoXG4gICAgICAgICAgPE5hdkl0ZW0+XG4gICAgICAgICAgICA8TmF2TGluayBrZXk9e2tleX0gaHJlZj17aHJlZn0+e2xhYmVsfSA8aSBjbGFzc05hbWU9e2ljb259PjwvaT48L05hdkxpbms+XG4gICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICApKX1cbiAgICAgIDwvTmF2PlxuICAgIDwvTmF2YmFyPlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgOmdsb2JhbChib2R5KSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgLy8gZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgQXZlbmlyIE5leHQsIEF2ZW5pcixcbiAgICAgICAgLy8gICBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgICAgIH1cbiAgICAgIG5hdiB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIHVsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgfVxuICAgICAgbmF2ID4gdWwge1xuICAgICAgICAvLyBwYWRkaW5nOiAxNnB4IDVweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgICAgbGkge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBwYWRkaW5nOiAwIDE2cHggMCAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6ICMwNjdkZjc7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cblxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgTmF2aVxuIl19 */\n/*@ sourceURL=/Users/qunnamed/S8-stage/tourism-dashboard/components/nav.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Navi);

/***/ })

})
//# sourceMappingURL=_app.js.a8c0fb5f711684413c6e.hot-update.js.map