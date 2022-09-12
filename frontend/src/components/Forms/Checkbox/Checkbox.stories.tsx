import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import Checkbox from "./Checkbox";

export default {
  title: "Forms/Checkbox",
  component: Checkbox,
  args: {
    inputSize: "default",
    children: "Tak",
    disabled: false,
    checked: false,
  },
  argTypes: {
    inputSize: {
      control: "select",
      options: ["small", "default", "large"],
    },
  },
} as ComponentMeta<typeof Checkbox>;

export const ErrorMessageComponent: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;
ErrorMessageComponent.storyName = "Checkbox";
