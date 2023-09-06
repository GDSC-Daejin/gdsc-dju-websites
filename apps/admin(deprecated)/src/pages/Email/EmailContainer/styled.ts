import styled from 'styled-components';

export const CheckboxSection = styled.section`
  flex-wrap: wrap;
  min-width: 450px;
  box-sizing: border-box;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 1900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 1550px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const CheckboxWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: fit-content;
  margin-bottom: 10px;
`;

export const TemplateEmailWrapper = styled.div`
  width: 300px;
`;
export const TemplateText = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.textL};
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
