import React from "react";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <span className={styles.dev}>Разработка и дизайн: Матвей Скоморохов</span>
      <div className={styles.contacts}>
        <a
          href="https://github.com/MoneyTreesIsThePerfectPlaceForShade"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://career.habr.com/takemetoyourleader"
          target="_blank"
          rel="noreferrer"
        >
          Хабр Карьера
        </a>
        <a
          href="https://ekaterinburg.hh.ru/resume/5cd6d16aff0b81c5a70039ed1f424348763365"
          target="_blank"
          rel="noreferrer"
        >
          hh.ru
        </a>
        <a href="https://t.me/warrenwatter" target="_blank" rel="noreferrer">
          Telegram
        </a>
      </div>
    </div>
  );
};
