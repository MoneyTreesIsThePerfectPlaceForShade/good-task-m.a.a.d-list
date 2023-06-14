import React, { FC, ReactElement } from "react";
import { Footer, Header } from "../../widgets";
import styles from "./Layout.module.scss";

interface ILayout {
  children: ReactElement;
}

export const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
