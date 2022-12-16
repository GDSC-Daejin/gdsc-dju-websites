import { createSearchParams, useNavigate } from 'react-router-dom';
import type { URLSearchParamsInit } from 'react-router-dom';

const useNavigateSearch = () => {
  const navigate = useNavigate();
  return (pathname: string, params: URLSearchParamsInit) =>
    navigate(`${pathname}?${createSearchParams(params)}`);
};
