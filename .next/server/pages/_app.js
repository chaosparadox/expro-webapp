/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./config/firebase.ts":
/*!****************************!*\
  !*** ./config/firebase.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"db\": () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/firestore */ \"@firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_0__, firebase_app__WEBPACK_IMPORTED_MODULE_1__, _firebase_firestore__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_auth__WEBPACK_IMPORTED_MODULE_0__, firebase_app__WEBPACK_IMPORTED_MODULE_1__, _firebase_firestore__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyB6or0YRE40JVLFRjeGawO2mKeAROPPLe0\",\n    authDomain: \"expro-app.firebaseapp.com\",\n    projectId: \"expro-app\",\n    storageBucket: \"expro-app.appspot.com\",\n    messagingSenderId: \"332085300360\",\n    appId: \"1:332085300360:web:6402b94570bbc456ffe33d\"\n};\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_1__.initializeApp)(firebaseConfig);\nconst db = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth)();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcvZmlyZWJhc2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBd0M7QUFDSztBQUNNO0FBRW5ELE1BQU1HLGlCQUFpQjtJQUNyQkMsUUFBUUMseUNBQXdDO0lBQ2hERyxZQUFZSCwyQkFBNEM7SUFDeERLLFdBQVdMLFdBQTJDO0lBQ3RETyxlQUFlUCx1QkFBK0M7SUFDOURTLG1CQUFtQlQsY0FBb0Q7SUFDdkVXLE9BQU9YLDJDQUF1QztBQU9oRDtBQUVBLE1BQU1hLE1BQU1qQiwyREFBYUEsQ0FBQ0U7QUFDbkIsTUFBTWdCLEtBQUtqQixpRUFBWUEsQ0FBQ2dCLEtBQUs7QUFDN0IsTUFBTUUsT0FBT3BCLHNEQUFPQSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhwcm8td2ViYXBwLy4vY29uZmlnL2ZpcmViYXNlLnRzP2M5MjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0QXV0aCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XHJcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7IGdldEZpcmVzdG9yZSB9IGZyb20gXCJAZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcblxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICBhcGlLZXk6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FQSV9LRVksXHJcbiAgYXV0aERvbWFpbjogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfQVVUSF9ET01BSU4sXHJcbiAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9QUk9KRUNUX0lELFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX1NUT1JBR0VfQlVDS0VULFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9NRVNTQUdJTkdfU0VOREVSX0lELFxyXG4gIGFwcElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9BUFBfSUQsXHJcbiAgLy8gYXBpS2V5OiBcIkFJemFTeUI2b3IwWVJFNDBKVkxGUmplR2F3TzJtS2VBUk9QUExlMFwiLFxyXG4gIC8vIGF1dGhEb21haW46IFwiZXhwcm8tYXBwLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gIC8vIHByb2plY3RJZDogXCJleHByby1hcHBcIixcclxuICAvLyBzdG9yYWdlQnVja2V0OiBcImV4cHJvLWFwcC5hcHBzcG90LmNvbVwiLFxyXG4gIC8vIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjMzMjA4NTMwMDM2MFwiLFxyXG4gIC8vIGFwcElkOiBcIjE6MzMyMDg1MzAwMzYwOndlYjo2NDAyYjk0NTcwYmJjNDU2ZmZlMzNkXCIsXHJcbn07XHJcblxyXG5jb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuZXhwb3J0IGNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGFwcCk7XHJcbmV4cG9ydCBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xyXG4iXSwibmFtZXMiOlsiZ2V0QXV0aCIsImluaXRpYWxpemVBcHAiLCJnZXRGaXJlc3RvcmUiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9BUElfS0VZIiwiYXV0aERvbWFpbiIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FVVEhfRE9NQUlOIiwicHJvamVjdElkIiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfUFJPSkVDVF9JRCIsInN0b3JhZ2VCdWNrZXQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9TVE9SQUdFX0JVQ0tFVCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfTUVTU0FHSU5HX1NFTkRFUl9JRCIsImFwcElkIiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfQVBQX0lEIiwiYXBwIiwiZGIiLCJhdXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./config/firebase.ts\n");

/***/ }),

