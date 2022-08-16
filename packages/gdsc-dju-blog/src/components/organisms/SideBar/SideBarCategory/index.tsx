import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useRecoilState } from 'recoil';

import {
  SideBarGDSCLogoWrapper,
  SideCategoryCircle,
  SideCategoryCircleWrapper,
  SideCategoryMenuWrapper,
  SideCategoryText,
  SideCategoryTextWrapper,
} from './styled';
import { SideBarCircleAnimation } from '@src/components/Animation';
import { MENU_KEY, menuState } from '@src/store/menu';
import { positionColor } from '@src/store/positionColor';

import { category } from '@src/api/pageData/category';
import GdscLogo from '@assets/logos/GdscLogo';

const SideBarCategory = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menu, setMenu] = useRecoilState(menuState);

  const animate = (value: string) => {
    return location.pathname.includes(value);
  };

  return (
    <SideCategoryMenuWrapper>
      {category.map((data, id) => {
        const categoryValue = category[id].toLowerCase();
        return (
          <SideCategoryTextWrapper
            key={id}
            isActive={animate(categoryValue)}
            onClick={() => {
              navigate(`/category/${categoryValue}`);
              setMenu({ ...menu, [MENU_KEY.APP_MENU]: false });
            }}
          >
            <SideCategoryCircleWrapper
              variants={SideBarCircleAnimation}
              animate={animate(categoryValue) ? 'isActive' : 'isUnActive'}
            >
              {categoryValue === 'all' ? (
                <SideBarGDSCLogoWrapper>
                  <GdscLogo />
                </SideBarGDSCLogoWrapper>
              ) : (
                <SideCategoryCircle color={positionColor(categoryValue)} />
              )}
            </SideCategoryCircleWrapper>
            <SideCategoryText
              isActive={animate(categoryValue)}
              className={'sideBarText'}
            >
              {data}
            </SideCategoryText>
          </SideCategoryTextWrapper>
        );
      })}
    </SideCategoryMenuWrapper>
  );
};

export default SideBarCategory;
