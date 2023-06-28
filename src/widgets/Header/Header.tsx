import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className={styles.container}>
      <Link to={"/"} className={styles.link}>
        Главная
      </Link>
      <span className={styles.line}>|</span>
      <Link to={"/about"} className={styles.link}>
        Обо мне
      </Link>
    </nav>
  );
};
