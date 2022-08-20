import styled from 'styled-components';

export const SearchResultTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 100px 0px 80px;
  color: ${(props) => props.theme.colors.grey900};
`;
export const SearchResultTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.h5};
  color: ${(props) => props.theme.colors.grey900};
`;

export const SearchResultContent = styled.p`
  font-size: ${({ theme }) => theme.fontSize.h7};
  line-height: 1.625rem;
  color: ${(props) => props.theme.colors.grey600};
`;

export const CategoryMenuWrapper = styled.div`
  margin: 60px 0px;
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
