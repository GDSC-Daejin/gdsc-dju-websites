import styled from 'styled-components';

export const CheckboxSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  min-width: 450px;
  box-sizing: border-box;
  width: 100%;
`;
export const CheckboxWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: fit-content;
  margin-bottom: 10px;
  @media (min-width: 1000px) {
    width: 100%;
  }
  @media (min-width: 1580px) {
    width: 50%;
  }
  @media (min-width: 1950px) {
    width: 33%;
  }
`;
export const SelectedBoxSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  flex-direction: column;
  overflow: scroll;
  height: 100%;
  padding: 10px 20px;
  box-sizing: border-box;
`;

export const TemplateEmailWrapper = styled.div`
  width: 300px;
`;
export const TemplateText = styled.div`
  font-size: ${({ theme }) => theme.fontSize.body1};
  color: ${({ theme }) => theme.colors.grey900};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
export const EmailRightWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;
export const EmailRightInner = styled.div`
  padding: 0 20px;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;
export const EmailLeftWrapper = styled.div`
  background: ${({ theme }) => theme.colors.grey50};
  height: 100%;
`;
export const EmailLeftInner = styled.div`
  width: 240px;
  display: flex;
  height: 100%;
  align-items: center;
  flex-direction: column;
  row-gap: 10px;
`;
export const EmailCategory = styled.div`
  font-size: ${({ theme }) => theme.fontSize.h7};
  color: ${({ theme }) => theme.colors.grey900};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 50px;
  width: 100%;
  white-space: nowrap;
`;
