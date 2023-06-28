import React, { FC } from "react";
import { useSelector } from "react-redux";
import {AddTask, FilterTask, Statistics} from "@/features";
import { TaskList } from "@/widgets";
import { Layout } from "../Layout/Layout";

export const MainPage: FC = () => {
  const tasks = useSelector((state: any) => state.tasks.tasks);

  return (
    <Layout>
      <div>
        <AddTask />
        <Statistics/>
        {tasks.length ? <FilterTask /> : ""}
        <TaskList />
      </div>
    </Layout>
  );
};
