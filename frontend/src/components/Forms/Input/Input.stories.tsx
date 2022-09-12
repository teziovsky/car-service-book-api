import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import InputComponent from "./Input";

export default {
  title: "Forms/Input",
  component: InputComponent,
  args: {
    inputSize: "default",
    placeholder: "admin@example.com",
    disabled: false,
    value: "",
  },
  argTypes: {
    inputSize: {
      control: "select",
      options: ["small", "default", "large"],
    },
  },
} as ComponentMeta<typeof InputComponent>;

const Template: ComponentStory<typeof InputComponent> = (args) => (
  <InputComponent {...args}>{args.children}</InputComponent>
);

export const InputText = Template.bind({});
InputText.args = {
  tag: "input",
};

export const Textarea = Template.bind({});
Textarea.args = {
  tag: "textarea",
};

export const Select = Template.bind({});
Select.args = {
  tag: "select",
  children: (
    <>
      <option selected value={0}>
        --- Wybierz adres e-mail ---
      </option>
      <option value="teziovsky@gmail.com">teziovsky@gmail.com</option>
      <option value="jakub.soboczynski@icloud.com">jakub.soboczynski@icloud.com</option>
    </>
  ),
};
