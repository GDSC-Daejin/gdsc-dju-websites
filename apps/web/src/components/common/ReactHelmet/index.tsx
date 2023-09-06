import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const ReactHelmet = () => {
  const METAS = {
    '/': {
      title: 'GDSC DJU',
    },
    '/introduce': {
      title: 'GDSC DJU 소개',
    },
    '/recruit': {
      title: 'GDSC DJU 지원',
    },
    '/faq': {
      title: 'FAQ',
    },
  };
  const location = useLocation();

  const meta = METAS[location.pathname as keyof typeof METAS];
  const title = meta ? meta.title : 'GDSC DJU';
  const description = 'GDSC DJU';

  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:title" content={title} />
      <meta data-rh="true" name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="description" content={description} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={description} />
    </Helmet>
  );
};
export default ReactHelmet;
