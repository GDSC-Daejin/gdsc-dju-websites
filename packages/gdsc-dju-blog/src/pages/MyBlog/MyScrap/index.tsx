import { useGetMyScrapData } from '@src/api/hooks/useGetMyScrapData';
import React from 'react';

const MyScrap = () => {
  const { scrapData } = useGetMyScrapData();

  return <div></div>;
};

export default MyScrap;
