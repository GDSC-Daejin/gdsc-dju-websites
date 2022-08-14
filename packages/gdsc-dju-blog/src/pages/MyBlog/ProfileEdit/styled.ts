import styled, { css } from 'styled-components';

export const FormWrapper = styled.div`
  max-width: 512px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;
export const FormInner = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const FormTitle = styled.h3`
  color: ${({ theme }) => theme.colors.grey900};
  font-size: ${({ theme }) => theme.fontSize.h3};
`;
export const FormTitleWrapper = styled.div`
  margin-top: 60px;
  margin-bottom: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const FormLabel = styled.label<{ essential?: boolean }>`
  padding: 5px 0;
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSize.h7};
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.grey900};
   {
    ${({ essential }) =>
      essential &&
      css`
        &::after {
          display: inline-block;
          margin: 0 0 2px 6px;
          content: '';
          width: 6px;
          height: 6px;
          background-color: ${({ theme }) => theme.colors.tossRed};
          border-radius: 3px;
        }
      `}
  }
`;
export const FormElementWrapper = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;
export const FormButtonWrapper = styled.div`
  justify-content: flex-end;
  display: flex;
  margin-bottom: 220px;
`;
