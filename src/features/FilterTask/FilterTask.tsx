import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterCompletedTasks } from "../../entities/Task/model/tasksSlice";

const FilterTask = () => {
  const dispatch = useDispatch();

  // filterCompletedTasks
  return (
    <div>
      <select
        name="filter"
        id="filter"
        defaultValue={"all"}
        onChange={(e) => {
          console.log(e.target.value);
          //@ts-ignore
          dispatch(filterCompletedTasks(e.target.value));
        }}
      >
        <option value="all">Все</option>
        <option value="done">Выполненные</option>
        <option value="notDone">Не выполненные</option>
      </select>
    </div>
  );
};

export default FilterTask;
