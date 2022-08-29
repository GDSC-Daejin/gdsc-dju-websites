import styled from 'styled-components';

export const SignUpFormStyle = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 512px;
  button {
    align-self: flex-end;
  }
`;

export const NicknameValidationButtonWrapper = styled.div`
  position: absolute;
  top: 6px;
  right: 10px;
`;

export const TextInputWrapper = styled.div`
  position: relative;
`;
