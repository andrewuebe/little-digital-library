module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./comps/Item.js":
/*!***********************!*\
  !*** ./comps/Item.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/andrewuebe/little-digital-library/comps/Item.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ItemCard = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Item__ItemCard",
  componentId: "d1mwt9-0"
})(["box-sizing:border-box;display:flex;flex-wrap:wrap;position:relative;align-items:flex-start;align-content:flex-start;width:100%;margin-bottom:1rem;padding:1rem;border:1px solid #53443b;background-color:#f9ebef;::after{content:\"\";width:100%;height:100%;background-color:#53443b;border:1px solid #53443b;top:2px;left:2px;position:absolute;z-index:-1;}h1{width:100%;}:hover{cursor:pointer;background-color:#fad3de;transition:0.1s ease;}:hover::after{top:4px;left:4px;transition:0.1s ease;}"]);
const ItemType = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Item__ItemType",
  componentId: "d1mwt9-1"
})(["font-weight:300;width:100%;text-transform:uppercase;color:#b9607a;margin-bottom:0px;"]);
const ItemTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "Item__ItemTitle",
  componentId: "d1mwt9-2"
})(["margin-bottom:0px;"]);
const ItemAuthor = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Item__ItemAuthor",
  componentId: "d1mwt9-3"
})(["width:100%;margin-bottom:1rem;font-size:14px;color:#afa49c;"]);

function truncate(string, charLimit) {
  // returns as many whole words under a max character limit
  if (string.length > charLimit) {
    // regex
    var subString = string.replace(/^(.{18}[^\s]*).*/, "$1");
    return subString + "...";
  } else {
    return string;
  }
}

const Item = props => {
  function handleClick(e) {
    props.selectItem(props.itemID);
  }

  return __jsx(ItemCard, {
    onClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, __jsx(ItemType, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, props.type), __jsx(ItemTitle, {
    title: props.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, truncate(props.title, 20)), __jsx(ItemAuthor, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, props.author));
};

/* harmony default export */ __webpack_exports__["default"] = (Item);

/***/ }),

/***/ "./comps/ItemList.js":
/*!***************************!*\
  !*** ./comps/ItemList.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Item */ "./comps/Item.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/andrewuebe/little-digital-library/comps/ItemList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Items = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ItemList__Items",
  componentId: "sc-1ys8h2x-0"
})(["box-sizing:border-box;"]);

