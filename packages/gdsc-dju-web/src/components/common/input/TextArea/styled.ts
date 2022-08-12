import styled, { css } from 'styled-components';
import { StyledInputWrapper } from '../TextInput/styled';

export const StyledTextAreaWrapper = styled(StyledInputWrapper)<{
  color?: string;
  disabled?: boolean;
  error?: boolean;
}>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px auto 0;
  height: fit-content;
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
        box-shadow: inset 0 0 0 2px ${props.theme.colors.blue200};
      `}
  }
  .formInput:focus {
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.colors.blue200};
    ${(props) =>
      props.error &&
      css`
        box-shadow: inset 0 0 0 2px ${props.theme.colors.blue200}!important;
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
export const StyledTextArea = styled.textarea<{
  color?: string;
  disabled?: boolean;
  error?: boolean;
}>`
  min-height: 100px;
  max-height: 350px;
  max-width: 512px;
  font-family: sans-serif;
  overflow: auto;
  flex-grow: 1;
  outline: 0;
  border: 0;
  background: none;
  padding: 18px 18px;
  margin: 0;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontSize.body2};
  color: ${({ theme }) => theme.colors.grey800};
  box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.grey300};
  cursor: auto;
  transition: box-shadow 0.3s;
  resize: vertical;
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
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.colors.blue600};
    ${(props) =>
      props.error &&
      css`
        box-shadow: inset 0 0 0 2px ${props.theme.colors.red900}!important;
      `}
  }
  ${({ error }) =>
    error &&
    css`
      box-shadow: inset 0 0 0 2px ${({ theme }) => theme.colors.red900};
    `}
`;
