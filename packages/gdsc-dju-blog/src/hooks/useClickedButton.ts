import React from 'react';

const useClickedButton = () => {
  const [state, setState] = React.useState(true);

  const setButtonEnable = () => {
    setState(false);
    setTimeout(() => {
      setState(true);
    }, 1000);
  };

  return { state, setButtonEnable };
};

export default useClickedButton;
