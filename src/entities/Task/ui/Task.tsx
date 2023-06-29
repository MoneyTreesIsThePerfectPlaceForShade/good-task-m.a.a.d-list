import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Task.module.scss";
import cn from "classnames";

import {deleteTask, filterCompletedTasks, toggleDone, toggleTheme} from "../model/tasksSlice";
import { EditTask } from "@/features";

import MDEditor from "@uiw/react-md-editor";
// icons
import { BsTrash } from "react-icons/bs";
import { MdDone } from "react-icons/md";
import {Dropdown} from "@/shared";

interface ITask {
  task: {
    id: string;
    title: string;
    body: string;
    done: boolean;
    colorTheme: string;
  };
}

export const Task: FC<ITask> = ({
  task: { id, title, body, done, colorTheme },
}) => {
  const dispatch = useDispatch();

  const [isDone, setIsDone] = useState(done);

  const doneTask = () => {
    setIsDone(!isDone);
    dispatch(toggleDone(id));
  };

  const [theme, setTheme] = useState(colorTheme);

  const themeChecker = () => {
    return theme === "light"
      ? styles.lightTheme
      : theme === "dark"
      ? styles.darkTheme
      : theme === "yellow"
      ? styles.yellowTheme
      : theme === "blue"
      ? styles.blueTheme
      : theme === "green"
      ? styles.greenTheme
      : theme === "brown"
      ? styles.brownTheme
      : theme === "indigo"
      ? styles.indigoTheme
      : theme === "orange"
      ? styles.orangeTheme
      : theme === "wheat"
      ? styles.wheatTheme
      : theme === "purple"
      ? styles.purpleTheme
      : "";
  };

  const [openedDropdown, setOpenedDropdown] = useState(false);

  return (
    <div className={cn(styles.task, themeChecker())} onClick={()=>setOpenedDropdown(!openedDropdown)}>
      <div className={styles.doneBtnAndSelectTheme}>
        <button onClick={doneTask}>
          <MdDone className={styles.icon} />
        </button>
        <Dropdown classNames={styles.dropdown} isOpened={openedDropdown} openHandler={()=>setOpenedDropdown(!openedDropdown)}>
          <div className={styles.colorColumns}>
            <div className={styles.leftColorColumns}>
              <button className={styles.lightTheme} onClick={()=> {
                setTheme('light');
                dispatch(toggleTheme({ id: id, colorTheme: 'light' }));
                setOpenedDropdown(!openedDropdown);
              }}/>
              <button className={styles.darkTheme} onClick={()=> {
                setTheme('dark');
                dispatch(toggleTheme({ id: id, colorTheme: "dark" }));
                setOpenedDropdown(!openedDropdown);
              }}/>
              <button className={styles.yellowTheme} onClick={()=> {
                setTheme('yellow');
                dispatch(toggleTheme({ id: id, colorTheme: 'yellow' }));
                setOpenedDropdown(!openedDropdown);
              }}/>
              <button className={styles.blueTheme} onClick={()=> {
                setTheme('blue');
                dispatch(toggleTheme({ id: id, colorTheme: 'blue'}));
                setOpenedDropdown(!openedDropdown);
              }}/>
              <button className={styles.greenTheme} onClick={()=> {
                setTheme('green');
                dispatch(toggleTheme({ id: id, colorTheme: 'green' }));
                setOpenedDropdown(!openedDropdown);
              }}/>
            </div>
            <div className={styles.rightColorColumns}>
              <button className={styles.brownTheme} onClick={()=> {
                setTheme('brown');
                dispatch(toggleTheme({ id: id, colorTheme:'brown' }));
                setOpenedDropdown(!openedDropdown);
              }}/>
              <button className={styles.indigoTheme} onClick={()=> {
                setTheme('indigo');
                dispatch(toggleTheme({ id: id, colorTheme: 'indigo' }));
                setOpenedDropdown(!openedDropdown);
              }}/>
              <button className={styles.orangeTheme} onClick={()=> {
                setTheme('orange');
                dispatch(toggleTheme({ id: id, colorTheme: 'orange'}));
                setOpenedDropdown(!openedDropdown);
              }}/>
              <button className={styles.wheatTheme} onClick={()=> {
                setTheme('wheat');
                dispatch(toggleTheme({ id: id, colorTheme: 'wheat'}));
                setOpenedDropdown(!openedDropdown);
              }}/>
              <button className={styles.purpleTheme} onClick={()=> {
                setTheme('purple');
                dispatch(toggleTheme({ id: id, colorTheme: 'purple' }));
                setOpenedDropdown(!openedDropdown);
              }}/>
            </div>
          </div>
        </Dropdown>
      </div>
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
        <EditTask id={id} />
      </div>
    </div>
  );
};
