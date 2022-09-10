import React from 'react';
import CategoryMenu from '@src/components/atoms/CategoryMenu';
import { ButtonWrapper } from '@pages/PostSaves/styled';
import { GDSCButton } from '@src/components/atoms/Button';
import { useNavigate } from 'react-router-dom';
import { PostSavesMenuBoxWrapper } from '@pages/PostSaves/PostSavesMenuBox/styled';

interface Props {
  category: string;
  categoryHandler: (category: string) => void;
}

const PostSavesMenuBox = ({ categoryHandler, category }: Props) => {
  const navigate = useNavigate();

  return (
    <PostSavesMenuBoxWrapper>
      <CategoryMenu type={category} onClick={categoryHandler} />
      <ButtonWrapper>
        <GDSCButton
          text={'새로작성'}
          color={'googleBlue'}
          onClick={() => navigate('/post/write')}
        />
      </ButtonWrapper>
    </PostSavesMenuBoxWrapper>
  );
};

export default PostSavesMenuBox;
