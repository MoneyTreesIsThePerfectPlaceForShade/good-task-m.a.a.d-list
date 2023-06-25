export const bodyHandler = (
  e: React.ChangeEvent<HTMLInputElement>,
  setBody: Function,
  setBodyError: Function
) => {
  setBody(e.target.value);
  if (!e.target.value) {
    setBodyError("Введите описание");
  } else {
    setBodyError("");
  }
};
