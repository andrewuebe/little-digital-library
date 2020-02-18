webpackHotUpdate("static/development/pages/index.js",{

/***/ "./comps/TextInput.js":
/*!****************************!*\
  !*** ./comps/TextInput.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/andrewuebe/little-digital-library/comps/TextInput.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var InputFieldArea = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "TextInput__InputFieldArea",
  componentId: "sc-1ez8lwp-0"
})(["width:100%;padding-top:2rem;margin-bottom:1rem;position:relative;span{font-family:\"Hind\",Helvetica,sans-serif;display:block;position:absolute;font-size:16px;text-transform:uppercase;color:#b9607a;top:10px;}"]);
var InputField = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input.withConfig({
  displayName: "TextInput__InputField",
  componentId: "sc-1ez8lwp-1"
})(["width:100%;height:45px;position:relative;transition:0.3s all;background:none;box-shadow:none;border:none;border-bottom:3px solid #afa49c;font-family:\"Montserrat\",Helvetica,sans-serif;color:#53443b;font-size:40px;font-weight:300;::placeholder{color:#afa49c;}:hover{border-bottom:3px solid #53443b;}:focus{outline:none;}:hover::placeholder{outline:none;}:focus::placeholder{outline:none;border-bottom:#53443b;}"]);
var SelectField = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].select.withConfig({
  displayName: "TextInput__SelectField",
  componentId: "sc-1ez8lwp-2"
})(["font-family:\"Montserrat\",Arial,Helvetica,sans-serif,sans-serif;font-weight:300;display:block;width:100%;height:48px;padding:0px;border:none;border-bottom:3px solid #afa49c;font-family:\"Montserrat\",Helvetica,sans-serif;background:none;font-size:40px;color:#53443b;:invalid{color:#afa49c;}:hover{border-bottom:3px solid #53443b;}"]);
var TextAreaField = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].textarea.withConfig({
  displayName: "TextInput__TextAreaField",
  componentId: "sc-1ez8lwp-3"
})(["width:100%;height:96px;margin-top:17px;background:none;border:3px solid #afa49c;padding:1rem;font-family:\"Hind\",Arial,Helvetica,sans-serif;font-size:16px;font-weight:300;color:#53443b;box-sizing:border-box;::placeholder{color:rgba(0,0,0,0.3);}:hover{border:3px solid #53443b;}:focus{border:3px solid #53443b;outline:none;}"]);

var TextInput = function TextInput(props) {
  function handleChange(e) {
    props.changeItemInput(e.target.value, e.target.name);
  }

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx(InputField, {
    type: "text",
    className: "input-title",
    placeholder: "Item name",
    name: "inputTitle",
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }), __jsx(InputFieldArea, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "Link"), __jsx(InputField, {
    type: "text",
    placeholder: "Paste link here",
    name: "inputLink",
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  })), __jsx(InputFieldArea, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, "Item type"), __jsx(SelectField, {
    required: true,
    defaultValue: "",
    name: "inputType",
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx("option", {
    value: "",
    disabled: true,
    hidden: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, "Select Type"), __jsx("option", {
    value: "website",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "Website"), __jsx("option", {
    value: "book",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "Book"), __jsx("option", {
    value: "video",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "Video"), __jsx("option", {
    value: "movie",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, "Movie"), __jsx("option", {
    value: "other",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "Other"))), __jsx(InputFieldArea, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "By"), __jsx(InputField, {
    type: "text",
    placeholder: "Who made this?",
    name: "inputAuthor",
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  })), __jsx(InputFieldArea, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "Who are you?"), __jsx(InputField, {
    type: "text",
    placeholder: "Name",
    name: "inputUserId",
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  })), __jsx(InputFieldArea, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, "Leave a note about this item"), __jsx(TextAreaField, {
    type: "text",
    placeholder: "Ex: \"This thing always brings a smile to my face because...\"",
    name: "inputNote",
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (TextInput);

/***/ })

})
//# sourceMappingURL=index.js.4c42f94cc4e2c38cb025.hot-update.js.map