const ItemList = props => {
  return __jsx(Items, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, props.items.map((item, index) => __jsx(_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: item.id,
    itemID: item.id,
    title: item.title,
    author: item.author,
    type: item.type,
    note: item.note,
    selectItem: props.selectItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ItemList);

/***/ }),

/***/ "./comps/LeftSide.js":
/*!***************************!*\
  !*** ./comps/LeftSide.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/andrewuebe/little-digital-library/comps/LeftSide.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Table = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "LeftSide__Table",
  componentId: "ww0up8-0"
})([""]);
const LeftWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "LeftSide__LeftWrapper",
  componentId: "ww0up8-1"
})(["display:inline-block;box-sizing:border-box;width:50%;padding:0px 2rem;vertical-align:top;margin-bottom:2rem;h1{font-weight:600;font-size:50px;display:block;position:relative;}@media screen and (max-width:850px){display:block;width:100%;}"]);
const SearchBar = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input.withConfig({
  displayName: "LeftSide__SearchBar",
  componentId: "ww0up8-2"
})(["font-family:\"Hind\",Helvetica,sans-serif;width:100%;height:56px;padding:10px 20px;position:relative;transition:0.3s all;font-size:20px;background:none;border:none;border-bottom:3px solid #afa49c;color:#53443b;::placeholder{color:#afa49c;}:focus{border-bottom:3px solid #53443b;outline:none;}"]);
const ReviewCard = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "LeftSide__ReviewCard",
  componentId: "ww0up8-3"
})(["box-sizing:border-box;display:block;flex-wrap:wrap;position:relative;align-items:flex-start;align-content:flex-start;width:100%;margin-bottom:1rem;padding:1rem;border:1px solid #53443b;background-color:#f9ebef;::after{content:\"\";width:100%;height:100%;background-color:#53443b;border:1px solid #53443b;top:2px;left:2px;position:absolute;z-index:-1;}"]);
const FormTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "LeftSide__FormTitle",
  componentId: "ww0up8-4"
})(["font-size:1rem;text-transform:uppercase;font-weight:600;margin-bottom:2rem;"]);
const ItemInfoField = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "LeftSide__ItemInfoField",
  componentId: "ww0up8-5"
})(["display:block;position:relative;padding-top:2rem;padding-bottom:1rem;font-family:\"Montserrat\",Helvetica,sans-serif;font-size:40px;line-height:48px;font-weight:300;.typeName{font-size:100px;}span{font-family:\"Hind\",Helvetica,sans-serif;display:block;position:absolute;font-size:16px;text-transform:uppercase;color:#b9607a;top:0px;}p{margin-bottom:0px;}"]);
const LinkInputBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input.withConfig({
  displayName: "LeftSide__LinkInputBox",
  componentId: "ww0up8-6"
})(["display:inline-block;width:calc(100% - 52px);border:1px solid #b9607a;padding:1rem 1rem 1rem 2.3rem;box-sizing:border-box;:focus{outline:none;}"]);
const LinkLock = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "LeftSide__LinkLock",
  componentId: "ww0up8-7"
})(["position:absolute;top:44px;padding-left:10px;height:47px;color:#b9607a;"]);
const LinkCopy = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "LeftSide__LinkCopy",
  componentId: "ww0up8-8"
})(["display:inline-block;width:52px;height:47px;color:white;background-color:#b9607a;border:1px solid #b9607a;border-left:none;:hover{cursor:pointer;}"]);

const LeftSide = props => {
  function truncate(string) {
    // regex
    var subString = string.substring(0, 20);
    return subString + "...";
  }

  const linkBox = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();

  function handleClick(e) {
    console.log(e);
  }

  ;

  if (props.itemIsSelected) {
    return __jsx(LeftWrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: undefined
    }, __jsx(ReviewCard, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: undefined
    }, __jsx(FormTitle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: undefined
    }, "What you're taking"), __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: undefined
    }, props.selectedItem[0].title), __jsx(ItemInfoField, {
      className: props.itemLinkLocked && "link-locked",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: undefined
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: undefined
    }, "Link"), __jsx(LinkInputBox, {
      className: props.itemLinkLocked && "link-locked",
      value: props.itemLinkLocked ? truncate(props.selectedItem[0].link) : props.selectedItem[0].link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: undefined
    }), __jsx(LinkCopy, {
      onClick: handleClick,
      className: props.itemLinkLocked && "link-locked",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: undefined
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faClipboard"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: undefined
    })), __jsx(LinkLock, {
      className: props.itemLinkLocked ? "item-link link-locked" : "item-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: undefined
    }, props.itemLinkLocked ? __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faLock"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: undefined
    }) : __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faLockOpen"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: undefined
    }))), __jsx(ItemInfoField, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: undefined
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: undefined
    }, "Item type"), props.selectedItem[0].type.charAt(0).toUpperCase() + props.selectedItem[0].type.slice(1)), props.selectedItem[0].author.length > 0 && __jsx(ItemInfoField, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: undefined
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: undefined
    }, "By"), props.selectedItem[0].author), __jsx(ItemInfoField, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: undefined
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: undefined
    }, "Shared by"), props.selectedItem[0].userId), __jsx(ItemInfoField, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: undefined
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: undefined
    }, "A note from ", props.selectedItem[0].userId), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: undefined
    }, props.selectedItem[0].note))));
  } else {
    return __jsx(LeftWrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201
      },
      __self: undefined
    }, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202
      },
      __self: undefined
    }, "Take an item.", __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204
      },
      __self: undefined
    }), " Share an item."), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206
      },
      __self: undefined
    }, "Inspired by the", " ", __jsx("a", {
      href: "https://littlefreelibrary.org/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208
      },
      __self: undefined
    }, "Little Free Library"), " ", "book-sharing movement, the Little Digital Library contains a small selection of links shared by others in your community. The one catch? You need to leave a link in exchange for taking one."), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213
      },
      __self: undefined
    }, "So take a look around, and hopefully discover something new and exciting that a neighbor left for you."), __jsx(SearchBar, {
      type: "search",
      placeholder: "Search items",
      onChange: e => props.searchItems(e.target.value),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217
      },
      __self: undefined
    }), __jsx(Table, {
      src: "../static/table.svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222
      },
      __self: undefined
    }));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (LeftSide);

/***/ }),

