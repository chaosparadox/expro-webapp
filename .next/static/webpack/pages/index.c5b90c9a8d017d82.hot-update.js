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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/loader */ \"./components/loader.tsx\");\n/* harmony import */ var _components_primary_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/primary-button */ \"./components/primary-button.tsx\");\n/* harmony import */ var _config_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/firebase */ \"./config/firebase.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/AuthContext */ \"./context/AuthContext.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Home(param) {\n    let { uid  } = param;\n    _s();\n    const { user , logout  } = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_6__.useAuth)();\n    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    const usersCollectionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.collection)(_config_firebase__WEBPACK_IMPORTED_MODULE_4__.db, \"users\");\n    const userAccountsCollectionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.collection)(_config_firebase__WEBPACK_IMPORTED_MODULE_4__.db, \"categories\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const getUsers = ()=>{\n        (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.getDocs)(usersCollectionRef).then((data)=>{\n            setUsers(data.docs.map((doc)=>{\n                return {\n                    ...doc.data(),\n                    id: doc.id\n                };\n            }));\n        });\n    };\n    const addAccount = (e)=>{\n        e.preventDefault();\n        setIsLoading(true);\n        try {\n            addDoc(userAccountsCollectionRef, {\n                accountName: accountName\n            });\n        } catch (err) {\n            setIsLoading(false);\n            console.log(err);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        getUsers();\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            className: \"flex-col h-[40vh] flex\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    name: \"accountName\",\n                                    id: \"accountName\",\n                                    placeholder: \"Account Name\",\n                                    required: true,\n                                    onSubmit: addAccount\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex-col align-bottom justify-end mt-2\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_primary_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        isLoading: isLoading,\n                                        // textField={\"Add Account\"}\n                                        textField: isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loader__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, void 0, void 0) : \"Add Account\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            users && users.map((user)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-white\",\n                                        children: [\n                                            user.name,\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                                                lineNumber: 84,\n                                                columnNumber: 21\n                                            }, this),\n                                            user.id\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 19\n                                    }, this)\n                                }, \"user\", false, {\n                                    fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 17\n                                }, this);\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-white p-4 flex items-center justify-center text-black\",\n                                onClick: ()=>{\n                                    logout();\n                                    router.push(\"/login\");\n                                },\n                                children: \"Logout\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"fAbfzdUHrlYFehAWOSXnoyGYXeE=\", false, function() {\n    return [\n        _context_AuthContext__WEBPACK_IMPORTED_MODULE_6__.useAuth,\n        next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNkI7QUFDYTtBQUNlO0FBQ2pCO0FBRVc7QUFHRjtBQUNUO0FBQ2lCO0FBRzFDLFNBQVNXLEtBQUssS0FBTyxFQUFFO1FBQVQsRUFBRUMsSUFBRyxFQUFFLEdBQVA7O0lBQzNCLE1BQU0sRUFBRUMsS0FBSSxFQUFFQyxPQUFNLEVBQUUsR0FBR1AsNkRBQU9BO0lBQ2hDLE1BQU0sQ0FBQ1EsT0FBT0MsU0FBUyxHQUFHWCwrQ0FBUUEsQ0FBUSxFQUFFO0lBQzVDLE1BQU1ZLHFCQUFxQlIsOERBQVVBLENBQUNOLGdEQUFFQSxFQUFFO0lBQzFDLE1BQU1lLDRCQUE0QlQsOERBQVVBLENBQUNOLGdEQUFFQSxFQUFFO0lBQ2pELE1BQU1nQixTQUFTWCxzREFBU0E7SUFDeEIsTUFBTSxDQUFDWSxXQUFXQyxhQUFhLEdBQUdoQiwrQ0FBUUEsQ0FBQyxLQUFLO0lBRWhELE1BQU1pQixXQUFXLElBQU07UUFDckJaLDJEQUFPQSxDQUFDTyxvQkFBb0JNLElBQUksQ0FBQyxDQUFDQyxPQUFjO1lBQzlDUixTQUNFUSxLQUFLQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxNQUFhO2dCQUMxQixPQUFPO29CQUFFLEdBQUdBLElBQUlILElBQUksRUFBRTtvQkFBRUksSUFBSUQsSUFBSUMsRUFBRTtnQkFBQztZQUNyQztRQUVKO0lBQ0Y7SUFFQSxNQUFNQyxhQUFhLENBQUNDLElBQVc7UUFDN0JBLEVBQUVDLGNBQWM7UUFDaEJWLGFBQWEsSUFBSTtRQUNqQixJQUFJO1lBQ0ZXLE9BQU9kLDJCQUEyQjtnQkFDaENlLGFBQWFBO1lBQ2Y7UUFDRixFQUFFLE9BQU9DLEtBQUs7WUFDWmIsYUFBYSxLQUFLO1lBQ2xCYyxRQUFRQyxHQUFHLENBQUNGO1FBQ2Q7SUFDRjtJQUNBNUIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkZ0I7SUFDQSx1REFBdUQ7SUFDekQsR0FBRyxFQUFFO0lBRUwscUJBQ0U7OzBCQUNFLDhEQUFDdEIsa0RBQUlBOztrQ0FDSCw4REFBQ3FDO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7a0NBQ2pDLDhEQUFDRjt3QkFBS0MsTUFBSzt3QkFBV0MsU0FBUTs7Ozs7O2tDQUM5Qiw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFFeEIsOERBQUNDOztrQ0FDQyw4REFBQ0M7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNDOzRCQUFLRCxXQUFVOzs4Q0FDZCw4REFBQ0U7b0NBQ0NDLE1BQUs7b0NBQ0xWLE1BQUs7b0NBQ0xYLElBQUc7b0NBQ0hzQixhQUFZO29DQUNaQyxRQUFRO29DQUNSQyxVQUFVdkI7Ozs7Ozs4Q0FFWiw4REFBQ2dCO29DQUFJQyxXQUFVOzhDQUNiLDRFQUFDNUMsa0VBQWFBO3dDQUNaa0IsV0FBV0E7d0NBQ1gsNEJBQTRCO3dDQUM1QmlDLFdBQVdqQywwQkFBWSw4REFBQ25CLDBEQUFNQSx1Q0FBTSxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUt6RCw4REFBQzRDOzs0QkFDRTlCLFNBQ0NBLE1BQU1XLEdBQUcsQ0FBQyxDQUFDYixPQUFTO2dDQUNsQixxQkFDRSw4REFBQ2dDOzhDQUNDLDRFQUFDUzt3Q0FBR1IsV0FBVTs7NENBQ1hqQyxLQUFLMEIsSUFBSTswREFDViw4REFBQ2dCOzs7Ozs0Q0FDQTFDLEtBQUtlLEVBQUU7Ozs7Ozs7bUNBSkg7Ozs7OzRCQVFiOzBDQUNGLDhEQUFDNEI7Z0NBQ0NWLFdBQVU7Z0NBQ1ZXLFNBQVMsSUFBTTtvQ0FDYjNDO29DQUNBSyxPQUFPdUMsSUFBSSxDQUFDO2dDQUNkOzBDQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9YLENBQUM7R0F6RnVCL0M7O1FBQ0dKLHlEQUFPQTtRQUlqQkMsa0RBQVNBOzs7S0FMRkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IExvYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9sb2FkZXJcIjtcbmltcG9ydCBQcmltYXJ5QnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL3ByaW1hcnktYnV0dG9uXCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCIuLi9jb25maWcvZmlyZWJhc2VcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEludGVyIH0gZnJvbSBcIkBuZXh0L2ZvbnQvZ29vZ2xlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIi4uL2NvbnRleHQvQXV0aENvbnRleHRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgY29sbGVjdGlvbiwgZ2V0RG9jcyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHVpZCB9KSB7XG4gIGNvbnN0IHsgdXNlciwgbG9nb3V0IH0gPSB1c2VBdXRoKCk7XG4gIGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID0gdXNlU3RhdGU8YW55W10+KFtdKTtcbiAgY29uc3QgdXNlcnNDb2xsZWN0aW9uUmVmID0gY29sbGVjdGlvbihkYiwgXCJ1c2Vyc1wiKTtcbiAgY29uc3QgdXNlckFjY291bnRzQ29sbGVjdGlvblJlZiA9IGNvbGxlY3Rpb24oZGIsIFwiY2F0ZWdvcmllc1wiKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgZ2V0VXNlcnMgPSAoKSA9PiB7XG4gICAgZ2V0RG9jcyh1c2Vyc0NvbGxlY3Rpb25SZWYpLnRoZW4oKGRhdGE6IGFueSkgPT4ge1xuICAgICAgc2V0VXNlcnMoXG4gICAgICAgIGRhdGEuZG9jcy5tYXAoKGRvYzogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHsgLi4uZG9jLmRhdGEoKSwgaWQ6IGRvYy5pZCB9O1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBhZGRBY2NvdW50ID0gKGU6IGFueSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGFkZERvYyh1c2VyQWNjb3VudHNDb2xsZWN0aW9uUmVmLCB7XG4gICAgICAgIGFjY291bnROYW1lOiBhY2NvdW50TmFtZSxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuICB9O1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldFVzZXJzKCk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNFwiPlxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZsZXgtY29sIGgtWzQwdmhdIGZsZXhcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJhY2NvdW50TmFtZVwiXG4gICAgICAgICAgICAgIGlkPVwiYWNjb3VudE5hbWVcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFjY291bnQgTmFtZVwiXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIG9uU3VibWl0PXthZGRBY2NvdW50fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1jb2wgYWxpZ24tYm90dG9tIGp1c3RpZnktZW5kIG10LTJcIj5cbiAgICAgICAgICAgICAgPFByaW1hcnlCdXR0b25cbiAgICAgICAgICAgICAgICBpc0xvYWRpbmc9e2lzTG9hZGluZ31cbiAgICAgICAgICAgICAgICAvLyB0ZXh0RmllbGQ9e1wiQWRkIEFjY291bnRcIn1cbiAgICAgICAgICAgICAgICB0ZXh0RmllbGQ9e2lzTG9hZGluZyA/IDxMb2FkZXIgLz4gOiBcIkFkZCBBY2NvdW50XCJ9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHt1c2VycyAmJlxuICAgICAgICAgICAgdXNlcnMubWFwKCh1c2VyKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9XCJ1c2VyXCI+XG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICB7dXNlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAge3VzZXIuaWR9XG4gICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC00IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtYmxhY2tcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBsb2dvdXQoKTtcbiAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIExvZ291dFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiTG9hZGVyIiwiUHJpbWFyeUJ1dHRvbiIsImRiIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUF1dGgiLCJ1c2VSb3V0ZXIiLCJjb2xsZWN0aW9uIiwiZ2V0RG9jcyIsIkhvbWUiLCJ1aWQiLCJ1c2VyIiwibG9nb3V0IiwidXNlcnMiLCJzZXRVc2VycyIsInVzZXJzQ29sbGVjdGlvblJlZiIsInVzZXJBY2NvdW50c0NvbGxlY3Rpb25SZWYiLCJyb3V0ZXIiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJnZXRVc2VycyIsInRoZW4iLCJkYXRhIiwiZG9jcyIsIm1hcCIsImRvYyIsImlkIiwiYWRkQWNjb3VudCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFkZERvYyIsImFjY291bnROYW1lIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJvblN1Ym1pdCIsInRleHRGaWVsZCIsImgxIiwiYnIiLCJidXR0b24iLCJvbkNsaWNrIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});