import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { metaDatas } from '../../siteDatas/metaDatas';

const ReactHead: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;
  const title = metaDatas[path as keyof typeof metaDatas].title;
  const description = metaDatas[path as keyof typeof metaDatas].description;
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title} />

      <meta data-rh="true" name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="description" content={description} />
    </Helmet>
  );
};
export default ReactHead;
