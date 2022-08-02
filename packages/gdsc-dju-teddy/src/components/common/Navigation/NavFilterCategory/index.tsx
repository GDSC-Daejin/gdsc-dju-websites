import { motion } from 'framer-motion';
import React from 'react';
import { StyledLabel, StyledLi } from '../NavRouteCategory/styled';
import { StyledUl } from '../NavRouteCategory/styled';
import './NavfilterCategory.css';

type Props = {
  filterData: { label: string; route: string }[];
  setFilter: (setSelect: string) => void;
  filter: string;
};
const NavFilterCategory = ({ filterData, filter, setFilter }: Props) => {
  return (
    <>
      <nav>
        <StyledUl>
          {filterData.map((item, id) => (
            <>
              <StyledLi
                key={item.label}
                className={item.route === filter ? 'selectedFilter' : ''}
                onClick={() => {
                  setFilter(item.route);
                }}
              >
                <StyledLabel
                  className={item.route === filter ? 'selectedFilter' : ''}
                >
                  {item.label}
                </StyledLabel>
                {item.route === filter ? (
                  <motion.div
                    className="underlineFilter"
                    layoutId="underlineFilter"
                  />
                ) : null}
              </StyledLi>
            </>
          ))}
        </StyledUl>
      </nav>
    </>
  );
};

export default NavFilterCategory;
