"use strict";
exports.id = 431;
exports.ids = [431];
exports.modules = {

/***/ 3268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ register)
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
// EXTERNAL MODULE: ./node_modules/react-redux/dist/react-redux.mjs
var react_redux = __webpack_require__(5007);
// EXTERNAL MODULE: ./node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(8990);
// EXTERNAL MODULE: ./node_modules/@mui/material/Link/Link.js + 2 modules
var Link = __webpack_require__(1079);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/createSvgIcon.js + 2 modules
var createSvgIcon = __webpack_require__(5949);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./node_modules/@mui/icons-material/esm/East.js
"use client";



/* harmony default export */ const East = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "m15 5-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7-7-7z"
}), 'East'));
;// CONCATENATED MODULE: ./src/components/auth/register/intro.jsx
const RegisterIntro=({setStage,tab})=>{return/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Box/* default */.Z,{height:"100%",position:"relative",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"30px"},/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Box/* default */.Z,{display:"flex",flexDirection:"column",alignItems:"center",gap:"10px"},/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Typography/* default */.Z,{mt:"10px",fontSize:"clamp(1rem, 5vw, 2rem)",sx:{typography:"secondaryFont",fontWeight:"bold"}},"Register"),/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Typography/* default */.Z,{fontSize:"1.1rem"},"And get access to all of our services")),/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Button/* default */.Z,{size:"large",variant:"contained",endIcon:/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(East,null),onClick:()=>setStage(1)},"Start"),/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Link/* default */.Z,{href:`/auth/login${tab?"?tab="+tab:""}`},/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Button/* default */.Z,{sx:{mt:"50px",textTransform:"none",":hover":{textDecoration:"underline"}}},"Already have an account?")));};/* harmony default export */ const intro = (RegisterIntro);
;// CONCATENATED MODULE: ./node_modules/@mui/icons-material/esm/Person.js
"use client";



