import { useInsertionEffect } from 'react';

import { changeTheme, themeHandler, useTheme } from '@gdsc-dju/gds-theme';

import reactLogo from './assets/react.svg';

import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [theme] = useTheme();

  useInsertionEffect(() => {
    themeHandler('auto');
  }, []);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

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
}

export default App;
