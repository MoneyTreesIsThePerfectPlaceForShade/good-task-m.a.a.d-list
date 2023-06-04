import React from "react";
import styles from "./App.module.scss";
import TaskList from "../../widgets/TaskList/TaskList";

export function App() {
  return (
    <div className={styles.container}>
      <TaskList />
    </div>
  );
}
