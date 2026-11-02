(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,869267,e=>{"use strict";var t=e.i(843476),a=e.i(271645),s=e.i(522016),r=e.i(581949),n=e.i(822315),i=e.i(268540),l=e.i(773926),d=e.i(179945),o=e.i(216666);let c=["Created","InProgress","PayNow","Completed","Cancelled"],m=e=>{switch(e){case"InProgress":return"In progress";case"PayNow":return"Pay now";default:return e}},p=()=>{let[e,p]=(0,a.useState)([]),[u,h]=(0,a.useState)(!0),[x,f]=(0,a.useState)(""),[g,b]=(0,a.useState)(1),[N,y]=(0,a.useState)(20),[j,w]=(0,a.useState)(0),[v,k]=(0,a.useState)({}),[P,S]=(0,a.useState)(null),[A,T]=(0,a.useState)(!1),[C,_]=(0,a.useState)(""),[I,D]=(0,a.useState)(""),[M,$]=(0,a.useState)(!1),[R,L]=(0,a.useState)([]),[E,B]=(0,a.useState)(null),[U,W]=(0,a.useState)(!1),Y=(0,a.useCallback)(async()=>{if(l.API_BASE_URL)try{h(!0),f("");let e=await r.default.get(`${l.API_BASE_URL}/hospital/pharma-tokens`,{params:{page:g,limit:N}}),t=e.data?.data??{},a=Array.isArray(t?.tokens)?t.tokens:Array.isArray(t?.pharmaTokens)?t.pharmaTokens:Array.isArray(t?.list)?t.list:[],s=t?.pagination;if(s&&"object"==typeof s){let e="number"==typeof s.totalCount?s.totalCount:"number"==typeof s.total?s.total:void 0;w("number"==typeof e?e:a.length)}else w("number"==typeof t?.count?t.count:a.length);let i=a.map(e=>{let t=e.createdAt||e.createdDate||"",a=e.date?(0,n.default)(e.date).format("DD MMM YYYY"):t?(0,n.default)(t).format("DD MMM YYYY"):"—",s=e.pharmaTokenId??e.tokenNo??e.tokenNumber??e.tokenId??"—";return{id:e._id,Pharma_Token_ID:String(s),MRD:e.mrd||e.patient?.mrd||"—",Patient:e.patientName||e.patient?.name||"—",Phone:e.patientPhone||e.patient?.phone||"—",Age_Gender:e.patient?.age!=null||e.patient?.gender?`${e.patient?.age??"—"} / ${e.patient?.gender??"—"}`:"—",Status:e.status||"—",Date:a,_visitType:e.visitType,_createdAt:t||e.date}});p(i)}catch(e){f(e?.response?.data?.message||"Failed to load pharma tokens"),p([]),w(0)}finally{h(!1)}},[g,N]);(0,a.useEffect)(()=>{Y()},[Y]);let z=async e=>{if(e.preventDefault(),l.API_BASE_URL){if(!E?._id)return void _("Please select a patient.");try{T(!0),_("");let e=E.patientId??E._id;await r.default.post(`${l.API_BASE_URL}/hospital/pharma-tokens`,{patientId:e}),D(""),B(null),L([]),W(!1),b(1),await Y()}catch(e){_(e?.response?.data?.message||"Failed to create pharma token.")}finally{T(!1)}}},F=async(e,t)=>{if(l.API_BASE_URL&&e)try{S(e),await r.default.patch(`${l.API_BASE_URL}/hospital/pharma-tokens/${e}`,{status:t}),k(a=>({...a,[e]:t})),p(a=>a.map(a=>a.id===e?{...a,Status:t}:a))}catch(e){alert(e?.response?.data?.message||"Failed to update status.")}finally{S(null)}},O=(0,a.useCallback)(async e=>{if(!l.API_BASE_URL)return;let t=e.trim();if(!t)return void L([]);try{$(!0);let e=await r.default.get(`${l.API_BASE_URL}/hospital/patients`,{params:{search:t,limit:10}}),a=e.data?.data??{},s=Array.isArray(a?.patients)?a.patients:Array.isArray(a?.list)?a.list:[];L(s)}catch{L([])}finally{$(!1)}},[]);(0,a.useEffect)(()=>{let e=setTimeout(()=>{O(I)},300);return()=>clearTimeout(e)},[I,O]);let G=[{title:"Pharma Token ID",dataIndex:"Pharma_Token_ID",render:e=>(0,t.jsx)("span",{className:"text-dark fw-semibold",children:e})},{title:"MRD",dataIndex:"MRD",render:e=>(0,t.jsx)("span",{className:"text-dark",children:e})},{title:"Patient Name",dataIndex:"Patient",render:(e,a)=>(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"text-dark fw-medium",children:a.Patient}),(0,t.jsx)("div",{className:"text-dark fs-13",children:a.Phone})]})},{title:"Age / Gender",dataIndex:"Age_Gender",render:e=>(0,t.jsx)("span",{className:"text-dark",children:e})},{title:"Date",dataIndex:"Date",render:e=>(0,t.jsx)("span",{className:"text-dark",children:e})},{title:"Status",dataIndex:"Status",width:148,render:(e,a)=>{let r=v[a.id]??a.Status,n=(e=>{let t=(e??"").trim();if(!t)return"Created";if(c.includes(t))return t;let a=t.toLowerCase().replace(/\s+/g,"");return"inprogress"===a||"in-progress"===a?"InProgress":"paynow"===a||"pay-now"===a?"PayNow":"completed"===a?"Completed":"cancelled"===a||"canceled"===a?"Cancelled":"Created"})("—"===r?void 0:r),i=P===a.id;return(0,t.jsx)("div",{className:"dropdown",onClick:e=>e.stopPropagation(),children:i?(0,t.jsxs)("span",{className:"d-inline-flex align-items-center gap-2 text-muted",children:[(0,t.jsx)("span",{className:"spinner-border spinner-border-sm",role:"status"}),(0,t.jsx)("span",{className:"visually-hidden",children:"Updating status"})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("button",{type:"button",className:`btn btn-sm fs-13 badge ${(e=>{switch(e){case"Created":return"badge-soft-primary text-primary";case"InProgress":return"badge-soft-warning text-dark";case"PayNow":return"badge-soft-info text-info";case"Completed":return"badge-soft-success text-success";case"Cancelled":return"badge-soft-danger text-danger";default:return"badge-soft-secondary text-secondary"}})(n)} rounded fw-medium dropdown-toggle`,"data-bs-toggle":"dropdown","aria-expanded":"false","aria-label":"Pharma appointment status",title:n,children:m(n)}),(0,t.jsx)("ul",{className:"dropdown-menu",children:c.map(e=>(0,t.jsx)("li",{children:(0,t.jsx)(s.default,{className:"dropdown-item",href:"#",onClick:t=>{if(t.preventDefault(),i||e===n)return;F(a.id,e);let s=t.currentTarget.closest(".dropdown");if(s){let e=s.querySelector('[data-bs-toggle="dropdown"]'),t=s.querySelector(".dropdown-menu");e&&t&&(e.setAttribute("aria-expanded","false"),e.classList.remove("show"),t.classList.remove("show"))}},children:m(e)})},e))})]})})}},{title:"",dataIndex:"actions",render:(e,a)=>(0,t.jsx)("button",{type:"button",className:"btn btn-link text-dark p-0 border-0",onClick:e=>{e.stopPropagation(),(0,o.openThermalTokenPrint)({caseId:String(a?.Pharma_Token_ID??""),tokenNo:a?.Pharma_Token_ID??"—",visitType:String(a?._visitType??""),tokenTitle:"Pharma",useVisitPrefix:!1,paperWidthMm:58,slipWidthMm:50,patientName:String(a?.Patient??""),appointmentDateTime:String(a?.Date??""),doctorName:"Pharmacy Counter"})},title:"Print token (thermal printer)","aria-label":"Print token for thermal printer",children:(0,t.jsx)("i",{className:"ti ti-printer fs-16"})})}];return(0,t.jsxs)("div",{className:"page-wrapper",children:[(0,t.jsxs)("div",{className:"content",children:[(0,t.jsxs)("div",{className:"d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom",children:[(0,t.jsx)("div",{className:"flex-grow-1",children:(0,t.jsxs)("h4",{className:"fw-semibold mb-0",children:["Pharma Appointments",(0,t.jsxs)("span",{className:"badge badge-soft-primary fw-medium border py-1 px-2 border-primary fs-13 ms-2",children:["Total : ",j]})]})}),(0,t.jsx)("div",{className:"text-end d-flex align-items-center flex-wrap justify-content-end gap-2",children:(0,t.jsxs)(s.default,{href:d.all_routes.pharmaTokenQueue,target:"_blank",rel:"noopener noreferrer",className:"btn btn-outline-primary fs-13 btn-md",children:[(0,t.jsx)("i",{className:"ti ti-list-details me-1"}),"Queue"]})})]}),(0,t.jsx)("div",{className:"card border shadow-none mb-3",children:(0,t.jsxs)("div",{className:"card-body p-3 p-md-4",children:[(0,t.jsx)("h5",{className:"fw-semibold mb-3 fs-16",children:"Create pharma token"}),(0,t.jsxs)("form",{onSubmit:z,children:[C?(0,t.jsx)("div",{className:"alert alert-danger mb-3",role:"alert",children:C}):null,(0,t.jsxs)("div",{className:"row g-3",children:[(0,t.jsxs)("div",{className:"col-12",children:[(0,t.jsxs)("label",{className:"form-label mb-1 fw-medium",children:["Search patient ",(0,t.jsx)("span",{className:"text-danger ms-1",children:"*"})]}),(0,t.jsxs)("div",{className:"position-relative",children:[(0,t.jsx)("input",{type:"text",className:"form-control",placeholder:"Search by name / phone / MRD",value:I,onChange:e=>{D(e.target.value),W(!0),B(null)},onFocus:()=>W(!0)}),U&&I.trim()?(0,t.jsx)("div",{className:"dropdown-menu show w-100 mt-1 p-0",style:{maxHeight:"16rem",overflowY:"auto",position:"absolute"},children:M?(0,t.jsx)("div",{className:"px-3 py-2 text-muted",children:"Searching..."}):R.length>0?R.map(e=>(0,t.jsxs)("button",{type:"button",className:"dropdown-item py-2",onClick:()=>{B(e),D([e.name,e.mrd?`(${e.mrd})`:""].filter(Boolean).join(" ")),W(!1)},children:[(0,t.jsx)("div",{className:"fw-medium text-dark",children:e.name||"—"}),(0,t.jsxs)("div",{className:"fs-12 text-muted",children:["MRD: ",e.mrd||"—"," | Phone: ",e.phone||"—"]})]},e._id)):(0,t.jsx)("div",{className:"px-3 py-2 text-muted",children:"No patients found"})}):null]})]}),E?(0,t.jsx)("div",{className:"col-12",children:(0,t.jsxs)("div",{className:"border rounded p-3 bg-light",children:[(0,t.jsx)("h6",{className:"mb-2 fw-semibold fs-14",children:"Selected patient"}),(0,t.jsxs)("div",{className:"row g-2",children:[(0,t.jsxs)("div",{className:"col-sm-6",children:[(0,t.jsx)("div",{className:"text-muted fs-12",children:"Name"}),(0,t.jsx)("div",{className:"text-dark",children:E.name||"—"})]}),(0,t.jsxs)("div",{className:"col-sm-6",children:[(0,t.jsx)("div",{className:"text-muted fs-12",children:"MRD"}),(0,t.jsx)("div",{className:"text-dark",children:E.mrd||"—"})]}),(0,t.jsxs)("div",{className:"col-sm-6",children:[(0,t.jsx)("div",{className:"text-muted fs-12",children:"Phone"}),(0,t.jsx)("div",{className:"text-dark",children:E.phone||"—"})]}),(0,t.jsxs)("div",{className:"col-sm-6",children:[(0,t.jsx)("div",{className:"text-muted fs-12",children:"Age / Gender"}),(0,t.jsxs)("div",{className:"text-dark",children:[null!=E.age?E.age:"—"," /"," ",E.gender||"—"]})]})]})]})}):null,(0,t.jsx)("div",{className:"col-12",children:(0,t.jsxs)("div",{className:"d-flex flex-column flex-sm-row align-items-stretch align-items-sm-center justify-content-sm-end gap-2",children:[(0,t.jsx)("button",{type:"button",className:"btn btn-light btn-md order-2 order-sm-1",onClick:()=>{D(""),B(null),L([]),W(!1),_("")},children:"Clear"}),(0,t.jsx)("button",{type:"submit",className:"btn btn-primary btn-md order-1 order-sm-2",disabled:A,children:A?"Creating...":"Create token"})]})})]})]})]})}),x&&(0,t.jsxs)("div",{className:"alert alert-danger mb-3",role:"alert",children:[(0,t.jsx)("strong",{children:"Error:"})," ",x]}),(0,t.jsx)("div",{className:"table-responsive",children:u?(0,t.jsxs)("div",{className:"text-center p-5",children:[(0,t.jsx)("div",{className:"spinner-border text-primary",role:"status",children:(0,t.jsx)("span",{className:"visually-hidden",children:"Loading..."})}),(0,t.jsx)("p",{className:"mt-2 text-muted",children:"Loading pharma tokens..."})]}):(0,t.jsx)(i.default,{columns:G,dataSource:e,Selection:!1,searchText:"",total:j,currentPage:g,pageSize:N,onPaginationChange:(e,t)=>{b(e),y(t)}})})]}),(0,t.jsx)("div",{className:"footer text-center bg-white p-2 border-top",children:(0,t.jsxs)("p",{className:"text-dark mb-0",children:["2025 ©"," ",(0,t.jsx)(s.default,{href:"#",className:"link-primary",children:"Preclinic"}),", All Rights Reserved"]})})]})};e.s(["default",0,function(){return(0,t.jsx)("div",{children:(0,t.jsx)(p,{})})}],869267)},216666,e=>{"use strict";var t=e.i(185233);let a=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");e.s(["openThermalTokenPrint",0,e=>{let s=e.hospitalName?.trim()||"JJM Hospital",r=window.open("","_blank","width=360,height=640,scrollbars=yes");if(!r)return void alert("Please allow pop-ups to print the token.");let n=e.tokenTitle?.trim()||"OPD Token",i=a(e.useVisitPrefix??!0?(0,t.formatTokenWithVisitPrefix)(e.tokenNo,e.visitType):String(e.tokenNo??"").trim()||"N/A"),l=(e.appointmentDateTime??"").trim().split(" - ").map(e=>e.trim()).filter(Boolean),d=l[0]?a(l[0]):"",o="number"==typeof e.paperWidthMm&&e.paperWidthMm>0?e.paperWidthMm:80,c="number"==typeof e.slipWidthMm&&e.slipWidthMm>0?Math.min(e.slipWidthMm,o):72,m=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>Token ${i}</title>
<style>
  @page {
    size: ${o}mm auto;
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
    <div class="head">${a(s)}</div>
    <div class="sub-row${d?" sub-row--split":""}">
      <span class="sub-title">${a(n)}</span>
      ${d?`<span class="sub-date">${d}</span>`:""}
    </div>
    <hr class="rule"/>
    <div class="token">${i}</div>
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
</html>`;r.document.open(),r.document.write(m),r.document.close()}])},185233,e=>{"use strict";e.s(["formatTokenWithVisitPrefix",0,(e,t)=>{let a,s=String(e??"").trim();if(!s||"—"===s||"n/a"===s.toLowerCase())return"N/A";let r="emergency"===(a=(t??"").toLowerCase().replace(/\s+/g," ").trim())?"E":"mr"===a?"M":"follow-up-report"===a||"follow up report"===a||"followup-report"===a||"followup report"===a?"FR":"follow-up"===a||"follow up"===a||"followup"===a?"F":"O";return`${r}-${s}`}])}]);