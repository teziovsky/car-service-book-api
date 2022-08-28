import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import BurgerMenu from "./BurgerMenu";

export default {
  title: "Elements/BurgerMenu",
  component: BurgerMenu,
  args: {
    isOpen: false,
  },
} as ComponentMeta<typeof BurgerMenu>;

export const BurgerMenuComponent: ComponentStory<typeof BurgerMenu> = (args) => <BurgerMenu {...args} />;
BurgerMenuComponent.storyName = "BurgerMenu";
