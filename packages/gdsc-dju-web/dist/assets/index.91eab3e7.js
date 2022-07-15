import s,{createElement as E,useState as a}from"react";import{a as o,F as d,j as C,T as p}from"./index.554b7492.js";import{L as m,C as l,T as i}from"./layouts.217aada7.js";import{motion as t,AnimatePresence as c}from"framer-motion";import B,{css as F}from"styled-components";import{B as f}from"./index.296e2a3f.js";import{R as h}from"./index.94c0e8c0.js";import"react-router";import"recoil";import"react-router-dom";import"lottie-web";import"react-error-boundary";import"browser-detect";import"@firebase/app";import"axios";import"@firebase/app-compat";import"@emailjs/browser";import"react-dom";import"react-helmet";const x=B(t.a)`
  cursor: pointer;
  padding: 24px 10px;
  display: flex;
  color: ${u=>u.theme.colors.grey700};
  flex-direction: column;
  border-radius: 10px;
  font-size: ${({theme:u})=>u.fontSize.h6};
  transition: all 0.3s ease;
  clip-path: inset(1% round 1%);
  ${({isOpen:u})=>u&&F`
      color: ${({theme:D})=>D.colors.googleBlue};
    `}
  &:hover {
    clip-path: inset(0% round 1%);
  }
  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`,g=B.div`
  font-size: ${({theme:u})=>u.fontSize.h6};
  display: flex;
  align-items: center;
  flex-direction: row;
  @media (max-width: 500px) {
    font-size: ${({theme:u})=>u.fontSize.body1};
  }
`,w=B(t.div)`
  box-sizing: border-box;
  padding: 20px 20px;
  padding-top: 0;
  color: ${({theme:u})=>u.colors.grey800};
`,y=B.div`
  font-size: ${({theme:u})=>u.fontSize.body1};
  @media (max-width: 500px) {
    font-size: ${({theme:u})=>u.fontSize.body2};
  }
`,z=B.div`
  border-top: 1px solid ${({theme:u})=>u.colors.grey200};
`,q=B.div`
  height: 100%;
  font-size: ${({theme:u})=>u.fontSize.h6};
  ::before {
    display: flex;
    height: 100%;
    margin-right: 16px;
    margin-bottom: 2px;
    font-weight: 600;
    color: ${u=>u.theme.colors.grey700};
    content: 'Q';
  }
`,S=[{id:1,question:"\uC804\uD615\uACB0\uACFC\uB294 \uC5B8\uC81C \uC54C \uC218 \uC788\uB098\uC694?",answer:`\uC9C0\uC6D0\uAE30\uAC04, \uBA74\uC811\uAE30\uAC04\uC774 \uC885\uB8CC\uB41C \uD6C4 \uD569\uACA9/\uBD88\uD569\uACA9 \uC5EC\uBD80\uC5D0 \uAD00\uACC4\uC5C6\uC774 \uC77C\uC8FC\uC77C \uC548\uC5D0 \uC774\uBA54\uC77C\uB85C \uC5F0\uB77D\uC744 \uB4DC\uB9AC\uACE0 \uC788\uC2B5\uB2C8\uB2E4.
\uC77C\uC8FC\uC77C\uC774 \uC9C0\uB09C \uD6C4\uC5D0\uB3C4 \uC5F0\uB77D\uC744 \uBC1B\uC9C0 \uBABB\uD560 \uACBD\uC6B0 gdscdju@gmail.com\uC73C\uB85C \uC5F0\uB77D\uC8FC\uC2DC\uBA74 \uBE60\uB974\uAC8C \uB3C4\uC6C0\uC744 \uB4DC\uB9AC\uB3C4\uB85D \uD558\uACA0\uC2B5\uB2C8\uB2E4.`},{id:2,question:"\uC9C0\uC6D0 \uC2DC \uC720\uC758\uC0AC\uD56D\uC774 \uC788\uB098\uC694?",answer:`GDSC DJU\uAC00 \uCD94\uAD6C\uD558\uB294 \uCEE4\uBBA4\uB2C8\uD2F0\uB294 \uBAA8\uB450\uAC00 \uCEE4\uBBA4\uB2C8\uD2F0\uC758 \uBC1C\uC804\uC744 \uC704\uD574 \uB178\uB825\uD558\uB294 \uBD84\uC704\uAE30\uC785\uB2C8\uB2E4.
\uAC1C\uAC1C\uC778\uC758 \uCF54\uB529\uC2E4\uB825\uB3C4 \uC911\uC694\uD558\uC9C0\uB9CC \uB3D9\uB8CC\uC5D0\uAC8C \uC5BC\uB9C8\uB098 \uD070 \uB3D9\uAE30\uBD80\uC5EC\uB97C \uC904 \uC218 \uC788\uB294\uC9C0\uB97C \uD070 \uD3C9\uAC00\uC694\uC18C\uB85C \uB450\uACE0 \uC788\uC2B5\uB2C8\uB2E4. `},{id:3,question:"\uBD88\uD569\uACA9\uD55C \uC774\uB825\uC774 \uC788\uC5B4\uB3C4 \uC7AC\uC9C0\uC6D0\uC774 \uAC00\uB2A5\uD55C\uAC00\uC694?",answer:`\uB124 \uAC00\uB2A5\uD569\uB2C8\uB2E4.
 \uB2E4\uB9CC \uBA74\uC811 \uBD88\uCC38, \uACBD\uACE0 2\uD68C \uB204\uC801\uC73C\uB85C \uC778\uD574 \uD0C8\uB77D\uD55C \uACBD\uC6B0 \uC601\uAD6C\uC801\uC73C\uB85C \uC9C0\uC6D0\uC774 \uBD88\uAC00\uB2A5\uD569\uB2C8\uB2E4.`},{id:4,question:"\uBE44\uC804\uACF5\uC790\uB3C4 \uC9C0\uC6D0\uC774 \uAC00\uB2A5\uD55C\uAC00\uC694?",answer:`\uB124 \uAC00\uB2A5\uD569\uB2C8\uB2E4.
 \uC7AC\uD559\uC0DD, \uD734\uD559\uC0DD\uC774\uC2DC\uB77C\uBA74 \uB204\uAD6C\uB098 \uC9C0\uC6D0\uAC00\uB2A5\uD569\uB2C8\uB2E4.`},{id:5,question:"\uB300\uD559\uC6D0\uC0DD\uB3C4 \uC9C0\uC6D0\uC774 \uAC00\uB2A5\uD55C\uAC00\uC694?",answer:"\uBD88\uAC00\uB2A5\uD569\uB2C8\uB2E4. Google Developer Student Clubs \uC6B4\uC601\uBC29\uCE68\uC0C1 \uD559\uBD80\uC0DD, \uC7AC.\uD734\uD559\uC0DD \uB300\uC0C1\uC785\uB2C8\uB2E4."},{id:6,question:"\uCF54\uB529 \uAD50\uC721\uACFC\uC815\uC774 \uC788\uB294\uAC74\uAC00\uC694?",answer:`\uAC1C\uBC1C \uCEE4\uBBA4\uB2C8\uD2F0\uB85C\uC11C \uAD50\uC721\uC744 \uC9C1\uC811\uC801\uC73C\uB85C \uC9C4\uD589\uD558\uC9C0\uB294 \uC54A\uC2B5\uB2C8\uB2E4.
\uD300\uBCC4\uB85C \uC9C0\uC2DD\uC744 \uACF5\uC720\uD558\uAC70\uB098 \uC5EC\uB7EC \uD65C\uB3D9\uC744 \uD1B5\uD574 \uC88B\uC740 \uC2DC\uB108\uC9C0\uB97C \uC8FC\uB294\uB370\uC5D0 \uBAA9\uC801\uC774 \uC788\uC2B5\uB2C8\uB2E4.
\uADF8\uB7EC\uB098 git \uC0AC\uC6A9\uC774\uB098 \uD559\uC2B5\uC5D0 \uD544\uC694\uD55C \uAC00\uC774\uB4DC\uB77C\uC778\uC740 \uC81C\uACF5\uD574\uB4DC\uB9BD\uB2C8\uB2E4.`},{id:7,question:"\uD65C\uB3D9\uC2DC\uAC04\uC774 \uC815\uD574\uC838\uC788\uB098\uC694?",answer:`\uC815\uAE30\uC138\uBBF8\uB098\uB294 2\uC8FC\uB9C8\uB2E4 \uC6D4\uC694\uC77C \uBC24 9\uC2DC\uC5D0 \uC9C4\uD589\uB418\uBA70 \uD504\uB85C\uC81D\uD2B8\uB294 \uD300\uBCC4\uB85C \uC870\uC728\uD558\uC5EC \uB9E4\uC8FC \uC9C4\uD589 \uC911\uC785\uB2C8\uB2E4.
\uC815\uAE30\uC138\uBBF8\uB098, \uD504\uB85C\uC81D\uD2B8 \uC678\uC5D0 \uB2E4\uB978 \uD65C\uB3D9\uC740 \uC790\uC728\uB85C \uC9C4\uD589\uB418\uACE0 \uC788\uC2B5\uB2C8\uB2E4.`},{id:8,question:"\uD65C\uB3D9 \uBC29\uC2DD\uC774 \uAD81\uAE08\uD574\uC694",answer:`GDSC\uB294 \uD559\uC0DD \uAC1C\uBC1C\uC790 \uCEE4\uBBA4\uB2C8\uD2F0\uB85C \uC77C\uBC18\uC801\uC778 \uB3D9\uC544\uB9AC\uC640\uB294 \uCC28\uBCC4\uC810\uC744 \uB450\uACE0 \uC788\uC2B5\uB2C8\uB2E4.
\uBE44\uAE30\uB108\uC640 \uD3EC\uC9C0\uC158\uC744 \uAC00\uC9C4 \uBD84\uB4E4\uC740 \uD65C\uB3D9\uBC29\uC2DD\uC774 \uB2E4\uB985\uB2C8\uB2E4. \uBE44\uAE30\uB108 \uBD84\uB4E4\uC740 \uC6B4\uC601\uC9C4\uC774 \uC9C0\uC815\uD574\uC900 \uD300\uC744 \uBC14\uD0D5\uC73C\uB85C 3\uAC1C\uC6D4\uAC04 \uC9C4\uD589\uB418\uB294 \uBBF8\uB2C8\uD574\uCEE4\uD1A4\uC744 \uC9C4\uD589\uD569\uB2C8\uB2E4. \uBBF8\uB2C8\uD574\uCEE4\uD1A4\uC740 \uCD1D 3\uD68C\uCC28\uAE4C\uC9C0 \uC9C4\uD589\uB418\uBA70 3\uBC88 \uC548\uC5D0 \uD3EC\uC9C0\uC158\uC744 \uBC1B\uC9C0 \uBABB\uD560 \uACBD\uC6B0 GDSC\uC640 \uD568\uAED8\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. 
\uD3EC\uC9C0\uC158\uC744 \uD68D\uB4DD\uD558\uB294 \uAE30\uC900\uC740 "\uD558\uB098\uC758 \uD504\uB85C\uC81D\uD2B8\uB97C \uC2A4\uC2A4\uB85C \uAC1C\uBC1C\uD560 \uC218 \uC788\uB294\uAC00" \uC785\uB2C8\uB2E4. (\uC0C1\uD0DC\uAD00\uB9AC, GitFlow \uB4F1\uB4F1)
\uD3EC\uC9C0\uC158\uC744 \uAC00\uC9C4 \uBD84\uB4E4\uC740 \uD504\uB85C\uC81D\uD2B8 \uD300(\uD3EC\uC9C0\uC158 \uBCC4 \uCD5C\uB300 2\uBA85)\uC744 \uAC1C\uC124\uD558\uC5EC \uD65C\uB3D9\uD569\uB2C8\uB2E4.
GDG, \uD0C0 \uB300\uD559 GDSC\uC640 \uC5F0\uD569\uD558\uC5EC \uC9C4\uD589\uD558\uB294 \uC774\uBCA4\uD2B8\uB97C \uAE30\uD68D, \uC8FC\uCD5C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`}],X=()=>o(d,{children:[C(h,{title:"\uC790\uC8FC \uBB3B\uB294 \uC9C8\uBB38",description:"\uC790\uC8FC \uBB3B\uB294 \uC9C8\uBB38"}),C(f,{color:"green"}),C(m,{children:o(l,{children:[C(i,{}),C(p,{children:"\uC790\uC8FC \uBB3B\uB294 \uC9C8\uBB38"}),C(i,{}),C(c,{children:S.map((u,D)=>E(b,{...u,key:D}))}),C(i,{})]})})]}),$=({question:u,answer:D})=>{const[e,n]=a(!1);return o(t.div,{children:[C(x,{animate:e?"hovered":"unHover",isOpen:e,onClick:()=>{n(!e)},children:o(g,{children:[C(q,{}),u]})}),e&&C(w,{exit:{opacity:0,transition:{duration:.3}},animate:{opacity:1,transition:{duration:.3}},initial:{opacity:0},children:D.split(`
`).map((A,r)=>C(y,{children:A},r))}),C(z,{})]})},b=s.memo($);export{X as default};
