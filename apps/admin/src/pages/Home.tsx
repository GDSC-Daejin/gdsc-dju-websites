import React from 'react';

import { changeTheme } from '@gdsc-dju/gds-theme';

import './App.css';

const Home = () => {
  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => changeTheme()}>change Theme</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
};

export default Home;
