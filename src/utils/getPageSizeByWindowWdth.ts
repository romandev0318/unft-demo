export const getPageSizeByWindowWdth = (windowWidth: undefined | number) => {
  if (!windowWidth) return 0;

  if (windowWidth < 640) return 3;

  if (windowWidth < 1024) return 4;

  return 6;
};
