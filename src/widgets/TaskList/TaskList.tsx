import React, { FC, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Task } from "../../entities"; // обычный импорт, работает
// import { Task } from "@entities"; // абсолютный, не работает, когда запускаешь проект

import styles from "./TaskList.module.scss";
import { filterCompletedTasks } from "../../entities/Task/model/tasksSlice";

export const TaskList: FC = () => {
  const filteredTasks = useSelector((state: any) => state.tasks.filteredTasks);

  const dispatch = useDispatch();

  useMemo(() => {
    dispatch(filterCompletedTasks("all"));
  }, [dispatch]);

  return (
    <div className={styles.container}>
      {filteredTasks.length ? (
        <h1 className={styles.header}>Список задач</h1>
      ) : (
        <h1 className={styles.header}>Список задач пуст</h1>
      )}
      {filteredTasks &&
        filteredTasks.map((task: any) => (
          <div>
            <Task task={task} />
          </div>
        ))}
    </div>
  );
};
