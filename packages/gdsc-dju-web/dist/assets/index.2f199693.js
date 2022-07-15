import{forwardRef as Ru,useState as U,useRef as Iu,memo as pu,useLayoutEffect as Uu}from"react";import{useSearchParams as Lu,useParams as Eu,useNavigate as hu,createSearchParams as Gu,Routes as Mu,Route as T}from"react-router-dom";import e,{css as p}from"styled-components";import{a as B,j as C,F as x,M as m,c as mu,I as qu,d as Pu,m as xu,A as Nu,O as Ou,e as L,f as Wu,g as Ju,h as ju,i as Xu,k as R,n as c,o as Hu,p as Bu,q as _u,r as v,s as Ku,t as Vu,T as _,u as Yu,v as Zu,E as Qu,w as P,x as eu,V as Du,y as tu,z as uC,B as CC,C as BC,D as eC,H as DC,J as N}from"./index.554b7492.js";import{R as G}from"./index.94c0e8c0.js";import{L as M,C as q,T as o}from"./layouts.217aada7.js";import{useForm as tC}from"react-hook-form";import{useRecoilState as S}from"recoil";import{AnimatePresence as nC,motion as iC}from"framer-motion";import{useNavigate as rC}from"react-router";import{B as gu}from"./index.296e2a3f.js";import{S as g}from"./index.f2a7bf38.js";import"lottie-web";import"react-error-boundary";import"browser-detect";import"@firebase/app";import"axios";import"@firebase/app-compat";import"@emailjs/browser";import"react-dom";import"react-helmet";const oC=e.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 20px 40px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
  align-items: center;
`,aC=e.div`
  position: relative;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  height: 10px;
  width: calc(100% + 80px);
  top: -20px;
  background: ${u=>u.theme.colors.googleBlue};
`,AC=e.div`
  display: flex;
  flex-direction: column;
`,E=e.p`
  font-size: ${u=>u.theme.fontSize.body2};
  color: ${u=>u.theme.colors.grey800};
  min-width: 70px;
  &:first-child {
    margin-top: 0;
  }
`,I=e.div`
  margin-top: 14px;
  display: flex;
  flex-direction: row;
`,lC=u=>{const{name:D,email:i,phoneNumber:r,position:a}=u;return B(oC,{children:[C(aC,{}),B(AC,{children:[B(I,{children:[C(E,{children:"\uC774\uB984"}),C(E,{children:D})]}),B(I,{children:[C(E,{children:"\uD3EC\uC9C0\uC158"}),C(E,{children:a})]}),B(I,{children:[C(E,{children:"\uC774\uBA54\uC77C"}),C(E,{children:i})]}),B(I,{children:[C(E,{children:"\uC804\uD654\uBC88\uD638"}),C(E,{children:r})]})]})]})};e.div`
  height: 90px;
`;const $=e.div`
  height: 50px;
`;e.div`
  height: 30px;
`;const sC=e.div`
  height: 15px;
`,Fu=e.div`
  max-width: 512px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`,fu=e.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`,dC=e.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`,nu=e.label`
  padding: 5px 0;
  display: inline-block;
  font-size: ${u=>u.theme.fontSize.body1};
  font-weight: 400;
  line-height: 1.5;
  color: ${u=>u.theme.colors.grey700};
   {
    ${u=>u.essential&&p`
        &::after {
          display: inline-block;
          margin: 0 0 2px 6px;
          content: '';
          width: 6px;
          height: 6px;
          background-color: ${D=>D.theme.colors.tossRed};
          border-radius: 3px;
        }
      `}
  }
`,iu=e.div`
  display: flex;
  flex-direction: column;
`,O=e.p`
  margin-bottom: 4px;
  font-size: ${({theme:u})=>u.fontSize.body2};
  line-height: 24px;
  color: ${u=>u.theme.colors.grey600};
`;e.li`
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
`;e.article`
  border: 1px solid ${u=>u.theme.colors.grey300};
  padding: 10px 20px;
  border-radius: 10px;
  background-color: ${u=>u.theme.colors.grey50};
  margin-top: 10px;
  margin-bottom: 30px;
