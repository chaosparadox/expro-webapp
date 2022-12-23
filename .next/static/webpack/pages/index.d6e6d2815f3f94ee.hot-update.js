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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_add_account_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/add-account-form */ \"./components/add-account-form.tsx\");\n/* harmony import */ var _config_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/firebase */ \"./config/firebase.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/AuthContext */ \"./context/AuthContext.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _components_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/toast */ \"./components/toast.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Home(param) {\n    let { uid  } = param;\n    _s();\n    const { user , logout  } = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_5__.useAuth)();\n    const [notification, setNotification] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const usersCollectionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.collection)(_config_firebase__WEBPACK_IMPORTED_MODULE_3__.db, \"users\");\n    const userAccountsCollectionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.collection)(_config_firebase__WEBPACK_IMPORTED_MODULE_3__.db, \"users/\" + user.uid + \"/accounts\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const getUsers = ()=>{\n        (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.getDocs)(usersCollectionRef).then((data)=>{\n            setUsers(data.docs.map((doc)=>{\n                return {\n                    ...doc.data(),\n                    id: doc.id\n                };\n            }));\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        getUsers();\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Overview\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_toast__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                notification: notification,\n                                toastTitle: \"Account added successfully\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_add_account_form__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            users && users.map((user)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-white\",\n                                        children: [\n                                            user.name,\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                                                lineNumber: 66,\n                                                columnNumber: 21\n                                            }, this),\n                                            user.id\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 19\n                                    }, this)\n                                }, \"user\", false, {\n                                    fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 17\n                                }, this);\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-white p-4 flex items-center justify-center text-black\",\n                                onClick: ()=>{\n                                    logout();\n                                    router.push(\"/login\");\n                                },\n                                children: \"Logout\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"7brUHYagN1JYnXp19+bZl0zKaco=\", false, function() {\n    return [\n        _context_AuthContext__WEBPACK_IMPORTED_MODULE_5__.useAuth,\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNkI7QUFDMkI7QUFHaEI7QUFFVztBQUdGO0FBQ1Q7QUFDeUI7QUFFYjtBQUVyQyxTQUFTVyxLQUFLLEtBQU8sRUFBRTtRQUFULEVBQUVDLElBQUcsRUFBRSxHQUFQOztJQUMzQixNQUFNLEVBQUVDLEtBQUksRUFBRUMsT0FBTSxFQUFFLEdBQUdSLDZEQUFPQTtJQUVoQyxNQUFNLENBQUNTLGNBQWNDLGdCQUFnQixHQUFHWiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ3RELE1BQU0sQ0FBQ2EsT0FBT0MsU0FBUyxHQUFHZCwrQ0FBUUEsQ0FBUSxFQUFFO0lBQzVDLE1BQU1lLHFCQUFxQlgsOERBQVVBLENBQUNOLGdEQUFFQSxFQUFFO0lBQzFDLE1BQU1rQiw0QkFBNEJaLDhEQUFVQSxDQUMxQ04sZ0RBQUVBLEVBQ0YsV0FBV1csS0FBS0QsR0FBRyxHQUFHO0lBRXhCLE1BQU1TLFNBQVNkLHNEQUFTQTtJQUV4QixNQUFNZSxXQUFXLElBQU07UUFDckJiLDJEQUFPQSxDQUFDVSxvQkFBb0JJLElBQUksQ0FBQyxDQUFDQyxPQUFjO1lBQzlDTixTQUNFTSxLQUFLQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxNQUFhO2dCQUMxQixPQUFPO29CQUFFLEdBQUdBLElBQUlILElBQUksRUFBRTtvQkFBRUksSUFBSUQsSUFBSUMsRUFBRTtnQkFBQztZQUNyQztRQUVKO0lBQ0Y7SUFFQXZCLGdEQUFTQSxDQUFDLElBQU07UUFDZGlCO0lBQ0EsdURBQXVEO0lBQ3pELEdBQUcsRUFBRTtJQUVMLHFCQUNFOzswQkFDRSw4REFBQ3RCLGtEQUFJQTs7a0NBQ0gsOERBQUM2QjtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0Y7d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVE7Ozs7OztrQ0FDOUIsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRXhCLDhEQUFDQzs7a0NBQ0MsOERBQUNDO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQzVCLHlEQUFpQkE7Z0NBQ2hCSyxjQUFjQTtnQ0FDZHdCLFlBQVk7Ozs7OzswQ0FFZCw4REFBQ3RDLG9FQUFVQTs7Ozs7Ozs7Ozs7a0NBRWIsOERBQUNvQzs7NEJBQ0VwQixTQUNDQSxNQUFNUyxHQUFHLENBQUMsQ0FBQ2IsT0FBUztnQ0FDbEIscUJBQ0UsOERBQUN3Qjs4Q0FDQyw0RUFBQ0c7d0NBQUdGLFdBQVU7OzRDQUNYekIsS0FBS2tCLElBQUk7MERBQ1YsOERBQUNVOzs7Ozs0Q0FDQTVCLEtBQUtlLEVBQUU7Ozs7Ozs7bUNBSkg7Ozs7OzRCQVFiOzBDQUNGLDhEQUFDYztnQ0FDQ0osV0FBVTtnQ0FDVkssU0FBUyxJQUFNO29DQUNiN0I7b0NBQ0FPLE9BQU91QixJQUFJLENBQUM7Z0NBQ2Q7MENBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1gsQ0FBQztHQXJFdUJqQzs7UUFDR0wseURBQU9BO1FBU2pCQyxrREFBU0E7OztLQVZGSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgQWRkQWNjb3VudCBmcm9tIFwiLi4vY29tcG9uZW50cy9hZGQtYWNjb3VudC1mb3JtXCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2xvYWRlclwiO1xuaW1wb3J0IFByaW1hcnlCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvcHJpbWFyeS1idXR0b25cIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIi4uL2NvbmZpZy9maXJlYmFzZVwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW50ZXIgfSBmcm9tIFwiQG5leHQvZm9udC9nb29nbGVcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiLi4vY29udGV4dC9BdXRoQ29udGV4dFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBnZXREb2NzLCBhZGREb2MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgVG9hc3ROb3RpZmljYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvdG9hc3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHVpZCB9KSB7XG4gIGNvbnN0IHsgdXNlciwgbG9nb3V0IH0gPSB1c2VBdXRoKCk7XG5cbiAgY29uc3QgW25vdGlmaWNhdGlvbiwgc2V0Tm90aWZpY2F0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3VzZXJzLCBzZXRVc2Vyc10gPSB1c2VTdGF0ZTxhbnlbXT4oW10pO1xuICBjb25zdCB1c2Vyc0NvbGxlY3Rpb25SZWYgPSBjb2xsZWN0aW9uKGRiLCBcInVzZXJzXCIpO1xuICBjb25zdCB1c2VyQWNjb3VudHNDb2xsZWN0aW9uUmVmID0gY29sbGVjdGlvbihcbiAgICBkYixcbiAgICBcInVzZXJzL1wiICsgdXNlci51aWQgKyBcIi9hY2NvdW50c1wiXG4gICk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGdldFVzZXJzID0gKCkgPT4ge1xuICAgIGdldERvY3ModXNlcnNDb2xsZWN0aW9uUmVmKS50aGVuKChkYXRhOiBhbnkpID0+IHtcbiAgICAgIHNldFVzZXJzKFxuICAgICAgICBkYXRhLmRvY3MubWFwKChkb2M6IGFueSkgPT4ge1xuICAgICAgICAgIHJldHVybiB7IC4uLmRvYy5kYXRhKCksIGlkOiBkb2MuaWQgfTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRVc2VycygpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+T3ZlcnZpZXc8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNFwiPlxuICAgICAgICAgIDxUb2FzdE5vdGlmaWNhdGlvblxuICAgICAgICAgICAgbm90aWZpY2F0aW9uPXtub3RpZmljYXRpb259XG4gICAgICAgICAgICB0b2FzdFRpdGxlPXtcIkFjY291bnQgYWRkZWQgc3VjY2Vzc2Z1bGx5XCJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QWRkQWNjb3VudCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7dXNlcnMgJiZcbiAgICAgICAgICAgIHVzZXJzLm1hcCgodXNlcikgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PVwidXNlclwiPlxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAge3VzZXIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIHt1c2VyLmlkfVxuICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtNCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LWJsYWNrXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgbG9nb3V0KCk7XG4gICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBMb2dvdXRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkFkZEFjY291bnQiLCJkYiIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VBdXRoIiwidXNlUm91dGVyIiwiY29sbGVjdGlvbiIsImdldERvY3MiLCJUb2FzdE5vdGlmaWNhdGlvbiIsIkhvbWUiLCJ1aWQiLCJ1c2VyIiwibG9nb3V0Iiwibm90aWZpY2F0aW9uIiwic2V0Tm90aWZpY2F0aW9uIiwidXNlcnMiLCJzZXRVc2VycyIsInVzZXJzQ29sbGVjdGlvblJlZiIsInVzZXJBY2NvdW50c0NvbGxlY3Rpb25SZWYiLCJyb3V0ZXIiLCJnZXRVc2VycyIsInRoZW4iLCJkYXRhIiwiZG9jcyIsIm1hcCIsImRvYyIsImlkIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJkaXYiLCJjbGFzc05hbWUiLCJ0b2FzdFRpdGxlIiwiaDEiLCJiciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});