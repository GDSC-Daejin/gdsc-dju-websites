import styled from 'styled-components';

export const PostThumbnailWrapper = styled.div`
  display: flex;
  position: relative;
  min-width: 170px;
  height: 100px;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
`;
export const PostThumbnailInner = styled.div`
  cursor: pointer;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 170px;
  height: 100px;
`;
export const PostFileImage = styled.img`
  height: 100px;
  position: absolute;
  border-radius: 10px;
  z-index: -1;
`;
export const ThumbnailText = styled.div`
  text-align: center;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  word-break: keep-all;
  white-space: nowrap;
  font-size: ${({ theme }) => theme.fontSize.body2};
  color: #fff;
`;
