"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/add-account-form.tsx":
/*!*****************************************!*\
  !*** ./components/add-account-form.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _primary_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./primary-button */ \"./components/primary-button.tsx\");\n/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader */ \"./components/loader.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _config_firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/firebase */ \"./config/firebase.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst AddAccount = (param)=>{\n    let { addDoc , uid , user  } = param;\n    _s();\n    const accountNameRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const [accountName, setAccountName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const userAccountsCollectionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_config_firebase__WEBPACK_IMPORTED_MODULE_5__.db, \"users/\" + user.uid + \"/accounts\");\n    const addAccount = async (e)=>{\n        e.preventDefault();\n        setIsLoading(true);\n        console.log(userAccountsCollectionRef);\n        try {\n            await addDoc(userAccountsCollectionRef, {\n                accountName: accountName\n            });\n            accountNameRef.current.value = \"\";\n            setIsLoading(false);\n            setNotification(true);\n            setTimeout(()=>{\n                setNotification(false);\n            }, 3000);\n        } catch (err) {\n            setIsLoading(false);\n            console.log(err);\n        }\n        setIsLoading(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: \"flex-col h-[40vh] flex\",\n            onSubmit: addAccount,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    ref: accountNameRef,\n                    type: \"text\",\n                    name: \"accountName\",\n                    id: \"accountName\",\n                    placeholder: \"Account Name\",\n                    required: true,\n                    onChange: (e)=>setAccountName(e.target.value)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\components\\\\add-account-form.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex-col align-bottom justify-end mt-2\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_primary_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        isLoading: isLoading,\n                        // textField={\"Add Account\"}\n                        textField: isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_loader__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, void 0, void 0) : \"Add Account\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\components\\\\add-account-form.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\components\\\\add-account-form.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\components\\\\add-account-form.tsx\",\n            lineNumber: 37,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\components\\\\add-account-form.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AddAccount, \"VCJlhjOn/NP8WP+CfnYVTW98b/k=\");\n_c = AddAccount;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddAccount);\nvar _c;\n$RefreshReg$(_c, \"AddAccount\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2FkZC1hY2NvdW50LWZvcm0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUE2QztBQUNmO0FBQ2tCO0FBQ1E7QUFDaEI7QUFDeEMsTUFBTU8sYUFBYSxTQUEyQjtRQUExQixFQUFFQyxPQUFNLEVBQUVDLElBQUcsRUFBRUMsS0FBSSxFQUFFOztJQUN2QyxNQUFNQyxpQkFBaUJSLDZDQUFNQSxDQUFDLElBQUk7SUFDbEMsTUFBTSxDQUFDUyxhQUFhQyxlQUFlLEdBQUdULCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ1UsV0FBV0MsYUFBYSxHQUFHWCwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ2hELE1BQU1ZLDRCQUE0QlgsOERBQVVBLENBQzFDQyxnREFBRUEsRUFDRixXQUFXSSxLQUFLRCxHQUFHLEdBQUc7SUFHeEIsTUFBTVEsYUFBYSxPQUFPQyxJQUFXO1FBQ25DQSxFQUFFQyxjQUFjO1FBQ2hCSixhQUFhLElBQUk7UUFDakJLLFFBQVFDLEdBQUcsQ0FBQ0w7UUFDWixJQUFJO1lBQ0YsTUFBTVIsT0FBT1EsMkJBQTJCO2dCQUN0Q0osYUFBYUE7WUFDZjtZQUNBRCxlQUFlVyxPQUFPLENBQUNDLEtBQUssR0FBRztZQUMvQlIsYUFBYSxLQUFLO1lBQ2xCUyxnQkFBZ0IsSUFBSTtZQUNwQkMsV0FBVyxJQUFNO2dCQUNmRCxnQkFBZ0IsS0FBSztZQUN2QixHQUFHO1FBQ0wsRUFBRSxPQUFPRSxLQUFLO1lBQ1pYLGFBQWEsS0FBSztZQUNsQkssUUFBUUMsR0FBRyxDQUFDSztRQUNkO1FBQ0FYLGFBQWEsS0FBSztJQUNwQjtJQUNBLHFCQUNFLDhEQUFDWTtrQkFDQyw0RUFBQ0M7WUFBS0MsV0FBVTtZQUF5QkMsVUFBVWI7OzhCQUNqRCw4REFBQ2M7b0JBQ0NDLEtBQUtyQjtvQkFDTHNCLE1BQUs7b0JBQ0xDLE1BQUs7b0JBQ0xDLElBQUc7b0JBQ0hDLGFBQVk7b0JBQ1pDLFFBQVE7b0JBQ1JDLFVBQVUsQ0FBQ3BCLElBQU1MLGVBQWVLLEVBQUVxQixNQUFNLENBQUNoQixLQUFLOzs7Ozs7OEJBRWhELDhEQUFDSTtvQkFBSUUsV0FBVTs4QkFDYiw0RUFBQzdCLHVEQUFhQTt3QkFDWmMsV0FBV0E7d0JBQ1gsNEJBQTRCO3dCQUM1QjBCLFdBQVcxQiwwQkFBWSw4REFBQ2IsK0NBQU1BLHVDQUFNLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNN0Q7R0FuRE1NO0tBQUFBO0FBcUROLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYWRkLWFjY291bnQtZm9ybS50c3g/ODQxZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJpbWFyeUJ1dHRvbiBmcm9tIFwiLi9wcmltYXJ5LWJ1dHRvblwiO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuL2xvYWRlclwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBhZGREb2MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCB7IGRiIH0gZnJvbSBcIi4uL2NvbmZpZy9maXJlYmFzZVwiO1xyXG5jb25zdCBBZGRBY2NvdW50ID0gKHsgYWRkRG9jLCB1aWQsIHVzZXIgfSkgPT4ge1xyXG4gIGNvbnN0IGFjY291bnROYW1lUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IFthY2NvdW50TmFtZSwgc2V0QWNjb3VudE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB1c2VyQWNjb3VudHNDb2xsZWN0aW9uUmVmID0gY29sbGVjdGlvbihcclxuICAgIGRiLFxyXG4gICAgXCJ1c2Vycy9cIiArIHVzZXIudWlkICsgXCIvYWNjb3VudHNcIlxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGFkZEFjY291bnQgPSBhc3luYyAoZTogYW55KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICBjb25zb2xlLmxvZyh1c2VyQWNjb3VudHNDb2xsZWN0aW9uUmVmKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGFkZERvYyh1c2VyQWNjb3VudHNDb2xsZWN0aW9uUmVmLCB7XHJcbiAgICAgICAgYWNjb3VudE5hbWU6IGFjY291bnROYW1lLFxyXG4gICAgICB9KTtcclxuICAgICAgYWNjb3VudE5hbWVSZWYuY3VycmVudC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIHNldE5vdGlmaWNhdGlvbih0cnVlKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgc2V0Tm90aWZpY2F0aW9uKGZhbHNlKTtcclxuICAgICAgfSwgMzAwMCk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxuICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZmxleC1jb2wgaC1bNDB2aF0gZmxleFwiIG9uU3VibWl0PXthZGRBY2NvdW50fT5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHJlZj17YWNjb3VudE5hbWVSZWZ9XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBuYW1lPVwiYWNjb3VudE5hbWVcIlxyXG4gICAgICAgICAgaWQ9XCJhY2NvdW50TmFtZVwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFjY291bnQgTmFtZVwiXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBY2NvdW50TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtY29sIGFsaWduLWJvdHRvbSBqdXN0aWZ5LWVuZCBtdC0yXCI+XHJcbiAgICAgICAgICA8UHJpbWFyeUJ1dHRvblxyXG4gICAgICAgICAgICBpc0xvYWRpbmc9e2lzTG9hZGluZ31cclxuICAgICAgICAgICAgLy8gdGV4dEZpZWxkPXtcIkFkZCBBY2NvdW50XCJ9XHJcbiAgICAgICAgICAgIHRleHRGaWVsZD17aXNMb2FkaW5nID8gPExvYWRlciAvPiA6IFwiQWRkIEFjY291bnRcIn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRBY2NvdW50O1xyXG4iXSwibmFtZXMiOlsiUHJpbWFyeUJ1dHRvbiIsIkxvYWRlciIsIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJjb2xsZWN0aW9uIiwiZGIiLCJBZGRBY2NvdW50IiwiYWRkRG9jIiwidWlkIiwidXNlciIsImFjY291bnROYW1lUmVmIiwiYWNjb3VudE5hbWUiLCJzZXRBY2NvdW50TmFtZSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInVzZXJBY2NvdW50c0NvbGxlY3Rpb25SZWYiLCJhZGRBY2NvdW50IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImN1cnJlbnQiLCJ2YWx1ZSIsInNldE5vdGlmaWNhdGlvbiIsInNldFRpbWVvdXQiLCJlcnIiLCJkaXYiLCJmb3JtIiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJpbnB1dCIsInJlZiIsInR5cGUiLCJuYW1lIiwiaWQiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ0ZXh0RmllbGQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/add-account-form.tsx\n"));

/***/ })

});