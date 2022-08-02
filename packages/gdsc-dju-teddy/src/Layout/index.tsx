import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from '../components/common/Navigation';
import Home from '../pages/Home';
import Weekly from '../pages/Weekly';

const Layout = () => {
  const [filter, setFilter] = useState<string>('to');
  return (
    <>
      <Navigation setFilter={setFilter} filter={filter} />
      <Routes>
        <Route path={'/*'} element={<Home filter={filter} />} />
        <Route path={'/weekly/*'} element={<Weekly filter={filter} />} />
      </Routes>
    </>
  );
};

export default Layout;
