(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,857006,e=>{"use strict";var t=e.i(843476),r=e.i(271645),a=e.i(618566),s=e.i(268540),n=e.i(522016),i=e.i(581949),l=e.i(822315),o=e.i(773926),d=e.i(848135),c=e.i(179945);let m=({reportData:e,onClose:a})=>{let s=(0,r.useRef)(null),n=(0,r.useRef)(a);n.current=a;let i=(0,r.useMemo)(()=>[e.sessionId??"",e.reportHtml??"",e.tokenDate??""].join("|"),[e.sessionId,e.reportHtml,e.tokenDate]);(0,r.useEffect)(()=>{let t=!1;return(()=>{if(!s.current||t)return;let r=document.createElement("iframe");r.setAttribute("title","X-ray report print"),r.style.cssText="position:fixed;right:0;bottom:0;width:0;height:0;border:0;opacity:0;pointer-events:none;",document.body.appendChild(r);let a=r.contentDocument??r.contentWindow?.document,i=r.contentWindow;if(!a||!i)return r.remove();if(t)return;let l=`
        <!DOCTYPE html>
        <html>
          <head>
            <title>X-Ray Report - ${e.sessionId||"Xray"}</title>
            <style>
              * { margin: 0; padding: 0; box-sizing: border-box; }
              body {
                margin: 0;
                padding: 2px 14px;
                font-family: Tahoma, Arial, sans-serif;
                font-size: 16px;
                color: #000;
                background: #fff;
                line-height: 1.4;
              }
              .receipt-container { width: 100%; max-width: 100%; margin: 0 auto; padding: 0 12px; background: #fff; }
              .header-spacer {
                min-height: 70px;
                margin-bottom: 10px;
                padding-bottom: 8px;
              }
              .content-box { border: none; padding: 8px 12px 0 12px; margin-bottom: 12px; }
              .patient-details-box { margin-bottom: 10px; padding-bottom: 8px; }
              .patient-info-table { width: 100%; border-collapse: collapse; font-size: 15px; table-layout: fixed; }
              .patient-info-table td { border: 1px solid #000; padding: 4px 8px; vertical-align: middle; }
              .info-label-cell { background-color: #f8f9fa; font-weight: 600; white-space: nowrap; width: 18%; }
              .info-value-cell { background-color: #ffffff; font-weight: 500; width: 40%; }
              .info-value-cell-narrow { width: 24%; }
              .section { margin-bottom: 12px; }
              .section-title {
                font-size: 14px;
                font-weight: bold;
                border-bottom: 1px solid #000;
                padding-bottom: 3px;
                margin-bottom: 8px;
              }
              .xray-report-title {
                text-align: center;
                font-size: 16px;
                font-weight: bold;
                margin-bottom: 10px;
                padding-bottom: 4px;
                border-bottom: 1px solid #000;
              }
              .xray-report-html {
                font-size: 15px;
                font-weight: 500;
                color: #000;
                word-break: break-word;
                line-height: 1.55;
                overflow: visible;
              }
              .xray-report-html * { color: #000 !important; }
              .xray-report-html p { margin: 0.5em 0; }
              .xray-report-html ol,
              .xray-report-html ul {
                margin: 0.5em 0;
                padding-left: 2em;
              }
              .xray-report-html li {
                margin-bottom: 0.35em;
                padding-left: 0.25em;
              }
              .xray-report-html blockquote {
                margin: 0.5em 0;
                padding-left: 1em;
                border-left: 2px solid #ccc;
              }
              .xray-report-html strong, .xray-report-html b { font-weight: bold; }
              .xray-report-html em, .xray-report-html i { font-style: italic; }
              .xray-report-html u { text-decoration: underline; }
              .report-end {
                margin-top: 24px;
                padding-top: 8px;
                border-top: 1px solid #000;
                text-align: center;
                font-size: 13px;
                font-weight: 600;
                color: #000;
              }
              @media print {
                @page { margin: 12mm 12mm 12mm 14mm; size: A4; }
                body { padding: 0; background: white !important; }
                .receipt-container { max-width: none; width: 100%; padding: 0; }
                .content-box { padding-left: 0; padding-right: 0; }
              }
            </style>
          </head>
          <body>
            ${s.current.innerHTML}
          </body>
        </html>
      `;a.open(),a.write(l),a.close(),window.setTimeout(()=>{if(!t)try{i.focus(),i.print()}finally{window.setTimeout(()=>{t||(r.remove(),n.current?.())},250)}},250)})(),()=>{t=!0}},[i,e.sessionId]);let o=e.patientName?.trim()||"—",d=null!=e.age&&""!==String(e.age).trim()?String(e.age):"—",c=e.gender?.trim()||"—",m="—"!==c?`${d} / ${c}`:d,p=[e.procedureName,e.department].filter(e=>e?.trim()).join(" · "),u=e.procedureName?.trim()?`Xray of ${e.procedureName.trim()}`:"Xray Report";return(0,t.jsx)("div",{style:{display:"none"},children:(0,t.jsxs)("div",{ref:s,className:"receipt-container",children:[(0,t.jsx)("div",{className:"header-spacer","aria-hidden":"true"}),(0,t.jsxs)("div",{className:"content-box",children:[(0,t.jsx)("div",{className:"patient-details-box",children:(0,t.jsx)("table",{className:"patient-info-table",children:(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"info-label-cell",children:"MRD No.:"}),(0,t.jsx)("td",{className:"info-value-cell",children:e.mrd??"—"}),(0,t.jsx)("td",{className:"info-label-cell",children:"Session ID:"}),(0,t.jsx)("td",{className:"info-value-cell info-value-cell-narrow",children:e.sessionId??"—"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"info-label-cell",children:"Patient Name:"}),(0,t.jsx)("td",{className:"info-value-cell",children:o}),(0,t.jsx)("td",{className:"info-label-cell",children:"Age / Gender:"}),(0,t.jsx)("td",{className:"info-value-cell info-value-cell-narrow",children:m})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"info-label-cell",children:"Procedure:"}),(0,t.jsx)("td",{className:"info-value-cell",children:p||"—"}),(0,t.jsx)("td",{className:"info-label-cell",children:"Date:"}),(0,t.jsx)("td",{className:"info-value-cell info-value-cell-narrow",children:(e=>{if(!e?.trim())return"—";let t=(0,l.default)(e);return t.isValid()?t.format("DD MMM YYYY"):"—"})(e.tokenDate)})]})]})})}),(0,t.jsxs)("div",{className:"section",children:[(0,t.jsx)("div",{className:"xray-report-title",children:u}),(0,t.jsx)("div",{className:"xray-report-html",dangerouslySetInnerHTML:{__html:e.reportHtml??""}})]}),(0,t.jsx)("div",{className:"report-end",children:"— End of report —"})]})]})})},p=e=>{let t=e.source?.trim().toLowerCase();return"ipd"===t?e.ipdAppointment??void 0:"daycare"===t?e.daycareAppointment??void 0:e.daycareAppointment??e.ipdAppointment??void 0},u=()=>{let e=(0,a.useRouter)(),[u,x]=(0,r.useState)("today"),[f,h]=(0,r.useState)([]),[b,g]=(0,r.useState)(!1),[y,N]=(0,r.useState)(""),[j,v]=(0,r.useState)(1),[w,k]=(0,r.useState)(20),[S,C]=(0,r.useState)(0),[D,P]=(0,r.useState)(null),[$,I]=(0,r.useState)(null),[A,T]=(0,r.useState)(!1),[M,_]=(0,r.useState)(null);(0,r.useEffect)(()=>{v(1)},[u]);let R=(0,r.useCallback)(async()=>{if(o.API_BASE_URL)try{var e;let t;g(!0),N("");let r={page:j,limit:w};"today"===u&&(r.date=(0,l.default)().format("YYYY-MM-DD"));let a=await i.default.get(`${o.API_BASE_URL}/hospital/xray-sessions`,{params:r});if(!(a.data?.success===!0||a.data?.code===200||a.status>=200&&a.status<300&&a.data?.data)){h([]),C(0),N(a.data?.message??"Failed to load X-ray sessions.");return}let s=a.data?.data??{},n=Array.isArray(s.sessions)?s.sessions:[];h(n),C((e=n.length,t=s?.pagination,"number"==typeof t?.totalCount?t.totalCount:"number"==typeof t?.total?t.total:e))}catch(e){N(i.default.isAxiosError(e)&&"string"==typeof e.response?.data?.message?e.response.data.message:"Failed to load X-ray sessions."),h([]),C(0)}finally{g(!1)}},[u,j,w]);(0,r.useEffect)(()=>{R()},[R]);let L=e=>{x(e),v(1)},X=async(e,t)=>{if(o.API_BASE_URL)try{P(e),await i.default.put(`${o.API_BASE_URL}/hospital/xray-session/${e}`,{status:t}),h(r=>r.map(r=>r._id===e?{...r,status:t}:r))}catch{}finally{P(null)}},Y=async e=>{if(o.API_BASE_URL)try{_(e);let t=await i.default.get(`${o.API_BASE_URL}/hospital/xray-session/${e}`);if(!(t.data?.success===!0||t.data?.code===200||t.status>=200&&t.status<300&&t.data?.data))return void alert(t.data?.message??"Failed to load X-ray report.");let r=t.data?.data?.session??t.data?.data;if(!r?.reportHtml?.trim())return void alert("No report available to print. Please save the report first.");I({sessionId:r.sessionId,mrd:r.patient?.mrd,patientName:r.patient?.name,age:((e,t,r)=>{let a=null!=e?Number(e):void 0;if(null!=a&&Number.isFinite(a)){if(0===a){let e=null!=t?Number(t):0;return e>0?`${e} ${1===e?"Month":"Months"}`:null!=r?`${r} ${1===Number(r)?"Day":"Days"}`:void 0}return`${a} ${1===a?"Year":"Years"}`}let s=null!=t?Number(t):0;return s>0?`${s} ${1===s?"Month":"Months"}`:null!=r?`${r} ${1===Number(r)?"Day":"Days"}`:void 0})(r.patient?.age,r.patient?.months,r.patient?.days),gender:r.patient?.gender,procedureName:r.procedure?.procedureName,department:r.procedure?.department,tokenDate:r.tokenDate,reportHtml:r.reportHtml}),T(!0)}catch{alert("Failed to load X-ray report for printing.")}finally{_(null)}},E=f.map(e=>{var t;let r,a,s=[(0,d.formatAgeForListing)(e.patient?.age,e.patient?.months,e.patient?.days),e.patient?.gender??""].filter(Boolean).join(", "),n=e.tokenDate?(0,l.default)(e.tokenDate).format("DD MMM YYYY"):"—",i=p(e),o=(r=p(e),Number(r?.totalPrice??0)||0),c=i?.paymentStatus?.trim()||"Unpaid";return{key:e._id,sessionId:e.sessionId??"—",patientName:e.patient?.name??"—",mrd:e.patient?.mrd??"—",meta:s||void 0,procedureName:e.procedure?.procedureName??"—",department:e.procedure?.department??"—",tokenDate:n,source:e.source,totalAmount:o,paymentStatus:c,status:(t=e.status,(a=t?.trim())&&"—"!==a?"inprogress"===a.toLowerCase()||"in-progress"===a.toLowerCase()?"In Progress":"pending"===a.toLowerCase()?"Pending":a:"Pending")}});return(0,t.jsxs)("div",{className:"page-wrapper",children:[(0,t.jsxs)("div",{className:"content",children:[(0,t.jsxs)("div",{className:"d-flex align-items-sm-center flex-sm-row flex-column gap-2 mb-3 pb-3 border-bottom",children:[(0,t.jsx)("div",{className:"flex-grow-1",children:(0,t.jsxs)("h4",{className:"fw-bold mb-0",children:["Xrays",(0,t.jsxs)("span",{className:"badge badge-soft-primary border border-primary fs-13 fw-medium ms-2",children:["Total : ",b?"…":S]})]})}),(0,t.jsx)("div",{className:"text-end d-flex align-items-center flex-wrap justify-content-end gap-2",children:(0,t.jsxs)(n.default,{href:c.all_routes.xrayTokenQueue,target:"_blank",rel:"noopener noreferrer",className:"btn btn-outline-primary fs-13 btn-md",children:[(0,t.jsx)("i",{className:"ti ti-list-details me-1"}),"Queue"]})})]}),(0,t.jsx)("div",{className:"d-flex align-items-center mb-3",children:(0,t.jsxs)("ul",{className:"nav nav-tabs border-0 mb-0 flex-shrink-0",children:[(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)("button",{type:"button",className:`nav-link${"all"===u?" active":""}`,onClick:()=>L("all"),children:"All Xrays"})}),(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)("button",{type:"button",className:`nav-link${"today"===u?" active":""}`,onClick:()=>L("today"),children:"Today's Xrays"})})]})}),y?(0,t.jsx)("div",{className:"alert alert-danger mb-3",role:"alert",children:y}):null,(0,t.jsx)("div",{className:"table-responsive",children:b?(0,t.jsx)("p",{className:"text-muted mb-0",children:"Loading X-ray sessions…"}):(0,t.jsx)(s.default,{columns:[{title:"Session ID",dataIndex:"sessionId",sorter:!1,showSorterTooltip:!1},{title:"MRD",dataIndex:"mrd",sorter:!1,showSorterTooltip:!1},{title:"Patient",dataIndex:"patientName",sorter:!1,showSorterTooltip:!1,render:(e,r)=>(0,t.jsxs)("div",{className:"text-dark",children:[(0,t.jsx)("div",{className:"fw-semibold fs-14 text-truncate",children:r.patientName}),r.meta?(0,t.jsx)("div",{className:"fs-13 text-muted text-truncate",children:r.meta}):null]})},{title:"Procedure",dataIndex:"procedureName",sorter:!1,showSorterTooltip:!1,render:(e,r)=>(0,t.jsxs)("div",{className:"text-dark",children:[(0,t.jsx)("div",{className:"fw-medium fs-14 text-truncate",children:r.procedureName}),(0,t.jsx)("div",{className:"fs-13 text-muted text-truncate",children:r.tokenDate}),"—"!==r.department?(0,t.jsx)("div",{className:"fs-13 text-muted text-truncate",children:r.department}):null]})},{title:"Source",dataIndex:"source",sorter:!1,showSorterTooltip:!1,render:(e,r)=>{var a;let s,n=String(r.source??"").toLowerCase();return(0,t.jsx)("span",{className:`badge border px-2 py-1 fs-13 fw-medium ${"ipd"===n?"badge-soft-primary border-primary":"daycare"===n?"badge-soft-info border-info":"badge-soft-secondary border-secondary"}`,children:(a=r.source,"ipd"===(s=a?.trim().toLowerCase())?"IPD":"daycare"===s?"Daycare":a?.trim()||"—")})}},{title:"Total",dataIndex:"totalAmount",sorter:!1,showSorterTooltip:!1,render:(e,r)=>{let a=r.paymentStatus||"Unpaid";return(0,t.jsxs)("div",{className:"d-flex align-items-center gap-2",children:[(0,t.jsxs)("span",{className:"fw-semibold text-dark",children:["₹",(Number(e)||0).toFixed(2)]}),(0,t.jsx)("span",{className:`d-inline-flex align-items-center justify-content-center rounded-circle ${"Paid"===a?"bg-success":"bg-warning"}`,style:{width:"15px",height:"15px",minWidth:"15px"},children:(0,t.jsx)("i",{className:"ti ti-check fs-10 text-white"})})]})}},{title:"Status",dataIndex:"status",sorter:!1,showSorterTooltip:!1,render:(e,r)=>{var a;let s="Completed"===(a=r.status)?{className:"text-success",backgroundColor:"#f0f9f2",borderColor:"#d9efdf"}:"Pending"===a?{className:"text-primary",backgroundColor:"#eef4fb",borderColor:"#c5d9f0"}:{className:"text-dark",backgroundColor:"#fffdf2",borderColor:"#fff3cd"};return(0,t.jsxs)("select",{className:`form-select form-select-sm ${s.className}`,style:{width:"auto",minWidth:"7rem",backgroundColor:s.backgroundColor,borderColor:s.borderColor},value:r.status,disabled:D===r.key,onChange:e=>X(r.key,e.target.value),"aria-label":"Update status",children:[(0,t.jsx)("option",{value:"Pending",children:"Pending"}),(0,t.jsx)("option",{value:"In Progress",children:"In Progress"}),(0,t.jsx)("option",{value:"Completed",children:"Completed"})]})}},{title:"",dataIndex:"actions",sorter:!1,showSorterTooltip:!1,width:110,render:(r,a)=>{let s=a.key;return(0,t.jsxs)("div",{className:"d-flex align-items-center justify-content-end gap-2",children:[(0,t.jsx)("button",{type:"button",className:"btn btn-sm btn-outline-secondary d-inline-flex align-items-center justify-content-center",title:"Open X-ray details","aria-label":"Open X-ray details",onClick:t=>{t.stopPropagation(),e.push(`${c.all_routes.xrayDetails}/${s}`)},children:(0,t.jsx)("i",{className:"ti ti-edit fs-16"})}),(0,t.jsx)("button",{type:"button",className:"btn btn-sm btn-outline-primary d-inline-flex align-items-center justify-content-center",title:"Print X-ray report","aria-label":"Print X-ray report",disabled:M===s,onClick:e=>{e.stopPropagation(),Y(s)},children:M===s?(0,t.jsx)("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}):(0,t.jsx)("i",{className:"ti ti-printer fs-16"})})]})}}],dataSource:E,Selection:!1,searchText:"",total:S,currentPage:j,pageSize:w,onPaginationChange:(e,t)=>{v(e),k(t)}})}),A&&$?(0,t.jsx)(m,{reportData:$,onClose:()=>{T(!1),I(null)}}):null]}),(0,t.jsx)("div",{className:"footer text-center bg-white p-2 border-top",children:(0,t.jsxs)("p",{className:"text-dark mb-0",children:["2025 ©",(0,t.jsx)(n.default,{href:"#",className:"link-primary",children:"Preclinic"}),", All Rights Reserved"]})})]})};e.s(["default",0,function(){return(0,t.jsx)("div",{children:(0,t.jsx)(u,{})})}],857006)},848135,e=>{"use strict";e.s(["formatAgeForListing",0,(e,t,r)=>{let a=null!=e?Number(e):void 0;if(null!=a&&Number.isFinite(a)){if(0===a){let e=null!=t?Number(t):0;return e>0?`${e} M`:null!=r&&Number.isFinite(Number(r))?`${Number(r)} D`:"0 Y"}return`${a} Y`}let s=null!=t?Number(t):0;return s>0?`${s} M`:null!=r&&Number.isFinite(Number(r))&&Number(r)>0?`${Number(r)} D`:void 0}])}]);