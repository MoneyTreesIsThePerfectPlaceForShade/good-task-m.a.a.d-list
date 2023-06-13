import React from "react";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <span className={styles.dev}>Разработка и дизайн: Матвей Скоморохов</span>
      <div className={styles.contacts}>
        <span>Контакты:</span>
        <a href="https://github.com/MoneyTreesIsThePerfectPlaceForShade">
          GitHub
        </a>
        <a href="https://career.habr.com/takemetoyourleader">Хабр Карьера</a>
        <a href="https://ekaterinburg.hh.ru/resume/5cd6d16aff0b81c5a70039ed1f424348763365">
          hh.ru
        </a>
        <a href="https://t.me/warrenwatter">Telegram</a>
      </div>
    </div>
  );
};
