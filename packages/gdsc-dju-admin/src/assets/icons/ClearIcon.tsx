import React from 'react';
import { useTheme } from 'styled-components';

const ClearIcon = () => {
  const theme = useTheme();
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.04 1.01117L9.02883 0L5.02 4.00883L1.01117 0L0 1.01117L4.00883 5.02L0 9.02883L1.01117 10.04L5.02 6.03117L9.02883 10.04L10.04 9.02883L6.03117 5.02L10.04 1.01117Z"
        fill={theme.colors.grey800}
      />
    </svg>
  );
};

export default ClearIcon;
