import React from 'react';
import styled from 'styled-components';
import { useFilterStore } from '../../../store/filter';
import FilterSelectBox from './FilterSelectBox';
import ListFilterSelectBox from './ListFilterSelectBox';

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
      <ListFilterSelectBox
        setListFilter={setListFilter}
        listFilter={filter.listType}
      />
      <FilterSelectBox setFilter={setFilter} filter={filter.filterType} />
    </NavTaskWrapper>
  );
};

export default NavigationElement;