/***/ "./comps/RightSide.js":
/*!****************************!*\
  !*** ./comps/RightSide.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _comps_ItemList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../comps/ItemList */ "./comps/ItemList.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _comps_TextInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../comps/TextInput */ "./comps/TextInput.js");
var _jsxFileName = "/Users/andrewuebe/little-digital-library/comps/RightSide.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const RightWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "RightSide__RightWrapper",
  componentId: "sc-9nz290-0"
})(["display:inline-block;box-sizing:border-box;width:50%;vertical-align:top;padding:0px 2rem;@media screen and (max-width:850px){display:block;width:100%;}"]);
const ItemSubmitForm = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.form.withConfig({
  displayName: "RightSide__ItemSubmitForm",
  componentId: "sc-9nz290-1"
})(["box-sizing:border-box;display:block;flex-wrap:wrap;position:relative;align-items:flex-start;align-content:flex-start;width:100%;margin-bottom:1rem;padding:1rem;"]);
const FormTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "RightSide__FormTitle",
  componentId: "sc-9nz290-2"
})(["font-size:1rem;text-transform:uppercase;font-weight:600;margin-bottom:2rem;"]);
const ItemSubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button.withConfig({
  displayName: "RightSide__ItemSubmitButton",
  componentId: "sc-9nz290-3"
})(["padding:1rem 2rem;position:relative;display:block;background:#b9607a;border:1px solid #53443b;color:white;text-transform:uppercase;font-family:\"Montserrat\",Helvetica,sans-serif;font-size:16px;:focus{outline:none;}::before{content:\"\";width:100%;height:100%;background-color:#53443b;border:1px solid #53443b;top:2px;left:2px;position:absolute;z-index:-1;}:hover{cursor:pointer;}:hover::before{transition:0.1s ease;top:4px;left:4px;}"]);

const RightSide = props => {
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
        __self: undefined
      }, __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: undefined
      }, "Thanks for sharing!"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: undefined
      }, "Now you can see what ", __jsx("a", {
        href: props.selectedItem[0].link,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: undefined
      }, props.selectedItem[0].title), " is all about!"));
    } else {
      return __jsx(RightWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: undefined
      }, __jsx(ItemSubmitForm, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: undefined
      }, __jsx(FormTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: undefined
      }, "What you're sharing"), __jsx(_comps_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
        changeItemInput: props.changeItemInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: undefined
      }), __jsx(ItemSubmitButton, {
        onClick: handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: undefined
      }, "Share item")));
    }
  } else {
    return __jsx(RightWrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: undefined
    }, __jsx(_comps_ItemList__WEBPACK_IMPORTED_MODULE_1__["default"], {
      items: props.items,
      selectItem: props.selectItem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: undefined
    }));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (RightSide);

/***/ }),

