import React from 'react';
import { Helmet } from 'react-helmet';

interface IReactHelmetProps {
  title?: string;
  description?: string;
}

const ReactHelmet: React.FC<IReactHelmetProps> = ({ description, title }) => {
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
