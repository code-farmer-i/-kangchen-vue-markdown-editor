export const genRender = function (val: any) {
  return typeof val === 'function' ? val : () => val;
};
