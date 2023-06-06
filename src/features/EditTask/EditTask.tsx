import React, { FC, useEffect, useState } from "react";
import { editTask } from "../../entities/Task/model/tasksSlice";
import { AiOutlineEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import styles from "./EditTask.module.scss";

interface ITask {
  task: {
    id: any;
    title: string;
    body: string;
  };
}

const EditTask: FC<ITask> = ({ task: { id, title, body } }) => {
  const dispatch = useDispatch();

  const [isOpened, setIsOpened] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");

  const [editedTask, setEditedTask] = useState({});

  useEffect(() => {
    setEditedTask({ id, title: newTitle, body: newBody });
  }, [id, newTitle, newBody]);

  return (
    <div>
      <button className={styles.btnOpen} onClick={() => setIsOpened(!isOpened)}>
        <AiOutlineEdit className={styles.icon} />
      </button>

      {isOpened && (
        <form className={styles.editForm}>
          <label htmlFor="name">Название</label>
          <input
            id="name"
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <label htmlFor="body">Описание</label>
          <input
            id="body"
            type="text"
            value={newBody}
            onChange={(e) => setNewBody(e.target.value)}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              //@ts-ignore
              dispatch(editTask(editedTask));
              setIsOpened(!isOpened);
            }}
          >
            Сохранить
          </button>
        </form>
      )}
    </div>
  );
};

export default EditTask;
