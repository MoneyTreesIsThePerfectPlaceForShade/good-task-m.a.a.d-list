import React, { useEffect, useState } from "react";
import styles from "./AddTask.module.scss";
import { useDispatch } from "react-redux";
import { addTask } from "../../entities/Task/model/tasksSlice";
import { nanoid } from "@reduxjs/toolkit";

const AddTask = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [titleDirty, setTitleDirty] = useState(false);
  const [bodyDirty, setBodyDirty] = useState(false);

  const [titleError, setTitleError] = useState("Введите название");
  const [bodyError, setBodyError] = useState("Введите описание");

  const [formValid, setFormValid] = useState(false);

  const [task, setTask] = useState({});

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

  const isOver40 = (e: any) => {
    const isOver40 = e.target.value
      .split(" ")
      .filter((word: string) => word.length > 40);

    return isOver40.length > 0;
  };

  const titleHandler = (e: any) => {
    setTitle(e.target.value);

    if (!e.target.value) {
      setTitleError("Введите название");
    } else if (isOver40(e)) {
      setTitleError("Одно слово должно быть меньше 40 символов");
    } else {
      setTitleError("");
    }
  };

  const bodyHandler = (e: any) => {
    setBody(e.target.value);
    if (!e.target.value) {
      setBodyError("Введите описание");
    } else if (isOver40(e)) {
      setBodyError("Одно слово должно быть меньше 40 символов");
    } else {
      setBodyError("");
    }
  };

  // todo подумать как можно изменить, ошибка в консоли, что слишком много ререндеров
  const time = setInterval(() => {}, 20000);

  // в зависимостях лежит time для того, чтобы одинаковые id не присваивались
  // заметкам с одинаковыми title и body
  useEffect(() => {
    setTask({ id: nanoid(8), title, body, done: false });
  }, [title, body]);

  useEffect(() => {
    if (titleError || bodyError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [titleError, bodyError]);

  return (
    <form className={styles.container}>
      <div className={styles.wrapper}>
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
              value={title}
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
              value={body}
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
            dispatch(addTask(task));
          }}
          disabled={!formValid}
        >
          Добавить задачу
        </button>
      </div>
    </form>
  );
};

export default AddTask;
