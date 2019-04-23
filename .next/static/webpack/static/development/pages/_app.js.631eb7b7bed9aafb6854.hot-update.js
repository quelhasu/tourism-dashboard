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
/* harmony import */ var react_sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-sidebar */ "./node_modules/react-sidebar/dist/react-sidebar.esm.js");
var _this = undefined;






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
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sidebar: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
      className: "jsx-1418008680"
    }, "Sidebar content"),
    open: _this.state.sidebarOpen,
    onSetOpen: _this.onSetSidebarOpen,
    styles: {
      sidebar: {
        background: "white"
      }
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: function onClick() {
      return _this.onSetSidebarOpen(true);
    },
    className: "jsx-1418008680"
  }, "Open sidebar")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1418008680"
  }, "body{margin:0;font-family:\"Montserrat\",sans-serif;}nav.jsx-1418008680{text-align:center;}ul.jsx-1418008680{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}nav.jsx-1418008680>ul.jsx-1418008680{margin:0;}li.jsx-1418008680{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0 16px 0 0;margin:0;}a.jsx-1418008680{color:#067df7;-webkit-text-decoration:none;text-decoration:none;font-size:14px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VzaWx2L3N0YWdlL3RvdXJpc20tZGFzaGJvYXJkL2NvbXBvbmVudHMvbmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdGZ0IsQUFHa0IsQUFNUyxBQUdMLEFBS0osQUFHSSxBQUtDLFNBbkJ1QixBQVl2QyxLQVF1QixJQWhCdkIsMkJBSEEsbUJBb0JpQixVQWRlLEFBUVgsS0FPckIsY0FOVyxTQUNYLHVGQVRBIiwiZmlsZSI6Ii9ob21lL2VzaWx2L3N0YWdlL3RvdXJpc20tZGFzaGJvYXJkL2NvbXBvbmVudHMvbmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHtcbiAgQ29sbGFwc2UsXG4gIE5hdmJhcixcbiAgTmF2YmFyVG9nZ2xlcixcbiAgTmF2YmFyQnJhbmQsXG4gIE5hdixcbiAgTmF2SXRlbSxcbiAgTmF2TGluayxcbiAgVW5jb250cm9sbGVkRHJvcGRvd24sXG4gIERyb3Bkb3duVG9nZ2xlLFxuICBEcm9wZG93bk1lbnUsXG4gIERyb3Bkb3duSXRlbVxufSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IFNpZGViYXIgZnJvbSBcInJlYWN0LXNpZGViYXJcIjtcblxuY29uc3QgbmF2YmFyTG9nb1N0eWxlID0ge1xuICBoZWlnaHQ6IDM1LFxuICBtYXJnaW5SaWdodDogMTAsXG4gIG1hcmdpblRvcDogLTVcbn1cblxuY29uc3QgbmF2YmFyU3R5bGUgPSB7XG4gIGJvcmRlckJvdHRvbTogXCIwLjVweCBzb2xpZCAjZDFkMWQxXCIsXG4gIGJhY2tncm91bmRDb2xvcjogXCIjRkZGIWltcG9ydGFudFwiLFxuICBwYWRkaW5nOiBcIjFyZW0gMi41cmVtXCIsXG4gIGJveFNoYWRvdzogXCIwcHggMXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjIpXCJcbn1cblxuY29uc3QgaGVhZGVyU3R5bGUgPSB7XG4gIG1hcmdpbkJvdHRvbTogMzBcbn07XG5cblxuY29uc3QgbGlua3MgPSBbXG4gIHsgaHJlZjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zZWdtZW50aW8vY3JlYXRlLW5leHQtYXBwJywgbGFiZWw6ICdHaXRodWInLCBpY29uOiAnZmFiIGZhLWdpdGh1Yi1hbHQnIH0sXG5dLm1hcChsaW5rID0+IHtcbiAgbGluay5rZXkgPSBgbmF2LWxpbmstJHtsaW5rLmhyZWZ9LSR7bGluay5sYWJlbH1gXG4gIHJldHVybiBsaW5rXG59KVxuXG5jb25zdCBtZW51ID0gW1xuICB7IGhyZWY6ICcvc3RhdHMnLCBsYWJlbDogJ1N0YXRzJywgaWNvbjonJ30sXG4gIHsgaHJlZjogJy9uYXRpb25hbC8yMDE2JywgbGFiZWw6ICdOYXRpb25hbCcsIGljb246ICcnIH0sXG4gIHsgaHJlZjogJy9pbnRlcm5hdGlvbmFsLzIwMTYnLCBsYWJlbDogJ0ludGVybmF0aW9uYWwnLCBpY29uOiAnJyB9LFxuICB7IGhyZWY6ICcvZ3JvdXBpbmcvMjAxNi8yL2dpcm9uZGUnLCBsYWJlbDogJ0dyb3VwaW5nJywgaWNvbjogJycgfVxuXS5tYXAobGluayA9PiB7XG4gIGxpbmsua2V5ID0gYG1lbnUtbGluay0ke2xpbmsuaHJlZn0tJHtsaW5rLmxhYmVsfWBcbiAgcmV0dXJuIGxpbmtcbn0pXG5cbmNvbnN0IE5hdmkgPSAoKSA9PiAoXG4gIDxkaXYgc3R5bGU9e2hlYWRlclN0eWxlfT5cbiAgICB7LyogPE5hdmJhciBzdHlsZT17bmF2YmFyU3R5bGV9IGNvbG9yPVwibGlnaHRcIiBsaWdodCBleHBhbmQ9XCJtZFwiPlxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2Vtb2ppcGVkaWEtdXMuczMuZHVhbHN0YWNrLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3RodW1icy8xNjAvYXBwbGUvODEvYWlycGxhbmVfMjcwOC5wbmdcIiBzdHlsZT17bmF2YmFyTG9nb1N0eWxlfSAvPlxuICAgICAgICAgIFRvdXJpc21cbiAgICAgICAgPC9hPlxuICAgICAgPC9MaW5rPlxuICAgICAgPE5hdiBjbGFzc05hbWU9XCJtci1hdXRvXCIgbmF2YmFyPlxuICAgICAgICB7bWVudS5tYXAoKHsga2V5LCBocmVmLCBsYWJlbCwgaWNvbiB9KSA9PiAoXG4gICAgICAgICAgPE5hdkl0ZW0ga2V5PXtrZXl9PlxuICAgICAgICAgICAgPExpbmsga2V5PXtgbGluay0ke2tleX1gfSBocmVmPXtocmVmfT48YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPntsYWJlbH0gPGkgY2xhc3NOYW1lPXtpY29ufT48L2k+PC9hPjwvTGluaz5cbiAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICkpfVxuICAgICAgPC9OYXY+XG4gICAgPC9OYXZiYXI+ICovfVxuICAgIDxTaWRlYmFyXG4gICAgICAgIHNpZGViYXI9ezxiPlNpZGViYXIgY29udGVudDwvYj59XG4gICAgICAgIG9wZW49e3RoaXMuc3RhdGUuc2lkZWJhck9wZW59XG4gICAgICAgIG9uU2V0T3Blbj17dGhpcy5vblNldFNpZGViYXJPcGVufVxuICAgICAgICBzdHlsZXM9e3sgc2lkZWJhcjogeyBiYWNrZ3JvdW5kOiBcIndoaXRlXCIgfSB9fVxuICAgICAgPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMub25TZXRTaWRlYmFyT3Blbih0cnVlKX0+XG4gICAgICAgICAgT3BlbiBzaWRlYmFyXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9TaWRlYmFyPlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgOmdsb2JhbChib2R5KSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgLy8gZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgQXZlbmlyIE5leHQsIEF2ZW5pcixcbiAgICAgICAgLy8gICBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgICAgIH1cbiAgICAgIG5hdiB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIHVsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgfVxuICAgICAgbmF2ID4gdWwge1xuICAgICAgICAvLyBwYWRkaW5nOiAxNnB4IDVweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgICAgbGkge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBwYWRkaW5nOiAwIDE2cHggMCAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6ICMwNjdkZjc7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cblxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgTmF2aVxuIl19 */\n/*@ sourceURL=/home/esilv/stage/tourism-dashboard/components/nav.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Navi);

/***/ })

})
//# sourceMappingURL=_app.js.631eb7b7bed9aafb6854.hot-update.js.map