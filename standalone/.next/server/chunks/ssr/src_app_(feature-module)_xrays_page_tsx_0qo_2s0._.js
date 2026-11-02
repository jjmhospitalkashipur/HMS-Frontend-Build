module.exports=[503951,a=>{"use strict";var b=a.i(187924),c=a.i(572131),d=a.i(50944),e=a.i(134416),f=a.i(238246),g=a.i(83490),h=a.i(951772),i=a.i(42854),j=a.i(780590),k=a.i(190992);let l=({reportData:a,onClose:d})=>{let e=(0,c.useRef)(null),f=(0,c.useRef)(d);f.current=d;let g=(0,c.useMemo)(()=>[a.sessionId??"",a.reportHtml??"",a.tokenDate??""].join("|"),[a.sessionId,a.reportHtml,a.tokenDate]);(0,c.useEffect)(()=>{let b=!1;return(()=>{if(!e.current||b)return;let c=document.createElement("iframe");c.setAttribute("title","X-ray report print"),c.style.cssText="position:fixed;right:0;bottom:0;width:0;height:0;border:0;opacity:0;pointer-events:none;",document.body.appendChild(c);let d=c.contentDocument??c.contentWindow?.document,g=c.contentWindow;if(!d||!g)return c.remove();if(b)return;let h=`
        <!DOCTYPE html>
        <html>
          <head>
            <title>X-Ray Report - ${a.sessionId||"Xray"}</title>
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
            ${e.current.innerHTML}
          </body>
        </html>
      `;d.open(),d.write(h),d.close(),window.setTimeout(()=>{if(!b)try{g.focus(),g.print()}finally{window.setTimeout(()=>{b||(c.remove(),f.current?.())},250)}},250)})(),()=>{b=!0}},[g,a.sessionId]);let i=a.patientName?.trim()||"—",j=null!=a.age&&""!==String(a.age).trim()?String(a.age):"—",k=a.gender?.trim()||"—",l="—"!==k?`${j} / ${k}`:j,m=[a.procedureName,a.department].filter(a=>a?.trim()).join(" · "),n=a.procedureName?.trim()?`Xray of ${a.procedureName.trim()}`:"Xray Report";return(0,b.jsx)("div",{style:{display:"none"},children:(0,b.jsxs)("div",{ref:e,className:"receipt-container",children:[(0,b.jsx)("div",{className:"header-spacer","aria-hidden":"true"}),(0,b.jsxs)("div",{className:"content-box",children:[(0,b.jsx)("div",{className:"patient-details-box",children:(0,b.jsx)("table",{className:"patient-info-table",children:(0,b.jsxs)("tbody",{children:[(0,b.jsxs)("tr",{children:[(0,b.jsx)("td",{className:"info-label-cell",children:"MRD No.:"}),(0,b.jsx)("td",{className:"info-value-cell",children:a.mrd??"—"}),(0,b.jsx)("td",{className:"info-label-cell",children:"Session ID:"}),(0,b.jsx)("td",{className:"info-value-cell info-value-cell-narrow",children:a.sessionId??"—"})]}),(0,b.jsxs)("tr",{children:[(0,b.jsx)("td",{className:"info-label-cell",children:"Patient Name:"}),(0,b.jsx)("td",{className:"info-value-cell",children:i}),(0,b.jsx)("td",{className:"info-label-cell",children:"Age / Gender:"}),(0,b.jsx)("td",{className:"info-value-cell info-value-cell-narrow",children:l})]}),(0,b.jsxs)("tr",{children:[(0,b.jsx)("td",{className:"info-label-cell",children:"Procedure:"}),(0,b.jsx)("td",{className:"info-value-cell",children:m||"—"}),(0,b.jsx)("td",{className:"info-label-cell",children:"Date:"}),(0,b.jsx)("td",{className:"info-value-cell info-value-cell-narrow",children:(a=>{if(!a?.trim())return"—";let b=(0,h.default)(a);return b.isValid()?b.format("DD MMM YYYY"):"—"})(a.tokenDate)})]})]})})}),(0,b.jsxs)("div",{className:"section",children:[(0,b.jsx)("div",{className:"xray-report-title",children:n}),(0,b.jsx)("div",{className:"xray-report-html",dangerouslySetInnerHTML:{__html:a.reportHtml??""}})]}),(0,b.jsx)("div",{className:"report-end",children:"— End of report —"})]})]})})},m=a=>{let b=a.source?.trim().toLowerCase();return"ipd"===b?a.ipdAppointment??void 0:"daycare"===b?a.daycareAppointment??void 0:a.daycareAppointment??a.ipdAppointment??void 0},n=()=>{let a=(0,d.useRouter)(),[n,o]=(0,c.useState)("today"),[p,q]=(0,c.useState)([]),[r,s]=(0,c.useState)(!1),[t,u]=(0,c.useState)(""),[v,w]=(0,c.useState)(1),[x,y]=(0,c.useState)(20),[z,A]=(0,c.useState)(0),[B,C]=(0,c.useState)(null),[D,E]=(0,c.useState)(null),[F,G]=(0,c.useState)(!1),[H,I]=(0,c.useState)(null);(0,c.useEffect)(()=>{w(1)},[n]);let J=(0,c.useCallback)(async()=>{if(i.API_BASE_URL)try{var a;let b;s(!0),u("");let c={page:v,limit:x};"today"===n&&(c.date=(0,h.default)().format("YYYY-MM-DD"));let d=await g.default.get(`${i.API_BASE_URL}/hospital/xray-sessions`,{params:c});if(!(d.data?.success===!0||d.data?.code===200||d.status>=200&&d.status<300&&d.data?.data)){q([]),A(0),u(d.data?.message??"Failed to load X-ray sessions.");return}let e=d.data?.data??{},f=Array.isArray(e.sessions)?e.sessions:[];q(f),A((a=f.length,b=e?.pagination,"number"==typeof b?.totalCount?b.totalCount:"number"==typeof b?.total?b.total:a))}catch(a){u(g.default.isAxiosError(a)&&"string"==typeof a.response?.data?.message?a.response.data.message:"Failed to load X-ray sessions."),q([]),A(0)}finally{s(!1)}},[n,v,x]);(0,c.useEffect)(()=>{J()},[J]);let K=a=>{o(a),w(1)},L=async(a,b)=>{if(i.API_BASE_URL)try{C(a),await g.default.put(`${i.API_BASE_URL}/hospital/xray-session/${a}`,{status:b}),q(c=>c.map(c=>c._id===a?{...c,status:b}:c))}catch{}finally{C(null)}},M=async a=>{if(i.API_BASE_URL)try{I(a);let b=await g.default.get(`${i.API_BASE_URL}/hospital/xray-session/${a}`);if(!(b.data?.success===!0||b.data?.code===200||b.status>=200&&b.status<300&&b.data?.data))return void alert(b.data?.message??"Failed to load X-ray report.");let c=b.data?.data?.session??b.data?.data;if(!c?.reportHtml?.trim())return void alert("No report available to print. Please save the report first.");E({sessionId:c.sessionId,mrd:c.patient?.mrd,patientName:c.patient?.name,age:((a,b,c)=>{let d=null!=a?Number(a):void 0;if(null!=d&&Number.isFinite(d)){if(0===d){let a=null!=b?Number(b):0;return a>0?`${a} ${1===a?"Month":"Months"}`:null!=c?`${c} ${1===Number(c)?"Day":"Days"}`:void 0}return`${d} ${1===d?"Year":"Years"}`}let e=null!=b?Number(b):0;return e>0?`${e} ${1===e?"Month":"Months"}`:null!=c?`${c} ${1===Number(c)?"Day":"Days"}`:void 0})(c.patient?.age,c.patient?.months,c.patient?.days),gender:c.patient?.gender,procedureName:c.procedure?.procedureName,department:c.procedure?.department,tokenDate:c.tokenDate,reportHtml:c.reportHtml}),G(!0)}catch{alert("Failed to load X-ray report for printing.")}finally{I(null)}},N=p.map(a=>{var b;let c,d,e=[(0,j.formatAgeForListing)(a.patient?.age,a.patient?.months,a.patient?.days),a.patient?.gender??""].filter(Boolean).join(", "),f=a.tokenDate?(0,h.default)(a.tokenDate).format("DD MMM YYYY"):"—",g=m(a),i=(c=m(a),Number(c?.totalPrice??0)||0),k=g?.paymentStatus?.trim()||"Unpaid";return{key:a._id,sessionId:a.sessionId??"—",patientName:a.patient?.name??"—",mrd:a.patient?.mrd??"—",meta:e||void 0,procedureName:a.procedure?.procedureName??"—",department:a.procedure?.department??"—",tokenDate:f,source:a.source,totalAmount:i,paymentStatus:k,status:(b=a.status,(d=b?.trim())&&"—"!==d?"inprogress"===d.toLowerCase()||"in-progress"===d.toLowerCase()?"In Progress":"pending"===d.toLowerCase()?"Pending":d:"Pending")}});return(0,b.jsxs)("div",{className:"page-wrapper",children:[(0,b.jsxs)("div",{className:"content",children:[(0,b.jsxs)("div",{className:"d-flex align-items-sm-center flex-sm-row flex-column gap-2 mb-3 pb-3 border-bottom",children:[(0,b.jsx)("div",{className:"flex-grow-1",children:(0,b.jsxs)("h4",{className:"fw-bold mb-0",children:["Xrays",(0,b.jsxs)("span",{className:"badge badge-soft-primary border border-primary fs-13 fw-medium ms-2",children:["Total : ",r?"…":z]})]})}),(0,b.jsx)("div",{className:"text-end d-flex align-items-center flex-wrap justify-content-end gap-2",children:(0,b.jsxs)(f.default,{href:k.all_routes.xrayTokenQueue,target:"_blank",rel:"noopener noreferrer",className:"btn btn-outline-primary fs-13 btn-md",children:[(0,b.jsx)("i",{className:"ti ti-list-details me-1"}),"Queue"]})})]}),(0,b.jsx)("div",{className:"d-flex align-items-center mb-3",children:(0,b.jsxs)("ul",{className:"nav nav-tabs border-0 mb-0 flex-shrink-0",children:[(0,b.jsx)("li",{className:"nav-item",children:(0,b.jsx)("button",{type:"button",className:`nav-link${"all"===n?" active":""}`,onClick:()=>K("all"),children:"All Xrays"})}),(0,b.jsx)("li",{className:"nav-item",children:(0,b.jsx)("button",{type:"button",className:`nav-link${"today"===n?" active":""}`,onClick:()=>K("today"),children:"Today's Xrays"})})]})}),t?(0,b.jsx)("div",{className:"alert alert-danger mb-3",role:"alert",children:t}):null,(0,b.jsx)("div",{className:"table-responsive",children:r?(0,b.jsx)("p",{className:"text-muted mb-0",children:"Loading X-ray sessions…"}):(0,b.jsx)(e.default,{columns:[{title:"Session ID",dataIndex:"sessionId",sorter:!1,showSorterTooltip:!1},{title:"MRD",dataIndex:"mrd",sorter:!1,showSorterTooltip:!1},{title:"Patient",dataIndex:"patientName",sorter:!1,showSorterTooltip:!1,render:(a,c)=>(0,b.jsxs)("div",{className:"text-dark",children:[(0,b.jsx)("div",{className:"fw-semibold fs-14 text-truncate",children:c.patientName}),c.meta?(0,b.jsx)("div",{className:"fs-13 text-muted text-truncate",children:c.meta}):null]})},{title:"Procedure",dataIndex:"procedureName",sorter:!1,showSorterTooltip:!1,render:(a,c)=>(0,b.jsxs)("div",{className:"text-dark",children:[(0,b.jsx)("div",{className:"fw-medium fs-14 text-truncate",children:c.procedureName}),(0,b.jsx)("div",{className:"fs-13 text-muted text-truncate",children:c.tokenDate}),"—"!==c.department?(0,b.jsx)("div",{className:"fs-13 text-muted text-truncate",children:c.department}):null]})},{title:"Source",dataIndex:"source",sorter:!1,showSorterTooltip:!1,render:(a,c)=>{var d;let e,f=String(c.source??"").toLowerCase();return(0,b.jsx)("span",{className:`badge border px-2 py-1 fs-13 fw-medium ${"ipd"===f?"badge-soft-primary border-primary":"daycare"===f?"badge-soft-info border-info":"badge-soft-secondary border-secondary"}`,children:(d=c.source,"ipd"===(e=d?.trim().toLowerCase())?"IPD":"daycare"===e?"Daycare":d?.trim()||"—")})}},{title:"Total",dataIndex:"totalAmount",sorter:!1,showSorterTooltip:!1,render:(a,c)=>{let d=c.paymentStatus||"Unpaid";return(0,b.jsxs)("div",{className:"d-flex align-items-center gap-2",children:[(0,b.jsxs)("span",{className:"fw-semibold text-dark",children:["₹",(Number(a)||0).toFixed(2)]}),(0,b.jsx)("span",{className:`d-inline-flex align-items-center justify-content-center rounded-circle ${"Paid"===d?"bg-success":"bg-warning"}`,style:{width:"15px",height:"15px",minWidth:"15px"},children:(0,b.jsx)("i",{className:"ti ti-check fs-10 text-white"})})]})}},{title:"Status",dataIndex:"status",sorter:!1,showSorterTooltip:!1,render:(a,c)=>{var d;let e="Completed"===(d=c.status)?{className:"text-success",backgroundColor:"#f0f9f2",borderColor:"#d9efdf"}:"Pending"===d?{className:"text-primary",backgroundColor:"#eef4fb",borderColor:"#c5d9f0"}:{className:"text-dark",backgroundColor:"#fffdf2",borderColor:"#fff3cd"};return(0,b.jsxs)("select",{className:`form-select form-select-sm ${e.className}`,style:{width:"auto",minWidth:"7rem",backgroundColor:e.backgroundColor,borderColor:e.borderColor},value:c.status,disabled:B===c.key,onChange:a=>L(c.key,a.target.value),"aria-label":"Update status",children:[(0,b.jsx)("option",{value:"Pending",children:"Pending"}),(0,b.jsx)("option",{value:"In Progress",children:"In Progress"}),(0,b.jsx)("option",{value:"Completed",children:"Completed"})]})}},{title:"",dataIndex:"actions",sorter:!1,showSorterTooltip:!1,width:110,render:(c,d)=>{let e=d.key;return(0,b.jsxs)("div",{className:"d-flex align-items-center justify-content-end gap-2",children:[(0,b.jsx)("button",{type:"button",className:"btn btn-sm btn-outline-secondary d-inline-flex align-items-center justify-content-center",title:"Open X-ray details","aria-label":"Open X-ray details",onClick:b=>{b.stopPropagation(),a.push(`${k.all_routes.xrayDetails}/${e}`)},children:(0,b.jsx)("i",{className:"ti ti-edit fs-16"})}),(0,b.jsx)("button",{type:"button",className:"btn btn-sm btn-outline-primary d-inline-flex align-items-center justify-content-center",title:"Print X-ray report","aria-label":"Print X-ray report",disabled:H===e,onClick:a=>{a.stopPropagation(),M(e)},children:H===e?(0,b.jsx)("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}):(0,b.jsx)("i",{className:"ti ti-printer fs-16"})})]})}}],dataSource:N,Selection:!1,searchText:"",total:z,currentPage:v,pageSize:x,onPaginationChange:(a,b)=>{w(a),y(b)}})}),F&&D?(0,b.jsx)(l,{reportData:D,onClose:()=>{G(!1),E(null)}}):null]}),(0,b.jsx)("div",{className:"footer text-center bg-white p-2 border-top",children:(0,b.jsxs)("p",{className:"text-dark mb-0",children:["2025 ©",(0,b.jsx)(f.default,{href:"#",className:"link-primary",children:"Preclinic"}),", All Rights Reserved"]})})]})};a.s(["default",0,function(){return(0,b.jsx)("div",{children:(0,b.jsx)(n,{})})}],503951)}];

//# sourceMappingURL=src_app_%28feature-module%29_xrays_page_tsx_0qo_2s0._.js.map