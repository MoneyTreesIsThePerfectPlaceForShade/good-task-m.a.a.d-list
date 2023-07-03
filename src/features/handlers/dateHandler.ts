export const dateHandler = (
  e: React.ChangeEvent<HTMLInputElement>,
  setDate: Function
) => {
  setDate(e.target.value);
};
