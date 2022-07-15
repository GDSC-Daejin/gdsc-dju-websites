import{j as i,a as u,_ as h,F as x,G as B,S as f,b as D}from"./index.554b7492.js";import{lazy as g,Suspense as b}from"react";import t,{css as w}from"styled-components";import{R as z}from"./index.94c0e8c0.js";import{motion as o}from"framer-motion";import{l as a,a as d,M as A}from"./index.d4e0045e.js";const s=t(o.div)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  ${({color:e})=>e&&w`
      background: ${n=>n.theme.colors[e]};
    `};
  @media (max-width: ${({theme:e})=>e.windowSize.mobile}px) {
    min-height: 100vh;
    padding: 40px 0;
  }
`,m=t(o.div)`
  position: relative;
  display: flex;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  max-width: 1160px;
  margin: 0 auto;
  min-width: 320px;
`,p=t(o.div)`
  width: fit-content;
  margin: 0 auto;
  max-width: 1090px;
  padding: 0 2rem;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: ${({theme:e})=>e.windowSize.desk}px) {
    max-width: 700px;
  }
  @media (max-width: ${({theme:e})=>e.windowSize.tablet}px) {
    max-width: 600px;
  }
  @media (max-width: ${({theme:e})=>e.windowSize.mobile}px) {
    max-width: 330px;
  }
`,c=t(o.h1)`
  display: block;
  width: 100%;
  margin-bottom: 25px;
  font-size: ${({theme:e})=>e.fontSize.h2};
  font-style: normal;
  font-weight: bold;
  font-stretch: normal;
  line-height: 52px;
  color: ${({theme:e})=>e.colors.grey900};
  letter-spacing: normal;
  word-break: keep-all;
  @media (max-width: ${({theme:e})=>e.windowSize.tablet}px) {
    font-size: ${({theme:e})=>e.fontSize.h3};
  }
  @media (max-width: ${({theme:e})=>e.windowSize.mobile}px) {
    font-size: ${({theme:e})=>e.fontSize.h4};
  }
`,S=[{title:"\uB204\uAD6C\uB098 \uB9AC\uB354\uAC00 \uB420 \uC218 \uC788\uC5B4\uC694",text:"\uC218\uD3C9\uC801\uC778 \uBB38\uD654\uB97C \uC9C0\uD5A5\uD558\uACE0 \uC788\uC5B4\uC694. \uBA64\uBC84\uB4E4\uC740 \uBAA8\uB450 \uB3D9\uB4F1\uD55C \uAD6C\uC131\uC6D0\uC73C\uB85C\uC11C \uC2A4\uD130\uB514\uB098 \uD504\uB85C\uC81D\uD2B8\uB97C \uAC1C\uC124\uD558\uACE0 \uD300 \uB9AC\uB354\uB97C \uB9E1\uC544 \uC6B4\uC601\uD560 \uC218 \uC788\uC5B4\uC694"},{title:"\uBAA8\uB4E0 \uC815\uBCF4\uB97C \uD22C\uBA85\uD558\uAC8C",text:"\uC800\uD76C\uB294 Notion\uACFC Slack\uACFC \uAC19\uC740 \uD611\uC5C5\uD234\uC744 \uC774\uC6A9\uD574 \uD65C\uB3D9\uD558\uACE0 \uC788\uC5B4\uC694. \uC774\uBCA4\uD2B8 \uAE30\uD68D\uC548\uC774\uB098 \uC601\uC218\uC99D \uAC19\uC740 \uC790\uB8CC\uB294 \uAD6C\uC131\uC6D0\uB4E4\uC5D0\uAC8C \uD22C\uBA85\uD558\uAC8C \uC81C\uACF5\uB418\uACE0 \uC788\uC5B4\uC694."},{title:"\uC601\uC5B4 \uC774\uB984\uC744 \uC0AC\uC6A9\uD574\uC694",text:'\uB204\uAD6C\uC640\uB3C4 \uD3B8\uD558\uAC8C \uC18C\uD1B5\uD558\uB294 \uBD84\uC704\uAE30\uB97C \uB9CC\uB4E4\uAE30 \uC704\uD574, \uC601\uC5B4 \uC774\uB984\uC744 \uD638\uCE6D\uC73C\uB85C \uC0AC\uC6A9\uD574\uC694. \uC601\uC5B4 \uC774\uB984\uC744 \uBD80\uB97C \uB54C\uB294 "\uB2D8" \uC790\uB97C \uBD99\uC774\uAC70\uB098 "\uB9D0\uC500\uD558\uC168\uB2E4" \uAC19\uC740 \uADF9\uC874\uCE6D\uB3C4 \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uC544\uC694.'},{title:"\uCDA9\uB3CC\uC740 \uC5B8\uC81C\uB098 \uD658\uC601\uD574\uC694",text:"\uAD6C\uC131\uC6D0\uC774 \uB9CE\uC740 \uB9CC\uD07C \uC5EC\uB7EC \uC0DD\uAC01\uACFC \uAD00\uC810\uC774 \uC874\uC7AC\uD574\uC694. \uB354 \uB098\uC740 \uCEE4\uBBA4\uB2C8\uD2F0\uB97C \uC704\uD574 \uC5EC\uB7EC\uBD84\uC758 \uC758\uACAC\uC744 \uB9C8\uAD6C\uB9C8\uAD6C \uC81C\uC2DC\uD574\uC8FC\uC138\uC694."}],v=t(o.section)`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  margin-top: 80px;
  @media (max-width: ${({theme:e})=>e.windowSize.tablet}px) {
    margin-top: 40px;
    gap: 30px;
  }
