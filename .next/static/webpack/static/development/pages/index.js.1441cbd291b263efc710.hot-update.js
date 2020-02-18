webpackHotUpdate("static/development/pages/index.js",{

/***/ "./comps/LeftSide.js":
/*!***************************!*\
  !*** ./comps/LeftSide.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-copy-to-clipboard */ "./node_modules/react-copy-to-clipboard/lib/index.js");
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/andrewuebe/little-digital-library/comps/LeftSide.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Table = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "LeftSide__Table",
  componentId: "ww0up8-0"
})([""]);
var LeftWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "LeftSide__LeftWrapper",
  componentId: "ww0up8-1"
})(["display:inline-block;box-sizing:border-box;width:50%;padding:0px 2rem;vertical-align:top;h1{font-weight:600;font-size:50px;display:block;position:relative;}@media screen and (max-width:850px){display:block;width:100%;}"]);
var SearchBar = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input.withConfig({
  displayName: "LeftSide__SearchBar",
  componentId: "ww0up8-2"
})(["font-family:\"Hind\",Helvetica,sans-serif;width:100%;height:56px;padding:10px 20px;position:relative;transition:0.3s all;font-size:20px;background:none;border:none;border-bottom:3px solid #afa49c;color:#53443b;::placeholder{color:#afa49c;}:focus{border-bottom:3px solid #53443b;outline:none;}"]);
var ReviewCard = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "LeftSide__ReviewCard",
  componentId: "ww0up8-3"
})(["box-sizing:border-box;display:block;flex-wrap:wrap;position:relative;align-items:flex-start;align-content:flex-start;width:100%;margin-bottom:1rem;padding:1rem;border:1px solid #53443b;background-color:#f9ebef;::after{content:\"\";width:100%;height:100%;background-color:#53443b;border:1px solid #53443b;top:2px;left:2px;position:absolute;z-index:-1;}"]);
var FormTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "LeftSide__FormTitle",
  componentId: "ww0up8-4"
})(["font-size:1rem;text-transform:uppercase;font-weight:600;margin-bottom:2rem;"]);
var ItemInfoField = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "LeftSide__ItemInfoField",
  componentId: "ww0up8-5"
})(["display:block;position:relative;padding-top:2rem;padding-bottom:1rem;font-family:\"Montserrat\",Helvetica,sans-serif;font-size:40px;line-height:48px;font-weight:300;.typeName{font-size:100px;}span{font-family:\"Hind\",Helvetica,sans-serif;display:block;position:absolute;font-size:16px;text-transform:uppercase;color:#b9607a;top:0px;}p{margin-bottom:0px;}"]);
var LinkInputBox = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input.withConfig({
  displayName: "LeftSide__LinkInputBox",
  componentId: "ww0up8-6"
})(["display:inline-block;width:calc(100% - 52px);border:1px solid #b9607a;padding:1rem 1rem 1rem 2.3rem;box-sizing:border-box;"]);
var LinkLock = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "LeftSide__LinkLock",
  componentId: "ww0up8-7"
})(["position:absolute;top:44px;padding-left:10px;width:calc(100% - 52px);height:47px;border:1px solid #b9607a;color:#b9607a;"]);
var LinkCopy = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
  displayName: "LeftSide__LinkCopy",
  componentId: "ww0up8-8"
})(["display:inline-block;width:52px;height:47px;color:white;background-color:#b9607a;border:1px solid #b9607a;border-left:none;:hover{cursor:pointer;}"]);

