module.exports=[150252,a=>{"use strict";var b=a.i(187924),c=a.i(572131),d=a.i(951772);a.s(["default",0,({receiptData:a,pathlabReceiptData:e,onClose:f})=>{let g,h,i=(0,c.useRef)(null),j=(0,c.useRef)(f);j.current=f;let k=(0,c.useMemo)(()=>[a.visitId??"",a.appointmentId??"",a.receiptId??"",String(a.totalAmount??""),String(a.discount??""),String(a.paidAmount??"")].join("|"),[a.visitId,a.appointmentId,a.receiptId,a.totalAmount,a.discount,a.paidAmount]);(0,c.useEffect)(()=>{let b=!1;return(()=>{if(!i.current||b)return;let c=document.createElement("iframe");c.setAttribute("title","Receipt print"),c.style.cssText="position:fixed;right:0;bottom:0;width:0;height:0;border:0;opacity:0;pointer-events:none;",document.body.appendChild(c);let d=c.contentDocument??c.contentWindow?.document,e=c.contentWindow;if(!d||!e)return c.remove();if(b)return;let f=`
        <!DOCTYPE html>
        <html>
          <head>
            <title>${a.printTitle??"Receipt"} - ${a.visitId||"Visit"}</title>
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
              .receipt-container { width: 100%; max-width: 600px; margin: 0 auto; padding: 0 60px; background: #fff; }
              .header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px; padding-bottom: 8px; border-bottom: 2px solid #000; gap: 12px; }
              .header-left { display: flex; align-items: center; gap: 10px; }
              .header-center { flex: 1; display: flex; align-items: center; justify-content: center; min-height: 54px; }
              .header-center .receipt-title { transform: translateX(18px); }
              .logo-img { width: 54px; height: 54px; object-fit: contain; flex-shrink: 0; }
              .header-info h2 { font-size: 20px; font-weight: bold; margin: 0 0 2px 0; color: #000; }
              .header-info .certification { font-size: 12px; color: #000; margin-top: 2px; }
              .header-right { text-align: right; }
              .header-right .address { font-size: 14px; color: #000; margin-bottom: 4px; line-height: 1.4; }
              .header-right .contact { font-size: 14px; color: #000; line-height: 1.6; }
              .receipt-title {
                text-align: center;
                font-size: 20px;
                font-weight: bold;
                letter-spacing: 0.04em;
                color: #000;
              }
              .content-box { border: none; padding: 8px 12px 0 12px; margin-bottom: 12px; }
              .patient-details-box { margin-bottom: 10px; padding-bottom: 8px; }
              .patient-info-table { width: 100%; border-collapse: collapse; font-size: 15px; table-layout: fixed; }
              .patient-info-table td { border: 1px solid #000; padding: 4px 8px; vertical-align: middle; }
              .info-label-cell { background-color: #f8f9fa; font-weight: 600; white-space: nowrap; width: 18%; }
              .info-value-cell { background-color: #ffffff; font-weight: 500; width: 40%; }
              .info-value-cell-narrow { width: 24%; }
              .transactions-section { margin-bottom: 0; }
              .transaction-header { display: flex; padding: 8px 0; border-bottom: 2px solid #000; font-weight: bold; font-size: 15px; }
              .transaction-header .col-type { width: 75%; }
              .transaction-header .col-rate { width: 25%; text-align: right; }
              .transaction-row { display: flex; padding: 8px 0; border-bottom: 1px solid #000; font-size: 15px; font-weight: 600; }
              .transaction-row .col-type { width: 75%; }
              .transaction-row .col-rate { width: 25%; text-align: right; }
              .receipt-container-wide { max-width: 100%; padding: 0 12px; }
              .billing-table {
                width: 100%;
                border-collapse: collapse;
                font-size: 13px;
                table-layout: fixed;
              }
              .billing-table th,
              .billing-table td {
                border: 1px solid #000;
                padding: 4px 6px;
                vertical-align: top;
              }
              .billing-table th {
                font-weight: bold;
                text-align: center;
                font-size: 13px;
              }
              .billing-table .col-sno { width: 7%; text-align: center; }
              .billing-table .col-desc { width: 51%; text-align: left; font-weight: 600; }
              .billing-table .col-unit { width: 7%; text-align: right; }
              .billing-table .col-rate { width: 17%; text-align: right; }
              .billing-table .col-amount { width: 18%; text-align: right; }
              .billing-total-row td {
                font-weight: bold;
                font-size: 13px;
              }
              .billing-total-label { text-align: right; }
              .billing-total-colon { text-align: center; }
              .summary-section { margin-top: 10px; }
              .summary-section-billing .summary-row {
                font-size: 13px;
                padding: 5px 0;
              }
              .summary-row { display: flex; justify-content: space-between; padding: 8px 0; font-size: 16px; font-weight: 600; border-bottom: 1px solid #000; }
              .summary-row.total-paid { font-weight: bold; border-bottom: none; margin-top: 0; padding-bottom: 8px; }
              .footer { margin-top: 10px; display: flex; justify-content: space-between; font-size: 11px; color: #000; }
              .signature-block {
                min-width: 180px;
                text-align: center;
              }
              .signature-line {
                border-top: 1px solid #000;
                margin-top: 50px;
                padding-top: 4px;
                font-size: 11px;
                font-weight: 600;
                text-align: center;
              }
              .payment-no-data { text-align: center; padding: 24px; color: #000; font-size: 14px; border: 1px solid #000; }
              .pathlab-page { page-break-before: always; padding-top: 10px; }
              .test-section { margin-bottom: 0; }
              .test-header { display: flex; padding: 8px 0; border-bottom: 2px solid #000; font-weight: bold; font-size: 15px; }
              .test-header .col-sr { width: 10%; }
              .test-header .col-name { width: 65%; }
              .test-header .col-rate { width: 25%; text-align: right; }
              .test-row { display: flex; padding: 8px 0; border-bottom: 1px solid #000; font-size: 15px; }
              .test-row .col-sr { width: 10%; }
              .test-row .col-name { width: 65%; font-weight: 600; }
              .test-row .col-rate { width: 25%; text-align: right; font-weight: 600; }
              .summary-row-light { display: flex; justify-content: space-between; padding: 8px 0; font-size: 16px; border-bottom: 1px solid #000; }
              @media print {
                @page { margin: 8mm 10mm 10mm 10mm; size: A4; }
                body { padding: 0; background: white !important; }
              }
            </style>
          </head>
          <body>
            ${i.current.innerHTML}
          </body>
        </html>
      `;d.open(),d.write(f),d.close(),window.setTimeout(()=>{if(!b)try{e.focus(),e.print()}finally{window.setTimeout(()=>{b||(c.remove(),j.current?.())},250)}},250)})(),()=>{b=!0}},[k]);let l=[a.patientTitle,a.patientName].filter(Boolean).join(" ").trim()||"—",m=null!=a.age&&""!==String(a.age).trim()?String(a.age):"—",n=a.gender?.trim()||"—",o="—"!==n?`${m} / ${n}`:m,p=a.address?.trim()||"—",q=a.doctorName?.trim()||"",r=a.medicalLicenseNo?.trim(),s=""!==q?(g=q.replace(/^Dr\.\s*/i,"").trim(),h=`Dr. ${g}`,r?`${h} [${r}]`:h):"—",t=a.visitDate?(0,d.default)(a.visitDate).format("DD MMM YYYY"):"—";a.visitTime&&(a=>{if(!a)return;let b=a.split(":"),c=parseInt(b[0],10);return b[1]})(a.visitTime);let u=a.transactions??[],v=a.billingLineItems??[],w=v.length>0,x=a=>Number.isFinite(a)?a.toFixed(2):"0.00",y=a.totalAmount??u.reduce((a,b)=>a+(b.amount||0),0),z=a.discount??0,A=a.discountAuthorizedBy?.trim(),B=z>0&&A?`Discount by ${A}`:"Discount",C=y-z,D=null!=a.paidAmount?Number(a.paidAmount)||0:u.reduce((a,b)=>a+(b.amount||0),0),E=encodeURI("/JJM Logo.png");return(0,b.jsx)("div",{style:{display:"none"},children:(0,b.jsxs)("div",{ref:i,className:`receipt-container${w?" receipt-container-wide":""}`,children:[(0,b.jsxs)("div",{className:"header",children:[(0,b.jsxs)("div",{className:"header-left",children:[(0,b.jsx)("img",{src:E,alt:"JJM Hospital",className:"logo-img"}),(0,b.jsxs)("div",{className:"header-info",children:[(0,b.jsx)("h2",{children:"JJM Hospital"}),(0,b.jsx)("div",{className:"certification",children:"ISO 9001:2000 Certified"})]})]}),(0,b.jsx)("div",{className:"header-center",children:(0,b.jsx)("div",{className:"receipt-title",children:a.printTitle??"Receipt"})}),(0,b.jsxs)("div",{className:"header-right",children:[(0,b.jsxs)("div",{className:"address",children:["Jaspur Rd, opposite Anaj Mandi, Sarverkhera,",(0,b.jsx)("br",{}),"Kashipur, Uttarakhand 244713"]}),(0,b.jsxs)("div",{className:"contact",children:["Phone: +91 9634844075",(0,b.jsx)("br",{})]})]})]}),(0,b.jsxs)("div",{className:"content-box",children:[(0,b.jsx)("div",{className:"patient-details-box",children:(0,b.jsx)("table",{className:"patient-info-table",children:(0,b.jsxs)("tbody",{children:[(0,b.jsxs)("tr",{children:[(0,b.jsx)("td",{className:"info-label-cell",children:"MRD No.:"}),(0,b.jsx)("td",{className:"info-value-cell",children:a.mrd??"—"}),(0,b.jsx)("td",{className:"info-label-cell",children:"Date:"}),(0,b.jsx)("td",{className:"info-value-cell info-value-cell-narrow",children:t})]}),(0,b.jsxs)("tr",{children:[(0,b.jsx)("td",{className:"info-label-cell",children:"Patient Name:"}),(0,b.jsx)("td",{className:"info-value-cell",children:l}),(0,b.jsx)("td",{className:"info-label-cell",children:"Case/Rec. No.:"}),(0,b.jsx)("td",{className:"info-value-cell info-value-cell-narrow",children:a.visitId??"—"})]}),(0,b.jsxs)("tr",{children:[(0,b.jsx)("td",{className:"info-label-cell",children:"Address:"}),(0,b.jsx)("td",{className:"info-value-cell",children:p}),(0,b.jsx)("td",{className:"info-label-cell",children:"Age / Gender:"}),(0,b.jsx)("td",{className:"info-value-cell info-value-cell-narrow",children:o})]}),(0,b.jsxs)("tr",{children:[(0,b.jsx)("td",{className:"info-label-cell",children:"Doctor Name:"}),(0,b.jsx)("td",{className:"info-value-cell",colSpan:3,children:s})]})]})})}),w?(0,b.jsx)("div",{className:"transactions-section",children:(0,b.jsxs)("table",{className:"billing-table",children:[(0,b.jsx)("thead",{children:(0,b.jsxs)("tr",{children:[(0,b.jsx)("th",{className:"col-sno",children:"S. No."}),(0,b.jsx)("th",{className:"col-desc",children:"Description"}),(0,b.jsx)("th",{className:"col-unit",children:"Unit"}),(0,b.jsx)("th",{className:"col-rate",children:"Rate"}),(0,b.jsx)("th",{className:"col-amount",children:"Amount"})]})}),(0,b.jsxs)("tbody",{children:[v.map(a=>(0,b.jsxs)("tr",{children:[(0,b.jsx)("td",{className:"col-sno",children:a.srNo}),(0,b.jsx)("td",{className:"col-desc",children:a.description}),(0,b.jsx)("td",{className:"col-unit",children:x(a.units)}),(0,b.jsx)("td",{className:"col-rate",children:x(a.rate)}),(0,b.jsx)("td",{className:"col-amount",children:x(a.amount)})]},a.srNo)),(0,b.jsxs)("tr",{className:"billing-total-row",children:[(0,b.jsx)("td",{className:"col-sno"}),(0,b.jsx)("td",{className:"col-desc billing-total-label",colSpan:2,children:"Total"}),(0,b.jsx)("td",{className:"col-rate billing-total-colon",children:":"}),(0,b.jsx)("td",{className:"col-amount",children:x(y)})]})]})]})}):(0,b.jsxs)("div",{className:"transactions-section",children:[(0,b.jsxs)("div",{className:"transaction-header",children:[(0,b.jsx)("div",{className:"col-type",children:"Type"}),(0,b.jsx)("div",{className:"col-rate",children:"Amount"})]}),0===u.length?(0,b.jsx)("div",{className:"payment-no-data",children:"No Entries Found"}):u.map(c=>(0,b.jsxs)("div",{className:"transaction-row",children:[(0,b.jsx)("div",{className:"col-type",children:c.transactionType?c.transactionType:`${a.appointmentType??"—"}${a.visitType?` (${a.visitType})`:""}`}),(0,b.jsxs)("div",{className:"col-rate",children:["₹","number"==typeof c.amount?c.amount.toFixed(2):"0.00"]})]},c._id))]}),(0,b.jsxs)("div",{className:`summary-section${w?" summary-section-billing":""}`,children:[!w&&(0,b.jsxs)("div",{className:"summary-row",children:[(0,b.jsx)("span",{children:"Total:"}),(0,b.jsxs)("span",{children:["₹",y.toFixed(2)]})]}),z>0&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("div",{className:"summary-row",children:[(0,b.jsxs)("span",{children:[B,":"]}),(0,b.jsxs)("span",{children:["₹",z.toFixed(2)]})]}),(0,b.jsxs)("div",{className:"summary-row",children:[(0,b.jsx)("span",{children:"Final Amount:"}),(0,b.jsxs)("span",{children:["₹",C.toFixed(2)]})]})]}),(0,b.jsxs)("div",{className:"summary-row total-paid",children:[(0,b.jsx)("span",{children:" Paid Amount:"}),(0,b.jsxs)("span",{children:["₹",D.toFixed(2)]})]})]})]}),(0,b.jsxs)("div",{className:"footer",children:[(0,b.jsx)("div",{children:"This is a computer generated receipt."}),(0,b.jsx)("div",{className:"signature-block",children:(0,b.jsx)("div",{className:"signature-line",children:"Signature"})})]}),e&&e.length>0?e.map(a=>{let c=[a.patientTitle,a.patientName].filter(Boolean).join(" ").trim()||"—",e=a.gender?`${a.age??"—"} / ${a.gender}`:a.age??"—",f=a.date?(0,d.default)(a.date).format("DD MMM YYYY"):"—";return(0,b.jsxs)("div",{className:"pathlab-page",children:[(0,b.jsxs)("div",{className:"header",children:[(0,b.jsxs)("div",{className:"header-left",children:[(0,b.jsx)("img",{src:E,alt:"JJM Hospital",className:"logo-img"}),(0,b.jsxs)("div",{className:"header-info",children:[(0,b.jsx)("h2",{children:"JJM Hospital"}),(0,b.jsx)("div",{className:"certification",children:"ISO 9001:2000 Certified"})]})]}),(0,b.jsx)("div",{className:"header-center",children:(0,b.jsx)("div",{className:"receipt-title",children:"Pathlab Receipt"})}),(0,b.jsxs)("div",{className:"header-right",children:[(0,b.jsxs)("div",{className:"address",children:["Jaspur Rd, opposite Anaj Mandi, Sarverkhera,",(0,b.jsx)("br",{}),"Kashipur, Uttarakhand 244713"]}),(0,b.jsx)("div",{className:"contact",children:"Phone: +91 9634844075"})]})]}),(0,b.jsxs)("div",{className:"content-box",children:[(0,b.jsx)("div",{className:"patient-details-box",children:(0,b.jsx)("table",{className:"patient-info-table",children:(0,b.jsxs)("tbody",{children:[(0,b.jsxs)("tr",{children:[(0,b.jsx)("td",{className:"info-label-cell",children:"MRD No.:"}),(0,b.jsx)("td",{className:"info-value-cell",children:a.mrd??"—"}),(0,b.jsx)("td",{className:"info-label-cell",children:"Date:"}),(0,b.jsx)("td",{className:"info-value-cell info-value-cell-narrow",children:f})]}),(0,b.jsxs)("tr",{children:[(0,b.jsx)("td",{className:"info-label-cell",children:"Patient Name:"}),(0,b.jsx)("td",{className:"info-value-cell",children:c}),(0,b.jsx)("td",{className:"info-label-cell",children:"Case/Rec. No.:"}),(0,b.jsx)("td",{className:"info-value-cell info-value-cell-narrow",children:a.caseId})]}),(0,b.jsxs)("tr",{children:[(0,b.jsx)("td",{className:"info-label-cell",children:"Address:"}),(0,b.jsx)("td",{className:"info-value-cell",children:a.address?.trim()||"—"}),(0,b.jsx)("td",{className:"info-label-cell",children:"Age / Gender:"}),(0,b.jsx)("td",{className:"info-value-cell info-value-cell-narrow",children:e})]}),(0,b.jsxs)("tr",{children:[(0,b.jsx)("td",{className:"info-label-cell",children:"Ref. Doctor:"}),(0,b.jsx)("td",{className:"info-value-cell",colSpan:3,children:a.referringDoctorName?.trim()||"—"})]})]})})}),(0,b.jsxs)("div",{className:"test-section",children:[(0,b.jsxs)("div",{className:"test-header",children:[(0,b.jsx)("div",{className:"col-sr",children:"SR No."}),(0,b.jsx)("div",{className:"col-name",children:"Test Name"}),(0,b.jsx)("div",{className:"col-rate",children:"Rate"})]}),0===a.tests.length?(0,b.jsx)("div",{className:"payment-no-data",children:"No Tests Found"}):a.tests.map(a=>(0,b.jsxs)("div",{className:"test-row",children:[(0,b.jsx)("div",{className:"col-sr",children:a.srNo}),(0,b.jsx)("div",{className:"col-name",children:a.testName}),(0,b.jsxs)("div",{className:"col-rate",children:["₹",a.price.toFixed(2)]})]},a.srNo))]}),(0,b.jsxs)("div",{className:"summary-section",children:[(0,b.jsxs)("div",{className:"summary-row",children:[(0,b.jsx)("span",{children:"Total"}),(0,b.jsxs)("span",{children:["₹",a.totalAmount.toFixed(2)]})]}),(0,b.jsxs)("div",{className:"summary-row-light",children:[(0,b.jsx)("span",{children:"Discount"}),(0,b.jsxs)("span",{children:["₹",a.discountValue.toFixed(2)]})]}),(0,b.jsxs)("div",{className:"summary-row",children:[(0,b.jsx)("span",{children:"Final Amount"}),(0,b.jsxs)("span",{children:["₹",a.finalAmount.toFixed(2)]})]}),(0,b.jsxs)("div",{className:"summary-row total-paid",children:[(0,b.jsx)("span",{children:"Total Paid Amount"}),(0,b.jsxs)("span",{children:["₹",a.paidAmount.toFixed(2)]})]})]})]}),(0,b.jsxs)("div",{className:"footer",children:[(0,b.jsx)("div",{children:"This is a computer generated receipt."}),(0,b.jsx)("div",{className:"signature-block",children:(0,b.jsx)("div",{className:"signature-line",children:"Signature"})})]})]},a.caseId)}):null]})})}])}];

//# sourceMappingURL=src_components_pages_clinic-modules_appointments_printReceipt_tsx_0jqpd5v._.js.map