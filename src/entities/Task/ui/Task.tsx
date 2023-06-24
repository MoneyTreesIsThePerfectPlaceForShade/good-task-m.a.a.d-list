import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Task.module.scss";
import cn from "classnames";

import { deleteTask, toggleDone } from "../model/tasksSlice";
import { EditTask } from "@/features";

import MDEditor from "@uiw/react-md-editor";
// icons
import { BsTrash } from "react-icons/bs";
import { MdDone } from "react-icons/md";

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
    dispatch(toggleDone(id));
  };

  return (
    <div className={cn(styles.task)}>
      <button onClick={doneTask}>
        <MdDone className={styles.icon} />
      </button>
      <div
        className={cn(styles.titleNBody, done ? styles.done : "")}
        data-color-mode="light"
      >
        <p className={styles.title}>{title}</p>
        <MDEditor.Markdown
          className={styles.body}
          source={body}
          skipHtml={true}
          transformLinkUri={null}
        />
      </div>
      <div className={styles.trashEditBlock}>
        <button
          onClick={() => {
            dispatch(deleteTask(id));
          }}
        >
          <BsTrash className={styles.trash} />
        </button>
        <EditTask task={{ id, title, body }} />
      </div>
    </div>
  );
};
