const category = {
  frontend: 'frontend',
  backend: 'backend',
  design: 'design',
  client: 'client',
  ml: 'ml',
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
export const postSearchUrlFilter = (
  searchContent: string,
  tage: string,
  page: number,
) => {
  if (tage === 'all') {
    return `/${searchContent}?page=${page}&size=${16}`;
  } else {
    return `/${
      category[tage as keyof typeof category]
    }/${searchContent}?page=${page}&size=${16}`;
  }
};
