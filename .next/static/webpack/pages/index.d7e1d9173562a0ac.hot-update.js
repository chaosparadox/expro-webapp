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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_add_account_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/add-account-form */ \"./components/add-account-form.tsx\");\n/* harmony import */ var _config_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/firebase */ \"./config/firebase.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/AuthContext */ \"./context/AuthContext.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home(param) {\n    let { uid  } = param;\n    _s();\n    const { user , logout  } = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_5__.useAuth)();\n    // const [users, setUsers] = useState<any[]>([]);\n    const [accounts, setAccounts] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const usersCollectionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.collection)(_config_firebase__WEBPACK_IMPORTED_MODULE_3__.db, \"users\");\n    const userAccountsCollectionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.collection)(_config_firebase__WEBPACK_IMPORTED_MODULE_3__.db, \"users/\" + user.uid + \"/accounts\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    // const getUsers = () => {\n    //   getDocs(usersCollectionRef).then((data: any) => {\n    //     setUsers(\n    //       data.docs.map((doc: any) => {\n    //         return { ...doc.data(), id: doc.id };\n    //       })\n    //     );\n    //   });\n    // };\n    const getAccounts = ()=>{\n        (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.getDocs)(userAccountCollectionRef).then((data)=>{\n            setUsers(data.docs.map((doc)=>{\n                return {\n                    ...doc.data(),\n                    id: doc.id\n                };\n            }));\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        getAccounts();\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Overview\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_add_account_form__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            accounts && accounts.map((account)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-white\",\n                                        children: [\n                                            account.accountName,\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                                                lineNumber: 71,\n                                                columnNumber: 21\n                                            }, this),\n                                            user.id\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 19\n                                    }, this)\n                                }, \"account\", false, {\n                                    fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 17\n                                }, this);\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-white p-4 flex items-center justify-center text-black\",\n                                onClick: ()=>{\n                                    logout();\n                                    router.push(\"/login\");\n                                },\n                                children: \"Logout\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\index.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"gmlwpMlcioqwgIAM7nFd7v9mauA=\", false, function() {\n    return [\n        _context_AuthContext__WEBPACK_IMPORTED_MODULE_5__.useAuth,\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUE2QjtBQUMyQjtBQUdoQjtBQUVXO0FBR0Y7QUFDVDtBQUN5QjtBQUdsRCxTQUFTVSxLQUFLLEtBQU8sRUFBRTtRQUFULEVBQUVDLElBQUcsRUFBRSxHQUFQOztJQUMzQixNQUFNLEVBQUVDLEtBQUksRUFBRUMsT0FBTSxFQUFFLEdBQUdQLDZEQUFPQTtJQUVoQyxpREFBaUQ7SUFDakQsTUFBTSxDQUFDUSxVQUFVQyxZQUFZLEdBQUdYLCtDQUFRQSxDQUFRLEVBQUU7SUFDbEQsTUFBTVkscUJBQXFCUiw4REFBVUEsQ0FBQ04sZ0RBQUVBLEVBQUU7SUFDMUMsTUFBTWUsNEJBQTRCVCw4REFBVUEsQ0FDMUNOLGdEQUFFQSxFQUNGLFdBQVdVLEtBQUtELEdBQUcsR0FBRztJQUV4QixNQUFNTyxTQUFTWCxzREFBU0E7SUFFeEIsMkJBQTJCO0lBQzNCLHNEQUFzRDtJQUN0RCxnQkFBZ0I7SUFDaEIsc0NBQXNDO0lBQ3RDLGdEQUFnRDtJQUNoRCxXQUFXO0lBQ1gsU0FBUztJQUNULFFBQVE7SUFDUixLQUFLO0lBRUwsTUFBTVksY0FBYyxJQUFNO1FBQ3hCViwyREFBT0EsQ0FBQ1csMEJBQTBCQyxJQUFJLENBQUMsQ0FBQ0MsT0FBYztZQUNwREMsU0FDRUQsS0FBS0UsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsTUFBYTtnQkFDMUIsT0FBTztvQkFBRSxHQUFHQSxJQUFJSixJQUFJLEVBQUU7b0JBQUVLLElBQUlELElBQUlDLEVBQUU7Z0JBQUM7WUFDckM7UUFFSjtJQUNGO0lBRUF0QixnREFBU0EsQ0FBQyxJQUFNO1FBQ2RjO0lBQ0EsdURBQXVEO0lBQ3pELEdBQUcsRUFBRTtJQUVMLHFCQUNFOzswQkFDRSw4REFBQ25CLGtEQUFJQTs7a0NBQ0gsOERBQUM0QjtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0Y7d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVE7Ozs7OztrQ0FDOUIsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRXhCLDhEQUFDQzs7a0NBQ0MsOERBQUNDO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDcEMsb0VBQVVBOzs7Ozs7Ozs7O2tDQUViLDhEQUFDbUM7OzRCQUNFdEIsWUFDQ0EsU0FBU1csR0FBRyxDQUFDLENBQUNhLFVBQVk7Z0NBQ3hCLHFCQUNFLDhEQUFDRjs4Q0FDQyw0RUFBQ0c7d0NBQUdGLFdBQVU7OzRDQUNYQyxRQUFRRSxXQUFXOzBEQUNwQiw4REFBQ0M7Ozs7OzRDQUNBN0IsS0FBS2UsRUFBRTs7Ozs7OzttQ0FKSDs7Ozs7NEJBUWI7MENBQ0YsOERBQUNlO2dDQUNDTCxXQUFVO2dDQUNWTSxTQUFTLElBQU07b0NBQ2I5QjtvQ0FDQUssT0FBTzBCLElBQUksQ0FBQztnQ0FDZDswQ0FDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWCxDQUFDO0dBM0V1QmxDOztRQUNHSix5REFBT0E7UUFTakJDLGtEQUFTQTs7O0tBVkZHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBBZGRBY2NvdW50IGZyb20gXCIuLi9jb21wb25lbnRzL2FkZC1hY2NvdW50LWZvcm1cIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbG9hZGVyXCI7XG5pbXBvcnQgUHJpbWFyeUJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9wcmltYXJ5LWJ1dHRvblwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vY29uZmlnL2ZpcmViYXNlXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJbnRlciB9IGZyb20gXCJAbmV4dC9mb250L2dvb2dsZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi9jb250ZXh0L0F1dGhDb250ZXh0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IGNvbGxlY3Rpb24sIGdldERvY3MsIGFkZERvYyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHVpZCB9KSB7XG4gIGNvbnN0IHsgdXNlciwgbG9nb3V0IH0gPSB1c2VBdXRoKCk7XG5cbiAgLy8gY29uc3QgW3VzZXJzLCBzZXRVc2Vyc10gPSB1c2VTdGF0ZTxhbnlbXT4oW10pO1xuICBjb25zdCBbYWNjb3VudHMsIHNldEFjY291bnRzXSA9IHVzZVN0YXRlPGFueVtdPihbXSk7XG4gIGNvbnN0IHVzZXJzQ29sbGVjdGlvblJlZiA9IGNvbGxlY3Rpb24oZGIsIFwidXNlcnNcIik7XG4gIGNvbnN0IHVzZXJBY2NvdW50c0NvbGxlY3Rpb25SZWYgPSBjb2xsZWN0aW9uKFxuICAgIGRiLFxuICAgIFwidXNlcnMvXCIgKyB1c2VyLnVpZCArIFwiL2FjY291bnRzXCJcbiAgKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgLy8gY29uc3QgZ2V0VXNlcnMgPSAoKSA9PiB7XG4gIC8vICAgZ2V0RG9jcyh1c2Vyc0NvbGxlY3Rpb25SZWYpLnRoZW4oKGRhdGE6IGFueSkgPT4ge1xuICAvLyAgICAgc2V0VXNlcnMoXG4gIC8vICAgICAgIGRhdGEuZG9jcy5tYXAoKGRvYzogYW55KSA9PiB7XG4gIC8vICAgICAgICAgcmV0dXJuIHsgLi4uZG9jLmRhdGEoKSwgaWQ6IGRvYy5pZCB9O1xuICAvLyAgICAgICB9KVxuICAvLyAgICAgKTtcbiAgLy8gICB9KTtcbiAgLy8gfTtcblxuICBjb25zdCBnZXRBY2NvdW50cyA9ICgpID0+IHtcbiAgICBnZXREb2NzKHVzZXJBY2NvdW50Q29sbGVjdGlvblJlZikudGhlbigoZGF0YTogYW55KSA9PiB7XG4gICAgICBzZXRVc2VycyhcbiAgICAgICAgZGF0YS5kb2NzLm1hcCgoZG9jOiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4geyAuLi5kb2MuZGF0YSgpLCBpZDogZG9jLmlkIH07XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0QWNjb3VudHMoKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk92ZXJ2aWV3PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTRcIj5cbiAgICAgICAgICA8QWRkQWNjb3VudCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7YWNjb3VudHMgJiZcbiAgICAgICAgICAgIGFjY291bnRzLm1hcCgoYWNjb3VudCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PVwiYWNjb3VudFwiPlxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAge2FjY291bnQuYWNjb3VudE5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICB7dXNlci5pZH1cbiAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1ibGFja1wiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGxvZ291dCgpO1xuICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJBZGRBY2NvdW50IiwiZGIiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQXV0aCIsInVzZVJvdXRlciIsImNvbGxlY3Rpb24iLCJnZXREb2NzIiwiSG9tZSIsInVpZCIsInVzZXIiLCJsb2dvdXQiLCJhY2NvdW50cyIsInNldEFjY291bnRzIiwidXNlcnNDb2xsZWN0aW9uUmVmIiwidXNlckFjY291bnRzQ29sbGVjdGlvblJlZiIsInJvdXRlciIsImdldEFjY291bnRzIiwidXNlckFjY291bnRDb2xsZWN0aW9uUmVmIiwidGhlbiIsImRhdGEiLCJzZXRVc2VycyIsImRvY3MiLCJtYXAiLCJkb2MiLCJpZCIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiZGl2IiwiY2xhc3NOYW1lIiwiYWNjb3VudCIsImgxIiwiYWNjb3VudE5hbWUiLCJiciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});