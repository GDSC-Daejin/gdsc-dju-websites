import React, { memo } from 'react';

import { positionColor } from '../../../utils/positionColor';

import { PositionCircle, StyledImage, StyledImageWrapper } from './styled';

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  image: string;
  position?: string | null;
  size?: 'medium' | 'small';
}
const ProfileImage = (props: Props) => {
  const { image, position, size = 'medium' } = props;
  const imageUrl = image.replace('=s96-c', '');
  return (
    <StyledImageWrapper isHaveClickEvent={Boolean(props.onClick)}>
      {position && <PositionCircle color={positionColor(position)} />}
      <StyledImage src={imageUrl} size={size} {...props} />
    </StyledImageWrapper>
  );
};

export default memo(ProfileImage);