var LeftSide = function LeftSide(props) {
  state = {
    value: '',
    copied: false
  };

  function truncate(string) {
    // regex
    var subString = string.substring(0, 20);
    return subString + "...";
  }

  if (props.itemIsSelected) {
    return __jsx(LeftWrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }, __jsx(ReviewCard, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, __jsx(FormTitle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }, "What you're taking"), __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }, props.selectedItem[0].title), __jsx(ItemInfoField, {
      className: props.itemLinkLocked && "link-locked",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }, "Link"), __jsx(LinkInputBox, {
      className: props.itemLinkLocked && "link-locked",
      value: props.itemLinkLocked ? truncate(props.selectedItem[0].link) : props.selectedItem[0].link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }), __jsx(LinkCopy, {
      className: props.itemLinkLocked && "link-locked",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faClipboard"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    })), __jsx(LinkLock, {
      className: props.itemLinkLocked ? "item-link link-locked" : "item-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }, props.itemLinkLocked ? __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faLock"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }) : __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faLockOpen"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }))), __jsx(ItemInfoField, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }, "Item type"), props.selectedItem[0].type.charAt(0).toUpperCase() + props.selectedItem[0].type.slice(1)), props.selectedItem[0].author.length > 0 && __jsx(ItemInfoField, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }, "By"), props.selectedItem[0].author), __jsx(ItemInfoField, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: this
    }, "Shared by"), props.selectedItem[0].userId), __jsx(ItemInfoField, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    }, "A note from ", props.selectedItem[0].userId), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    }, props.selectedItem[0].note))));
  } else {
    return __jsx(LeftWrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: this
    }, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200
      },
      __self: this
    }, "Take an item.", __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202
      },
      __self: this
    }), " Share an item."), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204
      },
      __self: this
    }, "Inspired by the", " ", __jsx("a", {
      href: "https://littlefreelibrary.org/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206
      },
      __self: this
    }, "Little Free Library"), " ", "book-sharing movement, the Little Digital Library contains a small selection of links shared by others in your community. The one catch? You need to leave a link in exchange for taking one."), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211
      },
      __self: this
    }, "So take a look around, and hopefully discover something new and exciting that a neighbor left for you."), __jsx(SearchBar, {
      type: "search",
      placeholder: "Search items",
      onChange: function onChange(e) {
        return props.searchItems(e.target.value);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215
      },
      __self: this
    }), __jsx(Table, {
      src: "../static/table.svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220
      },
      __self: this
    }));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (LeftSide);

/***/ }),

/***/ "./node_modules/copy-to-clipboard/index.js":
/*!*************************************************!*\
  !*** ./node_modules/copy-to-clipboard/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var deselectCurrent = __webpack_require__(/*! toggle-selection */ "./node_modules/toggle-selection/index.js");

var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
}

var defaultMessage = "Copy to clipboard: #{key}, Enter";

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug,
    message,
    reselectPrevious,
    range,
    selection,
    mark,
    success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement("span");
    mark.textContent = text;
    // reset user styles for span element
    mark.style.all = "unset";
    // prevents scrolling to the end of the page
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = "pre";
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") { // IE 11
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"]
          window.clipboardData.setData(format, text);
        } else { // all other browsers
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
    });

    document.body.appendChild(mark);

    range.selectNodeContents(mark);
    selection.addRange(range);

    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.error("unable to copy using clipboardData: ", err);
    debug && console.error("falling back to prompt");
    message = format("message" in options ? options.message : defaultMessage);
    window.prompt(message, text);
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

module.exports = copy;


/***/ }),

/***/ "./node_modules/react-copy-to-clipboard/lib/Component.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-copy-to-clipboard/lib/Component.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CopyToClipboard = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _copyToClipboard = _interopRequireDefault(__webpack_require__(/*! copy-to-clipboard */ "./node_modules/copy-to-clipboard/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CopyToClipboard =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(CopyToClipboard, _React$PureComponent);

  function CopyToClipboard() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CopyToClipboard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CopyToClipboard)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onClick", function (event) {
      var _this$props = _this.props,
          text = _this$props.text,
          onCopy = _this$props.onCopy,
          children = _this$props.children,
          options = _this$props.options;

      var elem = _react["default"].Children.only(children);

      var result = (0, _copyToClipboard["default"])(text, options);

      if (onCopy) {
        onCopy(text, result);
      } // Bypass onClick if it was present


      if (elem && elem.props && typeof elem.props.onClick === 'function') {
        elem.props.onClick(event);
      }
    });

    return _this;
  }

  _createClass(CopyToClipboard, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          _text = _this$props2.text,
          _onCopy = _this$props2.onCopy,
          _options = _this$props2.options,
          children = _this$props2.children,
          props = _objectWithoutProperties(_this$props2, ["text", "onCopy", "options", "children"]);

      var elem = _react["default"].Children.only(children);

      return _react["default"].cloneElement(elem, _objectSpread({}, props, {
        onClick: this.onClick
      }));
    }
  }]);

  return CopyToClipboard;
}(_react["default"].PureComponent);

exports.CopyToClipboard = CopyToClipboard;

_defineProperty(CopyToClipboard, "defaultProps", {
  onCopy: undefined,
  options: undefined
});

/***/ }),

/***/ "./node_modules/react-copy-to-clipboard/lib/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-copy-to-clipboard/lib/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(/*! ./Component */ "./node_modules/react-copy-to-clipboard/lib/Component.js"),
    CopyToClipboard = _require.CopyToClipboard;

CopyToClipboard.CopyToClipboard = CopyToClipboard;
module.exports = CopyToClipboard;

/***/ }),

/***/ "./node_modules/toggle-selection/index.js":
/*!************************************************!*\
  !*** ./node_modules/toggle-selection/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


module.exports = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};


/***/ })

})
//# sourceMappingURL=index.js.1441cbd291b263efc710.hot-update.js.map