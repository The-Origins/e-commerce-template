"use strict";
exports.id = 883;
exports.ids = [883];
exports.modules = {

/***/ 429:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3805);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2734);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1508);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2658);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7076);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5007);
/* harmony import */ var _state_snackBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7416);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4593);
const Page404=()=>{const theme=(0,_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();const{0:counter,1:setCounter}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(5);const dispatch=(0,react_redux__WEBPACK_IMPORTED_MODULE_5__/* .useDispatch */ .I0)();(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{dispatch((0,_state_snackBar__WEBPACK_IMPORTED_MODULE_2__/* .setSnackBar */ .c)({on:true,type:"ERROR",title:"404 Error",message:"Couldn't find the page you're looking for"}));const counterInterval=setInterval(()=>{setCounter(prev=>prev-1);},1000);const counterTimeout=setTimeout(()=>{(0,gatsby__WEBPACK_IMPORTED_MODULE_1__.navigate)("/");},5000);return()=>{clearTimeout(counterTimeout);clearInterval(counterInterval);};},[]);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment),null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3__/* .Helmet */ .q,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title",null,"404 Error"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{name:"description",content:"404 Error| Page not found"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,{height:"100vh",width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,{variant:"h1"},"404"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,{variant:"h3"},"error"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,null,"redirecting in 00:0",counter,"s")));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page404);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-404-js.js.map