`,$=t(o.div)`
  max-width: 450px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  @media (max-width: ${({theme:e})=>e.windowSize.mobile}px) {
    gap: 20px;
  }
`,y=t.h2`
  font-size: ${({theme:e})=>e.fontSize.h3};
  color: ${({theme:e})=>e.colors.grey900};
  @media (max-width: ${({theme:e})=>e.windowSize.tablet}px) {
    font-size: ${({theme:e})=>e.fontSize.h4};
    max-width: 370px;
  }
  @media (max-width: ${({theme:e})=>e.windowSize.mobile}px) {
    font-size: ${({theme:e})=>e.fontSize.h5};
    max-width: 330px;
  }
`,k=t.p`
  font-size: ${({theme:e})=>e.fontSize.body1};
  color: ${({theme:e})=>e.colors.grey600};
  line-height: 1.5;
  word-break: keep-all;
  @media (max-width: ${({theme:e})=>e.windowSize.tablet}px) {
    font-size: ${({theme:e})=>e.fontSize.body2};
  }
`,E=()=>i(s,{children:i(m,{children:u(p,{children:[i(c,{variants:a,initial:"start",whileInView:"end",viewport:{once:!0},children:"GDSC DJU\uC758 \uBB38\uD654\uB97C \uC18C\uAC1C\uD574\uC694"}),i(v,{variants:a,children:S.map((e,n)=>u($,{variants:d,initial:"start",whileInView:"end",viewport:{once:!0},children:[i(y,{children:e.title}),i(k,{children:e.text})]},n))})]})})}),r=t(o.div)`
  display: flex;
  flex-direction: column;
  width: 40rem;
  margin-top: 5.1rem;
  word-break: keep-all;
  @media (max-width: ${({theme:e})=>e.windowSize.mobile}px) {
    width: 250px;
    margin-top: 2rem;
  }
`,C=t.span`
  margin-bottom: 0.9rem;
  font-size: ${({theme:e})=>e.fontSize.h5};
  font-style: normal;
  font-weight: normal;
  font-stretch: normal;
  line-height: 2.629rem;
  color: ${({theme:e})=>e.colors.grey600};
  letter-spacing: normal;
  word-break: keep-all;
  -webkit-font-smoothing: subpixel-antialiased;
  @media (max-width: ${({theme:e})=>e.windowSize.tablet}px) {
    font-size: ${({theme:e})=>e.fontSize.body1};
  }
  @media (max-width: ${({theme:e})=>e.windowSize.mobile}px) {
    font-size: ${({theme:e})=>e.fontSize.body2};
  }
`,l=t.span`
  font-size: ${({theme:e})=>e.fontSize.h2};
  font-style: normal;
  font-weight: bold;
  font-stretch: normal;
  color: ${({theme:e})=>e.colors.grey900};
  letter-spacing: normal;
  word-break: keep-all;
  @media (max-width: ${({theme:e})=>e.windowSize.tablet}px) {
    font-size: ${({theme:e})=>e.fontSize.h3};
  }
  @media (max-width: ${({theme:e})=>e.windowSize.mobile}px) {
    font-size: ${({theme:e})=>e.fontSize.h4};
    line-height: 1.5;
  }