/***/ "./comps/TextInput.js":
/*!****************************!*\
  !*** ./comps/TextInput.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/andrewuebe/little-digital-library/comps/TextInput.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const InputFieldArea = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "TextInput__InputFieldArea",
  componentId: "sc-1ez8lwp-0"
})(["width:100%;padding-top:2rem;margin-bottom:1rem;position:relative;span{font-family:\"Hind\",Helvetica,sans-serif;display:block;position:absolute;font-size:16px;text-transform:uppercase;color:#b9607a;top:10px;}"]);
const InputField = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input.withConfig({
  displayName: "TextInput__InputField",
  componentId: "sc-1ez8lwp-1"
})(["width:100%;height:45px;position:relative;transition:0.3s all;background:none;box-shadow:none;border:none;border-bottom:3px solid #afa49c;font-family:\"Montserrat\",Helvetica,sans-serif;color:#53443b;font-size:40px;font-weight:300;::placeholder{color:#afa49c;}:hover{border-bottom:3px solid #53443b;}:focus{outline:none;}:hover::placeholder{outline:none;}:focus::placeholder{outline:none;border-bottom:#53443b;}"]);
const SelectField = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.select.withConfig({
  displayName: "TextInput__SelectField",
  componentId: "sc-1ez8lwp-2"
})(["font-family:\"Montserrat\",Arial,Helvetica,sans-serif,sans-serif;font-weight:300;display:block;width:100%;height:48px;padding:0px;border:none;border-bottom:3px solid #afa49c;font-family:\"Montserrat\",Helvetica,sans-serif;background:none;font-size:40px;color:#53443b;:invalid{color:#afa49c;}:hover{border-bottom:3px solid #53443b;}"]);
const TextAreaField = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.textarea.withConfig({
  displayName: "TextInput__TextAreaField",
  componentId: "sc-1ez8lwp-3"
})(["width:100%;height:96px;margin-top:17px;background:none;border:3px solid #afa49c;padding:1rem;font-family:\"Hind\",Arial,Helvetica,sans-serif;font-size:16px;font-weight:300;color:#53443b;box-sizing:border-box;::placeholder{color:rgba(0,0,0,0.3);}:hover{border:3px solid #53443b;}:focus{border:3px solid #53443b;outline:none;}"]);

const TextInput = props => {
  function handleChange(e) {
    props.changeItemInput(e.target.value, e.target.name);
  }

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
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
    __self: undefined
  }), __jsx(InputFieldArea, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, "Link"), __jsx(InputField, {
    type: "text",
    placeholder: "Paste link here",
    name: "inputLink",
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  })), __jsx(InputFieldArea, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, "Item type"), __jsx(SelectField, {
    required: true,
    defaultValue: "",
    name: "inputType",
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, __jsx("option", {
    value: "",
    disabled: true,
    hidden: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }, "Select Type"), __jsx("option", {
    value: "website",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: undefined
  }, "Website"), __jsx("option", {
    value: "book",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  }, "Book"), __jsx("option", {
    value: "video",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  }, "Video"), __jsx("option", {
    value: "movie",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: undefined
  }, "Movie"), __jsx("option", {
    value: "other",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: undefined
  }, "Other"))), __jsx(InputFieldArea, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: undefined
  }, "By"), __jsx(InputField, {
    type: "text",
    placeholder: "Who made this?",
    name: "inputAuthor",
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: undefined
  })), __jsx(InputFieldArea, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: undefined
  }, "Who are you?"), __jsx(InputField, {
    type: "text",
    placeholder: "Name",
    name: "inputUserId",
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: undefined
  })), __jsx(InputFieldArea, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: undefined
  }, "Leave a note about this item"), __jsx(TextAreaField, {
    type: "text",
    placeholder: "Ex: \"This thing always brings a smile to my face because...\"",
    name: "inputNote",
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (TextInput);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _comps_RightSide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../comps/RightSide */ "./comps/RightSide.js");
/* harmony import */ var _comps_LeftSide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comps/LeftSide */ "./comps/LeftSide.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/andrewuebe/little-digital-library/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Main = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "pages__Main",
  componentId: "sc-2gg1ow-0"
})(["display:block;max-width:1220px;margin:4rem auto;"]);
class Home extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx(Main, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx(_comps_LeftSide__WEBPACK_IMPORTED_MODULE_2__["default"], {
      searchItems: this.props.searchItems,
      itemIsSelected: this.props.itemIsSelected,
      itemLinkLocked: this.props.itemLinkLocked,
      selectedItem: this.props.itemSelected,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }), __jsx(_comps_RightSide__WEBPACK_IMPORTED_MODULE_1__["default"], {
      items: this.props.items,
      itemIsSelected: this.props.itemIsSelected,
      selectItem: this.props.selectItem,
      changeItemInput: this.props.changeItemInput,
      itemSubmit: this.props.itemSubmit,
      itemIsShared: this.props.itemIsShared,
      selectedItem: this.props.itemSelected,
      returnToList: this.props.returnToList,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }));
  }

}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/andrewuebe/little-digital-library/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map