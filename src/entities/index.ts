import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./Task/model/tasksSlice";

const rootReducer = combineReducers({
  tasks: tasksSlice,
});

export const store = configureStore({ reducer: rootReducer });

export { Task } from "./Task/ui/Task";
