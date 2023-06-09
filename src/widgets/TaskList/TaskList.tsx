import React from "react";
import { useSelector } from "react-redux";
import { Task } from "../../entities";
import styles from "./TaskList.module.scss";

const TaskList = () => {
  const tasks = useSelector((state: any) => state.tasks.tasks);
  const filteredTasks = useSelector((state: any) => state.tasks.filteredTasks);

  return (
    <div className={styles.container}>
      {tasks.length ? (
        <h1 className={styles.header}>Список задач</h1>
      ) : (
        <h1 className={styles.header}>Список задач пуст</h1>
      )}
      {!filteredTasks &&
        tasks.map((task: any) => (
          <div>
            <Task task={task} />
          </div>
        ))}
      {filteredTasks &&
        filteredTasks.map((task: any) => (
          <div>
            <Task task={task} />
          </div>
        ))}
    </div>
  );
};

export default TaskList;
