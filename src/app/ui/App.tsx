import React from "react";
import styles from "./App.module.scss";
import { MainPage } from "../../pages";

export function App() {
  return (
    <div className={styles.container}>
      {/*routing настроим*/}
      <MainPage />
    </div>
  );
}
