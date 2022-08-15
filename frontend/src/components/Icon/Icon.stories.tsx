import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import * as HeroIcons from "react-icons/hi";

import Icon from "./Icon";

const IconsList = Object.keys(HeroIcons).map((icon) => icon);

export default {
  title: "Icon",
  component: Icon,
  args: {
    icon: "HiPlus",
  },
  argTypes: {
    icon: {
      control: "select",
      options: IconsList,
    },
  },
} as ComponentMeta<typeof Icon>;

export const IconComponent: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;
IconComponent.storyName = "Icon";
