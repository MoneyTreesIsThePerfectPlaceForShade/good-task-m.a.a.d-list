import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
import taskList from "../../../widgets/TaskList/TaskList";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [
      { id: 1, title: "Тренировка", body: "Кардио 20 минут" },
      { id: 2, title: "Уборка", body: "Помыть пол" },
    ],
  },
  reducers: {
    addTask(state: any, action: any) {
      state.tasks.push(action.payload);
    },

    deleteTask(state: any, action: any) {
      state.tasks = state.tasks.filter((task: { id: number }) => {
        return task.id !== action.payload;
      });
    },
  },
});

export default tasksSlice.reducer;
export const { addTask, deleteTask } = tasksSlice.actions;
