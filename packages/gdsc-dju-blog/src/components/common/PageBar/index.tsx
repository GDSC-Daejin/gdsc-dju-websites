import React from 'react';
import { useNavigate } from 'react-router';
import LeftArrowIcon from '../../../assets/icons/LeftArrowIcon';
import RightArrow from '../../../assets/RightArrow';
import {
  ArrowWrapper,
  Number,
  NumberCircle,
  NumberSection,
  NumberWrapper,
  PageBarWrapper,
} from './styled';

const circleMotion = {
  isActive: {
    opacity: 1,
    y: 0,
  },
  isUnActive: {
    y: -10,
    opacity: 0,
  },
};
const PageBar = (props: {
  page: number;
  totalPage: number;
  nickname?: string;
  type?: string;
  onClick: (page: number, limit?: number) => void;
}) => {
  const { page, nickname, totalPage, type, onClick } = props;
  const navigate = useNavigate();

  const division = (array: number[], num: number) => {
    const length = array.length;
    const copy = [...array];
    const divide =
      Math.floor(length / num) + (Math.floor(length % num) > 0 ? 1 : 0);
    const newArray = [];
    for (let i = 0; i <= divide; i++) {
      newArray.push(copy.splice(0, num));
    }
    return newArray;
  };

  const array = Array(totalPage)
    .fill(0)
    .map((data, i) => {
      return i + 1;
    });

  const divideArray = () => {
    const PAGE_LENGTH = 8;
    const PAGES = division(array, PAGE_LENGTH - 1);
    const pageNum = Math.floor(page / PAGE_LENGTH);
    return PAGES[pageNum];
  };

  return (
    <PageBarWrapper>
      {totalPage !== 1 && (
        <ArrowWrapper onClick={() => onClick(page - 1)}>
          <LeftArrowIcon />
        </ArrowWrapper>
      )}
      <NumberSection>
        {divideArray().map((num, id) => (
          <NumberWrapper
            key={id}
            onClick={() => onClick(num)}
            active={page === num}
          >
            <NumberCircle
              variants={circleMotion}
              animate={page === num ? 'isActive' : 'isUnActive'}
            />
            <Number>{num}</Number>
          </NumberWrapper>
        ))}
      </NumberSection>
      {totalPage !== 1 && (
        <ArrowWrapper onClick={() => onClick(page + 1, totalPage + 1)}>
          <RightArrow />
        </ArrowWrapper>
      )}
    </PageBarWrapper>
  );
};

export default PageBar;
