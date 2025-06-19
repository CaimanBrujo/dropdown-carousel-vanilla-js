/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/images/img1.jpg":
/*!************************************!*\
  !*** ./src/assets/images/img1.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/e0bed6bcd055ce81e397.jpg\";\n\n//# sourceURL=webpack://template-webpack/./src/assets/images/img1.jpg?");

/***/ }),

/***/ "./src/assets/images/img2.jpg":
/*!************************************!*\
  !*** ./src/assets/images/img2.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/7fa9bf4ae97494bb8ea7.jpg\";\n\n//# sourceURL=webpack://template-webpack/./src/assets/images/img2.jpg?");

/***/ }),

/***/ "./src/assets/images/img3.jpg":
/*!************************************!*\
  !*** ./src/assets/images/img3.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/34f5d060dd33459b4c16.jpg\";\n\n//# sourceURL=webpack://template-webpack/./src/assets/images/img3.jpg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_dropdown_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dropdown.js */ \"./src/modules/dropdown.js\");\n/* harmony import */ var _modules_slider1_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider1.js */ \"./src/modules/slider1.js\");\n/* harmony import */ var _modules_slider2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/slider2.js */ \"./src/modules/slider2.js\");\n/* harmony import */ var _modules_slider3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider3.js */ \"./src/modules/slider3.js\");\n\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  (0,_modules_dropdown_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  (0,_modules_slider1_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  (0,_modules_slider2_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  (0,_modules_slider3_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n});\n\n\n//# sourceURL=webpack://template-webpack/./src/index.js?");

/***/ }),

/***/ "./src/modules/dropdown.js":
/*!*********************************!*\
  !*** ./src/modules/dropdown.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ setupDropdown)\n/* harmony export */ });\nfunction setupDropdown() {\n  const toggle = document.querySelector('.dropdown-toggle');\n  const menu = document.querySelector('.dropdown-menu');\n  const overlay = document.querySelector('.dropdown-overlay');\n\n  function openMenu() {\n    menu.classList.add('active');\n    overlay.classList.add('active');\n    toggle.style.visibility = 'hidden';\n  }\n\n  function closeMenu() {\n    menu.classList.remove('active');\n    overlay.classList.remove('active');\n    toggle.style.visibility = 'visible';\n  }\n\n  toggle.addEventListener('click', openMenu);\n  overlay.addEventListener('click', closeMenu);\n}\n\n\n//# sourceURL=webpack://template-webpack/./src/modules/dropdown.js?");

/***/ }),

/***/ "./src/modules/slider1.js":
/*!********************************!*\
  !*** ./src/modules/slider1.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initSlider1)\n/* harmony export */ });\n/* harmony import */ var _assets_images_img1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/img1.jpg */ \"./src/assets/images/img1.jpg\");\n/* harmony import */ var _assets_images_img2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/img2.jpg */ \"./src/assets/images/img2.jpg\");\n/* harmony import */ var _assets_images_img3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/img3.jpg */ \"./src/assets/images/img3.jpg\");\n\n\n\n\nfunction initSlider1() {\n  const container = document.createElement('section');\n  container.classList.add('slideshow-container');\n\n  const slidesData = [\n    { src: _assets_images_img1_jpg__WEBPACK_IMPORTED_MODULE_0__, caption: 'ONE' },\n    { src: _assets_images_img2_jpg__WEBPACK_IMPORTED_MODULE_1__, caption: 'TWO' },\n    { src: _assets_images_img3_jpg__WEBPACK_IMPORTED_MODULE_2__, caption: 'THREE' },\n  ];\n\n  const slidesWrapper = document.createElement('div');\n  slidesWrapper.classList.add('slides-wrapper');\n\n  slidesData.forEach((slide) => {\n    const slideDiv = document.createElement('div');\n    slideDiv.classList.add('mySlides', 'fade');\n\n    const image = document.createElement('img');\n    image.src = slide.src;\n    image.alt = slide.caption;\n    image.classList.add('slide-img');\n\n    const caption = document.createElement('div');\n    caption.classList.add('text');\n    caption.textContent = slide.caption;\n\n    slideDiv.appendChild(image);\n    slideDiv.appendChild(caption);\n    slidesWrapper.appendChild(slideDiv);\n  });\n\n  const prev = document.createElement('a');\n  prev.classList.add('prev');\n  prev.innerHTML = '&#10094;';\n  prev.addEventListener('click', () => showSlides((slideIndex -= 1)));\n\n  const next = document.createElement('a');\n  next.classList.add('next');\n  next.innerHTML = '&#10095;';\n  next.addEventListener('click', () => showSlides((slideIndex += 1)));\n\n  container.appendChild(slidesWrapper);\n  container.appendChild(prev);\n  container.appendChild(next);\n  document.querySelector('.site-main').appendChild(container);\n\n  let slideIndex = 1;\n  showSlides(slideIndex);\n\n  function showSlides(n) {\n    const slides = container.querySelectorAll('.mySlides');\n\n    if (n > slides.length) slideIndex = 1;\n    if (n < 1) slideIndex = slides.length;\n\n    slides.forEach((slide) => (slide.style.display = 'none'));\n    slides[slideIndex - 1].style.display = 'block';\n  }\n}\n\n\n//# sourceURL=webpack://template-webpack/./src/modules/slider1.js?");

