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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_primary_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/primary-button */ \"./components/primary-button.tsx\");\n/* harmony import */ var _config_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/firebase */ \"./config/firebase.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/AuthContext */ \"./context/AuthContext.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* eslint-disable react/jsx-key */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const { user , logout  } = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_5__.useAuth)();\n    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const usersCollectionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.collection)(_config_firebase__WEBPACK_IMPORTED_MODULE_3__.db, \"users\");\n    const userAccountsCollectionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.collection)(_config_firebase__WEBPACK_IMPORTED_MODULE_3__.db, \"users/accounts\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const getUsers = ()=>{\n        (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.getDocs)(usersCollectionRef).then((data)=>{\n            setUsers(data.docs.map((doc)=>{\n                return {\n                    ...doc.data(),\n                    id: doc.id\n                };\n            }));\n        });\n    };\n    const addAccount = ()=>{\n        addDoc(dbInstance, {\n            noteTitle: noteTitle\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        getUsers();\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            className: \"flex-col h-[40vh] flex\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    name: \"accountName\",\n                                    id: \"accountName\",\n                                    placeholder: \"Account Name\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex-col align-bottom justify-end mt-2\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_primary_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        // isLoading={isLoading}\n                                        textField: \"Add Account\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            users && users.map((user)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-white\",\n                                        children: user.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 17\n                                }, this);\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-white p-4 flex items-center justify-center text-black\",\n                                onClick: ()=>{\n                                    logout();\n                                    router.push(\"/login\");\n                                },\n                                children: \"Logout\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"H/YE/RzmwmPlJQN7IFEpOsxP2o4=\", false, function() {\n    return [\n        _context_AuthContext__WEBPACK_IMPORTED_MODULE_5__.useAuth,\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdDQUFnQyxHQUNoQzs7QUFBNkI7QUFFNEI7QUFDakI7QUFFVztBQUdGO0FBQ1Q7QUFDaUI7QUFHMUMsU0FBU1UsT0FBTzs7SUFDN0IsTUFBTSxFQUFFQyxLQUFJLEVBQUVDLE9BQU0sRUFBRSxHQUFHTiw2REFBT0E7SUFDaEMsTUFBTSxDQUFDTyxPQUFPQyxTQUFTLEdBQUdWLCtDQUFRQSxDQUFRLEVBQUU7SUFDNUMsTUFBTVcscUJBQXFCUCw4REFBVUEsQ0FBQ04sZ0RBQUVBLEVBQUU7SUFDMUMsTUFBTWMsNEJBQTRCUiw4REFBVUEsQ0FBQ04sZ0RBQUVBLEVBQUU7SUFDakQsTUFBTWUsU0FBU1Ysc0RBQVNBO0lBRXhCLE1BQU1XLFdBQVcsSUFBTTtRQUNyQlQsMkRBQU9BLENBQUNNLG9CQUFvQkksSUFBSSxDQUFDLENBQUNDLE9BQWM7WUFDOUNOLFNBQ0VNLEtBQUtDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLE1BQWE7Z0JBQzFCLE9BQU87b0JBQUUsR0FBR0EsSUFBSUgsSUFBSSxFQUFFO29CQUFFSSxJQUFJRCxJQUFJQyxFQUFFO2dCQUFDO1lBQ3JDO1FBRUo7SUFDRjtJQUVBLE1BQU1DLGFBQWEsSUFBTTtRQUN2QkMsT0FBT0MsWUFBWTtZQUNqQkMsV0FBV0E7UUFDYjtJQUNGO0lBQ0F2QixnREFBU0EsQ0FBQyxJQUFNO1FBQ2RhO0lBQ0EsdURBQXVEO0lBQ3pELEdBQUcsRUFBRTtJQUVMLHFCQUNFOzswQkFDRSw4REFBQ2xCLGtEQUFJQTs7a0NBQ0gsOERBQUM2QjtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0Y7d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVE7Ozs7OztrQ0FDOUIsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRXhCLDhEQUFDQzs7a0NBQ0MsOERBQUNDO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDQzs0QkFBS0QsV0FBVTs7OENBQ2QsOERBQUNFO29DQUNDQyxNQUFLO29DQUNMVixNQUFLO29DQUNMUCxJQUFHO29DQUNIa0IsYUFBWTtvQ0FDWkMsUUFBUTs7Ozs7OzhDQUVWLDhEQUFDTjtvQ0FBSUMsV0FBVTs4Q0FDYiw0RUFBQ3JDLGtFQUFhQTt3Q0FDWix3QkFBd0I7d0NBQ3hCMkMsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FNbkIsOERBQUNQOzs0QkFDRXhCLFNBQ0NBLE1BQU1TLEdBQUcsQ0FBQyxDQUFDWCxPQUFTO2dDQUNsQixxQkFDRSw4REFBQzBCOzhDQUNDLDRFQUFDUTt3Q0FBR1AsV0FBVTtrREFBYzNCLEtBQUtvQixJQUFJOzs7Ozs7Ozs7Ozs0QkFHM0M7MENBQ0YsOERBQUNlO2dDQUNDUixXQUFVO2dDQUNWUyxTQUFTLElBQU07b0NBQ2JuQztvQ0FDQUssT0FBTytCLElBQUksQ0FBQztnQ0FDZDswQ0FDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWCxDQUFDO0dBNUV1QnRDOztRQUNHSix5REFBT0E7UUFJakJDLGtEQUFTQTs7O0tBTEZHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1rZXkgKi9cbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbG9hZGVyXCI7XG5pbXBvcnQgUHJpbWFyeUJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9wcmltYXJ5LWJ1dHRvblwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vY29uZmlnL2ZpcmViYXNlXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJbnRlciB9IGZyb20gXCJAbmV4dC9mb250L2dvb2dsZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi9jb250ZXh0L0F1dGhDb250ZXh0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IGNvbGxlY3Rpb24sIGdldERvY3MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgdXNlciwgbG9nb3V0IH0gPSB1c2VBdXRoKCk7XG4gIGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID0gdXNlU3RhdGU8YW55W10+KFtdKTtcbiAgY29uc3QgdXNlcnNDb2xsZWN0aW9uUmVmID0gY29sbGVjdGlvbihkYiwgXCJ1c2Vyc1wiKTtcbiAgY29uc3QgdXNlckFjY291bnRzQ29sbGVjdGlvblJlZiA9IGNvbGxlY3Rpb24oZGIsIFwidXNlcnMvYWNjb3VudHNcIik7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGdldFVzZXJzID0gKCkgPT4ge1xuICAgIGdldERvY3ModXNlcnNDb2xsZWN0aW9uUmVmKS50aGVuKChkYXRhOiBhbnkpID0+IHtcbiAgICAgIHNldFVzZXJzKFxuICAgICAgICBkYXRhLmRvY3MubWFwKChkb2M6IGFueSkgPT4ge1xuICAgICAgICAgIHJldHVybiB7IC4uLmRvYy5kYXRhKCksIGlkOiBkb2MuaWQgfTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgYWRkQWNjb3VudCA9ICgpID0+IHtcbiAgICBhZGREb2MoZGJJbnN0YW5jZSwge1xuICAgICAgbm90ZVRpdGxlOiBub3RlVGl0bGUsXG4gICAgfSk7XG4gIH07XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0VXNlcnMoKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00XCI+XG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZmxleC1jb2wgaC1bNDB2aF0gZmxleFwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT1cImFjY291bnROYW1lXCJcbiAgICAgICAgICAgICAgaWQ9XCJhY2NvdW50TmFtZVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWNjb3VudCBOYW1lXCJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtY29sIGFsaWduLWJvdHRvbSBqdXN0aWZ5LWVuZCBtdC0yXCI+XG4gICAgICAgICAgICAgIDxQcmltYXJ5QnV0dG9uXG4gICAgICAgICAgICAgICAgLy8gaXNMb2FkaW5nPXtpc0xvYWRpbmd9XG4gICAgICAgICAgICAgICAgdGV4dEZpZWxkPXtcIkFkZCBBY2NvdW50XCJ9XG4gICAgICAgICAgICAgICAgLy8gdGV4dEZpZWxkPXtpc0xvYWRpbmcgPyA8TG9hZGVyIC8+IDogXCJTaWduIEluXCJ9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHt1c2VycyAmJlxuICAgICAgICAgICAgdXNlcnMubWFwKCh1c2VyKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+e3VzZXIubmFtZX08L2gxPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC00IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtYmxhY2tcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBsb2dvdXQoKTtcbiAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIExvZ291dFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiUHJpbWFyeUJ1dHRvbiIsImRiIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUF1dGgiLCJ1c2VSb3V0ZXIiLCJjb2xsZWN0aW9uIiwiZ2V0RG9jcyIsIkhvbWUiLCJ1c2VyIiwibG9nb3V0IiwidXNlcnMiLCJzZXRVc2VycyIsInVzZXJzQ29sbGVjdGlvblJlZiIsInVzZXJBY2NvdW50c0NvbGxlY3Rpb25SZWYiLCJyb3V0ZXIiLCJnZXRVc2VycyIsInRoZW4iLCJkYXRhIiwiZG9jcyIsIm1hcCIsImRvYyIsImlkIiwiYWRkQWNjb3VudCIsImFkZERvYyIsImRiSW5zdGFuY2UiLCJub3RlVGl0bGUiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwidGV4dEZpZWxkIiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});