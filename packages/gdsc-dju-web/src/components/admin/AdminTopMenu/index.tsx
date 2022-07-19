import React from 'react';
import { StyledLabel, StyledLi, StyledUl, Underline } from './styled';

import { useLocation, useNavigate } from 'react-router-dom';

type Props = {
  tabs: { label: string; route: string }[];
  setSelectedCategory: (selectedCategory: string) => void;
  selectedCategory: string;
};
const AdminTopMenu = ({
  tabs,
  setSelectedCategory,
  selectedCategory,
}: Props) => {
  const navigate = useNavigate();

  return (
    <nav>
      <StyledUl>
        {tabs.map((item) => (
          <StyledLi
            key={item.label}
            onClick={() => {
              setSelectedCategory(item.route);
              navigate(item.route);
            }}
          >
            <StyledLabel selected={item.route === selectedCategory}>
              {item.label}
            </StyledLabel>
            {item.route === selectedCategory && (
              <Underline layoutId="underline" />
            )}
          </StyledLi>
        ))}
      </StyledUl>
    </nav>
  );
};

export default AdminTopMenu;
