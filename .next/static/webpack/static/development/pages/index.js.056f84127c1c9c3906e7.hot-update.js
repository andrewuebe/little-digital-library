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
  function handleSubmit(e) {
    e.preventDefault();
    console.log(props.itemIsShared);
    props.itemSubmit();
  }

  if (props.itemIsSelected) {
    console.log(props.itemIsShared);

    if (props.itemIsShared) {
      console.log("at least we got here hehe");
      return __jsx(RightWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "Thanks for sharing!"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "You now have access to ", props.selectedItem[0].title));
    } else {
      return __jsx(RightWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, __jsx(ItemSubmitForm, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, __jsx(FormTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "What you're sharing"), __jsx(_comps_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
        changeItemInput: props.changeItemInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }), __jsx(ItemSubmitButton, {
        onClick: handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "Share item")));
    }
  } else {
    return __jsx(RightWrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, __jsx(_comps_ItemList__WEBPACK_IMPORTED_MODULE_1__["default"], {
      items: props.items,
      selectItem: props.selectItem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (RightSide);

/***/ })

})
//# sourceMappingURL=index.js.056f84127c1c9c3906e7.hot-update.js.map