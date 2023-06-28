import React from 'react';
import {useSelector} from "react-redux";
import styles from './Statistics.module.scss'

export const Statistics = () => {
  const allTasks = useSelector((state: any) => state.tasks.tasks);

  return (
    <div className={styles.container}>
      <div className={styles.statsBlock}>
        <span>Всего:</span>
        <span>
          {allTasks.length}
        </span>
      </div>

      <div className={styles.statsBlock}>
        <span>Сделано:</span>
        <span>
          {allTasks.reduce((acc:number,task: { done: boolean })=>task.done ? acc+1: acc, 0)}
        </span>
      </div>

      <div className={styles.statsBlock}>
        <span>Не сделано:</span>
        <span>
          {allTasks.reduce((acc:number,task: { done: boolean })=>task.done ? acc: acc+1, 0)}
        </span>
      </div>

    </div>
  );
};