`,T=()=>i(s,{children:i(m,{children:u(p,{variants:d,children:[i(c,{variants:a,initial:"start",whileInView:"end",viewport:{once:!0},children:"\uB514\uC790\uC774\uB108\uC640 \uAC1C\uBC1C\uC790\uC758 \uC131\uC7A5\uC744 \uC704\uD574"}),u(r,{variants:a,initial:"start",whileInView:"end",viewport:{once:!0},children:[i(C,{children:"\uB204\uC801 \uC9C0\uC6D0\uC790 \uC218"}),i(l,{children:"90\uBA85 +"})]}),u(r,{variants:a,initial:"start",whileInView:"end",viewport:{once:!0},children:[i(C,{children:"\uC804\uCCB4 \uC778\uC6D0"}),i(l,{children:"30\uBA85 +"})]}),u(r,{variants:a,initial:"start",whileInView:"end",viewport:{once:!0},children:[i(C,{children:"\uC9C4\uD589\uD55C \uC2A4\uD130\uB514/\uD504\uB85C\uC81D\uD2B8"}),i(l,{children:"10\uD68C +"})]}),u(r,{variants:a,initial:"start",whileInView:"end",viewport:{once:!0},children:[i(C,{children:"\uC9C4\uD589\uD55C \uC774\uBCA4\uD2B8"}),i(l,{children:"100\uD68C +"})]})]})})});var j="/assets/jason.86259d4d.jpeg",F="/assets/blaire.3e2ca8fa.jpg";const I=[{nickname:"Jason",name:"\uC815\uC900\uD601",image:j,position:"Frontend Developer",role:"",text:""},{nickname:"Blaire",name:"\uC774\uC18C\uD76C",image:F,position:"UX/UI Designer",role:"",text:""},{nickname:"Harry",name:"\uBC15\uD604\uAE30",image:"https://ca.slack-edge.com/T02BE2ERU5A-U02BR888JMT-84a18780d457-512",position:"Android Developer",role:"",text:""},{nickname:"Want",name:"\uC815\uC18C\uC5F0",image:"https://ca.slack-edge.com/T02BE2ERU5A-U02CH6KQT8Q-0c56c2e2ad87-512",position:"Backend Developer",role:"",text:""},{nickname:"Jim",name:"\uC804\uBCD1\uC120",image:"https://ca.slack-edge.com/T02BE2ERU5A-U02TKATKRBN-f37d39e0011d-512",position:"Android Developer",role:"",text:""},{nickname:"Rocoli",name:"\uC720\uD615\uCC2C",image:"https://ca.slack-edge.com/T02BE2ERU5A-U02C8B72LT1-dd9b1e6b25ad-512",position:"Backend Developer",role:"",text:""}],V=t(o.div)`
  margin-bottom: 50px;
  font-size: ${({theme:e})=>e.fontSize.h6};
  font-style: normal;
  font-weight: normal;
  font-stretch: normal;
  line-height: 1.45em;
  color: ${({theme:e})=>e.colors.grey600};
  letter-spacing: normal;
  word-break: keep-all;
  -webkit-font-smoothing: subpixel-antialiased;
  @media (max-width: ${({theme:e})=>e.windowSize.tablet}px) {
    font-size: ${({theme:e})=>e.fontSize.body1};
  }
  @media (max-width: ${({theme:e})=>e.windowSize.mobile}px) {
    font-size: ${({theme:e})=>e.fontSize.body1};
  }
