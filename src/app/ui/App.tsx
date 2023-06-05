import React from "react";
import styles from "./App.module.scss";
import MainPage from "../../pages/MainPage/MainPage";

export function App() {
  return (
    <div className={styles.container}>
      <MainPage />
    </div>
  );
}
