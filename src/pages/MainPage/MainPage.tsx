import React from "react";
import styles from "./MainPage.module.scss";
import AddTask from "../../features/AddTask/AddTask";
import TaskList from "../../widgets/TaskList/TaskList";
import FilterTask from "../../features/FilterTask/FilterTask";

const MainPage = () => {
  return (
    <div className={styles.container}>
      <AddTask />
      <FilterTask />
      <TaskList />
    </div>
  );
};

export default MainPage;
