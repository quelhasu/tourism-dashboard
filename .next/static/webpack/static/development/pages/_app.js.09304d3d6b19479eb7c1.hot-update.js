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
  }, "body{margin:0;font-family:\"Montserrat\",sans-serif;}nav.jsx-1418008680{text-align:center;}ul.jsx-1418008680{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}nav.jsx-1418008680>ul.jsx-1418008680{margin:0;}li.jsx-1418008680{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0 16px 0 0;margin:0;}a.jsx-1418008680{color:#067df7;-webkit-text-decoration:none;text-decoration:none;font-size:14px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VzaWx2L3N0YWdlL3RvdXJpc20tZGFzaGJvYXJkL2NvbXBvbmVudHMvbmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNFZ0IsQUFHa0IsQUFNUyxBQUdMLEFBS0osQUFHSSxBQUtDLFNBbkJ1QixBQVl2QyxLQVF1QixJQWhCdkIsMkJBSEEsbUJBb0JpQixVQWRlLEFBUVgsS0FPckIsY0FOVyxTQUNYLHVGQVRBIiwiZmlsZSI6Ii9ob21lL2VzaWx2L3N0YWdlL3RvdXJpc20tZGFzaGJvYXJkL2NvbXBvbmVudHMvbmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHtcbiAgQ29sbGFwc2UsXG4gIE5hdmJhcixcbiAgTmF2YmFyVG9nZ2xlcixcbiAgTmF2YmFyQnJhbmQsXG4gIE5hdixcbiAgTmF2SXRlbSxcbiAgTmF2TGluayxcbiAgVW5jb250cm9sbGVkRHJvcGRvd24sXG4gIERyb3Bkb3duVG9nZ2xlLFxuICBEcm9wZG93bk1lbnUsXG4gIERyb3Bkb3duSXRlbVxufSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IFNpZGViYXIgZnJvbSBcInJlYWN0LXNpZGViYXJcIjtcblxuY29uc3QgbmF2YmFyTG9nb1N0eWxlID0ge1xuICBoZWlnaHQ6IDM1LFxuICBtYXJnaW5SaWdodDogMTAsXG4gIG1hcmdpblRvcDogLTVcbn1cblxuY29uc3QgbmF2YmFyU3R5bGUgPSB7XG4gIGJvcmRlckJvdHRvbTogXCIwLjVweCBzb2xpZCAjZDFkMWQxXCIsXG4gIGJhY2tncm91bmRDb2xvcjogXCIjRkZGIWltcG9ydGFudFwiLFxuICBwYWRkaW5nOiBcIjFyZW0gMi41cmVtXCIsXG4gIGJveFNoYWRvdzogXCIwcHggMXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjIpXCJcbn1cblxuY29uc3QgaGVhZGVyU3R5bGUgPSB7XG4gIG1hcmdpbkJvdHRvbTogMzBcbn07XG5cblxuY29uc3QgbGlua3MgPSBbXG4gIHsgaHJlZjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zZWdtZW50aW8vY3JlYXRlLW5leHQtYXBwJywgbGFiZWw6ICdHaXRodWInLCBpY29uOiAnZmFiIGZhLWdpdGh1Yi1hbHQnIH0sXG5dLm1hcChsaW5rID0+IHtcbiAgbGluay5rZXkgPSBgbmF2LWxpbmstJHtsaW5rLmhyZWZ9LSR7bGluay5sYWJlbH1gXG4gIHJldHVybiBsaW5rXG59KVxuXG5jb25zdCBtZW51ID0gW1xuICB7IGhyZWY6ICcvc3RhdHMnLCBsYWJlbDogJ1N0YXRzJywgaWNvbjonJ30sXG4gIHsgaHJlZjogJy9uYXRpb25hbC8yMDE2JywgbGFiZWw6ICdOYXRpb25hbCcsIGljb246ICcnIH0sXG4gIHsgaHJlZjogJy9pbnRlcm5hdGlvbmFsLzIwMTYnLCBsYWJlbDogJ0ludGVybmF0aW9uYWwnLCBpY29uOiAnJyB9LFxuICB7IGhyZWY6ICcvZ3JvdXBpbmcvMjAxNi8yL2dpcm9uZGUnLCBsYWJlbDogJ0dyb3VwaW5nJywgaWNvbjogJycgfVxuXS5tYXAobGluayA9PiB7XG4gIGxpbmsua2V5ID0gYG1lbnUtbGluay0ke2xpbmsuaHJlZn0tJHtsaW5rLmxhYmVsfWBcbiAgcmV0dXJuIGxpbmtcbn0pXG5cbmNvbnN0IE5hdmkgPSAoKSA9PiAoXG4gIDxkaXYgc3R5bGU9e2hlYWRlclN0eWxlfT5cbiAgICA8TmF2YmFyIHN0eWxlPXtuYXZiYXJTdHlsZX0gY29sb3I9XCJsaWdodFwiIGxpZ2h0IGV4cGFuZD1cIm1kXCI+XG4gICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vZW1vamlwZWRpYS11cy5zMy5kdWFsc3RhY2sudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vdGh1bWJzLzE2MC9hcHBsZS84MS9haXJwbGFuZV8yNzA4LnBuZ1wiIHN0eWxlPXtuYXZiYXJMb2dvU3R5bGV9IC8+XG4gICAgICAgICAgVG91cmlzbVxuICAgICAgICA8L2E+XG4gICAgICA8L0xpbms+XG4gICAgICA8TmF2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIiBuYXZiYXI+XG4gICAgICAgIHttZW51Lm1hcCgoeyBrZXksIGhyZWYsIGxhYmVsLCBpY29uIH0pID0+IChcbiAgICAgICAgICA8TmF2SXRlbSBrZXk9e2tleX0+XG4gICAgICAgICAgICA8TGluayBrZXk9e2BsaW5rLSR7a2V5fWB9IGhyZWY9e2hyZWZ9PjxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+e2xhYmVsfSA8aSBjbGFzc05hbWU9e2ljb259PjwvaT48L2E+PC9MaW5rPlxuICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgKSl9XG4gICAgICA8L05hdj5cbiAgICA8L05hdmJhcj5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIDpnbG9iYWwoYm9keSkge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIC8vIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIEF2ZW5pciBOZXh0LCBBdmVuaXIsXG4gICAgICAgIC8vICAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gICAgICB9XG4gICAgICBuYXYge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICB1bCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIH1cbiAgICAgIG5hdiA+IHVsIHtcbiAgICAgICAgLy8gcGFkZGluZzogMTZweCA1cHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cbiAgICAgIGxpIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgcGFkZGluZzogMCAxNnB4IDAgMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiAjMDY3ZGY3O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlcbiJdfQ== */\n/*@ sourceURL=/home/esilv/stage/tourism-dashboard/components/nav.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Navi);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectSpread.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "./node_modules/react-sidebar/dist/react-sidebar.esm.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-sidebar/dist/react-sidebar.esm.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);