`;const ru=e.button`
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

  ${u=>u.disable&&p`
      background: ${D=>D.theme.colors.tossBlue200};
      cursor: not-allowed;
    `}
`,cC=e.h1`
  font-size: ${({theme:u})=>u.fontSize.h2};
  color: ${({theme:u})=>u.colors.grey800};
  font-weight: 500;
  @media (max-width: ${u=>u.theme.windowSize.mobile}px) {
    font-size: ${({theme:u})=>u.fontSize.h3};
  }
  margin-bottom: 10px;
`,F=e.div`
  height: 60px;
`,W=e.a`
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
`,J=e.div`
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
`;e.img`
  position: absolute;
  right: 0;
  bottom: 0;
  @media (max-width: ${u=>u.theme.windowSize.tablet}px) {
    width: 50%;
  }
`;const pC=()=>{const[u]=Lu(),D=u.get("name"),i=u.get("position"),r=Object.fromEntries(new URLSearchParams(location.search));return B(x,{children:[C(G,{title:"\uC9C0\uC6D0 \uC644\uB8CC"}),C(M,{children:C(q,{children:C(Fu,{children:B(fu,{children:[C(F,{}),C(F,{}),C(cC,{children:"\uC9C0\uC6D0\uD574\uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4."}),C(F,{}),C(dC,{children:C(lC,{...r})}),C(F,{}),B(m,{children:[D,"\uB2D8\uC758 \uC9C0\uC6D0\uC11C\uAC00 \uBB34\uC0AC\uD788 \uB3C4\uCC29\uD588\uC5B4\uC694 :)"]}),B(m,{children:[i," \uD3EC\uC9C0\uC158\uC5D0 \uC9C0\uC6D0\uD574\uC8FC\uC154\uC11C \uC9C4\uC2EC\uC73C\uB85C \uAC10\uC0AC\uB4DC\uB824\uC694."]}),C(m,{children:"\uAF3C\uAF3C\uD558\uAC8C \uC11C\uB958\uB97C \uAC80\uD1A0\uD55C \uB4A4 \uBE60\uB974\uAC8C \uACB0\uACFC\uB97C \uC548\uB0B4\uD574\uB4DC\uB9B4\uD14C\uB2C8 \uC870\uAE08\uB9CC \uAE30\uB2E4\uB824\uC8FC\uC138\uC694."}),C(m,{children:"\uAC01 \uC804\uD615\uACB0\uACFC\uC5D0 \uAD00\uD55C \uC548\uB0B4\uB294 \uC801\uC5B4\uC8FC\uC2E0 \uBA54\uC77C\uB85C \uC548\uB0B4\uB418\uB2C8 \uAF2D \uD655\uC778\uBD80\uD0C1\uB4DC\uB824\uC694."}),C(m,{children:"\uCD94\uAC00\uB85C \uC11C\uB958\uAC80\uD1A0\uB294 \uC9C0\uC6D0\uB9C8\uAC10\uC77C\uB85C\uBD80\uD130 \uCD5C\uB300 2\uC8FC \uC18C\uC694\uB420 \uC218 \uC788\uC5B4\uC694. \uB9CC\uC57D 2\uC8FC \uC774\uC0C1 \uC9C0\uB0AC\uC9C0\uB9CC \uC5F0\uB77D\uC744 \uBC1B\uC9C0 \uBABB\uD588\uB2E4\uBA74 GDSC DJU\uC5D0 \uBB38\uC758\uD574\uC8FC\uC138\uC694."}),B(J,{children:["- \uCE74\uCE74\uC624\uD1A1:",C(W,{href:"https://open.kakao.com/o/sjN4kDsd",target:"_blank",children:"https://open.kakao.com/o/sjN4kDsd"})]}),B(J,{children:["- \uC774\uBA54\uC77C:",C(W,{href:"mailto:gdscdju@gmail.com",target:"_blank",children:"gdscdju@gmail.com"})]})," ",B(J,{children:["- \uC778\uC2A4\uD0C0\uADF8\uB7A8:",C(W,{href:"https://www.instagram.com/gdsc.dju",target:"_blank",children:"@GDSC DJU"})]}),C(F,{}),C(m,{children:"GDSC DJU \uB4DC\uB9BC"}),C(F,{})]})})})})]})},EC=()=>C("svg",{width:"96",height:"96",viewBox:"0 0 96 96",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:C("path",{d:"M80 24H48L40 16H16C11.6 16 8.04 19.6 8.04 24L8 72C8 76.4 11.6 80 16 80H80C84.4 80 88 76.4 88 72V32C88 27.6 84.4 24 80 24ZM80 72H16V32H80V72Z",fill:"#6B7684"})}),hC=(u,D)=>{const{defaultPlaceholder:i,uploadFiles:r,errorToggle:a,disabled:l,accept:d,onChange:f}=u,[b,k]=U(i||"Choose a file"),y=Iu(null);return B(mu,{error:a,disabled:!l,onClick:()=>{y.current&&y.current.click()},children:[C(qu,{children:C(EC,{})}),C(Pu,{children:b}),C("input",{ref:y,type:"file",style:{display:"none"},name:"fileName",accept:d,onChange:A=>{A.target.files&&(k(A.target.files[0].name),f&&f(A))}})]})};var mC=Ru(hC);e(mu)`
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
    ${u=>u.error&&p`
        box-shadow: inset 0 0 0 2px ${u.theme.colors.tossRed};
      `}
  }
  .formInput:focus {
    box-shadow: inset 0 0 0 2px ${u=>u.theme.colors.tossBlue500};
    ${u=>u.error&&p`
        box-shadow: inset 0 0 0 2px ${u.theme.colors.tossRed}!important;
      `}
  }
  ${({disabled:u})=>!u&&p`
      &:hover {
        box-shadow: none;
      }
    `}
  ${({error:u})=>u&&p`
      box-shadow: inset 0 0 0 2px ${({theme:D})=>D.colors.tossRed};
    `}
  transition: 0.3s;
