import React from 'react';

import {
  FooterCopyRight,
  FooterLogo,
  FooterText,
  FooterWrapper,
} from './styled';

export const Footer: React.FC<{ disable?: boolean }> = ({ disable = true }) => {
  return (
    <FooterWrapper disable={disable}>
      <FooterLogo>
        <FooterText google={true} href={'https://developers.google.com/'}>
          Google
        </FooterText>
        <FooterText href={'https://developers.google.com/community-guidelines'}>
          Community guidelines
        </FooterText>{' '}
        <FooterText href={'https://blog.gdscdju.dev/'}>
          GDSC DJU Tech Blog
        </FooterText>
        <FooterText href={'https://gdscdju.dev/'}>
          GDSC DJU Site
        </FooterText>
      </FooterLogo>
      <FooterCopyRight>{'Copyright © '}GDSC Daejin 2021</FooterCopyRight>
    </FooterWrapper>
  );
};
