import styled, { css } from 'styled-components';

export const StyledInputInner = styled.input<{ disabled?: boolean }>`
  padding: 0 18px;
  margin: 2px 0;
  border: 0;
  border-radius: 10px;
  height: 48px;
  font-size: ${({ theme }) => theme.fontSize.body1};
  outline: none;
  width: 100%;
  flex-grow: 1;
  background: none;
  font-weight: 400;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.grey700};
  &::placeholder {
    color: ${({ theme }) => theme.colors.grey400};
    font-weight: 300;
  }
  ${(props) =>
    props.disabled &&
    css`
      background: ${({ theme }) => theme.colors.grey100};
      color: ${({ theme }) => theme.colors.grey400};
    `}
`;
export const StyledFileInput = styled.div`
  color: ${({ theme }) => theme.colors.grey500};
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  flex-grow: 1;
  font-weight: 300;
  font-size: ${({ theme }) => theme.fontSize.body1};
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
  box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.grey300};
  cursor: auto;
  &:hover {
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.colors.blue200};
    ${(props) =>
      props.error &&
      css`
        box-shadow: inset 0 0 0 2px ${props.theme.colors.red900};
      `}
  }
  .formInput:focus {
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.colors.blue600};
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
  color: ${({ theme }) => theme.colors.red900};
  font-size: ${({ theme }) => theme.fontSize.body2};
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
  font-size: ${({ theme }) => theme.fontSize.body1};
  outline: none;
  flex-grow: 1;
  background: none;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.grey700};
  box-sizing: border-box;
  box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.grey300};
  cursor: text;
  &::placeholder {
    color: ${({ theme }) => theme.colors.grey400};
    font-weight: 300;
  }
  &:hover {
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.colors.blue200};
    ${(props) =>
      props.error &&
      css`
        box-shadow: inset 0 0 0 2px ${props.theme.colors.red900};
      `}
  }
  &:focus {
    box-sizing: border-box;
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.colors.blue600};
    ${(props) =>
      props.error &&
      css`
        box-shadow: inset 0 0 0 2px ${props.theme.colors.red900}!important;
      `}
  }
  ${(props) =>
    props.disabled &&
    css`
      background: ${({ theme }) => theme.colors.grey100};
      &:hover {
        box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.grey300};
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
