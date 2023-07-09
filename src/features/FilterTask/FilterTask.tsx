import React, { FC, useState } from "react";
import styles from "./FilterTask.module.scss";
import { useDispatch } from "react-redux";
import {
  filterByDate,
  filterCompletedTasks,
} from "@/entities/Task/model/tasksSlice";

export const FilterTask: FC = () => {
  const dispatch = useDispatch();

  const [startDate, setStarDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const checkStartDateAndEndDate = () => {
    return !(startDate !== "" && endDate !== "");
  };

  return (
    <div className={styles.container}>
      <div className={styles.filterByDone}>
        <button onClick={() => dispatch(filterCompletedTasks("all"))}>
          Все
        </button>
        <button onClick={() => dispatch(filterCompletedTasks("done"))}>
          Выполненные
        </button>
        <button onClick={() => dispatch(filterCompletedTasks("notDone"))}>
          Не выполненные
        </button>
      </div>

      <div className={styles.filterByDate}>
        <div className={styles.filterByDateInputs}>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStarDate(e.target.value)}
          />
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <button
          onClick={() => dispatch(filterByDate({ startDate, endDate }))}
          disabled={checkStartDateAndEndDate()}
        >
          Фильтровать по дате
        </button>
      </div>
    </div>
  );
};
