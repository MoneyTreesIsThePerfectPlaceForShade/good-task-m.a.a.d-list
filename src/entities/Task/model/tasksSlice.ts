import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [
      { id: "sdatgds4", title: "Тренировка", body: "Кардио 20 минут" },
      { id: "s2d4gse4", title: "Уборка", body: "Помыть пол" },
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
