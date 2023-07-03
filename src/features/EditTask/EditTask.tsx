import React, { FC, useEffect, useState } from "react";
import styles from "./EditTask.module.scss";
import { editTask } from "@/entities/Task/model/tasksSlice";
// icons
import { AiOutlineEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { GrFormClose } from "react-icons/gr";
// handlers
import { blurHandler } from "../handlers/blurHandler";
import { titleHandler } from "../handlers/titleHandler";
import { bodyHandler } from "../handlers/bodyHandler";
import TitleAndInput from "@/features/TitleAndInput/TitleAndInput";
import { dateHandler } from "../handlers/dateHandler";

interface IEditTask {
  id: string;
}

export const EditTask: FC<IEditTask> = ({ id }) => {
  const dispatch = useDispatch();
  const [isOpened, setIsOpened] = useState(false);

  const [formValid, setFormValid] = useState(false);
  const [editedTask, setEditedTask] = useState({});

  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");
  const [newDate, setNewDate] = useState("");

  const [titleDirty, setTitleDirty] = useState(false);
  const [bodyDirty, setBodyDirty] = useState(false);

  const [titleError, setTitleError] = useState("Введите название");
  const [bodyError, setBodyError] = useState("Введите описание");

  useEffect(() => {
    setEditedTask({ id, title: newTitle, body: newBody, date: newDate });
  }, [id, newTitle, newBody, newDate]);

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
          <TitleAndInput
            title={newTitle}
            body={newBody}
            date={newDate}
            titleOnChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              titleHandler(e, setNewTitle, setTitleError)
            }
            bodyOnChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              bodyHandler(e, setNewBody, setBodyError)
            }
            dateOnChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              dateHandler(e, setNewDate)
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
