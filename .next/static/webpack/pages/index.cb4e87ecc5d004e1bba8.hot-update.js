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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _secrets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../secrets */ \"./secrets.js\");\n/* harmony import */ var _styles_Movie_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Movie.module.css */ \"./styles/Movie.module.css\");\n/* harmony import */ var _styles_Movie_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Movie_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/alanwatson/Documents/bootcamp/Fellow/Learning Next/BadMovie/components/MovieItem.js\",\n    _this = undefined;\n\n\n\n\n\nvar MovieItem = function MovieItem(_ref) {\n  var movie = _ref.movie;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n    href: \"/movie/[id]\",\n    as: \"/movie/\".concat(movie.id),\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n      className: (_styles_Movie_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [\"(\", movie.Title, \")\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [\"Average user rating: \", movie.vote_average]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        className: (_styles_Movie_module_css__WEBPACK_IMPORTED_MODULE_3___default().poster),\n        src: \"\".concat(_secrets__WEBPACK_IMPORTED_MODULE_2__.imageUrlStart).concat(movie.poster_path)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = MovieItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovieItem);\n\nvar _c;\n\n$RefreshReg$(_c, \"MovieItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb3ZpZUl0ZW0uanM/NmM4NCJdLCJuYW1lcyI6WyJNb3ZpZUl0ZW0iLCJtb3ZpZSIsImlkIiwibW92aWVTdHlsZXMiLCJUaXRsZSIsInZvdGVfYXZlcmFnZSIsImltYWdlVXJsU3RhcnQiLCJwb3N0ZXJfcGF0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBZTtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUMvQixzQkFDRSw4REFBQyxrREFBRDtBQUFNLFFBQUksRUFBQyxhQUFYO0FBQXlCLE1BQUUsbUJBQVlBLEtBQUssQ0FBQ0MsRUFBbEIsQ0FBM0I7QUFBQSwyQkFDRTtBQUFHLGVBQVMsRUFBRUMsc0VBQWQ7QUFBQSw4QkFDRTtBQUFBLHdCQUFLRixLQUFLLENBQUNHLEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFBLDRDQUF5QkgsS0FBSyxDQUFDSSxZQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQUlFO0FBQ0UsaUJBQVMsRUFBRUYsd0VBRGI7QUFFRSxXQUFHLFlBQUtHLG1EQUFMLFNBQXFCTCxLQUFLLENBQUNNLFdBQTNCO0FBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWFELENBZEQ7O0tBQU1QLFM7QUFnQk4sK0RBQWVBLFNBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL01vdmllSXRlbS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBpbWFnZVVybFN0YXJ0IH0gZnJvbSAnLi4vc2VjcmV0cyc7XG5cbmltcG9ydCBtb3ZpZVN0eWxlcyBmcm9tICcuLi9zdHlsZXMvTW92aWUubW9kdWxlLmNzcyc7XG5cbmNvbnN0IE1vdmllSXRlbSA9ICh7IG1vdmllIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGluayBocmVmPScvbW92aWUvW2lkXScgYXM9e2AvbW92aWUvJHttb3ZpZS5pZH1gfT5cbiAgICAgIDxhIGNsYXNzTmFtZT17bW92aWVTdHlsZXMuY2FyZH0+XG4gICAgICAgIDxwPih7bW92aWUuVGl0bGV9KTwvcD5cbiAgICAgICAgPHA+QXZlcmFnZSB1c2VyIHJhdGluZzoge21vdmllLnZvdGVfYXZlcmFnZX08L3A+XG5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIGNsYXNzTmFtZT17bW92aWVTdHlsZXMucG9zdGVyfVxuICAgICAgICAgIHNyYz17YCR7aW1hZ2VVcmxTdGFydH0ke21vdmllLnBvc3Rlcl9wYXRofWB9XG4gICAgICAgIC8+XG4gICAgICA8L2E+XG4gICAgPC9MaW5rPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTW92aWVJdGVtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MovieItem.js\n");

/***/ })

});