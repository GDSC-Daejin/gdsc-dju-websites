import styled, { css } from 'styled-components';

export const StyledInputInner = styled.input<{ disabled?: boolean }>`
  padding: 0 18px;
  margin: 2px 0;
  border: 0;
  border-radius: 10px;
  height: 48px;
  font-size: ${(props) => props.theme.fontSize.body1};
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
export const StyledFileInput = styled.div`
  color: ${(props) => props.theme.colors.grey500};
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  flex-grow: 1;
  font-weight: 300;
  font-size: ${(props) => props.theme.fontSize.body1};
  padding: 0 18px;
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
  height: 48px;
  border: none;
  outline: none;
  appearance: none;
  border-radius: 10px;
  box-shadow: inset 0 0 0 1px ${(props) => props.theme.colors.grey300};
  cursor: auto;
  &:hover {
    box-shadow: inset 0 0 0 2px ${(props) => props.theme.colors.tossBlue200};
    ${(props) =>
      props.error &&
      css`
        box-shadow: inset 0 0 0 2px ${props.theme.colors.tossRed};
      `}
  }
  .formInput:focus {
    box-shadow: inset 0 0 0 2px ${(props) => props.theme.colors.tossBlue500};
    ${(props) =>
      props.error &&
      css`
        box-shadow: inset 0 0 0 2px ${props.theme.colors.tossRed}!important;
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
      box-shadow: inset 0 0 0 2px ${({ theme }) => theme.colors.tossRed};
    `}
  transition: 0.3s;
`;

export const InputImageWrapper = styled.div`
  height: 20px;
  width: 20px;
  margin: 0 -8px 0 18px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const ErrorBox = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.tossRed};
  font-size: ${(props) => props.theme.fontSize.body2};
  padding-left: 5px;
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
  font-size: ${(props) => props.theme.fontSize.body1};
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
    box-shadow: inset 0 0 0 2px ${(props) => props.theme.colors.tossBlue200};
    ${(props) =>
      props.error &&
      css`
        box-shadow: inset 0 0 0 2px ${props.theme.colors.tossRed};
      `}
  }
  &:focus {
    box-sizing: border-box;
    box-shadow: inset 0 0 0 2px ${(props) => props.theme.colors.tossBlue500};
    ${(props) =>
      props.error &&
      css`
        box-shadow: inset 0 0 0 2px ${props.theme.colors.tossRed}!important;
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
      box-shadow: inset 0 0 0 2px ${props.theme.colors.tossRed};
    `}
  transition: 0.3s;
`;
