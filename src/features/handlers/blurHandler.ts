export const blurHandler = (
  e: React.FocusEvent<HTMLTextAreaElement, Element>,
  setDirtyTitle: Function,
  setDirtyBody: Function
) => {
  switch (e.target.name) {
    case "title":
      setDirtyTitle(true);
      break;

    case "body":
      setDirtyBody(true);
      break;
  }
};
