import React from 'react';
import ContributorCard from '../components/ContributorCard';
import { contributorsData } from '../siteDatas/contributorsData';
import { Paragraph, Title } from '../styles/layouts';
import {
  ContributorCardWrapper,
  ContributorsLayoutWrapper,
  ContributorsSection,
} from './contributors.styled';

const ContributorsLayout = () => {
  return (
    <ContributorsLayoutWrapper>
      <Title>Contributors</Title>
      <Paragraph>
        GDSC Daejin Univ.가 운영하는 행사/서비스에 기여해주신 분들 입니다.
      </Paragraph>
      <ContributorsSection>
        {contributorsData.map((data, id) => (
          <ContributorCardWrapper key={id}>
            <ContributorCard {...data} />
          </ContributorCardWrapper>
        ))}
      </ContributorsSection>
    </ContributorsLayoutWrapper>
  );
};

export default ContributorsLayout;
