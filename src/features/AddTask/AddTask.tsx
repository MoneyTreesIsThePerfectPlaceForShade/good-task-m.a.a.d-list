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

  useEffect(() => {
    setTask({ id: nanoid(8), title, body });
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
      <label htmlFor="title">Назвние</label>
      <input
        type="text"
        id="title"
        name="title"
        value={title}
        onChange={(e) => titleHandler(e)}
        onBlur={(e) => blurHandler(e)}
      />
      {titleDirty && titleError && <div>{titleError}</div>}
      <label htmlFor="body">Описание</label>
      <input
        type="text"
        id="body"
        name="body"
        value={body}
        onChange={(e) => bodyHandler(e)}
        onBlur={(e) => blurHandler(e)}
      />
      {bodyDirty && bodyError && <div>{bodyError}</div>}
      <button
        onClick={(e) => {
          e.preventDefault();
          //@ts-ignore
          dispatch(addTask(task));
        }}
        disabled={!formValid}
      >
        Добавить задачу
      </button>
    </form>
  );
};

export default AddTask;
