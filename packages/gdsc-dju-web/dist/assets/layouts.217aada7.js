import{motion as t}from"framer-motion";import i from"styled-components";const n=i.div`
  height: 50px;
  @media (max-width: 500px) {
    height: 30px;
  }
`,p=i.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1140px;
  margin: 0 auto;
  min-width: 320px;
  flex: 1;
`,e=i.div`
  width: 92%;
  height: 100%;
  max-width: calc(100% - 48px);
  margin: 0 auto;
  padding: 0 20px;
`,r=i(t.section)`
  display: flex;
  flex-wrap: wrap;
  row-gap: 30px;
`;export{e as C,p as L,n as T,r as a};
