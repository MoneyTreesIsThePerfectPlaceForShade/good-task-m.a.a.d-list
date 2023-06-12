import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterCompletedTasks } from "../../entities/Task/model/tasksSlice";

const FilterTask = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <select
        name="filter"
        id="filter"
        defaultValue={"all"}
        onChange={(e) => {
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
