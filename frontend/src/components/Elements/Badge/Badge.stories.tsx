import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import * as HeroIcons from "react-icons/hi";

import Badge from "./Badge";

const IconsList = Object.keys(HeroIcons).map((icon) => icon);

export default {
  title: "Elements/Badge",
  component: Badge,
  args: {
    size: "default",
    children: "Info",
    icon: "HiPlus",
    iconRight: false,
  },
  argTypes: {
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
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args}>{args.children}</Badge>;

export const Accent = Template.bind({});
Accent.args = {
  status: "accent",
};

export const Success = Template.bind({});
Success.args = {
  color: "success",
  children: "Sign In",
  icon: "HiMinus",
  iconRight: true,
};

export const Info = Template.bind({});
Info.args = {
  color: "info",
  children: "Sign Up",
};

export const Warning = Template.bind({});
Warning.args = {
  color: "warning",
  icon: "HiPlus",
};

export const Error = Template.bind({});
Error.args = {
  color: "error",
  icon: "HiPlus",
};