/***/ "./context/AuthContext.tsx":
/*!*********************************!*\
  !*** ./context/AuthContext.tsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContextProvider\": () => (/* binding */ AuthContextProvider),\n/* harmony export */   \"useAuth\": () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var _config_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/firebase */ \"./config/firebase.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, _config_firebase__WEBPACK_IMPORTED_MODULE_3__]);\n([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, _config_firebase__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst useAuth = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\nconst AuthContextProvider = ({ children  })=>{\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    // console.log(user);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChanged)(_config_firebase__WEBPACK_IMPORTED_MODULE_3__.auth, (user)=>{\n            if (user) {\n                setUser({\n                    uid: user.uid,\n                    email: user.email,\n                    displayName: user.displayName\n                });\n            } else {\n                setUser(null);\n            }\n            setLoading(false);\n        });\n        return ()=>unsubscribe();\n    }, []);\n    const register = (email, password)=>{\n        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.createUserWithEmailAndPassword)(_config_firebase__WEBPACK_IMPORTED_MODULE_3__.auth, email, password);\n    };\n    const login = (email, password)=>{\n        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithEmailAndPassword)(_config_firebase__WEBPACK_IMPORTED_MODULE_3__.auth, email, password);\n    };\n    const logout = async ()=>{\n        setUser(null);\n        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signOut)(_config_firebase__WEBPACK_IMPORTED_MODULE_3__.auth);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            login,\n            register,\n            logout\n        },\n        children: loading ? null : children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\context\\\\AuthContext.tsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, undefined);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0F1dGhDb250ZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXVFO0FBTWhEO0FBQ21CO0FBRTFDLE1BQU1TLDRCQUFjVCxvREFBYUEsQ0FBTSxDQUFDO0FBRWpDLE1BQU1VLFVBQVUsSUFBTVQsaURBQVVBLENBQUNRLGFBQWE7QUFFOUMsTUFBTUUsc0JBQXNCLENBQUMsRUFDbENDLFNBQVEsRUFHVCxHQUFLO0lBQ0osTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdYLCtDQUFRQSxDQUFNLElBQUk7SUFDMUMsTUFBTSxDQUFDWSxTQUFTQyxXQUFXLEdBQUdiLCtDQUFRQSxDQUFDLElBQUk7SUFDM0MscUJBQXFCO0lBRXJCRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTWUsY0FBY2IsaUVBQWtCQSxDQUFDSSxrREFBSUEsRUFBRSxDQUFDSyxPQUFTO1lBQ3JELElBQUlBLE1BQU07Z0JBQ1JDLFFBQVE7b0JBQ05JLEtBQUtMLEtBQUtLLEdBQUc7b0JBQ2JDLE9BQU9OLEtBQUtNLEtBQUs7b0JBQ2pCQyxhQUFhUCxLQUFLTyxXQUFXO2dCQUMvQjtZQUNGLE9BQU87Z0JBQ0xOLFFBQVEsSUFBSTtZQUNkLENBQUM7WUFDREUsV0FBVyxLQUFLO1FBQ2xCO1FBRUEsT0FBTyxJQUFNQztJQUNmLEdBQUcsRUFBRTtJQUVMLE1BQU1JLFdBQVcsQ0FBQ0YsT0FBZUcsV0FBcUI7UUFDcEQsT0FBT2pCLDZFQUE4QkEsQ0FBQ0csa0RBQUlBLEVBQUVXLE9BQU9HO0lBQ3JEO0lBRUEsTUFBTUMsUUFBUSxDQUFDSixPQUFlRyxXQUFxQjtRQUNqRCxPQUFPaEIseUVBQTBCQSxDQUFDRSxrREFBSUEsRUFBRVcsT0FBT0c7SUFDakQ7SUFFQSxNQUFNRSxTQUFTLFVBQVk7UUFDekJWLFFBQVEsSUFBSTtRQUNaLE1BQU1QLHNEQUFPQSxDQUFDQyxrREFBSUE7SUFDcEI7SUFFQSxxQkFDRSw4REFBQ0MsWUFBWWdCLFFBQVE7UUFBQ0MsT0FBTztZQUFFYjtZQUFNVTtZQUFPRjtZQUFVRztRQUFPO2tCQUMxRFQsVUFBVSxJQUFJLEdBQUdILFFBQVE7Ozs7OztBQUdoQyxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhwcm8td2ViYXBwLy4vY29udGV4dC9BdXRoQ29udGV4dC50c3g/ZmRmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgb25BdXRoU3RhdGVDaGFuZ2VkLFxyXG4gIGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCxcclxuICBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCxcclxuICBzaWduT3V0LFxyXG59IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XHJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi4vY29uZmlnL2ZpcmViYXNlXCI7XHJcblxyXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8YW55Pih7fSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0UHJvdmlkZXIgPSAoe1xyXG4gIGNoaWxkcmVuLFxyXG59OiB7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxufSkgPT4ge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPGFueT4obnVsbCk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgLy8gY29uc29sZS5sb2codXNlcik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9IG9uQXV0aFN0YXRlQ2hhbmdlZChhdXRoLCAodXNlcikgPT4ge1xyXG4gICAgICBpZiAodXNlcikge1xyXG4gICAgICAgIHNldFVzZXIoe1xyXG4gICAgICAgICAgdWlkOiB1c2VyLnVpZCxcclxuICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgICAgZGlzcGxheU5hbWU6IHVzZXIuZGlzcGxheU5hbWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0VXNlcihudWxsKTtcclxuICAgICAgfVxyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB1bnN1YnNjcmliZSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgcmVnaXN0ZXIgPSAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4ge1xyXG4gICAgcmV0dXJuIGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLCBlbWFpbCwgcGFzc3dvcmQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvZ2luID0gKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpID0+IHtcclxuICAgIHJldHVybiBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLCBlbWFpbCwgcGFzc3dvcmQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldFVzZXIobnVsbCk7XHJcbiAgICBhd2FpdCBzaWduT3V0KGF1dGgpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciwgbG9naW4sIHJlZ2lzdGVyLCBsb2dvdXQgfX0+XHJcbiAgICAgIHtsb2FkaW5nID8gbnVsbCA6IGNoaWxkcmVufVxyXG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwic2lnbk91dCIsImF1dGgiLCJBdXRoQ29udGV4dCIsInVzZUF1dGgiLCJBdXRoQ29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidW5zdWJzY3JpYmUiLCJ1aWQiLCJlbWFpbCIsImRpc3BsYXlOYW1lIiwicmVnaXN0ZXIiLCJwYXNzd29yZCIsImxvZ2luIiwibG9nb3V0IiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/AuthContext.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nextjs-progressbar */ \"nextjs-progressbar\");\n/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nextjs_progressbar__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/AuthContext */ \"./context/AuthContext.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__]);\n_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((nextjs_progressbar__WEBPACK_IMPORTED_MODULE_2___default()), {\n                color: \"white\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\_app.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__.AuthContextProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\_app.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sokud\\\\Documents\\\\Dev\\\\expro-webapp\\\\pages\\\\_app.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQStCO0FBQ2dCO0FBQ2M7QUFJOUMsU0FBU0UsSUFBSSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBWSxFQUFFO0lBQzlELHFCQUNFOzswQkFDRSw4REFBQ0osMkRBQWFBO2dCQUFDSyxPQUFNOzs7Ozs7MEJBQ3JCLDhEQUFDSixxRUFBbUJBOzBCQUNsQiw0RUFBQ0U7b0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7OztBQUloQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhwcm8td2ViYXBwLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCBOZXh0TlByb2dyZXNzIGZyb20gXCJuZXh0anMtcHJvZ3Jlc3NiYXJcIjtcbmltcG9ydCB7IEF1dGhDb250ZXh0UHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dC9BdXRoQ29udGV4dFwiO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5leHROUHJvZ3Jlc3MgY29sb3I9XCJ3aGl0ZVwiIC8+XG4gICAgICA8QXV0aENvbnRleHRQcm92aWRlcj5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9BdXRoQ29udGV4dFByb3ZpZGVyPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIk5leHROUHJvZ3Jlc3MiLCJBdXRoQ29udGV4dFByb3ZpZGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "nextjs-progressbar":
/*!*************************************!*\
  !*** external "nextjs-progressbar" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("nextjs-progressbar");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@firebase/firestore":
/*!**************************************!*\
  !*** external "@firebase/firestore" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@firebase/firestore");;

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();