import Cookies from 'js-cookie';

export class Api {
  protected API: string;
  protected BLOG_API: string;
  protected ACCOUNT_API: string;
  protected Header: {
    headers: {
      Authorization: string;
    };
  };

  constructor() {
    this.API = `https://api.gdsc-dju.com`;
    this.BLOG_API = `${this.API}${
      process.env.NODE_ENV === 'production' ? '/blog-route' : '/blog-route-dev'
    }`;
    this.ACCOUNT_API = 'https://accounts.gdsc-dju.com';
    this.Header = {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
    };
  }
}

export default new Api();
