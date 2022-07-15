import r from"styled-components";import"react";import{j as e}from"./index.554b7492.js";var s="/assets/BlueBanner.bc5cc33f.svg",t="/assets/RedBanner.edc8bd48.svg",o="/assets/YellowBanner.b631a182.svg",i="/assets/GreenBanner.fc5a3d72.svg";const c=r.img`
  height: 700px;
  background-position-x: 50%;
  background-position-y: 50%;
  -webkit-background-size: cover;
  background-size: cover;
`,d=r.div`
  height: 200px;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  @media (max-width: 500px) {
    height: 180px;
  }
`,b=({color:a,image:n})=>e(d,{children:e("picture",{children:e(c,{src:n||{blue:s,red:t,yellow:o,green:i}[a],alt:"banner-image"})})});export{b as B};
