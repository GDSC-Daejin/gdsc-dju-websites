import React, { useEffect, useState } from 'react';
import {
  FooterCopyRight,
  FooterLogo,
  FooterText,
  FooterWrapper,
} from './styled';
import { useLocation } from 'react-router';

export const Footer: React.FC<{ disable?: boolean }> = ({ disable = true }) => {
  return (
    <>
      {disable && (
        <FooterWrapper>
          <FooterLogo>
            <FooterText google={true} href={'https://developers.google.com/'}>
              Google
            </FooterText>
            <FooterText
              href={'https://developers.google.com/community-guidelines'}
            >
              Community guidelines
            </FooterText>
            <FooterText href={'https://gdsc-dju-blog.web.app/'}>
              GDSC DJU Tech Blog
            </FooterText>
            <FooterText href={'https://shared.gdsc-dju.com/'}>
              GDSC DJU Shared
            </FooterText>
          </FooterLogo>
          <FooterCopyRight>{'Copyright © '}GDSC Daejin 2021</FooterCopyRight>
        </FooterWrapper>
      )}
    </>
  );
};
