import React, {useState} from 'react';
import {useSelector} from "react-redux";
import styles from './Statistics.module.scss'

export const Statistics = () => {
  const allTasks = useSelector((state: any) => state.tasks.tasks);

  const [openNumbers, setOpenNumbers] = useState(true);
  const [openPercents, setOpenPercents] = useState(false);

  const toggleNumbersPercents = () => {
    setOpenNumbers(!openNumbers);
    setOpenPercents(!openPercents);
  }

  // TODO: вынести в хендлеры
  const procentConverter = (amount: number, fullAmount: number) => {
    return Math.round(((amount / fullAmount) * 100));
  }

  return (
    <div className={styles.container}>

      <div>
        <button onClick={toggleNumbersPercents} className={styles.toggler}>{openNumbers && 'Проценты' || openPercents && 'Числа'}</button>
      </div>

      <div className={styles.statistics}>
        <div className={styles.statsBlock}>
          <span>Всего:</span>
          <span>
          {allTasks.length}
        </span>
        </div>

        <div className={styles.statsBlock}>
          <span>Сделано:</span>
          <span>
          {openNumbers && allTasks.reduce((acc:number,task: { done: boolean })=>task.done ? acc+1: acc, 0)}
          {openPercents && allTasks.length && procentConverter(allTasks.reduce((acc:number,task: { done: boolean })=>task.done ? acc+1: acc, 0), allTasks.length)+'%'}
        </span>
        </div>

        <div className={styles.statsBlock}>
          <span>Не сделано:</span>
          <span>
          {openNumbers && allTasks.reduce((acc:number,task: { done: boolean })=>task.done ? acc: acc+1, 0)}
          {openPercents && procentConverter(allTasks.reduce((acc:number,task: { done: boolean })=>task.done ? acc: acc+1, 0), allTasks.length)+'%'}
        </span>
        </div>
      </div>

    </div>
  );
};