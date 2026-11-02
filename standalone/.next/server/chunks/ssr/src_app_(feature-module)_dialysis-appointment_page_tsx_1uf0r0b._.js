module.exports=[299630,a=>{"use strict";var b=a.i(187924),c=a.i(572131),d=a.i(238246),e=a.i(50944),f=a.i(83490),g=a.i(42854),h=a.i(190992);let i=()=>{let a={"general-information":(0,c.useRef)(null),"pre-dialysis-assessment":(0,c.useRef)(null),"dialysis-monitoring":(0,c.useRef)(null),"post-dialysis-assessment":(0,c.useRef)(null),"complications-during-dialysis":(0,c.useRef)(null),"treatment-given":(0,c.useRef)(null)},i=(0,c.useRef)(null),j=(0,e.useRouter)(),k=(0,e.useSearchParams)(),[l,m]=(0,c.useState)(!1),[n,o]=(0,c.useState)(null),[p,q]=(0,c.useState)(!1),[r,s]=(0,c.useState)(!1),[t,u]=(0,c.useState)(""),[v,w]=(0,c.useState)(null),[x,y]=(0,c.useState)(!1),[z,A]=(0,c.useState)(null),B=b=>{let c=a[b].current;c&&c.scrollIntoView({behavior:"smooth",block:"start"})},C=k.get("sessionId"),D=k.get("patientId")??k.get("id"),E=!!(C&&g.API_BASE_URL),F=(0,c.useCallback)(a=>{let b=i.current;if(!b)return;let c=a=>b.querySelector(`[name="${CSS.escape(a)}"]`),d=(a,b)=>{let d=c(a);if(d){if(d instanceof HTMLInputElement&&("checkbox"===d.type||"radio"===d.type)){d.checked=!!b;return}d.value=null!=b?String(b):""}},e=(a,b)=>{let d=c(a);d instanceof HTMLInputElement&&"checkbox"===d.type&&(d.checked=!!b)},f=a.patient??{};d("patient.name",f.name),d("patient.age",f.age),d("patient.gender",f.gender),d("meta.sessionDate",a.sessionDate),d("meta.createdAt",a.createdAt);let g=a.generalInformation??{};if(d("general.machineNumber",g.machineNumber),d("general.mrdNo",f?.mrd??g.uhid),d("general.technicianName",g.technicianName),d("general.startTime",g.startTime),d("general.endTime",g.endTime),d("general.bolus",g.bolus),d("general.hourly",g.hourly),d("general.fiberVolume",g.fiberVolume),d("general.heparinUse",g.heparinUse),d("general.height",g.height),d("general.preHdWeightToday",g.preHdWeightToday),d("general.lastPostHdWeight",g.lastPostHdWeight),d("general.weightGain",g.weightGain),d("general.targetWeightLoss",g.targetWeightLoss),d("general.postHdWeightToday",g.postHdWeightToday),d("general.actualWeightLoss",g.actualWeightLoss),d("general.remainingWeightLoss",g.remainingWeightLoss),d("general.targetDryWeight",g.targetDryWeight),e("general.dialyzerUsageSingleUse",!!g.dialyzerUsageSingleUse),e("general.dialyzerUsageReuse",!!g.dialyzerUsageReuse),d("general.timesReused",g.timesReused),e("general.vascularAccessPresent",!!g.vascularAccessPresent),e("general.centralLineYes",!!g.centralLineYes),e("general.centralLineNo",!!g.centralLineNo),g.centralLineIJV){let a=b.querySelector('[name="general.centralLineSite"][value="ijv"]');a&&(a.checked=!0)}else if(g.centralLineFemoral){let a=b.querySelector('[name="general.centralLineSite"][value="femoral"]');a&&(a.checked=!0)}e("general.avfSelected",!!g.avfSelected),e("general.avgSelected",!!g.avgSelected),e("general.ijvSelected",!!g.ijvSelected),e("general.femoralSelected",!!g.femoralSelected),e("general.tunneledCatheter",!!g.tunneledCatheter),e("general.avfNeedleSize16G",!!g.avfNeedleSize16G),e("general.avfNeedleSize17G",!!g.avfNeedleSize17G),e("general.avfNeedleSizeOthers",!!g.avfNeedleSizeOthers),d("general.avfNeedleSizeOthersValue",g.avfNeedleSizeOthersValue),e("general.bruitThrillPresent",!!g.bruitThrillPresent),e("general.bruitThrillAbsent",!!g.bruitThrillAbsent),e("general.bruitThrillNotApplicable",!!g.bruitThrillNotApplicable);let h=a.preDialysisAssessment??{};d("pre.bpStartHd",h.bpStartHd),d("pre.spo2",h.spo2),d("pre.bodyTemperature",h.bodyTemperature),d("pre.pulse",h.pulse),(a.monitoringReadings??[]).forEach((a,b)=>{b>=8||(d(`monitoring.${b}.timeOnHd`,a.timeOnHd),d(`monitoring.${b}.pr`,a.pr),d(`monitoring.${b}.bp`,a.bp),d(`monitoring.${b}.bfr`,a.bfr),d(`monitoring.${b}.dfr`,a.dfr),d(`monitoring.${b}.ufr`,a.ufr),d(`monitoring.${b}.totalUf`,a.totalUf),d(`monitoring.${b}.temperature`,a.temperature),d(`monitoring.${b}.dyna`,a.dyna),d(`monitoring.${b}.heparin`,a.heparin),d(`monitoring.${b}.rbs`,a.rbs))});let j=a.postDialysisAssessment??{};d("post.pulse",j.pulse),d("post.bp",j.bp),d("post.bodyTemperature",j.bodyTemperature),d("post.postHdWeight1",j.postHdWeight),d("post.ufRemoved",j.ufRemoved??j.postHdWeightField2),d("post.ktVAchieved",j.ktVAchieved);let k=j.prolongedBleedingField1;if(k){let a=b.querySelector(`[name="post.prolongedBleeding"][value="${CSS.escape(String(k))}"]`);a&&(a.checked=!0)}let l=String(j.bruitThrillAvfAvgField1??"");e("post.bruitThrillPresent","Present"===l),e("post.bruitThrillAbsent","Absent"===l),e("post.bruitThrillNotApplicable","Not Applicable"===l);let m=a.complications??{};e("comp.hypotension",!!m.hypotension),e("comp.fever",!!m.fever),e("comp.headache",!!m.headache),e("comp.rigor",!!m.rigor),e("comp.cramps",!!m.cramps),e("comp.rash",!!m.rash),e("comp.vomiting",!!m.vomiting),e("comp.chestPain",!!m.chestPain),e("comp.dyspnea",!!m.dyspnea),e("comp.pruritus",!!m.pruritus),e("comp.dialyzerReaction",!!m.dialyzerReaction),e("comp.seizures",!!m.seizures),e("comp.noComplication",!!m.noComplication),e("comp.formSibring",!!m.formSibring),e("comp.hypoglycemia",!!m.hypoglycemia),e("comp.hypertension",!!m.hypertension),d("comp.other",m.other);let n=a.treatmentGiven??{};if(d("treat.epoDosage",n.epoDosage),d("treat.epoGivenBy",n.epoGivenBy),d("treat.ivIronDose",n.ivIronDose),n.bloodTransfusionField1){let a=b.querySelector(`[name="treat.bloodTransfusion"][value="${CSS.escape(String(n.bloodTransfusionField1))}"]`);a&&(a.checked=!0)}d("treat.numberOfUnits",n.numberOfUnits),d("treat.bloodBankName",n.bloodBankName),d("treat.typeOfBlood",n.typeOfBlood),d("treat.otherTreatmentGivenDrug",n.otherTreatmentGivenDrug)},[]);(0,c.useEffect)(()=>{let a=k.get("patientId")??k.get("id");if(!C||!a||!g.API_BASE_URL){w(null),A(null);return}let b=!1;return(async()=>{y(!0),A(null),w(null);try{let c=null;try{let a=await f.default.get(`${g.API_BASE_URL}/hospital/dialysis-session/${C}`);c=(a=>{if(!a||"object"!=typeof a)return null;let b=a.data??a;return b&&"object"==typeof b?b.session&&"object"==typeof b.session?b.session:"string"==typeof b._id?b:null:null})(a.data)}catch{}if(!c){let b=await f.default.get(`${g.API_BASE_URL}/hospital/dialysis-session/patient/${a}`,{params:{page:1,limit:100}}),d=b.data?.data?.sessions??[];c=((a,b)=>{let c=b.trim().toLowerCase();if(c)return a.find(a=>(a?._id?.toLowerCase()??"")===c||(a?.sessionId?.toLowerCase()??"")===c||(a?.daycareAppointmentId?.toLowerCase()??"")===c)})(d,C)??null}if(b)return;if(!c)return void A("Dialysis session not found for this link.");let d=c.generalInformation??{},e=c.patient??{};u(String(e?.mrd??d?.uhid??"")),s(!!d.centralLineNo),w(c)}catch(a){b||(console.error("Failed to fetch dialysis session data",a),A("Failed to load dialysis session. Please try again."))}finally{b||y(!1)}})(),()=>{b=!0}},[k,C]),(0,c.useLayoutEffect)(()=>{v&&F(v)},[v,F]),(0,c.useEffect)(()=>{!E&&D&&g.API_BASE_URL&&(async()=>{try{let a=await f.default.get(`${g.API_BASE_URL}/hospital/patients/${D}`),b=a?.data?.data?.patient??a?.data?.data??null;u(b?.mrd??"")}catch{u("")}})()},[E,D]);let G=async a=>{a.preventDefault(),o(null),q(!1);let b=new FormData(a.currentTarget),c=a=>b.get(a)?.toString().trim()??"",d=a=>{let b=c(a);if(""!==b)return b},e=a=>{let b=a.trim();if(""!==b)return b},i=a=>"on"===b.get(a),l=k.get("patientId")??k.get("id")??c("meta.patientId"),n=k.get("visitId")??c("meta.visitId"),p=k.get("procedureId")??c("meta.procedureId"),r=c("general.centralLineSite"),s={machineNumber:c("general.machineNumber"),uhid:c("general.mrdNo"),technicianName:c("general.technicianName"),startTime:c("general.startTime"),endTime:c("general.endTime"),bolus:c("general.bolus"),hourly:c("general.hourly"),fiberVolume:d("general.fiberVolume"),heparinUse:c("general.heparinUse"),height:d("general.height"),preHdWeightToday:d("general.preHdWeightToday"),lastPostHdWeight:d("general.lastPostHdWeight"),weightGain:d("general.weightGain"),targetWeightLoss:d("general.targetWeightLoss"),postHdWeightToday:d("general.postHdWeightToday"),actualWeightLoss:d("general.actualWeightLoss"),remainingWeightLoss:d("general.remainingWeightLoss"),targetDryWeight:d("general.targetDryWeight"),dialyzerUsageSingleUse:i("general.dialyzerUsageSingleUse"),dialyzerUsageReuse:i("general.dialyzerUsageReuse"),timesReused:d("general.timesReused"),vascularAccessPresent:i("general.vascularAccessPresent"),centralLineYes:i("general.centralLineYes"),centralLineNo:i("general.centralLineNo"),centralLineIJV:"ijv"===r,centralLineFemoral:"femoral"===r,avfSelected:i("general.avfSelected"),avgSelected:i("general.avgSelected"),ijvSelected:i("general.ijvSelected"),femoralSelected:i("general.femoralSelected"),tunneledCatheter:i("general.tunneledCatheter"),avfNeedleSize16G:i("general.avfNeedleSize16G"),avfNeedleSize17G:i("general.avfNeedleSize17G"),avfNeedleSizeOthers:i("general.avfNeedleSizeOthers"),avfNeedleSizeOthersValue:c("general.avfNeedleSizeOthersValue"),bruitThrillPresent:i("general.bruitThrillPresent"),bruitThrillAbsent:i("general.bruitThrillAbsent"),bruitThrillNotApplicable:i("general.bruitThrillNotApplicable")},t={bpStartHd:c("pre.bpStartHd"),spo2:d("pre.spo2"),bodyTemperature:d("pre.bodyTemperature"),pulse:d("pre.pulse")},u=[];for(let a=0;a<8;a+=1){let b=c(`monitoring.${a}.timeOnHd`),d=c(`monitoring.${a}.pr`),f=c(`monitoring.${a}.bp`),g=c(`monitoring.${a}.bfr`),h=c(`monitoring.${a}.dfr`),i=c(`monitoring.${a}.ufr`),j=c(`monitoring.${a}.totalUf`),k=c(`monitoring.${a}.temperature`),l=c(`monitoring.${a}.dyna`),m=c(`monitoring.${a}.heparin`),n=c(`monitoring.${a}.rbs`),o=e(n);[b,d,f,g,h,i,j,k,l,m,n].some(a=>""!==a)&&u.push({timeOnHd:b,pr:e(d),bp:f,bfr:e(g),dfr:e(h),ufr:e(i),totalUf:e(j),temperature:e(k),dyna:e(l),heparin:e(m),rbs:o})}let v={pulse:d("post.pulse"),bp:c("post.bp"),bodyTemperature:d("post.bodyTemperature"),postHdWeight:c("post.postHdWeight1"),ufRemoved:d("post.ufRemoved"),postHdWeightField2:d("post.ufRemoved"),prolongedBleedingField1:c("post.prolongedBleeding"),prolongedBleedingField2:"",bruitThrillAvfAvgField1:i("post.bruitThrillPresent")?"Present":"",bruitThrillAvfAvgField2:i("post.bruitThrillAbsent")?"Absent":"",bruitThrillAvfAvgField3:i("post.bruitThrillNotApplicable")?"Not Applicable":"",ktVAchieved:d("post.ktVAchieved")},w={headache:i("comp.headache"),rash:i("comp.rash"),dyspnea:i("comp.dyspnea"),seizures:i("comp.seizures"),noComplication:i("comp.noComplication"),fever:i("comp.fever"),cramps:i("comp.cramps"),chestPain:i("comp.chestPain"),dialyzerReaction:i("comp.dialyzerReaction"),hypotension:i("comp.hypotension"),rigor:i("comp.rigor"),vomiting:i("comp.vomiting"),pruritus:i("comp.pruritus"),formSibring:i("comp.formSibring"),hypoglycemia:i("comp.hypoglycemia"),hypertension:i("comp.hypertension"),other:c("comp.other")},x={epoDosage:d("treat.epoDosage"),epoGivenBy:c("treat.epoGivenBy"),patientSignature:c("treat.patientSignature"),ivIronDose:d("treat.ivIronDose"),bloodTransfusionField1:c("treat.bloodTransfusion"),bloodTransfusionField2:"",numberOfUnits:d("treat.numberOfUnits"),bloodBankName:c("treat.bloodBankName"),typeOfBlood:c("treat.typeOfBlood"),otherTreatmentGivenDrug:c("treat.otherTreatmentGivenDrug")},y={technicianSignature:c("signatures.technicianSignature"),doctorInCharge:c("signatures.doctorInCharge"),patientSignature:c("signatures.patientSignature")},z=k.get("sessionId"),A=z?{visitId:n,generalInformation:s,preDialysisAssessment:t,monitoringReadings:u,postDialysisAssessment:v,complications:w,treatmentGiven:x,signatures:y,status:"In Progress"}:{patientId:l,visitId:n,procedureId:p,generalInformation:s,preDialysisAssessment:t,monitoringReadings:u,postDialysisAssessment:v,complications:w,treatmentGiven:x,signatures:y,status:"In Progress"};try{m(!0),z&&g.API_BASE_URL?await f.default.put(`${g.API_BASE_URL}/hospital/dialysis-session/${z}`,A):g.API_BASE_URL&&await f.default.post(`${g.API_BASE_URL}/hospital/dialysis-session`,A),q(!0),l&&j.push(`${h.all_routes.patientDetails}?id=${l}`)}catch(a){o(a?.response?.data?.message??"Failed to save dialysis session.")}finally{m(!1)}};return(0,b.jsx)("div",{className:"page-wrapper",children:(0,b.jsxs)("div",{className:"content dialysis-page",children:[(0,b.jsxs)("div",{className:"d-flex align-items-center justify-content-between mb-3",children:[(0,b.jsx)("h4",{className:"fw-bold mb-0",children:E?"Edit Dialysis Session":"Dialysis Form"}),E&&x?(0,b.jsx)("span",{className:"text-muted fs-14",children:"Loading session..."}):null,E&&z?(0,b.jsx)("span",{className:"text-danger fs-14",children:z}):null,!E&&(0,b.jsx)(d.default,{href:h.all_routes.appointments,className:"btn btn-outline-primary",children:"Back to Appointments"})]}),(0,b.jsxs)("div",{className:"row g-2 dialysis-form-row",children:[(0,b.jsx)("div",{className:"col-md-2 col-lg-2 mb-2 d-flex",children:(0,b.jsxs)("div",{className:"card shadow-sm flex-grow-1 d-flex flex-column",children:[(0,b.jsx)("div",{className:"card-header",children:(0,b.jsx)("h6",{className:"fw-bold mb-0",children:"Sections"})}),(0,b.jsx)("div",{className:"card-body p-2 flex-grow-1 overflow-y-auto",children:(0,b.jsxs)("ul",{className:"list-group list-group-flush",children:[(0,b.jsx)("li",{className:"list-group-item list-group-item-action cursor-pointer",style:{cursor:"pointer"},onClick:()=>B("general-information"),children:"General Information"}),(0,b.jsx)("li",{className:"list-group-item list-group-item-action cursor-pointer",style:{cursor:"pointer"},onClick:()=>B("pre-dialysis-assessment"),children:"Pre-Dialysis Assessment"}),(0,b.jsx)("li",{className:"list-group-item list-group-item-action cursor-pointer",style:{cursor:"pointer"},onClick:()=>B("dialysis-monitoring"),children:"Dialysis Monitoring"}),(0,b.jsx)("li",{className:"list-group-item list-group-item-action cursor-pointer",style:{cursor:"pointer"},onClick:()=>B("post-dialysis-assessment"),children:"Post Dialysis Assessment"}),(0,b.jsx)("li",{className:"list-group-item list-group-item-action cursor-pointer",style:{cursor:"pointer"},onClick:()=>B("complications-during-dialysis"),children:"Complications During Dialysis"}),(0,b.jsx)("li",{className:"list-group-item list-group-item-action cursor-pointer",style:{cursor:"pointer"},onClick:()=>B("treatment-given"),children:"Treatment Given"})]})})]})}),(0,b.jsx)("div",{className:"col-md-10 col-lg-10 d-flex",children:(0,b.jsx)("div",{className:"card shadow-sm flex-grow-1 d-flex flex-column min-h-0",children:(0,b.jsxs)("form",{ref:i,className:"flex-grow-1 d-flex flex-column",onSubmit:G,children:[(0,b.jsxs)("div",{className:"card-body flex-grow-1 overflow-y-auto",style:{minHeight:"75vh",maxHeight:"85vh"},children:[(0,b.jsx)("input",{type:"hidden",name:"patient.name"}),(0,b.jsx)("input",{type:"hidden",name:"patient.age"}),(0,b.jsx)("input",{type:"hidden",name:"patient.gender"}),(0,b.jsx)("input",{type:"hidden",name:"meta.sessionDate"}),(0,b.jsx)("input",{type:"hidden",name:"meta.createdAt"}),(0,b.jsxs)("div",{ref:a["general-information"],id:"general-information",className:"mb-4",children:[(0,b.jsx)("h5",{className:"fw-bold mb-3",children:"General Information"}),(0,b.jsx)("div",{className:"border rounded p-3",children:(0,b.jsxs)("div",{className:"row g-2",children:[(0,b.jsxs)("div",{className:"col-md-2 col-12 col-sm-6",children:[(0,b.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Machine Number"}),(0,b.jsx)("input",{name:"general.machineNumber",type:"text",className:"form-control form-control-sm"})]}),(0,b.jsxs)("div",{className:"col-md-2 col-12 col-sm-6",children:[(0,b.jsx)("label",{className:"form-label mb-1 fw-medium",children:"MRD No."}),(0,b.jsx)("input",{name:"general.mrdNo",type:"hidden",value:t}),(0,b.jsx)("input",{name:"general.mrdNoDisplay",type:"text",className:"form-control form-control-sm",value:t,disabled:!0})]}),(0,b.jsxs)("div",{className:"col-md-2 col-12 col-sm-6",children:[(0,b.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Start Time"}),(0,b.jsx)("input",{name:"general.startTime",type:"text",className:"form-control form-control-sm",placeholder:"HH:MM"})]}),(0,b.jsxs)("div",{className:"col-md-2 col-12 col-sm-6",children:[(0,b.jsx)("label",{className:"form-label mb-1 fw-medium",children:"End Time"}),(0,b.jsx)("input",{name:"general.endTime",type:"text",className:"form-control form-control-sm",placeholder:"HH:MM"})]}),(0,b.jsxs)("div",{className:"col-md-4 col-12 col-sm-12",children:[(0,b.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Technician Name"}),(0,b.jsx)("input",{name:"general.technicianName",type:"text",className:"form-control form-control-sm"})]}),(0,b.jsxs)("div",{className:"col-md-2 col-12",children:[(0,b.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Dialyzer Usage Type"}),(0,b.jsxs)("div",{className:"d-flex flex-wrap gap-2",children:[(0,b.jsxs)("div",{className:"form-check me-2",children:[(0,b.jsx)("input",{className:"form-check-input",type:"checkbox",id:"dialyzer-single-use",name:"general.dialyzerUsageSingleUse"}),(0,b.jsx)("label",{className:"form-check-label",htmlFor:"dialyzer-single-use",style:{color:"#000"},children:"Single Use"})]}),(0,b.jsxs)("div",{className:"form-check",children:[(0,b.jsx)("input",{className:"form-check-input",type:"checkbox",id:"dialyzer-reuse",name:"general.dialyzerUsageReuse"}),(0,b.jsx)("label",{className:"form-check-label",htmlFor:"dialyzer-reuse",style:{color:"#000"},children:"Reuse"})]})]})]}),(0,b.jsxs)("div",{className:"col-md-2 col-12 col-sm-6",children:[(0,b.jsx)("label",{className:"form-label mb-1 fw-medium",style:{whiteSpace:"nowrap"},children:"Times Reused"}),(0,b.jsx)("input",{name:"general.timesReused",type:"text",className:"form-control form-control-sm"})]}),(0,b.jsxs)("div",{className:"col-md-2 col-6",children:[(0,b.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Fiber Volume"}),(0,b.jsx)("input",{name:"general.fiberVolume",type:"text",className:"form-control form-control-sm"})]}),(0,b.jsxs)("div",{className:"col-md-2 col-6",children:[(0,b.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Bolus"}),(0,b.jsx)("input",{name:"general.bolus",type:"text",className:"form-control form-control-sm"})]}),(0,b.jsxs)("div",{className:"col-md-2 col-6",children:[(0,b.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Hourly"}),(0,b.jsx)("input",{name:"general.hourly",type:"text",className:"form-control form-control-sm"})]}),(0,b.jsxs)("div",{className:"col-md-2 col-6",children:[(0,b.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Heparin Use"}),(0,b.jsx)("input",{name:"general.heparinUse",type:"text",className:"form-control form-control-sm"})]}),(0,b.jsxs)("div",{className:"col-md-2 col-12 col-sm-6",children:[(0,b.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Height"}),(0,b.jsx)("input",{name:"general.height",type:"text",className:"form-control form-control-sm"})]}),(0,b.jsxs)("div",{className:"col-md-2 col-12 col-sm-6",children:[(0,b.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Pre HD Weight Today"}),(0,b.jsx)("input",{name:"general.preHdWeightToday",type:"text",className:"form-control form-control-sm"})]}),(0,b.jsxs)("div",{className:"col-md-2 col-12 col-sm-6",children:[(0,b.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Last Post HD Weight"}),(0,b.jsx)("input",{name:"general.lastPostHdWeight",type:"text",className:"form-control form-control-sm"})]}),(0,b.jsxs)("div",{className:"col-md-2 col-12 col-sm-6",children:[(0,b.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Weight Gain"}),(0,b.jsx)("input",{name:"general.weightGain",type:"text",className:"form-control form-control-sm"})]}),(0,b.jsxs)("div",{className:"col-md-2 col-12 col-sm-6",children:[(0,b.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Target Weight Loss"}),(0,b.jsx)("input",{name:"general.targetWeightLoss",type:"text",className:"form-control form-control-sm"})]}),(0,b.jsxs)("div",{className:"col-md-2 col-12 col-sm-6",children:[(0,b.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Post HD Weight Today"}),(0,b.jsx)("input",{name:"general.postHdWeightToday",type:"text",className:"form-control form-control-sm"})]}),(0,b.jsxs)("div",{className:"col-md-2 col-12 col-sm-6",children:[(0,b.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Actual Weight Loss"}),(0,b.jsx)("input",{name:"general.actualWeightLoss",type:"text",className:"form-control  form-control-sm"})]}),(0,b.jsxs)("div",{className:"col-md-2 col-12",children:[(0,b.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Target Dry Weight"}),(0,b.jsx)("input",{name:"general.targetDryWeight",type:"text",className:"form-control form-control-sm"})]}),(0,b.jsxs)("div",{className:"col-md-2 col-12",children:[(0,b.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Remain Weight Loss"}),(0,b.jsx)("input",{name:"general.remainingWeightLoss",type:"text",className:"form-control form-control-sm"})]}),(0,b.jsxs)("div",{className:"col-md-6 col-12",children:[(0,b.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Vascular Access"}),(0,b.jsxs)("div",{className:"d-flex flex-wrap align-items-center gap-3",children:[(0,b.jsxs)("div",{className:"form-check m-0",children:[(0,b.jsx)("input",{className:"form-check-input",type:"checkbox",id:"avf",name:"general.avfSelected"}),(0,b.jsx)("label",{className:"form-check-label",htmlFor:"avf",style:{color:"#000"},children:"AVF"})]}),(0,b.jsxs)("div",{className:"form-check m-0",children:[(0,b.jsx)("input",{className:"form-check-input",type:"checkbox",id:"avg",name:"general.avgSelected"}),(0,b.jsx)("label",{className:"form-check-label",htmlFor:"avg",style:{color:"#000"},children:"AVG"})]}),(0,b.jsxs)("div",{className:"form-check m-0",children:[(0,b.jsx)("input",{className:"form-check-input",type:"checkbox",id:"ijv",name:"general.ijvSelected"}),(0,b.jsx)("label",{className:"form-check-label",htmlFor:"ijv",style:{color:"#000"},children:"IJV"})]}),(0,b.jsxs)("div",{className:"form-check m-0",children:[(0,b.jsx)("input",{className:"form-check-input",type:"checkbox",id:"femoral",name:"general.femoralSelected"}),(0,b.jsx)("label",{className:"form-check-label",htmlFor:"femoral",style:{color:"#000"},children:"Femoral"})]}),(0,b.jsxs)("div",{className:"form-check m-0",children:[(0,b.jsx)("input",{className:"form-check-input",type:"checkbox",id:"tunneled-catheter",name:"general.tunneledCatheter"}),(0,b.jsx)("label",{className:"form-check-label",htmlFor:"tunneled-catheter",style:{color:"#000"},children:"Tunneled Catheter"})]})]})]}),(0,b.jsxs)("div",{className:"col-md-3 col-12",children:[(0,b.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Central Line"}),(0,b.jsxs)("div",{className:"d-flex flex-wrap gap-2",children:[(0,b.jsxs)("div",{className:"form-check me-2",children:[(0,b.jsx)("input",{className:"form-check-input",type:"checkbox",id:"central-line-yes",name:"general.centralLineYes"}),(0,b.jsx)("label",{className:"form-check-label",htmlFor:"central-line-yes",style:{color:"#000"},children:"Yes"})]}),(0,b.jsxs)("div",{className:"form-check me-2",children:[(0,b.jsx)("input",{className:"form-check-input",type:"checkbox",id:"central-line-no",name:"general.centralLineNo",checked:r,onChange:a=>{s(a.target.checked)}}),(0,b.jsx)("label",{className:"form-check-label",htmlFor:"central-line-no",style:{color:"#000"},children:"No"})]}),(0,b.jsxs)("div",{className:"form-check me-2",children:[(0,b.jsx)("input",{className:"form-check-input",type:"radio",id:"central-line-ijv",name:"general.centralLineSite",value:"ijv",disabled:r}),(0,b.jsx)("label",{className:"form-check-label",htmlFor:"central-line-ijv",style:{color:"#000"},children:"IJV"})]}),(0,b.jsxs)("div",{className:"form-check",children:[(0,b.jsx)("input",{className:"form-check-input",type:"radio",id:"central-line-femoral",name:"general.centralLineSite",value:"femoral",disabled:r}),(0,b.jsx)("label",{className:"form-check-label",htmlFor:"central-line-femoral",style:{color:"#000"},children:"Femoral"})]})]})]}),(0,b.jsxs)("div",{className:"col-md-3 col-12",children:[(0,b.jsx)("label",{className:"form-label mb-1 fw-medium",children:"AVF Needle Size"}),(0,b.jsxs)("div",{className:"d-flex flex-wrap gap-2",children:[(0,b.jsxs)("div",{className:"form-check me-2",children:[(0,b.jsx)("input",{className:"form-check-input",type:"checkbox",id:"needle-16g",name:"general.avfNeedleSize16G"}),(0,b.jsx)("label",{className:"form-check-label",htmlFor:"needle-16g",style:{color:"#000"},children:"16G"})]}),(0,b.jsxs)("div",{className:"form-check me-2",children:[(0,b.jsx)("input",{className:"form-check-input",type:"checkbox",id:"needle-17g",name:"general.avfNeedleSize17G"}),(0,b.jsx)("label",{className:"form-check-label",htmlFor:"needle-17g",style:{color:"#000"},children:"17G"})]}),(0,b.jsxs)("div",{className:"form-check",children:[(0,b.jsx)("input",{className:"form-check-input",type:"checkbox",id:"needle-others",name:"general.avfNeedleSizeOthers"}),(0,b.jsx)("label",{className:"form-check-label",htmlFor:"needle-others",style:{color:"#000"},children:"Others"})]})]})]}),(0,b.jsxs)("div",{className:"col-md-3 col-12",children:[(0,b.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Bruit / Thrill"}),(0,b.jsxs)("div",{className:"d-flex flex-wrap gap-2",children:[(0,b.jsxs)("div",{className:"form-check me-2",children:[(0,b.jsx)("input",{className:"form-check-input",type:"checkbox",id:"bruit-present",name:"general.bruitThrillPresent"}),(0,b.jsx)("label",{className:"form-check-label",htmlFor:"bruit-present",style:{color:"#000"},children:"Present"})]}),(0,b.jsxs)("div",{className:"form-check me-2",children:[(0,b.jsx)("input",{className:"form-check-input",type:"checkbox",id:"bruit-absent",name:"general.bruitThrillAbsent"}),(0,b.jsx)("label",{className:"form-check-label",htmlFor:"bruit-absent",style:{color:"#000"},children:"Absent"})]}),(0,b.jsxs)("div",{className:"form-check",children:[(0,b.jsx)("input",{className:"form-check-input",type:"checkbox",id:"bruit-na",name:"general.bruitThrillNotApplicable"}),(0,b.jsx)("label",{className:"form-check-label",htmlFor:"bruit-na",style:{color:"#000"},children:"Not Applicable"})]})]})]})]})})]}),(0,b.jsxs)("div",{ref:a["pre-dialysis-assessment"],id:"pre-dialysis-assessment",className:"mb-4",children:[(0,b.jsx)("h5",{className:"fw-bold mb-3",children:"Pre-Dialysis Assessment"}),(0,b.jsx)("div",{className:"border rounded p-3",children:(0,b.jsxs)("div",{className:"row g-2",children:[(0,b.jsxs)("div",{className:"col-md-3 col-6",children:[(0,b.jsx)("label",{className:"form-label mb-1 fw-medium",children:"BP at Start of HD"}),(0,b.jsx)("input",{name:"pre.bpStartHd",type:"text",className:"form-control form-control-sm"})]}),(0,b.jsxs)("div",{className:"col-md-3 col-6",children:[(0,b.jsx)("label",{className:"form-label mb-1 fw-medium",children:"SPO2"}),(0,b.jsx)("input",{name:"pre.spo2",type:"text",className:"form-control form-control-sm"})]}),(0,b.jsxs)("div",{className:"col-md-3 col-6",children:[(0,b.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Body Temperature"}),(0,b.jsx)("input",{name:"pre.bodyTemperature",type:"text",className:"form-control form-control-sm"})]}),(0,b.jsxs)("div",{className:"col-md-3 col-6",children:[(0,b.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Pulse"}),(0,b.jsx)("input",{name:"pre.pulse",type:"text",className:"form-control form-control-sm"})]})]})})]}),(0,b.jsxs)("div",{ref:a["dialysis-monitoring"],id:"dialysis-monitoring",className:"mb-4",children:[(0,b.jsx)("h5",{className:"fw-bold mb-3",children:"Dialysis Monitoring"}),(0,b.jsx)("div",{className:"border rounded p-3",children:(0,b.jsx)("div",{className:"table-responsive",children:(0,b.jsxs)("table",{className:"dialysis-table w-100 text-center",children:[(0,b.jsx)("thead",{className:"table-light",children:(0,b.jsxs)("tr",{children:[(0,b.jsx)("th",{style:{whiteSpace:"nowrap",width:"7%"},children:"Time on HD"}),(0,b.jsx)("th",{children:"PR"}),(0,b.jsx)("th",{style:{width:"10%"},children:"BP"}),(0,b.jsx)("th",{children:"BFR"}),(0,b.jsx)("th",{children:"DFR"}),(0,b.jsx)("th",{style:{width:"10%"},children:"UFR"}),(0,b.jsx)("th",{children:"Total UF"}),(0,b.jsx)("th",{children:"Temp."}),(0,b.jsx)("th",{children:"DyNa"}),(0,b.jsx)("th",{children:"Heparin"}),(0,b.jsx)("th",{style:{width:"10%"},children:"RBS"})]})}),(0,b.jsx)("tbody",{children:Array.from({length:8}).map((a,c)=>(0,b.jsxs)("tr",{children:[(0,b.jsx)("td",{style:{padding:"2px 1px"},children:(0,b.jsx)("input",{type:"text",className:"form-control form-control-sm text-center","aria-label":"Time on HD",style:{fontSize:"16px"},name:`monitoring.${c}.timeOnHd`})}),(0,b.jsx)("td",{style:{padding:"2px 1px"},children:(0,b.jsx)("input",{type:"text",className:"form-control form-control-sm text-center","aria-label":"PR",style:{fontSize:"16px"},name:`monitoring.${c}.pr`})}),(0,b.jsx)("td",{style:{padding:"2px 1px"},children:(0,b.jsx)("input",{type:"text",className:"form-control form-control-sm text-center","aria-label":"BP",style:{fontSize:"16px"},name:`monitoring.${c}.bp`})}),(0,b.jsx)("td",{style:{padding:"2px 1px"},children:(0,b.jsx)("input",{type:"text",className:"form-control form-control-sm text-center","aria-label":"BFR",style:{fontSize:"16px"},name:`monitoring.${c}.bfr`})}),(0,b.jsx)("td",{style:{padding:"2px 1px"},children:(0,b.jsx)("input",{type:"text",className:"form-control form-control-sm text-center","aria-label":"DFR",style:{fontSize:"16px"},name:`monitoring.${c}.dfr`})}),(0,b.jsx)("td",{style:{padding:"2px 1px"},children:(0,b.jsx)("input",{type:"text",className:"form-control form-control-sm text-center","aria-label":"UFR",style:{fontSize:"16px"},name:`monitoring.${c}.ufr`})}),(0,b.jsx)("td",{style:{padding:"2px 1px"},children:(0,b.jsx)("input",{type:"text",className:"form-control form-control-sm text-center","aria-label":"Total UF",style:{fontSize:"16px"},name:`monitoring.${c}.totalUf`})}),(0,b.jsx)("td",{style:{padding:"2px 1px"},children:(0,b.jsx)("input",{type:"text",className:"form-control form-control-sm text-center","aria-label":"Temperature",style:{fontSize:"16px"},name:`monitoring.${c}.temperature`})}),(0,b.jsx)("td",{style:{padding:"2px 1px"},children:(0,b.jsx)("input",{type:"text",className:"form-control form-control-sm text-center","aria-label":"DyNa",style:{fontSize:"16px"},name:`monitoring.${c}.dyna`})}),(0,b.jsx)("td",{style:{padding:"2px 1px"},children:(0,b.jsx)("input",{type:"text",className:"form-control form-control-sm text-center","aria-label":"Heparin",style:{fontSize:"16px"},name:`monitoring.${c}.heparin`})}),(0,b.jsx)("td",{style:{padding:"2px 1px"},children:(0,b.jsx)("input",{type:"text",className:"form-control form-control-sm text-center","aria-label":"RBS",style:{fontSize:"16px"},name:`monitoring.${c}.rbs`})})]},c))})]})})})]}),(0,b.jsxs)("div",{ref:a["post-dialysis-assessment"],id:"post-dialysis-assessment",className:"mb-4",children:[(0,b.jsx)("h5",{className:"fw-bold mb-3",children:"Post Dialysis Assessment"}),(0,b.jsx)("div",{className:"border rounded p-3",children:(0,b.jsxs)("div",{className:"row g-2",children:[(0,b.jsxs)("div",{className:"col-md-2 col-12",children:[(0,b.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Pulse"}),(0,b.jsx)("input",{name:"post.pulse",type:"text",className:"form-control form-control-sm"})]}),(0,b.jsxs)("div",{className:"col-md-2 col-12",children:[(0,b.jsx)("label",{className:"form-label mb-1 fw-medium",children:"BP"}),(0,b.jsx)("input",{name:"post.bp",type:"text",className:"form-control form-control-sm"})]}),(0,b.jsxs)("div",{className:"col-md-2 col-12",children:[(0,b.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Body Temperature"}),(0,b.jsx)("input",{name:"post.bodyTemperature",type:"text",className:"form-control form-control-sm"})]}),(0,b.jsxs)("div",{className:"col-md-2 col-12",children:[(0,b.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Post HD Weight"}),(0,b.jsx)("div",{className:"d-flex gap-2",children:(0,b.jsx)("input",{name:"post.postHdWeight1",type:"text",className:"form-control form-control-sm"})})]}),(0,b.jsxs)("div",{className:"col-md-3 col-12",children:[(0,b.jsx)("label",{className:"form-label mb-1 fw-medium",children:"UF Removed"}),(0,b.jsx)("input",{name:"post.ufRemoved",type:"text",className:"form-control form-control-sm"})]}),(0,b.jsxs)("div",{className:"col-md-3 col-12",children:[(0,b.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Prolonged Bleeding from Access Site"}),(0,b.jsxs)("div",{className:"d-flex flex-wrap gap-3",children:[(0,b.jsxs)("div",{className:"form-check",children:[(0,b.jsx)("input",{className:"form-check-input",type:"radio",id:"post-prolonged-yes",name:"post.prolongedBleeding",value:"Yes"}),(0,b.jsx)("label",{className:"form-check-label",htmlFor:"post-prolonged-yes",style:{color:"#000"},children:"Yes"})]}),(0,b.jsxs)("div",{className:"form-check",children:[(0,b.jsx)("input",{className:"form-check-input",type:"radio",id:"post-prolonged-no",name:"post.prolongedBleeding",value:"No"}),(0,b.jsx)("label",{className:"form-check-label",htmlFor:"post-prolonged-no",style:{color:"#000"},children:"No"})]})]})]}),(0,b.jsxs)("div",{className:"col-md-3 col-12",children:[(0,b.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Bruit/Thrill (AVF/AVG)"}),(0,b.jsxs)("div",{className:"d-flex flex-wrap gap-3",children:[(0,b.jsxs)("div",{className:"form-check m-0",children:[(0,b.jsx)("input",{className:"form-check-input",type:"checkbox",id:"post-bruit-present",name:"post.bruitThrillPresent"}),(0,b.jsx)("label",{className:"form-check-label",htmlFor:"post-bruit-present",style:{color:"#000"},children:"Present"})]}),(0,b.jsxs)("div",{className:"form-check m-0",children:[(0,b.jsx)("input",{className:"form-check-input",type:"checkbox",id:"post-bruit-absent",name:"post.bruitThrillAbsent"}),(0,b.jsx)("label",{className:"form-check-label",htmlFor:"post-bruit-absent",style:{color:"#000"},children:"Absent"})]}),(0,b.jsxs)("div",{className:"form-check m-0",children:[(0,b.jsx)("input",{className:"form-check-input",type:"checkbox",id:"post-bruit-na",name:"post.bruitThrillNotApplicable"}),(0,b.jsx)("label",{className:"form-check-label",htmlFor:"post-bruit-na",style:{color:"#000"},children:"Not Applicable"})]})]})]}),(0,b.jsxs)("div",{className:"col-md-3 col-12",children:[(0,b.jsx)("label",{className:"form-label mb-1 fw-medium",children:"KT / V Achieved"}),(0,b.jsx)("input",{name:"post.ktVAchieved",type:"text",className:"form-control form-control-sm"})]})]})})]}),(0,b.jsxs)("div",{ref:a["complications-during-dialysis"],id:"complications-during-dialysis",className:"mb-4",children:[(0,b.jsx)("h5",{className:"fw-bold mb-3",children:"Complications During Dialysis"}),(0,b.jsx)("div",{className:"border rounded p-3",children:(0,b.jsxs)("div",{className:"row g-2",children:[(0,b.jsx)("div",{className:"col-md-3 col-12",children:(0,b.jsxs)("div",{className:"form-check",children:[(0,b.jsx)("input",{className:"form-check-input",type:"checkbox",id:"comp-hypotension",name:"comp.hypotension"}),(0,b.jsx)("label",{className:"form-check-label",htmlFor:"comp-hypotension",style:{color:"#000"},children:"Hypotension"})]})}),(0,b.jsx)("div",{className:"col-md-3 col-12",children:(0,b.jsxs)("div",{className:"form-check",children:[(0,b.jsx)("input",{className:"form-check-input",type:"checkbox",id:"comp-fever",name:"comp.fever"}),(0,b.jsx)("label",{className:"form-check-label",htmlFor:"comp-fever",style:{color:"#000"},children:"Fever"})]})}),(0,b.jsx)("div",{className:"col-md-3 col-12",children:(0,b.jsxs)("div",{className:"form-check",children:[(0,b.jsx)("input",{className:"form-check-input",type:"checkbox",id:"comp-headache",name:"comp.headache"}),(0,b.jsx)("label",{className:"form-check-label",htmlFor:"comp-headache",style:{color:"#000"},children:"Headache"})]})}),(0,b.jsx)("div",{className:"col-md-3 col-12",children:(0,b.jsxs)("div",{className:"form-check",children:[(0,b.jsx)("input",{className:"form-check-input",type:"checkbox",id:"comp-rigor",name:"comp.rigor"}),(0,b.jsx)("label",{className:"form-check-label",htmlFor:"comp-rigor",style:{color:"#000"},children:"Rigor"})]})}),(0,b.jsx)("div",{className:"col-md-3 col-12",children:(0,b.jsxs)("div",{className:"form-check",children:[(0,b.jsx)("input",{className:"form-check-input",type:"checkbox",id:"comp-cramps",name:"comp.cramps"}),(0,b.jsx)("label",{className:"form-check-label",htmlFor:"comp-cramps",style:{color:"#000"},children:"Cramps"})]})}),(0,b.jsx)("div",{className:"col-md-3 col-12",children:(0,b.jsxs)("div",{className:"form-check",children:[(0,b.jsx)("input",{className:"form-check-input",type:"checkbox",id:"comp-rash",name:"comp.rash"}),(0,b.jsx)("label",{className:"form-check-label",htmlFor:"comp-rash",style:{color:"#000"},children:"Rash"})]})}),(0,b.jsx)("div",{className:"col-md-3 col-12",children:(0,b.jsxs)("div",{className:"form-check",children:[(0,b.jsx)("input",{className:"form-check-input",type:"checkbox",id:"comp-vomiting",name:"comp.vomiting"}),(0,b.jsx)("label",{className:"form-check-label",htmlFor:"comp-vomiting",style:{color:"#000"},children:"Vomiting"})]})}),(0,b.jsx)("div",{className:"col-md-3 col-12",children:(0,b.jsxs)("div",{className:"form-check",children:[(0,b.jsx)("input",{className:"form-check-input",type:"checkbox",id:"comp-chest-pain",name:"comp.chestPain"}),(0,b.jsx)("label",{className:"form-check-label",htmlFor:"comp-chest-pain",style:{color:"#000"},children:"Chest Pain"})]})}),(0,b.jsx)("div",{className:"col-md-3 col-12",children:(0,b.jsxs)("div",{className:"form-check",children:[(0,b.jsx)("input",{className:"form-check-input",type:"checkbox",id:"comp-dyspnea",name:"comp.dyspnea"}),(0,b.jsx)("label",{className:"form-check-label",htmlFor:"comp-dyspnea",style:{color:"#000"},children:"Dyspnea"})]})}),(0,b.jsx)("div",{className:"col-md-3 col-12",children:(0,b.jsxs)("div",{className:"form-check",children:[(0,b.jsx)("input",{className:"form-check-input",type:"checkbox",id:"comp-pruritus",name:"comp.pruritus"}),(0,b.jsx)("label",{className:"form-check-label",htmlFor:"comp-pruritus",style:{color:"#000"},children:"Pruritus"})]})}),(0,b.jsx)("div",{className:"col-md-3 col-12",children:(0,b.jsxs)("div",{className:"form-check",children:[(0,b.jsx)("input",{className:"form-check-input",type:"checkbox",id:"comp-dialyzer-reaction",name:"comp.dialyzerReaction"}),(0,b.jsx)("label",{className:"form-check-label",htmlFor:"comp-dialyzer-reaction",style:{color:"#000"},children:"Dialyzer Reaction"})]})}),(0,b.jsx)("div",{className:"col-md-3 col-12",children:(0,b.jsxs)("div",{className:"form-check",children:[(0,b.jsx)("input",{className:"form-check-input",type:"checkbox",id:"comp-seizures",name:"comp.seizures"}),(0,b.jsx)("label",{className:"form-check-label",htmlFor:"comp-seizures",style:{color:"#000"},children:"Seizures"})]})}),(0,b.jsx)("div",{className:"col-md-3 col-12",children:(0,b.jsxs)("div",{className:"form-check",children:[(0,b.jsx)("input",{className:"form-check-input",type:"checkbox",id:"comp-no-complication",name:"comp.noComplication"}),(0,b.jsx)("label",{className:"form-check-label",htmlFor:"comp-no-complication",style:{color:"#000"},children:"No Complication"})]})}),(0,b.jsx)("div",{className:"col-md-3 col-12",children:(0,b.jsxs)("div",{className:"form-check",children:[(0,b.jsx)("input",{className:"form-check-input",type:"checkbox",id:"comp-form-sibring",name:"comp.formSibring"}),(0,b.jsx)("label",{className:"form-check-label",htmlFor:"comp-form-sibring",style:{color:"#000"},children:"Sibring"})]})}),(0,b.jsx)("div",{className:"col-md-3 col-12",children:(0,b.jsxs)("div",{className:"form-check",children:[(0,b.jsx)("input",{className:"form-check-input",type:"checkbox",id:"comp-hypoglycemia",name:"comp.hypoglycemia"}),(0,b.jsx)("label",{className:"form-check-label",htmlFor:"comp-hypoglycemia",style:{color:"#000"},children:"Hypoglycemia"})]})}),(0,b.jsx)("div",{className:"col-md-3 col-12",children:(0,b.jsxs)("div",{className:"form-check",children:[(0,b.jsx)("input",{className:"form-check-input",type:"checkbox",id:"comp-hypertension",name:"comp.hypertension"}),(0,b.jsx)("label",{className:"form-check-label",htmlFor:"comp-hypertension",style:{color:"#000"},children:"Hypertension"})]})}),(0,b.jsxs)("div",{className:"col-12 mt-2",children:[(0,b.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Other Complications During Dialysis"}),(0,b.jsx)("textarea",{name:"comp.other",className:"form-control",rows:3})]})]})})]}),(0,b.jsxs)("div",{ref:a["treatment-given"],id:"treatment-given",className:"mb-4",children:[(0,b.jsx)("h5",{className:"fw-bold mb-3",children:"Treatment Given"}),(0,b.jsx)("div",{className:"border rounded p-3",children:(0,b.jsxs)("div",{className:"row g-2",children:[(0,b.jsxs)("div",{className:"col-md-4 col-12",children:[(0,b.jsx)("label",{className:"form-label mb-1 fw-medium",children:"EPO Dosage"}),(0,b.jsx)("input",{name:"treat.epoDosage",type:"text",className:"form-control form-control-sm"})]}),(0,b.jsxs)("div",{className:"col-md-4 col-12",children:[(0,b.jsx)("label",{className:"form-label mb-1 fw-medium",children:"EPO Given By"}),(0,b.jsx)("input",{name:"treat.epoGivenBy",type:"text",className:"form-control form-control-sm"})]}),(0,b.jsxs)("div",{className:"col-md-4 col-12",children:[(0,b.jsx)("label",{className:"form-label mb-1 fw-medium",children:"IV Iron Dose"}),(0,b.jsx)("input",{name:"treat.ivIronDose",type:"text",className:"form-control form-control-sm"})]}),(0,b.jsxs)("div",{className:"col-md-2 col-12",children:[(0,b.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Blood Transfusion"}),(0,b.jsxs)("div",{className:"d-flex flex-wrap gap-3",children:[(0,b.jsxs)("div",{className:"form-check",children:[(0,b.jsx)("input",{className:"form-check-input",type:"radio",id:"treat-bt-yes",name:"treat.bloodTransfusion",value:"Yes"}),(0,b.jsx)("label",{className:"form-check-label",htmlFor:"treat-bt-yes",style:{color:"#000"},children:"Yes"})]}),(0,b.jsxs)("div",{className:"form-check",children:[(0,b.jsx)("input",{className:"form-check-input",type:"radio",id:"treat-bt-no",name:"treat.bloodTransfusion",value:"No"}),(0,b.jsx)("label",{className:"form-check-label",htmlFor:"treat-bt-no",style:{color:"#000"},children:"No"})]})]})]}),(0,b.jsxs)("div",{className:"col-md-3 col-12",children:[(0,b.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Number of Unit"}),(0,b.jsx)("input",{name:"treat.numberOfUnits",type:"text",className:"form-control form-control-sm"})]}),(0,b.jsxs)("div",{className:"col-md-4 col-12",children:[(0,b.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Blood Bank Name"}),(0,b.jsx)("input",{name:"treat.bloodBankName",type:"text",className:"form-control form-control-sm"})]}),(0,b.jsxs)("div",{className:"col-md-3 col-12",children:[(0,b.jsx)("label",{className:"form-label mb-1 fw-medium",children:"Type of Blood"}),(0,b.jsx)("input",{name:"treat.typeOfBlood",type:"text",className:"form-control form-control-sm"})]}),(0,b.jsxs)("div",{className:"col-12 mt-2",children:[(0,b.jsx)("label",{className:"form-label mb-1 fw-bold",children:"Other Treatment Given Drug"}),(0,b.jsx)("textarea",{name:"treat.otherTreatmentGivenDrug",className:"form-control",rows:4})]})]})})]})]}),(0,b.jsxs)("div",{className:"card-footer d-flex align-items-center justify-content-end gap-2 bg-white border-top dialysis-no-print",children:[(0,b.jsxs)("button",{type:"button",className:"btn btn-outline-secondary",onClick:()=>{i.current&&function(a){let b=new FormData(a),c=a=>b.get(a)?.toString().trim()??"",d=b=>a.querySelector(`[name="${b}"]`)?.checked??!1,e=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Kolkata",day:"2-digit",month:"2-digit",year:"numeric"}).format(new Date),f=c("meta.sessionDate")||c("meta.createdAt"),g=(()=>{if(!f)return e;let a=new Date(f);return Number.isNaN(a.getTime())?e:new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Kolkata",day:"2-digit",month:"2-digit",year:"numeric"}).format(a)})(),h=encodeURI("/JJM Logo.png"),i={machineNumber:c("general.machineNumber"),mrdNo:c("general.mrdNo"),technicianName:c("general.technicianName"),startTime:c("general.startTime"),endTime:c("general.endTime"),patientName:c("patient.name"),patientAge:c("patient.age"),patientGender:c("patient.gender"),dialyzerSingle:d("general.dialyzerUsageSingleUse"),dialyzerReuse:d("general.dialyzerUsageReuse"),timesReused:c("general.timesReused"),bolus:c("general.bolus"),hourly:c("general.hourly"),fiberVolume:c("general.fiberVolume"),heparinUse:c("general.heparinUse"),height:c("general.height"),preHdWeight:c("general.preHdWeightToday"),lastPostHdWeight:c("general.lastPostHdWeight"),weightGain:c("general.weightGain"),targetWeightLoss:c("general.targetWeightLoss"),postHdWeightToday:c("general.postHdWeightToday"),actualWeightLoss:c("general.actualWeightLoss"),targetDryWeight:c("general.targetDryWeight"),remainingWeightLoss:c("general.remainingWeightLoss"),avf:d("general.avfSelected"),avg:d("general.avgSelected"),ijv:d("general.ijvSelected"),femoral:d("general.femoralSelected"),tunneled:d("general.tunneledCatheter"),centralYes:d("general.centralLineYes"),centralNo:d("general.centralLineNo"),centralLineSite:c("general.centralLineSite"),needle16g:d("general.avfNeedleSize16G"),needle17g:d("general.avfNeedleSize17G"),needleOthers:d("general.avfNeedleSizeOthers"),needleOthersValue:c("general.avfNeedleSizeOthersValue"),bruitPresent:d("general.bruitThrillPresent"),bruitAbsent:d("general.bruitThrillAbsent"),bruitNA:d("general.bruitThrillNotApplicable"),bpStartHd:c("pre.bpStartHd"),spo2:c("pre.spo2"),bodyTemp:c("pre.bodyTemperature"),prePulse:c("pre.pulse"),monitoring:Array.from({length:8},(a,b)=>({time:c(`monitoring.${b}.timeOnHd`),pr:c(`monitoring.${b}.pr`),bp:c(`monitoring.${b}.bp`),bfr:c(`monitoring.${b}.bfr`),dfr:c(`monitoring.${b}.dfr`),ufr:c(`monitoring.${b}.ufr`),totalUf:c(`monitoring.${b}.totalUf`),temperature:c(`monitoring.${b}.temperature`),dyna:c(`monitoring.${b}.dyna`),heparin:c(`monitoring.${b}.heparin`),rbs:c(`monitoring.${b}.rbs`)})),postPulse:c("post.pulse"),postBp:c("post.bp"),postBodyTemp:c("post.bodyTemperature"),postHdWeight:c("post.postHdWeight1"),ufRemoved:c("post.ufRemoved"),prolongedBleeding:c("post.prolongedBleeding"),postBruitPresent:d("post.bruitThrillPresent"),postBruitAbsent:d("post.bruitThrillAbsent"),postBruitNA:d("post.bruitThrillNotApplicable"),ktV:c("post.ktVAchieved"),hypotension:d("comp.hypotension"),fever:d("comp.fever"),headache:d("comp.headache"),rigor:d("comp.rigor"),cramps:d("comp.cramps"),rash:d("comp.rash"),vomiting:d("comp.vomiting"),chestPain:d("comp.chestPain"),dyspnea:d("comp.dyspnea"),pruritus:d("comp.pruritus"),dialyzerReaction:d("comp.dialyzerReaction"),seizures:d("comp.seizures"),noComplication:d("comp.noComplication"),formSibring:d("comp.formSibring"),hypoglycemia:d("comp.hypoglycemia"),hypertension:d("comp.hypertension"),otherComp:c("comp.other"),epoDosage:c("treat.epoDosage"),epoGivenBy:c("treat.epoGivenBy"),ivIronDose:c("treat.ivIronDose"),bloodTransfusion:c("treat.bloodTransfusion"),numberOfUnits:c("treat.numberOfUnits"),bloodBankName:c("treat.bloodBankName"),typeOfBlood:c("treat.typeOfBlood"),otherDrug:c("treat.otherTreatmentGivenDrug")},j=a=>`<span class="chk">${a?"&#10003;":"&nbsp;"}</span>`,k=(a,b="130px")=>`<div class="field" style="width:${b}">${a||"&nbsp;"}</div>`,l=(a,b,c="auto")=>`<div class="cell" style="min-width:${c}">
      <div class="lbl">${a}</div>
      ${b}
    </div>`,m=(...a)=>`<div class="flex-row">${a.join("")}</div>`,n=i.monitoring.map(a=>`
      <tr>
        <td>${a.time}</td>
        <td>${a.pr}</td>
        <td>${a.bp}</td>
        <td>${a.bfr}</td>
        <td>${a.dfr}</td>
        <td>${a.ufr}</td>
        <td>${a.totalUf}</td>
        <td>${a.temperature}</td>
        <td>${a.dyna}</td>
        <td>${a.heparin}</td>
        <td>${a.rbs}</td>
      </tr>`).join(""),o=[[i.hypotension,"Hypotension"],[i.fever,"Fever"],[i.headache,"Headache"],[i.noComplication,"No Complication"],[i.rigor,"Rigor"],[i.cramps,"Cramps"],[i.rash,"Rash"],[i.vomiting,"Vomiting"],[i.chestPain,"Chest Pain"],[i.dyspnea,"Dyspnea"],[i.pruritus,"Pruritus"],[i.dialyzerReaction,"Dialyzer Reaction"],[i.seizures,"Seizures"],[i.formSibring,"Sibring"],[i.hypoglycemia,"Hypoglycemia"],[i.hypertension,"Hypertension"]],p=`<!DOCTYPE html>
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
        <img src="${h}" alt="JJM Hospital" class="logo-img" />
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
    <div><strong>Patient Name:</strong> ${i.patientName||"____________________"}</div>
    <div><strong>Age:</strong> ${i.patientAge||"_____"}</div>
    <div><strong>Sex:</strong> ${i.patientGender||"__________"}</div>
  </div>

  <!-- ══════════════════ EMPTY SESSION INFO ════════════════════════════ -->
  <div style="display: flex; gap: 40px; align-items: center; margin-bottom: 12px; font-size: 11pt;">
    <div style="display: flex; align-items: center; gap: 8px;">
      <strong>Date:</strong>
      <span>${g||"—"}</span>
    </div>
    <div style="display: flex; align-items: center; gap: 8px;">
      <strong>Start T/t Time:</strong>
      <span>${i.startTime||"—"}</span>
    </div>
    <div style="display: flex; align-items: center; gap: 8px;">
      <strong>End T/t Time:</strong>
      <span>${i.endTime||"—"}</span>
    </div>
  </div>

  <!-- ══════════════════ GENERAL INFORMATION ══════════════════════════════ -->
  <h2 class="dialysis-section-heading">General Information</h2>
  <div class="section">

    ${m(l("Machine Number",k(i.machineNumber,"150px"),"150px"),l("MRD No.",k(i.mrdNo,"150px"),"150px"),`<div class="cell push-right" style="min-width: 220px;">
      <div class="lbl">Technician Name</div>
      ${k(i.technicianName,"220px")}
    </div>`)}

    ${m(`<div class="cell">
        <div class="lbl">Dialyzer Usage Type</div>
        <div class="inline-group">
          <span class="inline-item">${j(i.dialyzerSingle)} Single Use</span>
          <span class="inline-item">${j(i.dialyzerReuse)} Reuse</span>
        </div>
      </div>`,l("Times Reused",k(i.timesReused,"100px"),"100px"),`<div class="push-right" style="display: flex; gap: 12px; align-items: flex-end;">
      ${l("Fiber Volume",k(i.fiberVolume,"120px"),"120px")}
      ${l("Heparin Use",k(i.heparinUse,"120px"),"120px")}
    </div>`)}

    ${m(l("Height",k(i.height,"100px"),"100px"),l("Pre HD Weight Today",k(i.preHdWeight,"110px"),"110px"),l("Last Post HD Weight",k(i.lastPostHdWeight,"110px"),"110px"),l("Weight Gain",k(i.weightGain,"100px"),"100px"),l("Target Weight Loss",k(i.targetWeightLoss,"110px"),"110px"),l("Post HD Weight Today",k(i.postHdWeightToday,"110px"),"110px"),l("Actual Weight Loss",k(i.actualWeightLoss,"110px"),"110px"),l("Bolus",k(i.bolus,"90px"),"90px"),l("Hourly",k(i.hourly,"90px"),"90px"))}

    ${m(l("Target Dry Weight",k(i.targetDryWeight,"120px"),"120px"),l("Remain Weight Loss",k(i.remainingWeightLoss,"120px"),"120px"),`<div class="cell" style="flex:1">
        <div class="lbl">Vascular Access</div>
        <div class="inline-group">
          <span class="inline-item">${j(i.avf)} AVF</span>
          <span class="inline-item">${j(i.avg)} AVG</span>
          <span class="inline-item">${j(i.ijv)} IJV</span>
          <span class="inline-item">${j(i.femoral)} Femoral</span>
          <span class="inline-item">${j(i.tunneled)} Tunneled Catheter</span>
        </div>
      </div>`)}

    ${m(`<div class="cell">
        <div class="lbl">Central Line</div>
        <div class="inline-group">
          <span class="inline-item">${j(i.centralYes)} Yes</span>
          <span class="inline-item">${j(i.centralNo)} No</span>
          <span class="inline-item">${j("ijv"===i.centralLineSite)} IJV</span>
          <span class="inline-item">${j("femoral"===i.centralLineSite)} Femoral</span>
        </div>
      </div>`,`<div class="cell">
        <div class="lbl">AVF Needle Size</div>
        <div class="inline-group">
          <span class="inline-item">${j(i.needle16g)} 16G</span>
          <span class="inline-item">${j(i.needle17g)} 17G</span>
          <span class="inline-item">${j(i.needleOthers)} Others${i.needleOthersValue?` (${i.needleOthersValue})`:""}</span>
        </div>
      </div>`,`<div class="cell">
        <div class="lbl">Bruit / Thrill</div>
        <div class="inline-group">
          <span class="inline-item">${j(i.bruitPresent)} Present</span>
          <span class="inline-item">${j(i.bruitAbsent)} Absent</span>
          <span class="inline-item">${j(i.bruitNA)} Not Applicable</span>
        </div>
      </div>`)}
  </div>

  <!-- ══════════════════ PRE-DIALYSIS ASSESSMENT ═══════════════════════════ -->
  <h2 class="dialysis-section-heading">Pre-Dialysis Assessment</h2>
  <div class="section">
    ${m(l("BP at Start of HD",k(i.bpStartHd,"130px"),"130px"),l("SPO2",k(i.spo2,"100px"),"100px"),l("Body Temperature",k(i.bodyTemp,"130px"),"130px"),l("Pulse",k(i.prePulse,"100px"),"100px"))}
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
        ${n}
      </tbody>
    </table>
  </div>

  <!-- ══════════════════ POST-DIALYSIS ASSESSMENT ══════════════════════════ -->
  <h2 class="dialysis-section-heading" style="page-break-before: always;">Post Dialysis Assessment</h2>
  <div class="section">
    ${m(l("Pulse",k(i.postPulse,"100px"),"100px"),l("BP",k(i.postBp,"100px"),"100px"),l("Body Temperature",k(i.postBodyTemp,"130px"),"130px"),l("Post HD Weight",k(i.postHdWeight,"120px"),"120px"),l("UF Removed",k(i.ufRemoved,"110px"),"110px"),l("KT / V Achieved",k(i.ktV,"110px"),"110px"))}
    ${m(`<div class="cell">
        <div class="lbl">Prolonged Bleeding from Access Site</div>
        <div class="inline-group">
          <span class="inline-item">${j("Yes"===i.prolongedBleeding)} Yes</span>
          <span class="inline-item">${j("No"===i.prolongedBleeding)} No</span>
        </div>
      </div>`,`<div class="cell">
        <div class="lbl">Bruit / Thrill (AVF / AVG)</div>
        <div class="inline-group">
          <span class="inline-item">${j(i.postBruitPresent)} Present</span>
          <span class="inline-item">${j(i.postBruitAbsent)} Absent</span>
          <span class="inline-item">${j(i.postBruitNA)} Not Applicable</span>
        </div>
      </div>`)}
  </div>

  <!-- ══════════════════ COMPLICATIONS ════════════════════════════════════ -->
  <h2 class="dialysis-section-heading">Complications During Dialysis</h2>
  <div class="section">
    <div class="comp-grid">
      ${o.map(([a,b])=>`<div class="inline-item">${j(a)} ${b}</div>`).join("")}
    </div>
    ${i.otherComp?`<div style="margin-top:10px">
            <div class="lbl">Other Complications</div>
            <div class="textarea-field">${i.otherComp}</div>
          </div>`:""}
  </div>

  <!-- ══════════════════ TREATMENT GIVEN ══════════════════════════════════ -->
  <h2 class="dialysis-section-heading">Treatment Given</h2>
  <div class="section">
    ${m(l("EPO Dosage",k(i.epoDosage,"130px"),"130px"),l("EPO Given By",k(i.epoGivenBy,"150px"),"150px"),l("IV Iron Dose",k(i.ivIronDose,"130px"),"130px"))}
    ${m(`<div class="cell">
        <div class="lbl">Blood Transfusion</div>
        <div class="inline-group">
          <span class="inline-item">${j("Yes"===i.bloodTransfusion)} Yes</span>
          <span class="inline-item">${j("No"===i.bloodTransfusion)} No</span>
        </div>
      </div>`,l("Number of Units",k(i.numberOfUnits,"120px"),"120px"),l("Blood Bank Name",k(i.bloodBankName,"180px"),"180px"),l("Type of Blood",k(i.typeOfBlood,"150px"),"150px"))}
    ${i.otherDrug?`<div style="margin-top:4px">
            <div class="lbl">Other Treatment Given Drug</div>
            <div class="textarea-field">${i.otherDrug}</div>
          </div>`:""}
  </div>

  <!-- ══════════════════ SIGNATURE SECTION ══════════════════════════════════ -->
  <div style="margin-top: 100px; display: flex; justify-content: space-between; font-weight: bold; font-size: 11pt; padding: 0 40px; color: #111;">
    <div style="text-align: center; border-top: 1.5px solid #666; width: 180px; padding-top: 5px;">Completed By</div>
    <div style="text-align: center; border-top: 1.5px solid #666; width: 180px; padding-top: 5px;">Signature</div>
    <div style="text-align: center; border-top: 1.5px solid #666; width: 180px; padding-top: 5px;">Dr. In charge</div>
  </div>
</body>
</html>`,q=document.createElement("iframe");q.setAttribute("title","Dialysis print"),q.style.cssText="position:fixed;right:0;bottom:0;width:0;height:0;border:0;opacity:0;pointer-events:none;",document.body.appendChild(q);let r=q.contentDocument??q.contentWindow?.document,s=q.contentWindow;if(!r||!s)return q.remove();r.open(),r.write(p),r.close();let t=()=>{q.remove()},u=()=>{try{s.focus(),s.print()}finally{window.setTimeout(t,750)}};window.setTimeout(()=>{let a=Array.from(r.images).filter(a=>!a.complete),b=!1,c=()=>{b||(b=!0,window.setTimeout(u,200))};if(0===a.length)return void c();let d=a.length,e=()=>{--d<=0&&c()};a.forEach(a=>{a.addEventListener("load",e,{once:!0}),a.addEventListener("error",e,{once:!0})}),window.setTimeout(c,3500)},0)}(i.current)},children:[(0,b.jsx)("i",{className:"feather-printer me-1"}),"Print"]}),(0,b.jsx)("button",{type:"submit",className:"btn btn-primary dialysis-save-btn",disabled:l,children:l?"Saving...":"Save Dialysis Details"})]})]})})})]})]})})};a.s(["default",0,()=>(0,b.jsx)(c.default.Suspense,{fallback:null,children:(0,b.jsx)(i,{})})],299630)}];

//# sourceMappingURL=src_app_%28feature-module%29_dialysis-appointment_page_tsx_1uf0r0b._.js.map