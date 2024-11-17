"use strict";
exports.id = 77;
exports.ids = [77];
exports.modules = {

/***/ 8505:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ results)
});

// EXTERNAL MODULE: external "D:\\Documents\\wegastudios\\wendoh_cakes\\website\\node_modules\\react\\index.js"
var external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_ = __webpack_require__(3805);
var external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default = /*#__PURE__*/__webpack_require__.n(external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_);
// EXTERNAL MODULE: ./node_modules/react-redux/dist/react-redux.mjs
var react_redux = __webpack_require__(5007);
// EXTERNAL MODULE: ./node_modules/@mui/material/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(8396);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(2734);
// EXTERNAL MODULE: ./node_modules/@mui/material/Box/Box.js + 1 modules
var Box = __webpack_require__(1508);
// EXTERNAL MODULE: ./node_modules/@mui/base/ClickAwayListener/ClickAwayListener.js
var ClickAwayListener = __webpack_require__(3926);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(2658);
// EXTERNAL MODULE: ./node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(6867);
// EXTERNAL MODULE: ./node_modules/@mui/material/TextField/TextField.js + 11 modules
var TextField = __webpack_require__(1797);
// EXTERNAL MODULE: ./node_modules/@mui/material/InputAdornment/InputAdornment.js + 1 modules
var InputAdornment = __webpack_require__(270);
// EXTERNAL MODULE: ./node_modules/@mui/material/Slider/Slider.js + 5 modules
var Slider = __webpack_require__(4799);
// EXTERNAL MODULE: ./node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(8990);
// EXTERNAL MODULE: ./node_modules/@mui/material/Skeleton/Skeleton.js + 2 modules
var Skeleton = __webpack_require__(8973);
// EXTERNAL MODULE: ./node_modules/@mui/material/Link/Link.js + 2 modules
var Link = __webpack_require__(1079);
// EXTERNAL MODULE: ./node_modules/@mui/material/Pagination/Pagination.js + 8 modules
var Pagination = __webpack_require__(5137);
// EXTERNAL MODULE: ./src/components/product/productCard.jsx
var productCard = __webpack_require__(700);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/esm/Close.js
var Close = __webpack_require__(5537);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/esm/RotateLeft.js
var RotateLeft = __webpack_require__(6297);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/esm/FilterAlt.js
var FilterAlt = __webpack_require__(6143);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/esm/SearchOff.js
var SearchOff = __webpack_require__(7473);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/esm/Home.js
var Home = __webpack_require__(5567);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(7076);
// EXTERNAL MODULE: ./src/components/layout/skeletonGroup.jsx
var skeletonGroup = __webpack_require__(2456);
;// CONCATENATED MODULE: ./src/components/results/resultHeaders.js
const resultHeaders={electronics:{image:"https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},clothing:{image:"https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},food:{image:"https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},beverages:{image:"https://images.pexels.com/photos/2531184/pexels-photo-2531184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}};/* harmony default export */ const results_resultHeaders = (resultHeaders);
// EXTERNAL MODULE: ./src/utils/productWorker.js
var utils_productWorker = __webpack_require__(9421);
;// CONCATENATED MODULE: ./src/utils/resultsWorker.js
class ResultsWorker{constructor(){this.pageLimit=20;this.prices=[];this.minPrice=0;this.maxPrice=0;this.filterExeptions=new utils_productWorker/* default */.Z().searchExeptions;this.filterOptions={};this.filters={};}parseInfo(data,params,offers){const productWorker=new utils_productWorker/* default */.Z();data.forEach(result=>{//get prices even those on offer
if(offers[result.id]){this.prices.push(productWorker.getDiscount(offers[result.id],result.unitPrice.amount));}else{this.prices.push(result.unitPrice.amount);}//get available categories
result.categories.forEach(category=>{if(!this.filterExeptions.includes(category)){this.filterOptions.category=this.filterOptions.category||[];if(!this.filterOptions.category.includes(category)){this.filterOptions.category.push(category);}}});//get available brands
if(!this.filterExeptions.includes(result.brand)){this.filterOptions.brand=this.filterOptions.brand||[];if(result.brand&&!this.filterOptions.brand.includes(result.brand)){this.filterOptions.brand.push(result.brand);}}//get available features
if(Object.keys(result.features).length){Object.keys(result.features).forEach(feature=>{if(!this.filterExeptions.includes(feature)){this.filterOptions[feature]=this.filterOptions[feature]||[];if(!this.filters[feature]){this.filters[feature]=params[feature]||"All";}if(!this.filterOptions[feature].includes(result.features[feature])){this.filterOptions[feature].push(result.features[feature]);}}});}});this.filters.brand=this.filters.brand||params.brand||"All";this.filters.category=this.filters.category||params.category||"All";this.minPrice=Math.min(...this.prices);this.maxPrice=Math.max(...this.prices);this.filters={...this.filters,min:this.filters.min||params.min||this.minPrice,max:this.filters.max||params.min||this.maxPrice};//remove filters that don't have more than 1 option
Object.keys(this.filterOptions).forEach(filterOption=>{if(this.filterOptions[filterOption].length<=1&&this.filters[filterOption]!==this.filterOptions[filterOption][0]){const{[filterOption]:value,...remainingOptions}=this.filterOptions;this.filterOptions=remainingOptions;}});}filterResults(filters,data,params,offers){this.filters=filters;const filteredResults=data.filter(result=>{//filter out products by their features
const{brand,category,min,max,...features}=filters;for(let feature of Object.keys(features)){if(features[feature]!=="All"&&result.features[feature]!==features[feature]){return false;}}//filter products by category, brand and price
return(filters.brand==="All"||result.brand===filters.brand)&&(filters.category==="All"||result.categories.includes(filters.category))&&result.unitPrice.amount>=filters.min&&result.unitPrice.amount<=filters.max;});this.parseInfo(filteredResults,params,offers);return filteredResults;}getResults(data,page){return{all:data,pages:Math.ceil(data.length/this.pageLimit),pageData:data.slice(this.pageLimit*page-this.pageLimit,this.pageLimit*page)};}}/* harmony default export */ const utils_resultsWorker = (ResultsWorker);
// EXTERNAL MODULE: ./node_modules/@mui/material/Tooltip/Tooltip.js + 1 modules
var Tooltip = __webpack_require__(4563);
// EXTERNAL MODULE: ./node_modules/@mui/material/RadioGroup/RadioGroup.js + 2 modules
var RadioGroup = __webpack_require__(165);
// EXTERNAL MODULE: ./node_modules/@mui/material/FormControlLabel/FormControlLabel.js + 4 modules
var FormControlLabel = __webpack_require__(2173);
// EXTERNAL MODULE: ./node_modules/@mui/material/Radio/Radio.js + 8 modules
var Radio = __webpack_require__(8946);
;// CONCATENATED MODULE: ./src/components/results/filterComponent.jsx
const FilterComponent=({option,filterOptions,filters,handleFilterChange,resetFilter})=>{const theme=(0,useTheme/* default */.Z)();return/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Box/* default */.Z,{width:"100%",boxShadow:`0px 0px 10px 0px ${theme.palette.grey[400]}`,display:"flex",flexDirection:"column",alignItems:"center",borderRadius:"20px"},/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Box/* default */.Z,{width:"100%",display:"flex",position:"relative",justifyContent:"center"},/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Typography/* default */.Z,{padding:"10px",fontWeight:"bold"},option.charAt(0).toUpperCase()+option.substring(1)),/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Tooltip/* default */.Z,{title:"reset filter"},/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(IconButton/* default */.Z,{disabled:filters[option]==="All",onClick:()=>resetFilter(option),sx:{opacity:filters[option]==="All"?0:1,position:"absolute",right:0,m:"5px"}},/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(RotateLeft/* default */.Z,null)))),/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Box/* default */.Z,{width:"100%",display:"flex",flexDirection:"column",padding:"0px 20px 20px 20px",gap:"10px",maxHeight:"250px",sx:{overflowY:"scroll","&::-webkit-scrollbar":{bgcolor:"transparent",width:"5px"},"&::-webkit-scrollbar-thumb":{borderRadius:"25px",bgcolor:theme.palette.grey[300],transition:"0.3s"},"&::-webkit-scrollbar-thumb:hover":{cursor:"pointer",bgcolor:theme.palette.grey[400]}}},/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(RadioGroup/* default */.Z,{row:true,"aria-labelledby":`result-filters-group`,name:option,value:filters[option],onChange:handleFilterChange,sx:{width:"90%",flexDirection:"column",alignSelf:"center"}},filterOptions[option].map(item=>/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(FormControlLabel/* default */.Z,{value:item,control:/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Radio/* default */.Z,null),label:item.charAt(0).toUpperCase()+item.substring(1),checked:filters[option]===item})))));};/* harmony default export */ const filterComponent = (FilterComponent);
// EXTERNAL MODULE: ./src/theme/index.js
var src_theme = __webpack_require__(5284);
;// CONCATENATED MODULE: ./src/components/results/activeFiltersComponent.jsx
const ActiveFiltersComponent=({resultCount,filters,price,currency,resetFilter})=>{const theme=(0,useTheme/* default */.Z)();const handleReset=filter=>{if(filter==="min"||filter==="max"){resetFilter("price");}else{resetFilter(filter);}};return/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Box/* default */.Z,{padding:"5px 0px",width:"100%",display:"flex",alignItems:"center",gap:"5px"},/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Box/* default */.Z,{display:"flex",gap:"5px"},/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Typography/* default */.Z,{fontSize:"0.9rem",color:"text.secondary"},Number(resultCount).toLocaleString("US")),/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Typography/* default */.Z,{fontSize:"0.9rem",color:"text.secondary"},`Result${resultCount===1?"":"s"}`)),/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Box/* default */.Z,{width:"100%",padding:"0px 5px",sx:{overflowX:"scroll","&::-webkit-scrollbar":{height:"0px"}}},/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Box/* default */.Z,{display:"flex",gap:"10px"},Object.keys(filters).map(filter=>{if(filters[filter]==="All"||filter==="min"&&filters.min===price.min||filter==="max"&&filters.max===price.max){return/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement((external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default()).Fragment,null);}return/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Box/* default */.Z,{display:"flex",alignItems:"center",gap:"5px",borderRadius:"10px",padding:"0px 10px",color:"primary.main",bgcolor:`rgba(${(0,src_theme/* convertHex */.e)(theme.palette.primary.main).join(" ")} / 0.2)`},/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Typography/* default */.Z,{fontSize:"0.75rem"},filter,":"," ",(filter==="max"||filter==="min")&&currency.symbol,filters[filter]),/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(IconButton/* default */.Z,{onClick:()=>handleReset(filter),size:"small"},/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Close/* default */.Z,{sx:{fontSize:"0.7rem"}})));}))));};/* harmony default export */ const activeFiltersComponent = (ActiveFiltersComponent);
// EXTERNAL MODULE: ./src/utils/fetchWorker.js + 4 modules
var utils_fetchWorker = __webpack_require__(7811);
// EXTERNAL MODULE: ./src/state/snackBar.js
var snackBar = __webpack_require__(7416);
// EXTERNAL MODULE: ./node_modules/react-helmet/es/Helmet.js
var Helmet = __webpack_require__(4593);
;// CONCATENATED MODULE: ./src/components/results/index.jsx
const ResultsComponent=({location,path,setConfirmationModal})=>{const isNotPhone=(0,useMediaQuery/* default */.Z)("(min-width:1000px)");const fetchWorker=new utils_fetchWorker/* default */.Z();const resultsWorker=new utils_resultsWorker();const theme=(0,useTheme/* default */.Z)();const dispatch=(0,react_redux/* useDispatch */.I0)();const searchParams=new URLSearchParams(location.search);let page=Number(searchParams.get("p"))||1;let search=searchParams.get("search");const{0:params,1:setParams}=(0,external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_.useState)(Object.fromEntries(searchParams.entries()));const user=(0,react_redux/* useSelector */.v9)(state=>state.user);const currency=(0,react_redux/* useSelector */.v9)(state=>state.currency);const{0:isLoading,1:setIsLoading}=(0,external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_.useState)(true);const{0:data,1:setData}=(0,external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_.useState)([]);const{0:offers,1:setOffers}=(0,external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_.useState)();const{0:results,1:setResults}=(0,external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_.useState)({pages:1,all:[]});const{0:price,1:setPrice}=(0,external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_.useState)({min:0,max:0});const{0:priceFilter,1:setPriceFilter}=(0,external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_.useState)({});const{0:filterOptions,1:setFilterOptions}=(0,external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_.useState)({});const{0:filters,1:setFilters}=(0,external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_.useState)({});const{0:isMobileFilters,1:setIsMobileFilters}=(0,external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_.useState)(false);const mobileFiltersButtonRef=(0,external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_.useRef)(null);(0,external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_.useEffect)(()=>{if(results.pageData){setIsLoading(false);}else{setIsLoading(true);}},[results]);(0,external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_.useEffect)(()=>{fetchWorker.fetchOffers().then(res=>{setOffers(res);}).catch(err=>{dispatch((0,snackBar/* setSnackBar */.c)({on:true,type:"ERROR",message:`Error fetching offers: ${err}`}));});fetchWorker.fetchResults(search,path).then(data=>{setData(data);}).catch(err=>{dispatch((0,snackBar/* setSnackBar */.c)({on:true,type:"ERROR",message:`Error fetching results: ${err}`}));});},[path]);(0,external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_.useEffect)(()=>{if(offers&&data.length){resultsWorker.parseInfo(data,params,offers);setFilterOptions(resultsWorker.filterOptions);setFilters(resultsWorker.filters);setPrice({min:resultsWorker.minPrice,max:resultsWorker.maxPrice});setPriceFilter({min:resultsWorker.minPrice,max:resultsWorker.maxPrice});}},[offers,data]);(0,external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_.useEffect)(()=>{if(data.length){setResults(resultsWorker.getResults(resultsWorker.filterResults(filters,data,params,offers),1));setFilterOptions(resultsWorker.filterOptions);resetPage();}},[filters,data]);const resetPage=(page=1)=>{setParams(prev=>({...prev,p:page}));setParams(prev=>{const formatedParams=new URLSearchParams(prev).toString();(0,gatsby_browser_entry.navigate)(`/${path||"results"}?${formatedParams}`);return prev;});};const handleFilterChange=({target})=>{setFilters(prev=>({...prev,[target.name]:target.value}));setIsMobileFilters(false);};const handlePriceChange=(event,priceRange)=>{setPriceFilter(prev=>{if(event.target.name==="priceSlider"){return{min:priceRange[0],max:priceRange[1]};}return{...prev,[event.target.name]:event.target.value};});};const handlePriceSave=()=>{setPriceFilter(prev=>({min:prev.min<price.min?price.min:prev.min>price.max?price.max:prev.min,max:prev.max<price.min?price.min:prev.max>price.max?price.max:prev.max}));setPriceFilter(prevPrice=>{setFilters(prevFilters=>({...prevFilters,min:prevPrice.min,max:prevPrice.max}));return prevPrice;});setIsMobileFilters(false);};const resetFilter=filter=>{setParams(prev=>{const{[filter]:value,...rest}=prev;return rest;});setFilters(prev=>{if(filter==="price"){setPriceFilter({min:price.min,max:price.max});return{...prev,min:price.min,max:price.max};}return{...prev,[filter]:"All"};});resetPage();};const handlePageChange=(event,value)=>{const resultsWorker=new utils_resultsWorker(params,offers);setResults(prev=>resultsWorker.getResults(prev.all,value));resetPage(value);};const handleClickAway=event=>{if(mobileFiltersButtonRef.current&&mobileFiltersButtonRef.current.contains(event.target)){return;}setIsMobileFilters(false);};return/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement((external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default()).Fragment,null,/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Helmet/* Helmet */.q,null,/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement("title",null,"Search results for '",search,"' | ",theme.title),/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement("meta",{name:"description",content:`Search results for '${search}'`})),/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Box/* default */.Z,{display:"flex",justifyContent:"center"},/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Box/* default */.Z,{minHeight:"100vh",display:"flex",width:isNotPhone?"87%":"95%"},/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(ClickAwayListener/* ClickAwayListener */.d,{onClickAway:handleClickAway},/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Box/* default */.Z,{position:isNotPhone?"static":"fixed",width:isNotPhone?"290px":"95%",borderRadius:"25px 25px 0px 0px",height:isNotPhone?undefined:isMobileFilters?"70%":"0px",bottom:0,display:"flex",flexDirection:"column",bgcolor:"white",zIndex:!isNotPhone&&isMobileFilters?1:0,sx:{transformOrigin:"bottom",transition:"0.4s"},boxShadow:isNotPhone?undefined:`0px 0px 10px 0px ${theme.palette.grey[400]}`},!isNotPhone&&/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement((external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default()).Fragment,null,/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Box/* default */.Z,{padding:"10px",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",position:"relative"},/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Typography/* default */.Z,{sx:{typography:"secondaryFont",fontWeight:"bold"}},"Filters"),/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(IconButton/* default */.Z,{onClick:()=>setIsMobileFilters(false),sx:{position:"absolute",right:5}},/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Close/* default */.Z,null)))),/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Box/* default */.Z,{height:"100%",overflow:isNotPhone?undefined:"scroll"},isLoading?/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(skeletonGroup/* default */.Z,{count:3,height:"200px",width:"200px"}):/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Box/* default */.Z,{display:"flex",flexDirection:"column",gap:"20px",padding:"20px"},/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Box/* default */.Z,{width:"100%",boxShadow:`0px 0px 10px 0px ${theme.palette.grey[400]}`,display:"flex",flexDirection:"column",alignItems:"center",borderRadius:"10px",gap:"20px",padding:"30px",position:"relative"},/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Typography/* default */.Z,{justifySelf:"center",fontWeight:"bold"},"Price"),(filters.min!==price.min||filters.max!==price.max)&&/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Box/* default */.Z,{position:"absolute",right:5,top:25},/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(IconButton/* default */.Z,{onClick:()=>resetFilter("price")},/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(RotateLeft/* default */.Z,null))),/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(TextField/* default */.Z,{fullWidth:true,step:"10",type:"number",size:"small",label:"min",name:"min",value:priceFilter.min,onChange:handlePriceChange,sx:{"& > div":{fontSize:"13px"}},InputProps:{min:price.min,max:price.max,startAdornment:/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(InputAdornment/* default */.Z,{position:"start"},/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Typography/* default */.Z,null,currency.symbol))}}),/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(TextField/* default */.Z,{fullWidth:true,step:"10",type:"number",size:"small",label:"max",name:"max",value:priceFilter.max,onChange:handlePriceChange,sx:{"& > div":{fontSize:"13px"}},InputProps:{min:price.min,max:price.max,startAdornment:/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(InputAdornment/* default */.Z,{position:"start"},/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Typography/* default */.Z,null,currency.symbol))}}),/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Slider/* default */.ZP,{name:"priceSlider",max:price.max,min:price.min,value:[priceFilter.min,priceFilter.max],onChange:handlePriceChange,valueLabelDisplay:"auto",step:10}),(priceFilter.min!==price.min||priceFilter.max!==price.max)&&(filters.min!==priceFilter.min||filters.max!==priceFilter.max)&&/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Button/* default */.Z,{variant:"contained",disableElevation:true,onClick:handlePriceSave},"save")),Object.keys(filterOptions).map(option=>/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(filterComponent,{option,filterOptions,filters,handleFilterChange,resetFilter})))))),/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Box/* default */.Z,{width:"100%",display:"flex",flexDirection:"column"},isLoading?/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Skeleton/* default */.Z,{width:"100%",height:"50px",sx:{mb:"20px"},variant:"rounded"}):results_resultHeaders[search]?/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Box/* default */.Z,{width:"100%",display:"flex",flexDirection:"column"},/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Box/* default */.Z,{position:"relative",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"20px",padding:"10px",height:"30vh",width:"100%",borderRadius:"20px",overflow:"hidden"},/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Box/* default */.Z,{position:"absolute",width:"100%",height:"100%",zIndex:-1,sx:{backgroundImage:`url(${results_resultHeaders[search].image})`,backgroundSize:"cover",backgroundPosition:"center",filter:"blur(2px) brightness(50%)"}}),/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Typography/* default */.Z,{color:"white",fontSize:"clamp(1rem, 10vw, 3rem)"},search.charAt(0).toUpperCase()+search.substring(1)),/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Typography/* default */.Z,{color:theme.palette.grey[300],textAlign:"center"},results_resultHeaders[search].description)),/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(activeFiltersComponent,{resultCount:results.all.length,filters,price,currency,resetFilter})):/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Box/* default */.Z,{border:`1px solid ${theme.palette.grey[400]}`,borderRadius:"25px",width:"100%",display:"flex",flexDirection:"column",gap:"20px",padding:"10px 20px"},/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Box/* default */.Z,{display:"flex",flexDirection:"column"},/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Typography/* default */.Z,{fontWeight:"bold",fontSize:"clamp(0.7rem, 4vw, 1.3rem)"},"Search results for \"",search,"\""),/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(activeFiltersComponent,{resultCount:results.all.length,filters,price,currency,resetFilter}))),!isNotPhone&&/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Box/* default */.Z,{padding:"10px",display:"flex",justifyContent:"flex-end"},/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Button/* default */.Z,{ref:mobileFiltersButtonRef,onClick:()=>setIsMobileFilters(prev=>!prev),size:"small",variant:"outlined",sx:{textTransform:"none"},endIcon:/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(FilterAlt/* default */.Z,null)},"filter results")),isLoading?/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(skeletonGroup/* default */.Z,{count:8,flexDirection:"row",flexWrap:"wrap",width:"clamp(80px, 42vw, 250px)",height:"clamp(300px, 50vw, 350px)"}):results.pageData.length?/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Box/* default */.Z,{display:"flex",justifyContent:"space-between",flexWrap:"wrap",width:"100%",minHeight:"100vh"},results.pageData.map(product=>/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(productCard/* default */.Z,{location,setConfirmationModal,product,user,currency,offers}))):/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Box/* default */.Z,{margin:"50px 0px",width:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:"20px "},/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Box/* default */.Z,{display:"flex",gap:"10px",flexDirection:"column"},/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Typography/* default */.Z,{fontSize:"1.3rem",display:"flex",gap:"10px",alignItems:"center"},/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(SearchOff/* default */.Z,{sx:{fontSize:"3rem",color:theme.palette.grey[400]}}),"No results for search:"),/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Typography/* default */.Z,{fontWeight:"bold",fontSize:"1.3rem"},"\"",search,"\""),/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Typography/* default */.Z,null,"Try searching using broad keywords and correct spelling"),/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Link/* default */.Z,{href:"/",sx:{textDecoration:"none",color:"black"}},/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Button/* default */.Z,{size:"large",variant:"contained",disableElevation:true,startIcon:/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Home/* default */.Z,null)},"Back home")))),/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Box/* default */.Z,{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",m:"30px 0px"},/*#__PURE__*/external_D_Documents_wegastudios_wendoh_cakes_website_node_modules_react_index_js_default().createElement(Pagination/* default */.Z,{page:page,count:results.pages,variant:"outlined",shape:"rounded",onChange:handlePageChange,color:"primary"}))))));};/* harmony default export */ const results = (ResultsComponent);

/***/ }),

/***/ 4481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3805);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_results__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8505);
const ResultsPage=({location,setConfirmationModal})=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_results__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{location,setConfirmationModal});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResultsPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-results-js.js.map