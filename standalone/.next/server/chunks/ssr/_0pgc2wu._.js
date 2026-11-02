module.exports=[721274,a=>{"use strict";a.s(["default",0,{icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M349 838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V642H349v196zm531.1-684H143.9c-24.5 0-39.8 26.7-27.5 48l221.3 376h348.8l221.3-376c12.1-21.3-3.2-48-27.7-48z"}}]},name:"filter",theme:"filled"}])},939948,a=>{"use strict";a.s(["default",0,function(...a){let b={};return a.forEach(a=>{a&&Object.keys(a).forEach(c=>{void 0!==a[c]&&(b[c]=a[c])})}),b}])},681131,a=>{"use strict";a.i(738539);var b=a.i(493610);a.s(["genRoundedArrow",0,(a,c,d)=>{let{sizePopupArrow:e,arrowPolygon:f,arrowPath:g,arrowShadowWidth:h,borderRadiusXS:i,calc:j}=a;return{pointerEvents:"none",width:e,height:e,overflow:"hidden","&::before":{position:"absolute",bottom:0,insetInlineStart:0,width:e,height:j(e).div(2).equal(),background:c,clipPath:{_multi_value_:!0,value:[f,g]},content:'""'},"&::after":{content:'""',position:"absolute",width:h,height:h,bottom:0,insetInline:0,margin:"auto",borderRadius:{_skip_check_:!0,value:`0 0 ${(0,b.unit)(i)} 0`},transform:"translateY(50%) rotate(-135deg)",boxShadow:d,zIndex:0,background:"transparent"}}},"getArrowToken",0,function(a){let{sizePopupArrow:b,borderRadiusXS:c,borderRadiusOuter:d}=a,e=b/2,f=d/Math.sqrt(2),g=e-d*(1-1/Math.sqrt(2)),h=e-1/Math.sqrt(2)*c,i=d*(Math.sqrt(2)-1)+1/Math.sqrt(2)*c,j=e*Math.sqrt(2)+d*(Math.sqrt(2)-2),k=d*(Math.sqrt(2)-1),l=`polygon(${k}px 100%, 50% ${k}px, ${2*e-k}px 100%, ${k}px 100%)`;return{arrowShadowWidth:j,arrowPath:`path('M 0 ${e} A ${d} ${d} 0 0 0 ${f} ${g} L ${h} ${i} A ${c} ${c} 0 0 1 ${2*e-h} ${i} L ${2*e-f} ${g} A ${d} ${d} 0 0 0 ${2*e-0} ${e} Z')`,arrowPolygon:l}}])},951772,(a,b,c)=>{a.e,b.exports=function(){"use strict";var a="millisecond",b="second",c="minute",d="hour",e="week",f="month",g="quarter",h="year",i="date",j="Invalid Date",k=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m=function(a,b,c){var d=String(a);return!d||d.length>=b?a:""+Array(b+1-d.length).join(c)+a},n="en",o={};o[n]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(a){var b=["th","st","nd","rd"],c=a%100;return"["+a+(b[(c-20)%10]||b[c]||b[0])+"]"}};var p="$isDayjsObject",q=function(a){return a instanceof u||!(!a||!a[p])},r=function a(b,c,d){var e;if(!b)return n;if("string"==typeof b){var f=b.toLowerCase();o[f]&&(e=f),c&&(o[f]=c,e=f);var g=b.split("-");if(!e&&g.length>1)return a(g[0])}else{var h=b.name;o[h]=b,e=h}return!d&&e&&(n=e),e||!d&&n},s=function(a,b){if(q(a))return a.clone();var c="object"==typeof b?b:{};return c.date=a,c.args=arguments,new u(c)},t={s:m,z:function(a){var b=-a.utcOffset(),c=Math.abs(b);return(b<=0?"+":"-")+m(Math.floor(c/60),2,"0")+":"+m(c%60,2,"0")},m:function a(b,c){if(b.date()<c.date())return-a(c,b);var d=12*(c.year()-b.year())+(c.month()-b.month()),e=b.clone().add(d,f),g=c-e<0,h=b.clone().add(d+(g?-1:1),f);return+(-(d+(c-e)/(g?e-h:h-e))||0)},a:function(a){return a<0?Math.ceil(a)||0:Math.floor(a)},p:function(j){return({M:f,y:h,w:e,d:"day",D:i,h:d,m:c,s:b,ms:a,Q:g})[j]||String(j||"").toLowerCase().replace(/s$/,"")},u:function(a){return void 0===a}};t.l=r,t.i=q,t.w=function(a,b){return s(a,{locale:b.$L,utc:b.$u,x:b.$x,$offset:b.$offset})};var u=function(){function m(a){this.$L=r(a.locale,null,!0),this.parse(a),this.$x=this.$x||a.x||{},this[p]=!0}var n=m.prototype;return n.parse=function(a){this.$d=function(a){var b=a.date,c=a.utc;if(null===b)return new Date(NaN);if(t.u(b))return new Date;if(b instanceof Date)return new Date(b);if("string"==typeof b&&!/Z$/i.test(b)){var d=b.match(k);if(d){var e=d[2]-1||0,f=(d[7]||"0").substring(0,3);return c?new Date(Date.UTC(d[1],e,d[3]||1,d[4]||0,d[5]||0,d[6]||0,f)):new Date(d[1],e,d[3]||1,d[4]||0,d[5]||0,d[6]||0,f)}}return new Date(b)}(a),this.init()},n.init=function(){var a=this.$d;this.$y=a.getFullYear(),this.$M=a.getMonth(),this.$D=a.getDate(),this.$W=a.getDay(),this.$H=a.getHours(),this.$m=a.getMinutes(),this.$s=a.getSeconds(),this.$ms=a.getMilliseconds()},n.$utils=function(){return t},n.isValid=function(){return this.$d.toString()!==j},n.isSame=function(a,b){var c=s(a);return this.startOf(b)<=c&&c<=this.endOf(b)},n.isAfter=function(a,b){return s(a)<this.startOf(b)},n.isBefore=function(a,b){return this.endOf(b)<s(a)},n.$g=function(a,b,c){return t.u(a)?this[b]:this.set(c,a)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(a,g){var j=this,k=!!t.u(g)||g,l=t.p(a),m=function(a,b){var c=t.w(j.$u?Date.UTC(j.$y,b,a):new Date(j.$y,b,a),j);return k?c:c.endOf("day")},n=function(a,b){return t.w(j.toDate()[a].apply(j.toDate("s"),(k?[0,0,0,0]:[23,59,59,999]).slice(b)),j)},o=this.$W,p=this.$M,q=this.$D,r="set"+(this.$u?"UTC":"");switch(l){case h:return k?m(1,0):m(31,11);case f:return k?m(1,p):m(0,p+1);case e:var s=this.$locale().weekStart||0,u=(o<s?o+7:o)-s;return m(k?q-u:q+(6-u),p);case"day":case i:return n(r+"Hours",0);case d:return n(r+"Minutes",1);case c:return n(r+"Seconds",2);case b:return n(r+"Milliseconds",3);default:return this.clone()}},n.endOf=function(a){return this.startOf(a,!1)},n.$set=function(e,g){var j,k=t.p(e),l="set"+(this.$u?"UTC":""),m=((j={}).day=l+"Date",j[i]=l+"Date",j[f]=l+"Month",j[h]=l+"FullYear",j[d]=l+"Hours",j[c]=l+"Minutes",j[b]=l+"Seconds",j[a]=l+"Milliseconds",j)[k],n="day"===k?this.$D+(g-this.$W):g;if(k===f||k===h){var o=this.clone().set(i,1);o.$d[m](n),o.init(),this.$d=o.set(i,Math.min(this.$D,o.daysInMonth())).$d}else m&&this.$d[m](n);return this.init(),this},n.set=function(a,b){return this.clone().$set(a,b)},n.get=function(a){return this[t.p(a)]()},n.add=function(a,g){var i,j=this;a=Number(a);var k=t.p(g),l=function(b){var c=s(j);return t.w(c.date(c.date()+Math.round(b*a)),j)};if(k===f)return this.set(f,this.$M+a);if(k===h)return this.set(h,this.$y+a);if("day"===k)return l(1);if(k===e)return l(7);var m=((i={})[c]=6e4,i[d]=36e5,i[b]=1e3,i)[k]||1,n=this.$d.getTime()+a*m;return t.w(n,this)},n.subtract=function(a,b){return this.add(-1*a,b)},n.format=function(a){var b=this,c=this.$locale();if(!this.isValid())return c.invalidDate||j;var d=a||"YYYY-MM-DDTHH:mm:ssZ",e=t.z(this),f=this.$H,g=this.$m,h=this.$M,i=c.weekdays,k=c.months,m=c.meridiem,n=function(a,c,e,f){return a&&(a[c]||a(b,d))||e[c].slice(0,f)},o=function(a){return t.s(f%12||12,a,"0")},p=m||function(a,b,c){var d=a<12?"AM":"PM";return c?d.toLowerCase():d};return d.replace(l,function(a,d){return d||function(a){switch(a){case"YY":return String(b.$y).slice(-2);case"YYYY":return t.s(b.$y,4,"0");case"M":return h+1;case"MM":return t.s(h+1,2,"0");case"MMM":return n(c.monthsShort,h,k,3);case"MMMM":return n(k,h);case"D":return b.$D;case"DD":return t.s(b.$D,2,"0");case"d":return String(b.$W);case"dd":return n(c.weekdaysMin,b.$W,i,2);case"ddd":return n(c.weekdaysShort,b.$W,i,3);case"dddd":return i[b.$W];case"H":return String(f);case"HH":return t.s(f,2,"0");case"h":return o(1);case"hh":return o(2);case"a":return p(f,g,!0);case"A":return p(f,g,!1);case"m":return String(g);case"mm":return t.s(g,2,"0");case"s":return String(b.$s);case"ss":return t.s(b.$s,2,"0");case"SSS":return t.s(b.$ms,3,"0");case"Z":return e}return null}(a)||e.replace(":","")})},n.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},n.diff=function(a,i,j){var k,l=this,m=t.p(i),n=s(a),o=(n.utcOffset()-this.utcOffset())*6e4,p=this-n,q=function(){return t.m(l,n)};switch(m){case h:k=q()/12;break;case f:k=q();break;case g:k=q()/3;break;case e:k=(p-o)/6048e5;break;case"day":k=(p-o)/864e5;break;case d:k=p/36e5;break;case c:k=p/6e4;break;case b:k=p/1e3;break;default:k=p}return j?k:t.a(k)},n.daysInMonth=function(){return this.endOf(f).$D},n.$locale=function(){return o[this.$L]},n.locale=function(a,b){if(!a)return this.$L;var c=this.clone(),d=r(a,b,!0);return d&&(c.$L=d),c},n.clone=function(){return t.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},m}(),v=u.prototype;return s.prototype=v,[["$ms",a],["$s",b],["$m",c],["$H",d],["$W","day"],["$M",f],["$y",h],["$D",i]].forEach(function(a){v[a[1]]=function(b){return this.$g(b,a[0],a[1])}}),s.extend=function(a,b){return a.$i||(a(b,u,s),a.$i=!0),s},s.locale=r,s.isDayjs=q,s.unix=function(a){return s(1e3*a)},s.en=o[n],s.Ls=o,s.p={},s}()},97663,a=>{"use strict";var b=a.i(187924),c=a.i(572131),d=a.i(238246),e=a.i(83490),f=a.i(951772),g=a.i(134416),h=a.i(42854),i=a.i(190992),j=a.i(265477);let k=["Created","InProgress","PayNow","Completed","Cancelled"],l=a=>{switch(a){case"InProgress":return"In progress";case"PayNow":return"Pay now";default:return a}},m=()=>{let[a,m]=(0,c.useState)([]),[n,o]=(0,c.useState)(!0),[p,q]=(0,c.useState)(""),[r,s]=(0,c.useState)(1),[t,u]=(0,c.useState)(20),[v,w]=(0,c.useState)(0),[x,y]=(0,c.useState)({}),[z,A]=(0,c.useState)(null),[B,C]=(0,c.useState)(!1),[D,E]=(0,c.useState)(""),[F,G]=(0,c.useState)(""),[H,I]=(0,c.useState)(!1),[J,K]=(0,c.useState)([]),[L,M]=(0,c.useState)(null),[N,O]=(0,c.useState)(!1),P=(0,c.useCallback)(async()=>{if(h.API_BASE_URL)try{o(!0),q("");let a=await e.default.get(`${h.API_BASE_URL}/hospital/pharma-tokens`,{params:{page:r,limit:t}}),b=a.data?.data??{},c=Array.isArray(b?.tokens)?b.tokens:Array.isArray(b?.pharmaTokens)?b.pharmaTokens:Array.isArray(b?.list)?b.list:[],d=b?.pagination;if(d&&"object"==typeof d){let a="number"==typeof d.totalCount?d.totalCount:"number"==typeof d.total?d.total:void 0;w("number"==typeof a?a:c.length)}else w("number"==typeof b?.count?b.count:c.length);let g=c.map(a=>{let b=a.createdAt||a.createdDate||"",c=a.date?(0,f.default)(a.date).format("DD MMM YYYY"):b?(0,f.default)(b).format("DD MMM YYYY"):"—",d=a.pharmaTokenId??a.tokenNo??a.tokenNumber??a.tokenId??"—";return{id:a._id,Pharma_Token_ID:String(d),MRD:a.mrd||a.patient?.mrd||"—",Patient:a.patientName||a.patient?.name||"—",Phone:a.patientPhone||a.patient?.phone||"—",Age_Gender:a.patient?.age!=null||a.patient?.gender?`${a.patient?.age??"—"} / ${a.patient?.gender??"—"}`:"—",Status:a.status||"—",Date:c,_visitType:a.visitType,_createdAt:b||a.date}});m(g)}catch(a){q(a?.response?.data?.message||"Failed to load pharma tokens"),m([]),w(0)}finally{o(!1)}},[r,t]);(0,c.useEffect)(()=>{P()},[P]);let Q=async a=>{if(a.preventDefault(),h.API_BASE_URL){if(!L?._id)return void E("Please select a patient.");try{C(!0),E("");let a=L.patientId??L._id;await e.default.post(`${h.API_BASE_URL}/hospital/pharma-tokens`,{patientId:a}),G(""),M(null),K([]),O(!1),s(1),await P()}catch(a){E(a?.response?.data?.message||"Failed to create pharma token.")}finally{C(!1)}}},R=async(a,b)=>{if(h.API_BASE_URL&&a)try{A(a),await e.default.patch(`${h.API_BASE_URL}/hospital/pharma-tokens/${a}`,{status:b}),y(c=>({...c,[a]:b})),m(c=>c.map(c=>c.id===a?{...c,Status:b}:c))}catch(a){alert(a?.response?.data?.message||"Failed to update status.")}finally{A(null)}},S=(0,c.useCallback)(async a=>{if(!h.API_BASE_URL)return;let b=a.trim();if(!b)return void K([]);try{I(!0);let a=await e.default.get(`${h.API_BASE_URL}/hospital/patients`,{params:{search:b,limit:10}}),c=a.data?.data??{},d=Array.isArray(c?.patients)?c.patients:Array.isArray(c?.list)?c.list:[];K(d)}catch{K([])}finally{I(!1)}},[]);(0,c.useEffect)(()=>{let a=setTimeout(()=>{S(F)},300);return()=>clearTimeout(a)},[F,S]);let T=[{title:"Pharma Token ID",dataIndex:"Pharma_Token_ID",render:a=>(0,b.jsx)("span",{className:"text-dark fw-semibold",children:a})},{title:"MRD",dataIndex:"MRD",render:a=>(0,b.jsx)("span",{className:"text-dark",children:a})},{title:"Patient Name",dataIndex:"Patient",render:(a,c)=>(0,b.jsxs)("div",{children:[(0,b.jsx)("div",{className:"text-dark fw-medium",children:c.Patient}),(0,b.jsx)("div",{className:"text-dark fs-13",children:c.Phone})]})},{title:"Age / Gender",dataIndex:"Age_Gender",render:a=>(0,b.jsx)("span",{className:"text-dark",children:a})},{title:"Date",dataIndex:"Date",render:a=>(0,b.jsx)("span",{className:"text-dark",children:a})},{title:"Status",dataIndex:"Status",width:148,render:(a,c)=>{let e=x[c.id]??c.Status,f=(a=>{let b=(a??"").trim();if(!b)return"Created";if(k.includes(b))return b;let c=b.toLowerCase().replace(/\s+/g,"");return"inprogress"===c||"in-progress"===c?"InProgress":"paynow"===c||"pay-now"===c?"PayNow":"completed"===c?"Completed":"cancelled"===c||"canceled"===c?"Cancelled":"Created"})("—"===e?void 0:e),g=z===c.id;return(0,b.jsx)("div",{className:"dropdown",onClick:a=>a.stopPropagation(),children:g?(0,b.jsxs)("span",{className:"d-inline-flex align-items-center gap-2 text-muted",children:[(0,b.jsx)("span",{className:"spinner-border spinner-border-sm",role:"status"}),(0,b.jsx)("span",{className:"visually-hidden",children:"Updating status"})]}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("button",{type:"button",className:`btn btn-sm fs-13 badge ${(a=>{switch(a){case"Created":return"badge-soft-primary text-primary";case"InProgress":return"badge-soft-warning text-dark";case"PayNow":return"badge-soft-info text-info";case"Completed":return"badge-soft-success text-success";case"Cancelled":return"badge-soft-danger text-danger";default:return"badge-soft-secondary text-secondary"}})(f)} rounded fw-medium dropdown-toggle`,"data-bs-toggle":"dropdown","aria-expanded":"false","aria-label":"Pharma appointment status",title:f,children:l(f)}),(0,b.jsx)("ul",{className:"dropdown-menu",children:k.map(a=>(0,b.jsx)("li",{children:(0,b.jsx)(d.default,{className:"dropdown-item",href:"#",onClick:b=>{if(b.preventDefault(),g||a===f)return;R(c.id,a);let d=b.currentTarget.closest(".dropdown");if(d){let a=d.querySelector('[data-bs-toggle="dropdown"]'),b=d.querySelector(".dropdown-menu");a&&b&&(a.setAttribute("aria-expanded","false"),a.classList.remove("show"),b.classList.remove("show"))}},children:l(a)})},a))})]})})}},{title:"",dataIndex:"actions",render:(a,c)=>(0,b.jsx)("button",{type:"button",className:"btn btn-link text-dark p-0 border-0",onClick:a=>{a.stopPropagation(),(0,j.openThermalTokenPrint)({caseId:String(c?.Pharma_Token_ID??""),tokenNo:c?.Pharma_Token_ID??"—",visitType:String(c?._visitType??""),tokenTitle:"Pharma",useVisitPrefix:!1,paperWidthMm:58,slipWidthMm:50,patientName:String(c?.Patient??""),appointmentDateTime:String(c?.Date??""),doctorName:"Pharmacy Counter"})},title:"Print token (thermal printer)","aria-label":"Print token for thermal printer",children:(0,b.jsx)("i",{className:"ti ti-printer fs-16"})})}];return(0,b.jsxs)("div",{className:"page-wrapper",children:[(0,b.jsxs)("div",{className:"content",children:[(0,b.jsxs)("div",{className:"d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom",children:[(0,b.jsx)("div",{className:"flex-grow-1",children:(0,b.jsxs)("h4",{className:"fw-semibold mb-0",children:["Pharma Appointments",(0,b.jsxs)("span",{className:"badge badge-soft-primary fw-medium border py-1 px-2 border-primary fs-13 ms-2",children:["Total : ",v]})]})}),(0,b.jsx)("div",{className:"text-end d-flex align-items-center flex-wrap justify-content-end gap-2",children:(0,b.jsxs)(d.default,{href:i.all_routes.pharmaTokenQueue,target:"_blank",rel:"noopener noreferrer",className:"btn btn-outline-primary fs-13 btn-md",children:[(0,b.jsx)("i",{className:"ti ti-list-details me-1"}),"Queue"]})})]}),(0,b.jsx)("div",{className:"card border shadow-none mb-3",children:(0,b.jsxs)("div",{className:"card-body p-3 p-md-4",children:[(0,b.jsx)("h5",{className:"fw-semibold mb-3 fs-16",children:"Create pharma token"}),(0,b.jsxs)("form",{onSubmit:Q,children:[D?(0,b.jsx)("div",{className:"alert alert-danger mb-3",role:"alert",children:D}):null,(0,b.jsxs)("div",{className:"row g-3",children:[(0,b.jsxs)("div",{className:"col-12",children:[(0,b.jsxs)("label",{className:"form-label mb-1 fw-medium",children:["Search patient ",(0,b.jsx)("span",{className:"text-danger ms-1",children:"*"})]}),(0,b.jsxs)("div",{className:"position-relative",children:[(0,b.jsx)("input",{type:"text",className:"form-control",placeholder:"Search by name / phone / MRD",value:F,onChange:a=>{G(a.target.value),O(!0),M(null)},onFocus:()=>O(!0)}),N&&F.trim()?(0,b.jsx)("div",{className:"dropdown-menu show w-100 mt-1 p-0",style:{maxHeight:"16rem",overflowY:"auto",position:"absolute"},children:H?(0,b.jsx)("div",{className:"px-3 py-2 text-muted",children:"Searching..."}):J.length>0?J.map(a=>(0,b.jsxs)("button",{type:"button",className:"dropdown-item py-2",onClick:()=>{M(a),G([a.name,a.mrd?`(${a.mrd})`:""].filter(Boolean).join(" ")),O(!1)},children:[(0,b.jsx)("div",{className:"fw-medium text-dark",children:a.name||"—"}),(0,b.jsxs)("div",{className:"fs-12 text-muted",children:["MRD: ",a.mrd||"—"," | Phone: ",a.phone||"—"]})]},a._id)):(0,b.jsx)("div",{className:"px-3 py-2 text-muted",children:"No patients found"})}):null]})]}),L?(0,b.jsx)("div",{className:"col-12",children:(0,b.jsxs)("div",{className:"border rounded p-3 bg-light",children:[(0,b.jsx)("h6",{className:"mb-2 fw-semibold fs-14",children:"Selected patient"}),(0,b.jsxs)("div",{className:"row g-2",children:[(0,b.jsxs)("div",{className:"col-sm-6",children:[(0,b.jsx)("div",{className:"text-muted fs-12",children:"Name"}),(0,b.jsx)("div",{className:"text-dark",children:L.name||"—"})]}),(0,b.jsxs)("div",{className:"col-sm-6",children:[(0,b.jsx)("div",{className:"text-muted fs-12",children:"MRD"}),(0,b.jsx)("div",{className:"text-dark",children:L.mrd||"—"})]}),(0,b.jsxs)("div",{className:"col-sm-6",children:[(0,b.jsx)("div",{className:"text-muted fs-12",children:"Phone"}),(0,b.jsx)("div",{className:"text-dark",children:L.phone||"—"})]}),(0,b.jsxs)("div",{className:"col-sm-6",children:[(0,b.jsx)("div",{className:"text-muted fs-12",children:"Age / Gender"}),(0,b.jsxs)("div",{className:"text-dark",children:[null!=L.age?L.age:"—"," /"," ",L.gender||"—"]})]})]})]})}):null,(0,b.jsx)("div",{className:"col-12",children:(0,b.jsxs)("div",{className:"d-flex flex-column flex-sm-row align-items-stretch align-items-sm-center justify-content-sm-end gap-2",children:[(0,b.jsx)("button",{type:"button",className:"btn btn-light btn-md order-2 order-sm-1",onClick:()=>{G(""),M(null),K([]),O(!1),E("")},children:"Clear"}),(0,b.jsx)("button",{type:"submit",className:"btn btn-primary btn-md order-1 order-sm-2",disabled:B,children:B?"Creating...":"Create token"})]})})]})]})]})}),p&&(0,b.jsxs)("div",{className:"alert alert-danger mb-3",role:"alert",children:[(0,b.jsx)("strong",{children:"Error:"})," ",p]}),(0,b.jsx)("div",{className:"table-responsive",children:n?(0,b.jsxs)("div",{className:"text-center p-5",children:[(0,b.jsx)("div",{className:"spinner-border text-primary",role:"status",children:(0,b.jsx)("span",{className:"visually-hidden",children:"Loading..."})}),(0,b.jsx)("p",{className:"mt-2 text-muted",children:"Loading pharma tokens..."})]}):(0,b.jsx)(g.default,{columns:T,dataSource:a,Selection:!1,searchText:"",total:v,currentPage:r,pageSize:t,onPaginationChange:(a,b)=>{s(a),u(b)}})})]}),(0,b.jsx)("div",{className:"footer text-center bg-white p-2 border-top",children:(0,b.jsxs)("p",{className:"text-dark mb-0",children:["2025 ©"," ",(0,b.jsx)(d.default,{href:"#",className:"link-primary",children:"Preclinic"}),", All Rights Reserved"]})})]})};a.s(["default",0,function(){return(0,b.jsx)("div",{children:(0,b.jsx)(m,{})})}],97663)},265477,a=>{"use strict";var b=a.i(78519);let c=a=>a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");a.s(["openThermalTokenPrint",0,a=>{let d=a.hospitalName?.trim()||"JJM Hospital",e=window.open("","_blank","width=360,height=640,scrollbars=yes");if(!e)return void alert("Please allow pop-ups to print the token.");let f=a.tokenTitle?.trim()||"OPD Token",g=c(a.useVisitPrefix??!0?(0,b.formatTokenWithVisitPrefix)(a.tokenNo,a.visitType):String(a.tokenNo??"").trim()||"N/A"),h=(a.appointmentDateTime??"").trim().split(" - ").map(a=>a.trim()).filter(Boolean),i=h[0]?c(h[0]):"",j="number"==typeof a.paperWidthMm&&a.paperWidthMm>0?a.paperWidthMm:80,k="number"==typeof a.slipWidthMm&&a.slipWidthMm>0?Math.min(a.slipWidthMm,j):72,l=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>Token ${g}</title>
<style>
  @page {
    size: ${j}mm auto;
    margin: 0;
  }
  @media print {
    body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    .no-print { display: none !important; }
  }
  * { box-sizing: border-box; }
  html, body {
    margin: 0;
    padding: 0;
    background: #fff;
    color: #000;
  }
  .slip {
    max-width: ${k}mm;
    margin: 0 auto;
    padding: 0 4mm 0;
    font-family: ui-monospace, "Cascadia Code", "Courier New", Courier, monospace;
    font-size: 12px;
    line-height: 1.4;
  }
  .head {
    text-align: center;
    font-weight: 700;
    font-size: 13px;
    margin-bottom: 2px;
  }
  .sub-row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 6px;
    font-size: 11px;
    margin-bottom: 6px;
    width: 100%;
  }
  .sub-row--split {
    justify-content: space-between;
  }
  .sub-row:not(.sub-row--split) {
    justify-content: center;
  }
  .sub-title {
    flex-shrink: 0;
  }
  .sub-date {
    flex-shrink: 0;
    text-align: right;
  }
  .rule {
    border: none;
    border-top: 1px dashed #000;
    margin: 6px 0;
  }
  .token {
    text-align: center;
    font-size: 35px;
    font-weight: 700;
    letter-spacing: 0.06em;
    line-height: 1.1;
    margin: 4px 0 2px;
  }
  .token-lbl {
    text-align: center;
    font-size: 11px;
    text-transform: uppercase;
    margin-bottom: 4px;
  }
  .actions {
    margin-top: 12px;
    text-align: center;
  }
  .actions button {
    font-size: 13px;
    padding: 6px 14px;
    cursor: pointer;
  }
</style>
</head>
<body>
  <div class="slip">
    <div class="head">${c(d)}</div>
    <div class="sub-row${i?" sub-row--split":""}">
      <span class="sub-title">${c(f)}</span>
      ${i?`<span class="sub-date">${i}</span>`:""}
    </div>
    <hr class="rule"/>
    <div class="token">${g}</div>
    <div class="token-lbl">Token No.</div>
    <hr class="rule"/>
    <div class="actions no-print">
      <button type="button" id="btn-print">Print</button>
    </div>
  </div>
  <script>
    (function () {
      function doPrint() {
        window.focus();
        window.print();
      }
      var btn = document.getElementById("btn-print");
      if (btn) btn.addEventListener("click", doPrint);
      setTimeout(doPrint, 200);
    })();
  </script>
</body>
</html>`;e.document.open(),e.document.write(l),e.document.close()}])},78519,a=>{"use strict";a.s(["formatTokenWithVisitPrefix",0,(a,b)=>{let c,d=String(a??"").trim();if(!d||"—"===d||"n/a"===d.toLowerCase())return"N/A";let e="emergency"===(c=(b??"").toLowerCase().replace(/\s+/g," ").trim())?"E":"mr"===c?"M":"follow-up-report"===c||"follow up report"===c||"followup-report"===c||"followup report"===c?"FR":"follow-up"===c||"follow up"===c||"followup"===c?"F":"O";return`${e}-${d}`}])}];

//# sourceMappingURL=_0pgc2wu._.js.map