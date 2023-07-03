export const procentConverter = (amount: number, fullAmount: number) => {
  return Math.round((amount / fullAmount) * 100);
};
