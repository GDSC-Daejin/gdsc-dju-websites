const colorList = {
  frontend: '#4385F3',
  backend: '#E94436',
  client: '#109D58',
  design: '#FABC05',
  ml: '#FF740F',
} as const;
export const positionColor = (position: string | undefined) => {
  if (!position) {
    return '#000';
  }
  const lowerCasePosition = position.toLowerCase();
  return colorList[lowerCasePosition as keyof typeof colorList];
};
