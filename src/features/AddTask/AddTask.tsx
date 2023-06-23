import React, { useEffect, useState } from "react";
import styles from "./AddTask.module.scss";
import { useDispatch } from "react-redux";
import { addTask } from "../../entities/Task/model/tasksSlice";
import { nanoid } from "@reduxjs/toolkit";

export const AddTask = () => {
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

  const titleHandler = (e: any) => {
    setTitle(e.target.value);

    if (!e.target.value) {
      setTitleError("Введите название");
    } else {
      setTitleError("");
    }
  };

  const bodyHandler = (e: any) => {
    setBody(e.target.value);
    if (!e.target.value) {
      setBodyError("Введите описание");
    } else {
      setBodyError("");
    }
  };

  // вероятно костыль, но иначе не придумал как избавиться от первого пустого пейлоада
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
              placeholder="Markdown разметка активна"
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
            setTask({ id: nanoid(8), title, body, done: false });
            // @ts-ignore пока не понял как исправить
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
