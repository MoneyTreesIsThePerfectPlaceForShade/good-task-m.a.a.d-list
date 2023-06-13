import React from "react";
import AddTask from "../../features/AddTask/AddTask";
import { TaskList } from "../../widgets";
import FilterTask from "../../features/FilterTask/FilterTask";

export const MainPageFSD = () => {
  return (
    <div>
      <AddTask />
      <FilterTask />
      <TaskList />
    </div>
  );
};