`;const xC=e.textarea`
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
    ${u=>u.error&&p`
        box-shadow: inset 0 0 0 2px ${u.theme.colors.tossRed};
      `}
  }
  &:focus {
    box-shadow: inset 0 0 0 2px ${u=>u.theme.colors.tossBlue500};
    ${u=>u.error&&p`
        box-shadow: inset 0 0 0 2px ${u.theme.colors.tossRed}!important;
      `}
  }
  ${({error:u})=>u&&p`
      box-shadow: inset 0 0 0 2px ${({theme:D})=>D.colors.tossRed};
    `}
`,gC=({name:u,position:D,email:i,phoneNumber:r,onClick:a})=>{const[l,d]=S(xu);return C(nC,{children:l.applyCheck&&C(Nu,{initial:{opacity:0},exit:{opacity:0},animate:{opacity:1},children:C(Ou,{outsideClick:()=>d({...l,[L.APPLY_CHECK]:!1}),children:B(Wu,{variants:Ju,exit:"unActive",animate:"active",initial:"unActive",children:[B(ju,{children:[C(Xu,{children:"\uCD5C\uC885 \uC81C\uCD9C \uC804, \uD655\uC778\uD574\uC8FC\uC138\uC694."}),B(R,{children:[C(c,{children:"\uC774\uB984"}),C(c,{children:u})]}),B(R,{children:[C(c,{children:"\uC9C0\uC6D0 \uD3EC\uC9C0\uC158"}),C(c,{children:D})]}),B(R,{children:[C(c,{children:"\uC774\uBA54\uC77C \uC8FC\uC18C"}),C(c,{children:i})]}),B(R,{children:[C(c,{children:"\uC804\uD654\uBC88\uD638"}),C(c,{children:r})]})]}),C(c,{children:"* \uC9C0\uC6D0\uC11C \uB0B4\uC6A9\uC740 \uC81C\uCD9C \uD6C4 \uC218\uC815\uC774 \uBD88\uAC00\uB2A5\uD574\uC694."}),B(Hu,{children:[C(Bu,{text:"\uC81C\uCD9C\uD558\uAE30",onClick:()=>a(),color:"googleBlue"}),C(_u,{children:C(Bu,{text:"\uB3CC\uC544\uAC00\uAE30",onClick:()=>d({...l,[L.APPLY_CHECK]:!1})})})]})]})})})})},ou={name:{type:"INPUT",label:"\uC774\uB984(\uC2E4\uBA85)",placeholder:"\uAE40\uAD6C\uAE00",required:{value:!0,message:"\uD544\uC218 \uC785\uB825 \uAC12\uC774\uC5D0\uC694."},pattern:{value:/^[ㄱ-ㅎ|가-힣]/g,message:"\uD55C\uAE00\uB9CC \uC785\uB825 \uAC00\uB2A5\uD574\uC694."},minLength:{value:2,message:"\uC774\uB984 \uC804\uCCB4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694."}},phoneNumber:{type:"INPUT",label:"\uC804\uD654\uBC88\uD638",placeholder:"01012341234",pattern:{value:/^01([0|1|6|7|8|9])(\d{4})(\d{4})$/,message:"- \uC5C6\uC774 \uC785\uB825\uD574\uC8FC\uC138\uC694"},required:{value:!0,message:"\uD544\uC218 \uC785\uB825 \uAC12\uC774\uC5D0\uC694."}},email:{type:"INPUT",label:"\uC774\uBA54\uC77C(gmail)",placeholder:"googledev@gmail.com",pattern:{value:/^[A-Z0-9._%+-]+@[gmail]+\.[A-Z]{3}$/i,message:"\uC774\uBA54\uC77C \uD615\uC2DD\uC5D0 \uB9DE\uCDB0 \uC785\uB825\uD574\uC8FC\uC138\uC694"},required:{value:!0,message:"\uD544\uC218 \uC785\uB825 \uAC12\uC774\uC5D0\uC694."}},major:{type:"INPUT",label:"\uD559\uACFC",placeholder:"\uAD6C\uAE00\uAC1C\uBC1C\uD559\uACFC",required:{value:!0,message:"\uD544\uC218 \uC785\uB825 \uAC12\uC774\uC5D0\uC694."},pattern:{value:/^[ㄱ-ㅎ|가-힣]/g,message:"\uD55C\uAE00\uB9CC \uC785\uB825 \uAC00\uB2A5\uD574\uC694."},minLength:{value:3,message:"\uC804\uACF5\uC744 \uC804\uBD80 \uC785\uB825\uD574\uC8FC\uC138\uC694"}},studentID:{type:"INPUT",label:"\uD559\uBC88",placeholder:"20221234",pattern:{value:/^[0-9]{8}$/,message:"\uD559\uBC88\uC744 \uC804\uBD80 \uC785\uB825\uD574\uC8FC\uC138\uC694"},required:{value:!0,message:"\uD544\uC218 \uC785\uB825 \uAC12\uC774\uC5D0\uC694."}},question1:{type:"TEXT_AREA",label:v.question1,text:"* \uB514\uC790\uC774\uB108 \uBD84\uB4E4\uC740 \uC0AC\uC6A9\uAC00\uB2A5\uD55C \uD234\uC5D0 \uB300\uD574\uC11C \uC54C\uB824\uC8FC\uC138\uC694.",placeholder:"\uC608) Spring, Vue, Git, Github, NodeJS, Spring, Figma, Adobe XD",required:{value:!0,message:"\uD544\uC218 \uC785\uB825 \uAC12\uC774\uC5D0\uC694."}},question2:{type:"TEXT_AREA",label:v.question2,text:" * \uD504\uB85C\uC81D\uD2B8 \uACBD\uD5D8\uC774 \uC5C6\uB2E4\uBA74 \uBCF8\uC778\uC774 \uB178\uB825\uD574\uC11C \uBCF4\uB78C\uC744 \uB290\uB080 \uC77C\uC5D0 \uB300\uD574\uC11C \uC54C\uB824\uC8FC\uC138\uC694.",required:{value:!0,message:"\uD544\uC218 \uC785\uB825 \uAC12\uC774\uC5D0\uC694."}},question3:{type:"TEXT_AREA",label:v.question3,required:{value:!0,message:"\uD544\uC218 \uC785\uB825 \uAC12\uC774\uC5D0\uC694."}},question4:{type:"TEXT_AREA",label:v.question4,required:{value:!0,message:"\uD544\uC218 \uC785\uB825 \uAC12\uC774\uC5D0\uC694."}},question5:{type:"TEXT_AREA",label:v.question5,required:{value:!0,message:"\uD544\uC218 \uC785\uB825 \uAC12\uC774\uC5D0\uC694."}},link0:{type:"INPUT",label:"\uB9C1\uD06C 1",placeholder:"https://",required:{value:!1,message:""},pattern:{value:/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z\d]+([\-\.]{1}[a-z\d]+)*\.[a-z]{2,5}(:\d{1,5})?(\/.*)?$/,message:"URL \uD615\uC2DD\uC5D0 \uB9DE\uCDB0 \uC785\uB825\uD574\uC8FC\uC138\uC694"}},link1:{type:"INPUT",label:"\uB9C1\uD06C 2",placeholder:"https://",required:{value:!1,message:""},pattern:{value:/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,message:"URL \uD615\uC2DD\uC5D0 \uB9DE\uCDB0 \uC785\uB825\uD574\uC8FC\uC138\uC694"}},linkAnnounce:{type:"TEXT",notice:`\uC790\uC2E0\uC744 \uC798 \uB098\uD0C0\uB0BC \uC218 \uC788\uB294 \uAC1C\uC778\uBE14\uB85C\uADF8, \uB178\uC158, Github\uB9C1\uD06C \uB4F1\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.
*\uB514\uC790\uC774\uB108 \uBD84\uB4E4\uC740 \uD3EC\uD2B8\uD3F4\uB9AC\uC624\uAC00 \uD544\uC218\uC0AC\uD56D\uC785\uB2C8\uB2E4.
*\uD30C\uC77C \uC6A9\uB7C9\uC774 50MB\uB97C \uB118\uC5B4\uAC08 \uACBD\uC6B0 \uD074\uB77C\uC6B0\uB4DC/\uB4DC\uB77C\uC774\uBE0C\uC5D0 \uD30C\uC77C\uC744 \uC5C5\uB85C\uB4DC \uD6C4 \uACF5\uC720\uB9C1\uD06C\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.`,required:{value:!1,message:""}},recommender:{label:"\uCD94\uCC9C\uC778",placeholder:"GDSC\uC5D0 \uCD94\uCC9C\uC778\uC774 \uC788\uB2E4\uBA74 \uC785\uB825\uD574\uC8FC\uC138\uC694",type:"INPUT",required:{value:!1,message:""}}};function FC(u){return Object.keys(u).length===0}var bu=(u=>(u.frontend="Frontend Developer",u.backend="Backend Developer",u.design="UX/UI Designer",u.android="Android Developer",u.beginner="Beginner Position",u.ml="Machine Learning Engineer",u))(bu||{});const fC=()=>{const{id:u}=Eu(),[D,i]=U(""),[r,a]=S(Ku),[l,d]=S(xu),[f,b]=S(Vu),[k,y]=U(null),K=hu(),[A,wu]=U(null),{register:V,handleSubmit:vu,watch:s,formState:$u}=tC({mode:"onChange"}),{errors:w}=$u,Su=(t,n,h)=>{if(t){if(t.size>n)b({...f,alertMessage:`\uC9C0\uC6D0\uC11C \uD30C\uC77C \uC0AC\uC774\uC988\uB294 ${Math.floor(n/1e6)}MB \uC774\uD558\uB85C \uC120\uD0DD\uD574\uC8FC\uC138\uC694.`,alertStatus:"error",alertHandle:!0});else if(t.type!==h){const z=h.replace("application/","");b({...f,alertMessage:`${z} \uD30C\uC77C\uB9CC \uC5C5\uB85C\uB4DC \uAC00\uB2A5\uD569\uB2C8\uB2E4.`,alertStatus:"error",alertHandle:!0});return}else return t;return}},ku=async t=>{const n=Su(t,50000001,"application/pdf");if(n instanceof File){const h=uC(CC,`${n.name}`);return await BC(h,t),await eC(h)}},zu=async()=>{const t={...A,status:"DOCS",generation:P.GENERATION,uploadDate:new Date,position:D};a({...r,load:!0}),d({...l,[L.APPLY_CHECK]:!1});try{if(k){const n=await ku(k);await eu(Du(tu,P.COLLECTION),{...t,fileURL:n})}else await eu(Du(tu,P.COLLECTION),{...t,fileURL:null});K({pathname:"/recruit/apply-success",search:`?${Gu(Q)}`}),a({...r,load:!1})}catch{b({...l,alertMessage:"\uC5B4\uB518\uAC00 \uBB38\uC81C\uAC00 \uC0DD\uACBC\uC5B4\uC694.",alertStatus:"error",alertHandle:!0}),a({...r,load:!1})}},Y=!(s("name")&&s("email")&&s("major")&&s("phoneNumber")&&s("studentID")&&s("question1")&&s("question2")&&s("question3")&&s("question4")&&s("question5")),Z=t=>{wu(JSON.parse(JSON.stringify(t))),FC(w)&&d({...l,[L.APPLY_CHECK]:!0})},Q={name:A==null?void 0:A.name,position:D,email:A==null?void 0:A.email,phoneNumber:A==null?void 0:A.phoneNumber};Uu(()=>{i(bu[u])},[u]);const Tu=Object.keys(ou);return B(x,{children:[C(G,{title:`${D} \uC9C0\uC6D0\uC11C \uC791\uC131 `}),C(gC,{...Q,onClick:zu}),C(M,{children:B(q,{children:[C($,{}),C($,{}),C("form",{onSubmit:vu(Z),children:C(Fu,{children:B(fu,{children:[C(_,{children:"\uC9C0\uC6D0\uC11C \uC791\uC131\uD558\uAE30"}),C(Yu,{children:D}),C($,{}),Tu.map(t=>{var z,uu;const n=ou[t],h=n.required.value;return B(iu,{children:[C(nu,{essential:h,children:n.label}),n.text&&C(O,{children:n.text}),n.type==="INPUT"?C(Zu,{error:!!w[t],placeholder:n.placeholder,...V(t,n)}):n.type==="TEXT_AREA"?C(xC,{placeholder:n.placeholder,error:!!w[t],...V(t,n)}):C("p",{children:(z=n.notice)==null?void 0:z.split(`
`).map(Cu=>C(O,{children:Cu},Cu))}),C(Qu,{children:!!w[t]&&((uu=w[t])==null?void 0:uu.message)})]},t)}),B(iu,{children:[C(nu,{essential:!1,children:"\uCC38\uACE0\uD574\uC57C \uD560 \uCD94\uAC00\uC801\uC778 \uC790\uB8CC\uAC00 \uC788\uB2E4\uBA74 \uCCA8\uBD80\uD574\uC8FC\uC138\uC694"}),C(mC,{defaultPlaceholder:"PDF\uB85C \uC5C5\uB85C\uB4DC \uD574\uC8FC\uC138\uC694!",accept:"application/pdf, .pdf",onChange:t=>y(t.target.files&&t.target.files[0])}),C(O,{children:"* \uD30C\uC77C\uC740 \uCD5C\uB300 50MB\uB85C \uC5C5\uB85C\uB4DC \uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4."})]}),C(sC,{}),C($,{}),Y?C(ru,{type:"button",disable:Y,children:"\uC81C\uCD9C\uD558\uAE30"}):C(ru,{type:"submit",onClick:Z,children:"\uC81C\uCD9C\uD558\uAE30"}),C($,{})]})})})]})})]})};var bC=pu(fC);const yu=[{id:"android",name:"Android Developer",skill:"Android",stack:"JAVA, Kotlin",people:`\uCF54\uB529\uC5D0 \uB300\uD55C \uB0A8\uB2E4\uB978 \uC560\uC815\uC744 \uAC00\uC9C0\uC2E0 \uBD84
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
\uBE44\uAE30\uB108 \uBD84\uB4E4\uC740 \uD574\uCEE4\uD1A4\uC5D0 \uD569\uB958\uD574\uC694.`}],yC=e(iC.div)`
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
`,wC=e.div`
  display: flex;
  padding: 24px 0px;
  margin-right: 30px;
  justify-content: space-around;
  @media (max-width: 500px) {
    display: none;
  }
