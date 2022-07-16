import{l as s,s as r,m as a,C as p,r as y,u as w,j as i,A as I,L as z,a as g,F as x}from"./index.f89fb69d.js";const K={start:{opacity:0},end:{opacity:1,transition:{duration:1}},exit:{opacity:0}},N={start:{opacity:0},end:{opacity:1,transition:{staggerChildren:.2,delayChildren:.2,duration:.6}},exit:{opacity:0}},P={start:{opacity:0,y:-30},end:{opacity:1,y:0,transition:{duration:1}},exit:{opacity:0}},R={start:{opacity:0,y:30},end:{opacity:1,y:0,transition:{duration:.5}},exit:{opacity:0}},u={frontend:s.googleBlue,backend:s.googleRed,android:s.googleGreen,beginner:s.orange900,designer:s.googleYellow};function M(o){const t=Object.keys(u),d=o.toLowerCase();let e="#fff";return t.map(c=>{d.includes(c)&&(e=u[c])}),e}const A=r(a.div)`
  position: relative;
  width: 250px;
  height: 300px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: ${({theme:o})=>o.colors.boxShadow100};
  ${({isSquare:o})=>o&&p`
      height: 250px;
    `}
`,S=r(a.div)`
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  overflow: hidden;
  z-index: 0;
`,j=r(a.img)`
  position: absolute;
  z-index: -1;
  height: 300px;
  background-position-x: 50%;
  background-position-y: 50%;
  border-radius: 16px;
  ${({isSquare:o})=>o&&p`
      height: 250px;
    `}
`,L=r(a.p)`
  height: 24px;
  margin: 0 0 8px 0;
  overflow-y: hidden;
  font-size: ${({theme:o})=>o.fontSize.body2};
  line-height: 24px;
  color: ${({positionColor:o})=>o};
`,b=r(a.p)`
  margin: 0 0 8px 0;
  overflow-y: hidden;
  font-size: ${({theme:o})=>o.fontSize.h5};
  color: ${({theme:o})=>o.colors.white};
`,$=r(a.p)`
  height: 24px;
  overflow-y: hidden;
  font-size: ${({theme:o})=>o.fontSize.body1};
  line-height: 24px;
  color: ${({theme:o})=>o.colors.white};
`,O=r(a.p)`
  height: 24px;
  margin: 0 0 8px 0;
  overflow-y: hidden;
  font-size: ${({theme:o})=>o.fontSize.body2};
  line-height: 24px;
  color: ${({theme:o})=>o.colors.tossBlue};
`,T=r(a.div)`
  margin-top: 8px;
  font-size: ${({theme:o})=>o.fontSize.body1};
  color: ${({theme:o})=>o.colors.white};
  display: block;
`,B=r(a.div)`
  position: absolute;
  padding: 30px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({theme:o})=>o.colors.greyOpacity100};
  border: 0 solid transparent;
  border-radius: 16px;
  ${({isClicked:o})=>o?p`
          background: ${({theme:t})=>t.colors.greyOpacity500};
          backdrop-filter: blur(2px);
        `:p`
          background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0) 0%,
            ${({theme:t})=>t.colors.greyOpacity50} 40%,
            ${({theme:t})=>t.colors.greyOpacity400} 100%
          );
          transition: background 0.2s ease-in-out;
        `}
`,l={hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}},F=({member:o,isSquare:t=!1})=>{const{name:d,nickname:e,role:c,image:f,position:m,text:C}=o,[h,v]=y.exports.useState(!1),k=w(),n=y.exports.useMemo(()=>Math.random().toString(),[k.pathname]);return i(I,{children:i(z,{children:i(A,{onClick:()=>v(!h),variants:l,initial:"hidden",animate:"visible",exit:"exit",isSquare:t,children:i("picture",{children:g(S,{layoutId:`card-inner-${e}-${n}`,children:[i(B,{isClicked:h,children:h?g(x,{children:[i(L,{layoutId:`position-${e}-${n}`,variants:l,positionColor:M(m),children:m}),i(b,{layoutId:`nickname-${e}-${n}`,children:e}),i($,{layoutId:`name-${e}-${n}`,children:d}),i(T,{layoutId:`text-${e}-${n}`,variants:l,children:C})]}):g(x,{children:[i(b,{layoutId:`nickname-${e}-${n}`,children:e}),i($,{layoutId:`name-${e}-${n}`,children:d}),i(O,{layoutId:`role-${e}-${n}`,variants:l,children:c})]})}),i(j,{alt:`${e}-profile-image`,src:f,isSquare:t,layoutId:`background-${e}-${n}`})]})})})})})};var V=y.exports.memo(F);export{V as M,N as a,P as b,K as l,R as m};
