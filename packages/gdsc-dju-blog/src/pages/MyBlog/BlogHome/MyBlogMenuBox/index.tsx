import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';

import { GDSCButton } from '@src/components/atoms/Button';
import CategoryMenu from '@src/components/atoms/CategoryMenu';

import { ButtonWrapper, TopMenuWrapper } from './styled';

interface Props {
  isGuest: boolean;
  category: string;
  categoryHandler: (url: string) => void;
}

const MyBlogMenuBox = ({
  category,
  categoryHandler,
  isGuest = true,
}: Props) => {
  const navigate = useNavigate();
  return (
    <TopMenuWrapper>
      <CategoryMenu type={category} onClick={categoryHandler} />
      <ButtonWrapper>
        <GDSCButton
          text={'스크랩'}
          disable={false}
          onClick={() => navigate(`/my/likes?type=all&page=1`)}
        />
        <GDSCButton
          text={'글쓰기'}
          disable={isGuest}
          onClick={() => navigate('/post/write')}
        />
      </ButtonWrapper>
    </TopMenuWrapper>
  );
};

export default memo(MyBlogMenuBox);
