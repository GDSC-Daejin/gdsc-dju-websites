import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import { SideBarCircleAnimation } from '../../Animation';
import {
  SideBarGDSCLogoWrapper,
  SideCategoryCircle,
  SideCategoryCircleWrapper,
  SideCategoryMenuWrapper,
  SideCategoryText,
  SideCategoryTextWrapper,
} from './styled';
import { positionColor } from '../../../../store/positionColor';
import GdscLogo from '../../../../assets/GdscLogo';
import { useRecoilState } from 'recoil';
import { MENU_KEY, menuState } from '../../../../store/menu';
import { category } from '../../../../api/pageData/category';

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
