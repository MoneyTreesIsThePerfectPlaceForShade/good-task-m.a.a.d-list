import React from "react";
import { Layout } from "../Layout/Layout";
import styles from "./About.module.scss";
import photo from "./imgs/photo.jpg";

export const About = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.name}>
          Матвей Скоморохов | Frontend-разработчик
        </h1>
        <div className={styles.description}>
          <img src={photo} alt="Матвей" className={styles.photo} />
          <p className={styles.techDescription}>
            При разработке этого приложения я использовал следующие технологии:
            <ul className={styles.techList}>
              <li>React</li>
              <li>Redux Toolkit</li>
              <li>TypeScript</li>
              <li>SCSS</li>
              <li>Jest</li>
              <li>Storybook</li>
              <li>
                <span className={styles.libs}>Небольшие библиотеки:</span>
                <ul className={styles.techList}>
                  <li>nanoid</li>
                  <li>classnames</li>
                  <li>react-icons</li>
                  <li>redux-persist</li>
                </ul>
              </li>
            </ul>
            Придерживался DRY, функционального программирования и Feature-Sliced
            Design.
          </p>
        </div>
      </div>
    </Layout>
  );
};
