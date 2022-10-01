import { motion } from 'framer-motion';
import React from 'react';
import { ListType } from '../../../types/filterType';
import { StyledLabel, StyledLi, StyledUl } from '../NavRouteCategory/styled';
import './NavfilterCategory.css';

type Props = {
  setListFilter: (setSelect: ListType) => void;
  listFilter: ListType;
};
const filterData: ListType[] = ['to', 'from'];
const FilterBox = ({ listFilter, setListFilter }: Props) => {
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
          <StyledLabel className={item === listFilter ? 'selectedFilter' : ''}>
            {item}
          </StyledLabel>
          {item === listFilter ? (
            <motion.div
              className="underlineFilter"
              layoutId="underlineFilter"
            />
          ) : null}
        </StyledLi>
      ))}
    </StyledUl>
  );
};

export default FilterBox;
