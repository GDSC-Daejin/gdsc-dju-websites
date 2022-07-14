import React from 'react';

import { useNavigate } from 'react-router';
import { RecruitDetails } from '../../../apis/pageData/recruitDetails';
import Banner from '../../../components/common/Banner';
import ReactHelmet from '../../../components/common/ReactHelmet';
import { MainText, Title } from '../../../components/common/Title/title';
import {
  ContainerInner,
  LayoutContainer,
  TopMargin,
} from '../../../styles/layouts';

import {
  Category,
  CategoryInner,
  CategoryWrapper,
  SubCategory,
  TeamCategory,
  TeamCategoryWrapper,
  TeamSubCategory,
} from './styled';

const removeBracket = (str: string) => {
  return str.replace(/\(.*\)/gi, ''); // ( ) 제거
};

const Recruitment = () => {
  return (
    <>
      <ReactHelmet
        title={'모집 중인 포지션'}
        description={'모집 중인 포지션'}
      />
      <Banner color={'blue'} />
      <LayoutContainer>
        <ContainerInner>
          <TopMargin />
          <RecruitmentTitle />
          <TopMargin />
          <RecruitmentCategory />
          {RecruitDetails.map((data) => (
            <Announcement {...data} key={data.id} />
          ))}
          <TopMargin />
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};
export default Recruitment;

const RecruitmentTitle = () => {
  return (
    <>
      <Title>함께 성장할 동료를 모집합니다</Title>
      <TopMargin />
      <MainText>
        열정적인 동료를 얻기 위해 이 자리에 모였습니다.
        <br />
        우리는 함께 고민을 나누고 도전하며 목표를 향해 달리고 있습니다.
      </MainText>
    </>
  );
};
const RecruitmentCategory = () => {
  return (
    <TeamCategoryWrapper>
      <TeamCategory>Team</TeamCategory>
      <TeamSubCategory>Skill</TeamSubCategory>
      <TeamSubCategory>Stack</TeamSubCategory>
    </TeamCategoryWrapper>
  );
};

interface AnnouncementProps {
  name: string;
  skill: string;
  id: string;
  stack: string;
}
const Announcement: React.FC<AnnouncementProps> = ({
  name,
  skill,
  id,
  stack,
}) => {
  const navigate = useNavigate();
  const navigateToAnnouncement = (id: string) => {
    navigate(`/recruit/detail/${id}`);
  };

  return (
    <>
      <CategoryWrapper onClick={() => navigateToAnnouncement(id)}>
        <CategoryInner>
          <Category>{removeBracket(name)}</Category>
          <SubCategory>{skill}</SubCategory>
          <SubCategory>{stack}</SubCategory>
        </CategoryInner>
      </CategoryWrapper>
    </>
  );
};
