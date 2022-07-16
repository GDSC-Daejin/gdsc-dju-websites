import{s as l,m as a,j as e,F as o,a as s,M as c,a3 as p}from"./index.f89fb69d.js";const h=l(a.li)`
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
`,d=t=>{const{text:i}=t;return e(o,{children:i.split(`
`).map((n,r)=>s(h,{children:[n,e("br",{})]},r))})},x=({title:t,text:i,bulletText:n})=>s(c,{children:[e(p,{children:t}),n&&e(d,{text:n}),i&&e(o,{children:i})]});export{d as B,x as S};
