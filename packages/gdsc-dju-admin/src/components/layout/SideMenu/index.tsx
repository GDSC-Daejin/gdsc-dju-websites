import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { position } from '../../../context/recruitInfo';
import { ROUTES } from '../../../routes/Route';

import {
  SideElementChildrenWrapper,
  SideElementSelectBar,
  SideElementText,
  SideElementWrapper,
  SidebarContainer,
  SidebarInner,
} from './styled';

const SideMenu = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const ROUTEHandler = (ROUTE: string) => {
    navigate(ROUTE);
  };
  const [searchParams, setSearchParams] = useSearchParams();
  const setParams = (key: string) => {
    setSearchParams({ type: key });
  };

  const positionList = Object.keys(position);
  const ROUTEArray = Object.values(ROUTES);
  return (
    <SidebarContainer>
      <SidebarInner>
        {ROUTEArray.map((item) => {
          const isCurrent = location.pathname === item.ROUTE;
          const isRecruitROUTE =
            location.pathname.includes('/certified/recruit');
          const isRecruit = item.LABEL === '지원자 관리';
          return (
            <div key={item.LABEL}>
              <SideElementWrapper
                key={item.ROUTE}
                onClick={() => ROUTEHandler(item.ROUTE)}
              >
                <SideElementSelectBar isCurrent={isCurrent} id={'bar'} />
                <SideElementText isCurrent={isCurrent}>
                  {item.LABEL}
                </SideElementText>
              </SideElementWrapper>
              {isRecruit &&
                isRecruitROUTE &&
                positionList.map((data, id) => {
                  const selectedPosition = searchParams.get('type') === data;
                  return (
                    <SideElementChildrenWrapper
                      key={id}
                      onClick={() => setParams(data)}
                    >
                      <SideElementText isCurrent={selectedPosition}>
                        {data}
                      </SideElementText>
                    </SideElementChildrenWrapper>
                  );
                })}
            </div>
          );
        })}
      </SidebarInner>
    </SidebarContainer>
  );
};

export default SideMenu;
