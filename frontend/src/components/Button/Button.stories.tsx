import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import Button from "./Button";

export default {
  title: "Button",
  component: Button,
  args: {},
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>{args.children}</Button>;

export const Primary = Template.bind({});
Primary.args = {
  status: "primary",
  children: "Add car",
};

export const Secondary = Template.bind({});
Secondary.args = {
  status: "secondary",
  children: "Sign In",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  status: "tertiary",
  children: "Sign In",
};
