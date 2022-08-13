import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import Button from "./Button";

export default {
  title: "Button",
  component: Button,
  args: {
    small: false,
    large: false,
  },
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>{args.children}</Button>;

export const Primary = Template.bind({});
Primary.args = {
  children: "Add car",
  secondary: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Sign In",
  secondary: true,
};
