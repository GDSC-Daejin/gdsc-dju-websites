import React from 'react';
import { useGetMyScrapData } from '../../../api/hooks/useGetMyScrapData';

const MyScrap = () => {
  const { scrapData } = useGetMyScrapData();
  console.log(scrapData);
  return <div></div>;
};

export default MyScrap;
