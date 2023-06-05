import React from "react";
import styles from "./MainPage.module.scss";
import AddTask from "../../features/AddTask/AddTask";
import TaskList from "../../widgets/TaskList/TaskList";

const MainPage = () => {
  return (
    <div className={styles.container}>
      <AddTask />
      <TaskList />
    </div>
  );
};

export default MainPage;
