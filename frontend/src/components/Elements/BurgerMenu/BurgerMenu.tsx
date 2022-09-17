import cx from "classnames";
import React from "react";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const BurgerMenu = ({ isOpen, setIsOpen }: Props) => {
  return (
    <button
      className={cx("burger", {
        opened: isOpen,
      })}
      onClick={() => setIsOpen(!isOpen)}>
      <span className="burger-bar"></span>
      <span className="burger-bar"></span>
      <span className="burger-bar"></span>
    </button>
  );
};

export default BurgerMenu;
