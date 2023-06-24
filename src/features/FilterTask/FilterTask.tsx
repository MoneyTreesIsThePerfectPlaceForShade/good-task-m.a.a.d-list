import React from "react";
import styles from "./FilterTask.module.scss";
import { useDispatch } from "react-redux";
import { filterCompletedTasks } from "@/entities/Task/model/tasksSlice";

export const FilterTask = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <button onClick={() => dispatch(filterCompletedTasks("all"))}>Все</button>
      <button onClick={() => dispatch(filterCompletedTasks("done"))}>
        Выполненные
      </button>
      <button onClick={() => dispatch(filterCompletedTasks("notDone"))}>
        Не выполненные
      </button>
    </div>
  );
};
