/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/movie/[id]",{

/***/ "./pages/movie/[id]/index.js":
/*!***********************************!*\
  !*** ./pages/movie/[id]/index.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _secrets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../secrets */ \"./secrets.js\");\n/* harmony import */ var _styles_Movie_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styles/Movie.module.css */ \"./styles/Movie.module.css\");\n/* harmony import */ var _styles_Movie_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Movie_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/alanwatson/Documents/bootcamp/Fellow/Learning Next/BadMovie/pages/movie/[id]/index.js\",\n    _this = undefined;\n\n\n\n\n\nvar movie = function movie(_ref) {\n  var movie = _ref.movie;\n  // const router = useRouter();\n  // const { id } = router.query;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_Movie_module_css__WEBPACK_IMPORTED_MODULE_3___default().grid),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: movie.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: movie.overview\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [\"Genre:\", ' ', movie.genres.map(function (genre, idx) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: [genre.name, \" \"]\n          }, \"\".concat(genre.name).concat(idx), true, {\n            fileName: _jsxFileName,\n            lineNumber: 16,\n            columnNumber: 20\n          }, _this);\n        })]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n      className: (_styles_Movie_module_css__WEBPACK_IMPORTED_MODULE_3___default().posterBig),\n      src: \"\".concat(_secrets__WEBPACK_IMPORTED_MODULE_2__.imageUrlStart).concat(movie.images.backdrops[0].file_path)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n        children: \"Cast\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n      href: \"/\",\n      children: \"Go Back\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (movie);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW92aWUvW2lkXS9pbmRleC5qcz84NDUzIl0sIm5hbWVzIjpbIm1vdmllIiwibW92aWVTdHlsZXMiLCJ0aXRsZSIsIm92ZXJ2aWV3IiwiZ2VucmVzIiwibWFwIiwiZ2VucmUiLCJpZHgiLCJuYW1lIiwiaW1hZ2VVcmxTdGFydCIsImltYWdlcyIsImJhY2tkcm9wcyIsImZpbGVfcGF0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxxQkFBZTtBQUFBLE1BQVpBLEtBQVksUUFBWkEsS0FBWTtBQUMzQjtBQUNBO0FBQ0Esc0JBQ0U7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBRUMsc0VBQWhCO0FBQUEsOEJBQ0U7QUFBQSxrQkFBS0QsS0FBSyxDQUFDRTtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQUEsa0JBQUlGLEtBQUssQ0FBQ0c7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRTtBQUFBLDZCQUNTLEdBRFQsRUFFR0gsS0FBSyxDQUFDSSxNQUFOLENBQWFDLEdBQWIsQ0FBaUIsVUFBQ0MsS0FBRCxFQUFRQyxHQUFSLEVBQWdCO0FBQ2hDLDhCQUFPO0FBQUEsdUJBQW1DRCxLQUFLLENBQUNFLElBQXpDO0FBQUEsdUJBQWNGLEtBQUssQ0FBQ0UsSUFBcEIsU0FBMkJELEdBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQVA7QUFDRCxTQUZBLENBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFXRTtBQUNFLGVBQVMsRUFBRU4sMkVBRGI7QUFFRSxTQUFHLFlBQUtRLG1EQUFMLFNBQXFCVCxLQUFLLENBQUNVLE1BQU4sQ0FBYUMsU0FBYixDQUF1QixDQUF2QixFQUEwQkMsU0FBL0M7QUFGTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWEYsZUFnQkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWhCRixlQWtCRTtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWxCRixlQXNCRSw4REFBQyxrREFBRDtBQUFNLFVBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdEJGO0FBQUEsa0JBREY7QUEwQkQsQ0E3QkQ7OztBQW9FQSwrREFBZVosS0FBZiIsImZpbGUiOiIuL3BhZ2VzL21vdmllL1tpZF0vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgTW92aWVBUElrZXksIGltYWdlVXJsU3RhcnQgfSBmcm9tICcuLi8uLi8uLi9zZWNyZXRzJztcbmltcG9ydCBtb3ZpZVN0eWxlcyBmcm9tICcuLi8uLi8uLi9zdHlsZXMvTW92aWUubW9kdWxlLmNzcyc7XG5cbmNvbnN0IG1vdmllID0gKHsgbW92aWUgfSkgPT4ge1xuICAvLyBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgLy8gY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17bW92aWVTdHlsZXMuZ3JpZH0+XG4gICAgICAgIDxoMj57bW92aWUudGl0bGV9PC9oMj5cbiAgICAgICAgPHA+e21vdmllLm92ZXJ2aWV3fTwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgR2VucmU6eycgJ31cbiAgICAgICAgICB7bW92aWUuZ2VucmVzLm1hcCgoZ2VucmUsIGlkeCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGtleT17YCR7Z2VucmUubmFtZX0ke2lkeH1gfT57Z2VucmUubmFtZX0gPC9zcGFuPjtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8aW1nXG4gICAgICAgIGNsYXNzTmFtZT17bW92aWVTdHlsZXMucG9zdGVyQmlnfVxuICAgICAgICBzcmM9e2Ake2ltYWdlVXJsU3RhcnR9JHttb3ZpZS5pbWFnZXMuYmFja2Ryb3BzWzBdLmZpbGVfcGF0aH1gfVxuICAgICAgLz5cblxuICAgICAgPGhyIC8+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMz5DYXN0PC9oMz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8TGluayBocmVmPScvJz5HbyBCYWNrPC9MaW5rPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvJHtjb250ZXh0LnBhcmFtcy5pZH0/YXBpX2tleT0ke01vdmllQVBJa2V5fSZhcHBlbmRfdG9fcmVzcG9uc2U9aW1hZ2VzLGNyZWRpdHNgXG4gICk7XG4gIGNvbnN0IG1vdmllID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgY29uc29sZS5sb2coJ3NpbmdsZSBNb3ZpZScsIG1vdmllKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBtb3ZpZSxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xuICAvLyBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgLy8gICBgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9kaXNjb3Zlci9tb3ZpZT9hcGlfa2V5PSR7TW92aWVBUElrZXl9Jmxhbmd1YWdlPWVuLVVTJnNvcnRfYnk9dm90ZV9hdmVyYWdlLmFzYyZpbmNsdWRlX2FkdWx0PWZhbHNlJmluY2x1ZGVfdmlkZW89ZmFsc2UmcGFnZT0xYFxuICAvLyApO1xuXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL3RyZW5kaW5nL2FsbC93ZWVrP2FwaV9rZXk9JHtNb3ZpZUFQSWtleX1gXG4gICk7XG5cbiAgY29uc3QgbW92aWVPYmogPSBhd2FpdCByZXMuanNvbigpO1xuICBjb25zdCBtb3ZpZXMgPSBtb3ZpZU9iai5yZXN1bHRzLmZpbHRlcigobW92aWUpID0+IHtcbiAgICBpZiAobW92aWUudm90ZV9hdmVyYWdlIDwgNy4wKSByZXR1cm4gdHJ1ZTtcbiAgfSk7XG5cbiAgY29uc3QgaWRzID0gbW92aWVzLm1hcCgobW92aWUpID0+IG1vdmllLmlkKTtcbiAgY29uc3QgcGF0aHMgPSBpZHMubWFwKChpZCkgPT4gKHsgcGFyYW1zOiB7IGlkOiBpZC50b1N0cmluZygpIH0gfSkpO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbW92aWU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/movie/[id]/index.js\n");

/***/ })

});