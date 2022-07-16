import{s as m,a as E,j as r,C as X,c as Ce,F as iu,M as tu,R as uu,r as K,d as VC,I as ee,e as te,f as hu,g as LC,A as re,h as ie,O as ne,i as bu,k as Be,n as se,o as oe,p as le,q as mu,t as j,v as ae,w as aC,x as De,y as du,z as UC,B as ce,D as de,E as CC,T as eC,H as Ae,J as fe,K as he,N as Iu,P as DC,V as cC,Q as dC,U as pe,W as Ee,X as ge,Y as me,Z as ye,m as xe,$ as Fe,a0 as Ou,a1 as be,a2 as yu}from"./index.efc0feee.js";import{R as $u}from"./index.eda5d27b.js";import{L as _u,C as Tu,T as z}from"./layouts.2f9219ab.js";import{B as MC}from"./index.4617d794.js";import{S as ou}from"./index.33acfd23.js";const we=m.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 20px 40px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
  align-items: center;
`,ve=m.div`
  position: relative;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  height: 10px;
  width: calc(100% + 80px);
  top: -20px;
  background: ${u=>u.theme.colors.googleBlue};
`,Se=m.div`
  display: flex;
  flex-direction: column;
`,Q=m.p`
  font-size: ${u=>u.theme.fontSize.body2};
  color: ${u=>u.theme.colors.grey800};
  min-width: 70px;
  &:first-child {
    margin-top: 0;
  }
`,xu=m.div`
  margin-top: 14px;
  display: flex;
  flex-direction: row;
`,ke=u=>{const{name:e,email:C,phoneNumber:B,position:i}=u;return E(we,{children:[r(ve,{}),E(Se,{children:[E(xu,{children:[r(Q,{children:"\uC774\uB984"}),r(Q,{children:e})]}),E(xu,{children:[r(Q,{children:"\uD3EC\uC9C0\uC158"}),r(Q,{children:i})]}),E(xu,{children:[r(Q,{children:"\uC774\uBA54\uC77C"}),r(Q,{children:C})]}),E(xu,{children:[r(Q,{children:"\uC804\uD654\uBC88\uD638"}),r(Q,{children:B})]})]})]})};m.div`
  height: 90px;
`;const Au=m.div`
  height: 50px;
`;m.div`
  height: 30px;
`;const $e=m.div`
  height: 15px;
`,zC=m.div`
  max-width: 512px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`,IC=m.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`,_e=m.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`,AC=m.label`
  padding: 5px 0;
  display: inline-block;
  font-size: ${u=>u.theme.fontSize.body1};
  font-weight: 400;
  line-height: 1.5;
  color: ${u=>u.theme.colors.grey700};
   {
    ${u=>u.essential&&X`
        &::after {
          display: inline-block;
          margin: 0 0 2px 6px;
          content: '';
          width: 6px;
          height: 6px;
          background-color: ${e=>e.theme.colors.tossRed};
          border-radius: 3px;
        }
      `}
  }
`,fC=m.div`
  display: flex;
  flex-direction: column;
`,Pu=m.p`
  margin-bottom: 4px;
  font-size: ${({theme:u})=>u.fontSize.body2};
  line-height: 24px;
  color: ${u=>u.theme.colors.grey600};
`;m.li`
  margin-top: 4px;
  position: relative;
  font-size: 15px;
  padding-left: 15px;
  font-weight: 300;
  color: ${u=>u.theme.colors.grey600};
  list-style: none;
  &::before {
    position: absolute;
    top: -2px;
    left: -5px;
    display: inline-block;
    width: 16px;
    height: 16px;
    font-size: 1.6rem;
    font-weight: bold;
    line-height: 23px;
    color: ${u=>u.theme.colors.tossBlue};
    text-align: center;
    content: '•';
  }
`;m.article`
  border: 1px solid ${u=>u.theme.colors.grey300};
  padding: 10px 20px;
  border-radius: 10px;
  background-color: ${u=>u.theme.colors.grey50};
  margin-top: 10px;
  margin-bottom: 30px;
`;const hC=m.button`
  padding: 18px 20px;
  min-width: 100px;
  border: none;
  color: white;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 25%;
  font-size: ${u=>u.theme.fontSize.body2};
  border-radius: 10px;
  cursor: pointer;
  background: ${u=>u.theme.colors.tossBlueActive};

  ${u=>u.disable&&X`
      background: ${e=>e.theme.colors.tossBlue200};
      cursor: not-allowed;
    `}
`,Te=m.h1`
  font-size: ${({theme:u})=>u.fontSize.h2};
  color: ${({theme:u})=>u.colors.grey800};
  font-weight: 500;
  @media (max-width: ${u=>u.theme.windowSize.mobile}px) {
    font-size: ${({theme:u})=>u.fontSize.h3};
  }
  margin-bottom: 10px;
`,lu=m.div`
  height: 60px;
`,Nu=m.a`
  font-size: ${({theme:u})=>u.fontSize.body1};
  color: ${({theme:u})=>u.colors.tossBlue};
  font-weight: 400;
  text-decoration: underline;
  transition: color 0.3s ease-in-out;
  @media (max-width: ${({theme:u})=>u.windowSize.mobile}px) {
    font-size: ${({theme:u})=>u.fontSize.body2};
  }
  &:hover {
    color: ${({theme:u})=>u.colors.googleBlue};
    text-decoration: underline;
  }
`,qu=m.div`
  font-size: ${({theme:u})=>u.fontSize.body1};
  color: ${({theme:u})=>u.colors.grey900};
  align-items: center;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 6px;
  @media (max-width: ${({theme:u})=>u.windowSize.mobile}px) {
    font-size: ${({theme:u})=>u.fontSize.body2};
  }
`;m.img`
  position: absolute;
  right: 0;
  bottom: 0;
  @media (max-width: ${u=>u.theme.windowSize.tablet}px) {
    width: 50%;
  }
