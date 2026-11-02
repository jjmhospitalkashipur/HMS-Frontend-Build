(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,514841,e=>{"use strict";var l=e.i(843476),s=e.i(271645),a=e.i(522016),i=e.i(618566),t=e.i(581949),r=e.i(773926),n=e.i(179945);let o=()=>{let e={"general-information":(0,s.useRef)(null),"pre-dialysis-assessment":(0,s.useRef)(null),"dialysis-monitoring":(0,s.useRef)(null),"post-dialysis-assessment":(0,s.useRef)(null),"complications-during-dialysis":(0,s.useRef)(null),"treatment-given":(0,s.useRef)(null)},o=(0,s.useRef)(null),c=(0,i.useRouter)(),m=(0,i.useSearchParams)(),[d,p]=(0,s.useState)(!1),[h,g]=(0,s.useState)(null),[x,u]=(0,s.useState)(!1),[f,b]=(0,s.useState)(!1),[y,N]=(0,s.useState)(""),[v,j]=(0,s.useState)(null),[k,S]=(0,s.useState)(!1),[T,w]=(0,s.useState)(null),A=l=>{let s=e[l].current;s&&s.scrollIntoView({behavior:"smooth",block:"start"})},$=m.get("sessionId"),D=m.get("patientId")??m.get("id"),P=!!($&&r.API_BASE_URL),z=(0,s.useCallback)(e=>{let l=o.current;if(!l)return;let s=e=>l.querySelector(`[name="${CSS.escape(e)}"]`),a=(e,l)=>{let a=s(e);if(a){if(a instanceof HTMLInputElement&&("checkbox"===a.type||"radio"===a.type)){a.checked=!!l;return}a.value=null!=l?String(l):""}},i=(e,l)=>{let a=s(e);a instanceof HTMLInputElement&&"checkbox"===a.type&&(a.checked=!!l)},t=e.patient??{};a("patient.name",t.name),a("patient.age",t.age),a("patient.gender",t.gender),a("meta.sessionDate",e.sessionDate),a("meta.createdAt",e.createdAt);let r=e.generalInformation??{};if(a("general.machineNumber",r.machineNumber),a("general.mrdNo",t?.mrd??r.uhid),a("general.technicianName",r.technicianName),a("general.startTime",r.startTime),a("general.endTime",r.endTime),a("general.bolus",r.bolus),a("general.hourly",r.hourly),a("general.fiberVolume",r.fiberVolume),a("general.heparinUse",r.heparinUse),a("general.height",r.height),a("general.preHdWeightToday",r.preHdWeightToday),a("general.lastPostHdWeight",r.lastPostHdWeight),a("general.weightGain",r.weightGain),a("general.targetWeightLoss",r.targetWeightLoss),a("general.postHdWeightToday",r.postHdWeightToday),a("general.actualWeightLoss",r.actualWeightLoss),a("general.remainingWeightLoss",r.remainingWeightLoss),a("general.targetDryWeight",r.targetDryWeight),i("general.dialyzerUsageSingleUse",!!r.dialyzerUsageSingleUse),i("general.dialyzerUsageReuse",!!r.dialyzerUsageReuse),a("general.timesReused",r.timesReused),i("general.vascularAccessPresent",!!r.vascularAccessPresent),i("general.centralLineYes",!!r.centralLineYes),i("general.centralLineNo",!!r.centralLineNo),r.centralLineIJV){let e=l.querySelector('[name="general.centralLineSite"][value="ijv"]');e&&(e.checked=!0)}else if(r.centralLineFemoral){let e=l.querySelector('[name="general.centralLineSite"][value="femoral"]');e&&(e.checked=!0)}i("general.avfSelected",!!r.avfSelected),i("general.avgSelected",!!r.avgSelected),i("general.ijvSelected",!!r.ijvSelected),i("general.femoralSelected",!!r.femoralSelected),i("general.tunneledCatheter",!!r.tunneledCatheter),i("general.avfNeedleSize16G",!!r.avfNeedleSize16G),i("general.avfNeedleSize17G",!!r.avfNeedleSize17G),i("general.avfNeedleSizeOthers",!!r.avfNeedleSizeOthers),a("general.avfNeedleSizeOthersValue",r.avfNeedleSizeOthersValue),i("general.bruitThrillPresent",!!r.bruitThrillPresent),i("general.bruitThrillAbsent",!!r.bruitThrillAbsent),i("general.bruitThrillNotApplicable",!!r.bruitThrillNotApplicable);let n=e.preDialysisAssessment??{};a("pre.bpStartHd",n.bpStartHd),a("pre.spo2",n.spo2),a("pre.bodyTemperature",n.bodyTemperature),a("pre.pulse",n.pulse),(e.monitoringReadings??[]).forEach((e,l)=>{l>=8||(a(`monitoring.${l}.timeOnHd`,e.timeOnHd),a(`monitoring.${l}.pr`,e.pr),a(`monitoring.${l}.bp`,e.bp),a(`monitoring.${l}.bfr`,e.bfr),a(`monitoring.${l}.dfr`,e.dfr),a(`monitoring.${l}.ufr`,e.ufr),a(`monitoring.${l}.totalUf`,e.totalUf),a(`monitoring.${l}.temperature`,e.temperature),a(`monitoring.${l}.dyna`,e.dyna),a(`monitoring.${l}.heparin`,e.heparin),a(`monitoring.${l}.rbs`,e.rbs))});let c=e.postDialysisAssessment??{};a("post.pulse",c.pulse),a("post.bp",c.bp),a("post.bodyTemperature",c.bodyTemperature),a("post.postHdWeight1",c.postHdWeight),a("post.ufRemoved",c.ufRemoved??c.postHdWeightField2),a("post.ktVAchieved",c.ktVAchieved);let m=c.prolongedBleedingField1;if(m){let e=l.querySelector(`[name="post.prolongedBleeding"][value="${CSS.escape(String(m))}"]`);e&&(e.checked=!0)}let d=String(c.bruitThrillAvfAvgField1??"");i("post.bruitThrillPresent","Present"===d),i("post.bruitThrillAbsent","Absent"===d),i("post.bruitThrillNotApplicable","Not Applicable"===d);let p=e.complications??{};i("comp.hypotension",!!p.hypotension),i("comp.fever",!!p.fever),i("comp.headache",!!p.headache),i("comp.rigor",!!p.rigor),i("comp.cramps",!!p.cramps),i("comp.rash",!!p.rash),i("comp.vomiting",!!p.vomiting),i("comp.chestPain",!!p.chestPain),i("comp.dyspnea",!!p.dyspnea),i("comp.pruritus",!!p.pruritus),i("comp.dialyzerReaction",!!p.dialyzerReaction),i("comp.seizures",!!p.seizures),i("comp.noComplication",!!p.noComplication),i("comp.formSibring",!!p.formSibring),i("comp.hypoglycemia",!!p.hypoglycemia),i("comp.hypertension",!!p.hypertension),a("comp.other",p.other);let h=e.treatmentGiven??{};if(a("treat.epoDosage",h.epoDosage),a("treat.epoGivenBy",h.epoGivenBy),a("treat.ivIronDose",h.ivIronDose),h.bloodTransfusionField1){let e=l.querySelector(`[name="treat.bloodTransfusion"][value="${CSS.escape(String(h.bloodTransfusionField1))}"]`);e&&(e.checked=!0)}a("treat.numberOfUnits",h.numberOfUnits),a("treat.bloodBankName",h.bloodBankName),a("treat.typeOfBlood",h.typeOfBlood),a("treat.otherTreatmentGivenDrug",h.otherTreatmentGivenDrug)},[]);(0,s.useEffect)(()=>{let e=m.get("patientId")??m.get("id");if(!$||!e||!r.API_BASE_URL){j(null),w(null);return}let l=!1;return(async()=>{S(!0),w(null),j(null);try{let s=null;try{let e=await t.default.get(`${r.API_BASE_URL}/hospital/dialysis-session/${$}`);s=(e=>{if(!e||"object"!=typeof e)return null;let l=e.data??e;return l&&"object"==typeof l?l.session&&"object"==typeof l.session?l.session:"string"==typeof l._id?l:null:null})(e.data)}catch{}if(!s){let l=await t.default.get(`${r.API_BASE_URL}/hospital/dialysis-session/patient/${e}`,{params:{page:1,limit:100}}),a=l.data?.data?.sessions??[];s=((e,l)=>{let s=l.trim().toLowerCase();if(s)return e.find(e=>(e?._id?.toLowerCase()??"")===s||(e?.sessionId?.toLowerCase()??"")===s||(e?.daycareAppointmentId?.toLowerCase()??"")===s)})(a,$)??null}if(l)return;if(!s)return void w("Dialysis session not found for this link.");let a=s.generalInformation??{},i=s.patient??{};N(String(i?.mrd??a?.uhid??"")),b(!!a.centralLineNo),j(s)}catch(e){l||(console.error("Failed to fetch dialysis session data",e),w("Failed to load dialysis session. Please try again."))}finally{l||S(!1)}})(),()=>{l=!0}},[m,$]),(0,s.useLayoutEffect)(()=>{v&&z(v)},[v,z]),(0,s.useEffect)(()=>{!P&&D&&r.API_BASE_URL&&(async()=>{try{let e=await t.default.get(`${r.API_BASE_URL}/hospital/patients/${D}`),l=e?.data?.data?.patient??e?.data?.data??null;N(l?.mrd??"")}catch{N("")}})()},[P,D]);let F=async e=>{e.preventDefault(),g(null),u(!1);let l=new FormData(e.currentTarget),s=e=>l.get(e)?.toString().trim()??"",a=e=>{let l=s(e);if(""!==l)return l},i=e=>{let l=e.trim();if(""!==l)return l},o=e=>"on"===l.get(e),d=m.get("patientId")??m.get("id")??s("meta.patientId"),h=m.get("visitId")??s("meta.visitId"),x=m.get("procedureId")??s("meta.procedureId"),f=s("general.centralLineSite"),b={machineNumber:s("general.machineNumber"),uhid:s("general.mrdNo"),technicianName:s("general.technicianName"),startTime:s("general.startTime"),endTime:s("general.endTime"),bolus:s("general.bolus"),hourly:s("general.hourly"),fiberVolume:a("general.fiberVolume"),heparinUse:s("general.heparinUse"),height:a("general.height"),preHdWeightToday:a("general.preHdWeightToday"),lastPostHdWeight:a("general.lastPostHdWeight"),weightGain:a("general.weightGain"),targetWeightLoss:a("general.targetWeightLoss"),postHdWeightToday:a("general.postHdWeightToday"),actualWeightLoss:a("general.actualWeightLoss"),remainingWeightLoss:a("general.remainingWeightLoss"),targetDryWeight:a("general.targetDryWeight"),dialyzerUsageSingleUse:o("general.dialyzerUsageSingleUse"),dialyzerUsageReuse:o("general.dialyzerUsageReuse"),timesReused:a("general.timesReused"),vascularAccessPresent:o("general.vascularAccessPresent"),centralLineYes:o("general.centralLineYes"),centralLineNo:o("general.centralLineNo"),centralLineIJV:"ijv"===f,centralLineFemoral:"femoral"===f,avfSelected:o("general.avfSelected"),avgSelected:o("general.avgSelected"),ijvSelected:o("general.ijvSelected"),femoralSelected:o("general.femoralSelected"),tunneledCatheter:o("general.tunneledCatheter"),avfNeedleSize16G:o("general.avfNeedleSize16G"),avfNeedleSize17G:o("general.avfNeedleSize17G"),avfNeedleSizeOthers:o("general.avfNeedleSizeOthers"),avfNeedleSizeOthersValue:s("general.avfNeedleSizeOthersValue"),bruitThrillPresent:o("general.bruitThrillPresent"),bruitThrillAbsent:o("general.bruitThrillAbsent"),bruitThrillNotApplicable:o("general.bruitThrillNotApplicable")},y={bpStartHd:s("pre.bpStartHd"),spo2:a("pre.spo2"),bodyTemperature:a("pre.bodyTemperature"),pulse:a("pre.pulse")},N=[];for(let e=0;e<8;e+=1){let l=s(`monitoring.${e}.timeOnHd`),a=s(`monitoring.${e}.pr`),t=s(`monitoring.${e}.bp`),r=s(`monitoring.${e}.bfr`),n=s(`monitoring.${e}.dfr`),o=s(`monitoring.${e}.ufr`),c=s(`monitoring.${e}.totalUf`),m=s(`monitoring.${e}.temperature`),d=s(`monitoring.${e}.dyna`),p=s(`monitoring.${e}.heparin`),h=s(`monitoring.${e}.rbs`),g=i(h);[l,a,t,r,n,o,c,m,d,p,h].some(e=>""!==e)&&N.push({timeOnHd:l,pr:i(a),bp:t,bfr:i(r),dfr:i(n),ufr:i(o),totalUf:i(c),temperature:i(m),dyna:i(d),heparin:i(p),rbs:g})}let v={pulse:a("post.pulse"),bp:s("post.bp"),bodyTemperature:a("post.bodyTemperature"),postHdWeight:s("post.postHdWeight1"),ufRemoved:a("post.ufRemoved"),postHdWeightField2:a("post.ufRemoved"),prolongedBleedingField1:s("post.prolongedBleeding"),prolongedBleedingField2:"",bruitThrillAvfAvgField1:o("post.bruitThrillPresent")?"Present":"",bruitThrillAvfAvgField2:o("post.bruitThrillAbsent")?"Absent":"",bruitThrillAvfAvgField3:o("post.bruitThrillNotApplicable")?"Not Applicable":"",ktVAchieved:a("post.ktVAchieved")},j={headache:o("comp.headache"),rash:o("comp.rash"),dyspnea:o("comp.dyspnea"),seizures:o("comp.seizures"),noComplication:o("comp.noComplication"),fever:o("comp.fever"),cramps:o("comp.cramps"),chestPain:o("comp.chestPain"),dialyzerReaction:o("comp.dialyzerReaction"),hypotension:o("comp.hypotension"),rigor:o("comp.rigor"),vomiting:o("comp.vomiting"),pruritus:o("comp.pruritus"),formSibring:o("comp.formSibring"),hypoglycemia:o("comp.hypoglycemia"),hypertension:o("comp.hypertension"),other:s("comp.other")},k={epoDosage:a("treat.epoDosage"),epoGivenBy:s("treat.epoGivenBy"),patientSignature:s("treat.patientSignature"),ivIronDose:a("treat.ivIronDose"),bloodTransfusionField1:s("treat.bloodTransfusion"),bloodTransfusionField2:"",numberOfUnits:a("treat.numberOfUnits"),bloodBankName:s("treat.bloodBankName"),typeOfBlood:s("treat.typeOfBlood"),otherTreatmentGivenDrug:s("treat.otherTreatmentGivenDrug")},S={technicianSignature:s("signatures.technicianSignature"),doctorInCharge:s("signatures.doctorInCharge"),patientSignature:s("signatures.patientSignature")},T=m.get("sessionId"),w=T?{visitId:h,generalInformation:b,preDialysisAssessment:y,monitoringReadings:N,postDialysisAssessment:v,complications:j,treatmentGiven:k,signatures:S,status:"In Progress"}:{patientId:d,visitId:h,procedureId:x,generalInformation:b,preDialysisAssessment:y,monitoringReadings:N,postDialysisAssessment:v,complications:j,treatmentGiven:k,signatures:S,status:"In Progress"};try{p(!0),T&&r.API_BASE_URL?await t.default.put(`${r.API_BASE_URL}/hospital/dialysis-session/${T}`,w):r.API_BASE_URL&&await t.default.post(`${r.API_BASE_URL}/hospital/dialysis-session`,w),u(!0),d&&c.push(`${n.all_routes.patientDetails}?id=${d}`)}catch(e){g(e?.response?.data?.message??"Failed to save dialysis session.")}finally{p(!1)}};return(0,l.jsx)("div",{className:"page-wrapper",children:(0,l.jsxs)("div",{className:"content dialysis-page",children:[(0,l.jsxs)("div",{className:"d-flex align-items-center justify-content-between mb-3",children:[(0,l.jsx)("h4",{className:"fw-bold mb-0",children:P?"Edit Dialysis Session":"Dialysis Form"}),P&&k?(0,l.jsx)("span",{className:"text-muted fs-14",children:"Loading session..."}):null,P&&T?(0,l.jsx)("span",{className:"text-danger fs-14",children:T}):null,!P&&(0,l.jsx)(a.default,{href:n.all_routes.appointments,className:"btn btn-outline-primary",children:"Back to Appointments"})]}),(0,l.jsxs)("div",{className:"row g-2 dialysis-form-row",children:[(0,l.jsx)("div",{className:"col-md-2 col-lg-2 mb-2 d-flex",children:(0,l.jsxs)("div",{className:"card shadow-sm flex-grow-1 d-flex flex-column",children:[(0,l.jsx)("div",{className:"card-header",children:(0,l.jsx)("h6",{className:"fw-bold mb-0",children:"Sections"})}),(0,l.jsx)("div",{className:"card-body p-2 flex-grow-1 overflow-y-auto",children:(0,l.jsxs)("ul",{className:"list-group list-group-flush",children:[(0,l.jsx)("li",{className:"list-group-item list-group-item-action cursor-pointer",style:{cursor:"pointer"},onClick:()=>A("general-information"),children:"General Information"}),(0,l.jsx)("li",{className:"list-group-item list-group-item-action cursor-pointer",style:{cursor:"pointer"},onClick:()=>A("pre-dialysis-assessment"),children:"Pre-Dialysis Assessment"}),(0,l.jsx)("li",{className:"list-group-item list-group-item-action cursor-pointer",style:{cursor:"pointer"},onClick:()=>A("dialysis-monitoring"),children:"Dialysis Monitoring"}),(0,l.jsx)("li",{className:"list-group-item list-group-item-action cursor-pointer",style:{cursor:"pointer"},onClick:()=>A("post-dialysis-assessment"),children:"Post Dialysis Assessment"}),(0,l.jsx)("li",{className:"list-group-item list-group-item-action cursor-pointer",style:{cursor:"pointer"},onClick:()=>A("complications-during-dialysis"),children:"Complications During Dialysis"}),(0,l.jsx)("li",{className:"list-group-item list-group-item-action cursor-pointer",style:{cursor:"pointer"},onClick:()=>A("treatment-given"),children:"Treatment Given"})]})})]})}),(0,l.jsx)("div",{className:"col-md-10 col-lg-10 d-flex",children:(0,l.jsx)("div",{className:"card shadow-sm flex-grow-1 d-flex flex-column min-h-0",children:(0,l.jsxs)("form",{ref:o,className:"flex-grow-1 d-flex flex-column",onSubmit:F,children:[(0,l.jsxs)("div",{className:"card-body flex-grow-1 overflow-y-auto",style:{minHeight:"75vh",maxHeight:"85vh"},children:[(0,l.jsx)("input",{type:"hidden",name:"patient.name"}),(0,l.jsx)("input",{type:"hidden",name:"patient.age"}),(0,l.jsx)("input",{type:"hidden",name:"patient.gender"}),(0,l.jsx)("input",{type:"hidden",name:"meta.sessionDate"}),(0,l.jsx)("input",{type:"hidden",name:"meta.createdAt"}),(0,l.jsxs)("div",{ref:e["general-information"],id:"general-information",className:"mb-4",children:[(0,l.jsx)("h5",{className:"fw-bold mb-3",children:"General Information"}),(0,l.jsx)("div",{className:"border rounded p-3",children:(0,l.jsxs)("div",{className:"row g-2",children:[(0,l.jsxs)("div",{className:"col-md-2 col-12 col-sm-6",children:[(0,l.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Machine Number"}),(0,l.jsx)("input",{name:"general.machineNumber",type:"text",className:"form-control form-control-sm"})]}),(0,l.jsxs)("div",{className:"col-md-2 col-12 col-sm-6",children:[(0,l.jsx)("label",{className:"form-label mb-1 fw-medium",children:"MRD No."}),(0,l.jsx)("input",{name:"general.mrdNo",type:"hidden",value:y}),(0,l.jsx)("input",{name:"general.mrdNoDisplay",type:"text",className:"form-control form-control-sm",value:y,disabled:!0})]}),(0,l.jsxs)("div",{className:"col-md-2 col-12 col-sm-6",children:[(0,l.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Start Time"}),(0,l.jsx)("input",{name:"general.startTime",type:"text",className:"form-control form-control-sm",placeholder:"HH:MM"})]}),(0,l.jsxs)("div",{className:"col-md-2 col-12 col-sm-6",children:[(0,l.jsx)("label",{className:"form-label mb-1 fw-medium",children:"End Time"}),(0,l.jsx)("input",{name:"general.endTime",type:"text",className:"form-control form-control-sm",placeholder:"HH:MM"})]}),(0,l.jsxs)("div",{className:"col-md-4 col-12 col-sm-12",children:[(0,l.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Technician Name"}),(0,l.jsx)("input",{name:"general.technicianName",type:"text",className:"form-control form-control-sm"})]}),(0,l.jsxs)("div",{className:"col-md-2 col-12",children:[(0,l.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Dialyzer Usage Type"}),(0,l.jsxs)("div",{className:"d-flex flex-wrap gap-2",children:[(0,l.jsxs)("div",{className:"form-check me-2",children:[(0,l.jsx)("input",{className:"form-check-input",type:"checkbox",id:"dialyzer-single-use",name:"general.dialyzerUsageSingleUse"}),(0,l.jsx)("label",{className:"form-check-label",htmlFor:"dialyzer-single-use",style:{color:"#000"},children:"Single Use"})]}),(0,l.jsxs)("div",{className:"form-check",children:[(0,l.jsx)("input",{className:"form-check-input",type:"checkbox",id:"dialyzer-reuse",name:"general.dialyzerUsageReuse"}),(0,l.jsx)("label",{className:"form-check-label",htmlFor:"dialyzer-reuse",style:{color:"#000"},children:"Reuse"})]})]})]}),(0,l.jsxs)("div",{className:"col-md-2 col-12 col-sm-6",children:[(0,l.jsx)("label",{className:"form-label mb-1 fw-medium",style:{whiteSpace:"nowrap"},children:"Times Reused"}),(0,l.jsx)("input",{name:"general.timesReused",type:"text",className:"form-control form-control-sm"})]}),(0,l.jsxs)("div",{className:"col-md-2 col-6",children:[(0,l.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Fiber Volume"}),(0,l.jsx)("input",{name:"general.fiberVolume",type:"text",className:"form-control form-control-sm"})]}),(0,l.jsxs)("div",{className:"col-md-2 col-6",children:[(0,l.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Bolus"}),(0,l.jsx)("input",{name:"general.bolus",type:"text",className:"form-control form-control-sm"})]}),(0,l.jsxs)("div",{className:"col-md-2 col-6",children:[(0,l.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Hourly"}),(0,l.jsx)("input",{name:"general.hourly",type:"text",className:"form-control form-control-sm"})]}),(0,l.jsxs)("div",{className:"col-md-2 col-6",children:[(0,l.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Heparin Use"}),(0,l.jsx)("input",{name:"general.heparinUse",type:"text",className:"form-control form-control-sm"})]}),(0,l.jsxs)("div",{className:"col-md-2 col-12 col-sm-6",children:[(0,l.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Height"}),(0,l.jsx)("input",{name:"general.height",type:"text",className:"form-control form-control-sm"})]}),(0,l.jsxs)("div",{className:"col-md-2 col-12 col-sm-6",children:[(0,l.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Pre HD Weight Today"}),(0,l.jsx)("input",{name:"general.preHdWeightToday",type:"text",className:"form-control form-control-sm"})]}),(0,l.jsxs)("div",{className:"col-md-2 col-12 col-sm-6",children:[(0,l.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Last Post HD Weight"}),(0,l.jsx)("input",{name:"general.lastPostHdWeight",type:"text",className:"form-control form-control-sm"})]}),(0,l.jsxs)("div",{className:"col-md-2 col-12 col-sm-6",children:[(0,l.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Weight Gain"}),(0,l.jsx)("input",{name:"general.weightGain",type:"text",className:"form-control form-control-sm"})]}),(0,l.jsxs)("div",{className:"col-md-2 col-12 col-sm-6",children:[(0,l.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Target Weight Loss"}),(0,l.jsx)("input",{name:"general.targetWeightLoss",type:"text",className:"form-control form-control-sm"})]}),(0,l.jsxs)("div",{className:"col-md-2 col-12 col-sm-6",children:[(0,l.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Post HD Weight Today"}),(0,l.jsx)("input",{name:"general.postHdWeightToday",type:"text",className:"form-control form-control-sm"})]}),(0,l.jsxs)("div",{className:"col-md-2 col-12 col-sm-6",children:[(0,l.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Actual Weight Loss"}),(0,l.jsx)("input",{name:"general.actualWeightLoss",type:"text",className:"form-control  form-control-sm"})]}),(0,l.jsxs)("div",{className:"col-md-2 col-12",children:[(0,l.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Target Dry Weight"}),(0,l.jsx)("input",{name:"general.targetDryWeight",type:"text",className:"form-control form-control-sm"})]}),(0,l.jsxs)("div",{className:"col-md-2 col-12",children:[(0,l.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Remain Weight Loss"}),(0,l.jsx)("input",{name:"general.remainingWeightLoss",type:"text",className:"form-control form-control-sm"})]}),(0,l.jsxs)("div",{className:"col-md-6 col-12",children:[(0,l.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Vascular Access"}),(0,l.jsxs)("div",{className:"d-flex flex-wrap align-items-center gap-3",children:[(0,l.jsxs)("div",{className:"form-check m-0",children:[(0,l.jsx)("input",{className:"form-check-input",type:"checkbox",id:"avf",name:"general.avfSelected"}),(0,l.jsx)("label",{className:"form-check-label",htmlFor:"avf",style:{color:"#000"},children:"AVF"})]}),(0,l.jsxs)("div",{className:"form-check m-0",children:[(0,l.jsx)("input",{className:"form-check-input",type:"checkbox",id:"avg",name:"general.avgSelected"}),(0,l.jsx)("label",{className:"form-check-label",htmlFor:"avg",style:{color:"#000"},children:"AVG"})]}),(0,l.jsxs)("div",{className:"form-check m-0",children:[(0,l.jsx)("input",{className:"form-check-input",type:"checkbox",id:"ijv",name:"general.ijvSelected"}),(0,l.jsx)("label",{className:"form-check-label",htmlFor:"ijv",style:{color:"#000"},children:"IJV"})]}),(0,l.jsxs)("div",{className:"form-check m-0",children:[(0,l.jsx)("input",{className:"form-check-input",type:"checkbox",id:"femoral",name:"general.femoralSelected"}),(0,l.jsx)("label",{className:"form-check-label",htmlFor:"femoral",style:{color:"#000"},children:"Femoral"})]}),(0,l.jsxs)("div",{className:"form-check m-0",children:[(0,l.jsx)("input",{className:"form-check-input",type:"checkbox",id:"tunneled-catheter",name:"general.tunneledCatheter"}),(0,l.jsx)("label",{className:"form-check-label",htmlFor:"tunneled-catheter",style:{color:"#000"},children:"Tunneled Catheter"})]})]})]}),(0,l.jsxs)("div",{className:"col-md-3 col-12",children:[(0,l.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Central Line"}),(0,l.jsxs)("div",{className:"d-flex flex-wrap gap-2",children:[(0,l.jsxs)("div",{className:"form-check me-2",children:[(0,l.jsx)("input",{className:"form-check-input",type:"checkbox",id:"central-line-yes",name:"general.centralLineYes"}),(0,l.jsx)("label",{className:"form-check-label",htmlFor:"central-line-yes",style:{color:"#000"},children:"Yes"})]}),(0,l.jsxs)("div",{className:"form-check me-2",children:[(0,l.jsx)("input",{className:"form-check-input",type:"checkbox",id:"central-line-no",name:"general.centralLineNo",checked:f,onChange:e=>{b(e.target.checked)}}),(0,l.jsx)("label",{className:"form-check-label",htmlFor:"central-line-no",style:{color:"#000"},children:"No"})]}),(0,l.jsxs)("div",{className:"form-check me-2",children:[(0,l.jsx)("input",{className:"form-check-input",type:"radio",id:"central-line-ijv",name:"general.centralLineSite",value:"ijv",disabled:f}),(0,l.jsx)("label",{className:"form-check-label",htmlFor:"central-line-ijv",style:{color:"#000"},children:"IJV"})]}),(0,l.jsxs)("div",{className:"form-check",children:[(0,l.jsx)("input",{className:"form-check-input",type:"radio",id:"central-line-femoral",name:"general.centralLineSite",value:"femoral",disabled:f}),(0,l.jsx)("label",{className:"form-check-label",htmlFor:"central-line-femoral",style:{color:"#000"},children:"Femoral"})]})]})]}),(0,l.jsxs)("div",{className:"col-md-3 col-12",children:[(0,l.jsx)("label",{className:"form-label mb-1 fw-medium",children:"AVF Needle Size"}),(0,l.jsxs)("div",{className:"d-flex flex-wrap gap-2",children:[(0,l.jsxs)("div",{className:"form-check me-2",children:[(0,l.jsx)("input",{className:"form-check-input",type:"checkbox",id:"needle-16g",name:"general.avfNeedleSize16G"}),(0,l.jsx)("label",{className:"form-check-label",htmlFor:"needle-16g",style:{color:"#000"},children:"16G"})]}),(0,l.jsxs)("div",{className:"form-check me-2",children:[(0,l.jsx)("input",{className:"form-check-input",type:"checkbox",id:"needle-17g",name:"general.avfNeedleSize17G"}),(0,l.jsx)("label",{className:"form-check-label",htmlFor:"needle-17g",style:{color:"#000"},children:"17G"})]}),(0,l.jsxs)("div",{className:"form-check",children:[(0,l.jsx)("input",{className:"form-check-input",type:"checkbox",id:"needle-others",name:"general.avfNeedleSizeOthers"}),(0,l.jsx)("label",{className:"form-check-label",htmlFor:"needle-others",style:{color:"#000"},children:"Others"})]})]})]}),(0,l.jsxs)("div",{className:"col-md-3 col-12",children:[(0,l.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Bruit / Thrill"}),(0,l.jsxs)("div",{className:"d-flex flex-wrap gap-2",children:[(0,l.jsxs)("div",{className:"form-check me-2",children:[(0,l.jsx)("input",{className:"form-check-input",type:"checkbox",id:"bruit-present",name:"general.bruitThrillPresent"}),(0,l.jsx)("label",{className:"form-check-label",htmlFor:"bruit-present",style:{color:"#000"},children:"Present"})]}),(0,l.jsxs)("div",{className:"form-check me-2",children:[(0,l.jsx)("input",{className:"form-check-input",type:"checkbox",id:"bruit-absent",name:"general.bruitThrillAbsent"}),(0,l.jsx)("label",{className:"form-check-label",htmlFor:"bruit-absent",style:{color:"#000"},children:"Absent"})]}),(0,l.jsxs)("div",{className:"form-check",children:[(0,l.jsx)("input",{className:"form-check-input",type:"checkbox",id:"bruit-na",name:"general.bruitThrillNotApplicable"}),(0,l.jsx)("label",{className:"form-check-label",htmlFor:"bruit-na",style:{color:"#000"},children:"Not Applicable"})]})]})]})]})})]}),(0,l.jsxs)("div",{ref:e["pre-dialysis-assessment"],id:"pre-dialysis-assessment",className:"mb-4",children:[(0,l.jsx)("h5",{className:"fw-bold mb-3",children:"Pre-Dialysis Assessment"}),(0,l.jsx)("div",{className:"border rounded p-3",children:(0,l.jsxs)("div",{className:"row g-2",children:[(0,l.jsxs)("div",{className:"col-md-3 col-6",children:[(0,l.jsx)("label",{className:"form-label mb-1 fw-medium",children:"BP at Start of HD"}),(0,l.jsx)("input",{name:"pre.bpStartHd",type:"text",className:"form-control form-control-sm"})]}),(0,l.jsxs)("div",{className:"col-md-3 col-6",children:[(0,l.jsx)("label",{className:"form-label mb-1 fw-medium",children:"SPO2"}),(0,l.jsx)("input",{name:"pre.spo2",type:"text",className:"form-control form-control-sm"})]}),(0,l.jsxs)("div",{className:"col-md-3 col-6",children:[(0,l.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Body Temperature"}),(0,l.jsx)("input",{name:"pre.bodyTemperature",type:"text",className:"form-control form-control-sm"})]}),(0,l.jsxs)("div",{className:"col-md-3 col-6",children:[(0,l.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Pulse"}),(0,l.jsx)("input",{name:"pre.pulse",type:"text",className:"form-control form-control-sm"})]})]})})]}),(0,l.jsxs)("div",{ref:e["dialysis-monitoring"],id:"dialysis-monitoring",className:"mb-4",children:[(0,l.jsx)("h5",{className:"fw-bold mb-3",children:"Dialysis Monitoring"}),(0,l.jsx)("div",{className:"border rounded p-3",children:(0,l.jsx)("div",{className:"table-responsive",children:(0,l.jsxs)("table",{className:"dialysis-table w-100 text-center",children:[(0,l.jsx)("thead",{className:"table-light",children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{style:{whiteSpace:"nowrap",width:"7%"},children:"Time on HD"}),(0,l.jsx)("th",{children:"PR"}),(0,l.jsx)("th",{style:{width:"10%"},children:"BP"}),(0,l.jsx)("th",{children:"BFR"}),(0,l.jsx)("th",{children:"DFR"}),(0,l.jsx)("th",{style:{width:"10%"},children:"UFR"}),(0,l.jsx)("th",{children:"Total UF"}),(0,l.jsx)("th",{children:"Temp."}),(0,l.jsx)("th",{children:"DyNa"}),(0,l.jsx)("th",{children:"Heparin"}),(0,l.jsx)("th",{style:{width:"10%"},children:"RBS"})]})}),(0,l.jsx)("tbody",{children:Array.from({length:8}).map((e,s)=>(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{style:{padding:"2px 1px"},children:(0,l.jsx)("input",{type:"text",className:"form-control form-control-sm text-center","aria-label":"Time on HD",style:{fontSize:"16px"},name:`monitoring.${s}.timeOnHd`})}),(0,l.jsx)("td",{style:{padding:"2px 1px"},children:(0,l.jsx)("input",{type:"text",className:"form-control form-control-sm text-center","aria-label":"PR",style:{fontSize:"16px"},name:`monitoring.${s}.pr`})}),(0,l.jsx)("td",{style:{padding:"2px 1px"},children:(0,l.jsx)("input",{type:"text",className:"form-control form-control-sm text-center","aria-label":"BP",style:{fontSize:"16px"},name:`monitoring.${s}.bp`})}),(0,l.jsx)("td",{style:{padding:"2px 1px"},children:(0,l.jsx)("input",{type:"text",className:"form-control form-control-sm text-center","aria-label":"BFR",style:{fontSize:"16px"},name:`monitoring.${s}.bfr`})}),(0,l.jsx)("td",{style:{padding:"2px 1px"},children:(0,l.jsx)("input",{type:"text",className:"form-control form-control-sm text-center","aria-label":"DFR",style:{fontSize:"16px"},name:`monitoring.${s}.dfr`})}),(0,l.jsx)("td",{style:{padding:"2px 1px"},children:(0,l.jsx)("input",{type:"text",className:"form-control form-control-sm text-center","aria-label":"UFR",style:{fontSize:"16px"},name:`monitoring.${s}.ufr`})}),(0,l.jsx)("td",{style:{padding:"2px 1px"},children:(0,l.jsx)("input",{type:"text",className:"form-control form-control-sm text-center","aria-label":"Total UF",style:{fontSize:"16px"},name:`monitoring.${s}.totalUf`})}),(0,l.jsx)("td",{style:{padding:"2px 1px"},children:(0,l.jsx)("input",{type:"text",className:"form-control form-control-sm text-center","aria-label":"Temperature",style:{fontSize:"16px"},name:`monitoring.${s}.temperature`})}),(0,l.jsx)("td",{style:{padding:"2px 1px"},children:(0,l.jsx)("input",{type:"text",className:"form-control form-control-sm text-center","aria-label":"DyNa",style:{fontSize:"16px"},name:`monitoring.${s}.dyna`})}),(0,l.jsx)("td",{style:{padding:"2px 1px"},children:(0,l.jsx)("input",{type:"text",className:"form-control form-control-sm text-center","aria-label":"Heparin",style:{fontSize:"16px"},name:`monitoring.${s}.heparin`})}),(0,l.jsx)("td",{style:{padding:"2px 1px"},children:(0,l.jsx)("input",{type:"text",className:"form-control form-control-sm text-center","aria-label":"RBS",style:{fontSize:"16px"},name:`monitoring.${s}.rbs`})})]},s))})]})})})]}),(0,l.jsxs)("div",{ref:e["post-dialysis-assessment"],id:"post-dialysis-assessment",className:"mb-4",children:[(0,l.jsx)("h5",{className:"fw-bold mb-3",children:"Post Dialysis Assessment"}),(0,l.jsx)("div",{className:"border rounded p-3",children:(0,l.jsxs)("div",{className:"row g-2",children:[(0,l.jsxs)("div",{className:"col-md-2 col-12",children:[(0,l.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Pulse"}),(0,l.jsx)("input",{name:"post.pulse",type:"text",className:"form-control form-control-sm"})]}),(0,l.jsxs)("div",{className:"col-md-2 col-12",children:[(0,l.jsx)("label",{className:"form-label mb-1 fw-medium",children:"BP"}),(0,l.jsx)("input",{name:"post.bp",type:"text",className:"form-control form-control-sm"})]}),(0,l.jsxs)("div",{className:"col-md-2 col-12",children:[(0,l.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Body Temperature"}),(0,l.jsx)("input",{name:"post.bodyTemperature",type:"text",className:"form-control form-control-sm"})]}),(0,l.jsxs)("div",{className:"col-md-2 col-12",children:[(0,l.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Post HD Weight"}),(0,l.jsx)("div",{className:"d-flex gap-2",children:(0,l.jsx)("input",{name:"post.postHdWeight1",type:"text",className:"form-control form-control-sm"})})]}),(0,l.jsxs)("div",{className:"col-md-3 col-12",children:[(0,l.jsx)("label",{className:"form-label mb-1 fw-medium",children:"UF Removed"}),(0,l.jsx)("input",{name:"post.ufRemoved",type:"text",className:"form-control form-control-sm"})]}),(0,l.jsxs)("div",{className:"col-md-3 col-12",children:[(0,l.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Prolonged Bleeding from Access Site"}),(0,l.jsxs)("div",{className:"d-flex flex-wrap gap-3",children:[(0,l.jsxs)("div",{className:"form-check",children:[(0,l.jsx)("input",{className:"form-check-input",type:"radio",id:"post-prolonged-yes",name:"post.prolongedBleeding",value:"Yes"}),(0,l.jsx)("label",{className:"form-check-label",htmlFor:"post-prolonged-yes",style:{color:"#000"},children:"Yes"})]}),(0,l.jsxs)("div",{className:"form-check",children:[(0,l.jsx)("input",{className:"form-check-input",type:"radio",id:"post-prolonged-no",name:"post.prolongedBleeding",value:"No"}),(0,l.jsx)("label",{className:"form-check-label",htmlFor:"post-prolonged-no",style:{color:"#000"},children:"No"})]})]})]}),(0,l.jsxs)("div",{className:"col-md-3 col-12",children:[(0,l.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Bruit/Thrill (AVF/AVG)"}),(0,l.jsxs)("div",{className:"d-flex flex-wrap gap-3",children:[(0,l.jsxs)("div",{className:"form-check m-0",children:[(0,l.jsx)("input",{className:"form-check-input",type:"checkbox",id:"post-bruit-present",name:"post.bruitThrillPresent"}),(0,l.jsx)("label",{className:"form-check-label",htmlFor:"post-bruit-present",style:{color:"#000"},children:"Present"})]}),(0,l.jsxs)("div",{className:"form-check m-0",children:[(0,l.jsx)("input",{className:"form-check-input",type:"checkbox",id:"post-bruit-absent",name:"post.bruitThrillAbsent"}),(0,l.jsx)("label",{className:"form-check-label",htmlFor:"post-bruit-absent",style:{color:"#000"},children:"Absent"})]}),(0,l.jsxs)("div",{className:"form-check m-0",children:[(0,l.jsx)("input",{className:"form-check-input",type:"checkbox",id:"post-bruit-na",name:"post.bruitThrillNotApplicable"}),(0,l.jsx)("label",{className:"form-check-label",htmlFor:"post-bruit-na",style:{color:"#000"},children:"Not Applicable"})]})]})]}),(0,l.jsxs)("div",{className:"col-md-3 col-12",children:[(0,l.jsx)("label",{className:"form-label mb-1 fw-medium",children:"KT / V Achieved"}),(0,l.jsx)("input",{name:"post.ktVAchieved",type:"text",className:"form-control form-control-sm"})]})]})})]}),(0,l.jsxs)("div",{ref:e["complications-during-dialysis"],id:"complications-during-dialysis",className:"mb-4",children:[(0,l.jsx)("h5",{className:"fw-bold mb-3",children:"Complications During Dialysis"}),(0,l.jsx)("div",{className:"border rounded p-3",children:(0,l.jsxs)("div",{className:"row g-2",children:[(0,l.jsx)("div",{className:"col-md-3 col-12",children:(0,l.jsxs)("div",{className:"form-check",children:[(0,l.jsx)("input",{className:"form-check-input",type:"checkbox",id:"comp-hypotension",name:"comp.hypotension"}),(0,l.jsx)("label",{className:"form-check-label",htmlFor:"comp-hypotension",style:{color:"#000"},children:"Hypotension"})]})}),(0,l.jsx)("div",{className:"col-md-3 col-12",children:(0,l.jsxs)("div",{className:"form-check",children:[(0,l.jsx)("input",{className:"form-check-input",type:"checkbox",id:"comp-fever",name:"comp.fever"}),(0,l.jsx)("label",{className:"form-check-label",htmlFor:"comp-fever",style:{color:"#000"},children:"Fever"})]})}),(0,l.jsx)("div",{className:"col-md-3 col-12",children:(0,l.jsxs)("div",{className:"form-check",children:[(0,l.jsx)("input",{className:"form-check-input",type:"checkbox",id:"comp-headache",name:"comp.headache"}),(0,l.jsx)("label",{className:"form-check-label",htmlFor:"comp-headache",style:{color:"#000"},children:"Headache"})]})}),(0,l.jsx)("div",{className:"col-md-3 col-12",children:(0,l.jsxs)("div",{className:"form-check",children:[(0,l.jsx)("input",{className:"form-check-input",type:"checkbox",id:"comp-rigor",name:"comp.rigor"}),(0,l.jsx)("label",{className:"form-check-label",htmlFor:"comp-rigor",style:{color:"#000"},children:"Rigor"})]})}),(0,l.jsx)("div",{className:"col-md-3 col-12",children:(0,l.jsxs)("div",{className:"form-check",children:[(0,l.jsx)("input",{className:"form-check-input",type:"checkbox",id:"comp-cramps",name:"comp.cramps"}),(0,l.jsx)("label",{className:"form-check-label",htmlFor:"comp-cramps",style:{color:"#000"},children:"Cramps"})]})}),(0,l.jsx)("div",{className:"col-md-3 col-12",children:(0,l.jsxs)("div",{className:"form-check",children:[(0,l.jsx)("input",{className:"form-check-input",type:"checkbox",id:"comp-rash",name:"comp.rash"}),(0,l.jsx)("label",{className:"form-check-label",htmlFor:"comp-rash",style:{color:"#000"},children:"Rash"})]})}),(0,l.jsx)("div",{className:"col-md-3 col-12",children:(0,l.jsxs)("div",{className:"form-check",children:[(0,l.jsx)("input",{className:"form-check-input",type:"checkbox",id:"comp-vomiting",name:"comp.vomiting"}),(0,l.jsx)("label",{className:"form-check-label",htmlFor:"comp-vomiting",style:{color:"#000"},children:"Vomiting"})]})}),(0,l.jsx)("div",{className:"col-md-3 col-12",children:(0,l.jsxs)("div",{className:"form-check",children:[(0,l.jsx)("input",{className:"form-check-input",type:"checkbox",id:"comp-chest-pain",name:"comp.chestPain"}),(0,l.jsx)("label",{className:"form-check-label",htmlFor:"comp-chest-pain",style:{color:"#000"},children:"Chest Pain"})]})}),(0,l.jsx)("div",{className:"col-md-3 col-12",children:(0,l.jsxs)("div",{className:"form-check",children:[(0,l.jsx)("input",{className:"form-check-input",type:"checkbox",id:"comp-dyspnea",name:"comp.dyspnea"}),(0,l.jsx)("label",{className:"form-check-label",htmlFor:"comp-dyspnea",style:{color:"#000"},children:"Dyspnea"})]})}),(0,l.jsx)("div",{className:"col-md-3 col-12",children:(0,l.jsxs)("div",{className:"form-check",children:[(0,l.jsx)("input",{className:"form-check-input",type:"checkbox",id:"comp-pruritus",name:"comp.pruritus"}),(0,l.jsx)("label",{className:"form-check-label",htmlFor:"comp-pruritus",style:{color:"#000"},children:"Pruritus"})]})}),(0,l.jsx)("div",{className:"col-md-3 col-12",children:(0,l.jsxs)("div",{className:"form-check",children:[(0,l.jsx)("input",{className:"form-check-input",type:"checkbox",id:"comp-dialyzer-reaction",name:"comp.dialyzerReaction"}),(0,l.jsx)("label",{className:"form-check-label",htmlFor:"comp-dialyzer-reaction",style:{color:"#000"},children:"Dialyzer Reaction"})]})}),(0,l.jsx)("div",{className:"col-md-3 col-12",children:(0,l.jsxs)("div",{className:"form-check",children:[(0,l.jsx)("input",{className:"form-check-input",type:"checkbox",id:"comp-seizures",name:"comp.seizures"}),(0,l.jsx)("label",{className:"form-check-label",htmlFor:"comp-seizures",style:{color:"#000"},children:"Seizures"})]})}),(0,l.jsx)("div",{className:"col-md-3 col-12",children:(0,l.jsxs)("div",{className:"form-check",children:[(0,l.jsx)("input",{className:"form-check-input",type:"checkbox",id:"comp-no-complication",name:"comp.noComplication"}),(0,l.jsx)("label",{className:"form-check-label",htmlFor:"comp-no-complication",style:{color:"#000"},children:"No Complication"})]})}),(0,l.jsx)("div",{className:"col-md-3 col-12",children:(0,l.jsxs)("div",{className:"form-check",children:[(0,l.jsx)("input",{className:"form-check-input",type:"checkbox",id:"comp-form-sibring",name:"comp.formSibring"}),(0,l.jsx)("label",{className:"form-check-label",htmlFor:"comp-form-sibring",style:{color:"#000"},children:"Sibring"})]})}),(0,l.jsx)("div",{className:"col-md-3 col-12",children:(0,l.jsxs)("div",{className:"form-check",children:[(0,l.jsx)("input",{className:"form-check-input",type:"checkbox",id:"comp-hypoglycemia",name:"comp.hypoglycemia"}),(0,l.jsx)("label",{className:"form-check-label",htmlFor:"comp-hypoglycemia",style:{color:"#000"},children:"Hypoglycemia"})]})}),(0,l.jsx)("div",{className:"col-md-3 col-12",children:(0,l.jsxs)("div",{className:"form-check",children:[(0,l.jsx)("input",{className:"form-check-input",type:"checkbox",id:"comp-hypertension",name:"comp.hypertension"}),(0,l.jsx)("label",{className:"form-check-label",htmlFor:"comp-hypertension",style:{color:"#000"},children:"Hypertension"})]})}),(0,l.jsxs)("div",{className:"col-12 mt-2",children:[(0,l.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Other Complications During Dialysis"}),(0,l.jsx)("textarea",{name:"comp.other",className:"form-control",rows:3})]})]})})]}),(0,l.jsxs)("div",{ref:e["treatment-given"],id:"treatment-given",className:"mb-4",children:[(0,l.jsx)("h5",{className:"fw-bold mb-3",children:"Treatment Given"}),(0,l.jsx)("div",{className:"border rounded p-3",children:(0,l.jsxs)("div",{className:"row g-2",children:[(0,l.jsxs)("div",{className:"col-md-4 col-12",children:[(0,l.jsx)("label",{className:"form-label mb-1 fw-medium",children:"EPO Dosage"}),(0,l.jsx)("input",{name:"treat.epoDosage",type:"text",className:"form-control form-control-sm"})]}),(0,l.jsxs)("div",{className:"col-md-4 col-12",children:[(0,l.jsx)("label",{className:"form-label mb-1 fw-medium",children:"EPO Given By"}),(0,l.jsx)("input",{name:"treat.epoGivenBy",type:"text",className:"form-control form-control-sm"})]}),(0,l.jsxs)("div",{className:"col-md-4 col-12",children:[(0,l.jsx)("label",{className:"form-label mb-1 fw-medium",children:"IV Iron Dose"}),(0,l.jsx)("input",{name:"treat.ivIronDose",type:"text",className:"form-control form-control-sm"})]}),(0,l.jsxs)("div",{className:"col-md-2 col-12",children:[(0,l.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Blood Transfusion"}),(0,l.jsxs)("div",{className:"d-flex flex-wrap gap-3",children:[(0,l.jsxs)("div",{className:"form-check",children:[(0,l.jsx)("input",{className:"form-check-input",type:"radio",id:"treat-bt-yes",name:"treat.bloodTransfusion",value:"Yes"}),(0,l.jsx)("label",{className:"form-check-label",htmlFor:"treat-bt-yes",style:{color:"#000"},children:"Yes"})]}),(0,l.jsxs)("div",{className:"form-check",children:[(0,l.jsx)("input",{className:"form-check-input",type:"radio",id:"treat-bt-no",name:"treat.bloodTransfusion",value:"No"}),(0,l.jsx)("label",{className:"form-check-label",htmlFor:"treat-bt-no",style:{color:"#000"},children:"No"})]})]})]}),(0,l.jsxs)("div",{className:"col-md-3 col-12",children:[(0,l.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Number of Unit"}),(0,l.jsx)("input",{name:"treat.numberOfUnits",type:"text",className:"form-control form-control-sm"})]}),(0,l.jsxs)("div",{className:"col-md-4 col-12",children:[(0,l.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Blood Bank Name"}),(0,l.jsx)("input",{name:"treat.bloodBankName",type:"text",className:"form-control form-control-sm"})]}),(0,l.jsxs)("div",{className:"col-md-3 col-12",children:[(0,l.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Type of Blood"}),(0,l.jsx)("input",{name:"treat.typeOfBlood",type:"text",className:"form-control form-control-sm"})]}),(0,l.jsxs)("div",{className:"col-12 mt-2",children:[(0,l.jsx)("label",{className:"form-label mb-1 fw-bold",children:"Other Treatment Given Drug"}),(0,l.jsx)("textarea",{name:"treat.otherTreatmentGivenDrug",className:"form-control",rows:4})]})]})})]})]}),(0,l.jsxs)("div",{className:"card-footer d-flex align-items-center justify-content-end gap-2 bg-white border-top dialysis-no-print",children:[(0,l.jsxs)("button",{type:"button",className:"btn btn-outline-secondary",onClick:()=>{o.current&&function(e){let l=new FormData(e),s=e=>l.get(e)?.toString().trim()??"",a=l=>e.querySelector(`[name="${l}"]`)?.checked??!1,i=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Kolkata",day:"2-digit",month:"2-digit",year:"numeric"}).format(new Date),t=s("meta.sessionDate")||s("meta.createdAt"),r=(()=>{if(!t)return i;let e=new Date(t);return Number.isNaN(e.getTime())?i:new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Kolkata",day:"2-digit",month:"2-digit",year:"numeric"}).format(e)})(),n=new URL(encodeURI("/JJM Logo.png"),window.location.origin).href,o={machineNumber:s("general.machineNumber"),mrdNo:s("general.mrdNo"),technicianName:s("general.technicianName"),startTime:s("general.startTime"),endTime:s("general.endTime"),patientName:s("patient.name"),patientAge:s("patient.age"),patientGender:s("patient.gender"),dialyzerSingle:a("general.dialyzerUsageSingleUse"),dialyzerReuse:a("general.dialyzerUsageReuse"),timesReused:s("general.timesReused"),bolus:s("general.bolus"),hourly:s("general.hourly"),fiberVolume:s("general.fiberVolume"),heparinUse:s("general.heparinUse"),height:s("general.height"),preHdWeight:s("general.preHdWeightToday"),lastPostHdWeight:s("general.lastPostHdWeight"),weightGain:s("general.weightGain"),targetWeightLoss:s("general.targetWeightLoss"),postHdWeightToday:s("general.postHdWeightToday"),actualWeightLoss:s("general.actualWeightLoss"),targetDryWeight:s("general.targetDryWeight"),remainingWeightLoss:s("general.remainingWeightLoss"),avf:a("general.avfSelected"),avg:a("general.avgSelected"),ijv:a("general.ijvSelected"),femoral:a("general.femoralSelected"),tunneled:a("general.tunneledCatheter"),centralYes:a("general.centralLineYes"),centralNo:a("general.centralLineNo"),centralLineSite:s("general.centralLineSite"),needle16g:a("general.avfNeedleSize16G"),needle17g:a("general.avfNeedleSize17G"),needleOthers:a("general.avfNeedleSizeOthers"),needleOthersValue:s("general.avfNeedleSizeOthersValue"),bruitPresent:a("general.bruitThrillPresent"),bruitAbsent:a("general.bruitThrillAbsent"),bruitNA:a("general.bruitThrillNotApplicable"),bpStartHd:s("pre.bpStartHd"),spo2:s("pre.spo2"),bodyTemp:s("pre.bodyTemperature"),prePulse:s("pre.pulse"),monitoring:Array.from({length:8},(e,l)=>({time:s(`monitoring.${l}.timeOnHd`),pr:s(`monitoring.${l}.pr`),bp:s(`monitoring.${l}.bp`),bfr:s(`monitoring.${l}.bfr`),dfr:s(`monitoring.${l}.dfr`),ufr:s(`monitoring.${l}.ufr`),totalUf:s(`monitoring.${l}.totalUf`),temperature:s(`monitoring.${l}.temperature`),dyna:s(`monitoring.${l}.dyna`),heparin:s(`monitoring.${l}.heparin`),rbs:s(`monitoring.${l}.rbs`)})),postPulse:s("post.pulse"),postBp:s("post.bp"),postBodyTemp:s("post.bodyTemperature"),postHdWeight:s("post.postHdWeight1"),ufRemoved:s("post.ufRemoved"),prolongedBleeding:s("post.prolongedBleeding"),postBruitPresent:a("post.bruitThrillPresent"),postBruitAbsent:a("post.bruitThrillAbsent"),postBruitNA:a("post.bruitThrillNotApplicable"),ktV:s("post.ktVAchieved"),hypotension:a("comp.hypotension"),fever:a("comp.fever"),headache:a("comp.headache"),rigor:a("comp.rigor"),cramps:a("comp.cramps"),rash:a("comp.rash"),vomiting:a("comp.vomiting"),chestPain:a("comp.chestPain"),dyspnea:a("comp.dyspnea"),pruritus:a("comp.pruritus"),dialyzerReaction:a("comp.dialyzerReaction"),seizures:a("comp.seizures"),noComplication:a("comp.noComplication"),formSibring:a("comp.formSibring"),hypoglycemia:a("comp.hypoglycemia"),hypertension:a("comp.hypertension"),otherComp:s("comp.other"),epoDosage:s("treat.epoDosage"),epoGivenBy:s("treat.epoGivenBy"),ivIronDose:s("treat.ivIronDose"),bloodTransfusion:s("treat.bloodTransfusion"),numberOfUnits:s("treat.numberOfUnits"),bloodBankName:s("treat.bloodBankName"),typeOfBlood:s("treat.typeOfBlood"),otherDrug:s("treat.otherTreatmentGivenDrug")},c=e=>`<span class="chk">${e?"&#10003;":"&nbsp;"}</span>`,m=(e,l="130px")=>`<div class="field" style="width:${l}">${e||"&nbsp;"}</div>`,d=(e,l,s="auto")=>`<div class="cell" style="min-width:${s}">
      <div class="lbl">${e}</div>
      ${l}
    </div>`,p=(...e)=>`<div class="flex-row">${e.join("")}</div>`,h=o.monitoring.map(e=>`
      <tr>
        <td>${e.time}</td>
        <td>${e.pr}</td>
        <td>${e.bp}</td>
        <td>${e.bfr}</td>
        <td>${e.dfr}</td>
        <td>${e.ufr}</td>
        <td>${e.totalUf}</td>
        <td>${e.temperature}</td>
        <td>${e.dyna}</td>
        <td>${e.heparin}</td>
        <td>${e.rbs}</td>
      </tr>`).join(""),g=[[o.hypotension,"Hypotension"],[o.fever,"Fever"],[o.headache,"Headache"],[o.noComplication,"No Complication"],[o.rigor,"Rigor"],[o.cramps,"Cramps"],[o.rash,"Rash"],[o.vomiting,"Vomiting"],[o.chestPain,"Chest Pain"],[o.dyspnea,"Dyspnea"],[o.pruritus,"Pruritus"],[o.dialyzerReaction,"Dialyzer Reaction"],[o.seizures,"Seizures"],[o.formSibring,"Sibring"],[o.hypoglycemia,"Hypoglycemia"],[o.hypertension,"Hypertension"]],x=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Dialysis Session Form</title>
  <style>
    /* ── Reset ── */
    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: Tahoma, Arial, sans-serif;
      font-size: 11.5pt;
      color: #111;
      background: #fff;
      padding: 2px 14px 10mm 14px;
      line-height: 1.25;
    }

    /* ── Letterhead: same visual as receipt print, full width to match form below ── */
    .receipt-container {
      width: 100%;
      max-width: none;
      margin: 0 0 10px 0;
      padding: 0;
      background: #fff;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 10px;
      padding-bottom: 8px;
      border-bottom: 2px solid #000;
      gap: 12px;
    }
    .header-left {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .header-center {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 54px;
    }
    .logo-img {
      width: 54px;
      height: 54px;
      object-fit: contain;
      flex-shrink: 0;
    }
    .header-info h2 {
      font-size: 20px;
      font-weight: bold;
      margin: 0 0 2px 0;
      color: #000;
      background: transparent;
      border: none;
      border-left: none;
      padding: 0;
    }
    .header-info .certification {
      font-size: 12px;
      color: #000;
      margin-top: 2px;
    }
    .header-right {
      text-align: right;
    }
    .header-right .address {
      font-size: 14px;
      color: #000;
      margin-bottom: 4px;
      line-height: 1.4;
    }
    .header-right .contact {
      font-size: 14px;
      color: #000;
      line-height: 1.6;
    }

    /* ── Form section headings only (not letterhead title) ── */
    h2.dialysis-section-heading {
      font-size: 11pt;
      font-weight: bold;
      background: #eee;
      padding: 3px 8px;
      border-left: 4px solid #444;
      margin: 6px 0 4px;
    }

    /* ── Section wrapper ── */
    .section {
      border: 1px solid #aaa;
      border-radius: 3px;
      padding: 5px;
      margin-bottom: 6px;
    }

    /* ── Horizontal flex row ── */
    .flex-row {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-end;
      gap: 6px 12px;
      margin-bottom: 5px;
    }

    /* Push content to the right (match form UI) ── */
    .push-right {
      margin-left: auto;
    }

    /* ── Label + control stacked ── */
    .cell {
      display: flex;
      flex-direction: column;
      gap: 1px;
    }

    /* ── Field label ── */
    .lbl {
      font-size: 9pt;
      color: #333;
      font-weight: bold;
      white-space: nowrap;
    }

    /* ── Box-style text field ── */
    .field {
      display: inline-block;
      border: 1.5px solid #666;
      border-radius: 3px;
      min-height: 20px;
      padding: 2px 5px;
      font-size: 11pt;
      background: #fff;
    }

    /* ── Textarea-style box ── */
    .textarea-field {
      width: 100%;
      min-height: 52px;
      border: 1.5px solid #666;
      border-radius: 3px;
      padding: 5px 8px;
      font-size: 12pt;
      white-space: pre-wrap;
      word-break: break-word;
      background: #fff;
      margin-top: 6px;
    }

    /* ── Checkbox square ── */
    .chk {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 15px;
      height: 15px;
      border: 1.5px solid #555;
      border-radius: 2px;
      font-size: 11pt;
      font-weight: bold;
      margin-right: 4px;
      vertical-align: middle;
      flex-shrink: 0;
    }

    /* ── Inline checkbox group ── */
    .inline-group {
      display: flex;
      flex-wrap: wrap;
      gap: 6px 16px;
      align-items: center;
      padding-top: 2px;
    }

    .inline-item {
      display: flex;
      align-items: center;
      gap: 3px;
      font-size: 10pt;
      white-space: nowrap;
    }

    /* ── Dialysis monitoring table ── */
    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 10pt;
      margin-top: 6px;
    }

    th {
      border: 1.5px solid #777;
      padding: 6px 4px;
      text-align: center;
      background: #ddd;
      font-size: 10pt;
      font-weight: bold;
    }

    th.col-time { width: 7%; }
    th.col-bp { width: 10%; }
    th.col-rbs { width: 12%; }

    td {
      border: 1.5px solid #777;
      padding: 0;
      text-align: center;
      height: 29px;          /* tightened rows to save space */
      vertical-align: middle;
      font-size: 11pt;
    }

    /* ── Complications grid ── */
    .comp-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px 16px;
    }

    /* ── Page break: avoid splitting a section ── */
    .section {
      page-break-inside: avoid;
    }

    /* ── Print settings (page margins aligned with receipt print) ── */
    @page {
      margin: 8mm 10mm 10mm 10mm;
      size: A4 portrait;
    }

    @media print {
      body {
        padding: 0;
        background: white !important;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
    }
  </style>
</head>
<body>
  <div class="receipt-container">
    <div class="header">
      <div class="header-left">
        <img src="${n}" alt="JJM Hospital" class="logo-img" />
        <div class="header-info">
          <h2>JJM Hospital</h2>
          <div class="certification">ISO 9001:2000 Certified</div>
        </div>
      </div>
      <div class="header-center"></div>
      <div class="header-right">
        <div class="address">
          Jaspur Rd, opposite Anaj Mandi, Sarverkhera,<br />
          Kashipur, Uttarakhand 244713
        </div>
        <div class="contact">
          Phone: +91 9634844075<br />
        </div>
      </div>
    </div>
  </div>

  <!-- ══════════════════ PATIENT INFO ROW ══════════════════════════════ -->
  <div style="display: flex; gap: 20px; margin-bottom: 8px; font-size: 12pt;">
    <div><strong>Patient Name:</strong> ${o.patientName||"____________________"}</div>
    <div><strong>Age:</strong> ${o.patientAge||"_____"}</div>
    <div><strong>Sex:</strong> ${o.patientGender||"__________"}</div>
  </div>

  <!-- ══════════════════ EMPTY SESSION INFO ════════════════════════════ -->
  <div style="display: flex; gap: 40px; align-items: center; margin-bottom: 12px; font-size: 11pt;">
    <div style="display: flex; align-items: center; gap: 8px;">
      <strong>Date:</strong>
      <span>${r||"—"}</span>
    </div>
    <div style="display: flex; align-items: center; gap: 8px;">
      <strong>Start T/t Time:</strong>
      <span>${o.startTime||"—"}</span>
    </div>
    <div style="display: flex; align-items: center; gap: 8px;">
      <strong>End T/t Time:</strong>
      <span>${o.endTime||"—"}</span>
    </div>
  </div>

  <!-- ══════════════════ GENERAL INFORMATION ══════════════════════════════ -->
  <h2 class="dialysis-section-heading">General Information</h2>
  <div class="section">

    ${p(d("Machine Number",m(o.machineNumber,"150px"),"150px"),d("MRD No.",m(o.mrdNo,"150px"),"150px"),`<div class="cell push-right" style="min-width: 220px;">
      <div class="lbl">Technician Name</div>
      ${m(o.technicianName,"220px")}
    </div>`)}

    ${p(`<div class="cell">
        <div class="lbl">Dialyzer Usage Type</div>
        <div class="inline-group">
          <span class="inline-item">${c(o.dialyzerSingle)} Single Use</span>
          <span class="inline-item">${c(o.dialyzerReuse)} Reuse</span>
        </div>
      </div>`,d("Times Reused",m(o.timesReused,"100px"),"100px"),`<div class="push-right" style="display: flex; gap: 12px; align-items: flex-end;">
      ${d("Fiber Volume",m(o.fiberVolume,"120px"),"120px")}
      ${d("Heparin Use",m(o.heparinUse,"120px"),"120px")}
    </div>`)}

    ${p(d("Height",m(o.height,"100px"),"100px"),d("Pre HD Weight Today",m(o.preHdWeight,"110px"),"110px"),d("Last Post HD Weight",m(o.lastPostHdWeight,"110px"),"110px"),d("Weight Gain",m(o.weightGain,"100px"),"100px"),d("Target Weight Loss",m(o.targetWeightLoss,"110px"),"110px"),d("Post HD Weight Today",m(o.postHdWeightToday,"110px"),"110px"),d("Actual Weight Loss",m(o.actualWeightLoss,"110px"),"110px"),d("Bolus",m(o.bolus,"90px"),"90px"),d("Hourly",m(o.hourly,"90px"),"90px"))}

    ${p(d("Target Dry Weight",m(o.targetDryWeight,"120px"),"120px"),d("Remain Weight Loss",m(o.remainingWeightLoss,"120px"),"120px"),`<div class="cell" style="flex:1">
        <div class="lbl">Vascular Access</div>
        <div class="inline-group">
          <span class="inline-item">${c(o.avf)} AVF</span>
          <span class="inline-item">${c(o.avg)} AVG</span>
          <span class="inline-item">${c(o.ijv)} IJV</span>
          <span class="inline-item">${c(o.femoral)} Femoral</span>
          <span class="inline-item">${c(o.tunneled)} Tunneled Catheter</span>
        </div>
      </div>`)}

    ${p(`<div class="cell">
        <div class="lbl">Central Line</div>
        <div class="inline-group">
          <span class="inline-item">${c(o.centralYes)} Yes</span>
          <span class="inline-item">${c(o.centralNo)} No</span>
          <span class="inline-item">${c("ijv"===o.centralLineSite)} IJV</span>
          <span class="inline-item">${c("femoral"===o.centralLineSite)} Femoral</span>
        </div>
      </div>`,`<div class="cell">
        <div class="lbl">AVF Needle Size</div>
        <div class="inline-group">
          <span class="inline-item">${c(o.needle16g)} 16G</span>
          <span class="inline-item">${c(o.needle17g)} 17G</span>
          <span class="inline-item">${c(o.needleOthers)} Others${o.needleOthersValue?` (${o.needleOthersValue})`:""}</span>
        </div>
      </div>`,`<div class="cell">
        <div class="lbl">Bruit / Thrill</div>
        <div class="inline-group">
          <span class="inline-item">${c(o.bruitPresent)} Present</span>
          <span class="inline-item">${c(o.bruitAbsent)} Absent</span>
          <span class="inline-item">${c(o.bruitNA)} Not Applicable</span>
        </div>
      </div>`)}
  </div>

  <!-- ══════════════════ PRE-DIALYSIS ASSESSMENT ═══════════════════════════ -->
  <h2 class="dialysis-section-heading">Pre-Dialysis Assessment</h2>
  <div class="section">
    ${p(d("BP at Start of HD",m(o.bpStartHd,"130px"),"130px"),d("SPO2",m(o.spo2,"100px"),"100px"),d("Body Temperature",m(o.bodyTemp,"130px"),"130px"),d("Pulse",m(o.prePulse,"100px"),"100px"))}
  </div>

  <!-- ══════════════════ DIALYSIS MONITORING ══════════════════════════════ -->
  <h2 class="dialysis-section-heading">Dialysis Monitoring</h2>
  <div class="section">
    <table>
      <thead>
        <tr>
          <th class="col-time">Time on HD</th>
          <th>PR</th>
          <th class="col-bp">BP</th>
          <th>BFR</th>
          <th>DFR</th>
          <th>UFR</th>
          <th>Total UF</th>
          <th>Temp.</th>
          <th>DyNa</th>
          <th>Heparin</th>
          <th class="col-rbs">RBS</th>
        </tr>
      </thead>
      <tbody>
        ${h}
      </tbody>
    </table>
  </div>

  <!-- ══════════════════ POST-DIALYSIS ASSESSMENT ══════════════════════════ -->
  <h2 class="dialysis-section-heading" style="page-break-before: always;">Post Dialysis Assessment</h2>
  <div class="section">
    ${p(d("Pulse",m(o.postPulse,"100px"),"100px"),d("BP",m(o.postBp,"100px"),"100px"),d("Body Temperature",m(o.postBodyTemp,"130px"),"130px"),d("Post HD Weight",m(o.postHdWeight,"120px"),"120px"),d("UF Removed",m(o.ufRemoved,"110px"),"110px"),d("KT / V Achieved",m(o.ktV,"110px"),"110px"))}
    ${p(`<div class="cell">
        <div class="lbl">Prolonged Bleeding from Access Site</div>
        <div class="inline-group">
          <span class="inline-item">${c("Yes"===o.prolongedBleeding)} Yes</span>
          <span class="inline-item">${c("No"===o.prolongedBleeding)} No</span>
        </div>
      </div>`,`<div class="cell">
        <div class="lbl">Bruit / Thrill (AVF / AVG)</div>
        <div class="inline-group">
          <span class="inline-item">${c(o.postBruitPresent)} Present</span>
          <span class="inline-item">${c(o.postBruitAbsent)} Absent</span>
          <span class="inline-item">${c(o.postBruitNA)} Not Applicable</span>
        </div>
      </div>`)}
  </div>

  <!-- ══════════════════ COMPLICATIONS ════════════════════════════════════ -->
  <h2 class="dialysis-section-heading">Complications During Dialysis</h2>
  <div class="section">
    <div class="comp-grid">
      ${g.map(([e,l])=>`<div class="inline-item">${c(e)} ${l}</div>`).join("")}
    </div>
    ${o.otherComp?`<div style="margin-top:10px">
            <div class="lbl">Other Complications</div>
            <div class="textarea-field">${o.otherComp}</div>
          </div>`:""}
  </div>

  <!-- ══════════════════ TREATMENT GIVEN ══════════════════════════════════ -->
  <h2 class="dialysis-section-heading">Treatment Given</h2>
  <div class="section">
    ${p(d("EPO Dosage",m(o.epoDosage,"130px"),"130px"),d("EPO Given By",m(o.epoGivenBy,"150px"),"150px"),d("IV Iron Dose",m(o.ivIronDose,"130px"),"130px"))}
    ${p(`<div class="cell">
        <div class="lbl">Blood Transfusion</div>
        <div class="inline-group">
          <span class="inline-item">${c("Yes"===o.bloodTransfusion)} Yes</span>
          <span class="inline-item">${c("No"===o.bloodTransfusion)} No</span>
        </div>
      </div>`,d("Number of Units",m(o.numberOfUnits,"120px"),"120px"),d("Blood Bank Name",m(o.bloodBankName,"180px"),"180px"),d("Type of Blood",m(o.typeOfBlood,"150px"),"150px"))}
    ${o.otherDrug?`<div style="margin-top:4px">
            <div class="lbl">Other Treatment Given Drug</div>
            <div class="textarea-field">${o.otherDrug}</div>
          </div>`:""}
  </div>

  <!-- ══════════════════ SIGNATURE SECTION ══════════════════════════════════ -->
  <div style="margin-top: 100px; display: flex; justify-content: space-between; font-weight: bold; font-size: 11pt; padding: 0 40px; color: #111;">
    <div style="text-align: center; border-top: 1.5px solid #666; width: 180px; padding-top: 5px;">Completed By</div>
    <div style="text-align: center; border-top: 1.5px solid #666; width: 180px; padding-top: 5px;">Signature</div>
    <div style="text-align: center; border-top: 1.5px solid #666; width: 180px; padding-top: 5px;">Dr. In charge</div>
  </div>
</body>
</html>`,u=document.createElement("iframe");u.setAttribute("title","Dialysis print"),u.style.cssText="position:fixed;right:0;bottom:0;width:0;height:0;border:0;opacity:0;pointer-events:none;",document.body.appendChild(u);let f=u.contentDocument??u.contentWindow?.document,b=u.contentWindow;if(!f||!b)return u.remove();f.open(),f.write(x),f.close();let y=()=>{u.remove()},N=()=>{try{b.focus(),b.print()}finally{window.setTimeout(y,750)}};window.setTimeout(()=>{let e=Array.from(f.images).filter(e=>!e.complete),l=!1,s=()=>{l||(l=!0,window.setTimeout(N,200))};if(0===e.length)return void s();let a=e.length,i=()=>{--a<=0&&s()};e.forEach(e=>{e.addEventListener("load",i,{once:!0}),e.addEventListener("error",i,{once:!0})}),window.setTimeout(s,3500)},0)}(o.current)},children:[(0,l.jsx)("i",{className:"feather-printer me-1"}),"Print"]}),(0,l.jsx)("button",{type:"submit",className:"btn btn-primary dialysis-save-btn",disabled:d,children:d?"Saving...":"Save Dialysis Details"})]})]})})})]})]})})};e.s(["default",0,()=>(0,l.jsx)(s.default.Suspense,{fallback:null,children:(0,l.jsx)(o,{})})],514841)}]);