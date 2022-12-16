import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Category,
  CategoryInner,
  CategoryWrapper,
  SubCategory,
} from '@pages/Recruit/Recruitment/styled';
import { AnnouncementData } from '@type/pageData';

const RecruitmentCard = ({
  name,
  skill,
  id,
  stack,
  status,
}: AnnouncementData) => {
  const navigate = useNavigate();
  const removeBracket = (str: string) => {
    return str.replace(/\(.*\)/gi, ''); // ( ) 제거
  };
  const navigateToAnnouncement = (id: string) => {
    navigate(`/recruit/detail/${id}`);
  };
  const statusText =
    status === 'ALWAYS_OPEN'
      ? '상시모집'
      : status === 'OPEN'
      ? '모집중'
      : '모집마감';
  return (
    <>
      <CategoryWrapper onClick={() => navigateToAnnouncement(id)}>
        <CategoryInner>
          <Category>{removeBracket(name)}</Category>
          <SubCategory>{skill}</SubCategory>
          <SubCategory>{stack}</SubCategory>
          <SubCategory>{statusText}</SubCategory>
        </CategoryInner>
      </CategoryWrapper>
    </>
  );
};

export default RecruitmentCard;
