import React, { FC } from "react";
import styles from "./TitleAndInput.module.scss";
import cn from "classnames";

interface ITitleAndInput {
  title: string;
  body: string;
  date: string;
  titleOnChange: Function;
  bodyOnChange: Function;
  dateOnChange: Function;
  blurHandler: Function;
  titleDirty: boolean;
  bodyDirty: boolean;
  titleError: string;
  bodyError: string;
}

const TitleAndInput: FC<ITitleAndInput> = ({
  title,
  body,
  date,
  titleOnChange,
  bodyOnChange,
  dateOnChange,
  blurHandler,
  titleDirty,
  bodyDirty,
  titleError,
  bodyError,
}) => {
  return (
    <>
      <div>
        <div className={styles.labelNInput}>
          <label htmlFor="title" className={styles.label}>
            Название
          </label>
          <input
            className={styles.input}
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => titleOnChange(e)}
            onBlur={(e) => blurHandler(e)}
          />
        </div>
        {titleDirty && titleError && (
          <span className={styles.error}>{titleError}</span>
        )}
      </div>
      <div>
        <div className={styles.labelNInput}>
          <label htmlFor="body" className={styles.label}>
            Описание
          </label>
          <textarea
            className={styles.textarea}
            id="body"
            name="body"
            value={body}
            onChange={(e) => bodyOnChange(e)}
            onBlur={(e) => blurHandler(e)}
            placeholder="Markdown разметка активна"
          />
        </div>
        {bodyDirty && bodyError && (
          <span className={styles.error}>{bodyError}</span>
        )}
      </div>
      <div>
        <div className={styles.labelNInput}>
          <label htmlFor="date" className={styles.label}>
            Дата
          </label>
          <input
            type="date"
            name="date"
            id="date"
            className={cn(styles.input, styles.date)}
            value={date}
            onChange={(e) => dateOnChange(e)}
          />
        </div>
      </div>
    </>
  );
};

export default TitleAndInput;
