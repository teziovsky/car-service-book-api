import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import Input from "./Input";

export default {
  title: "Forms/Input",
  component: Input,
  args: {
    inputSize: "default",
    as: "input",
    placeholder: "admin@example.com",
    disabled: false,
    value: "",
  },
  argTypes: {
    inputSize: {
      control: "select",
      options: ["small", "default", "large"],
    },
    as: {
      control: "select",
      options: ["input", "textarea"],
    },
  },
} as ComponentMeta<typeof Input>;

export const ErrorMessageComponent: ComponentStory<typeof Input> = (args) => <Input {...args} />;
ErrorMessageComponent.storyName = "Input";