`;const Re=()=>{const[u]=Ce(),e=u.get("name"),C=u.get("position"),B=Object.fromEntries(new URLSearchParams(location.search));return E(iu,{children:[r($u,{title:"\uC9C0\uC6D0 \uC644\uB8CC"}),r(_u,{children:r(Tu,{children:r(zC,{children:E(IC,{children:[r(lu,{}),r(lu,{}),r(Te,{children:"\uC9C0\uC6D0\uD574\uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4."}),r(lu,{}),r(_e,{children:r(ke,{...B})}),r(lu,{}),E(tu,{children:[e,"\uB2D8\uC758 \uC9C0\uC6D0\uC11C\uAC00 \uBB34\uC0AC\uD788 \uB3C4\uCC29\uD588\uC5B4\uC694 :)"]}),E(tu,{children:[C," \uD3EC\uC9C0\uC158\uC5D0 \uC9C0\uC6D0\uD574\uC8FC\uC154\uC11C \uC9C4\uC2EC\uC73C\uB85C \uAC10\uC0AC\uB4DC\uB824\uC694."]}),r(tu,{children:"\uAF3C\uAF3C\uD558\uAC8C \uC11C\uB958\uB97C \uAC80\uD1A0\uD55C \uB4A4 \uBE60\uB974\uAC8C \uACB0\uACFC\uB97C \uC548\uB0B4\uD574\uB4DC\uB9B4\uD14C\uB2C8 \uC870\uAE08\uB9CC \uAE30\uB2E4\uB824\uC8FC\uC138\uC694."}),r(tu,{children:"\uAC01 \uC804\uD615\uACB0\uACFC\uC5D0 \uAD00\uD55C \uC548\uB0B4\uB294 \uC801\uC5B4\uC8FC\uC2E0 \uBA54\uC77C\uB85C \uC548\uB0B4\uB418\uB2C8 \uAF2D \uD655\uC778\uBD80\uD0C1\uB4DC\uB824\uC694."}),r(tu,{children:"\uCD94\uAC00\uB85C \uC11C\uB958\uAC80\uD1A0\uB294 \uC9C0\uC6D0\uB9C8\uAC10\uC77C\uB85C\uBD80\uD130 \uCD5C\uB300 2\uC8FC \uC18C\uC694\uB420 \uC218 \uC788\uC5B4\uC694. \uB9CC\uC57D 2\uC8FC \uC774\uC0C1 \uC9C0\uB0AC\uC9C0\uB9CC \uC5F0\uB77D\uC744 \uBC1B\uC9C0 \uBABB\uD588\uB2E4\uBA74 GDSC DJU\uC5D0 \uBB38\uC758\uD574\uC8FC\uC138\uC694."}),E(qu,{children:["- \uCE74\uCE74\uC624\uD1A1:",r(Nu,{href:"https://open.kakao.com/o/sjN4kDsd",target:"_blank",children:"https://open.kakao.com/o/sjN4kDsd"})]}),E(qu,{children:["- \uC774\uBA54\uC77C:",r(Nu,{href:"mailto:gdscdju@gmail.com",target:"_blank",children:"gdscdju@gmail.com"})]})," ",E(qu,{children:["- \uC778\uC2A4\uD0C0\uADF8\uB7A8:",r(Nu,{href:"https://www.instagram.com/gdsc.dju",target:"_blank",children:"@GDSC DJU"})]}),r(lu,{}),r(tu,{children:"GDSC DJU \uB4DC\uB9BC"}),r(lu,{})]})})})})]})};var pu=u=>u.type==="checkbox",Du=u=>u instanceof Date,R=u=>u==null;const OC=u=>typeof u=="object";var V=u=>!R(u)&&!Array.isArray(u)&&OC(u)&&!Du(u),Ve=u=>V(u)&&u.target?pu(u.target)?u.target.checked:u.target.value:u,Le=u=>u.substring(0,u.search(/\.\d+(\.|$)/))||u,Ue=(u,e)=>u.has(Le(e)),Ru=u=>Array.isArray(u)?u.filter(Boolean):[],k=u=>u===void 0,D=(u,e,C)=>{if(!e||!V(u))return C;const B=Ru(e.split(/[,[\].]+?/)).reduce((i,l)=>R(i)?i:i[l],u);return k(B)||B===u?k(u[e])?C:u[e]:B};const pC={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},q={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},J={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};uu.createContext(null);var Me=(u,e,C,B=!0)=>{const i={};for(const l in u)Object.defineProperty(i,l,{get:()=>{const d=l;return e[d]!==q.all&&(e[d]=!B||q.all),C&&(C[d]=!0),u[d]}});return i},N=u=>V(u)&&!Object.keys(u).length,ze=(u,e,C)=>{const{name:B,...i}=u;return N(i)||Object.keys(i).length>=Object.keys(e).length||Object.keys(i).find(l=>e[l]===(!C||q.all))},Gu=u=>Array.isArray(u)?u:[u];function Ie(u){const e=uu.useRef(u);e.current=u,uu.useEffect(()=>{const C=i=>{i&&i.unsubscribe()},B=!u.disabled&&e.current.subject.subscribe({next:e.current.callback});return()=>C(B)},[u.disabled])}var H=u=>typeof u=="string",Oe=(u,e,C,B)=>{const i=Array.isArray(u);return H(u)?(B&&e.watch.add(u),D(C,u)):i?u.map(l=>(B&&e.watch.add(l),D(C,l))):(B&&(e.watchAll=!0),C)},Vu=u=>typeof u=="function",PC=u=>{for(const e in u)if(Vu(u[e]))return!0;return!1},Pe=(u,e,C,B,i)=>e?{...C[u],types:{...C[u]&&C[u].types?C[u].types:{},[B]:i||!0}}:{},tC=u=>/^\w*$/.test(u),NC=u=>Ru(u.replace(/["|']|\]/g,"").split(/\.|\[/));function b(u,e,C){let B=-1;const i=tC(e)?[e]:NC(e),l=i.length,d=l-1;for(;++B<l;){const g=i[B];let x=C;if(B!==d){const S=u[g];x=V(S)||Array.isArray(S)?S:isNaN(+i[B+1])?{}:[]}u[g]=x,u=u[g]}return u}const Zu=(u,e,C)=>{for(const B of C||Object.keys(u)){const i=D(u,B);if(i){const{_f:l,...d}=i;if(l&&e(l.name)){if(l.ref.focus&&k(l.ref.focus()))break;if(l.refs){l.refs[0].focus();break}}else V(d)&&Zu(d,e)}}};var EC=(u,e,C)=>!C&&(e.watchAll||e.watch.has(u)||[...e.watch].some(B=>u.startsWith(B)&&/^\.\w+/.test(u.slice(B.length)))),Qu=typeof window!="undefined"&&typeof window.HTMLElement!="undefined"&&typeof document!="undefined";function ru(u){let e;const C=Array.isArray(u);if(u instanceof Date)e=new Date(u);else if(u instanceof Set)e=new Set(u);else if(!(Qu&&(u instanceof Blob||u instanceof FileList))&&(C||V(u))){e=C?[]:{};for(const B in u){if(Vu(u[B])){e=u;break}e[B]=ru(u[B])}}else return u;return e}function Ne(u,e){const C=e.slice(0,-1).length;let B=0;for(;B<C;)u=k(u)?B++:u[e[B++]];return u}function M(u,e){const C=tC(e)?[e]:NC(e),B=C.length==1?u:Ne(u,C),i=C[C.length-1];let l;B&&delete B[i];for(let d=0;d<C.slice(0,-1).length;d++){let g=-1,x;const S=C.slice(0,-(d+1)),_=S.length-1;for(d>0&&(l=u);++g<S.length;){const F=S[g];x=x?x[F]:u[F],_===g&&(V(x)&&N(x)||Array.isArray(x)&&!x.filter(p=>!k(p)).length)&&(l?delete l[F]:delete u[F]),l=x}}return u}function Wu(){let u=[];return{get observers(){return u},next:i=>{for(const l of u)l.next(i)},subscribe:i=>(u.push(i),{unsubscribe:()=>{u=u.filter(l=>l!==i)}}),unsubscribe:()=>{u=[]}}}var wu=u=>R(u)||!OC(u);function cu(u,e){if(wu(u)||wu(e))return u===e;if(Du(u)&&Du(e))return u.getTime()===e.getTime();const C=Object.keys(u),B=Object.keys(e);if(C.length!==B.length)return!1;for(const i of C){const l=u[i];if(!B.includes(i))return!1;if(i!=="ref"){const d=e[i];if(Du(l)&&Du(d)||V(l)&&V(d)||Array.isArray(l)&&Array.isArray(d)?!cu(l,d):l!==d)return!1}}return!0}var gC=u=>({isOnSubmit:!u||u===q.onSubmit,isOnBlur:u===q.onBlur,isOnChange:u===q.onChange,isOnAll:u===q.all,isOnTouch:u===q.onTouched}),vu=u=>typeof u=="boolean",rC=u=>u.type==="file",uC=u=>{const e=u?u.ownerDocument:0,C=e&&e.defaultView?e.defaultView.HTMLElement:HTMLElement;return u instanceof C},qC=u=>u.type==="select-multiple",iC=u=>u.type==="radio",qe=u=>iC(u)||pu(u),Hu=u=>uC(u)&&u.isConnected;function Su(u,e={}){const C=Array.isArray(u);if(V(u)||C)for(const B in u)Array.isArray(u[B])||V(u[B])&&!PC(u[B])?(e[B]=Array.isArray(u[B])?[]:{},Su(u[B],e[B])):R(u[B])||(e[B]=!0);return e}function GC(u,e,C){const B=Array.isArray(u);if(V(u)||B)for(const i in u)Array.isArray(u[i])||V(u[i])&&!PC(u[i])?k(e)||wu(C[i])?C[i]=Array.isArray(u[i])?Su(u[i],[]):{...Su(u[i])}:GC(u[i],R(e)?{}:e[i],C[i]):C[i]=!cu(u[i],e[i]);return C}var ju=(u,e)=>GC(u,e,Su(e));const mC={value:!1,isValid:!1},yC={value:!0,isValid:!0};var WC=u=>{if(Array.isArray(u)){if(u.length>1){const e=u.filter(C=>C&&C.checked&&!C.disabled).map(C=>C.value);return{value:e,isValid:!!e.length}}return u[0].checked&&!u[0].disabled?u[0].attributes&&!k(u[0].attributes.value)?k(u[0].value)||u[0].value===""?yC:{value:u[0].value,isValid:!0}:yC:mC}return mC},HC=(u,{valueAsNumber:e,valueAsDate:C,setValueAs:B})=>k(u)?u:e?u===""||R(u)?NaN:+u:C&&H(u)?new Date(u):B?B(u):u;const xC={isValid:!1,value:null};var jC=u=>Array.isArray(u)?u.reduce((e,C)=>C&&C.checked&&!C.disabled?{isValid:!0,value:C.value}:e,xC):xC;function Ju(u){const e=u.ref;if(!(u.refs?u.refs.every(C=>C.disabled):e.disabled))return rC(e)?e.files:iC(e)?jC(u.refs).value:qC(e)?[...e.selectedOptions].map(({value:C})=>C):pu(e)?WC(u.refs).value:HC(k(e.value)?u.ref.value:e.value,u)}var Ge=(u,e,C,B)=>{const i={};for(const l of u){const d=D(e,l);d&&b(i,l,d._f)}return{criteriaMode:C,names:[...u],fields:i,shouldUseNativeValidation:B}},ku=u=>u instanceof RegExp,fu=u=>k(u)?void 0:ku(u)?u.source:V(u)?ku(u.value)?u.value.source:u.value:u,We=u=>u.mount&&(u.required||u.min||u.max||u.maxLength||u.minLength||u.pattern||u.validate);function FC(u,e,C){const B=D(u,C);if(B||tC(C))return{error:B,name:C};const i=C.split(".");for(;i.length;){const l=i.join("."),d=D(e,l),g=D(u,l);if(d&&!Array.isArray(d)&&C!==l)return{name:C};if(g&&g.type)return{name:l,error:g};i.pop()}return{name:C}}var He=(u,e,C,B,i)=>i.isOnAll?!1:!C&&i.isOnTouch?!(e||u):(C?B.isOnBlur:i.isOnBlur)?!u:(C?B.isOnChange:i.isOnChange)?u:!0,je=(u,e)=>!Ru(D(u,e)).length&&M(u,e),Fu=u=>H(u)||uu.isValidElement(u);function bC(u,e,C="validate"){if(Fu(u)||Array.isArray(u)&&u.every(Fu)||vu(u)&&!u)return{type:C,message:Fu(u)?u:"",ref:e}}var au=u=>V(u)&&!ku(u)?u:{value:u,message:""},wC=async(u,e,C,B)=>{const{ref:i,refs:l,required:d,maxLength:g,minLength:x,min:S,max:_,pattern:F,validate:p,name:O,valueAsNumber:nu,mount:Bu,disabled:I}=u._f;if(!Bu||I)return{};const T=l?l[0]:i,L=A=>{B&&T.reportValidity&&(T.setCustomValidity(vu(A)?"":A||" "),T.reportValidity())},v={},Cu=iC(i),eu=pu(i),su=Cu||eu,P=(nu||rC(i))&&!i.value||e===""||Array.isArray(e)&&!e.length,G=Pe.bind(null,O,C,v),W=(A,f,y,$=J.maxLength,U=J.minLength)=>{const Y=A?f:y;v[O]={type:A?$:U,message:Y,ref:i,...G(A?$:U,Y)}};if(d&&(!su&&(P||R(e))||vu(e)&&!e||eu&&!WC(l).isValid||Cu&&!jC(l).isValid)){const{value:A,message:f}=Fu(d)?{value:!!d,message:d}:au(d);if(A&&(v[O]={type:J.required,message:f,ref:T,...G(J.required,f)},!C))return L(f),v}if(!P&&(!R(S)||!R(_))){let A,f;const y=au(_),$=au(S);if(!R(e)&&!isNaN(e)){const U=i.valueAsNumber||+e;R(y.value)||(A=U>y.value),R($.value)||(f=U<$.value)}else{const U=i.valueAsDate||new Date(e);H(y.value)&&(A=U>new Date(y.value)),H($.value)&&(f=U<new Date($.value))}if((A||f)&&(W(!!A,y.message,$.message,J.max,J.min),!C))return L(v[O].message),v}if((g||x)&&!P&&H(e)){const A=au(g),f=au(x),y=!R(A.value)&&e.length>A.value,$=!R(f.value)&&e.length<f.value;if((y||$)&&(W(y,A.message,f.message),!C))return L(v[O].message),v}if(F&&!P&&H(e)){const{value:A,message:f}=au(F);if(ku(A)&&!e.match(A)&&(v[O]={type:J.pattern,message:f,ref:i,...G(J.pattern,f)},!C))return L(f),v}if(p){if(Vu(p)){const A=await p(e),f=bC(A,T);if(f&&(v[O]={...f,...G(J.validate,f.message)},!C))return L(f.message),v}else if(V(p)){let A={};for(const f in p){if(!N(A)&&!C)break;const y=bC(await p[f](e),T,f);y&&(A={...y,...G(f,y.message)},L(y.message),C&&(v[O]=A))}if(!N(A)&&(v[O]={ref:T,...A},!C))return v}}return L(!0),v};const Je={mode:q.onSubmit,reValidateMode:q.onChange,shouldFocusError:!0};function Xe(u={}){let e={...Je,...u},C={isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}},B={},i=ru(e.defaultValues)||{},l=e.shouldUnregister?{}:ru(i),d={action:!1,mount:!1,watch:!1},g={mount:new Set,unMount:new Set,array:new Set,watch:new Set},x,S=0,_={};const F={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},p={watch:Wu(),array:Wu(),state:Wu()},O=gC(e.mode),nu=gC(e.reValidateMode),Bu=e.criteriaMode===q.all,I=t=>n=>{clearTimeout(S),S=window.setTimeout(t,n)},T=async t=>{let n=!1;return F.isValid&&(n=e.resolver?N((await P()).errors):await W(B,!0),!t&&n!==C.isValid&&(C.isValid=n,p.state.next({isValid:n}))),n},L=(t,n=[],s,a,c=!0,o=!0)=>{if(a&&s){if(d.action=!0,o&&Array.isArray(D(B,t))){const h=s(D(B,t),a.argA,a.argB);c&&b(B,t,h)}if(F.errors&&o&&Array.isArray(D(C.errors,t))){const h=s(D(C.errors,t),a.argA,a.argB);c&&b(C.errors,t,h),je(C.errors,t)}if(F.touchedFields&&o&&Array.isArray(D(C.touchedFields,t))){const h=s(D(C.touchedFields,t),a.argA,a.argB);c&&b(C.touchedFields,t,h)}F.dirtyFields&&(C.dirtyFields=ju(i,l)),p.state.next({isDirty:f(t,n),dirtyFields:C.dirtyFields,errors:C.errors,isValid:C.isValid})}else b(l,t,n)},v=(t,n)=>{b(C.errors,t,n),p.state.next({errors:C.errors})},Cu=(t,n,s,a)=>{const c=D(B,t);if(c){const o=D(l,t,k(s)?D(i,t):s);k(o)||a&&a.defaultChecked||n?b(l,t,n?o:Ju(c._f)):U(t,o),d.mount&&T()}},eu=(t,n,s,a,c)=>{let o=!1;const h={name:t},w=D(C.touchedFields,t);if(F.isDirty){const Z=C.isDirty;C.isDirty=h.isDirty=f(),o=Z!==h.isDirty}if(F.dirtyFields&&(!s||a)){const Z=D(C.dirtyFields,t);cu(D(i,t),n)?M(C.dirtyFields,t):b(C.dirtyFields,t,!0),h.dirtyFields=C.dirtyFields,o=o||Z!==D(C.dirtyFields,t)}return s&&!w&&(b(C.touchedFields,t,s),h.touchedFields=C.touchedFields,o=o||F.touchedFields&&w!==s),o&&c&&p.state.next(h),o?h:{}},su=async(t,n,s,a)=>{const c=D(C.errors,t),o=F.isValid&&C.isValid!==n;if(u.delayError&&s?(x=I(()=>v(t,s)),x(u.delayError)):(clearTimeout(S),x=null,s?b(C.errors,t,s):M(C.errors,t)),(s?!cu(c,s):c)||!N(a)||o){const h={...a,...o?{isValid:n}:{},errors:C.errors,name:t};C={...C,...h},p.state.next(h)}_[t]--,F.isValidating&&!Object.values(_).some(h=>h)&&(p.state.next({isValidating:!1}),_={})},P=async t=>e.resolver?await e.resolver({...l},e.context,Ge(t||g.mount,B,e.criteriaMode,e.shouldUseNativeValidation)):{},G=async t=>{const{errors:n}=await P();if(t)for(const s of t){const a=D(n,s);a?b(C.errors,s,a):M(C.errors,s)}else C.errors=n;return n},W=async(t,n,s={valid:!0})=>{for(const a in t){const c=t[a];if(c){const{_f:o,...h}=c;if(o){const w=await wC(c,D(l,o.name),Bu,e.shouldUseNativeValidation);if(w[o.name]&&(s.valid=!1,n))break;n||(w[o.name]?b(C.errors,o.name,w[o.name]):M(C.errors,o.name))}h&&await W(h,n,s)}}return s.valid},A=()=>{for(const t of g.unMount){const n=D(B,t);n&&(n._f.refs?n._f.refs.every(s=>!Hu(s)):!Hu(n._f.ref))&&Uu(t)}g.unMount=new Set},f=(t,n)=>(t&&n&&b(l,t,n),!cu(BC(),i)),y=(t,n,s)=>{const a={...d.mount?l:k(n)?i:H(t)?{[t]:n}:n};return Oe(t,g,a,s)},$=t=>Ru(D(d.mount?l:i,t,u.shouldUnregister?D(i,t,[]):[])),U=(t,n,s={})=>{const a=D(B,t);let c=n;if(a){const o=a._f;o&&(!o.disabled&&b(l,t,HC(n,o)),c=Qu&&uC(o.ref)&&R(n)?"":n,qC(o.ref)?[...o.ref.options].forEach(h=>h.selected=c.includes(h.value)):o.refs?pu(o.ref)?o.refs.length>1?o.refs.forEach(h=>!h.disabled&&(h.checked=Array.isArray(c)?!!c.find(w=>w===h.value):c===h.value)):o.refs[0]&&(o.refs[0].checked=!!c):o.refs.forEach(h=>h.checked=h.value===c):rC(o.ref)?o.ref.value="":(o.ref.value=c,o.ref.type||p.watch.next({name:t})))}(s.shouldDirty||s.shouldTouch)&&eu(t,c,s.shouldTouch,s.shouldDirty,!0),s.shouldValidate&&Lu(t)},Y=(t,n,s)=>{for(const a in n){const c=n[a],o=`${t}.${a}`,h=D(B,o);(g.array.has(t)||!wu(c)||h&&!h._f)&&!Du(c)?Y(o,c,s):U(o,c,s)}},Eu=(t,n,s={})=>{const a=D(B,t),c=g.array.has(t),o=ru(n);b(l,t,o),c?(p.array.next({name:t,values:l}),(F.isDirty||F.dirtyFields)&&s.shouldDirty&&(C.dirtyFields=ju(i,l),p.state.next({name:t,dirtyFields:C.dirtyFields,isDirty:f(t,o)}))):a&&!a._f&&!R(o)?Y(t,o,s):U(t,o,s),EC(t,g)&&p.state.next({}),p.watch.next({name:t})},nC=async t=>{const n=t.target;let s=n.name;const a=D(B,s);if(a){let c,o;const h=n.type?Ju(a._f):Ve(t),w=t.type===pC.BLUR||t.type===pC.FOCUS_OUT,Z=!We(a._f)&&!e.resolver&&!D(C.errors,s)&&!a._f.deps||He(w,D(C.touchedFields,s),C.isSubmitted,nu,O),gu=EC(s,g,w);b(l,s,h),w?(a._f.onBlur&&a._f.onBlur(t),x&&x(0)):a._f.onChange&&a._f.onChange(t);const zu=eu(s,h,w,!1),QC=!N(zu)||gu;if(!w&&p.watch.next({name:s,type:t.type}),Z)return QC&&p.state.next({name:s,...gu?{}:zu});if(!w&&gu&&p.state.next({}),_[s]=(_[s],1),p.state.next({isValidating:!0}),e.resolver){const{errors:oC}=await P([s]),ue=FC(C.errors,B,s),lC=FC(oC,B,ue.name||s);c=lC.error,s=lC.name,o=N(oC)}else c=(await wC(a,D(l,s),Bu,e.shouldUseNativeValidation))[s],o=await T(!0);a._f.deps&&Lu(a._f.deps),su(s,o,c,zu)}},Lu=async(t,n={})=>{let s,a;const c=Gu(t);if(p.state.next({isValidating:!0}),e.resolver){const o=await G(k(t)?t:c);s=N(o),a=t?!c.some(h=>D(o,h)):s}else t?(a=(await Promise.all(c.map(async o=>{const h=D(B,o);return await W(h&&h._f?{[o]:h}:h)}))).every(Boolean),!(!a&&!C.isValid)&&T()):a=s=await W(B);return p.state.next({...!H(t)||F.isValid&&s!==C.isValid?{}:{name:t},...e.resolver?{isValid:s}:{},errors:C.errors,isValidating:!1}),n.shouldFocus&&!a&&Zu(B,o=>D(C.errors,o),t?c:g.mount),a},BC=t=>{const n={...i,...d.mount?l:{}};return k(t)?n:H(t)?D(n,t):t.map(s=>D(n,s))},sC=(t,n)=>({invalid:!!D((n||C).errors,t),isDirty:!!D((n||C).dirtyFields,t),isTouched:!!D((n||C).touchedFields,t),error:D((n||C).errors,t)}),KC=t=>{t?Gu(t).forEach(n=>M(C.errors,n)):C.errors={},p.state.next({errors:C.errors})},YC=(t,n,s)=>{const a=(D(B,t,{_f:{}})._f||{}).ref;b(C.errors,t,{...n,ref:a}),p.state.next({name:t,errors:C.errors,isValid:!1}),s&&s.shouldFocus&&a&&a.focus&&a.focus()},ZC=(t,n)=>Vu(t)?p.watch.subscribe({next:s=>t(y(void 0,n),s)}):y(t,n,!0),Uu=(t,n={})=>{for(const s of t?Gu(t):g.mount)g.mount.delete(s),g.array.delete(s),D(B,s)&&(n.keepValue||(M(B,s),M(l,s)),!n.keepError&&M(C.errors,s),!n.keepDirty&&M(C.dirtyFields,s),!n.keepTouched&&M(C.touchedFields,s),!e.shouldUnregister&&!n.keepDefaultValue&&M(i,s));p.watch.next({}),p.state.next({...C,...n.keepDirty?{isDirty:f()}:{}}),!n.keepIsValid&&T()},Mu=(t,n={})=>{let s=D(B,t);const a=vu(n.disabled);return b(B,t,{_f:{...s&&s._f?s._f:{ref:{name:t}},name:t,mount:!0,...n}}),g.mount.add(t),s?a&&b(l,t,n.disabled?void 0:D(l,t,Ju(s._f))):Cu(t,!0,n.value),{...a?{disabled:n.disabled}:{},...e.shouldUseNativeValidation?{required:!!n.required,min:fu(n.min),max:fu(n.max),minLength:fu(n.minLength),maxLength:fu(n.maxLength),pattern:fu(n.pattern)}:{},name:t,onChange:nC,onBlur:nC,ref:c=>{if(c){Mu(t,n),s=D(B,t);const o=k(c.value)&&c.querySelectorAll&&c.querySelectorAll("input,select,textarea")[0]||c,h=qe(o),w=s._f.refs||[];if(h?w.find(Z=>Z===o):o===s._f.ref)return;b(B,t,{_f:{...s._f,...h?{refs:[...w.filter(Hu),o,...Array.isArray(D(i,t))?[{}]:[]],ref:{type:o.type,name:t}}:{ref:o}}}),Cu(t,!1,void 0,o)}else s=D(B,t,{}),s._f&&(s._f.mount=!1),(e.shouldUnregister||n.shouldUnregister)&&!(Ue(g.array,t)&&d.action)&&g.unMount.add(t)}}};return{control:{register:Mu,unregister:Uu,getFieldState:sC,_executeSchema:P,_getWatch:y,_getDirty:f,_updateValid:T,_removeUnmounted:A,_updateFieldArray:L,_getFieldArray:$,_subjects:p,_proxyFormState:F,get _fields(){return B},get _formValues(){return l},get _stateFlags(){return d},set _stateFlags(t){d=t},get _defaultValues(){return i},get _names(){return g},set _names(t){g=t},get _formState(){return C},set _formState(t){C=t},get _options(){return e},set _options(t){e={...e,...t}}},trigger:Lu,register:Mu,handleSubmit:(t,n)=>async s=>{s&&(s.preventDefault&&s.preventDefault(),s.persist&&s.persist());let a=!0,c=ru(l);p.state.next({isSubmitting:!0});try{if(e.resolver){const{errors:o,values:h}=await P();C.errors=o,c=h}else await W(B);N(C.errors)?(p.state.next({errors:{},isSubmitting:!0}),await t(c,s)):(n&&await n({...C.errors},s),e.shouldFocusError&&Zu(B,o=>D(C.errors,o),g.mount))}catch(o){throw a=!1,o}finally{C.isSubmitted=!0,p.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:N(C.errors)&&a,submitCount:C.submitCount+1,errors:C.errors})}},watch:ZC,setValue:Eu,getValues:BC,reset:(t,n={})=>{const s=t||i,a=ru(s),c=t&&!N(t)?a:i;if(n.keepDefaultValues||(i=s),!n.keepValues){if(n.keepDirtyValues)for(const o of g.mount)D(C.dirtyFields,o)?b(c,o,D(l,o)):Eu(o,D(c,o));else{if(Qu&&k(t))for(const o of g.mount){const h=D(B,o);if(h&&h._f){const w=Array.isArray(h._f.refs)?h._f.refs[0]:h._f.ref;try{uC(w)&&w.closest("form").reset();break}catch{}}}B={}}l=u.shouldUnregister?n.keepDefaultValues?ru(i):{}:a,p.array.next({values:c}),p.watch.next({values:c})}g={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},d.mount=!F.isValid||!!n.keepIsValid,d.watch=!!u.shouldUnregister,p.state.next({submitCount:n.keepSubmitCount?C.submitCount:0,isDirty:n.keepDirty||n.keepDirtyValues?C.isDirty:!!(n.keepDefaultValues&&!cu(t,i)),isSubmitted:n.keepIsSubmitted?C.isSubmitted:!1,dirtyFields:n.keepDirty||n.keepDirtyValues?C.dirtyFields:n.keepDefaultValues&&t?ju(i,t):{},touchedFields:n.keepTouched?C.touchedFields:{},errors:n.keepErrors?C.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},resetField:(t,n={})=>{D(B,t)&&(k(n.defaultValue)?Eu(t,D(i,t)):(Eu(t,n.defaultValue),b(i,t,n.defaultValue)),n.keepTouched||M(C.touchedFields,t),n.keepDirty||(M(C.dirtyFields,t),C.isDirty=n.defaultValue?f(t,D(i,t)):f()),n.keepError||(M(C.errors,t),F.isValid&&T()),p.state.next({...C}))},clearErrors:KC,unregister:Uu,setError:YC,setFocus:(t,n={})=>{const s=D(B,t)._f,a=s.refs?s.refs[0]:s.ref;a.focus(),n.shouldSelect&&a.select()},getFieldState:sC}}function Ke(u={}){const e=uu.useRef(),[C,B]=uu.useState({isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}});e.current?e.current.control._options=u:e.current={...Xe(u),formState:C};const i=e.current.control,l=uu.useCallback(d=>{ze(d,i._proxyFormState,!0)&&(i._formState={...i._formState,...d},B({...i._formState}))},[i]);return Ie({subject:i._subjects.state,callback:l}),uu.useEffect(()=>{i._stateFlags.mount||(i._proxyFormState.isValid&&i._updateValid(),i._stateFlags.mount=!0),i._stateFlags.watch&&(i._stateFlags.watch=!1,i._subjects.state.next({})),i._removeUnmounted()}),e.current.formState=Me(C,i._proxyFormState),e.current}const Ye=()=>r("svg",{width:"96",height:"96",viewBox:"0 0 96 96",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r("path",{d:"M80 24H48L40 16H16C11.6 16 8.04 19.6 8.04 24L8 72C8 76.4 11.6 80 16 80H80C84.4 80 88 76.4 88 72V32C88 27.6 84.4 24 80 24ZM80 72H16V32H80V72Z",fill:"#6B7684"})}),Ze=(u,e)=>{const{defaultPlaceholder:C,uploadFiles:B,errorToggle:i,disabled:l,accept:d,onChange:g}=u,[x,S]=K.exports.useState(C||"Choose a file"),_=K.exports.useRef(null);return E(VC,{error:i,disabled:!l,onClick:()=>{_.current&&_.current.click()},children:[r(ee,{children:r(Ye,{})}),r(te,{children:x}),r("input",{ref:_,type:"file",style:{display:"none"},name:"fileName",accept:d,onChange:p=>{p.target.files&&(S(p.target.files[0].name),g&&g(p))}})]})};var Qe=K.exports.forwardRef(Ze);m(VC)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px auto 0;
  height: fit-content;
  border: none;
  outline: none;
  appearance: none;
  border-radius: 10px;
  box-shadow: inset 0 0 0 1px ${u=>u.theme.colors.grey300};
  cursor: auto;
  &:hover {
    box-shadow: inset 0 0 0 2px ${u=>u.theme.colors.tossBlue200};
    ${u=>u.error&&X`
        box-shadow: inset 0 0 0 2px ${u.theme.colors.tossRed};
      `}
  }
  .formInput:focus {
    box-shadow: inset 0 0 0 2px ${u=>u.theme.colors.tossBlue500};
    ${u=>u.error&&X`
        box-shadow: inset 0 0 0 2px ${u.theme.colors.tossRed}!important;
      `}
  }
  ${({disabled:u})=>!u&&X`
      &:hover {
        box-shadow: none;
      }
    `}
  ${({error:u})=>u&&X`
      box-shadow: inset 0 0 0 2px ${({theme:e})=>e.colors.tossRed};
    `}
  transition: 0.3s;
`;const ut=m.textarea`
  min-height: 100px;
  max-height: 350px;
  max-width: 512px;
  font-family: sans-serif;
  overflow: auto;
  flex-grow: 1;
  outline: 0;
  border: 0;
  background: none;
  padding: 18px 18px;
  margin: 0;
  border-radius: 10px;
  font-size: ${({theme:u})=>u.fontSize.body2};
  color: ${({theme:u})=>u.colors.grey800};
  box-shadow: inset 0 0 0 1px ${u=>u.theme.colors.grey300};
  cursor: auto;
  transition: box-shadow 0.3s;
  resize: vertical;
  &::placeholder {
    color: ${u=>u.theme.colors.grey400};
    font-weight: 300;
  }
  &:hover {
    box-shadow: inset 0 0 0 2px ${u=>u.theme.colors.tossBlue200};
    ${u=>u.error&&X`
        box-shadow: inset 0 0 0 2px ${u.theme.colors.tossRed};
      `}
  }
  &:focus {
    box-shadow: inset 0 0 0 2px ${u=>u.theme.colors.tossBlue500};
    ${u=>u.error&&X`
        box-shadow: inset 0 0 0 2px ${u.theme.colors.tossRed}!important;
      `}
  }
  ${({error:u})=>u&&X`
      box-shadow: inset 0 0 0 2px ${({theme:e})=>e.colors.tossRed};
    `}
`,Ct=({name:u,position:e,email:C,phoneNumber:B,onClick:i})=>{const[l,d]=hu(LC);return r(re,{children:l.applyCheck&&r(ie,{initial:{opacity:0},exit:{opacity:0},animate:{opacity:1},children:r(ne,{outsideClick:()=>d({...l,[bu.APPLY_CHECK]:!1}),children:E(Be,{variants:se,exit:"unActive",animate:"active",initial:"unActive",children:[E(oe,{children:[r(le,{children:"\uCD5C\uC885 \uC81C\uCD9C \uC804, \uD655\uC778\uD574\uC8FC\uC138\uC694."}),E(mu,{children:[r(j,{children:"\uC774\uB984"}),r(j,{children:u})]}),E(mu,{children:[r(j,{children:"\uC9C0\uC6D0 \uD3EC\uC9C0\uC158"}),r(j,{children:e})]}),E(mu,{children:[r(j,{children:"\uC774\uBA54\uC77C \uC8FC\uC18C"}),r(j,{children:C})]}),E(mu,{children:[r(j,{children:"\uC804\uD654\uBC88\uD638"}),r(j,{children:B})]})]}),r(j,{children:"* \uC9C0\uC6D0\uC11C \uB0B4\uC6A9\uC740 \uC81C\uCD9C \uD6C4 \uC218\uC815\uC774 \uBD88\uAC00\uB2A5\uD574\uC694."}),E(ae,{children:[r(aC,{text:"\uC81C\uCD9C\uD558\uAE30",onClick:()=>i(),color:"googleBlue"}),r(De,{children:r(aC,{text:"\uB3CC\uC544\uAC00\uAE30",onClick:()=>d({...l,[bu.APPLY_CHECK]:!1})})})]})]})})})})},vC={name:{type:"INPUT",label:"\uC774\uB984(\uC2E4\uBA85)",placeholder:"\uAE40\uAD6C\uAE00",required:{value:!0,message:"\uD544\uC218 \uC785\uB825 \uAC12\uC774\uC5D0\uC694."},pattern:{value:/^[ㄱ-ㅎ|가-힣]/g,message:"\uD55C\uAE00\uB9CC \uC785\uB825 \uAC00\uB2A5\uD574\uC694."},minLength:{value:2,message:"\uC774\uB984 \uC804\uCCB4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694."}},phoneNumber:{type:"INPUT",label:"\uC804\uD654\uBC88\uD638",placeholder:"01012341234",pattern:{value:/^01([0|1|6|7|8|9])(\d{4})(\d{4})$/,message:"- \uC5C6\uC774 \uC785\uB825\uD574\uC8FC\uC138\uC694"},required:{value:!0,message:"\uD544\uC218 \uC785\uB825 \uAC12\uC774\uC5D0\uC694."}},email:{type:"INPUT",label:"\uC774\uBA54\uC77C(gmail)",placeholder:"googledev@gmail.com",pattern:{value:/^[A-Z0-9._%+-]+@[gmail]+\.[A-Z]{3}$/i,message:"\uC774\uBA54\uC77C \uD615\uC2DD\uC5D0 \uB9DE\uCDB0 \uC785\uB825\uD574\uC8FC\uC138\uC694"},required:{value:!0,message:"\uD544\uC218 \uC785\uB825 \uAC12\uC774\uC5D0\uC694."}},major:{type:"INPUT",label:"\uD559\uACFC",placeholder:"\uAD6C\uAE00\uAC1C\uBC1C\uD559\uACFC",required:{value:!0,message:"\uD544\uC218 \uC785\uB825 \uAC12\uC774\uC5D0\uC694."},pattern:{value:/^[ㄱ-ㅎ|가-힣]/g,message:"\uD55C\uAE00\uB9CC \uC785\uB825 \uAC00\uB2A5\uD574\uC694."},minLength:{value:3,message:"\uC804\uACF5\uC744 \uC804\uBD80 \uC785\uB825\uD574\uC8FC\uC138\uC694"}},studentID:{type:"INPUT",label:"\uD559\uBC88",placeholder:"20221234",pattern:{value:/^[0-9]{8}$/,message:"\uD559\uBC88\uC744 \uC804\uBD80 \uC785\uB825\uD574\uC8FC\uC138\uC694"},required:{value:!0,message:"\uD544\uC218 \uC785\uB825 \uAC12\uC774\uC5D0\uC694."}},question1:{type:"TEXT_AREA",label:du.question1,text:"* \uB514\uC790\uC774\uB108 \uBD84\uB4E4\uC740 \uC0AC\uC6A9\uAC00\uB2A5\uD55C \uD234\uC5D0 \uB300\uD574\uC11C \uC54C\uB824\uC8FC\uC138\uC694.",placeholder:"\uC608) Spring, Vue, Git, Github, NodeJS, Spring, Figma, Adobe XD",required:{value:!0,message:"\uD544\uC218 \uC785\uB825 \uAC12\uC774\uC5D0\uC694."}},question2:{type:"TEXT_AREA",label:du.question2,text:" * \uD504\uB85C\uC81D\uD2B8 \uACBD\uD5D8\uC774 \uC5C6\uB2E4\uBA74 \uBCF8\uC778\uC774 \uB178\uB825\uD574\uC11C \uBCF4\uB78C\uC744 \uB290\uB080 \uC77C\uC5D0 \uB300\uD574\uC11C \uC54C\uB824\uC8FC\uC138\uC694.",required:{value:!0,message:"\uD544\uC218 \uC785\uB825 \uAC12\uC774\uC5D0\uC694."}},question3:{type:"TEXT_AREA",label:du.question3,required:{value:!0,message:"\uD544\uC218 \uC785\uB825 \uAC12\uC774\uC5D0\uC694."}},question4:{type:"TEXT_AREA",label:du.question4,required:{value:!0,message:"\uD544\uC218 \uC785\uB825 \uAC12\uC774\uC5D0\uC694."}},question5:{type:"TEXT_AREA",label:du.question5,required:{value:!0,message:"\uD544\uC218 \uC785\uB825 \uAC12\uC774\uC5D0\uC694."}},link0:{type:"INPUT",label:"\uB9C1\uD06C 1",placeholder:"https://",required:{value:!1,message:""},pattern:{value:/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z\d]+([\-\.]{1}[a-z\d]+)*\.[a-z]{2,5}(:\d{1,5})?(\/.*)?$/,message:"URL \uD615\uC2DD\uC5D0 \uB9DE\uCDB0 \uC785\uB825\uD574\uC8FC\uC138\uC694"}},link1:{type:"INPUT",label:"\uB9C1\uD06C 2",placeholder:"https://",required:{value:!1,message:""},pattern:{value:/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,message:"URL \uD615\uC2DD\uC5D0 \uB9DE\uCDB0 \uC785\uB825\uD574\uC8FC\uC138\uC694"}},linkAnnounce:{type:"TEXT",notice:`\uC790\uC2E0\uC744 \uC798 \uB098\uD0C0\uB0BC \uC218 \uC788\uB294 \uAC1C\uC778\uBE14\uB85C\uADF8, \uB178\uC158, Github\uB9C1\uD06C \uB4F1\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.
*\uB514\uC790\uC774\uB108 \uBD84\uB4E4\uC740 \uD3EC\uD2B8\uD3F4\uB9AC\uC624\uAC00 \uD544\uC218\uC0AC\uD56D\uC785\uB2C8\uB2E4.
*\uD30C\uC77C \uC6A9\uB7C9\uC774 50MB\uB97C \uB118\uC5B4\uAC08 \uACBD\uC6B0 \uD074\uB77C\uC6B0\uB4DC/\uB4DC\uB77C\uC774\uBE0C\uC5D0 \uD30C\uC77C\uC744 \uC5C5\uB85C\uB4DC \uD6C4 \uACF5\uC720\uB9C1\uD06C\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.`,required:{value:!1,message:""}},recommender:{label:"\uCD94\uCC9C\uC778",placeholder:"GDSC\uC5D0 \uCD94\uCC9C\uC778\uC774 \uC788\uB2E4\uBA74 \uC785\uB825\uD574\uC8FC\uC138\uC694",type:"INPUT",required:{value:!1,message:""}}};function et(u){return Object.keys(u).length===0}var JC=(u=>(u.frontend="Frontend Developer",u.backend="Backend Developer",u.design="UX/UI Designer",u.android="Android Developer",u.beginner="Beginner Position",u.ml="Machine Learning Engineer",u))(JC||{});const tt=()=>{const{id:u}=UC(),[e,C]=K.exports.useState(""),[B,i]=hu(ce),[l,d]=hu(LC),[g,x]=hu(de),[S,_]=K.exports.useState(null),F=CC(),[p,O]=K.exports.useState(null),{register:nu,handleSubmit:Bu,watch:I,formState:T}=Ke({mode:"onChange"}),{errors:L}=T,v=(A,f,y)=>{if(A){if(A.size>f)x({...g,alertMessage:`\uC9C0\uC6D0\uC11C \uD30C\uC77C \uC0AC\uC774\uC988\uB294 ${Math.floor(f/1e6)}MB \uC774\uD558\uB85C \uC120\uD0DD\uD574\uC8FC\uC138\uC694.`,alertStatus:"error",alertHandle:!0});else if(A.type!==y){const $=y.replace("application/","");x({...g,alertMessage:`${$} \uD30C\uC77C\uB9CC \uC5C5\uB85C\uB4DC \uAC00\uB2A5\uD569\uB2C8\uB2E4.`,alertStatus:"error",alertHandle:!0});return}else return A;return}},Cu=async A=>{const f=v(A,50000001,"application/pdf");if(f instanceof File){const y=Ee(ge,`${f.name}`);return await me(y,A),await ye(y)}},eu=async()=>{const A={...p,status:"DOCS",generation:Iu.GENERATION,uploadDate:new Date,position:e};i({...B,load:!0}),d({...l,[bu.APPLY_CHECK]:!1});try{if(S){const f=await Cu(S);await DC(cC(dC,Iu.COLLECTION),{...A,fileURL:f})}else await DC(cC(dC,Iu.COLLECTION),{...A,fileURL:null});F({pathname:"/recruit/apply-success",search:`?${pe(G)}`}),i({...B,load:!1})}catch{x({...l,alertMessage:"\uC5B4\uB518\uAC00 \uBB38\uC81C\uAC00 \uC0DD\uACBC\uC5B4\uC694.",alertStatus:"error",alertHandle:!0}),i({...B,load:!1})}},su=!(I("name")&&I("email")&&I("major")&&I("phoneNumber")&&I("studentID")&&I("question1")&&I("question2")&&I("question3")&&I("question4")&&I("question5")),P=A=>{O(JSON.parse(JSON.stringify(A))),et(L)&&d({...l,[bu.APPLY_CHECK]:!0})},G={name:p==null?void 0:p.name,position:e,email:p==null?void 0:p.email,phoneNumber:p==null?void 0:p.phoneNumber};K.exports.useLayoutEffect(()=>{C(JC[u])},[u]);const W=Object.keys(vC);return E(iu,{children:[r($u,{title:`${e} \uC9C0\uC6D0\uC11C \uC791\uC131 `}),r(Ct,{...G,onClick:eu}),r(_u,{children:E(Tu,{children:[r(Au,{}),r(Au,{}),r("form",{onSubmit:Bu(P),children:r(zC,{children:E(IC,{children:[r(eC,{children:"\uC9C0\uC6D0\uC11C \uC791\uC131\uD558\uAE30"}),r(Ae,{children:e}),r(Au,{}),W.map(A=>{var $,U;const f=vC[A],y=f.required.value;return E(fC,{children:[r(AC,{essential:y,children:f.label}),f.text&&r(Pu,{children:f.text}),f.type==="INPUT"?r(fe,{error:!!L[A],placeholder:f.placeholder,...nu(A,f)}):f.type==="TEXT_AREA"?r(ut,{placeholder:f.placeholder,error:!!L[A],...nu(A,f)}):r("p",{children:($=f.notice)==null?void 0:$.split(`
`).map(Y=>r(Pu,{children:Y},Y))}),r(he,{children:!!L[A]&&((U=L[A])==null?void 0:U.message)})]},A)}),E(fC,{children:[r(AC,{essential:!1,children:"\uCC38\uACE0\uD574\uC57C \uD560 \uCD94\uAC00\uC801\uC778 \uC790\uB8CC\uAC00 \uC788\uB2E4\uBA74 \uCCA8\uBD80\uD574\uC8FC\uC138\uC694"}),r(Qe,{defaultPlaceholder:"PDF\uB85C \uC5C5\uB85C\uB4DC \uD574\uC8FC\uC138\uC694!",accept:"application/pdf, .pdf",onChange:A=>_(A.target.files&&A.target.files[0])}),r(Pu,{children:"* \uD30C\uC77C\uC740 \uCD5C\uB300 50MB\uB85C \uC5C5\uB85C\uB4DC \uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4."})]}),r($e,{}),r(Au,{}),su?r(hC,{type:"button",disable:su,children:"\uC81C\uCD9C\uD558\uAE30"}):r(hC,{type:"submit",onClick:P,children:"\uC81C\uCD9C\uD558\uAE30"}),r(Au,{})]})})})]})})]})};var rt=K.exports.memo(tt);const XC=[{id:"android",name:"Android Developer",skill:"Android",stack:"JAVA, Kotlin",people:`\uCF54\uB529\uC5D0 \uB300\uD55C \uB0A8\uB2E4\uB978 \uC560\uC815\uC744 \uAC00\uC9C0\uC2E0 \uBD84
1\uB144\uC774\uC0C1 \uD65C\uB3D9\uC774 \uAC00\uB2A5\uD558\uC2E0 \uBD84
\uCC45\uC784\uAC10\uC774 \uC788\uC73C\uC2E0 \uBD84
\uC8FC\uB3C4\uC801\uC73C\uB85C \uC758\uACAC\uC744 \uC598\uAE30\uD558\uAC70\uB098 \uBC18\uBC15\uD558\uB294\uB370 \uAC70\uB9AC\uB08C\uC774 \uC5C6\uC73C\uC2E0 \uBD84
\uB3D9\uB8CC\uB4E4\uC5D0\uAC8C \uC88B\uC740 \uC2DC\uB108\uC9C0\uB97C \uC904 \uC218 \uC788\uC73C\uC2E0 \uBD84
\uD0C0\uC778\uC758 \uC758\uACAC\uC744 \uC801\uADF9\uC801\uC73C\uB85C \uC218\uC6A9\uD558\uACE0 \uAC1C\uC120\uD558\uB824\uACE0 \uB178\uB825\uD558\uC2DC\uB294 \uBD84
\uD504\uB85C\uC81D\uD2B8\uC758 \uC560\uC815\uACFC \uCC45\uC784\uC744 \uAC00\uC9C0\uACE0 \uC8FC\uB3C4\uC801\uC73C\uB85C \uAC1C\uBC1C, \uAC1C\uC120\uD560 \uC218 \uC788\uC73C\uC2E0 \uBD84
\uCEE4\uBBA4\uB2C8\uCF00\uC774\uC158 \uBC0F \uAC1C\uBC1C \uBB38\uC11C \uC815\uB9AC\uC5D0 \uB2A5\uC219\uD558\uC2E0 \uBD84
\uCF54\uB529\uC5D0 \uB300\uD558\uC5EC \uC798 \uBAA8\uB974\uB354\uB77C\uB3C4 \uB9E4\uC77C \uD559\uC2B5\uD558\uACE0, \uBAA8\uB974\uB294 \uAC8C \uC788\uC73C\uBA74 \uC8FC\uB3C4\uC801\uC73C\uB85C \uD574\uACB0\uD560 \uC218 \uC788\uC73C\uC2E0 \uBD84`,plus:`Github, git\uC5D0 \uB300\uD55C \uACBD\uD5D8\uC774\uB098 \uD504\uB85C\uC81D\uD2B8 \uACBD\uD5D8\uC774 \uC788\uB294 \uBD84
Framework\uB098 Library \uC0AC\uC6A9\uC774 \uB2A5\uC219\uD558\uC2E0 \uBD84
Android, Kotlin \uAC1C\uBC1C \uACBD\uD5D8\uC774 \uC788\uC73C\uC2E0 \uBD84
Android \uC758 \uB2E4\uC591\uD55C Framework \uB098 Library \uC0AC\uC6A9\uC774 \uB2A5\uC219\uD558\uC2E0 \uBD84
\uD504\uB85C\uC81D\uD2B8\uC758 \uC544\uD0A4\uD14D\uCCD0\uC5D0 \uB300\uD55C \uACE0\uB824\uB97C \uB04A\uC784 \uC5C6\uC774 \uD558\uC2DC\uB294 \uBD84`,introduction:`Beginner \uD3EC\uC9C0\uC158\uC774 \uAC1C\uC124\uB41C \uC774\uD6C4 \uD3EC\uC9C0\uC158\uC758 \uAE30\uC900\uC774 \uBCC0\uACBD\uB418\uC5C8\uC5B4\uC694.
\uD504\uB808\uC784\uC6CC\uD06C\uB97C \uBC14\uD0D5\uC73C\uB85C \uD558\uB098\uC758 \uD504\uB85C\uC81D\uD2B8\uB97C \uD63C\uC790 \uAC1C\uBC1C\uD558\uC2E4 \uC218 \uC788\uB294 \uBD84\uC774 \uD3EC\uC9C0\uC158\uC744 \uC5BB\uC744 \uC218 \uC788\uC5B4\uC694.
\uB3D9\uB8CC \uAC1C\uBC1C\uC790\uC640 \uD611\uC5C5\uD558\uAC70\uB098 \uC5F4\uC815\uC801\uC778 \uBD84\uB4E4\uACFC \uD568\uAED8 \uC131\uC7A5\uD574\uB098\uAC00\uACE0 \uC2F6\uC740 \uBD84\uB4E4\uC740 \uD658\uC601\uD574\uC694.`,activity:`2\uC8FC\uB9C8\uB2E4 \uC788\uB294 \uC815\uAE30\uC138\uC158\uC5D0 \uCC38\uC5EC\uD560 \uC218 \uC788\uC5B4\uC694.
GDSC KOR\uB098 GDSC DJU\uAC00 \uAE30\uD68D \uBC0F \uC6B4\uC601\uD558\uB294 \uC774\uBCA4\uD2B8\uC5D0 \uC6B4\uC601\uC9C4\uC73C\uB85C \uCC38\uC5EC\uD560 \uC218 \uC788\uC5B4\uC694.
\uD300\uB9AC\uB354\uB85C\uC11C \uD504\uB85C\uC81D\uD2B8\uB97C \uAC1C\uC124\uD558\uAC70\uB098 \uD504\uB85C\uC81D\uD2B8\uC5D0 \uC548\uB4DC\uB85C\uC774\uB4DC \uD3EC\uC9C0\uC158\uC73C\uB85C \uD569\uB958\uD560 \uC218 \uC788\uC5B4\uC694.`},{id:"frontend",name:"Frontend Developer",skill:"React",stack:"JavaScript, JSX, TypeScript",people:`\uCF54\uB529\uC5D0 \uB300\uD55C \uB0A8\uB2E4\uB978 \uC560\uC815\uC744 \uAC00\uC9C0\uC2E0 \uBD84
1\uB144\uC774\uC0C1 \uD65C\uB3D9\uC774 \uAC00\uB2A5\uD558\uC2E0 \uBD84
\uCC45\uC784\uAC10\uC774 \uC788\uC73C\uC2E0 \uBD84
\uC8FC\uB3C4\uC801\uC73C\uB85C \uC758\uACAC\uC744 \uC598\uAE30\uD558\uAC70\uB098 \uBC18\uBC15\uD558\uB294\uB370 \uAC70\uB9AC\uB08C\uC774 \uC5C6\uC73C\uC2E0 \uBD84
\uB3D9\uB8CC\uB4E4\uC5D0\uAC8C \uC88B\uC740 \uC2DC\uB108\uC9C0\uB97C \uC904 \uC218 \uC788\uC73C\uC2E0 \uBD84
\uD0C0\uC778\uC758 \uC758\uACAC\uC744 \uC801\uADF9\uC801\uC73C\uB85C \uC218\uC6A9\uD558\uACE0 \uAC1C\uC120\uD558\uB824\uACE0 \uB178\uB825\uD558\uC2DC\uB294 \uBD84
\uD504\uB85C\uC81D\uD2B8\uC758 \uC560\uC815\uACFC \uCC45\uC784\uC744 \uAC00\uC9C0\uACE0 \uC8FC\uB3C4\uC801\uC73C\uB85C \uAC1C\uBC1C, \uAC1C\uC120\uD560 \uC218 \uC788\uC73C\uC2E0 \uBD84
\uCEE4\uBBA4\uB2C8\uCF00\uC774\uC158 \uBC0F \uAC1C\uBC1C \uBB38\uC11C \uC815\uB9AC\uC5D0 \uB2A5\uC219\uD558\uC2E0 \uBD84
\uCF54\uB529\uC5D0 \uB300\uD558\uC5EC \uC798 \uBAA8\uB974\uB354\uB77C\uB3C4 \uB9E4\uC77C \uD559\uC2B5\uD558\uACE0, \uBAA8\uB974\uB294 \uAC8C \uC788\uC73C\uBA74 \uC8FC\uB3C4\uC801\uC73C\uB85C \uD574\uACB0\uD560 \uC218 \uC788\uC73C\uC2E0 \uBD84
\uCF54\uB529\uC5D0 \uC9C4\uC2EC\uC774\uC2E0 \uBD84
\uC758\uACAC \uC804\uB2EC\uC774\uB098 \uC218\uC6A9\uC5D0 \uAC70\uB9AC\uB08C\uC774 \uC5C6\uC73C\uC2E0 \uBD84
\uB354 \uC88B\uC740 \uCEE4\uBBA4\uB2C8\uD2F0\uB098 \uD300 \uBB38\uD654\uC5D0 \uB300\uD574 \uAD00\uC2EC\uC774 \uB9CE\uC73C\uC2E0 \uBD84`,plus:`Github, git\uC5D0 \uB300\uD55C \uACBD\uD5D8\uC774\uB098 \uD504\uB85C\uC81D\uD2B8 \uACBD\uD5D8\uC774 \uC788\uB294 \uBD84 
Framework\uB098 Library \uC0AC\uC6A9\uC774 \uB2A5\uC219\uD558\uC2E0 \uBD84 
React\uB098 Vue \uB4F1 SPA\uC5D0 \uB300\uD55C \uC774\uD574\uB3C4\uAC00 \uC788\uC73C\uC2E0 \uBD84 `,activity:`2\uC8FC\uB9C8\uB2E4 \uC788\uB294 \uC815\uAE30\uC138\uC158\uC5D0 \uCC38\uC5EC\uD560 \uC218 \uC788\uC5B4\uC694.
GDSC KOR\uB098 GDSC DJU\uAC00 \uAE30\uD68D \uBC0F \uC6B4\uC601\uD558\uB294 \uC774\uBCA4\uD2B8\uC5D0 \uC6B4\uC601\uC9C4\uC73C\uB85C \uCC38\uC5EC\uD560 \uC218 \uC788\uC5B4\uC694.
\uD300\uB9AC\uB354\uB85C\uC11C \uD504\uB85C\uC81D\uD2B8\uB97C \uAC1C\uC124\uD558\uAC70\uB098 \uD504\uB85C\uC81D\uD2B8\uC5D0 \uD504\uB860\uD2B8\uC5D4\uB4DC \uD3EC\uC9C0\uC158\uC73C\uB85C \uD569\uB958\uD560 \uC218 \uC788\uC5B4\uC694.
GDSC DJU\uC5D0\uC11C \uC6B4\uC601\uD558\uB294 \uC11C\uBE44\uC2A4\uC758 \uC131\uB2A5\uAC1C\uC120\uC744 \uC9C4\uD589\uD558\uAC70\uB098 \uC0AC\uC774\uD2B8\uC758 \uC2E0\uADDC\uAE30\uB2A5(\uBC31\uC624\uD53C\uC2A4) \uB4F1\uC744 \uAC1C\uBC1C\uD558\uB294 \uD504\uB85C\uC81D\uD2B8\uC5D0 \uD569\uB958\uD560 \uC218 \uC788\uC5B4\uC694.`,introduction:`Beginner \uD3EC\uC9C0\uC158\uC774 \uAC1C\uC124\uB41C \uC774\uD6C4 \uD3EC\uC9C0\uC158\uC758 \uAE30\uC900\uC774 \uBCC0\uACBD\uB418\uC5C8\uC5B4\uC694.
\uD504\uB808\uC784\uC6CC\uD06C\uB97C \uBC14\uD0D5\uC73C\uB85C \uD558\uB098\uC758 \uD504\uB85C\uC81D\uD2B8\uB97C \uD63C\uC790 \uAC1C\uBC1C\uD558\uC2E4 \uC218 \uC788\uB294 \uBD84\uC774 \uD3EC\uC9C0\uC158\uC744 \uC5BB\uC744 \uC218 \uC788\uC5B4\uC694.
\uB3D9\uB8CC \uAC1C\uBC1C\uC790\uC640 \uD611\uC5C5\uD558\uAC70\uB098 \uC5F4\uC815\uC801\uC778 \uBD84\uB4E4\uACFC \uD568\uAED8 \uC131\uC7A5\uD574\uB098\uAC00\uACE0 \uC2F6\uC740 \uBD84\uB4E4\uC740 \uD658\uC601\uD574\uC694.`},{id:"backend",name:"Backend Developer",skill:"Spring, Spring Boot",stack:"JAVA",people:`\uCF54\uB529\uC5D0 \uB300\uD55C \uB0A8\uB2E4\uB978 \uC560\uC815\uC744 \uAC00\uC9C0\uC2E0 \uBD84
1\uB144\uC774\uC0C1 \uD65C\uB3D9\uC774 \uAC00\uB2A5\uD558\uC2E0 \uBD84
\uCC45\uC784\uAC10\uC774 \uC788\uC73C\uC2E0 \uBD84
\uC8FC\uB3C4\uC801\uC73C\uB85C \uC758\uACAC\uC744 \uC598\uAE30\uD558\uAC70\uB098 \uBC18\uBC15\uD558\uB294\uB370 \uAC70\uB9AC\uB08C\uC774 \uC5C6\uC73C\uC2E0 \uBD84
\uB3D9\uB8CC\uB4E4\uC5D0\uAC8C \uC88B\uC740 \uC2DC\uB108\uC9C0\uB97C \uC904 \uC218 \uC788\uC73C\uC2E0 \uBD84
\uD0C0\uC778\uC758 \uC758\uACAC\uC744 \uC801\uADF9\uC801\uC73C\uB85C \uC218\uC6A9\uD558\uACE0 \uAC1C\uC120\uD558\uB824\uACE0 \uB178\uB825\uD558\uC2DC\uB294 \uBD84
\uD504\uB85C\uC81D\uD2B8\uC758 \uC560\uC815\uACFC \uCC45\uC784\uC744 \uAC00\uC9C0\uACE0 \uC8FC\uB3C4\uC801\uC73C\uB85C \uAC1C\uBC1C, \uAC1C\uC120\uD560 \uC218 \uC788\uC73C\uC2E0 \uBD84
\uCEE4\uBBA4\uB2C8\uCF00\uC774\uC158 \uBC0F \uAC1C\uBC1C \uBB38\uC11C \uC815\uB9AC\uC5D0 \uB2A5\uC219\uD558\uC2E0 \uBD84
\uCF54\uB529\uC5D0 \uB300\uD558\uC5EC \uC798 \uBAA8\uB974\uB354\uB77C\uB3C4 \uB9E4\uC77C \uD559\uC2B5\uD558\uACE0, \uBAA8\uB974\uB294 \uAC8C \uC788\uC73C\uBA74 \uC8FC\uB3C4\uC801\uC73C\uB85C \uD574\uACB0\uD560 \uC218 \uC788\uC73C\uC2E0 \uBD84
\uD300 \uD504\uB85C\uC81D\uD2B8 \uACBD\uD5D8\uC774 \uC788\uC73C\uC2E0 \uBD84
API \uAC1C\uBC1C \uACBD\uD5D8 \uC788\uC73C\uC2E0 \uBD84
\uBC31\uC5D4\uB4DC \uAC1C\uBC1C\uC5D0 \uAD00\uC2EC\uC774 \uB9CE\uC73C\uC2E0 \uBD84`,plus:`Github, git\uC5D0 \uB300\uD55C \uACBD\uD5D8\uC774\uB098 \uD504\uB85C\uC81D\uD2B8 \uACBD\uD5D8\uC774 \uC788\uB294 \uBD84 
Framework\uB098 Library \uC0AC\uC6A9\uC774 \uB2A5\uC219\uD558\uC2E0 \uBD84 
\uB370\uC774\uD130\uBCA0\uC774\uC2A4 \uAD6C\uCD95 \uACBD\uD5D8 \uC788\uC73C\uC2E0 \uBD84 
\uC2A4\uD504\uB9C1 \uAD00\uB828 \uD504\uB85C\uC81D\uD2B8 \uACBD\uD5D8\uC774 \uC788\uC73C\uC2E0 \uBD84 
\uCD5C\uC2E0 \uAC1C\uBC1C \uD2B8\uB80C\uB4DC\uC5D0 \uAD00\uC2EC\uC774 \uB9CE\uC73C\uC2E0 \uBD84 `,introduction:`Beginner \uD3EC\uC9C0\uC158\uC774 \uAC1C\uC124\uB41C \uC774\uD6C4 \uD3EC\uC9C0\uC158\uC758 \uAE30\uC900\uC774 \uBCC0\uACBD\uB418\uC5C8\uC5B4\uC694.
\uD504\uB808\uC784\uC6CC\uD06C\uB97C \uBC14\uD0D5\uC73C\uB85C \uD558\uB098\uC758 \uD504\uB85C\uC81D\uD2B8\uB97C \uD63C\uC790 \uAC1C\uBC1C\uD558\uC2E4 \uC218 \uC788\uB294 \uBD84\uC774 \uD3EC\uC9C0\uC158\uC744 \uC5BB\uC744 \uC218 \uC788\uC5B4\uC694.
\uB3D9\uB8CC \uAC1C\uBC1C\uC790\uC640 \uD611\uC5C5\uD558\uAC70\uB098 \uC5F4\uC815\uC801\uC778 \uBD84\uB4E4\uACFC \uD568\uAED8 \uC131\uC7A5\uD574\uB098\uAC00\uACE0 \uC2F6\uC740 \uBD84\uB4E4\uC740 \uD658\uC601\uD574\uC694.`,activity:`2\uC8FC\uB9C8\uB2E4 \uC788\uB294 \uC815\uAE30\uC138\uC158\uC5D0 \uCC38\uC5EC\uD560 \uC218 \uC788\uC5B4\uC694.
GDSC KOR\uB098 GDSC DJU\uAC00 \uAE30\uD68D \uBC0F \uC6B4\uC601\uD558\uB294 \uC774\uBCA4\uD2B8\uC5D0 \uC6B4\uC601\uC9C4\uC73C\uB85C \uCC38\uC5EC\uD560 \uC218 \uC788\uC5B4\uC694.
\uD300\uB9AC\uB354\uB85C\uC11C \uD504\uB85C\uC81D\uD2B8\uB97C \uAC1C\uC124\uD558\uAC70\uB098 \uD504\uB85C\uC81D\uD2B8\uC5D0 \uBC31\uC5D4\uB4DC \uD3EC\uC9C0\uC158\uC73C\uB85C \uD569\uB958\uD560 \uC218 \uC788\uC5B4\uC694.`},{id:"ml",name:"Machine Learning Engineer",skill:"Tensorflow, Pytorch",stack:"Python, JavaScript",people:`\uCF54\uB529\uC5D0 \uB300\uD55C \uB0A8\uB2E4\uB978 \uC560\uC815\uC744 \uAC00\uC9C0\uC2E0 \uBD84
1\uB144\uC774\uC0C1 \uD65C\uB3D9\uC774 \uAC00\uB2A5\uD558\uC2E0 \uBD84
\uCC45\uC784\uAC10\uC774 \uC788\uC73C\uC2E0 \uBD84
\uC8FC\uB3C4\uC801\uC73C\uB85C \uC758\uACAC\uC744 \uC598\uAE30\uD558\uAC70\uB098 \uBC18\uBC15\uD558\uB294\uB370 \uAC70\uB9AC\uB08C\uC774 \uC5C6\uC73C\uC2E0 \uBD84
\uB3D9\uB8CC\uB4E4\uC5D0\uAC8C \uC88B\uC740 \uC2DC\uB108\uC9C0\uB97C \uC904 \uC218 \uC788\uC73C\uC2E0 \uBD84
\uD0C0\uC778\uC758 \uC758\uACAC\uC744 \uC801\uADF9\uC801\uC73C\uB85C \uC218\uC6A9\uD558\uACE0 \uAC1C\uC120\uD558\uB824\uACE0 \uB178\uB825\uD558\uC2DC\uB294 \uBD84
\uD504\uB85C\uC81D\uD2B8\uC758 \uC560\uC815\uACFC \uCC45\uC784\uC744 \uAC00\uC9C0\uACE0 \uC8FC\uB3C4\uC801\uC73C\uB85C \uAC1C\uBC1C, \uAC1C\uC120\uD560 \uC218 \uC788\uC73C\uC2E0 \uBD84
\uCEE4\uBBA4\uB2C8\uCF00\uC774\uC158 \uBC0F \uAC1C\uBC1C \uBB38\uC11C \uC815\uB9AC\uC5D0 \uB2A5\uC219\uD558\uC2E0 \uBD84
\uCF54\uB529\uC5D0 \uB300\uD558\uC5EC \uC798 \uBAA8\uB974\uB354\uB77C\uB3C4 \uB9E4\uC77C \uD559\uC2B5\uD558\uACE0, \uBAA8\uB974\uB294 \uAC8C \uC788\uC73C\uBA74 \uC8FC\uB3C4\uC801\uC73C\uB85C \uD574\uACB0\uD560 \uC218 \uC788\uC73C\uC2E0 \uBD84
\uBA38\uC2E0 \uB7EC\uB2DD \uC54C\uACE0\uB9AC\uC998\uC5D0 \uB300\uD55C \uAE30\uBCF8\uAE30\uB97C \uAC16\uCD94\uC2E0 \uBD84
\uC624\uD508\uC18C\uC2A4\uB97C \uD65C\uC6A9\uD55C \uBAA8\uB378\uC758 \uD559\uC2B5 \uBC0F \uAC1C\uC120 \uACBD\uD5D8\uC774 \uC788\uC73C\uC2E0 \uBD84`,plus:`Github, git\uC5D0 \uB300\uD55C \uACBD\uD5D8\uC774\uB098 \uD504\uB85C\uC81D\uD2B8 \uACBD\uD5D8\uC774 \uC788\uB294 \uBD84 
Framework\uB098 Library \uC0AC\uC6A9\uC774 \uB2A5\uC219\uD558\uC2E0 \uBD84 
\uC778\uACF5\uC9C0\uB2A5 \uAE30\uC220\uC744 \uD65C\uC6A9\uD55C \uD504\uB85C\uC81D\uD2B8\uB97C \uC8FC\uB3C4\uC801\uC73C\uB85C \uC9C4\uD589\uD55C \uACBD\uD5D8\uC774 \uC788\uB294 \uBD84 
AWS \uB4F1\uC744 \uC774\uC6A9\uD55C \uBA38\uC2E0\uB7EC\uB2DD \uC11C\uBE44\uC2A4 \uAC1C\uBC1C \uBC0F \uBC30\uD3EC \uACBD\uD5D8\uC774 \uC788\uB294 \uBD84 
\uCD5C\uC18C \uD558\uB098 \uC774\uC0C1\uC758 ML \uB77C\uC774\uBE0C\uB7EC\uB9AC(sklearn, TensorFlow, OpenCV \uB4F1)\uB97C \uC775\uC219\uD558\uAC8C \uD65C\uC6A9\uD558\uC2E4 \uC218 \uC788\uC73C\uC2E0 \uBD84 `,introduction:`\uC9C4\uB85C\uAC00 \uBA38\uC2E0\uB7EC\uB2DD \uC5D4\uC9C0\uB2C8\uC5B4\uC774\uC2E0 \uBD84\uB4E4\uC744 \uC704\uD574 \uAC1C\uC124\uB418\uC5C8\uC5B4\uC694.
\uB3D9\uB8CC \uAC1C\uBC1C\uC790\uC640 \uD611\uC5C5\uD558\uAC70\uB098 \uD504\uB85C\uC81D\uD2B8\uB97C \uC9C4\uD589\uD558\uB294 \uACBD\uD5D8\uC744 \uC5BB\uACE0 \uC2F6\uC740 \uBD84\uB4E4\uC740 \uD658\uC601\uD574\uC694.`,activity:`2\uC8FC\uB9C8\uB2E4 \uC788\uB294 \uC815\uAE30\uC138\uC158\uC5D0 \uCC38\uC5EC\uD560 \uC218 \uC788\uC5B4\uC694.
GDSC KOR\uB098 GDSC DJU\uAC00 \uAE30\uD68D \uBC0F \uC6B4\uC601\uD558\uB294 \uC774\uBCA4\uD2B8\uC5D0 \uC6B4\uC601\uC9C4\uC73C\uB85C \uCC38\uC5EC\uD560 \uC218 \uC788\uC5B4\uC694.
\uD300\uB9AC\uB354\uB85C\uC11C \uC2A4\uD130\uB514\uB97C \uAC1C\uC124\uD558\uAC70\uB098 \uD504\uB85C\uC81D\uD2B8\uC5D0 \uBA38\uC2E0\uB7EC\uB2DD \uD3EC\uC9C0\uC158\uC73C\uB85C \uD569\uB958\uD560 \uC218 \uC788\uC5B4\uC694.`},{id:"design",name:"UX/UI Designer",skill:"UX/UI",stack:"Figma, Adobe XD, Framer",people:`UX/UI \uB514\uC790\uC778\uC5D0 \uB300\uD55C \uB0A8\uB2E4\uB978 \uC560\uC815\uC744 \uAC00\uC9C0\uC2E0 \uBD84
1\uB144\uC774\uC0C1 \uD65C\uB3D9\uC774 \uAC00\uB2A5\uD558\uC2E0 \uBD84
\uCC45\uC784\uAC10\uC774 \uC788\uC73C\uC2E0 \uBD84
\uC8FC\uB3C4\uC801\uC73C\uB85C \uC758\uACAC\uC744 \uC598\uAE30\uD558\uAC70\uB098 \uBC18\uBC15\uD558\uB294\uB370 \uAC70\uB9AC\uB08C\uC774 \uC5C6\uC73C\uC2E0 \uBD84
\uB3D9\uB8CC\uB4E4\uC5D0\uAC8C \uC88B\uC740 \uC2DC\uB108\uC9C0\uB97C \uC904 \uC218 \uC788\uC73C\uC2E0 \uBD84
\uD0C0\uC778\uC758 \uC758\uACAC\uC744 \uC801\uADF9\uC801\uC73C\uB85C \uC218\uC6A9\uD558\uACE0 \uAC1C\uC120\uD558\uB824\uACE0 \uB178\uB825\uD558\uC2DC\uB294 \uBD84
\uD504\uB85C\uC81D\uD2B8\uC758 \uC560\uC815\uACFC \uCC45\uC784\uC744 \uAC00\uC9C0\uACE0 \uC8FC\uB3C4\uC801\uC73C\uB85C \uAC1C\uBC1C, \uAC1C\uC120\uD560 \uC218 \uC788\uC73C\uC2E0 \uBD84
\uCEE4\uBBA4\uB2C8\uCF00\uC774\uC158 \uBC0F \uBB38\uC11C \uC815\uB9AC\uC5D0 \uB2A5\uC219\uD558\uC2E0 \uBD84
\uB514\uC790\uC778\uC5D0 \uB300\uD558\uC5EC \uC798 \uBAA8\uB974\uB354\uB77C\uB3C4 \uB9E4\uC77C \uD559\uC2B5\uD558\uACE0, \uBAA8\uB974\uB294 \uAC8C \uC788\uC73C\uBA74 \uC8FC\uB3C4\uC801\uC73C\uB85C \uD574\uACB0\uD560 \uC218 \uC788\uC73C\uC2E0 \uBD84
AdobeXD, Figma, Sketch\uB4F1 \uB514\uC790\uC778 \uD234 \uC0AC\uC6A9\uACBD\uD5D8\uC774 \uC788\uB294 \uBD84
UX,UI \uC744 \uACE0\uB824\uD55C \uB514\uC790\uC778\uC744 \uC9C4\uD589\uD574 \uBCF8 \uACBD\uD5D8\uC774 \uC788\uB294 \uBD84`,plus:`\uD611\uC5C5 \uBC0F \uD504\uB85C\uC81D\uD2B8 \uACBD\uD5D8\uC774 \uC788\uB294 \uBD84 
\uAC1C\uBC1C\uC790\uC640 \uD611\uC5C5 \uACBD\uD5D8\uC774 \uC788\uB294 \uBD84 
MarkUp(HTML)\uC5B8\uC5B4\uB97C \uC0AC\uC6A9\uD560 \uC904 \uC544\uC2DC\uB294 \uBD84 `,introduction:`\uC9C4\uB85C\uAC00 UX/UI \uB514\uC790\uC774\uB108\uC774\uC2E0 \uBD84\uB4E4\uC744 \uC704\uD574 \uAC1C\uC124\uB418\uC5C8\uC5B4\uC694.
\uAC1C\uBC1C\uC790\uC640 \uD611\uC5C5\uD558\uAC70\uB098 \uB3D9\uB8CC \uB514\uC790\uC774\uB108\uC640 \uD611\uC5C5\uD558\uACE0 \uC2F6\uC740 \uBD84\uB4E4\uC740 \uD658\uC601\uD574\uC694.`,activity:`2\uC8FC\uB9C8\uB2E4 \uC788\uB294 \uC815\uAE30\uC138\uC158\uC5D0 \uCC38\uC5EC\uD560 \uC218 \uC788\uC5B4\uC694.
GDSC KOR\uB098 GDSC DJU\uAC00 \uAE30\uD68D \uBC0F \uC6B4\uC601\uD558\uB294 \uC774\uBCA4\uD2B8\uC5D0 \uC6B4\uC601\uC9C4\uC73C\uB85C \uCC38\uC5EC\uD560 \uC218 \uC788\uC5B4\uC694.
\uD300\uB9AC\uB354\uB85C\uC11C \uD504\uB85C\uC81D\uD2B8\uB97C \uAC1C\uC124\uD558\uAC70\uB098 \uD504\uB85C\uC81D\uD2B8\uC5D0 \uB514\uC790\uC774\uB108 \uD3EC\uC9C0\uC158\uC73C\uB85C \uD569\uB958\uD560 \uC218 \uC788\uC5B4\uC694.`},{id:"beginner",name:"Beginner",skill:"none",stack:"none",people:`\uCF54\uB529\uC5D0 \uB300\uD55C \uB0A8\uB2E4\uB978 \uC560\uC815\uC744 \uAC00\uC9C0\uC2E0 \uBD84
1\uB144\uC774\uC0C1 \uD65C\uB3D9\uC774 \uAC00\uB2A5\uD558\uC2E0 \uBD84
\uCC45\uC784\uAC10\uC774 \uC788\uC73C\uC2E0 \uBD84
\uC8FC\uB3C4\uC801\uC73C\uB85C \uC758\uACAC\uC744 \uC598\uAE30\uD558\uAC70\uB098 \uBC18\uBC15\uD558\uB294\uB370 \uAC70\uB9AC\uB08C\uC774 \uC5C6\uC73C\uC2E0 \uBD84
\uB3D9\uB8CC\uB4E4\uC5D0\uAC8C \uC88B\uC740 \uC2DC\uB108\uC9C0\uB97C \uC904 \uC218 \uC788\uC73C\uC2E0 \uBD84
\uD0C0\uC778\uC758 \uC758\uACAC\uC744 \uC801\uADF9\uC801\uC73C\uB85C \uC218\uC6A9\uD558\uACE0 \uAC1C\uC120\uD558\uB824\uACE0 \uB178\uB825\uD558\uC2DC\uB294 \uBD84
\uD504\uB85C\uC81D\uD2B8\uC758 \uC560\uC815\uACFC \uCC45\uC784\uC744 \uAC00\uC9C0\uACE0 \uC8FC\uB3C4\uC801\uC73C\uB85C \uAC1C\uBC1C, \uAC1C\uC120\uD560 \uC218 \uC788\uC73C\uC2E0 \uBD84
\uCEE4\uBBA4\uB2C8\uCF00\uC774\uC158 \uBC0F \uAC1C\uBC1C \uBB38\uC11C \uC815\uB9AC\uC5D0 \uB2A5\uC219\uD558\uC2E0 \uBD84
\uCF54\uB529\uC5D0 \uB300\uD558\uC5EC \uC798 \uBAA8\uB974\uB354\uB77C\uB3C4 \uB9E4\uC77C \uD559\uC2B5\uD558\uACE0, \uBAA8\uB974\uB294 \uAC8C \uC788\uC73C\uBA74 \uC8FC\uB3C4\uC801\uC73C\uB85C \uD574\uACB0\uD560 \uC218 \uC788\uC73C\uC2E0 \uBD84`,plus:`\uCF54\uB529\uC5D0 \uB300\uD558\uC5EC \uC798 \uBAA8\uB974\uB354\uB77C\uB3C4 \uB9E4\uC77C \uD559\uC2B5\uD560 \uC758\uC9C0\uAC00 \uC788\uC73C\uC2E0 \uBD84 
Github\uC5D0 \uB300\uD55C \uACBD\uD5D8\uC774 \uC788\uC73C\uC2E0 \uBD84\uC774\uBA74 \uC88B\uC2B5\uB2C8\uB2E4`,introduction:`\uBE44\uAE30\uB108 \uD3EC\uC9C0\uC158\uC740 \uC544\uC9C1 \uD3EC\uC9C0\uC158\uC774 \uBA85\uD655\uD558\uC9C0 \uC54A\uC740 \uBD84\uC744 \uC704\uD574 \uAC1C\uC124\uB418\uC5C8\uC5B4\uC694.
\uAC1C\uBC1C\uC790\uB97C \uC9C0\uB9DD\uD558\uC9C0\uB9CC \uACF5\uBD80\uD558\uB294 \uBC29\uBC95\uC744 \uC798 \uBAA8\uB974\uC2DC\uB294 \uBD84\uB4E4\uC5D0\uAC8C \uB3C4\uC6C0\uC774 \uB418\uC2E4\uAC70\uC5D0\uC694.
\uBE44\uAE30\uB108 \uBD84\uB4E4\uC740 GDSC\uC5D0 \uD569\uB958\uD560 \uACBD\uC6B0 \uBBF8\uB2C8 \uD574\uCEE4\uD1A4\uC744 \uC9C4\uD589\uD574\uC694. 
\uBBF8\uB2C8 \uD574\uCEE4\uD1A4\uC774\uB780 \uC6B4\uC601\uC9C4\uC774 \uC81C\uACF5\uD558\uB294 \uBCF4\uC77C\uB7EC\uD50C\uB808\uC774\uD2B8\uB97C \uBC14\uD0D5\uC73C\uB85C \uAC1C\uBC1C\uD558\uB294 \uD504\uB85C\uC81D\uD2B8\uC5D0\uC694.
\uD574\uCEE4\uD1A4\uC758 \uAE30\uAC04\uC740 3\uB2EC\uAC04 \uC9C4\uD589\uB418\uBA70 \uCD1D 3\uBC88\uC758 \uAE30\uD68C\uAC00 \uC8FC\uC5B4\uC838\uC694.(\uCD1D 9\uAC1C\uC6D4)
3\uBC88\uC758 \uAE30\uD68C \uC548\uC5D0 \uD3EC\uC9C0\uC158\uC744 \uD68D\uB4DD\uD558\uC9C0 \uBABB\uD560 \uACBD\uC6B0 GDSC\uC640 \uD568\uAED8\uD560 \uC218 \uC5C6\uC5B4\uC694.`,activity:`2\uC8FC\uB9C8\uB2E4 \uC788\uB294 \uC815\uAE30\uC138\uC158\uC5D0 \uCC38\uC5EC\uD560 \uC218 \uC788\uC5B4\uC694.
GDSC KOR\uB098 GDSC DJU\uAC00 \uAE30\uD68D \uBC0F \uC6B4\uC601\uD558\uB294 \uC774\uBCA4\uD2B8\uC5D0 \uC6B4\uC601\uC9C4\uC73C\uB85C \uCC38\uC5EC\uD560 \uC218 \uC788\uC5B4\uC694.
\uBE44\uAE30\uB108 \uBD84\uB4E4\uC740 \uD574\uCEE4\uD1A4\uC5D0 \uD569\uB958\uD574\uC694.`}],it=m(xe.div)`
  display: flex;
  padding: 24px 0;
  margin-right: 30px;
  cursor: pointer;
  border-radius: 30px;
  transition: all 0.3s ease;
  clip-path: inset(2% round 1%);
  &:hover {
    border-radius: 10px;
    clip-path: inset(0% round 1%);
    background: ${({theme:u})=>u.colors.grey100};
  }
  @media (max-width: ${u=>u.theme.windowSize.tablet}px) {
    margin-right: 10px;
  }
  @media (max-width: 500px) {
    border-radius: 10px;
    transition-property: all;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    transition-delay: 0s;
  }
`,nt=m.div`
  display: flex;
  padding: 24px 0px;
  margin-right: 30px;
  justify-content: space-around;
  @media (max-width: 500px) {
    display: none;
  }
`,Bt=m.div`
  padding-left: 30px;
  font-size: ${({theme:u})=>u.fontSize.h7};
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 320px;
  @media (max-width: 320px) {
    padding-left: 10px;
    min-width: 150px;
  }
  @media (max-width: 500px) {
    font-size: 18px;
    display: flex;
    flex-direction: column;
    min-width: 320px;
    align-items: flex-start;
    padding-left: 10px;
  }
`,SC=m.div`
  display: flex;
  align-items: center;
  width: 300px;
  font-size: 1.3rem;
  color: ${({theme:u})=>u.colors.grey600};
  @media (max-width: ${u=>u.theme.windowSize.desk}px) {
    width: 300px;
  }
  @media (max-width: ${u=>u.theme.windowSize.tablet}px) {
    width: 200px;
  }
  @media (max-width: ${u=>u.theme.windowSize.mobile}px) {
    width: 200px;
  }
`,st=m.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
  width: 330px;
  font-size: 1.3rem;
  color: ${({theme:u})=>u.colors.grey700};
