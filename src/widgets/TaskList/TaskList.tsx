import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Task } from "../../entities";
import styles from "./TaskList.module.scss";
import { filterCompletedTasks } from "../../entities/Task/model/tasksSlice";

const TaskList = () => {
  const tasks = useSelector((state: any) => state.tasks.tasks);
  const filteredTasks = useSelector((state: any) => state.tasks.filteredTasks);

  const dispatch = useDispatch();

  useMemo(() => {
    //@ts-ignore
    dispatch(filterCompletedTasks("all"));
  }, [dispatch]);

  return (
    <div className={styles.container}>
      {filteredTasks.length ? (
        <h1 className={styles.header}>Список задач</h1>
      ) : (
        <h1 className={styles.header}>Список задач пуст</h1>
      )}
      {/*{filteredTasks &&*/}
      {/*  tasks.map((task: any) => (*/}
      {/*    <div>*/}
      {/*      <span>tasks</span>*/}
      {/*      <Task task={task} />*/}
      {/*    </div>*/}
      {/*  ))}*/}
      {filteredTasks &&
        filteredTasks.map((task: any) => (
          <div>
            <Task task={task} />
          </div>
        ))}
    </div>
  );
};

export default TaskList;
