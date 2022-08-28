import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import * as HeroIcons from "react-icons/hi";

import Button from "./Button";

const IconsList = Object.keys(HeroIcons).map((icon) => icon);

export default {
  title: "Elements/Button",
  component: Button,
  args: {
    size: "default",
    color: "accent",
    disabled: false,
    iconRight: false,
  },
  argTypes: {
    onClick: {
      handleClick: {
        action: "clicked",
      },
    },
    status: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
    },
    color: {
      control: "select",
      options: ["accent", "success", "info", "warning", "error"],
    },
    size: {
      control: "select",
      options: ["small", "default", "large"],
    },
    icon: {
      control: "select",
      options: IconsList,
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>{args.children}</Button>;

export const Primary = Template.bind({});
Primary.args = {
  status: "primary",
  children: "Add car",
  icon: "HiPlus",
};

export const Secondary = Template.bind({});
Secondary.args = {
  status: "secondary",
  children: "Sign In",
  icon: "HiMinus",
  iconRight: true,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  status: "tertiary",
  children: "Sign Up",
};

export const Icon = Template.bind({});
Icon.args = {
  status: "primary",
  icon: "HiPlus",
};
