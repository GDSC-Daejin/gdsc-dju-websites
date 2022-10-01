import React from 'react';
import styled from 'styled-components';
import Teddybear from '../../assets/TeddyBear.svg';

const CustomLogoWrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;
const TeddyLogo = styled.img`
  height: 50px;
`;
const TeddyLogoTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.textXl};
  color: #a35d29;
  @media (max-width: ${({ theme }) => theme.windowSizes.tablet}px) {
    display: none;
  }
`;

const CustomLogo = () => {
  return (
    <CustomLogoWrapper>
      <TeddyLogo src={Teddybear} alt="logo" />
      <TeddyLogoTitle>Teddy Dashboard</TeddyLogoTitle>
    </CustomLogoWrapper>
  );
};

export default CustomLogo;
