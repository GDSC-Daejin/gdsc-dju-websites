import styled from 'styled-components';

export const SelectEmailsWrapper = styled.div`
  width: 240px;
  display: flex;
  height: 100%;
  align-items: center;
  flex-direction: column;
  row-gap: 10px;
`;
export const EmailCategory = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.textL};
  color: ${({ theme }) => theme.colors.grey900};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 50px;
  width: 100%;
  white-space: nowrap;
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
