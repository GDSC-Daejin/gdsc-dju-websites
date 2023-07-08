import React from 'react';

interface FolderIconProps extends React.SVGProps<SVGSVGElement> {}
const FolderIcon = (props: FolderIconProps) => {
  return (
    <svg
      width="96"
      height="96"
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M80 24H48L40 16H16C11.6 16 8.04 19.6 8.04 24L8 72C8 76.4 11.6 80 16 80H80C84.4 80 88 76.4 88 72V32C88 27.6 84.4 24 80 24ZM80 72H16V32H80V72Z"
        fill="#6B7684"
      />
    </svg>
  );
};

export default FolderIcon;
