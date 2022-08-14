import React from 'react';
import {
  BlogIconWrapper,
  ColumnWrapper,
  Copyright,
  CreatorName,
  CreatorSection,
  CreatorSectionInner,
  CreatorTitle,
  CreatorTitleWrapper,
  CreatorWrapper,
  FooterInner,
  FooterWrapper,
  StyledColumn,
  StyledTr,
} from './styled';
import BlogIcon from '../../assets/BlogIcon';
import { useNavigate } from 'react-router';
import GdscBlogLogo from '../../assets/logos/GdscBlogLogo';

const Footer = () => {
  const navigate = useNavigate();
  const route = {
    home: '/',
    blog: '/blog', //추후 수정
    frontend: '/category/fe',
    backend: '/category/be',
    android: '/category/and',
    design: '/category/de',
    common: '/category/common',
  };
  const otherSite = {
    googleDevelopers: 'https://developers.google.com/community/gdsc',
    gdsc: 'https://gdsc.community.dev/',
    gdscdju: 'https://gdsc-dju.web.app/',
  };
  const navigateHandler = (data: string) => {
    navigate(`${route[data as keyof typeof route]}`);
  };
  const navigateFamilyHandler = (data: string) => {
    window.open(`${otherSite[data as keyof typeof otherSite]}`);
  };
  return (
    <FooterWrapper>
      <FooterInner>
        <CreatorWrapper>
          <BlogIconWrapper>
            <GdscBlogLogo />
          </BlogIconWrapper>
          <CreatorSection>
            <CreatorTitleWrapper>
              <CreatorTitle>Designed by</CreatorTitle>
            </CreatorTitleWrapper>
            <ColumnWrapper>
              <StyledTr>
                <CreatorName>Blaire</CreatorName>
                <CreatorName>Gunzo</CreatorName>
                <CreatorName>Cindy</CreatorName>
              </StyledTr>
            </ColumnWrapper>
          </CreatorSection>
          <CreatorSection>
            <CreatorTitleWrapper>
              <CreatorTitle>Created by</CreatorTitle>
            </CreatorTitleWrapper>
            <CreatorSectionInner>
              <StyledTr>
                <CreatorName>Jason</CreatorName>
                <CreatorName>Gabi</CreatorName>
                <CreatorName>Chois</CreatorName>
              </StyledTr>
              <StyledTr>
                <CreatorName>Rocoli</CreatorName>
                <CreatorName>Marine</CreatorName>
                <CreatorName>Reese</CreatorName>
              </StyledTr>
            </CreatorSectionInner>
          </CreatorSection>
          <StyledColumn />
          <CreatorSection>
            <CreatorTitleWrapper>
              <CreatorTitle>Site Map</CreatorTitle>
            </CreatorTitleWrapper>
            <CreatorSectionInner>
              <StyledTr>
                <CreatorName
                  onClick={() => {
                    navigateHandler('home');
                  }}
                >
                  Home
                </CreatorName>
                <CreatorName
                  onClick={() => {
                    navigateHandler('frontend');
                  }}
                >
                  Frontend
                </CreatorName>
                <CreatorName
                  onClick={() => {
                    navigateHandler('backend');
                  }}
                >
                  Backend
                </CreatorName>
              </StyledTr>
              <StyledTr>
                <CreatorName
                  onClick={() => {
                    navigateHandler('android');
                  }}
                >
                  Android
                </CreatorName>
                <CreatorName
                  onClick={() => {
                    navigateHandler('design');
                  }}
                >
                  Design
                </CreatorName>
                <CreatorName
                  onClick={() => {
                    navigateHandler('common');
                  }}
                >
                  Common
                </CreatorName>
              </StyledTr>
            </CreatorSectionInner>
          </CreatorSection>
          <CreatorSection>
            <CreatorTitleWrapper>
              <CreatorTitle>Family site</CreatorTitle>
            </CreatorTitleWrapper>
            <CreatorSectionInner>
              <StyledTr>
                <CreatorName
                  style={{ width: '120px' }}
                  onClick={() => {
                    navigateFamilyHandler('googleDevelopers');
                  }}
                >
                  Google Developers
                </CreatorName>
                <CreatorName
                  onClick={() => {
                    navigateFamilyHandler('gdsc');
                  }}
                >
                  GDSC
                </CreatorName>
                <CreatorName
                  onClick={() => {
                    navigateFamilyHandler('gdscdju');
                  }}
                >
                  GDSC DJU
                </CreatorName>
              </StyledTr>
            </CreatorSectionInner>
          </CreatorSection>
          <Copyright>Copyright© GDSC Daejin 2021</Copyright>
        </CreatorWrapper>
      </FooterInner>
    </FooterWrapper>
  );
};

export default Footer;
