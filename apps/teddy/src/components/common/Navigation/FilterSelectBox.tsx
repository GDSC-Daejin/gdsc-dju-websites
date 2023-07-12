import React from 'react';
import { useNavigate } from 'react-router-dom';

import { FilterType } from '../../../types/filterType';

import { StyledLabel, StyledLi, StyledUl, UnderlineFilter } from './styled';

type Props = {
  setFilter: (setSelect: FilterType) => void;
  filter: FilterType;
};
const routeData: FilterType[] = ['monthly', 'weekly'];
const FilterSelectBox = ({ filter, setFilter }: Props) => {
  const navigate = useNavigate();

  return (
    <StyledUl>
      {routeData.map((item) => (
        <StyledLi
          key={item}
          className={item === filter ? 'selected' : ''}
          onClick={() => {
            setFilter(item);
            navigate(item);
          }}
        >
          <StyledLabel selected={item === filter}>{item}</StyledLabel>
          {item === filter ? (
            <UnderlineFilter color={'#f6eee9'} layoutId="filterSelect" />
          ) : null}
        </StyledLi>
      ))}
    </StyledUl>
  );
};

export default FilterSelectBox;
