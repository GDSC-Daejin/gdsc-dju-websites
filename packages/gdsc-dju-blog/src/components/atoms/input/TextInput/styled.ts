import styled, { css } from 'styled-components';

export const StyledInput = styled.input<{ disabled?: boolean }>`
  padding: 0 18px;
  margin: 2px 0;
  border: 0;
  border-radius: 10px;
  height: 48px;
  font-size: ${({ theme }) => theme.fontSizes.textXl};
  outline: none;
  flex-grow: 1;
  background: ${({ theme }) => theme.colors.background};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.grey700};
  transition: 0.3s;
  &::placeholder {
    color: ${({ theme }) => theme.colors.grey500};
    font-weight: 400;
  }
  ${({ disabled }) =>
    disabled &&
    css`
      background: ${({ theme }) => theme.colors.grey100};
      color: ${({ theme }) => theme.colors.grey400};
    `}
`;

export const StyledInputWrapper = styled.div<{
  color?: string;
  disabled?: boolean;
  error: boolean;
}>`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px auto 0;
  height: 48px;
  border: solid 0;
  border-radius: 10px;
  box-sizing: border-box;
  .formInput {
    ${({ error }) =>
      error
        ? css`
            box-shadow: inset 0 0 0 2px ${({ theme }) => theme.colors.red900};
          `
        : css`
            box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.grey300};
          `};
  }

  background: ${({ theme }) => theme.colors.background};

  .formInput:hover {
    ${({ error }) =>
      error
        ? css`
            box-shadow: inset 0 0 0 2px ${({ theme }) => theme.colors.red900};
          `
        : css`
            box-shadow: inset 0 0 0 2px ${({ theme }) => theme.colors.blue200};
          `}
  }
  .formInput:focus {
    box-sizing: border-box;
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.colors.blue500};
  }
  ${({ disabled }) =>
    !disabled &&
    css`
      &:hover {
        box-shadow: none;
      }
    `}
`;
export const InputImageWrapper = styled.div`
  height: 20px;
  width: 20px;
  margin: 0 -8px 0 18px;
  display: flex;
  align-items: center;
`;
export const ErrorBox = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.red900};
  font-size: ${({ theme }) => theme.fontSizes.textL};
  padding-left: 5px;
`;
