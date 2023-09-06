require('babel-register')({
  presets: ['es2015', 'react'],
});
require.extensions['.css'] = () => {};

const router = require('./sitemap-routes').default;

const Sitemap = require('react-router-sitemap').default;

function generateSitemap() {
  return new Sitemap(router)
    .build('https://shared.gdscdju.dev/')
    .save('./dist/sitemap.xml');
}

generateSitemap();
