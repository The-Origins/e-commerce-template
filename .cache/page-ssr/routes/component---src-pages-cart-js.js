"use strict";
exports.id = 873;
exports.ids = [873];
exports.modules = {

/***/ 4886:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5949);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
"use client";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
  d: "M22.73 22.73 2.77 2.77 2 2l-.73-.73L0 2.54l4.39 4.39 2.21 4.66-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h7.46l1.38 1.38c-.5.36-.83.95-.83 1.62 0 1.1.89 2 1.99 2 .67 0 1.26-.33 1.62-.84L21.46 24l1.27-1.27zM7.42 15c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h2.36l2 2H7.42zm8.13-2c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H6.54l9.01 9zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z"
}), 'RemoveShoppingCart'));

/***/ }),

/***/ 3751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3805);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5007);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8396);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2734);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1508);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2658);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8973);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1079);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8990);
/* harmony import */ var _components_product_userProductCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1056);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(3733);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(4886);
/* harmony import */ var _components_layout_skeletonGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2456);
/* harmony import */ var _components_product_productCardContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2927);
/* harmony import */ var _components_layout_notLoggedInComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6320);
/* harmony import */ var _utils_fetchWorker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7811);
/* harmony import */ var _state_snackBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7416);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4593);
const CartPage=({location,setConfirmationModal})=>{const dispatch=(0,react_redux__WEBPACK_IMPORTED_MODULE_8__/* .useDispatch */ .I0)();const currency=(0,react_redux__WEBPACK_IMPORTED_MODULE_8__/* .useSelector */ .v9)(state=>state.currency);const user=(0,react_redux__WEBPACK_IMPORTED_MODULE_8__/* .useSelector */ .v9)(state=>state.user);const session=(0,react_redux__WEBPACK_IMPORTED_MODULE_8__/* .useSelector */ .v9)(state=>state.session);const{0:isLoading,1:setIsLoading}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);const{0:offers,1:setOffers}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});const isNotPhone=(0,_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)("(min-width:1000px)");const theme=(0,_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)();(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(!user.isFetching){if(user.isLoggedIn){const fetchWorker=new _utils_fetchWorker__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z();fetchWorker.fetchOffers().then(res=>{setOffers(res);setIsLoading(false);}).catch(err=>{dispatch((0,_state_snackBar__WEBPACK_IMPORTED_MODULE_6__/* .setSnackBar */ .c)({on:true,type:"ERROR",message:`Error fetching product offers: ${err}`}));});}else{setIsLoading(false);}}},[user]);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment),null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_7__/* .Helmet */ .q,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title",null,"Cart | ",theme.title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{name:"description",content:"Your cart"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,{display:"flex",justifyContent:"center"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,{minHeight:"100vh",width:isNotPhone?"80%":"90%"},!isLoading&&!user.isLoggedIn?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout_notLoggedInComponent__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{location:location,message:"login to access cart",size:"large"}):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,{display:"flex",flexDirection:"column"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,{width:"100%",display:"flex",gap:"40px",alignItems:"flex-start"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,{width:isNotPhone?"75%":"100%",display:"flex",flexDirection:"column",gap:"20px"},!isNotPhone&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,{mt:"20px",boxShadow:`0px 0px 10px 0px ${theme.palette.grey[400]}`,borderRadius:"25px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-evenly",gap:"20px",padding:"20px 40px"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,{fontSize:"1.2rem",sx:{typography:"secondaryFont",fontWeight:"bold"}},"Summary"),isLoading?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout_skeletonGroup__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{count:2,width:"200px"}):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,{display:"flex",flexDirection:"column",width:"100%"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,{display:"flex",justifyContent:"space-between"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,{fontSize:"0.8rem"},"Subtotal"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,{fontSize:"0.8rem"},currency.symbol," ",user.data.cart.total)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,{display:"flex",justifyContent:"center"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,{fontSize:"0.8rem"},"*Delivery charges not included"))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,{position:"fixed",bottom:0,width:"100%",padding:"20px",boxShadow:`0px 0px 10px 0px ${theme.palette.grey[400]}`,zIndex:2,bgcolor:"white",display:"flex",alignItems:"center",justifyContent:"space-between",borderRadius:"25px 25px 0px 0px"},isLoading?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z,{variant:"rounded",width:"200px"}):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,{padding:"10px",border:`1px solid ${theme.palette.grey[400]}`,borderRadius:"10px",fontSize:"0.9rem"},"SubTotal: ",currency.symbol," ",user.data.cart.total),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z,{href:"/checkout"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z,{startIcon:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z,null),variant:"contained",disableElevation:true,disabled:isLoading},"Checkout")))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,{width:"100%",height:isNotPhone?"80vh":"50vh",sx:{overflowY:"scroll","&::-webkit-scrollbar":{bgcolor:"transparent",width:"10px"},"&::-webkit-scrollbar-thumb":{borderRadius:"25px",bgcolor:theme.palette.grey[300]},"&::-webkit-scrollbar-thumb:hover":{cursor:"pointer",bgcolor:theme.palette.grey[400]}}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,{display:"flex",flexDirection:"column",gap:"20px",padding:"10px"},isLoading?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout_skeletonGroup__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{count:4,width:"100%",height:"100px"}):!Object.keys(user.data.cart.items).length?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:"20px"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z,null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,null,"No items in your cart yet"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z,{href:"/"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z,{disableElevation:true,variant:"contained"},"Start shopping"))):Object.keys(user.data.cart.items).map(cartItem=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_product_userProductCard__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{location,user,offers,currency,setConfirmationModal,id:cartItem,details:user.data.cart.items[cartItem],type:"cart"});})))),isNotPhone&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,{width:"300px",boxShadow:`0px 0px 10px 0px ${theme.palette.grey[400]}`,borderRadius:"25px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-evenly",gap:"20px",padding:"20px 40px",bgcolor:"white"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,{fontSize:"1.2rem",sx:{typography:"secondaryFont",fontWeight:"bold"}},"Summary"),isLoading?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout_skeletonGroup__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{width:"200px",count:2}):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,{display:"flex",flexDirection:"column",width:"100%"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,{display:"flex",justifyContent:"space-between"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,{fontSize:"0.8rem"},"Subtotal"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,{fontSize:"0.8rem"},currency.symbol," ",user.data.cart.total)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,{width:"100%",display:"flex",justifyContent:"space-between"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,{fontSize:"0.8rem"},"VAT:"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,{fontSize:"0.8rem"},currency.symbol," 0.0")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,{width:"100%",textAlign:"center",fontSize:"0.8rem",mt:"5px"},"*Delivery charges not included*")),isLoading?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z,{variant:"rounded",width:"200px"}):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,{display:"flex",width:"100%",justifyContent:"space-between"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,{fontWeight:"bold"},"Total"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,{fontWeight:"bold"},currency.symbol," ",user.data.cart.total)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z,{href:"/checkout"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z,{startIcon:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z,null),variant:"contained",disableElevation:true,disabled:isLoading},"Checkout")))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_product_productCardContainer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{location,user,session,currency,setConfirmationModal,title:`Recently viewed`,isRecentlyViewedProducts:true})))));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-cart-js.js.map