/***/ }),

/***/ "./src/modules/slider2.js":
/*!********************************!*\
  !*** ./src/modules/slider2.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initSlider2)\n/* harmony export */ });\n/* harmony import */ var _assets_images_img1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/img1.jpg */ \"./src/assets/images/img1.jpg\");\n/* harmony import */ var _assets_images_img2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/img2.jpg */ \"./src/assets/images/img2.jpg\");\n/* harmony import */ var _assets_images_img3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/img3.jpg */ \"./src/assets/images/img3.jpg\");\n\n\n\n\nfunction initSlider2() {\n  const container = document.createElement('section');\n  container.classList.add('slideshow-container');\n\n  const slidesData = [\n    { src: _assets_images_img1_jpg__WEBPACK_IMPORTED_MODULE_0__, caption: 'ONE' },\n    { src: _assets_images_img2_jpg__WEBPACK_IMPORTED_MODULE_1__, caption: 'TWO' },\n    { src: _assets_images_img3_jpg__WEBPACK_IMPORTED_MODULE_2__, caption: 'THREE' },\n  ];\n\n  const slidesWrapper = document.createElement('div');\n  slidesWrapper.classList.add('slides-wrapper');\n\n  const dotsWrapper = document.createElement('div');\n  dotsWrapper.classList.add('dots');\n\n  slidesData.forEach((slide, index) => {\n    const slideDiv = document.createElement('div');\n    slideDiv.classList.add('mySlides', 'fade');\n    slideDiv.innerHTML = `\n      <img src=\"${slide.src}\" class=\"slide-img\">\n      <div class=\"text\">${slide.caption}</div>\n    `;\n    slidesWrapper.appendChild(slideDiv);\n\n    const dot = document.createElement('span');\n    dot.classList.add('dot');\n    dot.dataset.index = index;\n    dotsWrapper.appendChild(dot);\n  });\n\n  container.appendChild(slidesWrapper);\n  container.appendChild(dotsWrapper);\n  document.querySelector('.site-main').appendChild(container);\n\n  const slides = container.querySelectorAll('.mySlides');\n  const dots = container.querySelectorAll('.dot');\n  let currentIndex = 0;\n\n  function showSlide(index) {\n    slides.forEach((slide, i) => {\n      slide.style.display = i === index ? 'block' : 'none';\n    });\n    dots.forEach((dot, i) => {\n      dot.classList.toggle('active', i === index);\n    });\n  }\n\n  dots.forEach((dot) => {\n    dot.addEventListener('click', () => {\n      currentIndex = parseInt(dot.dataset.index, 10);\n      showSlide(currentIndex);\n    });\n  });\n\n  showSlide(currentIndex);\n}\n\n\n//# sourceURL=webpack://template-webpack/./src/modules/slider2.js?");

/***/ }),

/***/ "./src/modules/slider3.js":
/*!********************************!*\
  !*** ./src/modules/slider3.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initSlider3)\n/* harmony export */ });\n/* harmony import */ var _assets_images_img1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/img1.jpg */ \"./src/assets/images/img1.jpg\");\n/* harmony import */ var _assets_images_img2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/img2.jpg */ \"./src/assets/images/img2.jpg\");\n/* harmony import */ var _assets_images_img3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/img3.jpg */ \"./src/assets/images/img3.jpg\");\n\n\n\n\nfunction initSlider3() {\n  const container = document.createElement('section');\n  container.classList.add('slideshow-container');\n\n  const slidesData = [\n    { src: _assets_images_img1_jpg__WEBPACK_IMPORTED_MODULE_0__, caption: 'ONE' },\n    { src: _assets_images_img2_jpg__WEBPACK_IMPORTED_MODULE_1__, caption: 'TWO' },\n    { src: _assets_images_img3_jpg__WEBPACK_IMPORTED_MODULE_2__, caption: 'THREE' },\n  ];\n\n  const slidesWrapper = document.createElement('div');\n  slidesWrapper.classList.add('slides-wrapper');\n\n  slidesData.forEach((slide) => {\n    const slideDiv = document.createElement('div');\n    slideDiv.classList.add('mySlides', 'fade');\n    slideDiv.innerHTML = `\n      <img src=\"${slide.src}\" class=\"slide-img\">\n      <div class=\"text\">${slide.caption}</div>\n    `;\n    slidesWrapper.appendChild(slideDiv);\n  });\n\n  container.appendChild(slidesWrapper);\n  document.querySelector('.site-main').appendChild(container);\n\n  let slideIndex = -1;\n  const slides = container.querySelectorAll('.mySlides');\n\n  function showSlides() {\n    slides.forEach((slide) => (slide.style.display = 'none'));\n    slideIndex = (slideIndex + 1) % slides.length;\n    slides[slideIndex].style.display = 'block';\n  }\n\n  showSlides(); // show first\n  setInterval(showSlides, 4000);\n}\n\n\n//# sourceURL=webpack://template-webpack/./src/modules/slider3.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://template-webpack/./src/style.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;