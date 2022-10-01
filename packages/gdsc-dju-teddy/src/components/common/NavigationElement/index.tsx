import React from 'react';
import styled from 'styled-components';
import { useFilterStore } from '../../../store/filter';
import FilterBox from '../NavFilterCategory';
import NavRouteCategory from '../NavRouteCategory';

export const NavTaskWrapper = styled.nav`
  display: flex;
  align-items: center;
  list-style: none;
  padding-left: 0px;
`;

const NavigationElement = () => {
  const filter = useFilterStore((state) => state.filter);
  const setFilter = useFilterStore((state) => state.setFilter);
  const setListFilter = useFilterStore((state) => state.setListFilter);
  return (
    <NavTaskWrapper>
      <FilterBox setListFilter={setListFilter} listFilter={filter.listType} />
      <NavRouteCategory setFilter={setFilter} filter={filter.filterType} />
    </NavTaskWrapper>
  );
};

export default NavigationElement;
