import React from "react";
import { AddTask } from "../../features/AddTask/AddTask";
import { TaskList } from "../../widgets";
import { FilterTask } from "../../features/FilterTask/FilterTask";
import { useSelector } from "react-redux";
import { Layout } from "../Layout/Layout";

export const MainPage = () => {
  const tasks = useSelector((state: any) => state.tasks.tasks);

  return (
    <Layout>
      <div>
        <AddTask />
        {tasks.length ? <FilterTask /> : ""}
        <TaskList />
      </div>
    </Layout>
  );
};