`,kC=m.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-left: 10px;
  width: 200px;
  font-size: 1.3rem;
  color: ${({theme:u})=>u.colors.grey700};
`,ot=m.div`
  display: flex;
  font-weight: bold;
  align-items: center;
  width: 500px;
  font-size: 1.8rem;
  color: ${({theme:u})=>u.colors.grey800};
  @media (max-width: ${u=>u.theme.windowSize.desk}px) {
    width: 500px;
  }
  @media (max-width: ${u=>u.theme.windowSize.tablet}px) {
    width: 300px;
  }
  @media (max-width: ${u=>u.theme.windowSize.mobile}px) {
    width: 200px;
  }
  @media (max-width: 320px) {
    width: 200px;
    padding: 0;
  }
`,lt=u=>u.replace(/\(.*\)/gi,""),at=()=>E(iu,{children:[r($u,{title:"\uBAA8\uC9D1 \uC911\uC778 \uD3EC\uC9C0\uC158",description:"\uBAA8\uC9D1 \uC911\uC778 \uD3EC\uC9C0\uC158"}),r(MC,{color:"blue"}),r(_u,{children:E(Tu,{children:[r(z,{}),r(Dt,{}),r(z,{}),r(ct,{}),XC.map(u=>r("div",{children:r(dt,{...u})},u.id)),r(z,{})]})})]}),Dt=()=>E(iu,{children:[r(eC,{children:"\uD568\uAED8 \uC131\uC7A5\uD560 \uB3D9\uB8CC\uB97C \uBAA8\uC9D1\uD569\uB2C8\uB2E4"}),r(z,{}),E(tu,{children:["\uC5F4\uC815\uC801\uC778 \uB3D9\uB8CC\uB97C \uC5BB\uAE30 \uC704\uD574 \uC774 \uC790\uB9AC\uC5D0 \uBAA8\uC600\uC2B5\uB2C8\uB2E4.",r("br",{}),"\uC6B0\uB9AC\uB294 \uD568\uAED8 \uACE0\uBBFC\uC744 \uB098\uB204\uACE0 \uB3C4\uC804\uD558\uBA70 \uBAA9\uD45C\uB97C \uD5A5\uD574 \uB2EC\uB9AC\uACE0 \uC788\uC2B5\uB2C8\uB2E4."]})]}),ct=()=>E(nt,{children:[r(st,{children:"Team"}),r(kC,{children:"Skill"}),r(kC,{children:"Stack"})]}),dt=({name:u,skill:e,id:C,stack:B})=>{const i=CC(),l=d=>{i(`/recruit/detail/${d}`)};return r(iu,{children:r(it,{onClick:()=>l(C),children:E(Bt,{children:[r(ot,{children:lt(u)}),r(SC,{children:e}),r(SC,{children:B})]})})})},$C={developer:`\uCF54\uB529\uC5D0 \uB300\uD55C \uB0A8\uB2E4\uB978 \uC560\uC815\uC744 \uAC00\uC9C0\uC2E0 \uBD84
1\uB144\uC774\uC0C1 \uD65C\uB3D9\uC774 \uAC00\uB2A5\uD558\uC2E0 \uBD84
\uCC45\uC784\uAC10\uC774 \uC788\uC73C\uC2E0 \uBD84
\uC8FC\uB3C4\uC801\uC73C\uB85C \uC758\uACAC\uC744 \uC598\uAE30\uD558\uAC70\uB098 \uBC18\uBC15\uD558\uB294\uB370 \uAC70\uB9AC\uB08C\uC774 \uC5C6\uC73C\uC2E0 \uBD84
\uB3D9\uB8CC\uB4E4\uC5D0\uAC8C \uC88B\uC740 \uC2DC\uB108\uC9C0\uB97C \uC904 \uC218 \uC788\uC73C\uC2E0 \uBD84
\uD0C0\uC778\uC758 \uC758\uACAC\uC744 \uC801\uADF9\uC801\uC73C\uB85C \uC218\uC6A9\uD558\uACE0 \uAC1C\uC120\uD558\uB824\uACE0 \uB178\uB825\uD558\uC2DC\uB294 \uBD84
\uD504\uB85C\uC81D\uD2B8\uC758 \uC560\uC815\uACFC \uCC45\uC784\uC744 \uAC00\uC9C0\uACE0 \uC8FC\uB3C4\uC801\uC73C\uB85C \uAC1C\uBC1C, \uAC1C\uC120\uD560 \uC218 \uC788\uC73C\uC2E0 \uBD84
\uCEE4\uBBA4\uB2C8\uCF00\uC774\uC158 \uBC0F \uAC1C\uBC1C \uBB38\uC11C \uC815\uB9AC\uC5D0 \uB2A5\uC219\uD558\uC2E0 \uBD84
\uCF54\uB529\uC5D0 \uB300\uD558\uC5EC \uC798 \uBAA8\uB974\uB354\uB77C\uB3C4 \uB9E4\uC77C \uD559\uC2B5\uD558\uACE0, \uBAA8\uB974\uB294 \uAC8C \uC788\uC73C\uBA74 \uC8FC\uB3C4\uC801\uC73C\uB85C \uD574\uACB0\uD560 \uC218 \uC788\uC73C\uC2E0 \uBD84`,designer:`UX/UI \uB514\uC790\uC778\uC5D0 \uB300\uD55C \uB0A8\uB2E4\uB978 \uC560\uC815\uC744 \uAC00\uC9C0\uC2E0 \uBD84
1\uB144\uC774\uC0C1 \uD65C\uB3D9\uC774 \uAC00\uB2A5\uD558\uC2E0 \uBD84
\uCC45\uC784\uAC10\uC774 \uC788\uC73C\uC2E0 \uBD84
\uC8FC\uB3C4\uC801\uC73C\uB85C \uC758\uACAC\uC744 \uC598\uAE30\uD558\uAC70\uB098 \uBC18\uBC15\uD558\uB294\uB370 \uAC70\uB9AC\uB08C\uC774 \uC5C6\uC73C\uC2E0 \uBD84
\uB3D9\uB8CC\uB4E4\uC5D0\uAC8C \uC88B\uC740 \uC2DC\uB108\uC9C0\uB97C \uC904 \uC218 \uC788\uC73C\uC2E0 \uBD84
\uD0C0\uC778\uC758 \uC758\uACAC\uC744 \uC801\uADF9\uC801\uC73C\uB85C \uC218\uC6A9\uD558\uACE0 \uAC1C\uC120\uD558\uB824\uACE0 \uB178\uB825\uD558\uC2DC\uB294 \uBD84
\uD504\uB85C\uC81D\uD2B8\uC758 \uC560\uC815\uACFC \uCC45\uC784\uC744 \uAC00\uC9C0\uACE0 \uC8FC\uB3C4\uC801\uC73C\uB85C \uAC1C\uBC1C, \uAC1C\uC120\uD560 \uC218 \uC788\uC73C\uC2E0 \uBD84
\uCEE4\uBBA4\uB2C8\uCF00\uC774\uC158 \uBC0F \uBB38\uC11C \uC815\uB9AC\uC5D0 \uB2A5\uC219\uD558\uC2E0 \uBD84
\uB514\uC790\uC778\uC5D0 \uB300\uD558\uC5EC \uC798 \uBAA8\uB974\uB354\uB77C\uB3C4 \uB9E4\uC77C \uD559\uC2B5\uD558\uACE0, \uBAA8\uB974\uB294 \uAC8C \uC788\uC73C\uBA74 \uC8FC\uB3C4\uC801\uC73C\uB85C \uD574\uACB0\uD560 \uC218 \uC788\uC73C\uC2E0 \uBD84`,goodMember:`Github, git\uC5D0 \uB300\uD55C \uACBD\uD5D8\uC774\uB098 \uD504\uB85C\uC81D\uD2B8 \uACBD\uD5D8\uC774 \uC788\uB294 \uBD84\uC774\uBA74 \uC88B\uC2B5\uB2C8\uB2E4.
Framework\uB098 Library \uC0AC\uC6A9\uC774 \uB2A5\uC219\uD558\uC2E0 \uBD84\uC774\uBA74 \uC88B\uC2B5\uB2C8\uB2E4.`,benefits:`\uC5EC\uB7EC \uAD6D\uAC00\uC758 GDSC \uBC0F GDSC Korea\uC640\uC758 \uCEE4\uBBA4\uB2C8\uCF00\uC774\uC158
GDG \uAC1C\uBC1C\uC790\uC640\uC758 \uCEE8\uD0DD \uAE30\uD68C
google\uC5D0\uC11C \uC9C0\uC6D0\uD558\uB294 \uAE30\uB150\uD488
\uC790\uCCB4 \uC2A4\uD130\uB514\uB97C \uC704\uD55C google\uC758 \uCF54\uC138\uB77C, \uD035\uB7A9 \uBC14\uC6B0\uCC98 \uC9C0\uAE09`,process:"\uC11C\uB958\uC811\uC218 > \uC778\uD130\uBDF0 > \uCD5C\uC885\uD569\uACA9 (\uACB0\uACFC \uBC1C\uD45C\uC5D0\uB294 \uCD5C\uB300 2\uC8FC\uAC00 \uC18C\uC694\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.)"},Xu=m.div`
  width: 90px;
  font-size: ${({theme:u})=>u.fontSize.body2};
  font-weight: 500;
  line-height: 24px;
  color: ${({theme:u})=>u.colors.grey800};
`,Ku=m.div`
  color: ${({theme:u})=>u.colors.tossBlue};
  font-size: ${({theme:u})=>u.fontSize.body2};
`,Yu=m.div`
  padding: 14px 0;
  display: flex;
  align-items: center;
  border-top: 1px solid ${({theme:u})=>u.colors.grey200};
  @media (max-width: 500px) {
    width: 100%;
  }
`,_C=u=>{const{name:e}=u;return E(iu,{children:[E(Yu,{children:[r(Xu,{children:"\uC18C\uC18D"}),r(Ku,{children:e})]}),E(Yu,{children:[r(Xu,{children:"\uD569\uB958\uACFC\uC815"}),r(Ku,{children:"1\uCC28 \uC11C\uB958 - 2\uCC28 \uBA74\uC811"})]}),E(Yu,{children:[r(Xu,{children:"\uD65C\uB3D9\uAE30\uAC04"}),r(Ku,{children:"1\uB144\uC774\uC0C1"})]})]})},At=m.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 6px;
`,TC=u=>{const{name:e}=u,[C]=hu(Fe),B=e,i=CC();return E(At,{children:[r(Ou,{background:"tossBlue",onClick:()=>{i("/faq")},children:"\uC790\uC8FC \uD558\uB294 \uC9C8\uBB38"}),C[`${B}`]?r(Ou,{background:"tossBlue",onClick:()=>{i("/recruit/form/"+B)},children:"\uC9C0\uC6D0\uD558\uAE30"}):r(Ou,{disable:!C[`${B}`],background:"tossBlue200",children:"\uC9C0\uC6D0\uAE30\uAC04\uC774 \uC544\uB2D9\uB2C8\uB2E4."})]})},ft=m.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 320px) {
    flex-direction: column;
  }
  @media (max-width: 500px) {
    flex-direction: column;
  }
`,ht=m.article`
  margin-right: 20px;
  box-sizing: inherit;
  @media (max-width: ${u=>u.theme.windowSize.mobile}px) {
    max-width: 320px;
  }
  @media (max-width: ${u=>u.theme.windowSize.tablet}px) {
    max-width: 550px;
  }
`,pt=m.div`
  width: 337px;
  min-width: 250px;

  display: none;
  @media (min-width: 500px) {
    display: block;
  }
`,RC=m.div`
  display: flex;
  position: sticky;
  width: 100%;
  top: 100px;
  flex-direction: column;

  @media (max-width: 500px) {
    position: initial;
  }
  @media (max-width: 320px) {
    position: initial;
  }
`,Et=m.div`
  display: none;
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;

    bottom: 10px;
  }
`,gt=m.div`
  display: none;
  background: -webkit-linear-gradient(
    bottom,
    ${({theme:u})=>u.colors.backgroundOpacity900} 83%,
    ${({theme:u})=>u.colors.backgroundOpacity}
  );
  padding-top: 20px;
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    position: sticky;
    bottom: 0;
  }
`,mt=()=>{const{id:u}=UC(),e=XC.find(C=>C.id===u);return E(iu,{children:[r($u,{title:e==null?void 0:e.name}),r(MC,{color:"blue"}),e&&r(_u,{children:E(Tu,{children:[r(z,{}),r(eC,{children:e==null?void 0:e.name}),r(z,{}),E(Et,{children:[r(RC,{children:r(_C,{name:e.name})}),r(z,{})]}),E(ft,{children:[E(ht,{children:[r(ou,{title:`${e.name} \uD3EC\uC9C0\uC158\uC744 \uC18C\uAC1C\uD574\uC694`,bulletText:e.introduction}),r(z,{}),r(ou,{title:`${e.name}\uB294 \uC774\uB7F0 \uAC83\uB4E4\uC744 \uD574\uC694`,bulletText:e.activity}),r(z,{}),r(ou,{title:"\uC774\uB7F0 \uBD84\uC744 \uCC3E\uACE0 \uC788\uC5B4\uC694",bulletText:`${e.people}`}),r(z,{}),r(ou,{title:"\uC774\uB7F0 \uACBD\uD5D8\uC774 \uC788\uB2E4\uBA74 \uB354 \uC88B\uC544\uC694",bulletText:`${e.plus}`}),r(z,{}),r(ou,{title:"GDSC\uC5D0 \uD569\uB958\uD558\uBA74 \uC5BB\uB294 \uD61C\uD0DD\uC774\uC5D0\uC694",bulletText:`${$C.benefits}`}),r(z,{}),r(ou,{title:"GDSC DJU\uB85C\uC758 \uD569\uB958\uC5EC\uC815",bulletText:`${$C.process} `})]}),r(pt,{children:E(RC,{children:[r(_C,{name:e.name}),r(z,{}),r(TC,{name:u}),r(z,{})]})})]}),r(gt,{children:r(TC,{name:u})})]})}),r(z,{})]})},yt=()=>E(be,{children:[r(yu,{path:"/*",element:r(at,{})}),r(yu,{path:"/detail/:id",element:r(mt,{})}),r(yu,{path:"/form/:id",element:r(rt,{})}),r(yu,{path:"/apply-success",element:r(Re,{})})]});var Tt=K.exports.memo(yt);export{Tt as default};
