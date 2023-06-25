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
      state.tasks.map((task: { id: string; title: string; body: string }) => {
        if (task.id === action.payload.id) {
          task.title = action.payload.title;
          task.body = action.payload.body;
        }
        return task;
      });

      state.filteredTasks.map(
        (task: { id: string; title: string; body: string }) => {
          if (task.id === action.payload.id) {
            task.title = action.payload.title;
            task.body = action.payload.body;
          }
          return task;
        }
      );
    },

    filterCompletedTasks(state, { payload }) {
      state.filteredTasks = state.tasks.filter(
        (task: { id: string; title: string; body: string; done: boolean }) => {
          if (payload === "all") return task;
          if (payload === "done") return task.done;
          if (payload === "notDone") return !task.done;
          return task;
        }
      );
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
  },
});

export default tasksSlice.reducer;
export const {
  addTask,
  deleteTask,
  editTask,
  filterCompletedTasks,
  toggleDone,
} = tasksSlice.actions;
