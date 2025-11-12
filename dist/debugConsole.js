"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InitializeDebugConsole = exports.DebugConsole = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
require("./../DebugConsole.css");
var _apiController = _interopRequireDefault(require("../apiController"));
var _Enums = require("../objects/Enums");
var _client = require("react-dom/client");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var DebugConsole = exports.DebugConsole = function DebugConsole() {
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    isVisible = _React$useState2[0],
    setVisible = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(false),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    isTestServer = _React$useState4[0],
    setIsTestServer = _React$useState4[1];
  (0, _react.useEffect)(function () {
    _apiController["default"].GetLocalRKey().then(function (rkey) {
      if (rkey == _Enums.R_KEYs.r_key_test) setIsTestServer(true);
    });
  }, []);
  var width = 600;
  var height = 400;
  var dragging = false;
  var mouseOffsetX = 0;
  var mouseOffsetY = 0;
  var dir = {
    x: 0,
    y: 0
  };
  var setDragging = function setDragging(state, e) {
    if (state != dragging) {
      var posX = e.clientX;
      var posY = e.clientY;
      var consoleElem = document.getElementById('debug-console');
      if (!consoleElem) return;
      var rect = consoleElem.getBoundingClientRect();
      mouseOffsetX = posX - rect.left;
      mouseOffsetY = posY - rect.top;
      if (state) {
        dir.x = posX;
        dir.y = posY;
      } else {
        dir.x = e.clientX - dir.x;
        dir.y = e.clientY - dir.y;
      }
    }
    dragging = state;
  };
  var updatePosition = function updatePosition(posX, posY) {
    if (!dragging) return;
    var consoleElem = document.getElementById('debug-console');
    if (!consoleElem) return;
    consoleElem.style.left = posX - mouseOffsetX + 'px';
    consoleElem.style.top = posY - mouseOffsetY + 'px';
  };
  var hasDragged = function hasDragged() {
    return dir.x > 1 || dir.y > 1;
  };
  window.addEventListener('mousemove', function (e) {
    updatePosition(e.clientX, e.clientY);
  });
  var minimizeToggle = function minimizeToggle() {
    var iframe = document.getElementById('debug-console-iframe');
    if (iframe.style.display == 'none') iframe.style.display = '';else iframe.style.display = 'none';
  };
  if (!isTestServer) return null;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    id: "debug-console"
  }, isVisible == false ? /*#__PURE__*/_react["default"].createElement("div", {
    onMouseDown: function onMouseDown(e) {
      setDragging(true, e);
    },
    onMouseUp: function onMouseUp(e) {
      setDragging(false, e);
    },
    onClick: function onClick() {
      if (!hasDragged()) setVisible(true);
    },
    id: "debug-console-icon"
  }) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    onMouseDown: function onMouseDown(e) {
      setDragging(true, e);
    },
    onMouseUp: function onMouseUp(e) {
      setDragging(false, e);
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    onClick: function onClick() {
      return minimizeToggle();
    },
    className: "debug-console-minimize"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    onClick: function onClick() {
      return setVisible(false);
    },
    className: "debug-console-close"
  })), /*#__PURE__*/_react["default"].createElement("iframe", {
    id: "debug-console-iframe",
    width: width + "px",
    height: height + "px",
    src: "https://test.itutoring.cz/toolkit/lazydebug/"
  }))));
};
var InitializeDebugConsole = exports.InitializeDebugConsole = function InitializeDebugConsole() {
  var debugConsoleContainer = document.createElement('div');
  document.body.appendChild(debugConsoleContainer);
  (0, _client.createRoot)(debugConsoleContainer).render(/*#__PURE__*/_react["default"].createElement(DebugConsole, null));
};