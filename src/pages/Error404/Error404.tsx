import React, { FC } from "react";
import styles from "./Error404.module.scss";
import { Link } from "react-router-dom";

export const Error404: FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.errorID}>404</h1>
      <p className={styles.errorDescription}>Такой страницы не существует</p>
      <Link to="/" className={styles.link}>
        Вернуться на главную
      </Link>
    </div>
  );
};