`,vC=e.div`
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
`,au=e.div`
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
`,$C=e.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
  width: 330px;
  font-size: 1.3rem;
  color: ${({theme:u})=>u.colors.grey700};
`,Au=e.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-left: 10px;
  width: 200px;
  font-size: 1.3rem;
  color: ${({theme:u})=>u.colors.grey700};
`,SC=e.div`
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
`,kC=u=>u.replace(/\(.*\)/gi,""),zC=()=>B(x,{children:[C(G,{title:"\uBAA8\uC9D1 \uC911\uC778 \uD3EC\uC9C0\uC158",description:"\uBAA8\uC9D1 \uC911\uC778 \uD3EC\uC9C0\uC158"}),C(gu,{color:"blue"}),C(M,{children:B(q,{children:[C(o,{}),C(TC,{}),C(o,{}),C(RC,{}),yu.map(u=>C("div",{children:C(IC,{...u})},u.id)),C(o,{})]})})]}),TC=()=>B(x,{children:[C(_,{children:"\uD568\uAED8 \uC131\uC7A5\uD560 \uB3D9\uB8CC\uB97C \uBAA8\uC9D1\uD569\uB2C8\uB2E4"}),C(o,{}),B(m,{children:["\uC5F4\uC815\uC801\uC778 \uB3D9\uB8CC\uB97C \uC5BB\uAE30 \uC704\uD574 \uC774 \uC790\uB9AC\uC5D0 \uBAA8\uC600\uC2B5\uB2C8\uB2E4.",C("br",{}),"\uC6B0\uB9AC\uB294 \uD568\uAED8 \uACE0\uBBFC\uC744 \uB098\uB204\uACE0 \uB3C4\uC804\uD558\uBA70 \uBAA9\uD45C\uB97C \uD5A5\uD574 \uB2EC\uB9AC\uACE0 \uC788\uC2B5\uB2C8\uB2E4."]})]}),RC=()=>B(wC,{children:[C($C,{children:"Team"}),C(Au,{children:"Skill"}),C(Au,{children:"Stack"})]}),IC=({name:u,skill:D,id:i,stack:r})=>{const a=rC(),l=d=>{a(`/recruit/detail/${d}`)};return C(x,{children:C(yC,{onClick:()=>l(i),children:B(vC,{children:[C(SC,{children:kC(u)}),C(au,{children:D}),C(au,{children:r})]})})})},lu={developer:`\uCF54\uB529\uC5D0 \uB300\uD55C \uB0A8\uB2E4\uB978 \uC560\uC815\uC744 \uAC00\uC9C0\uC2E0 \uBD84
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
\uC790\uCCB4 \uC2A4\uD130\uB514\uB97C \uC704\uD55C google\uC758 \uCF54\uC138\uB77C, \uD035\uB7A9 \uBC14\uC6B0\uCC98 \uC9C0\uAE09`,process:"\uC11C\uB958\uC811\uC218 > \uC778\uD130\uBDF0 > \uCD5C\uC885\uD569\uACA9 (\uACB0\uACFC \uBC1C\uD45C\uC5D0\uB294 \uCD5C\uB300 2\uC8FC\uAC00 \uC18C\uC694\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.)"},j=e.div`
  width: 90px;
  font-size: ${({theme:u})=>u.fontSize.body2};
  font-weight: 500;
  line-height: 24px;
  color: ${({theme:u})=>u.colors.grey800};
