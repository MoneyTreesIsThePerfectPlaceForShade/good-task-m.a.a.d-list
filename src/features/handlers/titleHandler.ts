export const titleHandler = (
  e: React.ChangeEvent<HTMLInputElement>,
  setTitle: Function,
  setTitleError: Function
) => {
  setTitle(e.target.value);

  if (!e.target.value) {
    setTitleError("Введите название");
  } else {
    setTitleError("");
  }
};
