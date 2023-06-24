import React, { FC, useEffect, useState } from "react";
import styles from "./EditTask.module.scss";
import { editTask } from "@/entities/Task/model/tasksSlice";
// icons
import { AiOutlineEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { GrFormClose } from "react-icons/gr";

interface ITask {
  task: {
    id: any;
    title: string;
    body: string;
  };
}

export const EditTask: FC<ITask> = ({ task: { id, title, body } }) => {
  const dispatch = useDispatch();

  const [isOpened, setIsOpened] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");

  const [titleDirty, setTitleDirty] = useState(false);
  const [bodyDirty, setBodyDirty] = useState(false);

  const [titleError, setTitleError] = useState("Введите название");
  const [bodyError, setBodyError] = useState("Введите описание");

  const isOver40 = (e: any) => {
    const isOver40 = e.target.value
      .split(" ")
      .filter((word: string) => word.length > 40);

    return isOver40.length > 0;
  };

  const blurHandler = (e: any) => {
    switch (e.target.name) {
      case "title":
        setTitleDirty(true);
        break;

      case "body":
        setBodyDirty(true);
        break;
    }
  };

  const titleHandler = (e: any) => {
    setNewTitle(e.target.value);

    if (!e.target.value) {
      setTitleError("Введите название");
    } else if (isOver40(e)) {
      setTitleError("Одно слово должно быть меньше 40 символов");
    } else {
      setTitleError("");
    }
  };

  const bodyHandler = (e: any) => {
    setNewBody(e.target.value);
    if (!e.target.value) {
      setBodyError("Введите описание");
    } else if (isOver40(e)) {
      setBodyError("Одно слово должно быть меньше 40 символов");
    } else {
      setBodyError("");
    }
  };

  const [formValid, setFormValid] = useState(false);

  const [editedTask, setEditedTask] = useState({});

  useEffect(() => {
    setEditedTask({ id, title: newTitle, body: newBody });
  }, [id, newTitle, newBody]);

  useEffect(() => {
    if (titleError || bodyError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [titleError, bodyError]);

  return (
    <div className={styles.container}>
      <button className={styles.btnOpen} onClick={() => setIsOpened(!isOpened)}>
        <AiOutlineEdit className={styles.icon} />
      </button>

      {isOpened && (
        <form
          className={styles.editForm}
          onKeyUp={(e) => {
            if (e.key === "Escape") setIsOpened(!isOpened);
          }}
        >
          <div>
            <div className={styles.labelNInput}>
              <label htmlFor="title" className={styles.label}>
                Название
              </label>
              <input
                className={styles.input}
                type="text"
                id="title"
                name="title"
                value={newTitle}
                onChange={(e) => titleHandler(e)}
                onBlur={(e) => blurHandler(e)}
              />
            </div>
            {titleDirty && titleError && (
              <span className={styles.error}>{titleError}</span>
            )}
          </div>
          <div>
            <div className={styles.labelNInput}>
              <label htmlFor="body" className={styles.label}>
                Описание
              </label>
              <textarea
                className={styles.textarea}
                id="body"
                name="body"
                value={newBody}
                onChange={(e) => bodyHandler(e)}
                onBlur={(e) => blurHandler(e)}
              />
            </div>
            {bodyDirty && bodyError && (
              <span className={styles.error}>{bodyError}</span>
            )}
          </div>
          <button
            className={styles.addTask}
            onClick={(e) => {
              e.preventDefault();
              //@ts-ignore
              dispatch(editTask(editedTask));
              setIsOpened(!isOpened);
            }}
            disabled={!formValid}
          >
            Сохранить
          </button>
          <button
            className={styles.btnClose}
            onClick={(e) => {
              e.preventDefault();
              setIsOpened(!isOpened);
            }}
          >
            <GrFormClose />
          </button>
        </form>
      )}
    </div>
  );
};
