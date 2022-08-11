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
export const EmailContainerWrapper = styled.div`
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
