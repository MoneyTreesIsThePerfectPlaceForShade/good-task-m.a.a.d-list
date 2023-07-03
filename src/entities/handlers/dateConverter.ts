export const dateConverter = (date: string) => {
  // дата не обязательна, поэтому пустая строка в случае отсутствия
  if (!date) return "";

  return new Date(date).toLocaleDateString("ru-RU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
