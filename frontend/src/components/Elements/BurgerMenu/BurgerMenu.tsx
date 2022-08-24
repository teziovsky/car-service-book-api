import cx from "classnames";
import React, { FC } from "react";

import styles from "./BurgerMenu.module.scss";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const BurgerMenu: FC<Props> = ({ isOpen, setIsOpen }) => {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className={cx(styles.burger, {
        [styles.open]: isOpen,
      })}>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
    </button>
  );
};

export default BurgerMenu;
