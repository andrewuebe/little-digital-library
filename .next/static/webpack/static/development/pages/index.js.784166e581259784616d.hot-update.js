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
  function truncate(string) {
    // regex
    var subString = string.substring(0, 20);
    return subString + "...";
  }

  function handleClick(e) {
    e.preventDefault();
    var copyText = document.getElementById("item-link-box");
  }

  if (props.itemIsSelected) {
    return __jsx(LeftWrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, __jsx(ReviewCard, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }, __jsx(FormTitle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, "What you're taking"), __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }, props.selectedItem[0].title), __jsx(ItemInfoField, {
      className: props.itemLinkLocked && "link-locked",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, "Link"), __jsx(LinkInputBox, {
      className: props.itemLinkLocked && "link-locked",
      idName: "item-link-box",
      value: props.itemLinkLocked ? truncate(props.selectedItem[0].link) : props.selectedItem[0].link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }), __jsx(LinkCopy, {
      onClick: handleClick,
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

/***/ })

})
//# sourceMappingURL=index.js.784166e581259784616d.hot-update.js.map