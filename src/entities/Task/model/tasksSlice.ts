import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [
      {
        id: "sd5teds4",
        title: "Тренировка",
        body: "Кардио 20 минут",
        done: false,
      },
      { id: "s2d4gse4", title: "Уборка", body: "Помыть пол", done: true },
    ],
    filteredTasks: [],
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
      state.tasks.map((task: { id: number; title: string; body: string }) => {
        if (task.id === action.payload.id) {
          task.title = action.payload.title;
          task.body = action.payload.body;
        }

        return task;
      });
    },

    filterCompletedTasks(state: any, action: any) {
      state.filteredTasks = state.tasks.filter(
        (task: { id: number; title: string; body: string; done: boolean }) => {
          if (action.payload === "all") return task;

          if (action.payload === "done") return task.done;

          if (action.payload === "notDone") return !task.done;

          return task;
        }
      );
    },
  },
});

export default tasksSlice.reducer;
export const { addTask, deleteTask, editTask, filterCompletedTasks } =
  tasksSlice.actions;