`,X=e.div`
  color: ${({theme:u})=>u.colors.tossBlue};
  font-size: ${({theme:u})=>u.fontSize.body2};
`,H=e.div`
  padding: 14px 0;
  display: flex;
  align-items: center;
  border-top: 1px solid ${({theme:u})=>u.colors.grey200};
  @media (max-width: 500px) {
    width: 100%;
  }
`,su=u=>{const{name:D}=u;return B(x,{children:[B(H,{children:[C(j,{children:"\uC18C\uC18D"}),C(X,{children:D})]}),B(H,{children:[C(j,{children:"\uD569\uB958\uACFC\uC815"}),C(X,{children:"1\uCC28 \uC11C\uB958 - 2\uCC28 \uBA74\uC811"})]}),B(H,{children:[C(j,{children:"\uD65C\uB3D9\uAE30\uAC04"}),C(X,{children:"1\uB144\uC774\uC0C1"})]})]})},UC=e.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 6px;
`,du=u=>{const{name:D}=u,[i]=S(DC),r=D,a=hu();return B(UC,{children:[C(N,{background:"tossBlue",onClick:()=>{a("/faq")},children:"\uC790\uC8FC \uD558\uB294 \uC9C8\uBB38"}),i[`${r}`]?C(N,{background:"tossBlue",onClick:()=>{a("/recruit/form/"+r)},children:"\uC9C0\uC6D0\uD558\uAE30"}):C(N,{disable:!i[`${r}`],background:"tossBlue200",children:"\uC9C0\uC6D0\uAE30\uAC04\uC774 \uC544\uB2D9\uB2C8\uB2E4."})]})},LC=e.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 320px) {
    flex-direction: column;
  }
  @media (max-width: 500px) {
    flex-direction: column;
  }
