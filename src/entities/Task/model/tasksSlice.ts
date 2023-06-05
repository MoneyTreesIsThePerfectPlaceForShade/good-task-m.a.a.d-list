import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [
      { id: "sdatgds4", title: "Тренировка", body: "Кардио 20 минут" },
      { id: "s2d4gse4", title: "Уборка", body: "Помыть пол" },
      {
        id: "asd42fas",
        title: "Programming",
        body: "Make 4 components for project, make styles for them, etc.",
      },
      {
        id: "ad5hde24",
        title: "Кира Йошикаге",
        body: "Меня зовут Кира Йошикагэ. Мне 33 года. Мой дом находится в северо-восточной части Морио, в районе поместий. Работаю в офисе сети магазинов Kame Yu и домой возвращаюсь, самое позднее, в восемь вечера. Не курю, выпиваю изредка. Ложусь спать в 11 вечера и убеждаюсь, что получаю ровно восемь часов сна, несмотря ни на что. Перед сном я пью тёплое молоко, а также минут двадцать уделяю разминке, поэтому до утра сплю без особых проблем. Утром я просыпаюсь, не чувствуя ни усталости, ни стресса, словно младенец. На медосмотре мне сказали, что никаких проблем нет. Я пытаюсь донести, что я обычный человек, который хочет жить спокойной жизнью. Я не забиваю себе голову проблемами вроде побед или поражений, и не обзавожусь врагами, из-за которых не мог бы уснуть. Я знаю наверняка: в таком способе взаимодействия с обществом и кроется счастье. Хотя, если бы мне пришлось сражаться, я бы никому не проиграл.",
      },
    ],
  },
  reducers: {
    addTask(state: { tasks: object[] }, action: any) {
      state.tasks.push(action.payload);
    },

    deleteTask(state: any, action: any) {
      state.tasks = state.tasks.filter((task: { id: string }) => {
        return task.id !== action.payload;
      });
    },
  },
});

export default tasksSlice.reducer;
export const { addTask, deleteTask } = tasksSlice.actions;
