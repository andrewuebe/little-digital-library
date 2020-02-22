webpackHotUpdate("static/development/pages/index.js",{

/***/ "./comps/RightSide.js":
/*!****************************!*\
  !*** ./comps/RightSide.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _comps_ItemList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../comps/ItemList */ "./comps/ItemList.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _comps_TextInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../comps/TextInput */ "./comps/TextInput.js");
var _jsxFileName = "/Users/andrewuebe/little-digital-library/comps/RightSide.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var RightWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "RightSide__RightWrapper",
  componentId: "sc-9nz290-0"
})(["display:inline-block;box-sizing:border-box;width:50%;vertical-align:top;padding:0px 2rem;@media screen and (max-width:850px){display:block;width:100%;}"]);
var ItemSubmitForm = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].form.withConfig({
  displayName: "RightSide__ItemSubmitForm",
  componentId: "sc-9nz290-1"
})(["box-sizing:border-box;display:block;flex-wrap:wrap;position:relative;align-items:flex-start;align-content:flex-start;width:100%;margin-bottom:1rem;padding:1rem;"]);
var FormTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "RightSide__FormTitle",
  componentId: "sc-9nz290-2"
})(["font-size:1rem;text-transform:uppercase;font-weight:600;margin-bottom:2rem;"]);
var ItemSubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "RightSide__ItemSubmitButton",
  componentId: "sc-9nz290-3"
})(["padding:1rem 2rem;position:relative;display:block;background:#b9607a;border:1px solid #53443b;color:white;text-transform:uppercase;font-family:\"Montserrat\",Helvetica,sans-serif;font-size:16px;:focus{outline:none;}::before{content:\"\";width:100%;height:100%;background-color:#53443b;border:1px solid #53443b;top:2px;left:2px;position:absolute;z-index:-1;}:hover{cursor:pointer;}:hover::before{transition:0.1s ease;top:4px;left:4px;}"]);

var RightSide = function RightSide(props) {
  function handleItemSubmit(e) {
    e.preventDefault();
    props.itemSubmit();
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.returnToLibrary();
  }

  if (props.itemIsSelected) {
    if (props.itemIsShared) {
      return __jsx(RightWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "Thanks for sharing!"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "Now you can see what", " ", __jsx("a", {
        href: props.selectedItem[0].link,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, props.selectedItem[0].title), " ", "is all about!"), __jsx(ItemSubmitButton, {
        onClick: handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "Return to library"));
    } else {
      return __jsx(RightWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, __jsx(ItemSubmitForm, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, __jsx(FormTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, "What you're sharing"), __jsx(_comps_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
        changeItemInput: props.changeItemInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }), __jsx(ItemSubmitButton, {
        onClick: handleItemSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "Share item")));
    }
  } else {
    return __jsx(RightWrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, __jsx(_comps_ItemList__WEBPACK_IMPORTED_MODULE_1__["default"], {
      items: props.items,
      selectItem: props.selectItem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (RightSide);

/***/ })

})
//# sourceMappingURL=index.js.4a115c0137c0dff49bd3.hot-update.js.map