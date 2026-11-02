(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,798058,e=>{"use strict";e.s(["default",0,{icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M349 838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V642H349v196zm531.1-684H143.9c-24.5 0-39.8 26.7-27.5 48l221.3 376h348.8l221.3-376c12.1-21.3-3.2-48-27.7-48z"}}]},name:"filter",theme:"filled"}])},702779,e=>{"use strict";var t=e.i(8211),n=e.i(617933);let r=n.PresetColors.map(e=>`${e}-inverse`),a=["success","processing","error","default","warning"];e.s(["isPresetColor",0,function(e,a=!0){return a?[].concat((0,t.default)(r),(0,t.default)(n.PresetColors)).includes(e):n.PresetColors.includes(e)},"isPresetStatusColor",0,function(e){return a.includes(e)}])},887719,e=>{"use strict";e.s(["default",0,function(...e){let t={};return e.forEach(e=>{e&&Object.keys(e).forEach(n=>{void 0!==e[n]&&(t[n]=e[n])})}),t}])},90635,131299,367397,874460,175636,330683,545719,e=>{"use strict";var t=e.i(271645),n=e.i(343794),r=e.i(209428),a=e.i(931067),l=e.i(211577),o=e.i(410160);function u(e){return!!(e.addonBefore||e.addonAfter)}function s(e){return!!(e.prefix||e.suffix||e.allowClear)}function i(e,t,n){var r=t.cloneNode(!0),a=Object.create(e,{target:{value:r},currentTarget:{value:r}});return r.value=n,"number"==typeof t.selectionStart&&"number"==typeof t.selectionEnd&&(r.selectionStart=t.selectionStart,r.selectionEnd=t.selectionEnd),r.setSelectionRange=function(){t.setSelectionRange.apply(t,arguments)},a}function c(e,t,n,r){if(n){var a=t;if("click"===t.type)return void n(a=i(t,e,""));if("file"!==e.type&&void 0!==r)return void n(a=i(t,e,r));n(a)}}function f(e,t){if(e){e.focus(t);var n=(t||{}).cursor;if(n){var r=e.value.length;switch(n){case"start":e.setSelectionRange(0,0);break;case"end":e.setSelectionRange(r,r);break;default:e.setSelectionRange(0,r)}}}}e.s(["hasAddon",0,u,"hasPrefixSuffix",0,s,"resolveOnChange",0,c,"triggerFocus",0,f],131299);var d=t.default.forwardRef(function(e,i){var c,f,d,p=e.inputElement,m=e.children,v=e.prefixCls,g=e.prefix,b=e.suffix,h=e.addonBefore,x=e.addonAfter,y=e.className,w=e.style,C=e.disabled,E=e.readOnly,N=e.focused,O=e.triggerFocus,P=e.allowClear,S=e.value,k=e.handleReset,$=e.hidden,R=e.classes,j=e.classNames,T=e.dataAttrs,F=e.styles,W=e.components,I=e.onClear,A=null!=m?m:p,B=(null==W?void 0:W.affixWrapper)||"span",z=(null==W?void 0:W.groupWrapper)||"span",D=(null==W?void 0:W.wrapper)||"span",M=(null==W?void 0:W.groupAddon)||"span",_=(0,t.useRef)(null),L=s(e),U=(0,t.cloneElement)(A,{value:S,className:(0,n.default)(null==(c=A.props)?void 0:c.className,!L&&(null==j?void 0:j.variant))||null}),K=(0,t.useRef)(null);if(t.default.useImperativeHandle(i,function(){return{nativeElement:K.current||_.current}}),L){var V=null;if(P){var H=!C&&!E&&S,Y="".concat(v,"-clear-icon"),q="object"===(0,o.default)(P)&&null!=P&&P.clearIcon?P.clearIcon:"✖";V=t.default.createElement("button",{type:"button",tabIndex:-1,onClick:function(e){null==k||k(e),null==I||I()},onMouseDown:function(e){return e.preventDefault()},className:(0,n.default)(Y,(0,l.default)((0,l.default)({},"".concat(Y,"-hidden"),!H),"".concat(Y,"-has-suffix"),!!b))},q)}var J="".concat(v,"-affix-wrapper"),G=(0,n.default)(J,(0,l.default)((0,l.default)((0,l.default)((0,l.default)((0,l.default)({},"".concat(v,"-disabled"),C),"".concat(J,"-disabled"),C),"".concat(J,"-focused"),N),"".concat(J,"-readonly"),E),"".concat(J,"-input-with-clear-btn"),b&&P&&S),null==R?void 0:R.affixWrapper,null==j?void 0:j.affixWrapper,null==j?void 0:j.variant),Q=(b||P)&&t.default.createElement("span",{className:(0,n.default)("".concat(v,"-suffix"),null==j?void 0:j.suffix),style:null==F?void 0:F.suffix},V,b);U=t.default.createElement(B,(0,a.default)({className:G,style:null==F?void 0:F.affixWrapper,onClick:function(e){var t;null!=(t=_.current)&&t.contains(e.target)&&(null==O||O())}},null==T?void 0:T.affixWrapper,{ref:_}),g&&t.default.createElement("span",{className:(0,n.default)("".concat(v,"-prefix"),null==j?void 0:j.prefix),style:null==F?void 0:F.prefix},g),U,Q)}if(u(e)){var X="".concat(v,"-group"),Z="".concat(X,"-addon"),ee="".concat(X,"-wrapper"),et=(0,n.default)("".concat(v,"-wrapper"),X,null==R?void 0:R.wrapper,null==j?void 0:j.wrapper),en=(0,n.default)(ee,(0,l.default)({},"".concat(ee,"-disabled"),C),null==R?void 0:R.group,null==j?void 0:j.groupWrapper);U=t.default.createElement(z,{className:en,ref:K},t.default.createElement(D,{className:et},h&&t.default.createElement(M,{className:Z},h),U,x&&t.default.createElement(M,{className:Z},x)))}return t.default.cloneElement(U,{className:(0,n.default)(null==(f=U.props)?void 0:f.className,y)||null,style:(0,r.default)((0,r.default)({},null==(d=U.props)?void 0:d.style),w),hidden:$})});e.s(["default",0,d],367397);var p=e.i(8211),m=e.i(392221),v=e.i(703923),g=e.i(914949),b=e.i(529681),h=["show"];function x(e,n){return t.useMemo(function(){var t={};n&&(t.show="object"===(0,o.default)(n)&&n.formatter?n.formatter:!!n);var a=t=(0,r.default)((0,r.default)({},t),e),l=a.show,u=(0,v.default)(a,h);return(0,r.default)((0,r.default)({},u),{},{show:!!l,showFormatter:"function"==typeof l?l:void 0,strategy:u.strategy||function(e){return e.length}})},[e,n])}e.s(["default",0,x],874460);var y=["autoComplete","onChange","onFocus","onBlur","onPressEnter","onKeyDown","onKeyUp","prefixCls","disabled","htmlSize","className","maxLength","suffix","showCount","count","type","classes","classNames","styles","onCompositionStart","onCompositionEnd"],w=(0,t.forwardRef)(function(e,o){var u,s=e.autoComplete,i=e.onChange,h=e.onFocus,w=e.onBlur,C=e.onPressEnter,E=e.onKeyDown,N=e.onKeyUp,O=e.prefixCls,P=void 0===O?"rc-input":O,S=e.disabled,k=e.htmlSize,$=e.className,R=e.maxLength,j=e.suffix,T=e.showCount,F=e.count,W=e.type,I=e.classes,A=e.classNames,B=e.styles,z=e.onCompositionStart,D=e.onCompositionEnd,M=(0,v.default)(e,y),_=(0,t.useState)(!1),L=(0,m.default)(_,2),U=L[0],K=L[1],V=(0,t.useRef)(!1),H=(0,t.useRef)(!1),Y=(0,t.useRef)(null),q=(0,t.useRef)(null),J=function(e){Y.current&&f(Y.current,e)},G=(0,g.default)(e.defaultValue,{value:e.value}),Q=(0,m.default)(G,2),X=Q[0],Z=Q[1],ee=null==X?"":String(X),et=(0,t.useState)(null),en=(0,m.default)(et,2),er=en[0],ea=en[1],el=x(F,T),eo=el.max||R,eu=el.strategy(ee),es=!!eo&&eu>eo;(0,t.useImperativeHandle)(o,function(){var e;return{focus:J,blur:function(){var e;null==(e=Y.current)||e.blur()},setSelectionRange:function(e,t,n){var r;null==(r=Y.current)||r.setSelectionRange(e,t,n)},select:function(){var e;null==(e=Y.current)||e.select()},input:Y.current,nativeElement:(null==(e=q.current)?void 0:e.nativeElement)||Y.current}}),(0,t.useEffect)(function(){H.current&&(H.current=!1),K(function(e){return(!e||!S)&&e})},[S]);var ei=function(e,t,n){var r,a,l=t;if(!V.current&&el.exceedFormatter&&el.max&&el.strategy(t)>el.max)l=el.exceedFormatter(t,{max:el.max}),t!==l&&ea([(null==(r=Y.current)?void 0:r.selectionStart)||0,(null==(a=Y.current)?void 0:a.selectionEnd)||0]);else if("compositionEnd"===n.source)return;Z(l),Y.current&&c(Y.current,e,i,l)};(0,t.useEffect)(function(){if(er){var e;null==(e=Y.current)||e.setSelectionRange.apply(e,(0,p.default)(er))}},[er]);var ec=es&&"".concat(P,"-out-of-range");return t.default.createElement(d,(0,a.default)({},M,{prefixCls:P,className:(0,n.default)($,ec),handleReset:function(e){Z(""),J(),Y.current&&c(Y.current,e,i)},value:ee,focused:U,triggerFocus:J,suffix:function(){var e=Number(eo)>0;if(j||el.show){var a=el.showFormatter?el.showFormatter({value:ee,count:eu,maxLength:eo}):"".concat(eu).concat(e?" / ".concat(eo):"");return t.default.createElement(t.default.Fragment,null,el.show&&t.default.createElement("span",{className:(0,n.default)("".concat(P,"-show-count-suffix"),(0,l.default)({},"".concat(P,"-show-count-has-suffix"),!!j),null==A?void 0:A.count),style:(0,r.default)({},null==B?void 0:B.count)},a),j)}return null}(),disabled:S,classes:I,classNames:A,styles:B,ref:q}),(u=(0,b.default)(e,["prefixCls","onPressEnter","addonBefore","addonAfter","prefix","suffix","allowClear","defaultValue","showCount","count","classes","htmlSize","styles","classNames","onClear"]),t.default.createElement("input",(0,a.default)({autoComplete:s},u,{onChange:function(e){ei(e,e.target.value,{source:"change"})},onFocus:function(e){K(!0),null==h||h(e)},onBlur:function(e){H.current&&(H.current=!1),K(!1),null==w||w(e)},onKeyDown:function(e){C&&"Enter"===e.key&&!H.current&&(H.current=!0,C(e)),null==E||E(e)},onKeyUp:function(e){"Enter"===e.key&&(H.current=!1),null==N||N(e)},className:(0,n.default)(P,(0,l.default)({},"".concat(P,"-disabled"),S),null==A?void 0:A.input),style:null==B?void 0:B.input,ref:Y,size:k,type:void 0===W?"text":W,onCompositionStart:function(e){V.current=!0,null==z||z(e)},onCompositionEnd:function(e){V.current=!1,ei(e,e.currentTarget.value,{source:"compositionEnd"}),null==D||D(e)}}))))});e.s(["default",0,w],175636);var C=e.i(611935),E=e.i(617206),N=e.i(753354);let O=e=>{let n;return"object"==typeof e&&(null==e?void 0:e.clearIcon)?n=e:e&&(n={clearIcon:t.default.createElement(N.default,null)}),n};e.s(["default",0,O],330683);var P=e.i(52956),S=e.i(242064),k=e.i(937328),$=e.i(321883),R=e.i(517455),j=e.i(62139),T=e.i(792812),F=e.i(249616);function W(e,n){let r=(0,t.useRef)([]),a=()=>{r.current.push(setTimeout(()=>{var t,n,r,a;(null==(t=e.current)?void 0:t.input)&&(null==(n=e.current)?void 0:n.input.getAttribute("type"))==="password"&&(null==(r=e.current)?void 0:r.input.hasAttribute("value"))&&(null==(a=e.current)||a.input.removeAttribute("value"))}))};return(0,t.useEffect)(()=>(n&&a(),()=>r.current.forEach(e=>{e&&clearTimeout(e)})),[]),a}e.s(["default",0,W],545719);var I=e.i(349942),A=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};let B=(0,t.forwardRef)((e,r)=>{let{prefixCls:a,bordered:l=!0,status:o,size:u,disabled:s,onBlur:i,onFocus:c,suffix:f,allowClear:d,addonAfter:p,addonBefore:m,className:v,style:g,styles:b,rootClassName:h,onChange:x,classNames:y,variant:N,_skipAddonWarning:B}=e,z=A(e,["prefixCls","bordered","status","size","disabled","onBlur","onFocus","suffix","allowClear","addonAfter","addonBefore","className","style","styles","rootClassName","onChange","classNames","variant","_skipAddonWarning"]),{getPrefixCls:D,direction:M,allowClear:_,autoComplete:L,className:U,style:K,classNames:V,styles:H}=(0,S.useComponentConfig)("input"),Y=D("input",a),q=(0,t.useRef)(null),J=(0,$.default)(Y),[G,Q,X]=(0,I.useSharedStyle)(Y,h),[Z]=(0,I.default)(Y,J),{compactSize:ee,compactItemClassnames:et}=(0,F.useCompactItemContext)(Y,M),en=(0,R.default)(e=>{var t;return null!=(t=null!=u?u:ee)?t:e}),er=t.default.useContext(k.default),{status:ea,hasFeedback:el,feedbackIcon:eo}=(0,t.useContext)(j.FormItemInputContext),eu=(0,P.getMergedStatus)(ea,o),es=!!(e.prefix||e.suffix||e.allowClear||e.showCount)||!!el;(0,t.useRef)(es);let ei=W(q,!0),ec=(el||f)&&t.default.createElement(t.default.Fragment,null,f,el&&eo),ef=O(null!=d?d:_),[ed,ep]=(0,T.default)("input",N,l);return G(Z(t.default.createElement(w,Object.assign({ref:(0,C.composeRef)(r,q),prefixCls:Y,autoComplete:L},z,{disabled:null!=s?s:er,onBlur:e=>{ei(),null==i||i(e)},onFocus:e=>{ei(),null==c||c(e)},style:Object.assign(Object.assign({},K),g),styles:Object.assign(Object.assign({},H),b),suffix:ec,allowClear:ef,className:(0,n.default)(v,h,X,J,et,U),onChange:e=>{ei(),null==x||x(e)},addonBefore:m&&t.default.createElement(E.default,{form:!0,space:!0},m),addonAfter:p&&t.default.createElement(E.default,{form:!0,space:!0},p),classNames:Object.assign(Object.assign(Object.assign({},y),V),{input:(0,n.default)({[`${Y}-sm`]:"small"===en,[`${Y}-lg`]:"large"===en,[`${Y}-rtl`]:"rtl"===M},null==y?void 0:y.input,V.input,Q),variant:(0,n.default)({[`${Y}-${ed}`]:ep},(0,P.getStatusClassNames)(Y,eu)),affixWrapper:(0,n.default)({[`${Y}-affix-wrapper-sm`]:"small"===en,[`${Y}-affix-wrapper-lg`]:"large"===en,[`${Y}-affix-wrapper-rtl`]:"rtl"===M},Q),wrapper:(0,n.default)({[`${Y}-group-rtl`]:"rtl"===M},Q),groupWrapper:(0,n.default)({[`${Y}-group-wrapper-sm`]:"small"===en,[`${Y}-group-wrapper-lg`]:"large"===en,[`${Y}-group-wrapper-rtl`]:"rtl"===M,[`${Y}-group-wrapper-${ed}`]:ep},(0,P.getStatusClassNames)(`${Y}-group-wrapper`,eu,el),Q)})}))))});e.s(["default",0,B],90635)},403541,e=>{"use strict";var t=e.i(617933);e.s(["genPresetColor",0,function(e,n){return t.PresetColors.reduce((t,r)=>{let a=e[`${r}1`],l=e[`${r}3`],o=e[`${r}6`],u=e[`${r}7`];return Object.assign(Object.assign({},t),n(r,{lightColor:a,lightBorderColor:l,darkColor:o,textColor:u}))},{})}],403541)},87789,e=>{"use strict";var t=e.i(271645),n=e.i(805484),r=e.i(494489),a=e.i(792812),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};let{TimePicker:o,RangePicker:u}=r.default,s=t.forwardRef((e,n)=>t.createElement(u,Object.assign({},e,{picker:"time",mode:void 0,ref:n}))),i=t.forwardRef((e,n)=>{var{addon:r,renderExtraFooter:u,variant:s,bordered:i}=e,c=l(e,["addon","renderExtraFooter","variant","bordered"]);let[f]=(0,a.default)("timePicker",s,i),d=t.useMemo(()=>u||r||void 0,[r,u]);return t.createElement(o,Object.assign({},c,{mode:void 0,ref:n,renderExtraFooter:d,variant:f}))}),c=(0,n.default)(i,"popupAlign",void 0,"picker");i._InternalPanelDoNotUseOrYouWillBeFired=c,i.RangePicker=s,i._InternalPanelDoNotUseOrYouWillBeFired=c,e.s(["TimePicker",0,i],87789)},232189,(e,t,n)=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},865156,(e,t,n)=>{"use strict";var r=e.r(232189);function a(){}function l(){}l.resetWarningCache=a,t.exports=function(){function e(e,t,n,a,l,o){if(o!==r){var u=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:l,resetWarningCache:a};return n.PropTypes=n,n}},745009,(e,t,n)=>{e.i(247167),t.exports=e.r(865156)()},211235,e=>{"use strict";var t=e.i(843476);e.s(["default",0,({value:e,onChange:n})=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("input",{type:"search",className:"form-control form-control-sm",placeholder:"Search","aria-controls":"DataTables_Table_0",value:e,onChange:e=>n(e.target.value)})})])},192898,e=>{"use strict";var t=e.i(271645);e.s(["useFilterDropdownSync",0,(e,n)=>{(0,t.useEffect)(()=>{if("u"<typeof document)return;let t=document.getElementById(e),r=t?.closest(".dropdown");if(!r)return;let a=()=>n();return r.addEventListener("show.bs.dropdown",a),()=>r.removeEventListener("show.bs.dropdown",a)},[e,n])}])},848135,e=>{"use strict";e.s(["formatAgeForListing",0,(e,t,n)=>{let r=null!=e?Number(e):void 0;if(null!=r&&Number.isFinite(r)){if(0===r){let e=null!=t?Number(t):0;return e>0?`${e} M`:null!=n&&Number.isFinite(Number(n))?`${Number(n)} D`:"0 Y"}return`${r} Y`}let a=null!=t?Number(t):0;return a>0?`${a} M`:null!=n&&Number.isFinite(Number(n))&&Number(n)>0?`${Number(n)} D`:void 0}])},216666,e=>{"use strict";var t=e.i(185233);let n=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");e.s(["openThermalTokenPrint",0,e=>{let r=e.hospitalName?.trim()||"JJM Hospital",a=window.open("","_blank","width=360,height=640,scrollbars=yes");if(!a)return void alert("Please allow pop-ups to print the token.");let l=e.tokenTitle?.trim()||"OPD Token",o=n(e.useVisitPrefix??!0?(0,t.formatTokenWithVisitPrefix)(e.tokenNo,e.visitType):String(e.tokenNo??"").trim()||"N/A"),u=(e.appointmentDateTime??"").trim().split(" - ").map(e=>e.trim()).filter(Boolean),s=u[0]?n(u[0]):"",i="number"==typeof e.paperWidthMm&&e.paperWidthMm>0?e.paperWidthMm:80,c="number"==typeof e.slipWidthMm&&e.slipWidthMm>0?Math.min(e.slipWidthMm,i):72,f=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>Token ${o}</title>
<style>
  @page {
    size: ${i}mm auto;
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
    max-width: ${c}mm;
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
    <div class="head">${n(r)}</div>
    <div class="sub-row${s?" sub-row--split":""}">
      <span class="sub-title">${n(l)}</span>
      ${s?`<span class="sub-date">${s}</span>`:""}
    </div>
    <hr class="rule"/>
    <div class="token">${o}</div>
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
</html>`;a.document.open(),a.document.write(f),a.document.close()}])},185233,e=>{"use strict";e.s(["formatTokenWithVisitPrefix",0,(e,t)=>{let n,r=String(e??"").trim();if(!r||"—"===r||"n/a"===r.toLowerCase())return"N/A";let a="emergency"===(n=(t??"").toLowerCase().replace(/\s+/g," ").trim())?"E":"mr"===n?"M":"follow-up-report"===n||"follow up report"===n||"followup-report"===n||"followup report"===n?"FR":"follow-up"===n||"follow up"===n||"followup"===n?"F":"O";return`${a}-${r}`}])}]);