import React from 'react';

import { ListType } from '../../../types/filterType';

import { StyledLabel, StyledLi, StyledUl, UnderlineFilter } from './styled';

type Props = {
  setListFilter: (setSelect: ListType) => void;
  listFilter: ListType;
};
const filterData: ListType[] = ['to', 'from'];
const ListFilterSelectBox = ({ listFilter, setListFilter }: Props) => {
  return (
    <StyledUl>
      {filterData.map((item) => (
        <StyledLi
          key={item}
          className={item === listFilter ? 'selectedFilter' : ''}
          onClick={() => {
            setListFilter(item);
          }}
        >
          <StyledLabel selected={item === listFilter}>{item}</StyledLabel>
          {item === listFilter ? (
            <UnderlineFilter
              color={'#f6eee9'}
              className="underlineFilter"
              layoutId="listFilterSelect"
            />
          ) : null}
        </StyledLi>
      ))}
    </StyledUl>
  );
};

export default ListFilterSelectBox;
