import React, { FC } from "react";
import styles from "./TaskList.module.scss";
import { useSelector } from "react-redux";
import { Task } from "@/entities";

export const TaskList: FC = () => {
  const filteredTasks = useSelector((state: any) => state.tasks.filteredTasks);

  // на этапе рефакторинга забыл зачем мне это было нужно, но на всякий не стал
  // удалять этот моментик, есть-пить не просит
  // const dispatch = useDispatch();
  // useMemo(() => {
  //   dispatch(filterCompletedTasks("all"));
  // }, [dispatch]);

  return (
    <div className={styles.container}>
      {filteredTasks.length ? (
        <h1 className={styles.header}>Список задач</h1>
      ) : (
        <h1 className={styles.header}>Список задач пуст</h1>
      )}
      {filteredTasks &&
        filteredTasks.map((task: any) => (
          <div>
            <Task task={task} />
          </div>
        ))}
    </div>
  );
};
