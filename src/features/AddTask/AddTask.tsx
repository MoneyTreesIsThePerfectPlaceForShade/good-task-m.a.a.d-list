import React, { FC, useEffect, useState } from "react";
import styles from "./AddTask.module.scss";
import { useDispatch } from "react-redux";
import { addTask } from "@/entities/Task/model/tasksSlice";
import { nanoid } from "@reduxjs/toolkit";
// handlers
import { blurHandler } from "../handlers/blurHandler";
import { titleHandler } from "../handlers/titleHandler";
import { bodyHandler } from "../handlers/bodyHandler";
// custom inputs
import TitleAndInput from "../TitleAndInput/TitleAndInput";

export const AddTask: FC = () => {
  const dispatch = useDispatch();

  const [formValid, setFormValid] = useState(false);
  const [task, setTask] = useState({});

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [titleDirty, setTitleDirty] = useState(false);
  const [bodyDirty, setBodyDirty] = useState(false);

  const [titleError, setTitleError] = useState("Введите название");
  const [bodyError, setBodyError] = useState("Введите описание");

  // вероятно костыль, но иначе не придумал
  // как избавиться от первого пустого пейлоада
  // пробовал изначально таск сделать не пустой, но это не выход
  useEffect(() => {
    setTask({ id: nanoid(8), title, body, done: false, colorTheme: "light" });
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
        <TitleAndInput
          title={title}
          body={body}
          titleOnChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            titleHandler(e, setTitle, setTitleError)
          }
          bodyOnChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            bodyHandler(e, setBody, setBodyError)
          }
          blurHandler={(e: React.FocusEvent<HTMLTextAreaElement, Element>) =>
            blurHandler(e, setTitleDirty, setBodyDirty)
          }
          titleDirty={titleDirty}
          bodyDirty={bodyDirty}
          titleError={titleError}
          bodyError={bodyError}
        />

        <button
          className={styles.addTask}
          onClick={(e) => {
            e.preventDefault();
            setTask({ id: nanoid(8), title, body, done: false });
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
