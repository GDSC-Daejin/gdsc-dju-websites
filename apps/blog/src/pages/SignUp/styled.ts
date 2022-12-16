import styled from 'styled-components';

export const SignUpContentWrapper = styled.div`
  margin: 100px auto 250px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const SignUpFormTitle = styled.h4`
  font-style: normal;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.textM};
  color: ${({ theme }) => theme.colors.grey900};
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const SignUpInputWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 38px;
`;

export const SignUpErrorMessage = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${({ theme }) => theme.colors.red600};
  bottom: -20px;
  span {
    font-style: normal;
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSizes.textM};
  }
`;

export const SignUpInputLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 12px;
`;

export const SignUpInputLabelCircle = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: red;
`;

export const SignUpInputBox = styled.input<{ errorCheck: boolean }>`
  width: 512px;
  height: 48px;
  padding: 8px 20px;
  border: 1px solid
    ${({ theme, errorCheck }) =>
      errorCheck ? theme.colors.red600 : theme.colors.grey400};
  box-sizing: border-box;
  border-radius: 10px;
  ::placeholder {
    color: ${({ theme }) => theme.colors.grey400};
  }
  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.grey400};
  }
  &:hover {
    filter: drop-shadow(0px 0px 2px #90c2ff);
  }
  &:focus {
    filter: drop-shadow(0px 0px 2px #3182f6);
  }
`;

export const SignUpButton = styled.button<{ isValid: boolean }>`
  align-content: flex-end;
  width: 111px;
  height: 36px;
  background-color: ${({ isValid, theme }) =>
    isValid ? '#4385F3' : theme.colors.blue200};
  color: #fff;
  border: 1px solid ${({ theme }) => theme.colors.grey200};
  box-sizing: border-box;
  box-shadow: 0px 2px 12px rgba(25, 31, 40, 0.08);
  border-radius: 18px;
  font-style: normal;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.textL};
  text-align: center;
  align-self: flex-end;
  cursor: ${({ isValid }) => (isValid ? 'pointer' : 'not-allowed')};
`;
