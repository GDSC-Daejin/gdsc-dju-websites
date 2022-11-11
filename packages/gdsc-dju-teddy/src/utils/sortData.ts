export function dataSort<T extends Record<any, any>>(
  data: T[],
  filter: keyof T extends string ? keyof T : never,
) {
  return data.sort((a, b) => {
    return a[filter] - b[filter];
  });
}
