import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    filteredTasks: [],
  },
  reducers: {
    addTask(state: { tasks: object[]; filteredTasks: object[] }, action) {
      state.tasks.push(action.payload);
      state.filteredTasks.push(action.payload);
    },

    deleteTask(state, action) {
      state.tasks = state.tasks.filter((task: { id: string }) => {
        return task.id !== action.payload;
      });

      state.filteredTasks = state.tasks.filter((task: { id: string }) => {
        return task.id !== action.payload;
      });
    },

    editTask(state, action) {
      state.tasks.map(
        (task: { id: string; title: string; body: string; date: string }) => {
          if (task.id === action.payload.id) {
            task.title = action.payload.title;
            task.body = action.payload.body;
            task.date = action.payload.date;
          }
          return task;
        }
      );

      state.filteredTasks.map(
        (task: { id: string; title: string; body: string; date: string }) => {
          if (task.id === action.payload.id) {
            task.title = action.payload.title;
            task.body = action.payload.body;
            task.date = action.payload.date;
          }
          return task;
        }
      );
    },

    filterCompletedTasks(state, { payload }) {
      state.filteredTasks = state.tasks.filter((task: { done: boolean }) => {
        if (payload === "all") return task;
        if (payload === "done") return task.done;
        if (payload === "notDone") return !task.done;
        return task;
      });
    },

    filterByDate(state, { payload }) {
      state.filteredTasks = state.tasks.filter((task: { date: string }) => {
        const startDate = payload.startDate;
        const endDate = payload.endDate;

        if (task.date > startDate && task.date < endDate) return task;
        else return "";
      });
    },

    toggleDone(state, action) {
      state.tasks.map(
        (task: { id: string; title: string; body: string; done: boolean }) => {
          if (task.id === action.payload) {
            task.done = !task.done;
          }
          return task;
        }
      );

      state.filteredTasks.map(
        (task: { id: string; title: string; body: string; done: boolean }) => {
          if (task.id === action.payload) {
            task.done = !task.done;
          }
          return task;
        }
      );
    },

    toggleTheme(state, action) {
      state.tasks.map((task: { id: string; colorTheme: string }) => {
        if (task.id === action.payload.id) {
          task.colorTheme = action.payload.colorTheme;
        }
        return task;
      });

      state.filteredTasks.map((task: { id: string; colorTheme: string }) => {
        if (task.id === action.payload.id) {
          task.colorTheme = action.payload.colorTheme;
        }
        return task;
      });
    },
  },
});

export default tasksSlice.reducer;
export const {
  addTask,
  deleteTask,
  editTask,
  filterCompletedTasks,
  filterByDate,
  toggleDone,
  toggleTheme,
} = tasksSlice.actions;
