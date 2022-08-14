import styled from 'styled-components';

export const SearchResultTitleWrapper = styled.div`
  width: 1200px;
  color: ${(props) => props.theme.colors.grey900};
`;
export const SearchResultTitle = styled.h1`
  display: flex;
  align-self: flex-end;
  padding: 50px 0px;
  font-size: ${({ theme }) => theme.fontSize.h5};
  color: ${(props) => props.theme.colors.grey900};
`;
export const SearchResultSubTitle = styled.h3`
  display: flex;
  align-self: flex-end;
  padding: 0 4px;
  font-size: ${({ theme }) => theme.fontSize.h6};
  color: ${(props) => props.theme.colors.grey900};
`;
export const SearchResultContent = styled.p`
  padding: 20px 0;
  font-size: ${({ theme }) => theme.fontSize.h7};
  line-height: 1.625rem;
  color: ${(props) => props.theme.colors.grey600};
`;

export const PageBarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 110px 0px;
`;

export const LayoutInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 50px auto;
`;

export const BlogCardGridLayoutWrapper = styled.div`
  padding: 10px 0px;
`;

export const NoResult = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1200px;
  height: 400px;
  span {
    font-size: ${({ theme }) => theme.fontSize.body1};
    color: ${({ theme }) => theme.colors.grey400};
  }
`;
