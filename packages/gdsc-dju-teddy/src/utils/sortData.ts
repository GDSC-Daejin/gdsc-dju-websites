export function dataSort<T extends Record<any, any>>(
  data: T[],
  filter: keyof T extends string ? keyof T : never,
  order: 'asc' | 'desc' = 'desc',
) {
  return data.sort((a, b) => {
    if (a[filter] < b[filter]) {
      return order === 'asc' ? -1 : 1;
    }
    if (a[filter] > b[filter]) {
      return order === 'asc' ? 1 : -1;
    }
    return 0;
  });
}
