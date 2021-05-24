/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MovieItem.js":
/*!*********************************!*\
  !*** ./components/MovieItem.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _secrets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../secrets */ \"./secrets.js\");\n/* harmony import */ var _styles_Movie_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Movie.module.css */ \"./styles/Movie.module.css\");\n/* harmony import */ var _styles_Movie_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Movie_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/alanwatson/Documents/bootcamp/Fellow/Learning Next/BadMovie/components/MovieItem.js\",\n    _this = undefined;\n\n\n\n\n\nvar MovieItem = function MovieItem(_ref) {\n  var movie = _ref.movie;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n    href: \"/movie/[id]\",\n    as: \"/movie/\".concat(movie.id),\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n      className: (_styles_Movie_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n        children: movie.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [\"Average user rating: \", movie.vote_average]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [\"Movie or TV: \", movie.media_type]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        className: (_styles_Movie_module_css__WEBPACK_IMPORTED_MODULE_3___default().poster),\n        src: \"\".concat(_secrets__WEBPACK_IMPORTED_MODULE_2__.imageUrlStart).concat(movie.poster_path)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = MovieItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovieItem);\n\nvar _c;\n\n$RefreshReg$(_c, \"MovieItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb3ZpZUl0ZW0uanM/NmM4NCJdLCJuYW1lcyI6WyJNb3ZpZUl0ZW0iLCJtb3ZpZSIsImlkIiwibW92aWVTdHlsZXMiLCJ0aXRsZSIsInZvdGVfYXZlcmFnZSIsIm1lZGlhX3R5cGUiLCJpbWFnZVVybFN0YXJ0IiwicG9zdGVyX3BhdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWU7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFDL0Isc0JBQ0UsOERBQUMsa0RBQUQ7QUFBTSxRQUFJLEVBQUMsYUFBWDtBQUF5QixNQUFFLG1CQUFZQSxLQUFLLENBQUNDLEVBQWxCLENBQTNCO0FBQUEsMkJBQ0U7QUFBRyxlQUFTLEVBQUVDLHNFQUFkO0FBQUEsOEJBQ0U7QUFBQSxrQkFBS0YsS0FBSyxDQUFDRztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQUEsNENBQXlCSCxLQUFLLENBQUNJLFlBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBR0U7QUFBQSxvQ0FBaUJKLEtBQUssQ0FBQ0ssVUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEYsZUFJRTtBQUNFLGlCQUFTLEVBQUVILHdFQURiO0FBRUUsV0FBRyxZQUFLSSxtREFBTCxTQUFxQk4sS0FBSyxDQUFDTyxXQUEzQjtBQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFhRCxDQWREOztLQUFNUixTO0FBZ0JOLCtEQUFlQSxTQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Nb3ZpZUl0ZW0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgaW1hZ2VVcmxTdGFydCB9IGZyb20gJy4uL3NlY3JldHMnO1xuXG5pbXBvcnQgbW92aWVTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL01vdmllLm1vZHVsZS5jc3MnO1xuXG5jb25zdCBNb3ZpZUl0ZW0gPSAoeyBtb3ZpZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExpbmsgaHJlZj0nL21vdmllL1tpZF0nIGFzPXtgL21vdmllLyR7bW92aWUuaWR9YH0+XG4gICAgICA8YSBjbGFzc05hbWU9e21vdmllU3R5bGVzLmNhcmR9PlxuICAgICAgICA8aDM+e21vdmllLnRpdGxlfTwvaDM+XG4gICAgICAgIDxwPkF2ZXJhZ2UgdXNlciByYXRpbmc6IHttb3ZpZS52b3RlX2F2ZXJhZ2V9PC9wPlxuICAgICAgICA8cD5Nb3ZpZSBvciBUVjoge21vdmllLm1lZGlhX3R5cGV9PC9wPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgY2xhc3NOYW1lPXttb3ZpZVN0eWxlcy5wb3N0ZXJ9XG4gICAgICAgICAgc3JjPXtgJHtpbWFnZVVybFN0YXJ0fSR7bW92aWUucG9zdGVyX3BhdGh9YH1cbiAgICAgICAgLz5cbiAgICAgIDwvYT5cbiAgICA8L0xpbms+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZUl0ZW07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MovieItem.js\n");

/***/ })

});