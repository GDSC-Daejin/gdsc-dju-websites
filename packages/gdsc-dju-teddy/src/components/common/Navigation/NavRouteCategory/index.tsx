import { motion } from 'framer-motion';
import React from 'react';
import { StyledLabel, StyledLi, StyledUl } from './styled';
import { useNavigate } from 'react-router-dom';
import './NavRouteCategory.css';

type Props = {
  routeData: { label: string; route: string }[];
  setSelect: (setSelect: string) => void;
  select: string;
};
const NavRouteCategory = ({ routeData, select, setSelect }: Props) => {
  const navigate = useNavigate();

  return (
    <>
      <nav>
        <StyledUl>
          {routeData.map((item, id) => (
            <>
              <StyledLi
                key={item.label}
                className={item.route === select ? 'selected' : ''}
                onClick={() => {
                  setSelect(item.route);
                  navigate(item.route);
                }}
              >
                <StyledLabel
                  className={item.route === select ? 'selected' : ''}
                >
                  {item.label}
                </StyledLabel>
                {item.route === select ? (
                  <motion.div className="underline" layoutId="underline" />
                ) : null}
              </StyledLi>
            </>
          ))}
        </StyledUl>
      </nav>
    </>
  );
};

export default NavRouteCategory;
