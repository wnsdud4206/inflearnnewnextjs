export const wrapAsync = (acyncFunc: () => Promise<void>) => () => {
  void acyncFunc();
};
