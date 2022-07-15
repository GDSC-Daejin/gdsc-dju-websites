import{memo as k,useState as w,useMemo as I}from"react";import r,{css as p}from"styled-components";import{motion as a,AnimatePresence as z,LayoutGroup as M}from"framer-motion";import{l as s,j as i,a as m,F as y}from"./index.554b7492.js";import{useLocation as S}from"react-router";const W={start:{opacity:0},end:{opacity:1,transition:{duration:1}},exit:{opacity:0}},Y={start:{opacity:0},end:{opacity:1,transition:{staggerChildren:.2,delayChildren:.2,duration:.6}},exit:{opacity:0}},D={start:{opacity:0,y:-30},end:{opacity:1,y:0,transition:{duration:1}},exit:{opacity:0}},E={start:{opacity:0,y:30},end:{opacity:1,y:0,transition:{duration:.5}},exit:{opacity:0}},u={frontend:s.googleBlue,backend:s.googleRed,android:s.googleGreen,beginner:s.orange900,designer:s.googleYellow};function A(o){const t=Object.keys(u),d=o.toLowerCase();let e="#fff";return t.map(c=>{d.includes(c)&&(e=u[c])}),e}const j=r(a.div)`
  position: relative;
  width: 250px;
  height: 300px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: ${({theme:o})=>o.colors.boxShadow100};
  ${({isSquare:o})=>o&&p`
      height: 250px;
    `}
`,O=r(a.div)`
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
`,L=r(a.img)`
  position: absolute;
  z-index: -1;
  height: 300px;
  background-position-x: 50%;
  background-position-y: 50%;
  border-radius: 16px;
  ${({isSquare:o})=>o&&p`
      height: 250px;
    `}
`,T=r(a.p)`
  height: 24px;
  margin: 0 0 8px 0;
  overflow-y: hidden;
  font-size: ${({theme:o})=>o.fontSize.body2};
  line-height: 24px;
  color: ${({positionColor:o})=>o};
`,x=r(a.p)`
  margin: 0 0 8px 0;
  overflow-y: hidden;
  font-size: ${({theme:o})=>o.fontSize.h5};
  color: ${({theme:o})=>o.colors.white};
`,b=r(a.p)`
  height: 24px;
  overflow-y: hidden;
  font-size: ${({theme:o})=>o.fontSize.body1};
  line-height: 24px;
  color: ${({theme:o})=>o.colors.white};
`,B=r(a.p)`
  height: 24px;
  margin: 0 0 8px 0;
  overflow-y: hidden;
  font-size: ${({theme:o})=>o.fontSize.body2};
  line-height: 24px;
  color: ${({theme:o})=>o.colors.tossBlue};
`,F=r(a.div)`
  margin-top: 8px;
  font-size: ${({theme:o})=>o.fontSize.body1};
  color: ${({theme:o})=>o.colors.white};
  display: block;
`,G=r(a.div)`
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
`,l={hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}},K=({member:o,isSquare:t=!1})=>{const{name:d,nickname:e,role:c,image:$,position:g,text:f}=o,[h,C]=w(!1),v=S(),n=I(()=>Math.random().toString(),[v.pathname]);return i(z,{children:i(M,{children:i(j,{onClick:()=>C(!h),variants:l,initial:"hidden",animate:"visible",exit:"exit",isSquare:t,children:i("picture",{children:m(O,{layoutId:`card-inner-${e}-${n}`,children:[i(G,{isClicked:h,children:h?m(y,{children:[i(T,{layoutId:`position-${e}-${n}`,variants:l,positionColor:A(g),children:g}),i(x,{layoutId:`nickname-${e}-${n}`,children:e}),i(b,{layoutId:`name-${e}-${n}`,children:d}),i(F,{layoutId:`text-${e}-${n}`,variants:l,children:f})]}):m(y,{children:[i(x,{layoutId:`nickname-${e}-${n}`,children:e}),i(b,{layoutId:`name-${e}-${n}`,children:d}),i(B,{layoutId:`role-${e}-${n}`,variants:l,children:c})]})}),i(L,{alt:`${e}-profile-image`,src:$,isSquare:t,layoutId:`background-${e}-${n}`})]})})})})})};var J=k(K);export{J as M,Y as a,D as b,W as l,E as m};
