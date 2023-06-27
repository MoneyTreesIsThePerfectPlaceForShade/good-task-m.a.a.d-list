import React, {FC, ReactNode, useState} from 'react';
import styles from './Dropdown.module.scss'
import cn from "classnames";

interface IDropdown{
  children: ReactNode;
  classNames?: string;
  isOpened: boolean;
  openHandler: Function;
}

export const Dropdown: FC<IDropdown> = ({children, classNames, isOpened,openHandler}) => {

  return (
    <div className={cn(styles.container, classNames)}>
      {!isOpened && <button className={styles.openBtn} onClick={()=>{openHandler()}} />}
      {isOpened && <div className={styles.children}>
        {children}
      </div>}
    </div>
  );
};
