import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Task.module.scss";
import cn from "classnames";

import { deleteTask, toggleDone, toggleTheme } from "../model/tasksSlice";
import { EditTask } from "@/features";

import MDEditor from "@uiw/react-md-editor";
// icons
import { BsTrash } from "react-icons/bs";
import { MdDone } from "react-icons/md";
import {Dropdown} from "@/shared";

interface ITask {
  task: {
    id: any; // тут чет не понял, какие-то мутки с redux штуками TODO: обрати внимание
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
    <div className={cn(styles.task, themeChecker())}>
      <div className={styles.doneBtnAndSelectTheme}>
        <button onClick={doneTask}>
          <MdDone className={styles.icon} />
        </button>
        {/*<select*/}
        {/*  name="colorTheme"*/}
        {/*  id="colorTheme"*/}
        {/*  onChange={(e) => {*/}
        {/*    setTheme(e.target.value);*/}
        {/*    dispatch(toggleTheme({ id: id, colorTheme: e.target.value }));*/}
        {/*  }}*/}
        {/*  className={cn(styles.selectColorTheme, themeChecker())}*/}
        {/*>*/}
        {/*  <option value="default" selected hidden disabled></option>*/}
        {/*  <option value="light" className={styles.lightTheme}></option>*/}
        {/*  <option value="dark" className={styles.darkTheme}></option>*/}
        {/*  <option value="yellow" className={styles.yellowTheme}></option>*/}
        {/*  <option value="blue" className={styles.blueTheme}></option>*/}
        {/*  <option value="green" className={styles.greenTheme}></option>*/}
        {/*  <option value="brown" className={styles.brownTheme}></option>*/}
        {/*  <option value="indigo" className={styles.indigoTheme}></option>*/}
        {/*  <option value="orange" className={styles.orangeTheme}></option>*/}
        {/*  <option value="wheat" className={styles.wheatTheme}></option>*/}
        {/*  <option value="purple" className={styles.purpleTheme}></option>*/}
        {/*</select>*/}
        <Dropdown classNames={styles.dropdown} isOpened={openedDropdown} openHandler={()=>setOpenedDropdown(!openedDropdown)}>
          <button className={styles.lightTheme} onClick={(e)=> {setTheme('light');
          dispatch(toggleTheme({ id: id, colorTheme: 'light' }));
          setOpenedDropdown(!openedDropdown);
          }}/>
          <button className={styles.darkTheme} onClick={()=> {setTheme('dark');
          dispatch(toggleTheme({ id: id, colorTheme: "dark" }));
          setOpenedDropdown(!openedDropdown);
          }}/>
          <button className={styles.yellowTheme} onClick={()=> {setTheme('yellow');
          dispatch(toggleTheme({ id: id, colorTheme: 'yellow' }));
          setOpenedDropdown(!openedDropdown);
          }}/>
          <button className={styles.blueTheme} onClick={()=> {setTheme('blue');
          dispatch(toggleTheme({ id: id, colorTheme: 'blue'}));
          setOpenedDropdown(!openedDropdown);
          }}/>
          <button className={styles.greenTheme} onClick={()=> {setTheme('green');
          dispatch(toggleTheme({ id: id, colorTheme: 'green' }));
          setOpenedDropdown(!openedDropdown);
          }}/>
          <button className={styles.brownTheme} onClick={()=> {setTheme('brown');
          dispatch(toggleTheme({ id: id, colorTheme:'brown' }));
          setOpenedDropdown(!openedDropdown);
          }}/>
          <button className={styles.indigoTheme} onClick={()=> {setTheme('indigo');
          dispatch(toggleTheme({ id: id, colorTheme: 'indigo' }));
          setOpenedDropdown(!openedDropdown);
          }}/>
          <button className={styles.orangeTheme} onClick={()=> {setTheme('orange');
          dispatch(toggleTheme({ id: id, colorTheme: 'orange'}));
          setOpenedDropdown(!openedDropdown);
          }}/>
          <button className={styles.wheatTheme} onClick={()=> {setTheme('wheat');
          dispatch(toggleTheme({ id: id, colorTheme: 'wheat'}));
          setOpenedDropdown(!openedDropdown);
          }}/>
          <button className={styles.purpleTheme} onClick={()=> {setTheme('purple');
          dispatch(toggleTheme({ id: id, colorTheme: 'purple' }));
          setOpenedDropdown(!openedDropdown);
          }}/>
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
