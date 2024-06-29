var lu=Object.defineProperty;var w=Object.getOwnPropertySymbols;var ru=Object.prototype.hasOwnProperty,nu=Object.prototype.propertyIsEnumerable;var R=(u,t,a)=>t in u?lu(u,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):u[t]=a,N=(u,t)=>{for(var a in t||(t={}))ru.call(t,a)&&R(u,a,t[a]);if(w)for(var a of w(t))nu.call(t,a)&&R(u,a,t[a]);return u};var P=(u,t,a)=>new Promise((n,l)=>{var o=b=>{try{m(a.next(b))}catch(h){l(h)}},s=b=>{try{m(a.throw(b))}catch(h){l(h)}},m=b=>b.done?n(b.value):Promise.resolve(b.value).then(o,s);m((a=a.apply(u,t)).next())});import{r as d,u as ou,j as e,a as j,c as su,b as iu,d as cu,e as c,R as g,C as x,f as du,B as C,g as bu,I as xu,h as Eu,i as Cu,k as mu,S as Fu,P as fu,H as hu,A as gu,l as Bu,m as A,M as $,T as Au,n as y,o as L,p as Du,q as pu,F as yu,s as _u,t as vu}from"./vendor.0ee0e69c.js";function oe(){import("data:text/javascript,")}const Su=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerpolicy&&(o.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?o.credentials="include":l.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(l){if(l.ep)return;l.ep=!0;const o=a(l);fetch(l.href,o)}};Su();const Iu="modulepreload",M={},Ou="/typing-jp/",f=function(t,a){return!a||a.length===0?t():Promise.all(a.map(n=>{if(n=`${Ou}${n}`,n in M)return;M[n]=!0;const l=n.endsWith(".css"),o=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${o}`))return;const s=document.createElement("link");if(s.rel=l?"stylesheet":Iu,l||(s.as="script",s.crossOrigin=""),s.href=n,document.head.appendChild(s),l)return new Promise((m,b)=>{s.addEventListener("load",m),s.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>t())},Tu=d.exports.lazy(()=>f(()=>import("./Fingers.fa59c695.js"),["assets/Fingers.fa59c695.js","assets/Fingers.3f032d61.css","assets/vendor.0ee0e69c.js","assets/wordTool.00511603.js"])),ku=d.exports.lazy(()=>f(()=>import("./Monkey.8b53e424.js"),["assets/Monkey.8b53e424.js","assets/Monkey.a645734d.css","assets/vendor.0ee0e69c.js","assets/wordTool.00511603.js","assets/ReloadBtn.2eaf5cb5.js","assets/ReloadBtn.890011c9.css"])),wu=d.exports.lazy(()=>f(()=>import("./Sentence.071927f6.js"),["assets/Sentence.071927f6.js","assets/Sentence.dbaa76df.css","assets/vendor.0ee0e69c.js","assets/wordTool.00511603.js","assets/ReloadBtn.2eaf5cb5.js","assets/ReloadBtn.890011c9.css"])),Ru=d.exports.lazy(()=>f(()=>import("./Training.7b14afc4.js"),["assets/Training.7b14afc4.js","assets/Training.6be43a3a.css","assets/vendor.0ee0e69c.js"])),Nu=d.exports.lazy(()=>f(()=>import("./Test.422efb4d.js"),["assets/Test.422efb4d.js","assets/Test.1dbd0401.css","assets/vendor.0ee0e69c.js"])),Pu=d.exports.lazy(()=>f(()=>import("./About.abadf055.js"),["assets/About.abadf055.js","assets/About.197ba4de.css","assets/vendor.0ee0e69c.js"])),$u=({to:u})=>{const t=j();return d.exports.useEffect(()=>{t(u)}),null},Lu=()=>ou([{path:"/",element:e(Tu,{})},{path:"/monkey",element:e(ku,{})},{path:"/sentence",element:e(wu,{})},{path:"/training",element:e(Ru,{})},{path:"/test",element:e(Nu,{})},{path:"/about",element:e(Pu,{})},{path:"*",element:e($u,{to:"/"})}]),E={session:{get:u=>{const t=window.sessionStorage.getItem(u);return t&&JSON.parse(t)},set:(u,t)=>{const a=JSON.stringify(t);window.sessionStorage.setItem(u,a)},remove:u=>{window.sessionStorage.removeItem(u)}},local:{get:u=>{const t=window.localStorage.getItem(u);return t&&JSON.parse(t)},set:(u,t)=>{const a=JSON.stringify(t);window.localStorage.setItem(u,a)},remove:u=>{window.localStorage.removeItem(u)}}},V="UI_SCALE",z="UI_THEME",H="WORDS_MODE",Q="COUNTDOWN_TIME",q="CUSTOMER_WORDS",G="BACK_IMG_URL",Mu={uiScale:E.local.get(V)||"s",uiTheme:E.local.get(z)||"",wordsMode:E.local.get(H)||"1",countdownTime:E.local.get(Q)||"60",customerWords:E.local.get(q)||[],backImgUrl:E.local.get(G)||""},Uu={setUiScale:(u,t)=>(E.local.set(V,t),{uiScale:t}),setUiTheme:(u,t)=>(E.local.set(z,t),{uiTheme:t}),setWordsMode:(u,t)=>(E.local.set(H,t),{wordsMode:t}),setCountdownTime:(u,t)=>(E.local.set(Q,t),{countdownTime:t}),saveCustomerWords:(u,t)=>(E.local.set(q,t),{customerWords:t}),setBackImgUrl:(u,t)=>(E.local.set(G,t),{backImgUrl:t})};var Wu={state:Mu,reducer:Uu},ju={root:Wu};const Vu=u=>({$state:N({},u)}),zu=u=>({$dispatch(t,a){u({type:t,payload:a})}});function J(u){return su(Vu,zu)(u)}const Hu=(u,t)=>(a=t,n)=>u[n.type]?Object.assign({},a,u[n.type](a,n.payload)):a,Qu=Object.entries(ju).reduce((u,[t,a])=>(Object.assign(u,{[t]:Hu(a.reducer,a.state)}),u),{}),qu=iu(cu(Qu));const Gu=[{label:"\u304A\u306F\u3088\u3046\u3054\u3056\u3044\u307E\u3059",text:"\u304A\u306F\u3088\u3046\u3054\u3056\u3044\u307E\u3059",trans:"\u65E9\u4E0A\u597D,\u65E9"},{label:"\u3053\u3093\u306B\u3061\u306F",text:"\u3053\u3093\u306B\u3061\u306F",trans:"\u4F60\u597D\u3001\u4E0B\u5348\u597D"},{label:"\u3053\u3093\u3070\u3093\u306F",text:"\u3053\u3093\u3070\u3093\u306F",trans:"\u665A\u4E0A\u597D"},{label:"\u304A\u3084\u3059\u307F\u306A\u3055\u3044",text:"\u304A\u3084\u3059\u307F\u306A\u3055\u3044",trans:"\u665A\u5B89"},{label:"\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059",text:"\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059",trans:"\u8C22\u8C22"},{label:"\u3059\u307F\u307E\u305B\u3093",text:"\u3059\u307F\u307E\u305B\u3093",trans:"\u5BF9\u4E0D\u8D77\u3001\u5BF9\u4E0D\u8D77"},{label:"\u3054\u3081\u3093\u306A\u3055\u3044",text:"\u3054\u3081\u3093\u306A\u3055\u3044",trans:"\u4E0D\u597D\u610F\u601D"},{label:"\u306F\u3044",text:"\u306F\u3044",trans:"\u662F\u7684"},{label:"\u3044\u3044\u3048",text:"\u3044\u3044\u3048",trans:"\u4E0D"},{label:"\u308F\u305F\u3057",text:"\u308F\u305F\u3057",trans:"\u6211\u3001\u6211"},{label:"\u3042\u306A\u305F",text:"\u3042\u306A\u305F",trans:"\u4F60"},{label:"\u304A\u6BCD\u3055\u3093",text:"\u304A\u304B\u3042\u3055\u3093",trans:"\u5988\u5988"},{label:"\u304A\u7236\u3055\u3093",text:"\u304A\u3068\u3046\u3055\u3093",trans:"\u7238\u7238"},{label:"\u304A\u723A\u3055\u3093",text:"\u304A\u3058\u3044\u3055\u3093",trans:"\u7237\u7237"},{label:"\u304A\u5A46\u3055\u3093",text:"\u304A\u3070\u3042\u3055\u3093",trans:"\u5976\u5976"},{label:"\u304A\u3058\u3055\u3093",text:"\u304A\u3058\u3055\u3093",trans:"\u53D4\u53D4"},{label:"\u304A\u3070\u3055\u3093",text:"\u304A\u3070\u3055\u3093",trans:"\u963F\u59E8"},{label:"\u304A\u5144\u3055\u3093",text:"\u304A\u306B\u3044\u3055\u3093",trans:"\u54E5\u54E5"},{label:"\u304A\u59C9\u3055\u3093",text:"\u304A\u306D\u3048\u3055\u3093",trans:"\u59D0\u59D0"},{label:"\u5F1F",text:"\u304A\u3068\u3046\u3068",trans:"\u5F1F\u5F1F"},{label:"\u59B9",text:"\u3044\u3082\u3046\u3068",trans:"\u59B9\u59B9"},{label:"\u4E00",text:"\u3044\u3061",trans:"\u4E00"},{label:"\u4E8C",text:"\u306B",trans:"\u4E8C"},{label:"\u4E09",text:"\u3055\u3093",trans:"\u4E09"},{label:"\u56DB",text:"\u3088\u3093",trans:"\u56DB"},{label:"\u4E94",text:"\u3054",trans:"\u4E94"},{label:"\u516D",text:"\u308D\u304F",trans:"\u516D"},{label:"\u4E03",text:"\u306A\u306A",trans:"\u4E03"},{label:"\u516B",text:"\u306F\u3061",trans:"\u516B"},{label:"\u4E5D",text:"\u304D\u3085\u3046",trans:"\u4E5D"},{label:"\u5341",text:"\u3058\u3085\u3046",trans:"\u5341"},{label:"\u4E00\u6708",text:"\u3044\u3061\u304C\u3064",trans:"\u4E00\u6708"},{label:"\u4E8C\u6708",text:"\u306B\u304C\u3064",trans:"\u4E8C\u6708"},{label:"\u4E09\u6708",text:"\u3055\u3093\u304C\u3064",trans:"\u4E09\u6708"},{label:"\u56DB\u6708",text:"\u3057\u304C\u3064",trans:"\u56DB\u6708"},{label:"\u4E94\u6708",text:"\u3054\u304C\u3064",trans:"\u4E94\u6708"},{label:"\u516D\u6708",text:"\u308D\u304F\u304C\u3064",trans:"\u516D\u6708"},{label:"\u4E03\u6708",text:"\u3057\u3061\u304C\u3064",trans:"\u4E03\u6708"},{label:"\u516B\u6708",text:"\u306F\u3061\u304C\u3064",trans:"\u516B\u6708"},{label:"\u4E5D\u6708",text:"\u304F\u304C\u3064",trans:"\u4E5D\u6708"},{label:"\u5341\u6708",text:"\u3058\u3085\u3046\u304C\u3064",trans:"\u5341\u6708"},{label:"\u5341\u4E00\u6708",text:"\u3058\u3085\u3046\u3044\u3061\u304C\u3064",trans:"\u5341\u4E00\u6708"},{label:"\u5341\u4E8C\u6708",text:"\u3058\u3085\u3046\u306B\u304C\u3064",trans:"\u5341\u4E8C\u6708"},{label:"\u6708\u66DC\u65E5",text:"\u3052\u3064\u3088\u3046\u3073",trans:"\u661F\u671F\u4E00"},{label:"\u706B\u66DC\u65E5",text:"\u304B\u3088\u3046\u3073",trans:"\u661F\u671F\u4E8C"},{label:"\u6C34\u66DC\u65E5",text:"\u3059\u3044\u3088\u3046\u3073",trans:"\u661F\u671F\u4E09"},{label:"\u6728\u66DC\u65E5",text:"\u3082\u304F\u3088\u3046\u3073",trans:"\u661F\u671F\u56DB"},{label:"\u91D1\u66DC\u65E5",text:"\u304D\u306B\u3087\u3046\u3073",trans:"\u661F\u671F\u4E94"},{label:"\u571F\u66DC\u65E5",text:"\u3069\u3088\u3046\u3073",trans:"\u661F\u671F\u516D"},{label:"\u65E5\u66DC\u65E5",text:"\u306B\u3061\u3088\u3046\u3073",trans:"\u661F\u671F\u65E5"},{label:"\u6628\u65E5",text:"\u304D\u306E\u3046",trans:"\u6628\u5929"},{label:"\u4ECA\u65E5",text:"\u304D\u3087\u3046",trans:"\u4ECA\u5929"},{label:"\u660E\u65E5",text:"\u3042\u3057\u305F",trans:"\u660E\u5929"},{label:"\u671D",text:"\u3042\u3055",trans:"\u4E0A\u5348"},{label:"\u663C",text:"\u3072\u308B",trans:"\u4E2D\u5348"},{label:"\u5915\u65B9",text:"\u3086\u3046\u304C\u305F",trans:"\u508D\u665A"},{label:"\u591C",text:"\u3088\u308B",trans:"\u665A\u4E0A"},{label:"\u697D\u3057\u3044",text:"\u305F\u306E\u3057\u3044",trans:"\u5FEB\u4E50"},{label:"\u60B2\u3057\u3044",text:"\u304B\u306A\u3057\u3044",trans:"\u4F24\u5FC3"},{label:"\u9AD8\u3044",text:"\u305F\u304B\u3044",trans:"\u9AD8\u3001\u8D35"},{label:"\u4F4E\u3044",text:"\u3072\u304F\u3044",trans:"\u4F4E"},{label:"\u5B89\u3044",text:"\u3084\u3059\u3044",trans:"\u4FBF\u5B9C"},{label:"\u65E9\u3044",text:"\u306F\u3084\u3044",trans:"\u5FEB\u901F\u3001\u65E9\u671F"},{label:"\u9045\u3044",text:"\u304A\u305D\u3044",trans:"\u6162"},{label:"\u5FD9\u3057\u3044",text:"\u3044\u305D\u304C\u3057\u3044",trans:"\u5FD9"},{label:"\u7F8E\u5473\u3057\u3044",text:"\u304A\u3044\u3057\u3044",trans:"\u7F8E\u5473"},{label:"\u4E0D\u5473\u3044",text:"\u307E\u305A\u3044",trans:"\u53EF\u6015"},{label:"\u7518\u3044",text:"\u3042\u307E\u3044",trans:"\u751C"},{label:"\u5869\u3063\u3071\u3044",text:"\u3057\u3087\u3063\u3071\u3044",trans:"\u54B8"},{label:"\u9178\u3063\u3071\u3044",text:"\u3059\u3063\u3071\u3044",trans:"\u9178"},{label:"\u82E6\u3044",text:"\u306B\u304C\u3044",trans:"\u82E6"},{label:"\u8F9B\u3044",text:"\u3064\u3089\u3044",trans:"\u8FA3\u3001\u8FA3"},{label:"\u71B1\u3044",text:"\u3042\u3064\u3044",trans:"\u70ED"},{label:"\u6696\u304B\u3044",text:"\u3042\u305F\u305F\u304B\u3044",trans:"\u6E29\u6696"},{label:"\u51B7\u305F\u3044",text:"\u3064\u3081\u305F\u3044",trans:"\u51B7"},{label:"\u660E\u308B\u3044",text:"\u3042\u304B\u308B\u3044",trans:"\u660E\u4EAE"},{label:"\u6697\u3044",text:"\u304F\u3089\u3044",trans:"\u9ED1\u6697"},{label:"\u3059\u308B",text:"\u3059\u308B",trans:"\u53BB\u505A"},{label:"\u898B\u308B",text:"\u307F\u308B",trans:"\u770B"},{label:"\u805E\u304F",text:"\u304D\u304F",trans:"\u542C"},{label:"\u8A71\u3059",text:"\u306F\u306A\u3059",trans:"\u8BF4\u8BDD\u3001\u8BF4\u8BDD"},{label:"\u8A00\u3046",text:"\u3044\u3046",trans:"\u8981\u8BF4"},{label:"\u66F8\u304F",text:"\u304B\u304F",trans:"\u5199"},{label:"\u98DF\u3079\u308B",text:"\u305F\u3079\u308B",trans:"\u5403"},{label:"\u98F2\u3080",text:"\u306E\u3080",trans:"\u559D"},{label:"\u6B69\u304F",text:"\u3042\u308B\u304F",trans:"\u8D70\u8DEF"},{label:"\u8D70\u308B",text:"\u306F\u3057\u308B",trans:"\u8FD0\u884C"},{label:"\u5EA7\u308B",text:"\u3059\u308F\u308B",trans:"\u5750\u4E0B"},{label:"\u7ACB\u3064",text:"\u305F\u3064",trans:"\u7AD9\u7ACB"},{label:"\u98DF",text:"\u305F\u3079\u3082\u306E",trans:"\u98DF\u7269"},{label:"\u98F2",text:"\u306E\u307F\u3082\u306E",trans:"\u996E\u6599"},{label:"\u3054\u98EF",text:"\u3054\u306F\u3093",trans:"\u7C73\u996D\u3001\u9910"},{label:"\u6C34",text:"\u307F\u305A",trans:"\u6C34\u3001\u51B7\u6C34"},{label:"\u304A\u6E6F",text:"\u304A\u3086",trans:"\u70ED\u6C34"},{label:"\u8089",text:"\u306B\u304F",trans:"\u8089"},{label:"\u91CE\u83DC",text:"\u3084\u3055\u3044",trans:"\u852C\u83DC"},{label:"\u9B5A",text:"\u3055\u304B\u306A",trans:"\u9C7C"},{label:"\u30E9\u30FC\u30E1\u30F3",text:"\u30E9\u30A2\u30E1\u30F3",trans:"\u62C9\u9762"},{label:"\u5BFF\u53F8",text:"\u3059\u3057",trans:"\u5BFF\u53F8"},{label:"\u304A\u306B\u304E\u308A",text:"\u304A\u306B\u304E\u308A",trans:"\u996D\u56E2"}];var Ju={setSiteIcon(u,t){var s;const a=document.createElement("canvas");a.height=64,a.width=64;const n=a.getContext("2d");n&&(n.fillStyle=u,n.fillRect(0,0,64,64));const l=a.getContext("2d");l&&(l.font="24px Arial",l.fillStyle=t,l.fillText("TCN",7,42));const o=a.toDataURL("image/jpg");(s=document.getElementById("site-icon"))==null||s.setAttribute("href",o)}},_=[{name:"default",bgColor:"#282c34",textColor:"#fffffe"},{name:"oblivion",bgColor:"#464746",textColor:"#ffac00"},{name:"carbon",bgColor:"#575d5e",textColor:"#ed6b21"},{name:"2600",bgColor:"#6c3b7b",textColor:"#f8cc2a"},{name:"olivia",bgColor:"#363434",textColor:"#e8c4b8"},{name:"9009",bgColor:"#b6b09a",textColor:"#2e2f33"},{name:"godspeed",bgColor:"#6A97B5",textColor:"#faee69"},{name:"nautilus",bgColor:"#102c4e",textColor:"#eac004"},{name:"avocado",bgColor:"rgb(101,145,91)",textColor:"rgb(239,234,155)"},{name:"konmomo",bgColor:"#f7f2ea",textColor:"rgb(244,84,124)"},{name:"space cadet",bgColor:"#0073a2",textColor:"#ffffff"},{name:"shoko",bgColor:"#ced7e0",textColor:"#7599b1"},{name:"ph yellow",bgColor:"#000000",textColor:"#ff9900"},{name:"yeeti",bgColor:"#81B9D0",textColor:"#ffffff"},{name:"botanical",bgColor:"rgb(167,183,174)",textColor:"rgb(74,93,87)"},{name:"aqua",bgColor:"#056e7f",textColor:"#7cc3c1"},{name:"striker",bgColor:"#124883",textColor:"#d7dcda"},{name:"8008",bgColor:"#333a45",textColor:"#f44c7f"},{name:"darling",bgColor:"#fec8cd",textColor:"#a30000"},{name:"dracula",bgColor:"#282a36",textColor:"#bd93f9"},{name:"toxic",bgColor:"#3f4241",textColor:"#d0df00"}];const U=u=>{Ju.setSiteIcon(u.bgColor,u.textColor);const t=document.querySelector("#current-theme");if(!t)return;const a=t.getAttribute("href")||"";t.setAttribute("href",a.substring(0,a.lastIndexOf("/"))+`/${u.name.replace(" ","-")}.css`)};var Ku="/typing-jp/assets/wechatpay.d879e1bb.jpg",Xu="/typing-jp/assets/alipay.43db5136.jpg";const Yu=()=>c(g,{className:"PayQrCode__imgbox",children:[e(x,{className:"PayQrCode__img",flex:"auto",children:e("img",{src:Ku,alt:"wechatpay"})}),e(x,{className:"PayQrCode__divide",flex:"30px"}),e(x,{className:"PayQrCode__img",flex:"auto",children:e("img",{src:Xu,alt:"alipay"})})]}),Zu=u=>c("div",{children:[c("div",{children:["\u54C8\u55BD~\u73A9\u7684\u5F00\u5FC3\u5417\uFF1F\u5F00\u5FC3\u7684\u8BDD\u8BF7\u6211\u559D\u676F\u5496\u5561",e(du,{}),"\u5982\u4F55~"]}),e(Yu,{}),c("div",{children:[e(C,{type:"link",onClick:()=>u.go("/about"),children:"\u5173\u4E8E\u8FD9\u4E2A\u7F51\u7AD9"}),e("span",{children:"\u7ED9\u4F60\u4E00\u4E2A\u6253\u8D4F\u6211\u7684\u7406\u7531~"})]})]}),ue=/^[\u2E80-\u9FFF]+$/,W=Gu.map(u=>u.label).join("|"),v={"/":[1,1,1],"/monkey":[1,1,0],"/sentence":[1,0,0],"/training":[1,0,0],"/test":[1,0,0],"/about":[1,0,0]},ee=u=>{var I,O,T;const[t,a]=d.exports.useState(!1),[n,l]=d.exports.useState(!1),[o,s]=d.exports.useState(u.$state.root.wordsMode),m=d.exports.useRef(W),[b,h]=d.exports.useState(u.$state.root.customerWords&&u.$state.root.customerWords.length!==0?u.$state.root.customerWords.map(r=>r.label).join("|"):W),[K,S]=d.exports.useState([]),{search:D,pathname:p}=bu(),X=j(),Y=r=>{u.$dispatch("setUiScale",r.target.value)},Z=()=>P(void 0,null,function*(){if(o==="1"){u.$dispatch("setWordsMode",o),a(!1);return}const r=Array.from(new Set(b.split("|").filter(Boolean))),i=[];if(r.length===0&&i.push("\u8BF7\u8F93\u5165\u5B57\u8BCD\uFF0C\u5E76\u4EE5\u7B26\u53F7|\u95F4\u9694"),r.forEach(B=>{ue.test(B)||i.push(B)}),S(i),i.length===0){const{getPinyin:B}=yield f(()=>import("./pinyin.08901e9a.js"),[]);u.$dispatch("setWordsMode",o),h(r.join("|")),console.time("getPinyin");const au=r.map(k=>({label:k,text:B(k)}));console.timeEnd("getPinyin"),u.$dispatch("saveCustomerWords",au),a(!1)}}),uu=r=>{s(r),S([])},eu=r=>{h(r.target.value)},tu=r=>{const i=window.location.href;i.includes("#")&&i.includes("?")&&(window.location.href=i.split("?")[0]),u.$dispatch("setUiTheme",r.name)},F=r=>{X(r)};return d.exports.useEffect(()=>{if(D){const r=_.find(i=>i.name===D.slice(1).replace("-"," "));r&&U(r)}else if(u.$state.root.uiTheme){const r=_.find(i=>i.name===u.$state.root.uiTheme);r&&U(r)}},[D,u.$state.root.uiTheme]),c("div",{className:"app-header",children:[e(g,{children:c(x,{flex:"auto",children:[e(C,{tabIndex:-1,type:"link",icon:e(xu,{}),onClick:()=>F(""),children:"\u6A21\u5F0F1(\u9650\u65F6)"}),e(C,{tabIndex:-1,type:"link",icon:e(Eu,{}),onClick:()=>F("monkey"),children:"\u6A21\u5F0F2(\u8BA1\u65F6)"}),e(C,{tabIndex:-1,type:"link",icon:e(Cu,{}),onClick:()=>F("sentence"),children:"\u6A21\u5F0F3(\u53E5\u5B50)"}),e(C,{tabIndex:-1,type:"link",icon:e(mu,{}),onClick:()=>F("training"),children:"\u6307\u6CD5\u7EC3\u4E60"}),e(C,{tabIndex:-1,type:"link",icon:e(Fu,{}),onClick:()=>F("test"),children:"\u6309\u952E\u58F0\u97F3\u53CD\u9988"}),e(fu,{placement:"bottomLeft",content:e(Zu,{go:F}),children:e(C,{tabIndex:-1,className:"heartBeat",type:"link",icon:e(hu,{twoToneColor:"#9D0500"}),onClick:()=>F("about"),children:"\u6C42\u6253\u8D4F"})})]})}),e(g,{style:{marginTop:"10px"},children:c(x,{flex:"auto",children:[e(C,{tabIndex:-1,type:"link",style:{display:(I=v[p])!=null&&I[0]?"":"none"},icon:e(gu,{}),onClick:()=>l(!0),children:"\u4E3B\u9898"}),e(C,{tabIndex:-1,type:"link",style:{display:(O=v[p])!=null&&O[1]?"":"none"},icon:e(Bu,{}),onClick:()=>a(!0),children:"\u8BCD\u7EC4\u8BBE\u7F6E"}),c("div",{style:{display:(T=v[p])!=null&&T[2]?"inline-block":"none"},children:[e("span",{className:"radio-text",children:"\xA0\xA0\xA0\xA0UI\u5C3A\u5BF8:\xA0\xA0"}),c(A.Group,{onChange:Y,defaultValue:u.$state.root.uiScale,children:[e(A,{tabIndex:-1,value:"s",children:"\u6B63\u5E38"}),e(A,{tabIndex:-1,value:"m",children:"\u5927"}),e(A,{tabIndex:-1,value:"l",children:"\u7279\u5927"})]})]})]})}),c($,{className:"header-modal-setting",title:"",visible:t,closable:!1,maskClosable:!1,footer:e(Au,{placement:"left",title:"\u5C06\u81EA\u52A8\u53BB\u9664\u91CD\u590D\u8BCD\u7EC4",children:e(C,{tabIndex:-1,className:"header-modal-confirm-btn",type:"primary",onClick:Z,children:"\u786E\u5B9A"})}),children:[c(y,{defaultActiveKey:o,onChange:uu,children:[e(y.TabPane,{tab:"\u9ED8\u8BA4\u8BCD\u7EC4",children:e(L.TextArea,{autoSize:{minRows:9,maxRows:16},disabled:!0,defaultValue:m.current})},"1"),e(y.TabPane,{tab:"\u81EA\u5B9A\u4E49\u8BCD\u7EC4",children:e(L.TextArea,{autoSize:{minRows:9,maxRows:16},value:b,onChange:eu})},"2")]}),c(g,{className:"header-modal--words-length",children:[e(x,{span:12,children:e(g,{gutter:6,className:"error-word",children:K.map((r,i)=>e(x,{children:r},i))})}),c(x,{span:12,className:"header-modal--total",children:["\u5171(",o==="1"?m.current.split("|").length:b.split("|").filter(Boolean).length,")\u4E2A\u8BCD"]})]})]}),e($,{className:"header-modal-theme",title:"",visible:n,footer:"",onCancel:()=>l(!1),children:c(g,{justify:"space-around",className:"header-modal-theme--box",children:[_.map((r,i)=>e(x,{flex:"100px",className:"theme-display-block",style:{backgroundColor:r.bgColor,color:r.textColor},onClick:()=>tu(r),children:r.name},i)),e(x,{flex:"100px"}),e(x,{flex:"100px"}),e(x,{flex:"100px"}),e(x,{flex:"100px"})]})})]})};var te=J(ee);const ae=u=>e("div",{className:"app-footer",children:u.$state.root.backImgUrl&&e("img",{className:"back__img",src:u.$state.root.backImgUrl,alt:""})});var le=J(ae);const re=()=>e(Du,{store:qu,children:e("div",{className:"app-main",children:c(pu,{children:[e(te,{}),e(d.exports.Suspense,{fallback:e(yu,{}),children:e(Lu,{})}),e(le,{})]})})});console.log("BASE_URL: ","/typing-jp/");console.log("APP_VERSION:","20240617a");_u.render(e(vu.StrictMode,{children:e(re,{})}),document.getElementById("root"));export{Yu as P,f as _,oe as __vite_legacy_guard,Gu as d,J as s};