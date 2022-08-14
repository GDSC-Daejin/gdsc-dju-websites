import React from 'react';

const PostThumbnail = () => {
  return (
    <svg
      width="170"
      height="100"
      viewBox="0 0 170 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: 'absolute', top: '0', left: '0' }}
    >
      <path
        transform={`translate(0, -10)`}
        d="M94 50V36C94 34.9 93.1 34 92 34H78C76.9 34 76 34.9 76 36V50C76 51.1 76.9 52 78 52H92C93.1 52 94 51.1 94 50ZM81.5 44.5L84 47.51L87.5 43L92 49H78L81.5 44.5Z"
        fill="white"
      />
    </svg>
  );
};

export default PostThumbnail;
