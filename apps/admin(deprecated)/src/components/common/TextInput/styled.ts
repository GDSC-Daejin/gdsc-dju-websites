import styled, { css } from 'styled-components';

export const StyledInputInner = styled.input<{ disabled?: boolean }>`
  padding: 0 18px;
  margin: 2px 0;
  border: 0;
  border-radius: 10px;
  height: 40px;
  font-size: ${(props) => props.theme.fontSizes.textM};
  outline: none;
  width: 100%;
  flex-grow: 1;
  background: none;
  font-weight: 400;
  box-sizing: border-box;
  color: ${(props) => props.theme.colors.grey700};
  &::placeholder {
    color: ${(props) => props.theme.colors.grey400};
    font-weight: 300;
  }
  ${(props) =>
    props.disabled &&
    css`
      background: ${(props) => props.theme.colors.grey100};
      color: ${(props) => props.theme.colors.grey400};
    `}
`;

export const StyledInputWrapper = styled.div<{
  color?: string;
  disabled?: boolean;
  error?: boolean;
}>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px auto 0;
  height: 40px;
  border: none;
  outline: none;
  appearance: none;
  border-radius: 10px;
  box-shadow: inset 0 0 0 1px ${(props) => props.theme.colors.grey300};
  cursor: auto;
  &:hover {
    box-shadow: inset 0 0 0 2px ${(props) => props.theme.colors.blue200};
    ${(props) =>
      props.error &&
      css`
        box-shadow: inset 0 0 0 2px ${props.theme.colors.red900};
      `}
  }
  .formInput:focus {
    box-shadow: inset 0 0 0 2px ${(props) => props.theme.colors.blue500};
    ${(props) =>
      props.error &&
      css`
        box-shadow: inset 0 0 0 2px ${props.theme.colors.red900}!important;
      `}
  }
  ${({ disabled }) =>
    !disabled &&
    css`
      &:hover {
        box-shadow: none;
      }
    `}
  ${({ error }) =>
    error &&
    css`
      box-shadow: inset 0 0 0 2px ${({ theme }) => theme.colors.red900};
    `}
  transition: 0.3s;
`;

export const StyledInput = styled.input<{
  color?: string;
  disabled?: boolean;
  error?: boolean;
}>`
  padding: 0 14px;
  margin: 2px 0;
  border: 0;
  border-radius: 10px;
  height: 50px;
  font-size: ${(props) => props.theme.fontSizes.textL};
  outline: none;
  flex-grow: 1;
  background: none;
  font-weight: 400;
  color: ${(props) => props.theme.colors.grey700};
  box-sizing: border-box;
  box-shadow: inset 0 0 0 1px ${(props) => props.theme.colors.grey300};
  cursor: text;
  &::placeholder {
    color: ${(props) => props.theme.colors.grey400};
    font-weight: 300;
  }
  &:hover {
    box-shadow: inset 0 0 0 2px ${(props) => props.theme.colors.blue200};
    ${(props) =>
      props.error &&
      css`
        box-shadow: inset 0 0 0 2px ${props.theme.colors.red900};
      `}
  }
  &:focus {
    box-sizing: border-box;
    box-shadow: inset 0 0 0 2px ${(props) => props.theme.colors.blue500};
    ${(props) =>
      props.error &&
      css`
        box-shadow: inset 0 0 0 2px ${props.theme.colors.red900}!important;
      `}
  }
  ${(props) =>
    props.disabled &&
    css`
      background: ${(props) => props.theme.colors.grey100};
      &:hover {
        box-shadow: inset 0 0 0 1px ${(props) => props.theme.colors.grey300};
        cursor: not-allowed;
      }
    `}
  ${(props) =>
    props.error &&
    css`
      box-shadow: inset 0 0 0 2px ${props.theme.colors.red900};
    `}
  transition: 0.3s;
`;
