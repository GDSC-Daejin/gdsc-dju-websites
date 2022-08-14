import React, { memo, useCallback } from 'react';
import {
  CategoryCircle,
  CategoryCircleWrapper,
  CategoryMenuWrapper,
  CategoryText,
  CategoryTextWrapper,
  GDSCLogoWrapper,
} from './styled';
import { positionColor } from '../../../store/positionColor';
import GdscLogo from '../../../assets/GdscLogo';
import { category } from '../../../api/pageData/category';

const circleMotion = {
  isActive: {
    opacity: 1,
    y: 0,
  },
  isUnActive: {
    y: -20,
    opacity: 0,
  },
};
type CategoryMenuProps = {
  onClick?: (url: string) => void;
  type: string;
};
const CategoryMenu: React.FC<CategoryMenuProps> = ({ onClick, type }) => {
  const animate = (value: string, categoryValue: string) => {
    return value.toLowerCase() === categoryValue.toLowerCase();
  };

  return (
    <CategoryMenuWrapper>
      {category.map((item, id) => {
        const categoryValue = category[id].toLowerCase();
        return (
          <CategoryTextWrapper
            isActive={animate(type, categoryValue)}
            onClick={() => {
              {
                onClick && onClick(categoryValue);
              }
            }}
            key={id}
          >
            <CategoryCircleWrapper
              variants={circleMotion}
              animate={animate(type, categoryValue) ? 'isActive' : 'isUnActive'}
            >
              {categoryValue === 'all' ? (
                <GDSCLogoWrapper>
                  <GdscLogo />
                </GDSCLogoWrapper>
              ) : (
                <CategoryCircle colors={positionColor(categoryValue)} />
              )}
            </CategoryCircleWrapper>
            <CategoryText>{item}</CategoryText>
          </CategoryTextWrapper>
        );
      })}
    </CategoryMenuWrapper>
  );
};
export default memo(CategoryMenu);
