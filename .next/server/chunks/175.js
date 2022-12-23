"use strict";
exports.id = 175;
exports.ids = [175];
exports.modules = {

/***/ 5864:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ auth),
/* harmony export */   "db": () => (/* binding */ db)
/* harmony export */ });
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(401);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3745);
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1401);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_0__, firebase_app__WEBPACK_IMPORTED_MODULE_1__, _firebase_firestore__WEBPACK_IMPORTED_MODULE_2__]);
([firebase_auth__WEBPACK_IMPORTED_MODULE_0__, firebase_app__WEBPACK_IMPORTED_MODULE_1__, _firebase_firestore__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const firebaseConfig = {
    apiKey: "AIzaSyB6or0YRE40JVLFRjeGawO2mKeAROPPLe0",
    authDomain: "expro-app.firebaseapp.com",
    projectId: "expro-app",
    storageBucket: "expro-app.appspot.com",
    messagingSenderId: "332085300360",
    appId: "1:332085300360:web:6402b94570bbc456ffe33d"
};
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_1__.initializeApp)(firebaseConfig);
const db = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth)();

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 175:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ AuthContextProvider),
/* harmony export */   "a": () => (/* binding */ useAuth)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(401);
/* harmony import */ var _config_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5864);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, _config_firebase__WEBPACK_IMPORTED_MODULE_3__]);
([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, _config_firebase__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
const useAuth = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);
const AuthContextProvider = ({ children  })=>{
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    // console.log(user);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChanged)(_config_firebase__WEBPACK_IMPORTED_MODULE_3__/* .auth */ .I, (user)=>{
            if (user) {
                setUser({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName
                });
            } else {
                setUser(null);
            }
            setLoading(false);
        });
        return ()=>unsubscribe();
    }, []);
    const register = (email, password)=>{
        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.createUserWithEmailAndPassword)(_config_firebase__WEBPACK_IMPORTED_MODULE_3__/* .auth */ .I, email, password);
    };
    const login = (email, password)=>{
        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithEmailAndPassword)(_config_firebase__WEBPACK_IMPORTED_MODULE_3__/* .auth */ .I, email, password);
    };
    const logout = async ()=>{
        setUser(null);
        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signOut)(_config_firebase__WEBPACK_IMPORTED_MODULE_3__/* .auth */ .I);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: {
            user,
            login,
            register,
            logout
        },
        children: loading ? null : children
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;