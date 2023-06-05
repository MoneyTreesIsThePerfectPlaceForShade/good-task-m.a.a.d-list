import React from "react";
import { useSelector } from "react-redux";
import { Task } from "../../entities";
import styles from "./TaskList.module.scss";

const TaskList = () => {
  const tasks = useSelector((state: any) => state.tasks.tasks);

  return (
    <div className={styles.container}>
      {tasks.map((task: any) => (
        <div>
          <Task task={task} />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
