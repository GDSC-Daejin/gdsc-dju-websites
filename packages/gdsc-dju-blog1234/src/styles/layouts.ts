import styled from 'styled-components';

export const LayoutContainer = styled.div`
  position: relative;
  z-index: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  min-width: 320px;
`;
export const ContainerInner = styled.div`
  padding: 0 20px;
`;
export const PostContainerInner = styled.div`
  padding: 0 20px;
  margin: 0 auto;
  width: 100%;
  max-width: 800px;
`;
export const NavigationBlock = styled.div`
  height: 70px;
`;
