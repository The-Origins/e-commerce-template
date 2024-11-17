"use strict";
exports.id = 9;
exports.ids = [9];
exports.modules = {

/***/ 847:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ login)
});

// EXTERNAL MODULE: external "D:\\Documents\\wegastudios\\wendoh_cakes\\website\\node_modules\\react\\index.js"
var external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_ = __webpack_require__(3805);
var external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default = /*#__PURE__*/__webpack_require__.n(external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(2734);
// EXTERNAL MODULE: ./node_modules/@mui/material/Box/Box.js + 1 modules
var Box = __webpack_require__(1508);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(2658);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/createSvgIcon.js + 2 modules
var createSvgIcon = __webpack_require__(5949);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./node_modules/@mui/icons-material/esm/Google.js
'use client';




/* harmony default export */ const Google = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
}), 'Google'));
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/esm/Facebook.js
var Facebook = __webpack_require__(2759);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/esm/Email.js
var Email = __webpack_require__(3132);
// EXTERNAL MODULE: ./node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(8990);
// EXTERNAL MODULE: ./node_modules/@mui/material/Link/Link.js + 2 modules
var Link = __webpack_require__(1079);
;// CONCATENATED MODULE: ./src/components/auth/login/intro.jsx
const LoginIntro=({setStage,tab})=>{return/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Box/* default */.Z,{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"10px"},/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Button/* default */.Z,{variant:"outlined",startIcon:/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Google,null),sx:{width:"300px",height:"50px"}},"Google"),/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Button/* default */.Z,{variant:"outlined",startIcon:/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Facebook/* default */.Z,null),sx:{width:"300px",height:"50px"}},"Facebook"),/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Button/* default */.Z,{variant:"outlined",startIcon:/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Email/* default */.Z,null),onClick:()=>setStage(1),sx:{width:"300px",height:"50px"}},"Email"),/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Link/* default */.Z,{href:`/auth/register${tab?"?tab="+tab:""}`},/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Button/* default */.Z,{sx:{mt:"50px",textTransform:"none",":hover":{textDecoration:"underline"}}},"Don't have an account?")));};/* harmony default export */ const intro = (LoginIntro);
// EXTERNAL MODULE: ./node_modules/@mui/material/TextField/TextField.js + 11 modules
var TextField = __webpack_require__(1797);
// EXTERNAL MODULE: ./node_modules/@mui/material/InputAdornment/InputAdornment.js + 1 modules
var InputAdornment = __webpack_require__(270);
// EXTERNAL MODULE: ./node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(6867);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/esm/Visibility.js
var Visibility = __webpack_require__(2186);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/esm/VisibilityOff.js
var VisibilityOff = __webpack_require__(8883);
// EXTERNAL MODULE: ./node_modules/react-redux/dist/react-redux.mjs
var react_redux = __webpack_require__(5007);
// EXTERNAL MODULE: ./src/utils/authWorker.js + 49 modules
var utils_authWorker = __webpack_require__(6292);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(7076);
// EXTERNAL MODULE: ./src/state/user.js + 1 modules
var user = __webpack_require__(156);
;// CONCATENATED MODULE: ./src/components/auth/login/loginForm.jsx
const LoginForm=({setStage,setStatus,tab})=>{const authWorker=new utils_authWorker/* default */.Z();const dispatch=(0,react_redux/* useDispatch */.I0)();const{0:form,1:setForm}=(0,external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_.useState)({});const{0:errors,1:setErrors}=(0,external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_.useState)({email:"required",password:"required"});const{0:touched,1:setTouched}=(0,external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_.useState)({});const{0:isPassVisible,1:setIsPassVisible}=(0,external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_.useState)(false);const handleChange=({target})=>{setErrors(authWorker.getErrors(errors,target));setForm(prev=>({...prev,[target.name]:target.value}));};const handleBlur=({target})=>{setTouched(prev=>({...prev,[target.name]:true}));};const handleLogin=event=>{event.preventDefault();setForm(prev=>{dispatch((0,user/* loginUser */.pH)({data:prev,setStatus,onSuccess:()=>{(0,gatsby_browser_entry.navigate)(tab||"/");setStage(0);},onError:()=>{setStage(0);}}));return{};});};return/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement("form",{onSubmit:handleLogin,style:{width:"100%",display:"flex",flexDirection:"column",gap:"20px"}},/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Box/* default */.Z,{display:"flex",flexDirection:"column",gap:"5px"},/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(TextField/* default */.Z,{variant:"outlined",type:"email",label:"email",name:"email",value:form.email,onChange:handleChange,onBlur:handleBlur,error:Boolean(touched.email)&&Boolean(errors.email),helperText:touched.email&&errors.email||" "}),/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(TextField/* default */.Z,{variant:"outlined",type:isPassVisible?"text":"password",label:"password",name:"password",value:form.password,onChange:handleChange,onBlur:handleBlur,error:Boolean(touched.password)&&Boolean(errors.password),helperText:touched.password&&errors.password||" ",InputProps:{endAdornment:/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(InputAdornment/* default */.Z,{position:"end"},/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(IconButton/* default */.Z,{onClick:()=>setIsPassVisible(prev=>!prev)},isPassVisible?/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Visibility/* default */.Z,null):/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(VisibilityOff/* default */.Z,null)))}}),/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Button/* default */.Z,{onClick:()=>setStage(2)},"Forgot password?")),/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Box/* default */.Z,{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"},/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Button/* default */.Z,{onClick:()=>setStage(0)},"cancel"),/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Button/* default */.Z,{type:"submit",variant:"contained",disableElevation:true,disabled:!Boolean(Object.keys(touched).length)&&Boolean(Object.keys(errors).length)||Boolean(Object.keys(errors).length)},"Login")));};/* harmony default export */ const loginForm = (LoginForm);
// EXTERNAL MODULE: ./src/components/forms/changePassword/index.jsx + 1 modules
var changePassword = __webpack_require__(9497);
;// CONCATENATED MODULE: ./src/pages/auth/login.js
const Login=({setStatus,location})=>{const searchParams=new URLSearchParams(location.search);const tab=searchParams.get("tab");const theme=(0,useTheme/* default */.Z)();const{0:stage,1:setStage}=(0,external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_.useState)(0);(0,external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_.useEffect)(()=>{if(typeof window!=="undefined"){document.title=`Login | ${theme.title}`;}},[theme.title]);const stages=[/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(intro,{setStage,tab}),/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(loginForm,{setStage,setStatus,tab}),/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(changePassword/* default */.Z,{onCancel:()=>setStage(1),onComplete:()=>{setStage(1);},setStatus})];return/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Box/* default */.Z,{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Typography/* default */.Z,{mt:"20px",fontSize:"clamp(1rem, 5vw, 2rem)",sx:{typography:"secondaryFont",fontWeight:"bold"}},"Login"),/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Box/* default */.Z,{display:"flex",width:"min(400px, 100%)",height:"100%",alignItems:"center",padding:"0px 30px"},stages[stage]));};/* harmony default export */ const login = (Login);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-auth-login-js.js.map