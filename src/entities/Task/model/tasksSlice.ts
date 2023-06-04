import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [
      { title: "Тренировка", body: "Кардио 20 минут" },
      { title: "Уборка", body: "Помыть пол, убрать на столе" },
    ],
  },
  reducers: {
    addTask(state: any, action: any) {
      state.tasks.push(action.payload);
    },

    doneTask(state: any, action: any) {},
  },
});

export default tasksSlice.reducer;
export const { addTask } = tasksSlice.actions;