`,U=t(o.section)`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 30px;
`,H=t(o.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 250px;
  min-height: 300px;

  @media (max-width: ${({theme:e})=>e.windowSize.mobile}px) {
    width: 100%;
  }
`,R=()=>i(s,{children:i(m,{children:u(p,{children:[i(c,{variants:a,initial:"start",whileInView:"end",viewport:{once:!0},children:"GDSC DJU \uC6B4\uC601\uC9C4\uC744 \uC18C\uAC1C\uD574\uC694"}),i(V,{variants:a,initial:"start",whileInView:"end",viewport:{once:!0},children:"\uAD6C\uC131\uC6D0\uC758 \uB3C4\uC6C0\uC744 \uBC1B\uC544 \uCEE4\uBBA4\uB2C8\uD2F0\uC758 \uBB38\uD654\uB97C \uB9CC\uB4E4\uC5B4\uB098\uAC00\uACE0 \uC788\uC5B4\uC694"}),i(U,{variants:d,children:I.map((e,n)=>i(H,{variants:a,initial:"start",whileInView:"end",viewport:{once:!0},children:i(A,{member:e})},n))})]})})}),Q=t(o.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
`,X=t.button`
  width: 22rem;
  height: 6rem;
  border-radius: 7.5rem;
  border-style: solid;
  background: ${({theme:e})=>e.colors.tossBlueActive};
  border-width: 0;
  color: white;
  font-size: 1.6rem;
  cursor: pointer;
  ${({disable:e})=>e&&w`
      background: ${({theme:n})=>n.colors.tossBlue200};
      cursor: not-allowed;
    `};
  @media (max-width: ${({theme:e})=>e.windowSize.tablet}px) {
    width: 18rem;
    height: 5.5rem;
    font-size: 1.5rem;
  }
  @media (max-width: 500px) {
    width: 150px;
    height: 45px;
    font-size: 1.3rem;
  }
`;t(o.div)`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  overflow-x: hidden;
  z-index: -1;
  top: 0;
`;const q=t(o.section)`
  position: absolute;
  bottom: 14%;
  left: 10%;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  @media (max-width: ${({theme:e})=>e.windowSize.desk}px) {
    bottom: 14%;
    left: 10%;
  }
  @media (max-width: ${({theme:e})=>e.windowSize.tablet}px) {
    bottom: 10%;
    left: 10%;
  }
  @media (max-width: ${({theme:e})=>e.windowSize.mobile}px) {
    bottom: 12%;
    left: 10%;
  }
  @media (max-width: 320px) {
    bottom: 10%;
    left: 10%;
  }
`,Y=t(o.div)`
  position: relative;
  justify-content: flex-start;
  left: 0;
  z-index: 50;
`;t(o.div)`
  z-index: 1;
  position: absolute;
  max-width: 500px;
  width: 40%;
  left: -200px;
  @media (max-width: ${({theme:e})=>e.windowSize.desk}px) {
    width: 45%;
  }
  @media (max-width: ${({theme:e})=>e.windowSize.tablet}px) {
    bottom: 100px;
    width: 300px;
    left: -100px;
  }
`;t(o.div)`
  z-index: 1;
  position: absolute;
  max-width: 50rem;
  width: 40%;
  right: -20rem;
  @media (max-width: ${({theme:e})=>e.windowSize.desk}px) {
    width: 45%;
  }
  @media (max-width: ${({theme:e})=>e.windowSize.tablet}px) {
    top: 200px;
    width: 30rem;
    right: -10rem;
  }
  @media (max-width: 760px) {
    top: -5rem;
  }
`;const Z=t(o.div)`
  margin-top: 30px;
`,ee=t.div`
  display: flex;
  flex-direction: row;
`,ie=t.h1`
  font-size: 70px;
  font-weight: bold;
  color: ${({color:e,theme:n})=>e?n.colors[e]:n.colors.grey900};
  @media (max-width: ${({theme:e})=>e.windowSize.tablet}px) {
    font-size: ${({theme:e})=>e.fontSize.h2};
  }
  @media (max-width: 320px) {
    font-size: ${({theme:e})=>e.fontSize.h3};
  }
`,te=t(o.p)`
  display: flex;
  margin-top: 10px;
  font-size: ${({theme:e})=>e.fontSize.body1};
  color: ${({theme:e})=>e.colors.grey500};
  @media (max-width: ${({theme:e})=>e.windowSize.tablet}px) {
    font-size: 1.5rem;
  }
  @media (max-width: 320px) {
    font-size: 1.5rem;
  }
`,oe=t(o.div)`
  position: absolute;
  bottom: 5%;
  display: flex;
  width: 100vw;
  justify-content: center;
  opacity: 50;
`,W=t.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 20%;
  top: 20%;
  z-index: -1;
  transform: translate(0%, -50%);
  @media (max-width: 500px) {
    left: 100%;
    top: 10%;
    transform: scale(0.6, 0.6);
  }
`,_=g(()=>h(()=>import("./HomePageV2.a14ab5df.js"),["assets/HomePageV2.a14ab5df.js","assets/index.d4e0045e.js","assets/index.554b7492.js","assets/index.0535bca2.css","assets/index.94c0e8c0.js"]).then(e=>({default:e.default}))),M=t.div`
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  .container {
    scroll-behavior: smooth;
    height: 100vh;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    @media (max-width: 1040px) {
      scroll-snap-type: none;
      height: auto;
    }
  }
  .container::-webkit-scrollbar {
    width: 0;
    background: transparent;
    display: none;
  }
  .container > div {
    scroll-snap-align: start;
  }
`,G=()=>u(x,{children:[i(z,{title:"GDSC DJU",description:"Google Developer Student Clubs Daejin University \uCC55\uD130\uC785\uB2C8\uB2E4. "}),i(M,{children:i(b,{fallback:i(B,{}),children:u("div",{className:"container",children:[i(W,{children:i(f,{})}),i(_,{}),i(T,{}),i(E,{}),i(R,{}),i(D,{})]})})})]});var ne=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"}));export{q as B,oe as D,ee as G,Q as H,te as M,Y as R,X as S,ie as a,Z as b,ne as i};
