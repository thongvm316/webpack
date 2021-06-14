/*! For license information please see bundle.d9e869eb0d9879ef1247.js.LICENSE.txt */
(()=>{"use strict";var __webpack_modules__={"./src/add-image.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _test_size_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test-size.jpg */ "./src/test-size.jpg");\n/* harmony import */ var _altText_txt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./altText.txt */ "./src/altText.txt");\n\n\n\nfunction addImage() {\n  var img = document.createElement(\'img\');\n  img.alt = _altText_txt__WEBPACK_IMPORTED_MODULE_1__;\n  img.width = 300;\n  img.src = _test_size_jpg__WEBPACK_IMPORTED_MODULE_0__;\n  var body = document.querySelector(\'body\');\n  body.appendChild(img);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addImage);\n\n//# sourceURL=webpack://Webpack/./src/add-image.js?')},"./src/components/heading/heading.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _heading_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heading.scss */ "./src/components/heading/heading.scss");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Heading = /*#__PURE__*/function () {\n  function Heading() {\n    _classCallCheck(this, Heading);\n  }\n\n  _createClass(Heading, [{\n    key: "render",\n    value: function render() {\n      var h1 = document.createElement(\'h1\');\n      var body = document.querySelector(\'body\');\n      h1.innerHTML = \'Webpack is awesome!\';\n      body.appendChild(h1);\n    }\n  }]);\n\n  return Heading;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Heading);\n\n//# sourceURL=webpack://Webpack/./src/components/heading/heading.js?')},"./src/components/hello-world-button/hello-world-button.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _hello_world_button_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hello-world-button.scss */ \"./src/components/hello-world-button/hello-world-button.scss\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar HelloWorldButton = /*#__PURE__*/function () {\n  function HelloWorldButton() {\n    _classCallCheck(this, HelloWorldButton);\n\n    _defineProperty(this, \"buttonCssClass\", 'hello-world-button');\n  }\n\n  _createClass(HelloWorldButton, [{\n    key: \"render\",\n    value: function render() {\n      var button = document.createElement('button');\n      button.classList.add(this.buttonCssClass);\n      button.innerHTML = ' Hello World';\n      var body = document.querySelector('body');\n\n      button.onclick = function () {\n        var p = document.createElement('p');\n        p.innerHTML = 'Hello World';\n        p.classList.add('hello-world-text');\n        body.appendChild(p);\n      };\n\n      body.appendChild(button);\n    }\n  }]);\n\n  return HelloWorldButton;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HelloWorldButton);\n\n//# sourceURL=webpack://Webpack/./src/components/hello-world-button/hello-world-button.js?")},"./src/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_hello_world_button_hello_world_button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/hello-world-button/hello-world-button.js */ "./src/components/hello-world-button/hello-world-button.js");\n/* harmony import */ var _components_heading_heading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/heading/heading */ "./src/components/heading/heading.js");\n/* harmony import */ var _add_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-image */ "./src/add-image.js");\n\n\n\nvar heading = new _components_heading_heading__WEBPACK_IMPORTED_MODULE_1__.default();\nheading.render();\nvar helloWorldButton = new _components_hello_world_button_hello_world_button_js__WEBPACK_IMPORTED_MODULE_0__.default();\nhelloWorldButton.render(); // addImage()\n\nif (false) {} else if (true) {\n  console.log(\'Development mode\');\n}\n\nhelloWorldButton.methodThatDoesntExist();\n\n//# sourceURL=webpack://Webpack/./src/index.js?')},"./src/components/heading/heading.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://Webpack/./src/components/heading/heading.scss?")},"./src/components/hello-world-button/hello-world-button.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://Webpack/./src/components/hello-world-button/hello-world-button.scss?")},"./src/altText.txt":module=>{eval('module.exports = "Bg alt text";\n\n//# sourceURL=webpack://Webpack/./src/altText.txt?')},"./src/test-size.jpg":(module,__unused_webpack_exports,__webpack_require__)=>{eval('module.exports = __webpack_require__.p + "456fc171f84ff7e694dd.jpg";\n\n//# sourceURL=webpack://Webpack/./src/test-size.jpg?')}},__webpack_module_cache__={};function __webpack_require__(e){var _=__webpack_module_cache__[e];if(void 0!==_)return _.exports;var r=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](r,r.exports,__webpack_require__),r.exports}__webpack_require__.d=(e,_)=>{for(var r in _)__webpack_require__.o(_,r)&&!__webpack_require__.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:_[r]})},__webpack_require__.o=(e,_)=>Object.prototype.hasOwnProperty.call(e,_),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.p="";var __webpack_exports__=__webpack_require__("./src/index.js")})();