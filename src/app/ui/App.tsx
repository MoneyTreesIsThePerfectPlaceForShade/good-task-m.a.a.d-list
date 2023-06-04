import React from "react";
import styles from "./App.module.scss";
import { Task } from "../../entities";
import { useSelector } from "react-redux";

export function App() {
  const tasks = useSelector((state: any) => state.tasks.tasks);

  return (
    <div className={styles.container}>
      {tasks.map((task: any) => (
        <div>
          <Task title={task.title} body={task.body} />
        </div>
      ))}
    </div>
  );
}
