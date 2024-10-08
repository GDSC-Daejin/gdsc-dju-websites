import React from 'react';

import { useTheme } from 'styled-components';

const Calendar: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  const theme = useTheme();
  return (
    <svg
      id="event_black_24dp"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      <path id="패스_142" data-name="패스 142" d="M0,0H16V16H0Z" fill="none" />
      <path
        id="패스_143"
        data-name="패스 143"
        d="M11.667,9.333h-2A.669.669,0,0,0,9,10v2a.669.669,0,0,0,.667.667h2A.669.669,0,0,0,12.333,12V10A.669.669,0,0,0,11.667,9.333Zm0-6.667v.667H6.333V2.667A.667.667,0,1,0,5,2.667v.667H4.333A1.327,1.327,0,0,0,3.007,4.667L3,14a1.333,1.333,0,0,0,1.333,1.333h9.333A1.337,1.337,0,0,0,15,14V4.667a1.337,1.337,0,0,0-1.333-1.333H13V2.667a.667.667,0,1,0-1.333,0ZM13,14H5a.669.669,0,0,1-.667-.667V6.667h9.333v6.667A.669.669,0,0,1,13,14Z"
        transform="translate(-1 -0.667)"
        fill={isActive ? theme.colors.grey600 : theme.colors.grey300}
      />
    </svg>
  );
};

export default Calendar;
