import { StyledBar, StyledBurgerMenu } from "components/Elements/BurgerMenu/BurgerMenu.styled";
import React, { FC } from "react";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const BurgerMenu: FC<Props> = ({ isOpen, setIsOpen }) => {
  return (
    <StyledBurgerMenu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <StyledBar></StyledBar>
      <StyledBar></StyledBar>
      <StyledBar></StyledBar>
    </StyledBurgerMenu>
  );
};

export default BurgerMenu;
