import React from 'react';
import {
  NavTask,
  NavTaskWrapper,
  StyledLink,
  WideNavigation,
} from '../DeskNavigation/styled';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../DeskNavigation';
import { useLocation } from 'react-router';

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
