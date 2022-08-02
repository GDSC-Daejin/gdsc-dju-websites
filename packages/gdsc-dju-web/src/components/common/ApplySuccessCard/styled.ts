import styled from 'styled-components';

export const ApplyCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 20px 40px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
  align-items: center;
`;
export const ApplyCardBlueLine = styled.div`
  position: relative;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  height: 10px;
  width: calc(100% + 80px);
  top: -20px;
  background: ${(props) => props.theme.colors.googleBlue};
`;
export const ApplyCardInner = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ApplyCardContent = styled.p`
  font-size: ${(props) => props.theme.fontSize.body2};
  color: ${(props) => props.theme.colors.grey800};
  min-width: 70px;
  &:first-child {
    margin-top: 0;
  }
`;
export const ApplyCardContentWrapper = styled.div`
  margin-top: 14px;
  display: flex;
  flex-direction: row;
`;
