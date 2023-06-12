import React, { FC, useEffect, useMemo, useState } from "react";
import styles from "./Task.module.scss";
import cn from "classnames";
import { BsTrash } from "react-icons/bs";
import { MdDone } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  deleteTask,
  editTask,
  filterCompletedTasks,
  toggleDone,
} from "../model/tasksSlice";
import EditTask from "../../../features/EditTask/EditTask";

interface ITask {
  task: {
    id: any;
    title: string;
    body: string;
    done: boolean;
  };
}

export const Task: FC<ITask> = ({ task: { id, title, body, done } }) => {
  const dispatch = useDispatch();

  const [isDone, setIsDone] = useState(done);

  const doneTask = () => {
    setIsDone(!isDone);
    //@ts-ignore
    dispatch(toggleDone({ id, isDone }));
  };

  return (
    <div className={cn(styles.task)}>
      <button onClick={doneTask}>
        <MdDone className={styles.icon} />
      </button>
      <div className={cn(styles.titleNBody, done ? styles.done : "")}>
        <p className={styles.title}>{title}</p>
        <p className={styles.body}>{body}</p>
      </div>
      <div className={styles.trashEditBlock}>
        <button onClick={() => dispatch(deleteTask(id))}>
          <BsTrash className={styles.trash} />
        </button>
        <EditTask task={{ id, title, body }} />
      </div>
    </div>
  );
};