var CANCEL_DISTANCE_ON_SCROLL = 20;
var defaultStyles = {
  root: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: "hidden"
  },
  sidebar: {
    zIndex: 2,
    position: "absolute",
    top: 0,
    bottom: 0,
    transition: "transform .3s ease-out",
    WebkitTransition: "-webkit-transform .3s ease-out",
    willChange: "transform",
    overflowY: "auto"
  },
  content: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflowY: "auto",
    WebkitOverflowScrolling: "touch",
    transition: "left .3s ease-out, right .3s ease-out"
  },
  overlay: {
    zIndex: 1,
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0,
    visibility: "hidden",
    transition: "opacity .3s ease-out, visibility .3s ease-out",
    backgroundColor: "rgba(0,0,0,.3)"
  },
  dragHandle: {
    zIndex: 1,
    position: "fixed",
    top: 0,
    bottom: 0
  }
};

var Sidebar =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(Sidebar, _Component);

  function Sidebar(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      // the detected width of the sidebar in pixels
      sidebarWidth: props.defaultSidebarWidth,
      // keep track of touching params
      touchIdentifier: null,
      touchStartX: null,
      touchCurrentX: null,
      // if touch is supported by the browser
      dragSupported: false
    };
    _this.overlayClicked = _this.overlayClicked.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this)));
    _this.onTouchStart = _this.onTouchStart.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this)));
    _this.onTouchMove = _this.onTouchMove.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this)));
    _this.onTouchEnd = _this.onTouchEnd.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this)));
    _this.onScroll = _this.onScroll.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this)));
    _this.saveSidebarRef = _this.saveSidebarRef.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this)));
    return _this;
  }

  var _proto = Sidebar.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var isIos = /iPad|iPhone|iPod/.test(navigator ? navigator.userAgent : "");
    this.setState({
      dragSupported: typeof window === "object" && "ontouchstart" in window && !isIos
    });
    this.saveSidebarWidth();
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    // filter out the updates when we're touching
    if (!this.isTouching()) {
      this.saveSidebarWidth();
    }
  };

  _proto.onTouchStart = function onTouchStart(ev) {
    // filter out if a user starts swiping with a second finger
    if (!this.isTouching()) {
      var touch = ev.targetTouches[0];
      this.setState({
        touchIdentifier: touch.identifier,
        touchStartX: touch.clientX,
        touchCurrentX: touch.clientX
      });
    }
  };

  _proto.onTouchMove = function onTouchMove(ev) {
    if (this.isTouching()) {
      for (var ind = 0; ind < ev.targetTouches.length; ind++) {
        // we only care about the finger that we are tracking
        if (ev.targetTouches[ind].identifier === this.state.touchIdentifier) {
          this.setState({
            touchCurrentX: ev.targetTouches[ind].clientX
          });
          break;
        }
      }
    }
  };

  _proto.onTouchEnd = function onTouchEnd() {
    if (this.isTouching()) {
      // trigger a change to open if sidebar has been dragged beyond dragToggleDistance
      var touchWidth = this.touchSidebarWidth();

      if (this.props.open && touchWidth < this.state.sidebarWidth - this.props.dragToggleDistance || !this.props.open && touchWidth > this.props.dragToggleDistance) {
        this.props.onSetOpen(!this.props.open);
      }

      this.setState({
        touchIdentifier: null,
        touchStartX: null,
        touchCurrentX: null
      });
    }
  }; // This logic helps us prevents the user from sliding the sidebar horizontally
  // while scrolling the sidebar vertically. When a scroll event comes in, we're
  // cancelling the ongoing gesture if it did not move horizontally much.


  _proto.onScroll = function onScroll() {
    if (this.isTouching() && this.inCancelDistanceOnScroll()) {
      this.setState({
        touchIdentifier: null,
        touchStartX: null,
        touchCurrentX: null
      });
    }
  }; // True if the on going gesture X distance is less than the cancel distance


  _proto.inCancelDistanceOnScroll = function inCancelDistanceOnScroll() {
    var cancelDistanceOnScroll;

    if (this.props.pullRight) {
      cancelDistanceOnScroll = Math.abs(this.state.touchCurrentX - this.state.touchStartX) < CANCEL_DISTANCE_ON_SCROLL;
    } else {
      cancelDistanceOnScroll = Math.abs(this.state.touchStartX - this.state.touchCurrentX) < CANCEL_DISTANCE_ON_SCROLL;
    }

    return cancelDistanceOnScroll;
  };

  _proto.isTouching = function isTouching() {
    return this.state.touchIdentifier !== null;
  };

  _proto.overlayClicked = function overlayClicked() {
    if (this.props.open) {
      this.props.onSetOpen(false);
    }
  };

  _proto.saveSidebarWidth = function saveSidebarWidth() {
    var width = this.sidebar.offsetWidth;

    if (width !== this.state.sidebarWidth) {
      this.setState({
        sidebarWidth: width
      });
    }
  };

  _proto.saveSidebarRef = function saveSidebarRef(node) {
    this.sidebar = node;
  }; // calculate the sidebarWidth based on current touch info


  _proto.touchSidebarWidth = function touchSidebarWidth() {
    // if the sidebar is open and start point of drag is inside the sidebar
    // we will only drag the distance they moved their finger
    // otherwise we will move the sidebar to be below the finger.
    if (this.props.pullRight) {
      if (this.props.open && window.innerWidth - this.state.touchStartX < this.state.sidebarWidth) {
        if (this.state.touchCurrentX > this.state.touchStartX) {
          return this.state.sidebarWidth + this.state.touchStartX - this.state.touchCurrentX;
        }

        return this.state.sidebarWidth;
      }

      return Math.min(window.innerWidth - this.state.touchCurrentX, this.state.sidebarWidth);
    }

    if (this.props.open && this.state.touchStartX < this.state.sidebarWidth) {
      if (this.state.touchCurrentX > this.state.touchStartX) {
        return this.state.sidebarWidth;
      }

      return this.state.sidebarWidth - this.state.touchStartX + this.state.touchCurrentX;
    }

    return Math.min(this.state.touchCurrentX, this.state.sidebarWidth);
  };

  _proto.render = function render() {
    var sidebarStyle = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, defaultStyles.sidebar, this.props.styles.sidebar);

    var contentStyle = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, defaultStyles.content, this.props.styles.content);

    var overlayStyle = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, defaultStyles.overlay, this.props.styles.overlay);

    var useTouch = this.state.dragSupported && this.props.touch;
    var isTouching = this.isTouching();
    var rootProps = {
      className: this.props.rootClassName,
      style: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, defaultStyles.root, this.props.styles.root),
      role: "navigation",
      id: this.props.rootId
    };
    var dragHandle;
    var hasBoxShadow = this.props.shadow && (isTouching || this.props.open || this.props.docked); // sidebarStyle right/left

    if (this.props.pullRight) {
      sidebarStyle.right = 0;
      sidebarStyle.transform = "translateX(100%)";
      sidebarStyle.WebkitTransform = "translateX(100%)";

      if (hasBoxShadow) {
        sidebarStyle.boxShadow = "-2px 2px 4px rgba(0, 0, 0, 0.15)";
      }
    } else {
      sidebarStyle.left = 0;
      sidebarStyle.transform = "translateX(-100%)";
      sidebarStyle.WebkitTransform = "translateX(-100%)";

      if (hasBoxShadow) {
        sidebarStyle.boxShadow = "2px 2px 4px rgba(0, 0, 0, 0.15)";
      }
    }

    if (isTouching) {
      var percentage = this.touchSidebarWidth() / this.state.sidebarWidth; // slide open to what we dragged

      if (this.props.pullRight) {
        sidebarStyle.transform = "translateX(" + (1 - percentage) * 100 + "%)";
        sidebarStyle.WebkitTransform = "translateX(" + (1 - percentage) * 100 + "%)";
      } else {
        sidebarStyle.transform = "translateX(-" + (1 - percentage) * 100 + "%)";
        sidebarStyle.WebkitTransform = "translateX(-" + (1 - percentage) * 100 + "%)";
      } // fade overlay to match distance of drag


      overlayStyle.opacity = percentage;
      overlayStyle.visibility = "visible";
    } else if (this.props.docked) {
      // show sidebar
      if (this.state.sidebarWidth !== 0) {
        sidebarStyle.transform = "translateX(0%)";
        sidebarStyle.WebkitTransform = "translateX(0%)";
      } // make space on the left/right side of the content for the sidebar


      if (this.props.pullRight) {
        contentStyle.right = this.state.sidebarWidth + "px";
      } else {
        contentStyle.left = this.state.sidebarWidth + "px";
      }
    } else if (this.props.open) {
      // slide open sidebar
      sidebarStyle.transform = "translateX(0%)";
      sidebarStyle.WebkitTransform = "translateX(0%)"; // show overlay

      overlayStyle.opacity = 1;
      overlayStyle.visibility = "visible";
    }

    if (isTouching || !this.props.transitions) {
      sidebarStyle.transition = "none";
      sidebarStyle.WebkitTransition = "none";
      contentStyle.transition = "none";
      overlayStyle.transition = "none";
    }

    if (useTouch) {
      if (this.props.open) {
        rootProps.onTouchStart = this.onTouchStart;
        rootProps.onTouchMove = this.onTouchMove;
        rootProps.onTouchEnd = this.onTouchEnd;
        rootProps.onTouchCancel = this.onTouchEnd;
        rootProps.onScroll = this.onScroll;
      } else {
        var dragHandleStyle = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, defaultStyles.dragHandle, this.props.styles.dragHandle);

        dragHandleStyle.width = this.props.touchHandleWidth; // dragHandleStyle right/left

        if (this.props.pullRight) {
          dragHandleStyle.right = 0;
        } else {
          dragHandleStyle.left = 0;
        }

        dragHandle = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          style: dragHandleStyle,
          onTouchStart: this.onTouchStart,
          onTouchMove: this.onTouchMove,
          onTouchEnd: this.onTouchEnd,
          onTouchCancel: this.onTouchEnd
        });
      }
    }

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", rootProps, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: this.props.sidebarClassName,
      style: sidebarStyle,
      ref: this.saveSidebarRef,
      id: this.props.sidebarId
    }, this.props.sidebar), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: this.props.overlayClassName,
      style: overlayStyle,
      onClick: this.overlayClicked,
      id: this.props.overlayId
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: this.props.contentClassName,
      style: contentStyle,
      id: this.props.contentId
    }, dragHandle, this.props.children));
  };

  return Sidebar;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

 true ? Sidebar.propTypes = {
  // main content to render
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node.isRequired,
  // styles
  styles: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    root: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
    sidebar: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
    content: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
    overlay: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
    dragHandle: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object
  }),
  // root component optional class
  rootClassName: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  // sidebar optional class
  sidebarClassName: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  // content optional class
  contentClassName: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  // overlay optional class
  overlayClassName: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  // sidebar content to render
  sidebar: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node.isRequired,
  // boolean if sidebar should be docked
  docked: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  // boolean if sidebar should slide open
  open: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  // boolean if transitions should be disabled
  transitions: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  // boolean if touch gestures are enabled
  touch: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  // max distance from the edge we can start touching
  touchHandleWidth: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  // Place the sidebar on the right
  pullRight: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  // Enable/Disable sidebar shadow
  shadow: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  // distance we have to drag the sidebar to toggle open state
  dragToggleDistance: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  // callback called when the overlay is clicked
  onSetOpen: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  // Initial sidebar width when page loads
  defaultSidebarWidth: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  // root component optional id
  rootId: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  // sidebar optional id
  sidebarId: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  // content optional id
  contentId: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  // overlay optional id
  overlayId: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
} : undefined;
Sidebar.defaultProps = {
  docked: false,
  open: false,
  transitions: true,
  touch: true,
  touchHandleWidth: 20,
  pullRight: false,
  shadow: true,
  dragToggleDistance: 30,
  onSetOpen: function onSetOpen() {},
  styles: {},
  defaultSidebarWidth: 0
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);


/***/ })

})
//# sourceMappingURL=_app.js.09304d3d6b19479eb7c1.hot-update.js.map