/* harmony default export */ const Person = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), 'Person'));
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/esm/PhoneInTalk.js
var PhoneInTalk = __webpack_require__(9102);
// EXTERNAL MODULE: ./node_modules/@mui/material/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(8396);
// EXTERNAL MODULE: ./node_modules/@mui/material/TextField/TextField.js + 11 modules
var TextField = __webpack_require__(1797);
// EXTERNAL MODULE: ./src/utils/authWorker.js + 49 modules
var utils_authWorker = __webpack_require__(6292);
// EXTERNAL MODULE: ./src/components/forms/inputs/telTextField.jsx
var telTextField = __webpack_require__(1837);
// EXTERNAL MODULE: ./lib/callingCodes.json
var callingCodes = __webpack_require__(3850);
;// CONCATENATED MODULE: ./src/components/auth/register/general.jsx
const GeneralInfo=({setStage,setRegisterForm,region})=>{const theme=(0,useTheme/* default */.Z)();const isNotPhone=(0,useMediaQuery/* default */.Z)("(min-width:1000px)");const authWorker=new utils_authWorker/* default */.Z();const{0:form,1:setForm}=(0,external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_.useState)({phoneCode:region.country_code,phoneNumber:callingCodes[region.country_code].callingCode});const{0:touched,1:setTouched}=(0,external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_.useState)({});const{0:errors,1:setErrors}=(0,external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_.useState)({firstName:"required",lastName:"required",email:"required",phoneNumber:"required"});const handleChange=({target})=>{setForm(prev=>{if(target.name==="phoneCode"){return{...prev,phoneCode:target.value,phoneNumber:callingCodes[target.value].callingCode};}else if(target.name==="phoneNumber"){return{...prev,phoneNumber:authWorker.formatPhoneNumber(prev.phoneNumber,target.value,prev.phoneCode)};}return{...prev,[target.name]:target.value};});setForm(prev=>{setErrors(authWorker.getErrors(errors,{name:target.name,value:prev[target.name]},prev));return prev;});};const handleBlur=({target})=>{setTouched(prev=>({...prev,[target.name]:true}));};const handleSubmit=event=>{event.preventDefault();setRegisterForm(prev=>({...prev,name:{first:form.firstName,last:form.lastName},email:form.email,phone:{code:form.phoneCode,number:form.phoneNumber}}));setForm({phoneCode:region.country_code||"US",phoneNumber:callingCodes[region.country_code||"US"].callingCode});setStage(2);};return/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement("form",{onSubmit:handleSubmit,style:{display:"flex",flexDirection:"column",gap:"20px",width:"100%",height:"100%",justifyContent:"space-evenly"}},/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Box/* default */.Z,{display:"flex",flexDirection:"column",gap:"10px"},/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Box/* default */.Z,{display:"flex",flexDirection:"column"},/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Box/* default */.Z,{display:"flex",gap:"5px",alignItems:"center",color:"text.secondary",padding:"5px"},/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Person,{fontSize:" 0.7rem"}),/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Typography/* default */.Z,{fontSize:" 0.7rem",sx:{"& > span":{color:"primary.main"}}},"name",/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement("span",null,"*"))),/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Box/* default */.Z,{border:`1px solid ${theme.palette.grey[300]}`,padding:"15px 15px 0px 15px",borderRadius:"10px",display:"flex",flexWrap:"wrap",gap:isNotPhone?"10px":0},/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(TextField/* default */.Z,{size:!isNotPhone&&"small",variant:"outlined",type:"name",name:"firstName",value:form.firstName,onChange:handleChange,onBlur:handleBlur,error:Boolean(touched.firstName)&&Boolean(errors.firstName),helperText:touched.firstName&&errors.firstName||" ",label:"First name",sx:{flexBasis:200,flexGrow:1}}),/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(TextField/* default */.Z,{size:!isNotPhone&&"small",variant:"outlined",type:"name",label:"Last name",name:"lastName",value:form.lastName,onChange:handleChange,onBlur:handleBlur,error:Boolean(touched.lastName)&&Boolean(errors.lastName),helperText:touched.lastName&&errors.lastName||" ",sx:{flexBasis:200,flexGrow:1}}))),/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Box/* default */.Z,{display:"flex",flexDirection:"column"},/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Box/* default */.Z,{display:"flex",gap:"5px",alignItems:"center",color:"text.secondary",padding:"5px"},/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(PhoneInTalk/* default */.Z,{fontSize:" 0.7rem"}),/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Typography/* default */.Z,{fontSize:" 0.7rem",sx:{"& > span":{color:"primary.main"}}},"contact",/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement("span",null,"*"))),/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Box/* default */.Z,{border:`1px solid ${theme.palette.grey[300]}`,padding:"15px 15px 0px 15px",borderRadius:"10px",display:"flex",flexWrap:"wrap",gap:isNotPhone?"10px":0},/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(TextField/* default */.Z,{size:!isNotPhone&&"small",variant:"outlined",type:"email",label:"Email",name:"email",value:form.email,onChange:handleChange,onBlur:handleBlur,error:Boolean(touched.email)&&Boolean(errors.email),helperText:touched.email&&errors.email||" ",sx:{flexBasis:200,flexGrow:1}}),/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(telTextField/* default */.Z,{number:"phoneNumber",code:"phoneCode",style:{flexBasis:200,flexGrow:1},size:!isNotPhone&&"small",form,errors,touched,handleChange,handleBlur})))),/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Box/* default */.Z,{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"},/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Button/* default */.Z,{variant:"outlined",onClick:()=>setStage(0)},"cancel"),/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Button/* default */.Z,{type:"submit",variant:"contained",disableElevation:true,disabled:!Boolean(Object.keys(touched).length)&&Boolean(Object.keys(errors).length)||Boolean(Object.keys(errors).length)},"next")));};/* harmony default export */ const general = (GeneralInfo);
// EXTERNAL MODULE: ./src/components/forms/password/index.jsx
var forms_password = __webpack_require__(5924);
// EXTERNAL MODULE: ./src/components/forms/address/index.jsx + 3 modules
var address = __webpack_require__(2214);
// EXTERNAL MODULE: ./src/components/forms/payment/index.jsx + 4 modules
var payment = __webpack_require__(7697);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/esm/Paid.js
var Paid = __webpack_require__(3577);
// EXTERNAL MODULE: ./src/components/forms/inputs/currencySelect.jsx
var currencySelect = __webpack_require__(1187);
// EXTERNAL MODULE: ./lib/currencies.json
var currencies = __webpack_require__(4708);
;// CONCATENATED MODULE: ./src/components/auth/register/currency.jsx
const Currency=({region,setStage,setRegisterForm,handleRegister})=>{const{0:form,1:setForm}=(0,external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_.useState)({currency:region.currency||"USD"});const handleChange=({target})=>{setForm({currency:target.value});};const handleConfirm=()=>{setRegisterForm(prev=>({...prev,payments:{...prev.payments,currency:currencies[form.currency]}}));handleRegister();};return/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Box/* default */.Z,{sx:{display:"flex",flexDirection:"column",gap:"20px",height:"100%",justifyContent:"space-evenly",alignItems:"center"}},/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Box/* default */.Z,{display:"flex",flexDirection:"column",gap:"20px"},/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Typography/* default */.Z,{fontWeight:"bold",fontSize:"1.3rem",sx:{display:"flex",alignItems:"center",gap:"5px"}},/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Paid/* default */.Z,null),"Select your currency"),/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(currencySelect/* default */.Z,{form,handleChange})),/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Box/* default */.Z,{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"},/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Button/* default */.Z,{variant:"outlined",disableElevation:true,onClick:()=>setStage(4)},"Back"),/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Button/* default */.Z,{onClick:handleConfirm,variant:"contained",disableElevation:true},"confirm")));};/* harmony default export */ const currency = (Currency);
// EXTERNAL MODULE: ./src/state/user.js + 1 modules
var user = __webpack_require__(156);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(7076);
;// CONCATENATED MODULE: ./src/pages/auth/register.js
const Register=({setStatus,location})=>{const searchParams=new URLSearchParams(location.search);const tab=searchParams.get("tab");const theme=(0,useTheme/* default */.Z)();const dispatch=(0,react_redux/* useDispatch */.I0)();const{0:stage,1:setStage}=(0,external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_.useState)(0);const{0:registerForm,1:setRegisterForm}=(0,external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_.useState)({});const region=(0,react_redux/* useSelector */.v9)(state=>state.session.region);(0,external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_.useEffect)(()=>{if(typeof window!=="undefined"){document.title=`Register | ${theme.title}`;}},[theme.title]);const addPassword=password=>{setRegisterForm(prev=>({...prev,password}));setStage(3);};const addAddress=address=>{setRegisterForm(prev=>({...prev,addresses:{saved:[address]}}));setStage(4);};const addPayment=payment=>{setRegisterForm(prev=>({...prev,payments:{...prev.payments,saved:[payment]}}));setStage(5);};const handleRegister=()=>{//for the most updated value
setRegisterForm(prev=>{dispatch((0,user/* registerUser */.a$)({data:prev,setStatus,onSuccess:()=>{(0,gatsby_browser_entry.navigate)(`/auth/login${tab?"?tab="+tab:""}`);setStage(0);},onError:()=>{setStage(0);}}));return{};});};const stages=[/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(intro,{setStage,tab}),/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(general,{setStage,setRegisterForm,region}),/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(forms_password/* default */.Z,{handleBack:()=>setStage(1),handleNext:addPassword}),/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(address/* default */.Z,{onCancel:()=>setStage(2),onComplete:addAddress,enableSkip:true,onSkip:()=>setStage(4)}),/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(payment/* default */.Z,{mobileValues:registerForm.phone,onCancel:()=>setStage(3),onComplete:addPayment,setStatus,enableSkip:true,onSkip:()=>setStage(5)}),/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(currency,{region,setStage,setRegisterForm,handleRegister})];return/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Box/* default */.Z,{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Typography/* default */.Z,{mt:"10px",fontSize:"clamp(1rem, 5vw, 2rem)",sx:{typography:"secondaryFont",fontWeight:"bold"}},Boolean(stage)&&"Register"),/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Box/* default */.Z,{width:"min(500px, 100%)",height:"100%",padding:"0px 20px"},stages[stage]));};/* harmony default export */ const register = (Register);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-auth-register-js.js.map