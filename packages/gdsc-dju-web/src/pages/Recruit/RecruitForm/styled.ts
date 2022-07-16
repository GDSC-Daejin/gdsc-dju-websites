import styled, { css } from 'styled-components';

export const FormTopMargin = styled.div`
  height: 90px;
`;
export const FormMargin = styled.div`
  height: 50px;
`;
export const FormMarginS = styled.div`
  height: 30px;
`;
export const FormMarginXS = styled.div`
  height: 15px;
`;
export const RecruitFormWrapper = styled.div`
  max-width: 512px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;
export const RecruitFormInner = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const RecruitFormCardWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
export const FormLabel = styled.label<{ essential?: boolean }>`
  padding: 5px 0;
  display: inline-block;
  font-size: ${(props) => props.theme.fontSize.body1};
  font-weight: 400;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.grey700};
   {
    ${(props) =>
      props.essential &&
      css`
        &::after {
          display: inline-block;
          margin: 0 0 2px 6px;
          content: '';
          width: 6px;
          height: 6px;
          background-color: ${(props) => props.theme.colors.tossRed};
          border-radius: 3px;
        }
      `}
  }
`;
export const FormContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FormText = styled.p`
  margin-bottom: 4px;
  font-size: ${({ theme }) => theme.fontSize.body2};
  line-height: 24px;
  color: ${(props) => props.theme.colors.grey600};
`;
export const FormLi = styled.li`
  margin-top: 4px;
  position: relative;
  font-size: 15px;
  padding-left: 15px;
  font-weight: 300;
  color: ${(props) => props.theme.colors.grey600};
  list-style: none;
  &::before {
    position: absolute;
    top: -2px;
    left: -5px;
    display: inline-block;
    width: 16px;
    height: 16px;
    font-size: 1.6rem;
    font-weight: bold;
    line-height: 23px;
    color: ${(props) => props.theme.colors.tossBlue};
    text-align: center;
    content: '•';
  }
`;
export const FormArticleWrapper = styled.article`
  border: 1px solid ${(props) => props.theme.colors.grey300};
  padding: 10px 20px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.grey50};
  margin-top: 10px;
  margin-bottom: 30px;
`;
export const FormSubmitButton = styled.button<{ disable?: boolean }>`
  padding: 18px 20px;
  min-width: 100px;
  border: none;
  color: white;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 25%;
  font-size: ${(props) => props.theme.fontSize.body2};
  border-radius: 10px;
  cursor: pointer;
  background: ${(props) => props.theme.colors.tossBlueActive};

  ${(prop) =>
    prop.disable &&
    css`
      background: ${(props) => props.theme.colors.tossBlue200};
      cursor: not-allowed;
    `}
`;
