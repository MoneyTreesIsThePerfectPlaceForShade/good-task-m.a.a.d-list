export const dateConverter = (date: string) => {
  // дата не обязательна, поэтому пустая строка в случае отсутствия
  // это доп проверка, на всякий случай
  // основная идет в Task.tsx
  if (!date) return "";

  return new Date(date).toLocaleDateString("ru-RU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
