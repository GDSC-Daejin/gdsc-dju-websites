import { motion } from 'framer-motion';
import React from 'react';
import { FilterType } from '../../../types/filterType';
import { StyledLabel, StyledLi, StyledUl } from './styled';
import { useNavigate } from 'react-router-dom';
import './NavRouteCategory.css';

type Props = {
  setFilter: (setSelect: FilterType) => void;
  filter: FilterType;
};
const routeData: FilterType[] = ['monthly', 'weekly'];
const NavRouteCategory = ({ filter, setFilter }: Props) => {
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
          <StyledLabel className={item === filter ? 'selected' : ''}>
            {item}
          </StyledLabel>
          {item === filter ? (
            <motion.div className="underline" layoutId="underline" />
          ) : null}
        </StyledLi>
      ))}
    </StyledUl>
  );
};

export default NavRouteCategory;
