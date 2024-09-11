var k=Object.defineProperty;var R=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var w=(i,n,s)=>n in i?k(i,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[n]=s,y=(i,n)=>{for(var s in n||(n={}))M.call(n,s)&&w(i,s,n[s]);if(R)for(var s of R(n))j.call(n,s)&&w(i,s,n[s]);return i};import{_ as L}from"./index.028fc849.js";import{r as u,e as d,j as t,m,R as P,C as D,v as K,o as z}from"./vendor.d9062a6e.js";import{w as N}from"./wordTool.5f109ba6.js";import{R as I,T as G}from"./ReloadBtn.f740f3d4.js";const O=32,U=13,V=/^[^\x00-\xff]+$/,W=()=>L(()=>import("./sentences.7f7066ed.js"),[]),Y=()=>{const[i,n]=u.exports.useState(!0),s=u.exports.useRef(null),f=u.exports.useRef([]),[o,A]=u.exports.useState([]),[a,F]=u.exports.useState(0),[E,T]=u.exports.useState(5),[v,C]=u.exports.useState(""),[b,B]=u.exports.useState(!1),[g,S]=u.exports.useState(!1),r=u.exports.useRef({cpm:"",right:0,wrong:0,acc:0,time:{begin:0,secs:0}}),_=e=>{e===" "||g||(C(e),V.test(e)&&A(c=>{const l=[...c],h=y({},l[a]);for(let p=0;p<e.length;p++)h.charArr[p]&&(h.charArr[p].isCorrect=e.charAt(p)===h.charArr[p].char);return l.splice(a,1,h),l}))},$=e=>{if(!g&&(r.current.time.begin===0&&(r.current.time.begin=Date.now()),(e.keyCode===U||e.keyCode===O)&&v.length>=o[a].sentence.length))if(a===o.length-1){const c=o.reduce((l,h)=>[...l,...h.charArr],[]);r.current.right=c.filter(l=>l.isCorrect).length,r.current.wrong=c.length-r.current.right,r.current.acc=Math.round(r.current.right/(r.current.right+r.current.wrong)*100),r.current.time.secs=Math.round((Date.now()-r.current.time.begin)/1e3),r.current.cpm=(r.current.right/(r.current.time.secs/60)).toFixed(2),B(!0),setTimeout(()=>{S(!0)},150)}else F(c=>c+1),C("")},x=u.exports.useCallback(()=>{C(""),F(0),r.current={cpm:"",right:0,wrong:0,acc:0,time:{begin:0,secs:0}},f.current=N.shuffle(f.current),A(N.jsonCopy(f.current.slice(0,E)).map(e=>({sentence:e,charArr:Array.from(e).map(c=>({char:c,isCorrect:null}))}))),B(!1),S(!1),setTimeout(()=>{s.current.focus()},10)},[E]);return u.exports.useEffect(()=>{n(!0),W().then(e=>{f.current=e.default,x(),n(!1)})},[x]),d("div",{className:"Sentence",children:[t("div",{className:"word-count-radio",children:d(m.Group,{value:E,size:"small",onChange:e=>{T(e.target.value)},children:[t(m.Button,{tabIndex:-1,value:5,children:"5"}),t(m.Button,{tabIndex:-1,value:10,children:"10"}),t(m.Button,{tabIndex:-1,value:15,children:"15"}),t(m.Button,{tabIndex:-1,value:20,children:"20"})]})}),d(P,{justify:"center",align:"middle",children:[d(D,{flex:"900px",className:`type-main-box ${b?"fading":""} ${g?"hide":""}`,children:[t("div",{className:"sentence-line",children:o[a]&&o[a].charArr.map((e,c)=>t("code",{className:`char ${e.isCorrect?"correct":e.isCorrect===!1?"wrong":""}`,children:e.char},c))}),t(K,{spinning:i,tip:"\u52A0\u8F7D\u4E2D",className:"sentence-loading",children:t("div",{})}),t("div",{className:"sentence-input",children:t(z,{ref:s,value:v,onChange:e=>_(e.target.value),onKeyDown:$})}),t("div",{className:"sentence-next",children:o[a+1]&&o[a+1].sentence}),t("div",{className:"reload-line",children:t(I,{onClick:x})}),d("div",{className:"tip-line",children:[t("div",{children:"\u70B9\u51FB\u6A2A\u7EBF\u4E0A\u65B9\u8FDB\u5165\u8F93\u5165\u72B6\u6001"}),t("div",{children:"\u8F93\u5165\u6B63\u786E\u4E2D\u6587\u548C\u7B26\u53F7\uFF0C\u7136\u540E\u7A7A\u683C\u6216\u56DE\u8F66"}),d("div",{children:["\u8F93\u5165\u72B6\u6001\u4E0B",t("code",{children:"Tab"}),"\u540E\u56DE\u8F66\u53EF\u4EE5\u76F4\u63A5\u5237\u65B0"]}),t("div",{children:"\u89C9\u5F97\u6709\u610F\u601D\u53EF\u4EE5\u6253\u8D4F\u4E00\u4E0B(#^.^#)(\u5728\u4E0A\u9762\u2191\u2191)"})]})]}),d(D,{flex:"900px",className:`type-result-box ${g?"show":""}`,children:[t(G,{desc:"\u5B57/\u5206\u949F",numStr:r.current.cpm,acc:r.current.acc,secs:r.current.time.secs}),t("div",{className:"reload-line",children:t(I,{onClick:x})})]})]})]})};export{Y as default};