import React from 'react';

const Bookmark = (props: { marked: boolean; height?: string }) => {
  const { marked, height = '30' } = props;
  return (
    <svg
      height={height}
      viewBox="0 0 24 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.334 0H3.66732C1.83398 0 0.350651 1.5 0.350651 3.33333L0.333984 30L12.0007 25L23.6673 30V3.33333C23.6673 1.5 22.1673 0 20.334 0Z"
        fill={marked ? '#FABC05' : '#E5E8EB'}
      />
    </svg>
  );
};

export default Bookmark;
