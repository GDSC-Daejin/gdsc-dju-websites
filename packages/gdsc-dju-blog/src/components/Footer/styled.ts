import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: flex;
  position: relative;
  background: linear-gradient(
      180deg,
      ${({ theme }) => theme.colors.background} 0%,
      ${({ theme }) => theme.colors.background} 18.76%
    ),
    ${({ theme }) => theme.colors.background};
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const FooterInner = styled.div`
  display: flex;
  align-items: center;
  padding: 55px 0;
  box-sizing: border-box;
  overflow: hidden;
  border-top: 1px solid ${({ theme }) => theme.colors.grey100};
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  min-width: 320px;
`;
export const CreatorWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const CreatorTitleWrapper = styled.thead`
  margin-bottom: 10px;
  min-width: 100px;
`;
export const CreatorTitle = styled.tr`
  color: ${({ theme }) => theme.colors.grey700};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.body1};
 
  @media (max-width: 512px) {
    font-size: ${({ theme }) => theme.fontSize.body2};
  }
}
`;
export const CreatorName = styled.th`
  color: ${({ theme }) => theme.colors.grey600};
  font-size: ${({ theme }) => theme.fontSize.body2};
  display: flex;
  justify-content: flex-start;
  max-width: 120px;
  margin-bottom: 6px;
 font-weight: normal;
  cursor: pointer;
}
`;
export const CreatorSection = styled.table`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  //flex-wrap: wrap;
  @media (max-width: 512px) {
    margin-right: 20px;
  }

  &:nth-child(3) {
    margin-right: 0;
  }
  &:nth-child(5) {
    @media (max-width: 720px) {
      display: none;
    }
  }
  &:nth-child(6) {
    margin-right: 0;
    @media (max-width: 875px) {
      display: none;
    }
  }
`;
export const CreatorSectionInner = styled.tbody`
  display: flex;
  flex-direction: row;
`;
export const StyledTr = styled.tr`
  display: flex;
  flex-direction: column;
  margin-right: 16px;
  &:nth-child(2) {
    margin-right: 0;
  }
`;
export const StyledColumn = styled.div`
  width: 1px;
  height: 100px;
  background: ${({ theme }) => theme.colors.grey300};
  margin: 0 50px;
  border: 0 solid;
  @media (max-width: 720px) {
    display: none;
  }
`;
export const BlogIconWrapper = styled.div`
  margin-right: 60px;
  display: flex;
  align-items: center;
  @media (max-width: 512px) {
    margin-right: 38px;
  }
`;
export const ColumnWrapper = styled.tbody`
  display: flex;
  flex-direction: column;
`;
export const Copyright = styled.span`
  position: absolute;
  width: 162px;
  display: flex;
  right: 10px;
  bottom: 10px;
  font-size: ${({ theme }) => theme.fontSize.body3};
  color: ${({ theme }) => theme.colors.grey600};
`;
