import React from 'react';
import { FormImage, FormImageWrapper } from './styled';

const ProfileEditImage = (props: { image?: string }) => {
  const { image } = props;
  return (
    <FormImageWrapper>
      {image ? (
        <FormImage src={image} />
      ) : (
        <FormImage src={'https://www.w3schools.com/howto/img_avatar.png'} />
      )}
    </FormImageWrapper>
  );
};

export default ProfileEditImage;
