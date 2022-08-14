import styled from 'styled-components';

export const PostLayoutWrapper = styled.div`
  margin-top: 110px;
`;

export const PostInformation = styled.div`
  display: flex;
  align-items: center;
  margin: 50px 0 12px 0;
`;
export const PostThumbnailWrapper = styled.div`
  display: flex;
`;
export const PostContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 30px;
  @media (max-width: 530px) {
    margin-left: 8px;
  }
  min-width: 250px;
  flex-grow: 1;
  padding-left: 30px;
  margin-right: 20px;
`;
export const PostTitle = styled.input`
  display: flex;
  border: none;
  width: 100%;
  padding-bottom: 10px;
  font-size: ${({ theme }) => theme.fontSize.h4};
  background: ${({ theme }) => theme.colors.background};
  caret-color: ${({ theme }) => theme.colors.grey400};
  color: ${({ theme }) => theme.colors.grey900};
  &::placeholder {
    color: ${({ theme }) => theme.colors.grey400};
  }
  @media screen and (max-width: 530px) {
    font-size: ${(props) => props.theme.fontSize.h6};
    padding-bottom: 4px;
`;
export const PostHashtag = styled.input`
  display: flex;
  font-size: ${(props) => props.theme.fontSize.body1};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.grey900};
  caret-color: ${({ theme }) => theme.colors.grey400};
  &::placeholder {
    color: ${({ theme }) => theme.colors.grey400};
  }
  border: none;
  @media screen and (max-width: 530px) {
    font-size: ${({ theme }) => theme.fontSize.body3};
`;
export const PostGDSCButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 20px;
`;
export const PostBottomButtonBox = styled.div`
  display: flex;
  justify-content: end;
  margin: 40px 0px 200px 0px;
`;
export const PostBottomButtonWrapper = styled.div`
  display: flex;
  padding-right: 12px;
  .cancel-button {
    @media (max-width: ${({ theme }) => theme.windowSize.mobile}px) {
    }
  }
  &:last-child {
    padding-right: 0;
  }
`;

export const PostThumbnailInner = styled.div`
  cursor: pointer;
  position: relative;
  background: ${({ theme }) => theme.colors.greyOpacity500}
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 170px;
  height: 100px;
  @media screen and (max-width: 530px) {
    & svg {
      width: 100px;
      height: 58px;
    }
  }
`;
export const PostFileImage = styled.img`
  width: 170px;
  height: 100px;
  border-radius: 10px;
  z-index: -1;
  @media screen and (max-width: 530px) {
    width: 100px;
    height: 58px;
  }
`;
export const ThumbnailText = styled.div`
  text-align: center;
  position: absolute;
  top: 50px;
  font-size: ${({ theme }) => theme.fontSize.body3};
  color: ${({ theme }) => theme.colors.grey900};
`;
