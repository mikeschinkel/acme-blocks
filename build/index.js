/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/hero/index.js":
/*!**********************************!*\
  !*** ./src/blocks/hero/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);



var heroIcon = function heroIcon() {
  var svgStyle = {
    shapeRendering: 'geometricPrecision',
    textRendering: 'geometricPrecision',
    imageRendering: 'optimizeQuality',
    fillRule: 'evenodd',
    clipRule: 'evenodd'
  };
  var rectStyle = {
    fill: 'white',
    fillOpacity: 0,
    pointerEvents: 'none'
  };
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    id: "master-artboard",
    viewBox: "0 0 20 16",
    xmlns: "http://www.w3.org/2000/svg",
    width: "20px",
    height: "16px",
    version: "1.1",
    style: svgStyle
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    id: "ee-background",
    x: "0",
    y: "0",
    width: "20",
    height: "16",
    style: rectStyle,
    transform: "matrix(1, 0, 0, 1, -4, 0)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
    transform: "matrix(0.023980814963579174, 0, 0, 0.024115797132253647, -0.8190102577209473, -0.06535547971725464)"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M448 646L31 160 172 24h552l141 136-417 486z",
    fill: "#f70000",
    stroke: "#000",
    strokeWidth: "6"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
    fill: "#fff800",
    stroke: "#000",
    strokeWidth: "4"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M206.949 298.431L278.5 383c39.277-36.18 131.561-27.859 160.25 21.5 79.642 1.258 146.988 5.246 173.247-26.589 7.437-10.468 9.66-21.991-.295-29.753-47.004-32.067-215.51-15.164-404.753-49.727zM93 163.75c-1 .25 99.279-96.5 99.279-96.5h48.471c-49.449 39.559-84.132 94.132-99.345 153.714L93 163.75zM348.858 461.594L448 577.005l94.922-110.499c-48.188 11.315-101.739 16.908-194.064-4.912z",
    strokeMiterlimit: "2"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M593.75 67.25h42c.924 15.344-6.486 25.218-11.13 30.086-9.766-13.822-25.202-26.836-30.87-30.086z",
    strokeMiterlimit: "4"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M709.255 275.885L803 163.75l-67.964-67.224v75.661h-140.36c-3.222-73.174-77.331-104.613-163.592-103.643-79.243.892-145.398 20.85-151.584 64.956-6.041 24.915 21.4 66.906 187.5 58.5 132.198-2.923 213.238 26.099 242.255 83.885z"
  }))));
};

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('acme/hero', {
  title: 'Hero Module',
  icon: function icon() {
    return heroIcon();
  },
  category: 'common',
  attributes: {
    header: {
      type: 'string'
    },
    subheader: {
      type: 'string'
    }
  },
  edit: function edit(props) {
    var attributes = props.attributes,
        className = props.className,
        setAttributes = props.setAttributes;

    var updateHeader = function updateHeader(event) {
      setAttributes({
        header: event.target.value
      });
    };

    var updateSubheader = function updateSubheader(event) {
      setAttributes({
        subheader: event.target.value
      });
    };

    var divStyle = {
      border: "1px solid red",
      padding: "0 2em"
    };
    var titleStyle = {
      margin: "-1em 0 0 -1em",
      background: "white",
      fontSize: "1.25em",
      width: "3.7em"
    };
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: className,
      style: divStyle
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: titleStyle
    }, "[ Hero ]"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
      htmlFor: "header"
    }, "Header: "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
      id: "header",
      type: "text",
      size: "75",
      value: attributes.header,
      onChange: updateHeader
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
      htmlFor: "subheader"
    }, "Subheader: "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("textarea", {
      id: "subheader",
      rows: "3",
      cols: "74",
      onChange: updateSubheader
    }, attributes.subheader)));
  } // save: (props) => {
  //    const {attributes,className,setAttributes} = props;
  //    return (
  //       <div class={props.className}>
  //          <h2>{attributes.header}</h2>
  //          <p>{attributes.subheader}</p>
  //       </div>
  //    )
  // }

});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/hero */ "./src/blocks/hero/index.js");


/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map