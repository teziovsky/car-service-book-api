import { StyledBar, StyledBurgerMenu } from "components/Elements/BurgerMenu/BurgerMenu.styled";
import React from "react";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const BurgerMenu = ({ isOpen, setIsOpen }: Props) => {
  return (
    <StyledBurgerMenu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <StyledBar></StyledBar>
      <StyledBar></StyledBar>
      <StyledBar></StyledBar>
    </StyledBurgerMenu>
  );
};

export default BurgerMenu;
