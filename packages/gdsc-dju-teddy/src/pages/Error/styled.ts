import styled from 'styled-components';

export const ErrorContainer = styled.div`
  position: relative;
  display: flex;
  min-height: calc(100vh - 160px);
  min-width: 100vw;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const ErrorContentWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  top: 200px;
  max-width: 500px;
  min-width: 370px;
  padding: 0 20px;
`;