`,GC=e.article`
  margin-right: 20px;
  box-sizing: inherit;
  @media (max-width: ${u=>u.theme.windowSize.mobile}px) {
    max-width: 320px;
  }
  @media (max-width: ${u=>u.theme.windowSize.tablet}px) {
    max-width: 550px;
  }
`,MC=e.div`
  width: 337px;
  min-width: 250px;

  display: none;
  @media (min-width: 500px) {
    display: block;
  }
`,cu=e.div`
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
`,qC=e.div`
  display: none;
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;

    bottom: 10px;
  }
`,PC=e.div`
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
`,NC=()=>{const{id:u}=Eu(),D=yu.find(i=>i.id===u);return B(x,{children:[C(G,{title:D==null?void 0:D.name}),C(gu,{color:"blue"}),D&&C(M,{children:B(q,{children:[C(o,{}),C(_,{children:D==null?void 0:D.name}),C(o,{}),B(qC,{children:[C(cu,{children:C(su,{name:D.name})}),C(o,{})]}),B(LC,{children:[B(GC,{children:[C(g,{title:`${D.name} \uD3EC\uC9C0\uC158\uC744 \uC18C\uAC1C\uD574\uC694`,bulletText:D.introduction}),C(o,{}),C(g,{title:`${D.name}\uB294 \uC774\uB7F0 \uAC83\uB4E4\uC744 \uD574\uC694`,bulletText:D.activity}),C(o,{}),C(g,{title:"\uC774\uB7F0 \uBD84\uC744 \uCC3E\uACE0 \uC788\uC5B4\uC694",bulletText:`${D.people}`}),C(o,{}),C(g,{title:"\uC774\uB7F0 \uACBD\uD5D8\uC774 \uC788\uB2E4\uBA74 \uB354 \uC88B\uC544\uC694",bulletText:`${D.plus}`}),C(o,{}),C(g,{title:"GDSC\uC5D0 \uD569\uB958\uD558\uBA74 \uC5BB\uB294 \uD61C\uD0DD\uC774\uC5D0\uC694",bulletText:`${lu.benefits}`}),C(o,{}),C(g,{title:"GDSC DJU\uB85C\uC758 \uD569\uB958\uC5EC\uC815",bulletText:`${lu.process} `})]}),C(MC,{children:B(cu,{children:[C(su,{name:D.name}),C(o,{}),C(du,{name:u}),C(o,{})]})})]}),C(PC,{children:C(du,{name:u})})]})}),C(o,{})]})},OC=()=>B(Mu,{children:[C(T,{path:"/*",element:C(zC,{})}),C(T,{path:"/detail/:id",element:C(NC,{})}),C(T,{path:"/form/:id",element:C(bC,{})}),C(T,{path:"/apply-success",element:C(pC,{})})]});var a8=pu(OC);export{a8 as default};
