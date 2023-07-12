import React, { useState } from 'react';

import styled, { css, keyframes } from 'styled-components';
import TeddyIcon from '../../../assets/teddyIcon';
import ThemeButton from './ThemeButton';
import { useFilterStore } from '../../../store/filter';

import FilterSelectBox from './FilterSelectBox';
import ListFilterSelectBox from './ListFilterSelectBox';
interface NavTitleProps {
  primary?: boolean; // primary 속성을 정의합니다.
}

const NavbarContainer = styled.nav`
  width: 90vw;
  height: 70px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
  overflow: auto;
  padding: 0 5vw 0;
  justify-content: space-between;
`;
const Title = styled.a`
  display: flex;
  font-size: var(--body1);
  font-weight: var(--title-font-weight);
`;
const NavTitle = styled.p<NavTitleProps>`
  ${(props) =>
    props.primary &&
    css`
      padding-right: 3px;
      color: #ff740f;
    `}
`;

export const NavTaskWrapper = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
`;
const Navigation = () => {
  const filter = useFilterStore((state) => state.filter);
  const setFilter = useFilterStore((state) => state.setFilter);
  const setListFilter = useFilterStore((state) => state.setListFilter);
  return (
    <NavbarContainer>
      <Title href="/">
        <NavTitle primary>TeddyBear </NavTitle>
        <NavTitle>DashBoard</NavTitle>
        <TeddyIcon />
      </Title>

      <NavTaskWrapper>
        <ListFilterSelectBox
          setListFilter={setListFilter}
          listFilter={filter.listType}
        />
        <FilterSelectBox setFilter={setFilter} filter={filter.filterType} />
        <ThemeButton />
      </NavTaskWrapper>
    </NavbarContainer>
  );
};
export default Navigation;
