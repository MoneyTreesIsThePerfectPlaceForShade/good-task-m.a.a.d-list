import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [
      { id: "sd5teds4", title: "Тренировка", body: "Кардио 20 минут" },
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

    editTask(state: any, action: any) {
      state.tasks.map((task: any) => {
        console.log(task.id, action.payload.id);
        if (task.id === action.payload.id) {
          task.title = action.payload.title;
          console.log(action.payload.title);
          task.body = action.payload.body;
          console.log(action.payload.body);
        }

        return task;
      });
    },
  },
});

export default tasksSlice.reducer;
export const { addTask, deleteTask, editTask } = tasksSlice.actions;
