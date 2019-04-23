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

var Navi = function Navi() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: headerStyle,
    className: "jsx-1418008680"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"], {
    style: navbarStyle,
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
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavItem"], {
      key: key
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      key: "link-".concat(key),
      href: href
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-1418008680" + " " + "nav-link"
    }, label, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "jsx-1418008680" + " " + (icon || "")
    }))));
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1418008680"
  }, "body{margin:0;font-family:\"Montserrat\",sans-serif;}nav.jsx-1418008680{text-align:center;}ul.jsx-1418008680{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}nav.jsx-1418008680>ul.jsx-1418008680{margin:0;}li.jsx-1418008680{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0 16px 0 0;margin:0;}a.jsx-1418008680{color:#067df7;-webkit-text-decoration:none;text-decoration:none;font-size:14px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VzaWx2L3N0YWdlL3RvdXJpc20tZGFzaGJvYXJkL2NvbXBvbmVudHMvbmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFFZ0IsQUFHa0IsQUFNUyxBQUdMLEFBS0osQUFHSSxBQUtDLFNBbkJ1QixBQVl2QyxLQVF1QixJQWhCdkIsMkJBSEEsbUJBb0JpQixVQWRlLEFBUVgsS0FPckIsY0FOVyxTQUNYLHVGQVRBIiwiZmlsZSI6Ii9ob21lL2VzaWx2L3N0YWdlL3RvdXJpc20tZGFzaGJvYXJkL2NvbXBvbmVudHMvbmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHtcbiAgQ29sbGFwc2UsXG4gIE5hdmJhcixcbiAgTmF2YmFyVG9nZ2xlcixcbiAgTmF2YmFyQnJhbmQsXG4gIE5hdixcbiAgTmF2SXRlbSxcbiAgTmF2TGluayxcbiAgVW5jb250cm9sbGVkRHJvcGRvd24sXG4gIERyb3Bkb3duVG9nZ2xlLFxuICBEcm9wZG93bk1lbnUsXG4gIERyb3Bkb3duSXRlbVxufSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuXG5jb25zdCBuYXZiYXJMb2dvU3R5bGUgPSB7XG4gIGhlaWdodDogMzUsXG4gIG1hcmdpblJpZ2h0OiAxMCxcbiAgbWFyZ2luVG9wOiAtNVxufVxuXG5jb25zdCBuYXZiYXJTdHlsZSA9IHtcbiAgYm9yZGVyQm90dG9tOiBcIjAuNXB4IHNvbGlkICNkMWQxZDFcIixcbiAgYmFja2dyb3VuZENvbG9yOiBcIiNGRkYhaW1wb3J0YW50XCIsXG4gIHBhZGRpbmc6IFwiMXJlbSAyLjVyZW1cIixcbiAgYm94U2hhZG93OiBcIjBweCAxcHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMilcIlxufVxuXG5jb25zdCBoZWFkZXJTdHlsZSA9IHtcbiAgbWFyZ2luQm90dG9tOiAzMFxufTtcblxuXG5jb25zdCBsaW5rcyA9IFtcbiAgeyBocmVmOiAnaHR0cHM6Ly9naXRodWIuY29tL3NlZ21lbnRpby9jcmVhdGUtbmV4dC1hcHAnLCBsYWJlbDogJ0dpdGh1YicsIGljb246ICdmYWIgZmEtZ2l0aHViLWFsdCcgfSxcbl0ubWFwKGxpbmsgPT4ge1xuICBsaW5rLmtleSA9IGBuYXYtbGluay0ke2xpbmsuaHJlZn0tJHtsaW5rLmxhYmVsfWBcbiAgcmV0dXJuIGxpbmtcbn0pXG5cbmNvbnN0IG1lbnUgPSBbXG4gIHsgaHJlZjogJy9zdGF0cycsIGxhYmVsOiAnU3RhdHMnLCBpY29uOicnfSxcbiAgeyBocmVmOiAnL25hdGlvbmFsLzIwMTYnLCBsYWJlbDogJ05hdGlvbmFsJywgaWNvbjogJycgfSxcbiAgeyBocmVmOiAnL2ludGVybmF0aW9uYWwvMjAxNicsIGxhYmVsOiAnSW50ZXJuYXRpb25hbCcsIGljb246ICcnIH0sXG4gIHsgaHJlZjogJy9ncm91cGluZy8yMDE2LzIvZ2lyb25kZScsIGxhYmVsOiAnR3JvdXBpbmcnLCBpY29uOiAnJyB9XG5dLm1hcChsaW5rID0+IHtcbiAgbGluay5rZXkgPSBgbWVudS1saW5rLSR7bGluay5ocmVmfS0ke2xpbmsubGFiZWx9YFxuICByZXR1cm4gbGlua1xufSlcblxuY29uc3QgTmF2aSA9ICgpID0+IChcbiAgPGRpdiBzdHlsZT17aGVhZGVyU3R5bGV9PlxuICAgIDxOYXZiYXIgc3R5bGU9e25hdmJhclN0eWxlfSBjb2xvcj1cImxpZ2h0XCIgbGlnaHQgZXhwYW5kPVwibWRcIj5cbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9lbW9qaXBlZGlhLXVzLnMzLmR1YWxzdGFjay51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS90aHVtYnMvMTYwL2FwcGxlLzgxL2FpcnBsYW5lXzI3MDgucG5nXCIgc3R5bGU9e25hdmJhckxvZ29TdHlsZX0gLz5cbiAgICAgICAgICBUb3VyaXNtXG4gICAgICAgIDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxOYXYgY2xhc3NOYW1lPVwibXItYXV0b1wiIG5hdmJhcj5cbiAgICAgICAge21lbnUubWFwKCh7IGtleSwgaHJlZiwgbGFiZWwsIGljb24gfSkgPT4gKFxuICAgICAgICAgIDxOYXZJdGVtIGtleT17a2V5fT5cbiAgICAgICAgICAgIDxMaW5rIGtleT17YGxpbmstJHtrZXl9YH0gaHJlZj17aHJlZn0+PGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj57bGFiZWx9IDxpIGNsYXNzTmFtZT17aWNvbn0+PC9pPjwvYT48L0xpbms+XG4gICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICApKX1cbiAgICAgIDwvTmF2PlxuICAgIDwvTmF2YmFyPlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgOmdsb2JhbChib2R5KSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgLy8gZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgQXZlbmlyIE5leHQsIEF2ZW5pcixcbiAgICAgICAgLy8gICBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgICAgIH1cbiAgICAgIG5hdiB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIHVsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgfVxuICAgICAgbmF2ID4gdWwge1xuICAgICAgICAvLyBwYWRkaW5nOiAxNnB4IDVweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgICAgbGkge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBwYWRkaW5nOiAwIDE2cHggMCAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6ICMwNjdkZjc7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cblxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgTmF2aVxuIl19 */\n/*@ sourceURL=/home/esilv/stage/tourism-dashboard/components/nav.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Navi);

/***/ })

})
//# sourceMappingURL=_app.js.633e2d65098dd4a617df.hot-update.js.map