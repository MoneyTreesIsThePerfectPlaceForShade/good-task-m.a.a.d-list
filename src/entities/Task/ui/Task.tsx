import React, { FC, useState } from "react";
import styles from "./Task.module.scss";
import cn from "classnames";
import { BsTrash } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { IconContext } from "react-icons";

interface ITask {
  title: string;
  body: string;
}

export const Task: FC<ITask> = ({ title, body }) => {
  const [isDone, setIsDone] = useState(false);

  const doneTask = () => {
    setIsDone(!isDone);
  };

  return (
    <div className={cn(styles.task)}>
      <button onClick={doneTask}>
        <MdDone className={styles.icon} />
      </button>
      <div className={cn(isDone ? styles.done : "")}>
        <p className={styles.title}>{title}</p>
        <p className={styles.body}>{body}</p>
      </div>
      <div className={styles.trashEditBlock}>
        <button>
          <BsTrash className={styles.trash} />
        </button>
        <button>
          <AiOutlineEdit className={styles.icon} />
        </button>
      </div>
    </div>
  );
};
