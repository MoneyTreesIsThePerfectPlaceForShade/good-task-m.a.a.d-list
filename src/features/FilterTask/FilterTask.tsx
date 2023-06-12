import React from "react";
import { useDispatch } from "react-redux";
import { filterCompletedTasks } from "../../entities/Task/model/tasksSlice";
import styles from "./FilterTask.module.scss";

const FilterTask = () => {
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

export default FilterTask;
