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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/loader */ \"./components/loader.tsx\");\n/* harmony import */ var _components_primary_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/primary-button */ \"./components/primary-button.tsx\");\n/* harmony import */ var _config_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/firebase */ \"./config/firebase.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/AuthContext */ \"./context/AuthContext.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Home(param) {\n    let { uid  } = param;\n    _s();\n    const { user , logout  } = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_6__.useAuth)();\n    const [accountName, setAccountName] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    const usersCollectionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.collection)(_config_firebase__WEBPACK_IMPORTED_MODULE_4__.db, \"users\");\n    const userAccountsCollectionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.collection)(_config_firebase__WEBPACK_IMPORTED_MODULE_4__.db, \"categories\" + {\n        accountName\n    });\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const getUsers = ()=>{\n        (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.getDocs)(usersCollectionRef).then((data)=>{\n            setUsers(data.docs.map((doc)=>{\n                return {\n                    ...doc.data(),\n                    id: doc.id\n                };\n            }));\n        });\n    };\n    const addAccount = (e)=>{\n        e.preventDefault();\n        setIsLoading(true);\n        try {\n            (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.setDoc)(userAccountsCollectionRef, {\n                accountName: accountName\n            });\n        } catch (err) {\n            setIsLoading(false);\n            console.log(err);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        getUsers();\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            className: \"flex-col h-[40vh] flex\",\n                            onSubmit: addAccount,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    name: \"accountName\",\n                                    id: \"accountName\",\n                                    placeholder: \"Account Name\",\n                                    required: true,\n                                    onChange: (e)=>setAccountName(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex-col align-bottom justify-end mt-2\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_primary_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        isLoading: isLoading,\n                                        // textField={\"Add Account\"}\n                                        textField: isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loader__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, void 0, void 0) : \"Add Account\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            users && users.map((user)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-white\",\n                                        children: [\n                                            user.name,\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                                                lineNumber: 88,\n                                                columnNumber: 21\n                                            }, this),\n                                            user.id\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 19\n                                    }, this)\n                                }, \"user\", false, {\n                                    fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 17\n                                }, this);\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-white p-4 flex items-center justify-center text-black\",\n                                onClick: ()=>{\n                                    logout();\n                                    router.push(\"/login\");\n                                },\n                                children: \"Logout\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"e3cQTH2v1mewhDl54uaM2p/s7Ew=\", false, function() {\n    return [\n        _context_AuthContext__WEBPACK_IMPORTED_MODULE_6__.useAuth,\n        next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7O0FBT1gsQ0FBQztHQTdGdUJsRDs7UUFDR0wseURBQU9BO1FBUWpCQyxrREFBU0E7OztLQVRGSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2xvYWRlclwiO1xuaW1wb3J0IFByaW1hcnlCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvcHJpbWFyeS1idXR0b25cIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIi4uL2NvbmZpZy9maXJlYmFzZVwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW50ZXIgfSBmcm9tIFwiQG5leHQvZm9udC9nb29nbGVcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiLi4vY29udGV4dC9BdXRoQ29udGV4dFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBnZXREb2NzLCBhZGREb2MsIHNldERvYyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHVpZCB9KSB7XG4gIGNvbnN0IHsgdXNlciwgbG9nb3V0IH0gPSB1c2VBdXRoKCk7XG4gIGNvbnN0IFthY2NvdW50TmFtZSwgc2V0QWNjb3VudE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID0gdXNlU3RhdGU8YW55W10+KFtdKTtcbiAgY29uc3QgdXNlcnNDb2xsZWN0aW9uUmVmID0gY29sbGVjdGlvbihkYiwgXCJ1c2Vyc1wiKTtcbiAgY29uc3QgdXNlckFjY291bnRzQ29sbGVjdGlvblJlZiA9IGNvbGxlY3Rpb24oXG4gICAgZGIsXG4gICAgXCJjYXRlZ29yaWVzXCIgKyB7IGFjY291bnROYW1lIH1cbiAgKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgZ2V0VXNlcnMgPSAoKSA9PiB7XG4gICAgZ2V0RG9jcyh1c2Vyc0NvbGxlY3Rpb25SZWYpLnRoZW4oKGRhdGE6IGFueSkgPT4ge1xuICAgICAgc2V0VXNlcnMoXG4gICAgICAgIGRhdGEuZG9jcy5tYXAoKGRvYzogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHsgLi4uZG9jLmRhdGEoKSwgaWQ6IGRvYy5pZCB9O1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBhZGRBY2NvdW50ID0gKGU6IGFueSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIHNldERvYyh1c2VyQWNjb3VudHNDb2xsZWN0aW9uUmVmLCB7XG4gICAgICAgIGFjY291bnROYW1lOiBhY2NvdW50TmFtZSxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuICB9O1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldFVzZXJzKCk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNFwiPlxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZsZXgtY29sIGgtWzQwdmhdIGZsZXhcIiBvblN1Ym1pdD17YWRkQWNjb3VudH0+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPVwiYWNjb3VudE5hbWVcIlxuICAgICAgICAgICAgICBpZD1cImFjY291bnROYW1lXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBY2NvdW50IE5hbWVcIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEFjY291bnROYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtY29sIGFsaWduLWJvdHRvbSBqdXN0aWZ5LWVuZCBtdC0yXCI+XG4gICAgICAgICAgICAgIDxQcmltYXJ5QnV0dG9uXG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nPXtpc0xvYWRpbmd9XG4gICAgICAgICAgICAgICAgLy8gdGV4dEZpZWxkPXtcIkFkZCBBY2NvdW50XCJ9XG4gICAgICAgICAgICAgICAgdGV4dEZpZWxkPXtpc0xvYWRpbmcgPyA8TG9hZGVyIC8+IDogXCJBZGQgQWNjb3VudFwifVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7dXNlcnMgJiZcbiAgICAgICAgICAgIHVzZXJzLm1hcCgodXNlcikgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PVwidXNlclwiPlxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAge3VzZXIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIHt1c2VyLmlkfVxuICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtNCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LWJsYWNrXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgbG9nb3V0KCk7XG4gICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBMb2dvdXRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkxvYWRlciIsIlByaW1hcnlCdXR0b24iLCJkYiIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VBdXRoIiwidXNlUm91dGVyIiwiY29sbGVjdGlvbiIsImdldERvY3MiLCJzZXREb2MiLCJIb21lIiwidWlkIiwidXNlciIsImxvZ291dCIsImFjY291bnROYW1lIiwic2V0QWNjb3VudE5hbWUiLCJ1c2VycyIsInNldFVzZXJzIiwidXNlcnNDb2xsZWN0aW9uUmVmIiwidXNlckFjY291bnRzQ29sbGVjdGlvblJlZiIsInJvdXRlciIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImdldFVzZXJzIiwidGhlbiIsImRhdGEiLCJkb2NzIiwibWFwIiwiZG9jIiwiaWQiLCJhZGRBY2NvdW50IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZXJyIiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJ0ZXh0RmllbGQiLCJoMSIsImJyIiwiYnV0dG9uIiwib25DbGljayIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});