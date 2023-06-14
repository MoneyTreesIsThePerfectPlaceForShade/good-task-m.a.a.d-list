import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./Task/model/tasksSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const rootReducer = combineReducers({
  tasks: tasksSlice,
});

// хранение в localStorage
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({ reducer: persistedReducer });
export const persistor = persistStore(store);

export { Task } from "./Task/ui/Task";
