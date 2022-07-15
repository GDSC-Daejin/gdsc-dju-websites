import l from"styled-components";import{motion as a}from"framer-motion";import{j as e,F as n,a as r,M as p,K as c}from"./index.554b7492.js";const m=l(a.li)`
  position: relative;
  padding-left: 24px;
  margin: 8px 0;
  font-size: 1.6rem;
  line-height: 24px;
  list-style: none;
  color: ${({theme:t})=>t.colors.grey700};
  &:before {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 16px;
    height: 16px;
    font-size: 1.6rem;
    font-weight: bold;
    line-height: 23px;
    color: ${t=>t.theme.colors.tossBlue};
    text-align: center;
    content: '•';
  }
  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`,h=t=>{const{text:i}=t;return e(n,{children:i.split(`
`).map((o,s)=>r(m,{children:[o,e("br",{})]},s))})},g=({title:t,text:i,bulletText:o})=>r(p,{children:[e(c,{children:t}),o&&e(h,{text:o}),i&&e(n,{children:i})]});export{h as B,g as S};
