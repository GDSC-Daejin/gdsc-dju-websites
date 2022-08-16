import React from 'react';

const PostEditIcon = (props: { marked: boolean; height?: string }) => {
  const { marked, height = '28' } = props;
  return (
    <svg
      height={height}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 22.1675V28H5.83252L23.0346 10.7979L17.2021 4.96542L0 22.1675ZM27.5451 6.28746C28.1516 5.68088 28.1516 4.70101 27.5451 4.09443L23.9056 0.454937C23.299 -0.151646 22.3191 -0.151646 21.7125 0.454937L18.8663 3.30121L24.6988 9.13373L27.5451 6.28746V6.28746Z"
        fill={marked ? '#6B7684' : '#E5E8EB'}
      />
    </svg>
  );
};

export default PostEditIcon;
