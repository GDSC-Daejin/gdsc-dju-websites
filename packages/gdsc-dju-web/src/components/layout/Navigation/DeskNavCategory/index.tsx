import React from 'react';

import { useNavigate } from 'react-router-dom';

import { useLocation } from 'react-router';
import { NavTask, NavTaskWrapper, StyledLink, WideNavigation } from '../styled';
import { ROUTES } from '..';

const DeskNavCategory = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isRoute = (route: string) => {
    return location.pathname.includes(route);
  };
  return (
    <WideNavigation>
      <NavTaskWrapper>
        {ROUTES.map((data, id) => (
          <NavTask key={id}>
            <StyledLink
              onClick={() => {
                navigate(data.route);
              }}
              isRoute={isRoute(data.route)}
            >
              {data.title}
            </StyledLink>
          </NavTask>
        ))}
      </NavTaskWrapper>
    </WideNavigation>
  );
};

export default DeskNavCategory;
