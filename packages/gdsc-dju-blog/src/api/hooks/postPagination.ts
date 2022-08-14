const category = {
  fe: 'frontend',
  be: 'backend',
  de: 'design',
  common: 'common',
  and: 'android',
  frontend: 'frontend',
  backend: 'backend',
  design: 'design',
  android: 'android',
} as const;

export const userPostUrlFilter = (tage: string, page: number, size = 16) => {
  if (tage === 'all') {
    return `?page=${page}&size=${size}`;
  } else {
    return `category/${
      category[tage as keyof typeof category]
    }?page=${page}&size=${size}`;
  }
};
export const userPostTempUrlFilter = (
  tage: string,
  page: number,
  size = 16,
) => {
  if (tage === 'all') {
    return `?page=${page}&size=${size}`;
  } else {
    return `/${
      category[tage as keyof typeof category]
    }?page=${page}&size=${size}`;
  }
};
export const postUrlFilter = (tage: string, page: number, size = 16) => {
  if (tage === 'all') {
    return `?page=${page}&size=${size}`;
  } else {
    return `/${
      category[tage as keyof typeof category]
    }?page=${page}&size=${size}`;
  }
};
